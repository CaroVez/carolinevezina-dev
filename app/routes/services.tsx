import type { Route } from "./+types/services";
import Presentation from "../components/Presentation";
import photoProfil from "../assets/profil-gold.png";
import { motion } from "framer-motion";
// Import des icônes depuis assets
import iconFigma from "../assets/figma-original.svg";
import iconWordpress from "../assets/wordpress-original.png";
import iconReact from "../assets/react-original.svg";
import { Link } from "react-router";

interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: string[];
  highlight: boolean;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "mes services | Caroline Vézina - développeur web front-end" },
    {
      name: "description",
      content:
        "Conception, développement et optimisation de votre présence en ligne. Maquettes Figma, sites WordPress clé en main et projets web sur mesure.",
    },
  ];
}

export default function Services() {
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
        imageClass="image-profil-services"
        title="mes services"
        description={
          <>
            Je crée des solutions sur mesure pour concevoir, développer et
            optimiser votre présence en ligne. De la stratégie au design, tout
            est pensé pour mettre en valeur votre marque.
          </>
        }
        showArrows={true}
        showButtons={false}
      />

      {/* Grille des Services */}
      <section className="services pb-[12vh] px-4 py-16 mx-auto">
        <div className="mx-auto">
          <h5 className="text-center mb-12 tracking-wider text-[#479796]">
            {formatTitle("mon expertise")}
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card relative p-8 mt-2 rounded-[5px] border flex flex-col ${
                  service.highlight
                    ? "border-[#ba7954] shadow-[8px_8px_0px_#ba7954] z-10"
                    : "shadow-[8px_8px_0px_rgba(0,0,0,0.5)]"
                }`}
              >
                {service.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ba7954] text-white px-4 py-1 mt-1 text-xs font-bold rounded-full uppercase">
                    mon préféré
                  </span>
                )}
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] mb-4"
                />
                <div className="text-2xl font-bold text-[#479796] mb-4">
                  {service.title}
                </div>
                <p className="text-sm italic mb-6">{service.description}</p>

                {/* La liste à puces */}
                <ul className="space-y-3 text-sm md:text-base text-left self-start md:self-left">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-500">•</span>
                      <span className="">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Link
                    to={`/contact?sujet=${service.id}#contact`}
                    className="btn-custom w-full md:w-fit block tracking-widest uppercase text-xs"
                  >
                    parlons de votre projet
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Forfaits */}
      <section className="forfaits pb-[12vh] px-4 py-8 mx-auto">
        <div className="max-w-[800px] mx-auto">
          <h5 className="text-center mb-12 tracking-wider text-[#479796]">
            {formatTitle("mes forfaits")}
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PACKS.map((pack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card relative p-8 mt-2 rounded-[5px] border flex flex-col ${
                  pack.highlight
                    ? "border-[#ba7954] shadow-[8px_8px_0px_#ba7954] z-10"
                    : "shadow-[8px_8px_0px_rgba(0,0,0,0.5)]"
                }`}
              >
                {pack.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ba7954] text-white px-4 py-1 mt-1 text-xs font-bold rounded-full uppercase">
                    Populaire
                  </span>
                )}

                <h4 className="font-bold mb-2">{pack.name}</h4>
                <div className="text-2xl font-bold text-[#479796] mb-4">
                  {pack.price}
                </div>
                <p className="text-sm italic mb-6 ">{pack.target}</p>

                <ul className="space-y-4 flex-grow">
                  {pack.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-[#479796]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Link
                    to={`/contact?sujet=${pack.id}#contact`}
                    className="btn-custom w-full md:w-fit block tracking-widest uppercase text-xs"
                  >
                    sélectionner ce forfait
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SECTION NOTES ET PRÉCISIONS */}
          <div className="mt-12 space-y-4 px-2 max-w-[800px] mx-auto border-t border-gray-100 pt-8">
            {/* Mention Générale - Prix */}
            <p className="text-sm text-gray-600 font-medium text-center md:text-left leading-relaxed">
              <span className="text-[#ba7954]">Note importante :</span> Le tarif
              final peut varier selon la plateforme choisie et la complexité des
              fonctionnalités demandées. Un devis détaillé vous sera fourni
              après analyse de vos besoins.
            </p>

            <div className="space-y-2">
              {/* Note technique Figma */}
              <p className="text-xs text-gray-500 italic text-center md:text-left leading-relaxed">
                <span className="font-bold text-[#479796]">*</span> La maquette
                Figma est complète pour un développement avec React (design 100%
                sur mesure) et simplifiée pour WordPress (structure et
                personnalisation).
              </p>

              {/* Note technique Hébergement */}
              <p className="text-xs text-gray-500 italic text-center md:text-left leading-relaxed">
                <span className="font-bold text-[#479796]">**</span> La mise en
                ligne est incluse. Des frais d'hébergement mensuels sont à
                prévoir pour WordPress, tandis que l'hébergement pour un site
                React est généralement gratuit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// données centralisées
const SERVICES: Service[] = [
  {
    id: "react",
    title: "développement sur mesure (React)",
    icon: iconReact,
    description:
      "La technologie utilisée par Facebook et Netflix. C'est le choix ultime pour la performance et une liberté de design totale.",
    items: [
      "Vitesse de chargement ultra-rapide (SEO exemplaire);",
      "Animations fluides et interface moderne;",
      "Aucun frais d'hébergement mensuel (généralement);",
      "Sécurité maximale (pas de base de données vulnérable);",
      "Idéal pour des projets uniques qui doivent se démarquer.",
    ],
    highlight: true,
  },
  {
    id: "wordpress",
    title: "système de gestion (WordPress)",
    icon: iconWordpress,
    description:
      "Le standard mondial pour les sites de contenu. Parfait si vous voulez garder la main sur vos textes et vos articles.",
    items: [
      "Interface intuitive pour modifier vos textes vous-même;",
      "Écosystème riche (blogue, boutique en ligne, etc.);",
      "Développement souvent plus rapide pour les sites standards;",
      "Autonomie totale pour vos futures publications;",
      "Solution robuste, évolutive et facile à maintenir.",
    ],
    highlight: false,
  },
  {
    id: "figma",
    title: "conception & design (Figma)",
    icon: iconFigma,
    description:
      "L'outil de design référence. On dessine votre site ensemble avant d'écrire la moindre ligne de code.",
    items: [
      "Visualisation réelle de votre site avant le développement;",
      "Validation de l'ergonomie et du parcours client (UX);",
      "Prototypes cliquables pour tester l'expérience;",
      "Design cohérent sur mobile, tablette et ordinateur;",
      "Évite les allers-retours coûteux durant la phase de code.",
    ],
    highlight: false,
  },
];

const PACKS = [
  {
    id: "essentiel",
    name: "L'essentiel",
    price: "À partir de 1 200$ +tx",
    target: "Vous avez déjà votre logo et vos couleurs",
    features: [
      "Design basé sur votre charte existante",
      "Site sur mesure (jusqu'à 3 pages)",
      "Maquette Figma complète*",
      "Développement React ou WordPress",
      "Optimisation SEO de base",
    ],
    highlight: false,
  },
  {
    id: "identite",
    name: "L'identité",
    price: "À partir de 1 800$ +tx",
    target: "Vous partez de zéro",
    features: [
      "Design de logo & Palette de couleurs",
      "Site sur mesure (jusqu'à 5 pages)",
      "Maquette Figma complète*",
      "Développement React ou WordPress",
      "Rédaction de contenu (optimisé SEO)",
      "Mise en ligne incluse**",
    ],
    highlight: true,
  },
  {
    id: "optimisation",
    name: "L'optimisation",
    price: "À partir de 600$ +tx",
    target: "Vous souhaitez améliorer votre site existant",
    features: [
      "Audit UI/UX (Interface et Expérience)",
      "Maquette Figma simplifiée",
      "Intégration des changements",
    ],
    highlight: false,
  },
  {
    id: "referencement",
    name: "Le référencement",
    price: "À partir de 500$ +tx",
    target: "Vous souhaitez améliorer la visibilité de votre site",
    features: [
      "Optimisation SEO complète",
      "Indexation sur les moteurs de recherche",
      "Stratégie de mots-clés",
    ],
    highlight: false,
  },
];
