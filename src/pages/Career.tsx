import Navigation from "@/components/Navigation";
import { Briefcase, Send } from "lucide-react";
import FooterSection from "@/components/FooterSection";

const Career = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-black mb-12">Karriere</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-black mb-6">Werden Sie Teil von IhreZuhauseBeratung</h2>

            <p className="text-gray-700 text-lg">
              Bei <strong>IhreZuhauseBeratung</strong> gestalten wir eine neue, faire und moderne Welt des Direktvertriebs.
              Wir suchen aktuell nach <b>motivierten und leidenschaftlichen Vertriebsmitarbeitern</b>, die wirklich etwas bewegen wollen.
              <br /><br />
              Wenn Sie jemand sind, der:
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>sich persönlich und beruflich weiterentwickeln möchte</li>
                <li>an Fairness, Vertrauen und echten Kundennutzen glaubt</li>
                <li>motiviert ist, eine starke und bedeutungsvolle Karriere aufzubauen</li>
                <li>gerne eigenständig arbeitet, aber starke Unterstützung schätzt</li>
              </ul>
              <br />
              Dann freuen wir uns, von Ihnen zu hören!
            </p>

            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-black" />
                <p className="text-gray-700">
                  Positionen: Vertriebsmitarbeiter, Kundenberater, Berufseinsteiger
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Send className="w-5 h-5 text-black" />
                <p className="text-gray-700">
                  Bewerbungs-E-Mail: <a href="mailto:karriere@ihrezuhauseberatung.de" className="hover:text-black">karriere@ihrezuhauseberatung.de</a>
                </p>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden">
            <img
              src="./hiring.jpg"
              alt="Karrieremöglichkeiten"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Career;
