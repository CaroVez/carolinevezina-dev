import type { Route } from "./+types/home";
import Presentation from "../components/Presentation";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "politique de confidentialité | Caroline Vézina - développeur web front-end",
    },
    {
      name: "description",
      content:
        "Découvrez la politique de confidentialité de Caroline Vézina, développeur web front-end. Apprenez comment vos données sont collectées, utilisées et protégées lors de votre interaction avec mes services en ligne.",
    },
  ];
}

export default function Home() {
  const formatTitle = (title: string) => {
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
    <main className="mx-auto pb-[20vh]">
      {/* Section Présentation */}
      <Presentation
        className="politique"
        title="politique de confidentialité et mentions légales."
        description={
          <div>
            <p>
              La protection de votre vie privée est une priorité. Cette page a
              pour but de vous informer sur la manière dont vos données
              personnelles sont traitées, conformément à la <b>Loi 25</b> au
              Québec.
            </p>

            <section>
              <h5>{formatTitle("1. Mentions Légales")}</h5>
              <p>
                Ce site est la propriété de{" "}
                <b>{formatTitle("Caroline Vézina")}</b>, basée à Montréal,
                Québec. Hébergement{"\u00A0"}: <b>Netlify</b>.
              </p>
            </section>

            <section>
              <h5>{formatTitle("2. Collecte et utilisation")}</h5>
              <p>
                Je ne collecte que les renseignements transmis via le formulaire
                de contact (nom, courriel, sujet et message). Ces données
                servent exclusivement à répondre à vos demandes
                professionnelles.
              </p>
            </section>

            <section>
              <h5>{formatTitle("3. Partage et Conservation")}</h5>
              <p>
                Aucune donnée n'est vendue ou partagée à des tiers. J'utilise{" "}
                <b>{formatTitle("EmailJS")}</b> pour le transit sécurisé des
                messages vers ma boîte de réception. Vos renseignements sont
                conservés uniquement le temps nécessaire à nos échanges.
              </p>
            </section>

            <section>
              <h5>{formatTitle("4. Vos droits (Loi 25)")}</h5>
              <p>
                Vous disposez d'un droit d'accès, de rectification et de
                suppression de vos données. Pour toute demande, contactez-moi à{" "}
                <a
                  href="mailto:contact@carolinevezina.dev"
                  className="underline hover:text-[#ba7954]"
                >
                  contact@carolinevezina.dev
                </a>
                .
              </p>
            </section>

            <section>
              <h5>{formatTitle("5. Propriété intellectuelle")}</h5>
              <p>
                L'ensemble du contenu de ce site (textes, design, code) est la
                propriété exclusive de <b>{formatTitle("Caroline Vézina")}</b>.
                Toute reproduction est interdite sans autorisation.
              </p>
            </section>
          </div>
        }
        showArrows={false}
        showButtons={false}
      />
    </main>
  );
}
