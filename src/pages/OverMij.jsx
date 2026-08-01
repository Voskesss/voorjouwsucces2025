import React from "react";
import { Link } from "react-router-dom";

function OverMij() {
  return (
    <div className="over-mij-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Over Jos</span>
          <h1>De AI-duizendpoot die jouw bedrijf mist</h1>
          <p>
            Ik ben Jos Klijnhout. Oplossingen bedenken is mijn ding, mensen
            helpen is mijn drive. Al mijn hele werkende leven ben ik de persoon
            die gebeld wordt als er iets opgelost moet worden – en dat is
            precies wat ik het liefste doe.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose">
            <h2>Waar ik vandaan kom</h2>
            <p>
              Ruim twintig jaar was ik ondernemer in de facilitaire wereld, als
              medeeigenaar van Infacilities en TFM. Daar leerde ik wat elke
              ondernemer kent: personeel, klanten, processen – en aan het eind
              van de maand moet het kloppen. En daar ontdekte ik ook mijn rol:
              als er ergens een probleem lag, kwam het vanzelf op mijn bord.
              Niet omdat het moest, maar omdat ik het niet kan láten om
              oplossingen te bedenken.
            </p>
            <p>
              Daarna heb ik jarenlang bedrijven geholpen met hun websites en
              digitale omgeving. Mooi werk, maar ik zag het veranderen: een
              website alleen is niet meer genoeg. De afgelopen jaren heb ik me
              daarom volledig gestort op wat er nú mogelijk is – AI, slimme
              koppelingen tussen systemen, agents die werk uit handen nemen.
              Niet als hype, maar als gereedschap.
            </p>

            <h2>Hoe ik naar techniek kijk</h2>
            <p>
              Ik begin nooit bij techniek, altijd bij de vraag. Wat knelt er?
              Wat kost tijd, geld of energie? Waar wil je naartoe? Pas als dat
              helder is, komt het gereedschap op tafel – en dat kan van alles
              zijn: een koppeling tussen je systemen, een agent die taken
              overneemt, een dashboard dat eindelijk laat zien wat er in je
              bedrijf gebeurt, of een digitale omgeving die weer van deze tijd is.
            </p>
            <p>
              <strong>Het middel volgt uit jouw vraag, nooit andersom.</strong>{" "}
              Daarom hoor je mij niet over technologieën die toevallig in de mode
              zijn. Als een simpele aanpassing je probleem oplost, adviseer ik
              een simpele aanpassing.
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

            <h2>Voor wie ik werk</h2>
            <p>
              Voor bedrijven, klein en groot. Van de zzp'er die verzuipt in
              administratie tot de MKB-organisatie waar systemen niet met elkaar
              praten. Wat mijn klanten gemeen hebben: ze willen vooruit in hun
              digitale omgeving, maar zitten niet te wachten op een technisch
              verhaal. Die vertaling – van jouw vraag naar een werkende
              oplossing – is precies mijn vak.
            </p>

            <h2>Waar ik voor sta</h2>
            <p>
              <strong>Mensen eerst.</strong> Techniek is gereedschap; het gaat om
              jou, je team en je klanten.
            </p>
            <p>
              <strong>Eerlijk advies.</strong> Als iets niet slim of niet nodig
              is, zeg ik dat gewoon – ook als me dat een opdracht kost.
            </p>
            <p>
              <strong>Behapbare stappen.</strong> Klein beginnen, snel resultaat,
              en in jouw tempo verder bouwen. Geen dikke rapporten, geen
              trajecten van een half jaar.
            </p>
            <p>
              <strong>Gewone taal.</strong> Je hoeft niets van techniek te weten
              om met mij te kunnen werken. Dat is mijn werk, niet het jouwe.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>De koffie staat klaar</h2>
          <p>
            Loop je ergens tegenaan, of voel je gewoon dat je bedrijf digitaal
            een slag moet maken? Vertel me je verhaal. Ik luister, denk mee en
            je krijgt altijd minstens één idee waar je meteen wat aan hebt.
          </p>
          <Link to="/contact" className="btn btn-light">Plan een gratis kennismaking</Link>
        </div>
      </section>
    </div>
  );
}

export default OverMij;
