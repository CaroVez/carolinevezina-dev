import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("services", "routes/services.tsx"),
  route("realisations", "routes/realisations.tsx"),
  route("realisations/thanks-boss", "routes/realisations/thanks-boss.tsx"),
  route("realisations/terre-de-thes", "routes/realisations/terre-de-thes.tsx"),
  route(
    "realisations/l-agrume-indigo",
    "routes/realisations/l-agrume-indigo.tsx"
  ),
  route("qui-suis-je", "routes/qui-suis-je.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
