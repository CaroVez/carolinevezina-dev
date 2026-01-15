import type { Route } from "./+types/home";
import Presentation from "../components/Presentation";
import photoProfil from "../assets/profil1.png";

import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Caroline Vézina - développeur web front-end & designer ui" },
    {
      name: "description",
      content:
        "Développeur web front-end passionnée par la création d'interfaces modernes et ergonomiques. Découvrez mes services en design UI/UX et développement web sur mesure.",
    },
  ];
}

export default function Home() {
  return (
    <main className="mx-auto">
      {/* Section Présentation */}
      <Presentation
        image={photoProfil}
        imageClass="image-profil-home"
        title="bienvenue"
        subtitle="Je m'appelle Caroline."
        descriptionClass="intro"
        description={
          <>
            Je suis <b>développeur web front-end</b> passionnée par la création
            d'interface modernes et ergonomiques.
          </>
        }
        showArrows={false}
        showButtons={true}
      />
    </main>
  );
}
