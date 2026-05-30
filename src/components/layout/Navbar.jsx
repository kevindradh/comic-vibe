import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Only run scroll spy on homepage
    if (!isHomePage) return;

    const handleScroll = () => {
      const sectionIds = ['about', 'features', 'pricing', 'reviews', 'contact'];
      
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const offset = window.innerHeight / 2;

      if (scrollPosition < 100) {
        setActiveSection('');
        return;
      }

      let current = '';
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop - offset;
          const bottom = top + element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < bottom) {
            current = id;
            break;
          }
        }
      }
      
      if ((window.innerHeight + Math.round(scrollPosition)) >= document.documentElement.scrollHeight - 50) {
         current = sectionIds[sectionIds.length - 1];
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, isHomePage]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { id: 'about', label: 'About', activeColor: 'text-[#08C2A8]', hoverColor: 'hover:text-[#08C2A8]' },
    { id: 'features', label: 'Features', activeColor: 'text-[#FF5A5F]', hoverColor: 'hover:text-[#FF5A5F]' },
    { id: 'pricing', label: 'Pricing', activeColor: 'text-[#FFE873]', hoverColor: 'hover:text-[#FFE873]' },
    { id: 'reviews', label: 'Reviews', activeColor: 'text-[#FF5A5F]', hoverColor: 'hover:text-[#FF5A5F]' },
    { id: 'contact', label: 'Comms', activeColor: 'text-[#08C2A8]', hoverColor: 'hover:text-[#08C2A8]' },
  ];

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    // If not on homepage, navigate to homepage first then scroll
    if (!isHomePage) {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-[#1E2019] neu-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={() => { window.scrollTo(0, 0); setIsMobileMenuOpen(false); }} className="flex items-center gap-2 group">
              <div className="bg-[#FFE873] p-2 border-4 border-[#1E2019] group-hover:bg-[#FF5A5F] transition-colors">
                <Zap className="h-6 w-6 text-[#1E2019]" strokeWidth={3} />
              </div>
              <span className="font-heading font-black text-2xl uppercase tracking-wider text-[#1E2019] drop-shadow-[2px_2px_0_#08C2A8]">
                HeroBase
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              isHomePage ? (
                <a 
                  key={link.id}
                  href={`#${link.id}`} 
                  className={`font-body font-bold text-lg transition-colors ${activeSection === link.id ? `${link.activeColor} underline decoration-4 underline-offset-4` : `text-[#1E2019] ${link.hoverColor} hover:underline decoration-4 underline-offset-4`}`}
                >
                  {link.label}
                </a>
              ) : (
                <Link 
                  key={link.id}
                  to={`/#${link.id}`}
                  className={`font-body font-bold text-lg text-[#1E2019] transition-colors ${link.hoverColor} hover:underline decoration-4 underline-offset-4`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Right Side: Auth Buttons & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Link 
                to="/login" 
                className="font-heading font-black text-lg uppercase tracking-wide text-[#1E2019] hover:text-[#FF5A5F] transition-colors"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-[#08C2A8] text-white px-6 py-2 border-4 border-[#1E2019] font-heading font-black text-lg uppercase tracking-wider neu-shadow-interactive hover:bg-[#FFE873] hover:text-[#1E2019] transition-colors"
              >
                Join Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 border-4 border-[#1E2019] bg-[#FFE873] text-[#1E2019] hover:bg-[#FF5A5F] hover:text-white transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" strokeWidth={3} />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" strokeWidth={3} />
              )}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 top-[84px] bg-[#1E2019] transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto px-4 py-8">
          
          <nav className="flex flex-col space-y-6 mb-12">
            {navLinks.map((link, index) => (
              <div 
                key={link.id}
                className="transform transition-transform duration-300"
                style={{ transitionDelay: `${index * 50}ms`, transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(50px)' }}
              >
                {isHomePage ? (
                  <a 
                    href={`#${link.id}`} 
                    onClick={() => handleNavClick(link.id)}
                    className="block text-4xl font-heading font-black uppercase text-white hover:text-[#08C2A8] transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    to={`/#${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className="block text-4xl font-heading font-black uppercase text-white hover:text-[#08C2A8] transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div 
            className="mt-auto space-y-4 pb-12 transition-transform duration-500"
            style={{ transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(50px)', opacity: isMobileMenuOpen ? 1 : 0 }}
          >
            <Link 
              to="/login" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-4 bg-white border-4 border-[#1E2019] text-[#1E2019] font-heading font-black text-2xl uppercase tracking-wider hover:bg-[#FFE873] transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-4 bg-[#FF5A5F] border-4 border-[#1E2019] text-white font-heading font-black text-2xl uppercase tracking-wider hover:bg-[#08C2A8] transition-colors"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
