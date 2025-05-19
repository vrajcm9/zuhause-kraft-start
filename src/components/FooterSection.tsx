import Navigation from "@/components/Navigation";
import { Briefcase, Send } from "lucide-react";

const FooterSection = () => {
  return (
      <footer className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          {/* <p>&copy; {new Date().getFullYear()} IhreZuhauseBeratung. All rights reserved.</p> */}
          <p>&copy; {new Date().getFullYear()} IhreZuhauseBeratung. Alle Rechte vorbehalten.</p>
          <div className="flex justify-center space-x-4 mt-2">
            {/* <a href="/imprint" className="hover:text-black">Imprint</a>
            <a href="/privacy" className="hover:text-black">Privacy Policy</a> */}
            <a href="/impressum" className="hover:text-black">Impressum</a>
            <a href="/datenschutz" className="hover:text-black">Datenschutzerklärung</a>
          </div>
        </div>
      </footer>
  );
};

export default FooterSection;
