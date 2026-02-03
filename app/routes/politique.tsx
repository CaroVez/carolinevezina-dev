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
              pour but de vous informer sur les conditions d'utilisation de ce
              site et sur la manière dont vos données personnelles sont
              traitées, conformément à la <b>Loi 25</b> au Québec.
            </p>

            {/* --- CONDITIONS GÉNÉRALES --- */}
            <section>
              <h5>{formatTitle("1. Services et Devis")}</h5>
              <p>
                Les services présentés sur ce site (développement front-end et
                design ui) sont fournis à titre informatif.{" "}
                <b>{formatTitle("Caroline Vézina")}</b> se réserve le droit de
                modifier ses tarifs et offres à tout moment. Toute prestation
                fera l'objet d'un devis détaillé et d'un contrat de service
                distinct.
              </p>
            </section>
            <section>
              <h5>{formatTitle("2. Propriété intellectuelle")}</h5>
              <p>
                Tout le contenu publié sur ce site — textes, images, logos,
                design et code — est la propriété exclusive de{" "}
                <b>{formatTitle("Caroline Vézina")}</b>. Toute reproduction,
                distribution ou utilisation du contenu sans autorisation
                préalable est strictement interdite.
              </p>
            </section>
            <section>
              <h5>{formatTitle("3. Limitation de responsabilité")}</h5>
              <p>
                Bien que les informations soient fournies avec le plus grand
                soin, ce site est rendu disponible « tel quel ». L'entreprise ne
                pourra être tenue responsable des dommages directs ou indirects
                résultant de l'utilisation du site, d'une interruption de
                service ou d'erreurs techniques hors de son contrôle.
              </p>
            </section>

            {/* --- CONFIDENTIALITÉ --- */}
            <section>
              <h5>{formatTitle("4. Mentions Légales")}</h5>
              <p>
                Ce site est la propriété de{" "}
                <b>{formatTitle("Caroline Vézina")}</b>, basée à Montréal,
                Québec. Hébergement{"\u00A0"}: <b>Netlify</b>.
              </p>
            </section>
            <section>
              <h5>{formatTitle("5. Collecte et utilisation")}</h5>
              <p>
                Seuls les renseignements transmis volontairement via le
                formulaire de contact (nom, courriel, sujet et message) sont
                recueillis. Ces données servent exclusivement à la gestion des
                demandes de services et à la relation client.
              </p>
            </section>
            <section>
              <h5>{formatTitle("6. Partage et Conservation")}</h5>
              <p>
                Aucune donnée n'est vendue ou partagée à des tiers, sauf si
                requis par la loi. L'utilisation de{" "}
                <b>{formatTitle("EmailJS")}</b> assure le transit sécurisé des
                messages. Les renseignements sont conservés uniquement pour la
                durée nécessaire à la prestation demandée.
              </p>
            </section>
            <section>
              <h5>{formatTitle("7. Témoins (Cookies)")}</h5>
              <p>
                Ce site peut utiliser des témoins techniques pour optimiser la
                navigation. Ces données sont anonymes. Tout utilisateur peut
                configurer son navigateur pour bloquer ces témoins sans affecter
                l'accès au contenu.
              </p>
            </section>
            <section>
              <h5>{formatTitle("8. Vos droits (Loi 25)")}</h5>
              <p>
                Conformément à la Loi 25, vous disposez d'un droit d'accès, de
                rectification et de retrait de votre consentement. Pour exercer
                ces droits, veuillez communiquer à{"\u00A0"}:{" "}
                <a
                  href="mailto:contact@carolinevezina.dev"
                  className="underline hover:text-[#ba7954] transition-colors"
                >
                  contact@carolinevezina.dev
                </a>
                .
              </p>
            </section>
            <section>
              <h5>{formatTitle("9. Modifications")}</h5>
              <p>
                Ces conditions peuvent être mises à jour à tout moment afin de
                demeurer conformes aux exigences légales et aux pratiques de
                l'entreprise. La version publiée sur le site est celle en
                vigueur.
              </p>
            </section>

            <section className="mt-16 pt-8 border-t text-[10px] md:text-xs space-y-2">
              <p className="politique-responsable">
                {" "}
                Responsable de la protection des renseignements personnels
                {"\u00A0"}: <b>{formatTitle("Caroline Vézina")}</b>.
              </p>
              <p className="politique-date">
                Dernière mise à jour{"\u00A0"}:{" "}
                <b>
                  {new Date().toLocaleDateString("fr-CA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </b>
                .
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
