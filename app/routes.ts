import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("services", "routes/services.tsx"),
  route("realisations", "routes/realisations.tsx"),
  route("qui-suis-je", "routes/qui-suis-je.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
