import { useState, useEffect } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  NavLink,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import ThemeToggle from "./components/ThemeToggle";

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
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // On devient opaque après 50px de scroll
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <nav
          className={`
        sticky top-0 z-50 w-full transition-all duration-300 px-4 py-1 flex
        ${
          isScrolled
            ? "nav-scrolled bg-[#f2f2f2]/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }
      `}
        >
          <NavLink to="/" end>
            <div className="navbar-brand">
              <h3>
                Caroli<span className="h3-alt">n</span>e Vé
                <span className="h3-alt">z</span>i
                <span className="h3-alt">n</span>a
              </h3>
              <h4>
                développeur web fro<span className="alt">n</span>t-e
                <span className="alt">n</span>d | desig
                <span className="alt">n</span>er ui
              </h4>
            </div>
          </NavLink>
          <div className="flex items-center gap-12 ml-auto">
            <NavLink to="/services">
              <span className="alt">m</span>es services
            </NavLink>
            <NavLink to="/realisations">
              <span className="alt">m</span>es réalisatio
              <span className="alt">n</span>s
            </NavLink>
            <NavLink to="/qui-suis-je">qui suis-je ?</NavLink>
            <NavLink to="/contact">
              <span className="alt">m</span>e joi<span className="alt">n</span>
              dre
            </NavLink>
            <ThemeToggle />
          </div>
        </nav>
        {children}
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
        ? "The requested page could not be found."
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
