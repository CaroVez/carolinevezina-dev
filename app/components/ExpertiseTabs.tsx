import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Import des icônes depuis assets
import iconFigma from "../assets/figma-original.svg";
import iconWordpress from "../assets/wordpress-original.png";
import iconReact from "../assets/react-original.svg";

export default function ExpertiseTabs() {
  // On gère l'onglet actif avec un index
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* 1. La Navigation des Onglets */}
      <div className="expertise-tabs flex flex-wrap justify-center w-full mx-auto">
        {SERVICES.map((service, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative py-4 tracking-widest transition-colors duration-300 cursor-pointer ${
              activeTab === index
                ? "text-[#ba7954] bg-white"
                : "text-[#808080] hover:text-[#ba7954]"
            }`}
          >
            <div className="flex items-center gap-3 relative">
              <img
                src={service.icon}
                className={`w-6 h-6 transition-all ${activeTab === index ? "grayscale-0" : "grayscale opacity-80"}`}
                alt=""
              />

              {/* Conteneur du texte avec le coeur en haut à droite */}
              <div className="relative">
                {service.id}

                {service.highlight && (
                  <span className="absolute -top-2 -right-4 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#ca3939"
                      className="w-4 h-4 animate-pulse"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </span>
                )}
              </div>
            </div>

            {/* Ligne animée sous l'onglet actif */}
            {activeTab === index && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ba7954]"
              />
            )}
          </button>
        ))}
      </div>

      {/* 2. Le Contenu de l'Onglet */}
      <div className="px-6 py-12 min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Colonne Texte */}
            <div className="min-w-[35vw] xl:min-w-[30vw]">
              <div className="text-2xl text-center md:text-left font-bold text-[#479796] mb-4">
                {SERVICES[activeTab].title}
              </div>
              <p className="italic mb-8 text-center md:text-left">
                {SERVICES[activeTab].description}
              </p>

              <ul className="space-y-4 min-w-[50vw]">
                {SERVICES[activeTab].items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <span className="h-px w-6 bg-[#ba7954] transition-all group-hover:w-10"></span>
                    <span className="">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne Visuelle (Grande icône décorative) */}
            <div className="hidden md:flex justify-center items-center relative">
              <div className="absolute w-64 h-64 bg-[#ba7954]/10 rounded-full blur-3xl" />
              <motion.img
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                src={SERVICES[activeTab].icon}
                alt=""
                className="w-48 h-48 object-contain relative z-10"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

// données centralisées
const SERVICES = [
  {
    id: "React",
    title: "liberté & sur-mesure",
    icon: iconReact,
    description:
      "Le choix sans compromis. L'idéal pour les sites vitrines et portfolio ultra-rapides qui privilégient l'esthétique et la performance brute. React permet de coder chaque section au pixel près, offrant une liberté de design absolue et une rapidité d'exécution incomparable.",
    items: [
      "Design 100% exclusif (aucune restriction de mise en page);",
      "Fluidité exceptionnelle (navigation instantanée sans rechargement);",
      "Sécurité maximale et architecture moderne;",
      "Animations haute couture pour une identité forte;",
      "Hébergement web souvent gratuit (coûts récurrents réduits).",
    ],
    highlight: true,
  },
  {
    id: "WordPress",
    title: "gestion & autonomie",
    icon: iconWordpress,
    description:
      "La solution de référence pour les sites de contenu et les blogues évolutifs. En s'appuyant sur des thèmes robustes et éprouvés, WordPress vous offre une structure fiable tout en vous laissant les clés pour gérer vos textes et images en toute simplicité, sans connaissances techniques.",
    items: [
      "Interface d'administration intuitive (gestion autonome);",
      "Mise en place basée sur des thèmes professionnels et flexibles;",
      "Écosystème puissant pour faire évoluer vos fonctionnalités;",
      "Optimisé pour le SEO et la publication de contenus fréquents;",
      "Idéal pour les entrepreneurs souhaitant garder le plein contrôle.",
    ],
    highlight: false,
  },
  {
    id: "Figma",
    title: "design & stratégie",
    icon: iconFigma,
    description:
      "L'étape indispensable pour transformer vos idées en une interface concrète. La conception sur Figma permet de définir une identité visuelle forte et de tester l'expérience utilisateur via un prototype interactif, garantissant un résultat final aligné avec vos attentes et vos objectifs d'affaires.",
    items: [
      "Conception de maquettes haute fidélité;",
      "Prototype interactif cliquable pour tester la navigation;",
      "Design adaptatif pensé pour mobile, tablette et desktop;",
      "Définition de votre charte graphique et guide de style;",
      "Optimisation du parcours client avant la phase de développement.",
    ],
    highlight: false,
  },
];
