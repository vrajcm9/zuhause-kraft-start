import FooterSection from "@/components/FooterSection";
import Navigation from "@/components/Navigation";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navigation />
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold text-black mb-12">Datenschutzerklärung</h1>

          <div className="space-y-8 text-gray-700 text-lg">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Verantwortliche Stelle</h2>
              <p>
                Christian Schrainer<br />
                Murrstraße 12<br />
                90429 Nürnberg<br />
                Deutschland<br />
                E-Mail: c.schrainer@ihrezuhauseberatung.de
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Datenerfassung auf dieser Website</h2>
              <p>
                Wir erheben personenbezogene Daten nur, wenn dies erforderlich ist, beispielsweise über Kontaktformulare oder Tracking-Tools (nur mit Ihrer Einwilligung). 
                Server-Logfiles werden aus technischen Gründen automatisch erfasst.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Zweck der Datenverarbeitung</h2>
              <p>
                Ihre Daten werden verarbeitet, um:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Ihre Anfragen zu beantworten</li>
                  <li>Unsere Dienstleistungen bereitzustellen</li>
                  <li>Unsere Website auf Grundlage anonymisierter Analysen zu verbessern</li>
                </ul>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Verwendung von Cookies</h2>
              <p>
                Wir verwenden Cookies, um die Benutzererfahrung zu verbessern und die Nutzung zu analysieren. Nicht essentielle Cookies werden nur mit Ihrer Zustimmung über ein Cookie-Banner gesetzt.
              </p>
            </div>

            {/* <div>
              <h2 className="text-2xl font-semibold mb-4">5. Tracking und Analysen</h2>
              <p>
                Wir verwenden Tools wie Heatmaps (z.B. NeatMaps) und anonyme Besucheranalysen, stets basierend auf Ihrer vorherigen Zustimmung.
              </p>
            </div> */}

            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Rechte der betroffenen Personen</h2>
              <p>
                Sie haben das Recht:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Auskunft über Ihre gespeicherten Daten zu verlangen</li>
                  <li>Berichtigung oder Löschung Ihrer Daten zu verlangen</li>
                  <li>Ihre Einwilligung jederzeit zu widerrufen</li>
                  <li>Widerspruch gegen die Datenverarbeitung aus berechtigten Gründen einzulegen</li>
                </ul>
                Bitte kontaktieren Sie uns über die oben angegebene E-Mail-Adresse.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Datensicherheit</h2>
              <p>
                Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor unbefugtem Zugriff, Manipulation, Verlust oder Zerstörung zu schützen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung jederzeit zu ändern, um sie an gesetzliche Anforderungen oder Änderungen unserer Dienstleistungen anzupassen.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default PrivacyPolicy;
