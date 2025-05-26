import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FAQ.css';

function FAQ() {
  return (
    <div className="faq-page">
      <section className="hero-section">
        <div className="container">
          <h1>Veelgestelde Vragen</h1>
          <p className="intro-text">
            Hieronder vind je antwoorden op veelgestelde vragen over lichaamsgerichte traumatherapie bij Praktijkbasis. Staat jouw vraag er niet bij? Neem dan gerust contact op.
          </p>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="faq-list">
            <div className="faq-item">
              <h2>Wat is lichaamsgerichte traumatherapie?</h2>
              <div className="faq-answer">
                <p>
                  Lichaamsgerichte traumatherapie is een vorm van therapie waarbij we niet alleen praten over wat je hebt meegemaakt, maar ook letten op de signalen van je lichaam. Trauma kan zich namelijk vastzetten in je lichaam. Door bijvoorbeeld ademhaling, beweging of het bewust voelen van emoties te oefenen, helpen we je lichaam stap voor stap om de spanning en pijn los te laten. Alles gebeurt in jouw tempo, en je hoeft niets te doen wat je niet wilt. Zo kun je op een veilige manier moeilijke ervaringen verwerken.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h2>Moet ik christelijk zijn om therapie te volgen bij Praktijkbasis?</h2>
              <div className="faq-answer">
                <p>
                  Nee, iedereen is welkom, ongeacht geloof of achtergrond. Hoewel de praktijk werkt vanuit christelijke waarden zoals compassie en respect, wordt er niemand uitgesloten. Je hoeft je geloof niet te bespreken als je dat niet wilt; de therapie draait om jou en jouw verhaal.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h2>Is het eng of pijnlijk om over mijn trauma te praten?</h2>
              <div className="faq-answer">
                <p>
                  We begrijpen dat het spannend kan zijn om over moeilijke ervaringen te praten. Bij Praktijkbasis bepaal jij zelf het tempo en hoeveel je wilt delen. Er wordt niets opgedrongen. We creëren een veilige omgeving waarin je stap voor stap kunt werken aan het verwerken van je ervaringen. Het doel is juist om je te helpen spanning en pijn los te laten, niet om het te verergeren.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h2>Hoeveel sessies heb ik nodig?</h2>
              <div className="faq-answer">
                <p>
                  Dit verschilt per persoon en is afhankelijk van je persoonlijke situatie en doelen. Sommige mensen hebben voldoende aan 5-10 sessies, terwijl anderen baat hebben bij een langer traject. Na de intake bespreken we samen wat voor jou het beste lijkt en stellen we een behandelplan op. Dit plan evalueren we regelmatig en passen we indien nodig aan.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h2>Wordt de therapie vergoed door mijn verzekering?</h2>
              <div className="faq-answer">
                <p>
                  Lichaamsgerichte traumatherapie valt onder complementaire zorg en wordt niet vergoed vanuit de basisverzekering. Sommige zorgverzekeraars vergoeden (een deel van) de kosten vanuit een aanvullend pakket. Ik adviseer je om dit na te vragen bij je eigen zorgverzekeraar. Praktijkbasis is aangesloten bij beroepsvereniging X, waardoor vergoeding bij veel verzekeraars mogelijk is. Je ontvangt na elke sessie een factuur die je kunt indienen bij je zorgverzekeraar.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h2>Kan ik een keer kennismaken voordat ik besluit?</h2>
              <div className="faq-answer">
                <p>
                  Ja, een kennismakingsgesprek is altijd mogelijk voordat je besluit om te starten met therapie. Tijdens dit gesprek kunnen we kennismaken, kun je je vragen stellen en krijg je een indruk van de werkwijze. Na dit gesprek kun je in alle rust beslissen of je wilt starten met therapie.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h2>Wat is het verschil tussen lichaamsgerichte traumatherapie en reguliere psychotherapie?</h2>
              <div className="faq-answer">
                <p>
                  Bij reguliere psychotherapie ligt de nadruk vaak op het praten over en analyseren van problemen en gedachten. Bij lichaamsgerichte traumatherapie betrekken we ook het lichaam actief in het proces. Dit is belangrijk omdat trauma zich niet alleen in onze gedachten, maar ook in ons lichaam nestelt. Door te werken met lichamelijke sensaties, ademhaling en beweging kunnen we trauma's vaak dieper en effectiever verwerken dan alleen door te praten.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h2>Moet ik mijn trauma uitgebreid vertellen?</h2>
              <div className="faq-answer">
                <p>
                  Nee, je deelt alleen wat jij wilt en aankunt. We respecteren altijd jouw grenzen en werken stap voor stap. Soms is het niet eens nodig om in detail over traumatische gebeurtenissen te praten om toch te kunnen helen. We focussen ons op wat er nu in je lichaam gebeurt en hoe we je kunnen helpen om spanning los te laten en meer rust te vinden.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h2>Wat kan ik verwachten tijdens een eerste sessie?</h2>
              <div className="faq-answer">
                <p>
                  Tijdens de eerste sessie maken we kennis en bespreken we wat je naar de praktijk brengt. We nemen de tijd om je vragen te beantwoorden en uit te leggen hoe lichaamsgerichte traumatherapie werkt. We doen een korte intake om je situatie in kaart te brengen en bespreken wat je zou willen bereiken met de therapie. Aan het eind van de sessie maken we samen een plan voor het vervolg. De eerste sessie is vooral bedoeld om vertrouwen op te bouwen en een basis te leggen voor het verdere traject.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h2>Is lichaamsgerichte traumatherapie geschikt voor mij?</h2>
              <div className="faq-answer">
                <p>
                  Lichaamsgerichte traumatherapie kan helpen bij verschillende uitdagingen, zoals stress, angst, trauma, rouw, burn-out, en het verwerken van moeilijke levenservaringen. Het is geschikt voor mensen die voelen dat er 'iets vastzit' in hun lichaam of die merken dat praten alleen niet voldoende helpt. Tijdens een kennismakingsgesprek kunnen we samen onderzoeken of deze vorm van therapie bij jou past. Het is belangrijk dat je je comfortabel voelt bij deze benadering en open staat voor het werken met lichaamsbewustzijn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta-section">
        <div className="container">
          <h2>Nog vragen?</h2>
          <p>
            Staat je vraag er niet tussen of wil je meer informatie? Neem dan gerust contact met me op. Ik help je graag verder.
          </p>
          <Link to="/contact" className="contact-button">Neem contact op</Link>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
