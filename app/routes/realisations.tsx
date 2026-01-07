import type { Route } from "./+types/realisations";
import photoProfil from "../assets/profil1.png";

// 1. Définition du type pour un projet
interface Project {
  title: string;
  description: string;
  link: string;
  bgImage: string; // URL de l'image
  colSpanDesktop: string;
  rowSpanDesktop: string;
  tech: string[];
}

// 2. Centralisation des données
const PROJECTS: Project[] = [
  {
    title: "M ta vie",
    description:
      "actualisation d'un site WordPress existant pour refléter la nouvelle identité visuelle et inclure des sections supplémentaires sur demande.",
    link: "https://mtavie.ca/",
    bgImage: "./images/mtavie/vignette.png",
    colSpanDesktop: "md:col-span-2",
    rowSpanDesktop: "md:row-start-1",
    tech: ["figma", "wordpress"],
  },
  {
    title: "AV",
    description:
      "conception d'un site vitrine avec WordPress pour une agence de voyage.",
    link: "https://agencevoyageav.go.yj.fr/",
    bgImage: "./images/av/vignette.jpg",
    colSpanDesktop: "md:col-span-1",
    rowSpanDesktop: "md:row-start-1",
    tech: ["adobe xd", "wordpress", "xampp", "mysql", "planethoster"],
  },
  {
    title: "Caroline à l'étranger",
    description:
      "création d'un site vitrine avec générateur de site statique pour un blog de photos de voyage.",
    link: "https://carolinealetranger.netlify.app/",
    bgImage: "./images/carolinealetranger/vignette.jpg",
    colSpanDesktop: "md:col-span-1",
    rowSpanDesktop: "md:row-start-2",
    tech: [
      "adobe xd",
      "html",
      "css",
      "bootstrap",
      "javascript",
      "11ty",
      "github",
      "forestry",
      "netlify",
    ],
  },
  {
    title: "Charles Cantin Photographe",
    description:
      "conception d'un site vitrine avec générateur de site statique et CMS pour un photographe amateur.",
    link: "https://c-cantin-photographe.netlify.app/",
    bgImage: "./images/charlescantin/vignette.jpg",
    colSpanDesktop: "md:col-span-2",
    rowSpanDesktop: "md:row-start-2",
    tech: [
      "adobe xd",
      "nunjucks",
      "html",
      "css",
      "bootstrap",
      "javascript",
      "11ty",
      "github",
      "forestry",
      "netlify",
    ],
  },
  {
    title: "Terre de thés",
    description: "création d'une identité visuelle.",
    link: "#",
    bgImage: "./images/terredethes/vignette.png",
    colSpanDesktop: "md:col-span-2",
    rowSpanDesktop: "md:row-start-3",
    tech: [
      "figma",
      "adobe indesign",
      "adobe aftereffects",
      "adobe photoshop",
      "adobe illustrator",
    ],
  },
  {
    title: "Thanks-Boss",
    description:
      "participation au développement d'un site web monopage de recherche d'emplois, avec intégration des maquettes UX/UI, un design responsive et des fonctionnalités interactives en collaboration avec le backend.",
    link: "#",
    bgImage: "./images/thanksboss/vignette.png",
    colSpanDesktop: "md:col-span-1",
    rowSpanDesktop: "md:row-start-3",
    tech: ["vue-js", "html", "css", "javascript", "gitlab"],
  },
  {
    title: "l'agrume indigo",
    description:
      "conception d'un site web de gestion des droits d'accès pour une marque de salles de sport, avec rôles et interf personnalisée selon les contrats utilisateurs.",
    link: "#",
    bgImage: "./images/lagrumeindigo/vignette.jpg",
    colSpanDesktop: "md:col-span-1",
    rowSpanDesktop: "md:row-start-4",
    tech: [
      "drawio",
      "adobe xd",
      "php",
      "symfony",
      "doctrine",
      "twig",
      "html",
      "css",
      "bootstrap",
      "javascript",
      "xampp",
      "sql",
      "jawsdb",
      "gitbub",
      "heroku",
    ],
  },
  {
    title: "la jungle verte",
    description: "création d'un site web monopage d'une boutique en ligne.",
    link: "https://lajungleverte.netlify.app/",
    bgImage: "./images/lajungleverte/vignette.png",
    colSpanDesktop: "md:col-span-1",
    rowSpanDesktop: "md:row-start-4",
    tech: ["react", "html", "css", "github", "netlify"],
  },
  {
    title: "Our surper music app",
    description:
      "création d'une interface inspirée des instruments de musique électronique.",
    link: "https://oursupermusicapp.netlify.app/",
    bgImage: "./images/oursupermusicapp/vignette.png",
    colSpanDesktop: "md:col-span-1",
    rowSpanDesktop: "md:row-start-4",
    tech: ["react", "html", "css", "github", "netlify"],
  },
];

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
    )
  );
};

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

export default function Realisations() {
  return (
    <main className="container mx-auto">
      {/* Section Présentation */}
      <section className="presentation">
        <img
          src={photoProfil}
          alt="Illustration de Caroline Vézina"
          className="image-profil-3"
        />
        <h1>
          <span className="typewriter">
            <span className="code">&lt;h1&gt;</span>
            <span className="alt">m</span>es réalisatio
            <span className="alt">n</span>s
            <span className="code">&lt;/h1&gt;</span>
          </span>
        </h1>
        <p>
          Découvrez quelques projets réalisés au fil de mon parcours :
          formations, projets personnels et collaborations clients. Ils
          témoignent de ma passion pour le web (et le design!) et de mon envie
          constante de progresser.
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

      {/* Grille des Projets */}
      <section
        className="
          grid grid-cols-1 md:grid-cols-3 gap-[4vh] auto-rows-[85vw] md:auto-rows-[45vh] pt-[6vh] pb-[12vh] md:pt-[18vh]"
      >
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className={`
                relative group flex bg-cover bg-center rounded-[5px] border 
                shadow-[8px_8px_0px_rgba(0,0,0,0.5)] 
                
                transition-all duration-300 ease-in-out
                hover:translate-y-1
                active:translate-y-0 active:shadow-none

                ${project.colSpanDesktop} ${project.rowSpanDesktop}
                animate-[fade-in_linear_forwards] [animation-timeline:view()] [animation-range:0px_500px]
              `}
          >
            {/* Overlay (Hover sur Desktop, Toujours visible sur Mobile) */}
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="
                  w-full h-full p-6 rounded-[5px] bg-black/40 backdrop-blur-[2px]
                  flex flex-col items-center justify-center text-center text-white
                  md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300
                "
            >
              <h5 className="drop-shadow-md">{formatTitle(project.title)}</h5>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center whitespace-nowrap">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-white/20 px-2 py-1 rounded"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
