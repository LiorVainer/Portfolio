import * as d3 from "d3";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";
interface BubbleChartData extends d3.SimulationNodeDatum {
  label: string;
  logo: string;
  width: number;
  height: number;
  radius: number;
}

interface BubbleChartProps {
  data: BubbleChartData[];
}

// ... (your imports and interfaces)

// ... (your imports and interfaces)

// ... (your imports and interfaces)

// ... (your imports and interfaces)

const BubbleChart: React.FC<BubbleChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const defaultRadius = 100;
  const collisionRadius = defaultRadius - 5; // Increase the collision radius for more space
  const shadowColor = "rgba(80, 80, 80, 0.8)"; // Lighter grey color for the shadow

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const svgContainer = svg.node()?.getBoundingClientRect();
    const width = svgContainer?.width || 1000;
    const height = svgContainer?.height || 400;389118

    const simulation = d3
      .forceSimulation<BubbleChartData>(data)
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.05))
      .force(
        "collide",
        d3
          .forceCollide((d) => collisionRadius) // Use the increased collision radius
          .strength(0.2)
          .iterations(2)
      );

    const groups = svg
      .selectAll<SVGGElement, BubbleChartData>("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", () => `translate(${width / 2}, ${height / 2})`)
      .attr("class", "bubble-group flex items-center justify-center gap-4");

    groups
      .append("circle")
      .attr("r", (d) => d.radius || defaultRadius)
      .attr("fill", "white")
      .style("filter", `url(#drop-shadow-${shadowColor})`); // Apply a custom shadow color

    svg
      .append("defs")
      .append("filter")
      .attr("id", `drop-shadow-${shadowColor}`)
      .attr("color-interpolation-filters", "sRGB")
      .append("feDropShadow")
      .attr("dx", 0)
      .attr("dy", 0)
      .attr("stdDeviation", 10)
      .attr("flood-color", shadowColor); // Set the flood color to the custom shadow color

    groups
      .append("foreignObject")
      .attr("x", (d) => -(d.radius || defaultRadius))
      .attr("y", (d) => -(d.radius || defaultRadius))
      .attr("width", (d) => (d.radius || defaultRadius) * 2)
      .attr("height", (d) => (d.radius || defaultRadius) * 2)
      // .append("xhtml:div")
      // .style("width", "100%")
      // .style("height", "100%")
      .style("display", "flex")
      .style("flexDirection", "column")
      .style("alignItems", "center")
      .style("justifyContent", "center")
      .html((d) =>
        renderToStaticMarkup(
          <div className="flex flex-col items-center justify-center w-full h-full text-center">
            <div className="flex flex-col items-center justify-center w-4/5 h-4/5 text-center gap-2">
              <Image
                src={d.logo}
                width={d.radius * 0.8} // Ensure the image fits within the bubble
                height={d.radius * 0.8} // Ensure the image fits within the bubble
                alt={d.label}
                objectFit="contain"
              />
              <h3 className="text-sm text-black">{d.label}</h3>
            </div>
          </div>
        )
      );

    simulation.on("tick", () => {
      groups.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    });
  }, [data]);

  return (
    <svg ref={svgRef} width="200rem" height="100%">
      {/* SVG content will go here */}
    </svg>
  );
};

export default BubbleChart;
