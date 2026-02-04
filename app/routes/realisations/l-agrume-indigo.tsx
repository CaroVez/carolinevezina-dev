import type { Route } from "./+types/l-agrume-indigo";
import Presentation from "../../components/Presentation";
import imageProject from "../../../public/images/lagrumeindigo/vignette.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "l'agrume indigo | Caroline Vézina - développeur web front-end",
    },
    {
      name: "description",
      content:
        "Découvrez le projet L'Agrume Indigo, une application web de gestion de droit d'accès.",
    },
  ];
}

export default function LAgrumeIndigo() {
  return (
    <main className="mx-auto">
      {/* Section Présentation */}
      <Presentation
        image={imageProject}
        imageClass="image-profil-realisations"
        title="l'argume indigo"
        subtitle="formation développeur web | projet présenté lors de ma soutenance finale"
        subtitleClass="project-subtitle"
        descriptionClass="project-description"
        description={
          <div className="space-y-4">
            <p>
              Développement d'une application web de gestion de droit d'accès.
              Création de différents rôles et réalisation d'une interface
              personnalisée au type d'utilisateur (adaptable à tous les formats
              d'écran).
            </p>
            <p>
              Le sujet imposé : Une grande Marque de salle de sport souhaite la
              création d'une application web pour son équipe qui gère leurs
              différentes franchises et leur donner accès aux outils en ligne.
              L'administration de la Marque doit pouvoir gérer la création de
              nouvelles franchises ainsi que leurs salles de sport et leur
              associer un utilisateur. Elle pourra également gérer l'accès aux
              outils disponibles de chaque partenaire selon le contrat signé
              avec ces derniers.
            </p>
          </div>
        }
        showArrows={true}
        showButtons={false}
      />

      <section className="projet agrume">
        <div className="text video1-text">
          <p>gérant de salle de sport</p>
        </div>
        <div className="item video1">
          <video
            className="video1 video-no-sound"
            controls
            controlsList="nodownload"
            disablePictureInPicture
            muted
          >
            <source
              src="../images/lagrumeindigo/GerantH.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="text video2-text">
          <p>directeur de franchise</p>
        </div>
        <div className="item video2">
          <video
            className="video2 video-no-sound"
            controls
            controlsList="nodownload"
            disablePictureInPicture
            muted
          >
            <source
              src="../images/lagrumeindigo/DirecteurH.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="text video3-text">
          <p>administrateur</p>
        </div>
        <div className="item video3">
          <video
            className="video3 video-no-sound"
            controls
            controlsList="nodownload"
            disablePictureInPicture
            muted
          >
            <source src="../images/lagrumeindigo/AdminH.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </main>
  );
}
