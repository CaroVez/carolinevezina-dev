import type { Route } from "./+types/thanks-boss";
import Presentation from "../../components/Presentation";
import { div } from "framer-motion/client";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "thanks-boss | Caroline Vézina - développeur web front-end",
    },
    {
      name: "description",
      content:
        "Découvrez le projet Thank-Boss, une plateforme de recherche d'emplois.",
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
        descriptionClass="project-description"
        description={
          <div className="space-y-4">
            <p>
              participation au développement d'une plateforme de recherche
              d'emplois, incluant le développement et l'intégration des
              différentes pages du site à partir des maquettes fournies par les
              designers UX/UI.
            </p>
            <p>
              J'ai également contribué à l'implémentation de nouvelles
              fonctionnalités en collaboration avec l'équipe backend, notamment
              pour la gestion des données, les appels API et les interactions
              dynamiques.
            </p>
          </div>
        }
        showArrows={true}
        showButtons={false}
      />

      <section className="projet">
        <div className="item text video1-text">
          <p>création du calendrier par le recruteur</p>
        </div>
        <div className="item video1">
          <video className="video1" controls disablePictureInPicture muted>
            <source
              src="../images/thanksboss/tb_entretiens-part1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="item text video2-text">
          <p>acceptation d'un entretien par le candidat</p>
        </div>
        <div className="item video2">
          <video className="video2" controls disablePictureInPicture muted>
            <source
              src="../images/thanksboss/tb_entretiens-part2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    </main>
  );
}
