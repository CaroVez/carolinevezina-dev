import { motion } from "framer-motion";
import { Link } from "react-router";

interface PresentationProps {
  title: string;
  subtitle?: string;
  subtitleClass?: string;
  description: React.ReactNode;
  image?: string;
  imageClass: string; // pour changer entre image-profil-1, 2, etc.
  descriptionClass?: string;
  showArrows?: boolean;
  showButtons?: boolean;
}

export default function Presentation({
  title,
  subtitle,
  subtitleClass = "",
  description,
  image,
  imageClass = "image-profil",
  descriptionClass = "",
  showArrows = true,
  showButtons = false,
}: PresentationProps) {
  // fonction de formatage automatique
  const formatTitle = (text: string) => {
    const parts = text.split(/(m|n)/gi);

    return parts.map((part, index) =>
      /m|n/i.test(part) ? (
        <span key={index} className="alt">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="presentation">
      <div className="presentation-container">
        {image && <img src={image} alt="Illustration" className={imageClass} />}

        <div className="presentation-content">
          <h1>
            <span className="typewriter">
              <span className="code">&lt;h1&gt;</span>
              {formatTitle(title)}
              <span className="code">&lt;/h1&gt;</span>
            </span>
          </h1>
          {subtitle && (
            <h2 className={subtitleClass}>{formatTitle(subtitle)}</h2>
          )}
          <p className={descriptionClass}>{description}</p>
        </div>

        {showArrows && (
          <div className="arrows">
            {[0, 1, 2].map((i) => (
              <motion.svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </motion.svg>
            ))}
          </div>
        )}

        {showButtons && (
          <div className="buttons">
            <Link to="/services" className="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-workspace"
                viewBox="0 0 16 16"
              >
                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
              </svg>
              <p>
                <span className="alt">m</span>es services
              </p>
            </Link>

            <Link to="/realisations" className="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-collection"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z" />
              </svg>
              <p>
                <span className="alt">m</span>es réalisatio
                <span className="alt">n</span>s
              </p>
            </Link>
            <Link to="/qui-suis-je" className="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-emoji-laughing"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M12.331 9.5a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5" />
              </svg>
              <p>qui suis-je ?</p>
            </Link>

            <Link to="/contact" className="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
              <p>
                <span className="alt">m</span>e joi
                <span className="alt">n</span>dre
              </p>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
