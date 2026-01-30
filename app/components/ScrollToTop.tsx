import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Affiche le bouton après 300px de scroll
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-6 z-30 flex items-center p-3 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.5)] transition-all duration-500 border text-[#479796] border-[#479796] bg-[#f2f2f2]/60 backdrop-blur-md hover:border-[#ba7954] hover:bg-[#ba7954] hover:text-white hover:border-[#ba7954] cursor-pointer group
      ${isVisible ? "opacity-100 " : "opacity-0  pointer-events-none"}`}
      aria-label="Retour en haut"
    >
      {/* Texte qui apparaît au hover */}
      <span className="max-w-0 overflow-hidden whitespace-nowrap font-bold uppercase text-xs tracking-widest transition-all duration-500 group-hover:max-w-[250px] group-hover:px-2">
        retour en haut
      </span>

      {/* Icône */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-arrow-up transition-transform"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
        />
      </svg>
    </button>
  );
}
