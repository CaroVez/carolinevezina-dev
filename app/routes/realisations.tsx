import type { Route } from "./+types/realisations";
import Presentation from "../components/Presentation";
import photoProfil from "../assets/profil1.png";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { useState, useMemo } from "react";

interface Project {
  title: string;
  description: string;
  link: string;
  isExternal: boolean;
  bgImage: string; // URL de l'image
  colSpanDesktop: string;
  tech: string[];
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "mes réalisations | Caroline Vézina - développeur web front-end" },
    {
      name: "description",
      content:
        "Découvrez mon portfolio : projets clients, personnels et formations. Témoignages de ma passion pour le développement web front-end et le design UI.",
    },
  ];
}

export default function Realisations() {
  const [search, setSearch] = useState("");
  const [isSorted, setIsSorted] = useState(false);

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

  // Logique de filtrage et de tri
  const filteredProjects = useMemo(() => {
    // 1. Filtrage par titre ou technologie
    let result = PROJECTS.filter((project) => {
      const searchTerm = search.toLowerCase();
      return (
        project.title.toLowerCase().includes(searchTerm) ||
        project.tech.some((t) => t.toLowerCase().includes(searchTerm))
      );
    });

    // 2. Tri alphabétique si activé
    if (isSorted) {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [search, isSorted]);

  return (
    <main className="mx-auto">
      {/* Section Présentation */}
      <Presentation
        image={photoProfil}
        imageClass="image-profil-realisations"
        title="mes réalisations"
        descriptionClass="intro-pages"
        description={
          <>
            Découvrez quelques projets réalisés au fil de mon parcours{"\u00A0"}
            : formations, projets personnels et collaborations clients. Ils
            témoignent de ma passion pour le web (et le design{"\u00A0"}!) et de
            mon envie constante de progresser.
          </>
        }
        showArrows={true}
        showButtons={false}
      />

      {/* Barre de recherche et Tri */}
      <div className="search-btn flex flex-col md:flex-row gap-8 mt-[26vh] mb-4 justify-center items-center mx-auto">
        {" "}
        <button
          onClick={() => setIsSorted(!isSorted)}
          className="btn-custom order-btn"
        >
          {isSorted ? "original" : "A-Z"}
        </button>
        {/* Barre de recherche pleine largeur avec Icône */}
        <div className="w-full relative group search-container">
          {/* Icône de loupe fixée à gauche */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10 transition-all duration-200">
            <svg
              className="w-5 h-5 text-[#ba7954]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="text"
            placeholder="rechercher un projet ou une techno (ex: react, wordpress, etc.)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input pl-12"
          />
        </div>
      </div>

      {/* Grille des Projets */}
      <section
        className="realisations 
          grid grid-cols-1 md:grid-cols-3 gap-[6vh] grid-flow-dense pt-[10vh] pb-[12vh] mx-auto"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className={`
                relative group flex w-full mx-auto bg-cover bg-center rounded-[5px] border shadow-[8px_8px_0px_rgba(0,0,0,0.5)] 
                transition-all duration-300 ease-in-out
                hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_rgba(0,0,0,0.5)]
                ${isSorted ? "md:col-span-1" : project.colSpanDesktop}
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
                  md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 overflow-hidden
                "
              >
                <h5 className="drop-shadow-md text-base lg:text-xl">
                  {formatTitle(project.title)}
                </h5>
                <p className="mb-2 md:mb-4 text-base lg:text-sm leading-tight">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center whitespace-nowrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[12px] lg:text-xs bg-white/20 px-2 py-1 rounded"
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
                  md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 overflow-hidden
                "
              >
                <h5 className="drop-shadow-md text-base lg:text-xl">
                  {formatTitle(project.title)}
                </h5>
                <p className="mb-2 md:mb-4 text-base lg:text-sm leading-tight">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center whitespace-nowrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[12px] lg:text-xs bg-white/20 px-2 py-1 rounded"
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
    tech: [
      "react",
      "typescript",
      "html",
      "css",
      "javascript",
      "tailwindcss",
      "github",
      "emailjs",
      "netlify",
    ],
  },
  {
    title: "Thanks-Boss",
    description:
      "participation au développement d'un site web monopage de recherche d'emplois, avec intégration des maquettes UX/UI, un design responsive et des fonctionnalités interactives en collaboration avec le backend.",
    link: "/mes-realisations/thanks-boss",
    isExternal: false,
    bgImage: "./images/thanksboss/vignette.png",
    colSpanDesktop: "md:col-span-1",
    tech: ["vue-js", "html", "css", "javascript", "gitlab"],
  },

  {
    title: "Mireille Cliche, écrivaine",
    description: "optimisation d'un site WordPress.",
    link: "https://mireillecliche.com/",
    isExternal: true,
    bgImage: "./images/mireillecliche/vignette.jpeg",
    colSpanDesktop: "md:col-span-1",
    tech: ["figma", "wordpress"],
  },
  {
    title: "Terre de thés",
    description: "création d'une identité visuelle.",
    link: "/mes-realisations/terre-de-thes",
    isExternal: false,
    bgImage: "./images/terredethes/vignette.png",
    colSpanDesktop: "md:col-span-2",
    tech: [
      "figma",
      "adobe indesign",
      "adobe aftereffects",
      "adobe photoshop",
      "adobe illustrator",
    ],
  },

  {
    title: "M ta vie",
    description:
      "actualisation d'un site WordPress existant pour refléter la nouvelle identité visuelle et inclure des sections supplémentaires sur demande.",
    link: "https://mtavie.ca/",
    isExternal: true,
    bgImage: "./images/mtavie/vignette.png",
    colSpanDesktop: "md:col-span-2",
    tech: ["figma", "wordpress"],
  },
  {
    title: "Caroline à l'étranger",
    description:
      "création d'un site vitrine avec générateur de site statique pour un blog de photos de voyage.",
    link: "https://carolinealetranger.netlify.app/",
    isExternal: true,
    bgImage: "./images/carolinealetranger/vignette.jpg",
    colSpanDesktop: "md:col-span-1",
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
    title: "l'agrume indigo",
    description:
      "conception d'un site web de gestion des droits d'accès pour une marque de salles de sport, avec rôles et interfaces personnalisées selon les utilisateurs.",
    link: "/mes-realisations/l-agrume-indigo",
    isExternal: false,
    bgImage: "./images/lagrumeindigo/vignette.jpg",
    colSpanDesktop: "md:col-span-1",
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
    title: "Charles Cantin Photographe",
    description:
      "conception d'un site vitrine avec générateur de site statique et CMS pour un photographe amateur.",
    link: "https://c-cantin-photographe.netlify.app/",
    isExternal: true,
    bgImage: "./images/charlescantin/vignette.jpg",
    colSpanDesktop: "md:col-span-2",
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
    title: "AV",
    description:
      "conception d'un site vitrine avec WordPress pour une agence de voyage.",
    link: "https://agencevoyageav.go.yj.fr/",
    isExternal: true,
    bgImage: "./images/av/vignette.jpg",
    colSpanDesktop: "md:col-span-1",
    tech: ["adobe xd", "wordpress", "xampp", "mysql", "planethoster"],
  },
  {
    title: "la jungle verte",
    description: "création d'un site web monopage d'une boutique en ligne.",
    link: "https://lajungleverte.netlify.app/",
    isExternal: true,
    bgImage: "./images/lajungleverte/vignette.png",
    colSpanDesktop: "md:col-span-1",
    tech: ["react", "html", "css", "javascript", "github", "netlify"],
  },
  {
    title: "Our super music app",
    description:
      "création d'une interface inspirée des instruments de musique électronique.",
    link: "https://oursupermusicapp.netlify.app/",
    isExternal: true,
    bgImage: "./images/oursupermusicapp/vignette.png",
    colSpanDesktop: "md:col-span-1",
    tech: ["react", "html", "css", "javascript", "github", "netlify"],
  },
];
