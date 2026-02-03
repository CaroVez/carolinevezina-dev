import type { Route } from "./+types/services";
import Presentation from "../components/Presentation";
import photoProfil from "../assets/profil-gold.png";
import ExpertiseTabs from "~/components/ExpertiseTabs";
import { motion } from "framer-motion";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "mes services | Caroline Vézina - développeur web front-end" },
    {
      name: "description",
      content:
        "Conception, développement et optimisation de votre présence en ligne.Projets web sur mesure, Maquettes Figma, sites WordPress clé en main.",
    },
  ];
}

export default function Services() {
  const formatTitle = (title: string) => {
    // On sépare le texte à chaque 'm', 'M', 'n' ou 'N'
    const parts = title.split(/(m|n|z)/gi);

    return parts.map((part, index) =>
      /m|n|z/i.test(part) ? (
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
            Je me spécialise dans la création de sites vitrines haute
            performance. Mon approche se concentre sur le design et le
            développement front-end pour offrir une présence en ligne claire,
            rapide et parfaitement alignée avec votre identité.
          </>
        }
        showArrows={true}
        showButtons={false}
      />

      {/* Onglets des expertises */}
      <section className="services w-full pb-4 pt-[24vh] mb-[24vh] transition-colors duration-500">
        <div className="max-w-5xl mx-auto px-6">
          {/* <h5 className="text-center mb-12 tracking-wider">
            {formatTitle("comment je vous accompagne")}
          </h5>*/}

          <ExpertiseTabs />
        </div>
      </section>

      {/* Section Forfaits */}
      <section className="forfaits pb-[20vh] px-4 py-8 mx-auto">
        <div className="mx-auto">
          <h5 className="text-center mb-12 tracking-wider text-[#479796]">
            {formatTitle("mes forfaits")}
          </h5>

          <div className="flex flex-wrap justify-center gap-8">
            {PACKS.map((pack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card relative p-8 mt-2 rounded-[5px] border flex flex-col w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-w-[min(300px,100%)] max-w-[400px] ${
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
                    to={`/me-joindre?sujet=${pack.id}#contact`}
                    className="btn-custom w-full md:w-fit block tracking-widest uppercase text-xs"
                  >
                    sélectionner ce forfait
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SECTION NOTES ET PRÉCISIONS */}
          <div className="border-notes mt-48 space-y-6 px-2 mx-auto border-t pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs italic leading-relaxed text-gray-600">
              {/* Colonne 1 : Technique */}
              <div className="space-y-3 text-center md:text-left">
                <p>
                  <span className="font-bold text-[#479796] not-italic">*</span>{" "}
                  La maquette est complète pour un développement React (design
                  100% sur mesure) et simplifiée pour WordPress (structure et
                  personnalisation).
                </p>
                <p>
                  <span className="font-bold text-[#479796] not-italic">
                    **
                  </span>
                  La mise en ligne est incluse. Toutefois, l'achat du{" "}
                  <strong>nom de domaine</strong> est à la charge du client pour
                  tout projet. Concernant l'<strong>hébergement</strong>, des
                  frais mensuels sont à prévoir pour WordPress, tandis qu'il est
                  généralement gratuit pour un site React.
                </p>
              </div>

              {/* Colonne 2 : Spécialisation (Ton point crucial) */}
              <div className="flex flex-wrap justify-center gap-4">
                <div className="note-card p-4 rounded-[5px] border-l-2 border-[#ba7954]">
                  <p>
                    <span className="font-bold text-[#ba7954] not-italic uppercase block mb-1">
                      Précision tarifaire
                    </span>
                    Le tarif final peut varier selon la plateforme choisie et la
                    complexité des fonctionnalités demandées. Un devis détaillé
                    vous sera fourni après analyse de vos besoins.
                  </p>
                </div>
                <div className="note-card p-4 rounded-[5px] border-l-2 border-[#ba7954]">
                  <p>
                    <span className="font-bold text-[#ba7954] not-italic uppercase block mb-1">
                      Domaine d'expertise
                    </span>
                    Nos services se concentrent exclusivement sur le
                    développement front-end (sites vitrines et visuels). Nous ne
                    réalisons pas de sites transactionnels, d'espaces membres ou
                    de systèmes avec authentification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// données centralisées
const PACKS = [
  {
    id: "forfait_identite",
    name: "L'identité",
    price: "à partir de 1 800$ +tx",
    target:
      "Vous lancez votre projet et souhaitez une image de marque forte dès le départ.",
    features: [
      "Design de logo & charte de couleurs",
      "Site sur mesure (jusqu'à 5 pages)",
      "Maquette Figma complète*",
      "Développement React ou WordPress",
      "Optimisation SEO",
      "Mise en ligne incluse**",
    ],
    highlight: true,
  },
  {
    id: "forfait_essentiel",
    name: "L'essentiel",
    price: "à partir de 1 500$ +tx",
    target:
      "Votre identité visuelle est prête et vous avez besoin d'une présence en ligne qui lui fait honneur.",
    features: [
      "Design basé sur votre charte existante",
      "Site sur mesure (jusqu'à 3 pages)",
      "Maquette Figma complète*",
      "Développement React ou WordPress",
      "Optimisation SEO",
      "Mise en ligne incluse**",
    ],
    highlight: false,
  },
  {
    id: "maquette_figma",
    name: "Le design",
    price: "à partir de 800$ +tx",
    target:
      "Vous cherchez une conception visuelle unique avant de passer à l'étape du code.",
    features: [
      "Design de logo & palette de couleurs",
      "Analyse de l'expérience utilisateur (UX)",
      "Maquette Figma complète (jusqu'à 5 pages)",
      "Prototype cliquable",
      "Exportation des fichiers pour le développement",
    ],
    highlight: false,
  },
  {
    id: "optimisation",
    name: "L'optimisation",
    price: "à partir de 500$ +tx",
    target:
      "Votre site actuel nécessite une refonte ergonomique ou une amélioration de l'expérience utilisateur.",
    features: [
      "Audit UI/UX (interface et expérience)",
      "Maquette Figma simplifiée",
      "Intégration des changements",
    ],
    highlight: false,
  },
  {
    id: "seo_visibilite",
    name: "Le référencement",
    price: "à partir de 500$ +tx",
    target:
      "Votre site est en ligne, mais vous voulez qu'il apparaisse en haut des recherches.",
    features: [
      "Optimisation SEO complète",
      "Indexation sur les moteurs de recherche",
      "Stratégie de mots-clés",
    ],
    highlight: false,
  },
];
