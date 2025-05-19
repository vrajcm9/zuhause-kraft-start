import Navigation from "@/components/Navigation";
import { Briefcase, Send } from "lucide-react";
import FooterSection from "@/components/FooterSection";

const Career = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-black mb-12">Careers</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-black mb-6">Join IhreZuhauseBeratung</h2>

            <p className="text-gray-700 text-lg">
              At <strong>IhreZuhauseBeratung</strong>, we are building a new, fair, and modern world of direct sales.
              We are currently looking for <b>motivated and passionate salespeople</b> who want to make a real difference.
              <br /><br />
              If you are someone who:
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Wants to grow personally and professionally</li>
                <li>Believes in fairness, trust, and real customer value</li>
                <li>Is motivated to build a strong and meaningful career</li>
                <li>Enjoys working independently with strong support</li>
              </ul>
              <br />
              Then we would love to hear from you!
            </p>

            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-black" />
                <p className="text-gray-700">
                  Positions: Sales Representatives, Client Advisors, Career Starters
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Send className="w-5 h-5 text-black" />
                <p className="text-gray-700">
                  Application Email: <a href="mailto:karriere@ihrezuhauseberatung.de" className="hover:text-black">karriere@ihrezuhauseberatung.de</a>
                </p>
              </div>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden">
            <img
              src="./hiring.jpg"
              alt="Career Opportunities"
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
