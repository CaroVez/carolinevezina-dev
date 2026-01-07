import type { Route } from "./+types/services";
// Import des icônes depuis assets
import iconFigma from "../assets/figma-original.svg";
import iconWordpress from "../assets/wordpress-original.png";
import iconCode from "../assets/code-slash.svg";
import photoProfil from "../assets/profil-gold.png";

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
      {/* Section Présentation (Inspirée de ton HTML) */}
      <section className="presentation">
        <img
          src={photoProfil}
          alt="Illustration de Caroline Vézina"
          className="image-profil-2"
        />
        <h1>
          <span className="typewriter">
            <span className="code">&lt;h1&gt;</span>
            <span className="alt">m</span>es services
            <span className="code">&lt;/h1&gt;</span>
          </span>
        </h1>
        <p>
          Je crée des solutions sur mesure pour concevoir, développer et
          optimiser votre présence en ligne. De la stratégie au design, tout est
          pensé pour mettre en valeur votre marque.
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

      {/* Grille des Services */}
      <div className="flex flex-col items-center gap-[5vh] pt-[6vh] pb-[12vh] md:pt-[18vh]">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="w-full max-w-[85vw] md:max-w-[700px] min-h-[45vh] flex flex-col items-left justify-center p-8 text-left rounded-[5px] border shadow-[8px_8px_0px_rgba(0,0,0,0.5)] animate-[fade-in_linear_forwards] [animation-timeline:view()] [animation-range:0px_500px]"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] mb-4"
            />
            <h2 className="font-bold mb-4">{service.title}</h2>
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
          </div>
        ))}
      </div>
    </main>
  );
}

// 3. Tes données centralisées
const servicesData = [
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
