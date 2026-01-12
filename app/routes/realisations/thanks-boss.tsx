import type { Route } from "./+types/thanks-boss";
import Presentation from "../../components/Presentation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Caroline Vézina - mes réalisations" },
    {
      name: "description",
      content:
        "Découvrez mon portfolio : projets clients, personnels et formations. Témoignages de ma passion pour le développement web front-end et le design UI.",
    },
  ];
}

export default function ThanksBoss() {
  return (
    <main className="mx-auto">
      {/* Section Présentation */}
      <Presentation
        imageClass="image-profil-about"
        title="thanks-boss"
        subtitle="contrat en freelance"
        subtitleClass="project-subtitle"
        description={
          <>
            participation au développement d'une plateforme de recherche
            d'emplois, incluant le développement et l'intégration des
            différentes pages du site à partir des maquettes fournies par les
            designers UX/UI. J'ai également contribué à l'implémentation de
            nouvelles fonctionnalités en collaboration avec l'équipe backend,
            notamment pour la gestion des données, les appels API et les
            interactions dynamiques.
          </>
        }
        showArrows={true}
        showButtons={false}
      />

      <section></section>
    </main>
  );
}
