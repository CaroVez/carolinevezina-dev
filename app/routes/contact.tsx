import type { Route } from "./+types/contact";
import Presentation from "../components/Presentation";
import photoProfil from "../assets/profil1.png";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "me joindre | Caroline Vézina - développeur web front-end" },
    {
      name: "description",
      content:
        "Vous souhaitez discuter d'un projet web ou en savoir plus sur mes services ? Contactez-moi pour vos besoins en développement front-end et design UI. À bientôt !",
    },
  ];
}

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"" | "sending" | "success" | "error">(
    ""
  );

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (form.current) {
      emailjs
        .sendForm(
          "service_0ke8d4d", // SERVICE_ID
          "template_1t9ji6o", // TEMPLATE_ID
          form.current,
          "NiesIfimsw2Du_rsf" // CLE_PUBLIQUE
        )
        .then(() => {
          setStatus("success");
          form.current?.reset();
        })
        .catch(() => {
          setStatus("error");
        });
    }
  };

  return (
    <main className="mx-auto">
      {/* Section Présentation */}
      <Presentation
        image={photoProfil}
        imageClass="image-profil-contact"
        title="me joindre"
        description={
          <>
            Vous souhaitez discuter d'un projet ou simplement en savoir plus sur
            mes services ? N'hésitez pas à me contacter !
          </>
        }
        showArrows={true}
        showButtons={false}
      />

      <section className="contact pb-[12vh]">
        <div className="contact-info">
          <h5>
            coordo<span className="alt">nn</span>ées
          </h5>
          <div className="work-scope">
            <p>
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
              <a href="mailto:contact@carolinevezina.dev">
                contact@carolinevezina.dev
              </a>
            </p>

            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              basé à Montréal, QC
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-laptop"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
              </svg>
              disponible pour des mandats à distance
            </p>
          </div>
          <p className="response-time">
            **je répondrai à vos demandes dans les 24 heures ouvrables**
          </p>
        </div>

        <div className="contact-form">
          <h5>formulaire de contact</h5>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="nom"
                required
                className="flex-1 border border-gray-300 p-3 rounded-[5px] focus:outline-none focus:border-[#479796] focus:shadow-[0_0_0_3px_rgba(71,151,150,0.25)] transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="courriel"
                required
                className="flex-1 border border-gray-300 p-3 rounded-[5px] focus:outline-none focus:border-[#479796] focus:shadow-[0_0_0_3px_rgba(71,151,150,0.25)] transition-colors"
              />
            </div>
            <select
              name="title"
              required
              defaultValue=""
              className="flex-1 border border-gray-300 p-3 rounded-[5px] focus:outline-none focus:border-[#479796] focus:shadow-[0_0_0_3px_rgba(71,151,150,0.25)] transition-colors"
            >
              <option value="" disabled>
                veuillez choisir un sujet
              </option>
              <option value="projet web sur mesure">
                projet web sur mesure
              </option>
              <option value="site clé en main sur WordPress">
                site prêt-à-gérer sur WordPress
              </option>
              <option value="maquette sur Figma">maquette sur Figma</option>
              <option value="autre">autre</option>
            </select>

            <textarea
              name="message"
              rows={6}
              placeholder="message"
              required
              className="border border-gray-300 p-3 rounded-[5px] focus:outline-none focus:border-[#479796] focus:shadow-[0_0_0_3px_rgba(71,151,150,0.25)] transition-colors"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className="self-center w-full md:self-start md:w-fit tracking-widest"
            >
              {status === "sending" ? "envoi en cours..." : "envoyer"}
            </button>

            {/* Messages de retour utilisateur */}
            {status === "success" && (
              <p className="text-[#ba7954] font-bold text-center animate-bounce">
                Merci ! Votre message a été transmis avec succès.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 font-bold text-center">
                Oups ! Une erreur est survenue. Veuillez réessayer plus tard.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
