import type { Route } from "./+types/qui-suis-je";
import Presentation from "../components/Presentation";
import photoProfil from "../assets/profil-gold.png";

import iconFigma from "../assets/figma-original.svg";
import iconWordpress from "../assets/wordpress-original.png";
import iconHTML5 from "../assets/html5-original.svg";
import iconCSS3 from "../assets/css3-original.svg";
import iconJavascript from "../assets/javascript-original.png";
import iconTypescript from "../assets/typescript-original.svg";
import iconVuejs from "../assets/vuejs-original.svg";
import iconReact from "../assets/react-original.svg";
import iconPhotoshop from "../assets/photoshop-original.svg";
import iconIllustrator from "../assets/illustrator-original.svg";
import iconIndesign from "../assets/indesign-original.svg";
import iconAftereffects from "../assets/aftereffects-original.svg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "qui suis-je ? | Caroline Vézina - développeur web front-end" },
    {
      name: "description",
      content:
        "Caroline Vézina : Développeuse web front-end & Design UI. Découvrez mon parcours et mes compétences.",
    },
  ];
}

export default function About() {
  const formatTitle = (title: string) => {
    // On sépare le texte à chaque 'm', 'M', 'n' ou 'N'
    const parts = title.split(/(m|n)/gi);

    return parts.map((part, index) =>
      /m|n/i.test(part) ? (
        <span key={index} className="alt">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <main className="mx-auto">
      {/* Section Présentation */}
      <Presentation
        image={photoProfil}
        imageClass="image-profil-about"
        title="qui suis-je ?"
        description={
          <>
            Je suis <b>développeur web front-end</b> passionnée par la création
            d'expériences numériques élégantes, intuitives et centrées sur
            l'utilisateur. J'aime transformer des idées en interfaces claires et
            harmonieuses, où design et fonctionnalité se rencontrent
            naturellement.
          </>
        }
        showArrows={true}
        showButtons={false}
      />

      <section className="about pb-[12vh]">
        <div className="historique">
          <h5>{formatTitle("mon historique")}</h5>
          <p>
            Mon parcours n'a pas commencé dans le code, mais dans le design
            d'espaces. Pendant plus de neuf ans, j'ai travaillé comme
            technicienne en architecture pour des aménagements intérieurs, avant
            de me tourner vers la gestion d'immeubles en copropriété. Ces années
            m'ont appris à organiser, planifier, collaborer et surtout à donner
            vie à des projets concrets - des qualités que je mets aujourd'hui au
            service du web.
          </p>
          <br />
          <p>
            Peu à peu, ma curiosité pour les outils numériques s'est transformée
            en une véritable passion. J'ai suivi une formation en{" "}
            <b>développement web</b>, puis une autre en <b>design UI</b>, pour
            allier la logique du code à la sensibilité du design. Aujourd'hui,
            je retrouve dans la conception d'interfaces la même satisfaction que
            dans l'aménagement d'un espace{"\u00A0"}: créer quelque chose de
            beau, fonctionnel et intuitif.
          </p>
        </div>

        <div className="experience">
          <h5>{formatTitle("mon expérience")}</h5>
          <p>
            Mes premières expériences en développement web m'ont amenée à
            explorer le monde des interfaces réactives avec <b>Vue.js</b>, puis
            à concevoir des sites sous <b>WordPress</b>. Ces projets m'ont donné
            le goût du code bien structuré, des animations fluides et des
            expériences utilisateur soignées - un équilibre entre logique et
            créativité que j'aime retrouver dans chaque réalisation.
          </p>
        </div>

        <div className="competences-techniques">
          <h5>{formatTitle("mes compétences techniques")}</h5>

          <ul className="icones">
            <li>
              <img src={iconReact} alt="logo react" />
            </li>
            <li>
              <img src={iconVuejs} alt="logo vue-js" />
            </li>
          </ul>
          <p>
            Avec les frameworks pour créer des applications monopage, je conçois
            des interfaces dynamiques et réactives à l'aide de <b>React</b> et{" "}
            <b>Vue.js</b>.
          </p>

          <ul className="icones">
            <li>
              <img src={iconHTML5} alt="logo html5" />
            </li>
            <li>
              <img src={iconCSS3} alt="logo css3" />
            </li>
            <li>
              <img src={iconJavascript} alt="logo javascript" />
            </li>
            <li>
              <img src={iconTypescript} alt="logo typescript" />
            </li>
          </ul>
          <p>
            Côté langages front-end, j'intègre des interfaces responsives et
            fluides en <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b> et{" "}
            <b>TypeScript</b>.
          </p>

          <ul className="icones">
            <li>
              <img src={iconWordpress} alt="logo wordpress" />
            </li>
          </ul>
          <p>
            En création de site, je développe et personnalise des sites{" "}
            <b>WordPress</b> performants et faciles à gérer.
          </p>

          <ul className="icones">
            <li>
              <img src={iconFigma} alt="logo figma" />
            </li>
          </ul>
          <p>
            En conception d'interfaces, je crée des maquettes modernes et
            intuitives avec <b>Figma</b>, centrées sur l'expérience utilisateur.
          </p>

          <ul className="icones">
            <li>
              <img src={iconPhotoshop} alt="logo adobe photoshop" />
            </li>
            <li>
              <img src={iconIllustrator} alt="logo adobe illustrator" />
            </li>
            <li>
              <img src={iconIndesign} alt="logo adobe indesign" />
            </li>
            <li>
              <img src={iconAftereffects} alt="logo adobe aftereffects" />
            </li>
          </ul>
          <p>
            Grâce aux outils design, comme <b>Photoshop</b>, <b>Illustrator</b>,{" "}
            <b>InDesign</b> et <b>After Effects</b>, je réalise des visuels
            cohérents et percutants.
          </p>
        </div>
      </section>
    </main>
  );
}
