import FooterSection from "@/components/FooterSection";
import Navigation from "@/components/Navigation";

const Imprint = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navigation />
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-black mb-12">Impressum</h1>

          <div className="space-y-8 text-gray-700 text-lg">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG:</h2>
              <p>
                <strong>IhreZuhauseBeratung</strong><br />
                Inhaber: Christian Schrainer<br />
                Murrstraße 12<br />
                90429 Nürnberg<br />
                Deutschland
              </p>
              <p className="mt-4">
                Telefon: +49 151 42802843<br />
                E-Mail: c.schrainer@ihrezuhauseberatung.de<br />
                Webseite: www.ihrezuhauseberatung.de
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Vertreten durch:</h2>
              <p>
                Christian Schrainer
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
              <p>
                Christian Schrainer<br />
                Murrstraße 12<br />
                90429 Nürnberg<br />
                Deutschland
              </p>
            </div>

            {/* <div>
              <h2 className="text-2xl font-semibold mb-4">Handelsregistereintrag</h2>
              <p>
              Registergericht: Amtsgericht Nürnberg<br />
              Registernummer: HRB 12345 
              </p>
            </div> */}

            <div>
              <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss:</h2>
              <p className="mb-2">
                <strong>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
              <p>
                <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Urheberrecht:</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Online-Streitbeilegung:</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ec.europa.eu/consumers/odr/</a>
              </p>
              <p>
                Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default Imprint;
