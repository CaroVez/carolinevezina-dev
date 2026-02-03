import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("mes-services", "routes/services.tsx"),
  route("mes-realisations", "routes/realisations.tsx"),
  route("mes-realisations/thanks-boss", "routes/realisations/thanks-boss.tsx"),
  route(
    "mes-realisations/terre-de-thes",
    "routes/realisations/terre-de-thes.tsx",
  ),
  route(
    "mes-realisations/l-agrume-indigo",
    "routes/realisations/l-agrume-indigo.tsx",
  ),
  route("qui-suis-je", "routes/qui-suis-je.tsx"),
  route("me-joindre", "routes/contact.tsx"),
  route("politique-de-confidentialite", "routes/politique.tsx"),
] satisfies RouteConfig;
