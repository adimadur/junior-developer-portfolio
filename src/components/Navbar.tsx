import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

interface NavbarProps {
  onAboutClick: () => void;
  onSkillsClick: () => void;
  onProjectsClick: () => void;
  onEducationClick: () => void;
  onContactClick: () => void;
}

const Navbar = ({
  onAboutClick,
  onSkillsClick,
  onProjectsClick,
  onEducationClick,
  onContactClick
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (callback: () => void) => {
    callback();
    closeMenu();
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-primary">Junior Dev</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a onClick={() => handleNavClick(onAboutClick)} className="nav-link cursor-pointer">About</a>
            <a onClick={() => handleNavClick(onSkillsClick)} className="nav-link cursor-pointer">Skills</a>
            <a onClick={() => handleNavClick(onProjectsClick)} className="nav-link cursor-pointer">Projects</a>
            <a onClick={() => handleNavClick(onEducationClick)} className="nav-link cursor-pointer">Education</a>
            <a onClick={() => handleNavClick(onContactClick)} className="nav-link cursor-pointer">Contact</a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="mr-2"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm shadow-lg">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a onClick={() => handleNavClick(onAboutClick)} className="nav-link py-2 cursor-pointer">About</a>
            <a onClick={() => handleNavClick(onSkillsClick)} className="nav-link py-2 cursor-pointer">Skills</a>
            <a onClick={() => handleNavClick(onProjectsClick)} className="nav-link py-2 cursor-pointer">Projects</a>
            <a onClick={() => handleNavClick(onEducationClick)} className="nav-link py-2 cursor-pointer">Education</a>
            <a onClick={() => handleNavClick(onContactClick)} className="nav-link py-2 cursor-pointer">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
