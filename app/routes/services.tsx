import type { Route } from "./+types/services";
import Presentation from "../components/Presentation";
import photoProfil from "../assets/profil-gold.png";
import { motion } from "framer-motion";
// Import des icônes depuis assets
import iconFigma from "../assets/figma-original.svg";
import iconWordpress from "../assets/wordpress-original.png";
import iconCode from "../assets/code-slash.svg";

interface Service {
  title: string;
  icon: string;
  description: string;
  items: string[];
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Caroline Vézina - mes services" },
    {
      name: "description",
      content:
        "Conception, développement et optimisation de votre présence en ligne. Maquettes Figma, sites WordPress clé en main et projets web sur mesure.",
    },
  ];
}

export default function Services() {
  return (
    <main className="container mx-auto">
      {/* Section Présentation */}
      <Presentation
        image={photoProfil}
        imageClass="image-profil-services"
        title="mes services"
        description={
          <>
            Je crée des solutions sur mesure pour concevoir, développer et
            optimiser votre présence en ligne. De la stratégie au design, tout
            est pensé pour mettre en valeur votre marque.
          </>
        }
      />

      {/* Grille des Services */}
      <div className="services flex flex-col items-center gap-[5vh] pt-[26vh] pb-[12vh]">
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }} // État de départ
            whileInView={{ opacity: 1, y: 0 }} // État quand l'élément entre dans l'écran
            viewport={{ once: true, margin: "-100px" }} // S'anime une seule fois
            transition={{ duration: 0.6, delay: index * 0.1 }} // Animation fluide
            className="w-full max-w-[85vw] md:max-w-[700px] min-h-[45vh] flex flex-col items-center md:items-start justify-center text-center md:text-left p-8 bg-[#fff] rounded-[5px] border shadow-[8px_8px_0px_rgba(0,0,0,0.5)]"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] mb-4"
            />
            <h5 className="font-bold mb-4">{service.title}</h5>
            <p className="mb-6">{service.description}</p>

            {/* La liste à puces */}
            <ul className="space-y-3 text-sm md:text-base text-left self-start md:self-left">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-500">•</span>
                  <span className="">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

// données centralisées
const SERVICES: Service[] = [
  {
    title: "maquette & prototype",
    icon: iconFigma,
    description:
      "Des maquettes claires et efficaces pour donner vie à votre vision avant le développement.",
    items: [
      "analyse du site existant ou conception à partir de zéro;",
      "proposition de design moderne et cohérent;",
      "création de maquettes et prototypes sur Figma;",
      "optimisation de l'expérience utilisateur;",
      "visuels adaptés desktop et mobile.",
    ],
  },
  {
    title: "site WordPress clé en main",
    icon: iconWordpress,
    description:
      "Un site professionnel, prêt à être utilisé dès sa mise en ligne.",
    items: [
      "création ou refonte d'un site existant;",
      "design moderne et responsive;",
      "expérience utilisateur fluide;",
      "installation et configuration WordPress;",
      "interface d'administration simple;",
      "autonomie rapide pour le client.",
    ],
  },
  {
    title: "projet web sur mesure",
    icon: iconCode,
    description:
      "Un site unique, pensé et développé selon vos besoins spécifiques.",
    items: [
      "développement à partir de zéro;",
      "design personnalisé image de marque;",
      "fonctionnalités sur mesure;",
      "expérience utilisateur soignée;",
      "site évolutif et prêt pour la croissance.",
    ],
  },
];
