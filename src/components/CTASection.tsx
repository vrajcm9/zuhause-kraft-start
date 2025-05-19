
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <div className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {/* Ready for the next step? */}
          Sind Sie bereit für den nächsten Schritt?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {/* Start your journey now with IhreZuhauseBeratung. */}
          Beginnen Sie jetzt Ihre Reise mit IhrerZuhauseBeratung.
        </p>
        <Button 
          size="lg" 
          className="bg-secondary hover:bg-secondary/90 text-white gap-2"
          onClick={() => window.location.href = "/career"}
        >
          {/* Start your career now */}
          Starten Sie jetzt Ihre Karriere
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
