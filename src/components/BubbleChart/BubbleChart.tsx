import * as d3 from "d3";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";

interface BubbleChartData extends d3.SimulationNodeDatum {
  label: string;
  logo: string;
  width: number;
  height: number;
  radius?: number;
}

interface BubbleChartProps {
  data: BubbleChartData[];
}

const BubbleChart: React.FC<BubbleChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const defaultRadius = 100;

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const svgContainer = svg.node()?.getBoundingClientRect();
    const width = svgContainer?.width || 600;
    const height = svgContainer?.height || 400;

    const simulation = d3
      .forceSimulation<BubbleChartData>(data)
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.05))
      .force(
        "collide",
        d3
          .forceCollide((d) => defaultRadius)
          .strength(0.2)
          .iterations(2)
      );

    const groups = svg
      .selectAll<SVGGElement, BubbleChartData>("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", () => `translate(${width / 2}, ${height / 2})`) // Center the groups
      .attr("class", "flex items-center justify-center gap-4"); // Apply Tailwind CS

    groups
      .append("circle")
      .attr("r", (d) => d.radius || defaultRadius)
      .attr("fill", "transparent");

    groups
      .append("foreignObject")
      .attr("x", (d) => -d.width / 2)
      .attr("y", (d) => -d.height / 2)
      .attr("width", (d) => (d.radius || defaultRadius) * 2)
      .attr("height", (d) => (d.radius || defaultRadius) * 2)
      .append("xhtml:div")
      .append("div")
      .html((d) =>
        renderToStaticMarkup(
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={d.logo}
              width={d.width}
              height={d.height}
              alt={d.label}
              // layout="fill"
              objectFit="contain"
            />
            <h3 className="text-2xl">{d.label}</h3>
          </div>
        )
      );

    simulation.on("tick", () => {
      groups.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    });
  }, [data]);

  return (
    <svg ref={svgRef} width="100%" height="100%">
      {/* SVG content will go here */}
    </svg>
  );
};

export default BubbleChart;
