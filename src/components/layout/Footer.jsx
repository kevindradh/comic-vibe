import { Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1E2019] border-t-8 border-[#FFE873] pt-16 pb-8 relative overflow-hidden">
      
      {/* Decorative comic dots */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,#FFFFFF_2px,transparent_2px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="bg-[#FFE873] p-2 border-4 border-white group-hover:bg-[#FF5A5F] group-hover:border-[#1E2019] transition-colors">
                <Zap className="h-6 w-6 text-[#1E2019]" strokeWidth={3} />
              </div>
              <span className="font-heading font-black text-3xl uppercase tracking-wider text-white drop-shadow-[2px_2px_0_#08C2A8]">
                HeroBase
              </span>
            </Link>
            
            <p className="font-body font-bold text-lg text-gray-400 mb-8 max-w-md leading-relaxed">
              The premier operating system for caped crusaders, vigilantes, and definitely-not-villains. Stay heroic.
            </p>

            {/* Newsletter Subscription */}
            <div className="bg-[#08C2A8] border-4 border-white p-4 shadow-[6px_6px_0_0_#FFE873] max-w-md transform -rotate-1">
              <h4 className="font-heading font-black text-xl uppercase tracking-wide text-[#1E2019] mb-2">
                Daily Bugle Updates
              </h4>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="civilian@email.com" 
                  className="flex-1 bg-white border-4 border-[#1E2019] px-3 py-2 font-body font-bold focus:outline-none focus:ring-4 focus:ring-[#FF5A5F]"
                  required
                />
                <button 
                  type="submit"
                  className="bg-[#FF5A5F] text-white px-4 py-2 border-4 border-[#1E2019] font-heading font-black uppercase hover:bg-[#1E2019] transition-colors flex items-center justify-center"
                >
                  <ArrowRight strokeWidth={3} />
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-black text-2xl uppercase tracking-wide text-white mb-6 border-b-4 border-[#FF5A5F] inline-block pb-1">
              HQ Sectors
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="font-body font-bold text-lg text-gray-400 hover:text-[#08C2A8] hover:translate-x-2 transition-all inline-block">
                  Squad Assembly
                </a>
              </li>
              <li>
                <a href="#features" className="font-body font-bold text-lg text-gray-400 hover:text-[#FF5A5F] hover:translate-x-2 transition-all inline-block">
                  Super Gadgets
                </a>
              </li>
              <li>
                <a href="#pricing" className="font-body font-bold text-lg text-gray-400 hover:text-[#FFE873] hover:translate-x-2 transition-all inline-block">
                  Power Levels
                </a>
              </li>
              <li>
                <a href="#reviews" className="font-body font-bold text-lg text-gray-400 hover:text-[#FF5A5F] hover:translate-x-2 transition-all inline-block">
                  Hero Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Social */}
          <div>
            <h4 className="font-heading font-black text-2xl uppercase tracking-wide text-white mb-6 border-b-4 border-[#08C2A8] inline-block pb-1">
              Classified
            </h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a href="#" className="font-body font-bold text-lg text-gray-400 hover:text-white hover:underline decoration-2 underline-offset-4 transition-all">
                  Secret Identity Policy
                </a>
              </li>
              <li>
                <a href="#" className="font-body font-bold text-lg text-gray-400 hover:text-white hover:underline decoration-2 underline-offset-4 transition-all">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="font-body font-bold text-lg text-gray-400 hover:text-white hover:underline decoration-2 underline-offset-4 transition-all">
                  Collateral Damage Specs
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-[#FFE873] border-4 border-white flex items-center justify-center text-[#1E2019] hover:bg-[#FF5A5F] hover:text-white hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#08C2A8] transition-all">
                X
              </a>
              <a href="#" className="w-12 h-12 bg-[#FFE873] border-4 border-white flex items-center justify-center text-[#1E2019] hover:bg-[#FF5A5F] hover:text-white hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#08C2A8] transition-all">
                GH
              </a>
              <a href="#" className="w-12 h-12 bg-[#FFE873] border-4 border-white flex items-center justify-center text-[#1E2019] hover:bg-[#FF5A5F] hover:text-white hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#08C2A8] transition-all">
                IN
              </a>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body font-bold text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} HeroBase Command Center. Not affiliated with Vought International.
          </p>
          <div className="bg-[#FF5A5F] text-white px-4 py-1 border-2 border-white font-heading font-black uppercase text-sm tracking-widest transform rotate-2">
            SYSTEM ONLINE
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
