import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface TypewriterProps {
  text: string;
}

export default function Typewriter({ text }: TypewriterProps) {
  const fullContent = `<h1>${text}</h1>`;
  const letters = Array.from(fullContent);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07 },
    },
  };

  const letterVariants: Variants = {
    hidden: { display: "none" },
    visible: { display: "inline" },
  };

  return (
    <div className="typewriter-wrapper">
      <motion.h1
        className="typewriter-title"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => {
          const isTag = index < 4 || index >= letters.length - 5;
          const isAlt = !isTag && /m|n|z/i.test(letter);

          return (
            <motion.span
              key={index}
              variants={letterVariants}
              className={`${isTag ? "code-tag" : ""} ${isAlt ? "alt" : ""}`}
            >
              {letter}
            </motion.span>
          );
        })}

        <motion.span
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            times: [0, 0.5, 0.5, 1],
            ease: "linear",
          }}
          className="cursor-line"
        />
      </motion.h1>
    </div>
  );
}
