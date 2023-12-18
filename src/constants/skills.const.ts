import { StaticImageData } from "next/image";
import AzureAadLogo from "../../public/azure-aad.png";
import AzureAdB2CLogo from "../../public/azure-ad-b2c.png";
import AzureFunctionAppsLogo from "../../public/azure-function-apps.png";
import AzurePipelinesLogo from "../../public/azure-pipelines.png";
import AzureStorageAccountLogo from "../../public/azure-storage.png";
import AzureLogo from "../../public/azure.png";
import BicepLogo from "../../public/bicep.png";
import CssLogo from "../../public/css.png";
import DockerLogo from "../../public/docker.png";
import ExperssLogo from "../../public/express-js.png";
import FigmaLogo from "../../public/figma.png";
import HelmLogo from "../../public/helm.png";
import HtmlLogo from "../../public/html.png";
import JavascriptLogo from "../../public/javascript.png";
import KafkaLogo from "../../public/kafka.png";
import MicroservicesLogo from "../../public/microservices.png";
import MongoLogo from "../../public/mongodb.png";
import MicrosoftSqlServerLogo from "../../public/ms-sql-server.png";
import NestJsLogo from "../../public/nestjs.png";
import NextJsLogo from "../../public/next.png";
import NodeJsLogo from "../../public/nodejs.png";
import PostgresLogo from "../../public/postgres.png";
import ReactNative from "../../public/react-native.png";
import ReactLogo from "../../public/react.png";
import RedisLogo from "../../public/redis.png";
import ServiceBus from "../../public/service-bus.png";
import TailwindLogo from "../../public/tailwind.png";
import TypescriptLogo from "../../public/typescript.png";

export type Skill = {
  label: string;
  logo: StaticImageData;
  radius: number;
  width?: number;
  height?: number;
};

export type SkillsCategory = {
  name: string;
  skills: Skill[];
  isHorizontal?: boolean;
};

export const SKILLS = {
  ReactJS: { label: "React.js", logo: ReactLogo, radius: 80 },
  ReactNative: { label: "React Native", logo: ReactNative, radius: 80 },
  MongoDB: { label: "MongoDB", logo: MongoLogo, radius: 80 },
  AzureAdB2C: { label: "Azure AD B2C", logo: AzureAdB2CLogo, radius: 80 },
  Typescript: {
    label: "Typescript",
    logo: TypescriptLogo,
    radius: 80,
  },
  Javascript: {
    label: "Javascript",
    logo: JavascriptLogo,
    radius: 80,
  },
  NodeJS: { label: "Node.js", logo: NodeJsLogo, radius: 80 },
  HTML: { label: "HTML", logo: HtmlLogo, radius: 80 },
  CSS: { label: "CSS", logo: CssLogo, radius: 80 },
  NextJS: { label: "Next.js", logo: NextJsLogo, radius: 80 },
  Tailwind: {
    label: "Tailwind",
    logo: TailwindLogo,
    radius: 80,
  },
  Figma: { label: "Figma", logo: FigmaLogo, radius: 80 },
  Redis: { label: "Redis", logo: RedisLogo, radius: 80 },
  MicrosoftSqlServer: {
    label: "Microsoft SQL Server",
    logo: MicrosoftSqlServerLogo,
    radius: 80,
  },
  PostgresSQL: {
    label: "PostgreSQL",
    logo: PostgresLogo,
    width: 100,
    height: 100,
    radius: 80,
  },
  ExpressJS: {
    label: "Express.js",
    logo: ExperssLogo,
    width: 100,
    height: 100,
    radius: 80,
  },
  NestJS: {
    label: "Nest.js",
    logo: NestJsLogo,
    width: 100,
    height: 100,
    radius: 80,
  },
  ServiceBus: { label: "Service Bus", logo: ServiceBus, radius: 80 },
  FunctionApps: {
    label: "Function Apps",
    logo: AzureFunctionAppsLogo,
    width: 100,
    height: 100,
    radius: 80,
  },
  MicrosoftAzureServices: {
    label: "Microsoft Azure Services",
    logo: AzureLogo,
    width: 100,
    height: 100,
    radius: 80,
  },
  MicrosoftAzureStorageAccount: {
    label: "Storage Account",
    logo: AzureStorageAccountLogo,
    width: 100,
    height: 100,
    radius: 80,
  },
  ApacheKafka: { label: "Apache Kafka", logo: KafkaLogo, radius: 80 },
  Helm: { label: "Helm", logo: HelmLogo, radius: 80 },
  AzureActiveDirectory: {
    label: "Entra ID",
    logo: AzureAadLogo,
    width: 100,
    height: 100,
    radius: 80,
  },
  AzurePipelines: {
    label: "Azure Pipelines",
    logo: AzurePipelinesLogo,
    width: 100,
    height: 100,
    radius: 80,
  },
  CICD: {
    label: "CI/CD",
    logo: AzurePipelinesLogo,
    width: 100,
    height: 100,
    radius: 80,
  },
  Docker: {
    label: "Docker",
    logo: DockerLogo,
    width: 100,
    height: 100,
    radius: 80,
  },
  IaC: { label: "IaC", logo: BicepLogo, width: 100, height: 100, radius: 80 },
  Microservices: {
    label: "Microservices",
    logo: MicroservicesLogo,
    width: 100,
    height: 100,
    radius: 80,
  },
} satisfies Record<string, Skill>;

export const SKILLS_CATEGORIES: Record<string, SkillsCategory> = {
  frontend: {
    name: "Frontend",
    skills: [
      SKILLS.ReactJS,
      SKILLS.ReactNative,
      SKILLS.Typescript,
      SKILLS.Javascript,
      SKILLS.HTML,
      SKILLS.CSS,
      SKILLS.NextJS,
      SKILLS.Tailwind,
      SKILLS.Figma,
    ],
  },
  backend: {
    name: "Backend",
    skills: [SKILLS.NodeJS, SKILLS.ExpressJS, SKILLS.NestJS],
  },
  db: {
    name: "Database",
    skills: [
      SKILLS.MongoDB,
      SKILLS.MicrosoftSqlServer,
      SKILLS.PostgresSQL,
      SKILLS.Redis,
    ],
  },
  azureCloud: {
    name: "Azure Cloud",
    skills: [
      SKILLS.FunctionApps,
      SKILLS.MicrosoftAzureServices,
      SKILLS.MicrosoftAzureStorageAccount,
      SKILLS.AzureActiveDirectory,
      SKILLS.AzureAdB2C,
    ],
  },
  devops: {
    name: "DevOps",
    skills: [SKILLS.CICD, SKILLS.Docker, SKILLS.IaC, SKILLS.Microservices],
  },
  other: {
    name: "Other",
    skills: [SKILLS.ApacheKafka, SKILLS.Helm],
  },
};
