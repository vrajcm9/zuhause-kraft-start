
import { Button } from "@/components/ui/button";
import { Shield, Users, Laptop, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Who we are section */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            {/* Together for a new era in sales */}
            Gemeinsam für eine neue Ära im Vertrieb
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-12">
            {/* IhreZuhauseBeratung is your reliable point of contact in modern direct sales.
            We stand for fairness, customer protection and real support - supported by innovative technologies and strong values. */}
            IhreZuhauseBeratung ist Ihr zuverlässiger Ansprechpartner im modernen Direktvertrieb.
            Wir stehen für Fairness, Kundenschutz und echte Unterstützung - unterstützt durch innovative Technologien und starke Werte.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-gray-100">
              <Shield className="w-12 h-12 text-primary mb-4" />
              {/* <h3 className="text-xl font-semibold mb-3">Trusting and honest</h3> */}
              <h3 className="text-xl font-semibold mb-3">Vertrauensvoll und ehrlich</h3>
              {/* <p className="text-gray-600">Building lasting relationships through transparency and integrity.</p> */}
              <p className="text-gray-600">Aufbau dauerhafter Beziehungen durch Transparenz und Integrität.</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-100">
              <Users className="w-12 h-12 text-primary mb-4" />
              {/* <h3 className="text-xl font-semibold mb-3">Focus on people</h3> */}
              <h3 className="text-xl font-semibold mb-3">Fokus auf Menschen</h3>
              {/* <p className="text-gray-600">Prioritizing human connections over mere numbers.</p> */}
              <p className="text-gray-600">Vorrang für menschliche Beziehungen vor bloßen Zahlen.</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-100">
              <Laptop className="w-12 h-12 text-primary mb-4" />
              {/* <h3 className="text-xl font-semibold mb-3">State-of-the-art tools</h3> */}
              <h3 className="text-xl font-semibold mb-3">Werkzeuge auf dem neuesten Stand der Technik</h3>
              {/* <p className="text-gray-600">Leveraging technology for transparency and success.</p> */}
              <p className="text-gray-600">Nutzung der Technologie für Transparenz und Erfolg.</p>
            </div>
          </div>
        </div>
        
        {/* Your Options section */}
        <div className="bg-gray-50 -mx-6 px-6 py-20 mb-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              {/* Your career, your chance */}
              Ihre Karriere, Ihre Chance
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              {/* Whether you are a lateral entrant or an experienced sales professional: With us you will find the platform for your personal and professional development. */}
              Egal ob Sie Quereinsteiger oder erfahrener Vertriebsprofi sind: Bei uns finden Sie die Plattform für Ihre persönliche und berufliche Entwicklung.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2"
              onClick={() => window.location.href = "/career"} >
              {/* Apply now */}
              Jetzt bewerben
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Technology & Responsibility section */}
        <div className="max-w-3xl mx-auto text-center mb-32">
          <h2 className="text-4xl font-bold text-primary mb-6">
            {/* Technology for people – not against them */}
            Technologie für die Menschen - nicht gegen sie
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            {/* Our modern platforms and control systems ensure that sales become honest, comprehensible and successful again. */}
            Unsere modernen Plattformen und Kontrollsysteme sorgen dafür, dass der Verkauf wieder ehrlich, nachvollziehbar und erfolgreich wird.
          </p>
          <p className="text-xl text-gray-700">
            {/* Security, fairness, innovation – no contradiction with us. */}
            Sicherheit, Fairness, Innovation - bei uns kein Widerspruch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
