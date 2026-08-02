import React from "react";
import { Link } from "react-router-dom";

function OverMij() {
  return (
    <div className="over-mij-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Over Jos</span>
          <h1>Oplossingen bedenken is mijn ding, mensen helpen is mijn drive</h1>
          <p>
            Ik ben Jos Klijnhout, uit Oosterbeek. Al mijn hele werkende leven
            ben ik de persoon die gebeld wordt als er iets opgelost moet worden
            – en dat is precies wat ik het liefste doe.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose">
            <h2>Waar ik vandaan kom</h2>
            <p>
              Ruim twintig jaar was ik ondernemer: met twee compagnons bouwde ik
              een landelijke facilitaire organisatie op van 14 naar 350
              medewerkers, die we in 2018 verkochten. Daar leerde ik hoe een
              bedrijf van binnenuit werkt – van strategie tot werkvloer, van
              personeel tot de cijfers die aan het eind van de maand moeten
              kloppen.
            </p>
            <p>
              Techniek is daarbij altijd de rode draad geweest. Vanaf de
              begintijd van internet ben ik bezig met websites, SEO en
              programmeren; in 2007 bouwde ik zelf een webbased urenregistratie
              voor ons eigen bedrijf. En de afgelopen vijf jaar werk ik
              dagelijks met AI. Drie eigen platforms staan live – The Last
              Farewell, FacilityFinder en AiBackoffice – zelf bedacht, zelf
              gebouwd, zelf uitgerold.
            </p>
            <p>
              Daarnaast heb ik een coachopleiding afgerond. Omdat techniek pas
              werkt als mensen meegaan.
            </p>

            <h2>Waarom het bij AI vaak misgaat</h2>
            <p>
              Bijna elk bedrijf weet inmiddels dat er iets met AI moet. Waar je
              begint en wie het gaat bouwen, weet vrijwel niemand. Daar loopt
              het meestal vast: een pilot, een chatbot, een rapport – en daarna
              gebeurt er niets meer.
            </p>
            <p>
              Ik werk andersom. Eerst het werk zelf: waar loopt het vast, wat
              kost onnodig tijd, waar zit de irritatie. Daarna pas de techniek.
              <strong> En dan bouw ik het.</strong> Ik ben geen adviseur die een
              rapport achterlaat en geen developer die alleen code oplevert. Ik
              zit ertussenin – en dat is precies waar het misgaat bij de meeste
              organisaties.
            </p>

            <h2>Op weg geholpen – of partner voor de lange termijn</h2>
            <p>
              Waarom een duizendpoot? Omdat de meeste bedrijven niet één digitaal
              probleem hebben, maar tien kleine: een koppeling hier, wat handwerk
              daar, een website die achterloopt, vragen over AI. Te klein voor
              een groot bureau, te veel om te blijven liggen. Precies dat gat
              vul ik in – één iemand die het allemaal kan oppakken.
            </p>
            <p>
              <strong>En ik maak mezelf misbaar.</strong> Ik help je op weg en
              zorg dat jij en je team er zelfstandig mee verder kunnen – dat is
              mijn doel, niet een abonnement. Wil je liever dat ik als vaste
              partner op de achtergrond betrokken blijf? Ook prima. Jij kiest,
              niet ik.
            </p>

            <h2>Even zonder cv</h2>
            <p>
              Ik woon in Oosterbeek met mijn vrouw en twee kinderen van 16 en
              14. Ik ben nieuwsgierig, direct en niet te beroerd om zelf de
              mouwen op te stropen. Als ik ergens in duik, laat ik het niet los
              tot het werkt.
            </p>

            <h2>Wat ik zoek</h2>
            <p>
              Naast losse opdrachten sta ik open voor een vaste samenwerking met
              een organisatie die wil bouwen, niet alleen onderzoeken:
            </p>
            <ul className="check-list">
              <li>24 tot 32 uur per week</li>
              <li>Loondienst of freelance, beide bespreekbaar</li>
              <li>Regio Arnhem, Nijmegen, Ede en omgeving</li>
              <li>Een organisatie die wil bouwen, niet alleen onderzoeken</li>
              <li>Ruimte en vertrouwen, in ruil voor betrokkenheid en resultaat</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>De koffie staat klaar</h2>
          <p>
            Loop je ergens tegenaan, zie je kansen met AI, of zoek je iemand
            die het ook echt komt bouwen? Vertel me je verhaal. Ik luister,
            denk mee en je krijgt altijd minstens één idee waar je meteen wat
            aan hebt.
          </p>
          <Link to="/contact" className="btn btn-light">Plan een gratis kennismaking</Link>
        </div>
      </section>
    </div>
  );
}

export default OverMij;
