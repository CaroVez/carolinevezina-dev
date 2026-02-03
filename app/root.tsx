import { useState, useEffect } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  NavLink,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import ThemeToggle from "./components/ThemeToggle";
import ScrollToTop from "./components/ScrollToTop";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },

  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  { rel: "manifest", href: "/site.webmanifest" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // On devient opaque après 50px de scroll
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Pour un effet de glissement fluide
    });
  };

  const formatTitle = (title: string) => {
    // On sépare le texte à chaque 'm', 'M', 'n' ou 'N'
    const parts = title.split(/(m|n|z)/gi);

    return parts.map((part, index) =>
      /m|n|z/i.test(part) ? (
        <span key={index} className="alt">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#479796" />
        <meta name="theme-color" content="#479796" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* HEADER : Nom en haut à gauche (Fixe sur mobile et desktop) */}
        <header
          className={`sticky top-0 z-50 w-full transition-all duration-300 px-4 py-1 flex 
          ${isScrolled ? "nav-scrolled bg-[#f2f2f2]/80 backdrop-blur-md shadow-md border-b border-[#479796]" : "bg-transparent"}`}
        >
          <NavLink to="/" end>
            <div className="navbar-brand">
              <h3>
                Caroli<span className="h3-alt">n</span>e Vé
                <span className="h3-alt">z</span>i
                <span className="h3-alt">n</span>a
              </h3>
              <h4>{formatTitle("développeur web front-end | designer ui")}</h4>
            </div>
          </NavLink>

          <div className="hidden lg:flex items-center gap-12 ml-auto">
            <NavLink to="/mes-services">{formatTitle("mes services")}</NavLink>
            <NavLink to="/mes-realisations">
              {formatTitle("mes réalisations")}
            </NavLink>
            <NavLink to="/qui-suis-je">{formatTitle("qui suis-je ?")}</NavLink>
            <NavLink to="/me-joindre">{formatTitle("me joindre")}</NavLink>
            <ThemeToggle />
          </div>
        </header>

        {/* BARRE DE NAVIGATION BASSE (Mobile uniquement) */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 mobile-tab-bar backdrop-blur-md border-t border-[#479796] px-2 pt-4 pb-8">
          <div className="flex justify-around items-center">
            <NavLink to="/mes-services" className="mobile-nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-person-workspace"
                viewBox="0 0 16 16"
              >
                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
              </svg>
            </NavLink>

            <NavLink to="/mes-realisations" className="mobile-nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-collection"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z" />
              </svg>
            </NavLink>

            <NavLink to="/qui-suis-je" className="mobile-nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-emoji-laughing"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M12.331 9.5a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5" />
              </svg>
            </NavLink>

            <NavLink to="/me-joindre" className="mobile-nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </NavLink>

            <div className="flex flex-col items-center gap-1">
              <ThemeToggle />
            </div>
          </div>
        </nav>
        {children}

        <footer
          className={`py-4 mt-auto ${isHome ? "home-footer" : "pages-footer"}`}
        >
          <div className="container mx-auto text-center w-[70%] md:w-full">
            <p className="text-[10px] md:text-xs tracking-widest pb-24 lg:pb-0">
              © {new Date().getFullYear()}{" "}
              <span>
                {formatTitle(
                  `Caroline Vézina | développeur web front-end | designer ui`,
                )}
              </span>{" "}
              - tous droits réservés -{" "}
              <NavLink
                to="/politique-de-confidentialite"
                className="transition-colors"
              >
                politique de confidentialité et mentions légales
              </NavLink>
            </p>
          </div>
        </footer>

        <ScrollToTop />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "la page que vous recherchez n'existe pas"
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
