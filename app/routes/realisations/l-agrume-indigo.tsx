import type { Route } from "./+types/l-agrume-indigo";
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

export default function LAgrumeIndigo() {
  return (
    <main className="mx-auto">
      {/* Section Présentation */}
      <Presentation
        imageClass="image-profil-about"
        title="l'argume indigo"
        subtitle="formation développeur web | projet présenté lors de ma soutenance"
        subtitleClass="project-subtitle"
        description={
          <>
            Développement d'une application web de gestion de droit d'accès.
            Création de différents rôles et réalisation d'une interface
            personnalisée au type d'utilisateur (adaptable à tous les formats
            d'écran). Le sujet imposé : Une grande Marque de salle de sport
            souhaite la création d'une application web pour son équipe qui gère
            leurs différentes franchises et leur donner accès aux outils en
            ligne. L'administration de la Marque doit pouvoir gérer la création
            de nouvelles franchises ainsi que leurs salles de sport et leur
            associer un utilisateur. Elle pourra également gérer l'accès aux
            outils disponibles de chaque partenaire selon le contrat signé avec
            ces derniers. Les franchisés et les gérants de salles de sport
            doivent quant à eux pouvoir utiliser les outils en lignes selon leur
            contrat respectif, sans pouvoir toutefois modifier leur contrat.
          </>
        }
        showArrows={true}
        showButtons={false}
      />

      <section></section>
    </main>
  );
}
