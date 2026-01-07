import type { Route } from "./+types/qui-suis-je";
import photoProfil from "../assets/profil-gold.png";
import iconFigma from "../assets/figma-original.svg";
import iconWordpress from "../assets/wordpress-original.png";
import iconHTML5 from "../assets/html5-original.svg";
import iconCSS3 from "../assets/css3-original.svg";
import iconJavascript from "../assets/javascript-original.png";
import iconVuejs from "../assets/vuejs-original.svg";
import iconReact from "../assets/react-original.svg";
import iconPhotoshop from "../assets/photoshop-original.svg";
import iconIllustrator from "../assets/illustrator-original.svg";
import iconIndesign from "../assets/indesign-original.svg";
import iconAftereffects from "../assets/aftereffects-original.svg";

// C'est ici qu'on définit le titre de l'onglet dans le navigateur
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Caroline Vézina - qui suis-je ?" },
    {
      name: "description",
      content:
        "Caroline Vézina : Développeuse web front-end & Design UI. Découvrez mon parcours, mes compétences et mon approche créative.",
    },
  ];
}

export default function About() {
  return (
    <main className="container mx-auto">
      {/* Section Présentation (Inspirée de ton HTML) */}
      <section className="presentation">
        <img
          src={photoProfil}
          alt="Illustration de Caroline Vézina"
          className="image-profil-4"
        />
        <h1>
          <span className="typewriter">
            <span className="code">&lt;h1&gt;</span>
            qui suis-je ?<span className="code">&lt;/h1&gt;</span>
          </span>
        </h1>
        <p>
          Je suis <b>développeur web front-end</b> passionnée par la création
          d'expériences numériques élégantes, intuitives et centrées sur
          l'utilisateur. J'aime transformer des idées en interfaces claires et
          harmonieuses, où design et fonctionnalité se rencontrent
          naturellement.
        </p>
        <div className="arrows">
          {[0, 1, 2].map((i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="animate-blink-arrow opacity-0"
              style={{ animationDelay: `${i * 0.3}s` }} // Délai progressif dynamique
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          ))}
        </div>
      </section>

      <section className="about pt-[6vh] pb-[12vh] md:pt-[18vh]">
        <div className="historique">
          <h5>
            <span className="alt">m</span>o<span className="alt">n</span>{" "}
            historique
          </h5>
          <p>
            Mon parcours n'a pas commencé dans le code, mais dans le design
            d'espaces. Pendant plus de neuf ans, j'ai travaillé comme
            dessinatrice en aménagement intérieur, avant de me tourner vers la
            gestion d'immeubles en copropriété. Ces années m'ont appris à
            organiser, planifier, collaborer et surtout à donner vie à des
            projets concrets - des qualités que je mets aujourd'hui au service
            du web.
          </p>
          <p>
            Peu à peu, ma curiosité pour les outils numériques s'est transformée
            en une véritable passion. J'ai suivi une formation en{" "}
            <b>développement web</b>, puis une autre en <b>design UI</b>, pour
            allier la logique du code à la sensibilité du design. Aujourd'hui,
            je retrouve dans la conception d'interfaces la même satisfaction que
            dans l'aménagement d'un espace : créer quelque chose de beau,
            fonctionnel et intuitif.
          </p>
        </div>

        <div className="experience">
          <h5>
            <span className="alt">m</span>o<span className="alt">n</span>{" "}
            expérie
            <span className="alt">n</span>ce
          </h5>
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
          <h5>
            <span className="alt">m</span>es co<span className="alt">m</span>
            péte
            <span className="alt">n</span>ces tech<span className="alt">n</span>
            iques
          </h5>
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
              <img src={iconWordpress} alt="logo wordpress" />
            </li>
          </ul>
          <p>
            En création de site, je développe et personnalise des sites{" "}
            <b>WordPress</b> performants et faciles à gérer.
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
          </ul>
          <p>
            Côté langages front-end, j'intègre des interfaces responsives et
            fluides en <b>HTML</b>, <b>CSS</b> et <b>JavaScript</b>.
          </p>

          <ul className="icones">
            <li>
              <img src={iconVuejs} alt="logo vue-js" />
            </li>
            <li>
              <img src={iconReact} alt="logo react" />
            </li>
          </ul>
          <p>
            Avec les frameworks pour créer des applications monopage, je conçois
            des interfaces dynamiques et réactives à l'aide de <b>Vue.js</b> et{" "}
            <b>React</b>.
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
