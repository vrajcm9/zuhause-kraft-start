
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo and Company Name */}
        <Link to="/" className="flex items-center gap-3">
          {/* Logo Image */}
          <img 
            src="./full-logo.png" // Replace with your actual logo path
            alt="IhreZuhauseBeratung Logo" 
            className="h-10 w-10 object-contain"
          />
          
          {/* Company Name */}
          <span className="text-2xl font-bold text-primary">
            IhreZuhauseBeratung
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-primary">
            {/* Home */}
            Startseite
          </Link>
          <Link to="/career" className="text-gray-600 hover:text-primary">
            {/* Career */}
            Karriere
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-primary">
            {/* About us */}
            Über uns
          </Link>
          
          {/* <Link to="/contact" className="text-gray-600 hover:text-primary">
            Contact
          </Link> */}
          {/* <Button className="bg-secondary hover:bg-secondary/90 text-white" onClick={() => window.location.href = "/career"}>
            Start now
          </Button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
