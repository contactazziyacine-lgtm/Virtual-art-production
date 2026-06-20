import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';

export default function Terms() {
  const { contact } = useLang();
  const h2 = { fontSize: 'clamp(20px,2.2vw,26px)' };

  return (
    <article lang="fr" dir="ltr">
      <Seo
        title="Conditions d'utilisation"
        description="Conditions d'utilisation du site de Virtual Art Production, agence de production audiovisuelle. Règles d'accès, propriété intellectuelle, prestations et droit applicable."
      />

      {/* ============ EN-TÊTE ============ */}
      <header className="band--deep" style={{ paddingTop: 'clamp(118px,15vw,158px)', paddingBottom: 'clamp(40px,6vw,64px)' }}>
        <div className="wrap" style={{ maxWidth: 840 }}>
          <div className="eyebrow no-tick" style={{ color: '#fff', marginBottom: 16 }}>Mentions légales</div>
          <h1 className="h1" style={{ color: '#fff', marginBottom: 14, textWrap: 'balance' }}>Conditions d'utilisation</h1>
          <p style={{ color: 'rgba(234,242,238,0.72)', fontSize: 15.5, lineHeight: 1.7, maxWidth: 660 }}>
            Les présentes conditions régissent l'accès et l'utilisation du site de Virtual Art Production.
            En naviguant sur ce site, vous les acceptez sans réserve.
          </p>
          <p style={{ color: 'rgba(234,242,238,0.5)', fontSize: 13.5, marginTop: 12 }}>
            Dernière mise à jour : juin 2026 · Alger, Algérie
          </p>
        </div>
      </header>

      {/* ============ CONTENU ============ */}
      <section className="band band--surface">
        <div className="wrap">
          <Reveal className="prose" style={{ margin: '0 auto' }}>

            <p className="lead" style={{ fontSize: 19, color: 'var(--ink-soft)', marginBottom: 32 }}>
              Bienvenue sur le site de Virtual Art Production. Les présentes conditions définissent les règles
              d'utilisation de ce site et de ses contenus. Nous vous invitons à les lire attentivement.
            </p>

            <h2 className="h2" style={h2}>1. Éditeur du site</h2>
            <p>
              Ce site est édité par Virtual Art Production (ci-après « VAP » ou « nous »), agence de production
              audiovisuelle établie en Algérie.
            </p>
            <ul>
              <li>Société : Virtual Art Production</li>
              <li>Adresse : {contact.addressFr}</li>
              <li>E-mail : <a href={`mailto:${contact.email}`} className="alink">{contact.email}</a></li>
              <li>Téléphone : <a href={`tel:${contact.phoneRaw}`} className="alink">{contact.phone}</a></li>
            </ul>

            <h2 className="h2" style={h2}>2. Acceptation des conditions</h2>
            <p>
              En accédant à ce site ou en l'utilisant, vous acceptez pleinement les présentes conditions. Si vous
              n'en acceptez pas une partie, nous vous invitons à ne pas utiliser le site. Virtual Art Production se
              réserve le droit de modifier ces conditions à tout moment ; la date de dernière mise à jour figure
              en tête de page.
            </p>

            <h2 className="h2" style={h2}>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site — notamment les vidéos, films, photographies, animations
              et habillages graphiques (motion design), visuels, textes, logos et marques — est la propriété
              exclusive de Virtual Art Production, de ses clients ou de ses partenaires, et est protégé par les lois
              algériennes et internationales relatives à la propriété intellectuelle et au droit d'auteur.
            </p>
            <p>
              Les réalisations présentées dans notre portfolio et nos bandes démos (showreel) sont diffusées à titre
              de présentation, avec l'accord des clients concernés. Toute reproduction, diffusion, modification ou
              exploitation commerciale d'un contenu, en tout ou en partie, sans l'autorisation écrite préalable de
              Virtual Art Production, est strictement interdite.
            </p>

            <h2 className="h2" style={h2}>4. Limitation de responsabilité</h2>
            <p>
              Virtual Art Production s'efforce de fournir des informations exactes et à jour sur ce site. Toutefois,
              aucune garantie, expresse ou implicite, n'est donnée quant à l'exactitude, l'exhaustivité ou
              l'adéquation des contenus à un usage particulier. Virtual Art Production ne saurait être tenue
              responsable des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité
              d'utiliser ce site, dans les limites permises par la loi applicable.
            </p>

            <h2 className="h2" style={h2}>5. Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers des plateformes tierces (YouTube, réseaux sociaux, sites de
              partenaires). Virtual Art Production n'exerce aucun contrôle sur ces sites et décline toute
              responsabilité quant à leur contenu ou à leurs pratiques de confidentialité. La présence d'un lien ne
              vaut pas approbation de notre part.
            </p>

            <h2 className="h2" style={h2}>6. Données personnelles et confidentialité</h2>
            <p>
              La collecte et le traitement des données que vous transmettez via nos formulaires sont régis par notre{' '}
              <Link to="/privacy" className="alink">Politique de confidentialité</Link>, établie conformément à la loi
              algérienne n° 18-07 du 10 juin 2018.
            </p>

            <h2 className="h2" style={h2}>7. Utilisations interdites</h2>
            <p>Vous vous engagez à ne pas utiliser ce site pour :</p>
            <ul>
              <li>diffuser des contenus illicites, nuisibles ou frauduleux ;</li>
              <li>tenter d'accéder sans autorisation à nos systèmes ou à nos données ;</li>
              <li>perturber le bon fonctionnement du site ;</li>
              <li>reproduire ou redistribuer nos contenus sans autorisation ;</li>
              <li>collecter des données par des moyens automatisés (extraction, robots).</li>
            </ul>

            <h2 className="h2" style={h2}>8. Prestations, devis et droits des œuvres</h2>
            <p>
              Les services présentés sur ce site (tournage, montage, production de spots publicitaires, films
              d'entreprise, visites virtuelles 360°, motion design, communication digitale, etc.), ainsi que leurs
              modalités, sont fournis à titre indicatif et peuvent évoluer sans préavis. Les informations du site ne
              constituent pas une offre contractuelle : seule une proposition commerciale (devis) acceptée et signée
              engage Virtual Art Production.
            </p>
            <p>
              Les droits d'exploitation des œuvres audiovisuelles réalisées pour un client — étendue de la cession,
              durée, supports et territoires de diffusion — sont définis dans le devis ou le contrat conclu entre les
              parties, et non par les présentes conditions.
            </p>

            <h2 className="h2" style={h2}>9. Loi applicable et juridiction</h2>
            <p>
              Les présentes conditions sont régies et interprétées conformément au droit algérien. Tout litige
              relatif à l'utilisation de ce site relèvera de la compétence exclusive des tribunaux d'Alger, Algérie.
            </p>

            <h2 className="h2" style={h2}>10. Contact</h2>
            <p>Pour toute question concernant les présentes conditions, vous pouvez nous contacter :</p>
            <ul>
              <li>par e-mail : <a href={`mailto:${contact.email}`} className="alink">{contact.email}</a></li>
              <li>par téléphone : <a href={`tel:${contact.phoneRaw}`} className="alink">{contact.phone}</a></li>
              <li>par courrier : {contact.addressFr}</li>
            </ul>

            <p style={{ marginTop: 30, paddingTop: 26, borderTop: '1px solid var(--line)', display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              <Link to="/" className="alink">
                <span className="arw" style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>→</span> Retour à l'accueil
              </Link>
              <Link to="/privacy" className="alink">Politique de confidentialité <span className="arw">→</span></Link>
            </p>

          </Reveal>
        </div>
      </section>
    </article>
  );
}
