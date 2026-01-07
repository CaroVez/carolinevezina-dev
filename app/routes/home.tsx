import type { Route } from "./+types/home";
import photoProfil from "../assets/profil1.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Caroline Vézina - développeur web front-end & designer UI" },
    {
      name: "description",
      content:
        "Développeur web front-end passionnée par la création d'interfaces modernes et ergonomiques. Découvrez mes services en design UI/UX et développement web sur mesure.",
    },
  ];
}

export default function Home() {
  return (
    <main className="container mx-auto">
      {/* Section Présentation (Inspirée de ton HTML) */}
      <section className="presentation">
        <img
          src={photoProfil}
          alt="Illustration de Caroline Vézina"
          className="image-profil-4"
        />
        <h1>
          <span className="typewriter">
            <span className="code">&lt;h1&gt;</span>
            bie<span className="alt">n</span>ve<span className="alt">n</span>ue
            <span className="code">&lt;/h1&gt;</span>
          </span>
        </h1>
        <h2>
          Je <span className="alt">m</span>'appelle Caroli
          <span className="alt">n</span>
          e.
        </h2>
        <p>
          Je suis <b>développeur web front-end</b> passionnée par la création
          d'interface modernes et ergonomiques.
        </p>
      </section>
    </main>
  );
}
