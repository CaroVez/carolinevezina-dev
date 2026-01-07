import type { Route } from "./+types/qui-suis-je";
import photoProfil from "../assets/profil-gold.png";

// C'est ici qu'on définit le titre de l'onglet dans le navigateur
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Caroline Vézina - qui suis-je ?" },
    {
      name: "description",
      content:
        "Caroline Vézina : Développeuse web front-end & Design UI. Découvrez mon parcours, mes compétences et mon approche créative.",
    },
  ];
}

export default function About() {
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
            qui suis-je ?<span className="code">&lt;/h1&gt;</span>
          </span>
        </h1>
        <p>
          Je suis <b>développeur web front-end</b> passionnée par la création
          d'expériences numériques élégantes, intuitives et centrées sur
          l'utilisateur. J'aime transformer des idées en interfaces claires et
          harmonieuses, où design et fonctionnalité se rencontrent
          naturellement.
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
