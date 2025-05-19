
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-[url('../public/hero-background.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-7xl mx-auto px-6 pt-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {/* Your future. Our responsibility. */}
            Ihre Zukunft. Unsere Verantwortung.
          </h1>
          <p className="text-2xl text-white/90 mb-8">
            {/* Redesign your career in direct sales – fair, safe and innovative. */}
            Gestalten Sie Ihre Karriere im Direktvertrieb neu - fair, sicher und innovativ.
          </p>
          <p className="text-xl text-white/80 mb-8">
            {/* Become part of our mission for honest sales and real perspectives. */}
            Werden Sie Teil unserer Mission für ehrlichen Verkauf und echte Perspektiven.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2" 
          onClick={() => window.location.href = "/career"}>
            {/* Discover career opportunity now */}
            Jetzt Karrierechancen entdecken
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
