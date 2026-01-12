import type { Route } from "./+types/realisations";
import Presentation from "../components/Presentation";
import photoProfil from "../assets/profil1.png";
import { motion } from "framer-motion";
import { Link } from "react-router";

interface Project {
  title: string;
  description: string;
  link: string;
  isExternal: boolean;
  bgImage: string; // URL de l'image
  colSpanDesktop: string;
  rowSpanDesktop: string;
  tech: string[];
}

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

  return (
    <main className="mx-auto">
      {/* Section Présentation */}
      <Presentation
        image={photoProfil}
        imageClass="image-profil-realisations"
        title="mes réalisations"
        description={
          <>
            Découvrez quelques projets réalisés au fil de mon parcours :
            formations, projets personnels et collaborations clients. Ils
            témoignent de ma passion pour le web (et le design!) et de mon envie
            constante de progresser.
          </>
        }
        showArrows={true}
        showButtons={false}
      />

      {/* Grille des Projets */}
      <section
        className="realisations 
          grid grid-cols-1 md:grid-cols-3 gap-[6vh] auto-rows-[85vw] md:auto-rows-[45vh] pt-[26vh] pb-[12vh] mx-auto"
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }} // État de départ
            whileInView={{ opacity: 1, y: 0 }} // État quand l'élément entre dans l'écran
            viewport={{ once: true, margin: "-100px" }} // S'anime une seule fois
            transition={{ duration: 0.6, delay: index * 0.1 }} // Animation fluide
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className={`
                relative group flex w-[90%] md:w-full mx-auto bg-cover bg-center rounded-[5px] border shadow-[8px_8px_0px_rgba(0,0,0,0.5)] 
                
                transition-all duration-300 ease-in-out
                hover:translate-y-1
                active:translate-y-0 active:shadow-none

                ${project.colSpanDesktop} ${project.rowSpanDesktop}
              `}
          >
            {/* Overlay (Hover sur Desktop, Toujours visible sur Mobile) */}
            {project.isExternal ? (
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
            ) : (
              <Link
                to={project.link}
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
              </Link>
            )}
          </motion.div>
        ))}
      </section>
    </main>
  );
}

// données centralisées
const PROJECTS: Project[] = [
  {
    title: "Caroline Vézina .dev",
    description:
      "création d'un site monopage pour présenter mes services et portfolio.",
    link: "https://www.carolinevezina.dev/",
    isExternal: true,
    bgImage: "./images/carolinevezina/vignette.png",
    colSpanDesktop: "md:col-span-2",
    rowSpanDesktop: "md:row-start-1",
    tech: ["react", "typescript", "html", "css", "github", "emailjs"],
  },
  {
    title: "Mireille Cliche, écrivaine",
    description: "optimisation d'un site WordPress.",
    link: "https://mireillecliche.com/",
    isExternal: true,
    bgImage: "./images/mireillecliche/vignette.jpeg",
    colSpanDesktop: "md:col-span-1",
    rowSpanDesktop: "md:row-start-1",
    tech: ["figma", "wordpress"],
  },

  {
    title: "AV",
    description:
      "conception d'un site vitrine avec WordPress pour une agence de voyage.",
    link: "https://agencevoyageav.go.yj.fr/",
    isExternal: true,
    bgImage: "./images/av/vignette.jpg",
    colSpanDesktop: "md:col-span-1",
    rowSpanDesktop: "md:row-start-2",
    tech: ["adobe xd", "wordpress", "xampp", "mysql", "planethoster"],
  },
  {
    title: "M ta vie",
    description:
      "actualisation d'un site WordPress existant pour refléter la nouvelle identité visuelle et inclure des sections supplémentaires sur demande.",
    link: "https://mtavie.ca/",
    isExternal: true,
    bgImage: "./images/mtavie/vignette.png",
    colSpanDesktop: "md:col-span-2",
    rowSpanDesktop: "md:row-start-2",
    tech: ["figma", "wordpress"],
  },

  {
    title: "Charles Cantin Photographe",
    description:
      "conception d'un site vitrine avec générateur de site statique et CMS pour un photographe amateur.",
    link: "https://c-cantin-photographe.netlify.app/",
    isExternal: true,
    bgImage: "./images/charlescantin/vignette.jpg",
    colSpanDesktop: "md:col-span-2",
    rowSpanDesktop: "md:row-start-3",
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
    title: "Caroline à l'étranger",
    description:
      "création d'un site vitrine avec générateur de site statique pour un blog de photos de voyage.",
    link: "https://carolinealetranger.netlify.app/",
    isExternal: true,
    bgImage: "./images/carolinealetranger/vignette.jpg",
    colSpanDesktop: "md:col-span-1",
    rowSpanDesktop: "md:row-start-3",
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
    title: "Thanks-Boss",
    description:
      "participation au développement d'un site web monopage de recherche d'emplois, avec intégration des maquettes UX/UI, un design responsive et des fonctionnalités interactives en collaboration avec le backend.",
    link: "/realisations/thanks-boss",
    isExternal: false,
    bgImage: "./images/thanksboss/vignette.png",
    colSpanDesktop: "md:col-span-1",
    rowSpanDesktop: "md:row-start-4",
    tech: ["vue-js", "html", "css", "javascript", "gitlab"],
  },
  {
    title: "Terre de thés",
    description: "création d'une identité visuelle.",
    link: "/realisations/terre-de-thes",
    isExternal: false,
    bgImage: "./images/terredethes/vignette.png",
    colSpanDesktop: "md:col-span-2",
    rowSpanDesktop: "md:row-start-4",
    tech: [
      "figma",
      "adobe indesign",
      "adobe aftereffects",
      "adobe photoshop",
      "adobe illustrator",
    ],
  },

  {
    title: "l'agrume indigo",
    description:
      "conception d'un site web de gestion des droits d'accès pour une marque de salles de sport, avec rôles et interf personnalisée selon les contrats utilisateurs.",
    link: "/realisations/l-agrume-indigo",
    isExternal: false,
    bgImage: "./images/lagrumeindigo/vignette.jpg",
    colSpanDesktop: "md:col-span-1",
    rowSpanDesktop: "md:row-start-5",
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
    isExternal: true,
    bgImage: "./images/lajungleverte/vignette.png",
    colSpanDesktop: "md:col-span-1",
    rowSpanDesktop: "md:row-start-5",
    tech: ["react", "html", "css", "github", "netlify"],
  },
  {
    title: "Our surper music app",
    description:
      "création d'une interface inspirée des instruments de musique électronique.",
    link: "https://oursupermusicapp.netlify.app/",
    isExternal: true,
    bgImage: "./images/oursupermusicapp/vignette.png",
    colSpanDesktop: "md:col-span-1",
    rowSpanDesktop: "md:row-start-5",
    tech: ["react", "html", "css", "github", "netlify"],
  },
];
