import type { Route } from "./+types/terre-de-thes";
import Presentation from "../../components/Presentation";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "terre de thés | Caroline Vézina - développeur web front-end",
    },
    {
      name: "description",
      content:
        "Découvrez le projet Terre de Thés, une identité visuelle complète.",
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
        subtitle="formation designer ui | projet présenté lors de ma soutenance finale"
        subtitleClass="project-subtitle"
        descriptionClass="project-description"
        description={
          <div className="space-y-4">
            <p>
              Élaboration d'une nouvelle identité visuelle pour un salon de thé
              écoresponsable situé à Marseille.
            </p>
            <p>
              Ce qui inclus la création d'un logo ainsi qu'une charte graphique,
              la production de maquettages pour leur site internet, une
              animation vidéo promotionnelle de leur site et quelques supports
              de communication à imprimer.
            </p>
          </div>
        }
        showArrows={true}
        showButtons={false}
      />

      <section className="projet terre">
        <div className="text moodboard-text">
          <p>planche d'inspiration pour la création du logo</p>
        </div>
        <div className="item moodboard">
          <img
            src="../images/terredethes/moodboard.png"
            alt="planche d'inspiration"
          />
        </div>
        <div className="text logos-text">
          <p>déclinaisons du logo</p>
        </div>
        <div className="item logo1">
          <img src="../images/terredethes/logo1.png" alt="logo salon de thé" />
        </div>
        <div className="item logo2">
          <img src="../images/terredethes/logo2.png" alt="logo salon de thé" />
        </div>
        <div className="item logo3">
          <img src="../images/terredethes/logo3.png" alt="logo salon de thé" />
        </div>
        <div className="item logo4">
          <img src="../images/terredethes/logo4.png" alt="logo salon de thé" />
        </div>
        <div className="text arborescence-text">
          <p>arborescence du site web</p>
        </div>
        <div className="item arborescence">
          <img
            src="../images/terredethes/arborescence.png"
            alt="arborescence site web salon de thé"
          />
        </div>
        <div className="text mobiles-text">
          <p>maquette mobile du site web</p>
        </div>
        <div className="item video-mobile">
          <video
            className="video"
            controls
            controlsList="nodownload"
            disablePictureInPicture
            muted
          >
            <source
              src="../images/terredethes/mobile_small.mp4"
              type="video/mp4"
            />
            Le navigateur ne supporte pas la lecture de la vidéo. La vidéo
            montre une démonstration rapide de l'interface utilisateur et de
            l'expérience de navigation du site web "Terre de thés".
          </video>
        </div>
        {/* 
        <div className="item mobile1">
          <img
            src="../images/terredethes/mobile1.png"
            alt="maquette site web page accueil version mobile"
          />
        </div>
        <div className="item mobile2">
          <img
            src="../images/terredethes/mobile2.png"
            alt="maquette site web page les thés version mobile"
          />
        </div>
        <div className="item mobile3">
          <img
            src="../images/terredethes/mobile3.png"
            alt="maquette site web page thé noir version mobile"
          />
        </div>
        <div className="item mobile4">
          <img
            src="../images/terredethes/mobile4.png"
            alt="maquette site web page earl grey version mobile"
          />
        </div>
        <div className="item mobile5">
          <img
            src="../images/terredethes/mobile5.png"
            alt="maquette site web page notre histoire version mobile"
          />
        </div>
        <div className="item mobile6">
          <img
            src="../images/terredethes/mobile6.png"
            alt="maquette site web page contact version mobile"
          />
        </div> */}
        <div className="text desktops-text">
          <p>maquette desktop du site web</p>
        </div>
        <div className="item video-desktop">
          <video
            className="video"
            controls
            controlsList="nodownload"
            disablePictureInPicture
            muted
          >
            <source
              src="../images/terredethes/desktop_small.mp4"
              type="video/mp4"
            />
            Le navigateur ne supporte pas la lecture de la vidéo. La vidéo
            montre une démonstration rapide de l'interface utilisateur et de
            l'expérience de navigation du site web "Terre de thés".
          </video>
        </div>
        {/*
        <div className="item desktop1">
          <img
            src="../images/terredethes/desktop1.png"
            alt="maquette site web page accueil version desktop"
          />
        </div>
        <div className="item desktop2">
          <img
            src="../images/terredethes/desktop2.png"
            alt="maquette site web page les thés version desktop"
          />
        </div>
        <div className="item desktop3">
          <img
            src="../images/terredethes/desktop3.png"
            alt="maquette site web page thé noir version desktop"
          />
        </div>
        <div className="item desktop4">
          <img
            src="../images/terredethes/desktop4.png"
            alt="maquette site web page earl grey version desktop"
          />
        </div>
        <div className="item desktop5">
          <img
            src="../images/terredethes/desktop5.png"
            alt="maquette site web page notre histoire version desktop"
          />
        </div>
        <div className="item desktop6">
          <img
            src="../images/terredethes/desktop6.png"
            alt="maquette site web page contact version desktop"
          />
        </div>
        */}
        <div className="text video-text">
          <p>vidéo promotionnelle du site web</p>
        </div>
        <div className="item video">
          <video
            className="video"
            controls
            controlsList="nodownload"
            disablePictureInPicture
            muted
          >
            <source src="../images/terredethes/video.mp4" type="video/mp4" />
            Le navigateur ne supporte pas la lecture de la vidéo. La vidéo
            montre une démonstration rapide de l'interface utilisateur et de
            l'expérience de navigation du site web "Terre de thés".
          </video>
        </div>
        <div className="text mockups-text">
          <p>affiches pour promouvoir les ateliers</p>
        </div>
        <div className="item mockup1">
          <img
            src="../images/terredethes/mockup1.png"
            alt="affiche promotionnelle atelier dégustation"
          />
        </div>
        <div className="item mockup2">
          <img
            src="../images/terredethes/mockup2.png"
            alt="affiche promotionnelle atelier bricolage"
          />
        </div>
        <div className="text packagings-text">
          <p>emballages des poches de thés avec carte de visite détachable</p>
        </div>
        <div className="item packaging4">
          <img
            src="../images/terredethes/packaging4.jpg"
            alt="emballage poche de thé recto"
          />
        </div>
        <div className="item packaging5">
          <img
            src="../images/terredethes/packaging5.jpg"
            alt="emballage poche de thé verso"
          />
        </div>
        <div className="item packaging1">
          <img
            src="../images/terredethes/packaging1.jpg"
            alt="photo d'emballage poche de thé"
          />
        </div>
        <div className="item packaging2">
          <img
            src="../images/terredethes/packaging2.jpg"
            alt="photo d'emballage poche de thé"
          />
        </div>
        <div className="item packaging3">
          <img
            src="../images/terredethes/packaging3.jpg"
            alt="photo d'emballage poche de thé"
          />
        </div>
        <div className="text menus-text">
          <p>menu</p>
        </div>
        <div className="item menu1">
          <img
            src="../images/terredethes/menu1.jpg"
            alt="menu salon de thé recto"
          />
        </div>
        <div className="item menu2">
          <img
            src="../images/terredethes/menu2.jpg"
            alt="menu salon de thé verso"
          />
        </div>
      </section>
    </main>
  );
}
