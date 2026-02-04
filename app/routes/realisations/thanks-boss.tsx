import type { Route } from "./+types/thanks-boss";
import { useEffect, useRef } from "react";
import Presentation from "../../components/Presentation";
import imageProject from "../../../public/images/thanksboss/vignette.png";

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
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const speed = 1.25;
    if (videoRef1.current) videoRef1.current.playbackRate = speed;
    if (videoRef2.current) videoRef2.current.playbackRate = speed;
    if (videoRef3.current) videoRef3.current.playbackRate = speed;
  }, []);

  return (
    <main className="mx-auto">
      {/* Section Présentation */}
      <Presentation
        image={imageProject}
        imageClass="image-project-realisations"
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

      <section className="projet boss">
        <div className="text video1-text">
          <p>création du calendrier par le recruteur</p>
        </div>
        <div className="item video1">
          <video
            ref={videoRef1}
            className="video1 video-no-sound"
            controls
            controlsList="nodownload"
            disablePictureInPicture
            muted
          >
            <source
              src="../images/thanksboss/tb_entretiens-part1_recruteur.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="text video2-text">
          <p>acceptation d'un entretien par le candidat</p>
        </div>
        <div className="item video2">
          <video
            ref={videoRef2}
            className="video2 video-no-sound"
            controls
            controlsList="nodownload"
            disablePictureInPicture
            muted
          >
            <source
              src="../images/thanksboss/tb_entretiens-part2_candidat.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="text video3-text">
          <p>entretien prochain par le recruteur</p>
        </div>
        <div className="item video3">
          <video
            ref={videoRef3}
            className="video3 video-no-sound"
            controls
            controlsList="nodownload"
            disablePictureInPicture
            muted
          >
            <source
              src="../images/thanksboss/tb_entretiens-part3_recruteur.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    </main>
  );
}
