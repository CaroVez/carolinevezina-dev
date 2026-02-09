import type { Route } from "./+types/home";
import Presentation from "../components/Presentation";
import photoProfil from "../assets/profil1.png";

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
    <main className="flex flex-col min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-110px)] mx-auto">
      {/* Section Présentation */}
      <Presentation
        className="home"
        image={photoProfil}
        imageClass="image-profil-home"
        title="bienvenue"
        subtitle="Je m'appelle Caroline."
        descriptionClass="intro-home"
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
