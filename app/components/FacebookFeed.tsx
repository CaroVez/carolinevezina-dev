import { useEffect } from "react";

declare global {
  interface Window {
    FB: any;
  }
}

export default function FacebookFeed() {
  useEffect(() => {
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
    return () => clearTimeout(timer);
  }, []);

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
    <section className="facebook w-full flex flex-col items-center my-12 px-4">
      <h5 className="mb-8 text-center">
        {formatTitle("mes dernières actualités")}
      </h5>

      {/* ASTUCE : On force le min-width à 500px sur desktop pour que l'iframe 
        générée par FB "croie" qu'elle a de la place. 
      */}
      <div
        id="fb-container"
        className="w-full flex justify-center overflow-hidden"
        style={{ minHeight: "600px" }}
      >
        <div
          className="fb-page"
          data-href="https://www.facebook.com/profile.php?id=61586443329458"
          data-tabs="timeline"
          data-width="500"
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
    </section>
  );
}
