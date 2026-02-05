import { useEffect, useState } from "react";
import linkedinPreview from "../assets/linkedin-preview.png"; // Ton image/capture de profil

export default function LinkedinFeed() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleScroll = () => {
      // Apparaît après 300px de scroll comme les autres
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
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
      {/* BOUTON LINKEDIN (Placé au-dessus d'Instagram : bottom-72) */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-72 right-6 z-30 flex items-center p-3 rounded-full shadow-[0px_0px_10px_rgba(0,0,0,0.5)] transition-all duration-500 border text-[#479796] border-[#479796] bg-[#f2f2f2]/60 backdrop-blur-md hover:border-[#ba7954] hover:bg-[#ba7954] hover:text-white cursor-pointer group 
        ${isVisible ? "opacity-100 " : "opacity-0 pointer-events-none"}`}
        aria-label="Voir LinkedIn"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap font-bold uppercase text-xs tracking-widest transition-all duration-500 group-hover:max-w-[250px] group-hover:px-2">
          linkedin
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
      </button>

      {/* TIROIR LINKEDIN */}
      <section
        className={`facebook ${isVisible ? "visible" : ""} ${isOpen ? "open" : ""}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h5 className="w-8">{formatTitle("mon réseau professionnel")}</h5>
          <button
            onClick={() => setIsOpen(false)}
            className="close-panel text-2xl text-[#ba7954] hover:scale-110 transition-transform"
          >
            ✕
          </button>
        </div>

        <div className="facebook-wrapper overflow-y-auto">
          <a
            href="https://www.linkedin.com/in/carolinevézina"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full group"
          >
            <img
              src={linkedinPreview}
              alt="Profil LinkedIn"
              className="w-full rounded-[5px]"
            />
          </a>
        </div>
      </section>

      {/* Overlay */}
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
