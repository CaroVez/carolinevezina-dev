import type { Route } from "./+types/terre-de-thes";
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

export default function TerreDeThes() {
  return (
    <main className="mx-auto">
      {/* Section Présentation */}
      <Presentation
        imageClass="image-profil-about"
        title="terre de thés"
        subtitle="formation designer UI | projet présenté lors de ma soutenance"
        subtitleClass="project-subtitle"
        description={
          <>
            Élaboration d'une nouvelle identité visuelle pour un salon de thé
            écoresponsable situé à Marseille. Ce qui inclus la création d'un
            logo ainsi qu'une charte graphique, la production de maquettages
            pour leur site internet, une animation vidéo promotionnelle de leur
            site et quelques supports de communication à imprimer.
          </>
        }
        showArrows={true}
        showButtons={false}
      />

      <section></section>
    </main>
  );
}
