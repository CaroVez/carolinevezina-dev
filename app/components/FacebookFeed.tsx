import { useEffect, useState } from "react";

declare global {
  interface Window {
    FB: any;
  }
}

export default function FacebookFeed() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Empêche le scroll
      document.body.style.overflow = "hidden";
    } else {
      // Réactive le scroll
      document.body.style.overflow = "";
    }

    let tick = false;

    const handleScroll = () => {
      if (!tick) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 300);
          tick = false;
        });
        tick = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Fonction pour charger ou parser le widget
    const loadFacebookSDK = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
      } else {
        if (!document.getElementById("facebook-jssdk")) {
          const script = document.createElement("script");
          script.id = "facebook-jssdk";
          script.src =
            "https://connect.facebook.net/fr_CA/sdk.js#xfbml=1&version=v18.0";
          script.async = true;
          script.defer = true;
          script.crossOrigin = "anonymous";
          document.body.appendChild(script);
        }
      }
    };

    // On laisse un petit délai (100ms) pour être sûr que le DOM est prêt
    const timer = setTimeout(loadFacebookSDK, 100);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [isOpen]);

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
      ),
    );
  };

  return (
    <>
      {/* BOUTON MOBILE (visible uniquement sur petit écran) */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-56 right-6 z-30 flex items-center p-3 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.5)] transition-all duration-500 border text-[#479796] border-[#479796] bg-[#f2f2f2]/60 backdrop-blur-md hover:border-[#ba7954] hover:bg-[#ba7954] hover:text-white hover:border-[#ba7954] cursor-pointer group 
        ${isVisible ? "opacity-100 " : "opacity-0 pointer-events-none"}`}
        aria-label="Voir Facebook"
      >
        {/* Texte qui apparaît au hover */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap font-bold uppercase text-xs tracking-widest transition-all duration-500 group-hover:max-w-[250px] group-hover:px-2">
          facebook
        </span>

        {/* Icône */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
        </svg>
      </button>

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

        <div className="facebook-wrapper">
          <div
            id="fb-container"
            className="w-full flex justify-center"
            style={{ minHeight: "400px" }}
          >
            <div
              className="fb-page"
              data-href="https://www.facebook.com/profile.php?id=61586443329458"
              data-tabs="timeline"
              data-width="350"
              data-height="700"
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="true"
              data-show-facepile="fasle"
            >
              <blockquote
                cite="https://www.facebook.com/profile.php?id=61586443329458"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/profile.php?id=61586443329458">
                  Chargement du flux...
                </a>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      {/* Fond sombre quand le tiroir est ouvert */}
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
