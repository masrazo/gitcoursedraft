
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold">
              GitMaster
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-600 transition-colors">
              Home
            </Link>
            <Link to="/learn" className="hover:text-gray-600 transition-colors">
              Learn
            </Link>
            <Link to="/exercises" className="hover:text-gray-600 transition-colors">
              Exercises
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="pt-2 pb-3 space-y-1 bg-white">
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/learn"
              className="block px-4 py-2 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Learn
            </Link>
            <Link
              to="/exercises"
              className="block px-4 py-2 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Exercises
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
