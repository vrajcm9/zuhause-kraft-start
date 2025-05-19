import { MapPin, Phone, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-black mb-12">Über uns</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-black mb-6">IhreZuhauseBeratung</h2>

            <p className="text-gray-700 text-lg">
              Bei <strong>IhreZuhauseBeratung</strong> glauben wir daran, dass Erfolg mit Fairness, Transparenz und echter menschlicher Verbindung beginnt. <br /><br />
              Wir sind nicht nur eine weitere Vertriebsplattform, sondern eine <strong>Kontrollstation für Qualität und Kundenschutz</strong> im Direktvertrieb.
              <br /><br />
              Unsere Mission ist klar:
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li><strong>Echte Karrierechancen</strong> für motivierte Menschen schaffen</li>
                <li><strong>Vertriebsmitarbeiter stärken</strong> durch die besten Werkzeuge und Unterstützung</li>
                <li><strong>Kunden schützen</strong> durch verantwortungsvolle und vertrauenswürdige Praktiken</li>
              </ul>
              <br />
              Durch die Kombination von <strong>moderner Technologie</strong> und <strong>wahren menschlichen Werten</strong> helfen wir Menschen dabei, bessere Karrieren aufzubauen, echten Erfolg zu erreichen und den Direktvertrieb der Zukunft neu zu gestalten.
            </p>

            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-black" />
                <p className="text-gray-700">
                  Murrstraße 12<br />
                  90429 Nürnberg
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-black" />
                <a href="tel:015142802843" className="text-gray-700 hover:text-black">
                  015142802843
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-black" />
                <a href="mailto:c.schrainer@ihrezuhauseberatung.de" className="text-gray-700 hover:text-black">
                  c.schrainer@ihrezuhauseberatung.de
                </a>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden">
            {/* Statische Google Maps-Einbettung – Kein API-Schlüssel erforderlich */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.588482570156!2d11.038936576661214!3d49.454494371419216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f57ad6feacef7%3A0x7d47224d0721a9d1!2sIhreZuhauseBeratung.de!5e0!3m2!1sen!2sde!4v1745693661743!5m2!1sen!2sde" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="IhreZuhauseBeratung Standort"
            ></iframe>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default About;
