import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';

export default function Privacy() {
  const { contact } = useLang();
  const h2 = { fontSize: 'clamp(20px,2.2vw,26px)' };

  return (
    <article lang="fr" dir="ltr">
      <Seo
        title="Politique de confidentialité"
        description="Politique de confidentialité de Virtual Art Production, conforme à la loi algérienne n° 18-07 du 10 juin 2018 relative à la protection des données à caractère personnel."
      />

      {/* ============ EN-TÊTE ============ */}
      <header className="band--deep" style={{ paddingTop: 'clamp(118px,15vw,158px)', paddingBottom: 'clamp(40px,6vw,64px)' }}>
        <div className="wrap" style={{ maxWidth: 840 }}>
          <div className="eyebrow no-tick" style={{ color: '#fff', marginBottom: 16 }}>Confidentialité</div>
          <h1 className="h1" style={{ color: '#fff', marginBottom: 14, textWrap: 'balance' }}>Politique de confidentialité</h1>
          <p style={{ color: 'rgba(234,242,238,0.72)', fontSize: 15.5, lineHeight: 1.7, maxWidth: 640 }}>
            Conformément à la loi algérienne n° 18-07 du 10 juin 2018 relative à la protection des personnes
            physiques dans le traitement des données à caractère personnel.
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
              Virtual Art Production accorde une grande importance à la protection de votre vie privée. La présente
              politique vous explique quelles données nous recueillons, pourquoi, comment elles sont protégées et
              quels sont vos droits.
            </p>

            <h2 className="h2" style={h2}>1. Responsable du traitement</h2>
            <p>
              Virtual Art Production (ci-après « VAP » ou « nous ») détermine les finalités et les moyens du
              traitement des données personnelles recueillies sur ce site.
            </p>
            <ul>
              <li>Société : Virtual Art Production</li>
              <li>Adresse : {contact.addressFr}</li>
              <li>E-mail : <a href={`mailto:${contact.email}`} className="alink">{contact.email}</a></li>
              <li>Téléphone : <a href={`tel:${contact.phoneRaw}`} className="alink">{contact.phone}</a></li>
            </ul>

            <h2 className="h2" style={h2}>2. Base légale</h2>
            <p>Le traitement de vos données s'inscrit dans le cadre juridique algérien, notamment :</p>
            <ul>
              <li>la loi n° 18-07 du 10 juin 2018 relative à la protection des personnes physiques dans le traitement des données à caractère personnel ;</li>
              <li>le décret présidentiel n° 22-88 du 13 mars 2022 portant organisation et fonctionnement de l'Autorité nationale de protection des données à caractère personnel (ANPDP).</li>
            </ul>
            <p>
              Selon le contexte, nous nous appuyons sur votre consentement, sur l'exécution d'un contrat ou d'une
              demande préalable, ou sur notre intérêt légitime à faire connaître et à développer notre activité.
            </p>

            <h2 className="h2" style={h2}>3. Données collectées</h2>
            <p>
              Lorsque vous nous contactez ou demandez un devis via nos formulaires, nous sommes amenés à recueillir :
            </p>
            <ul>
              <li>vos informations d'identité : nom et, le cas échéant, nom de votre société ou organisation ;</li>
              <li>vos coordonnées : adresse e-mail et numéro de téléphone ;</li>
              <li>les éléments relatifs à votre projet : type de prestation souhaitée, objectif et description de votre demande ;</li>
              <li>le contenu des messages que vous nous adressez ;</li>
              <li>des données techniques générées automatiquement (adresse IP, type de navigateur) via les journaux du serveur.</li>
            </ul>

            <h2 className="h2" style={h2}>4. Finalités du traitement</h2>
            <p>Vos données ne sont utilisées que pour des finalités déterminées :</p>
            <ul>
              <li>traiter vos demandes de contact, de renseignement et de devis ;</li>
              <li>vous transmettre nos propositions, documents et informations sur nos services audiovisuels ;</li>
              <li>assurer le suivi de la relation commerciale et la bonne exécution de nos prestations ;</li>
              <li>améliorer le contenu et le fonctionnement de notre site.</li>
            </ul>

            <h2 className="h2" style={h2}>5. Durée de conservation</h2>
            <p>
              Les données transmises via nos formulaires sont conservées pendant une durée maximale de trois (3) ans
              à compter de votre dernier contact. Passé ce délai, elles sont supprimées ou anonymisées de manière
              sécurisée.
            </p>

            <h2 className="h2" style={h2}>6. Destinataires des données</h2>
            <p>
              Vos données sont traitées uniquement par les membres habilités de l'équipe de Virtual Art Production.
              Nous ne vendons, ne louons ni ne cédons vos données personnelles à des tiers à des fins commerciales ou
              publicitaires. Elles peuvent, le cas échéant, être hébergées par nos prestataires techniques, dans le
              seul but d'assurer le bon fonctionnement du site.
            </p>

            <h2 className="h2" style={h2}>7. Vos droits (article 20 de la loi 18-07)</h2>
            <p>Conformément à la loi n° 18-07, vous disposez des droits suivants sur vos données :</p>
            <ul>
              <li>droit d'accès : savoir si vos données sont traitées et en obtenir une copie ;</li>
              <li>droit de rectification : faire corriger des informations inexactes ou incomplètes ;</li>
              <li>droit d'effacement : demander la suppression de vos données ;</li>
              <li>droit d'opposition : vous opposer, pour un motif légitime, au traitement de vos données ;</li>
              <li>droit de retrait : retirer votre consentement à tout moment.</li>
            </ul>
            <p>
              Pour exercer ces droits, il vous suffit de nous écrire à{' '}
              <a href={`mailto:${contact.email}`} className="alink">{contact.email}</a>. Nous nous engageons à vous
              répondre dans un délai de trente (30) jours.
            </p>

            <h2 className="h2" style={h2}>8. Cookies</h2>
            <p>
              Notre site n'utilise que des cookies strictement nécessaires à son bon fonctionnement, comme la
              mémorisation de votre langue d'affichage. Aucun cookie publicitaire ou de pistage n'est déposé sur
              votre appareil.
            </p>

            <h2 className="h2" style={h2}>9. Sécurité des données (article 44 de la loi 18-07)</h2>
            <p>
              Virtual Art Production met en œuvre les mesures techniques et organisationnelles appropriées afin de
              protéger vos données contre la perte, l'altération, l'accès ou la divulgation non autorisés.
            </p>

            <h2 className="h2" style={h2}>10. Nous contacter</h2>
            <p>
              Pour toute question relative à la présente politique ou à vos données personnelles, vous pouvez nous
              joindre :
            </p>
            <ul>
              <li>par e-mail : <a href={`mailto:${contact.email}`} className="alink">{contact.email}</a></li>
              <li>par téléphone : <a href={`tel:${contact.phoneRaw}`} className="alink">{contact.phone}</a></li>
              <li>par courrier : {contact.addressFr}</li>
            </ul>

            <p style={{ marginTop: 30, paddingTop: 26, borderTop: '1px solid var(--line)' }}>
              <Link to="/" className="alink">
                <span className="arw" style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>→</span> Retour à l'accueil
              </Link>
            </p>

          </Reveal>
        </div>
      </section>
    </article>
  );
}
