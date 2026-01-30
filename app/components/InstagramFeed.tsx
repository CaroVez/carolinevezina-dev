import { useEffect, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": any;
    }
  }
}

export default function InstagramFeed() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Verrouiller le scroll du corps de la page quand le panneau est ouvert
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleScroll = () => {
      // Les bulles apparaissent après 300px de scroll
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();

    const scriptId = "behold-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "module";
      script.src = "https://w.behold.so/widget.js";
      document.head.append(script);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const formatTitle = (text: string) => {
    const parts = text.split(/(m|n)/gi);
    return parts.map((part, index) =>
      /m|n/i.test(part) ? (
        <span key={index} className="alt">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <>
      {/* BOUTON INSTAGRAM (Placé au-dessus de Facebook : bottom-56) */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-56 right-6 z-30 flex items-center p-3 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.5)] transition-all duration-500 border text-[#479796] border-[#479796] bg-[#f2f2f2]/60 backdrop-blur-md hover:border-[#ba7954] hover:bg-[#ba7954] hover:text-white hover:border-[#ba7954] cursor-pointer group 
        ${isVisible ? "opacity-100 " : "opacity-0 pointer-events-none"}`}
        aria-label="Voir Instagram"
      >
        {/* Texte qui apparaît au hover */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap font-bold uppercase text-xs tracking-widest transition-all duration-500 group-hover:max-w-[250px] group-hover:px-2">
          instagram
        </span>

        {/* Icône */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </svg>
      </button>

      {/* TIROIR INSTAGRAM (on réutilise la classe 'facebook' pour le CSS) */}
      <section
        className={`facebook ${isVisible ? "visible" : ""} ${isOpen ? "open" : ""}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h5 className="w-8">{formatTitle("mes dernières actualités")}</h5>
          <button
            onClick={() => setIsOpen(false)}
            className="close-panel text-2xl text-[#ba7954] hover:scale-110 transition-transform"
          >
            ✕
          </button>
        </div>

        <div
          className="facebook-wrapper overflow-y-auto"
          style={{ minHeight: "400px" }}
        >
          {/* @ts-ignore */}
          <behold-widget feed-id="oZTRwgnJ445dAfXhaCqR"></behold-widget>
        </div>
      </section>

      {/* Overlay pour fermer en cliquant à côté */}
      {isOpen && (
        <div
          className="fb-overlay"
          onClick={() => setIsOpen(false)}
          onWheel={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        />
      )}
    </>
  );
}
