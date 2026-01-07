import type { Route } from "./+types/contact";
import photoProfil from "../assets/profil1.png";

// C'est ici qu'on définit le titre de l'onglet dans le navigateur
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Caroline Vézina - me joindre" },
    { name: "description", content: "" },
  ];
}

export default function Contact() {
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
            <span className="alt">m</span>e joi<span className="alt">n</span>dre
            <span className="code">&lt;/h1&gt;</span>
          </span>
        </h1>
        <p>
          Vous souhaitez discuter d'un projet ou simplement en savoir plus sur
          mes services ? N'hésitez pas à me contacter !
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
    </main>
  );
}
