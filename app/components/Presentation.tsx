import { motion } from "framer-motion";

interface PresentationProps {
  title: string;
  subtitle?: string;
  description: React.ReactNode;
  image: string;
  imageClass: string; // pour changer entre image-profil-1, 2, etc.
  descriptionClass?: string;
  showArrows?: boolean;
}

export default function Presentation({
  title,
  subtitle,
  description,
  image,
  imageClass = "image-profil",
  descriptionClass = "",
  showArrows = true,
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
      <img src={image} alt="Illustration" className={imageClass} />
      <h1>
        <span className="typewriter">
          <span className="code">&lt;h1&gt;</span>
          {formatTitle(title)}
          <span className="code">&lt;/h1&gt;</span>
        </span>
      </h1>
      {subtitle && <h2>{formatTitle(subtitle)}</h2>}
      <p className={descriptionClass}>{description}</p>

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
    </section>
  );
}
