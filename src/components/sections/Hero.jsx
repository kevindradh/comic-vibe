import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 bg-[#FFE873] opacity-30" style={{ backgroundImage: 'radial-gradient(#1e2019 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
      
      {/* Floating comic elements */}
      <div className="absolute top-40 left-10 lg:left-20 transform -rotate-12 animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="bg-[#FF5A5F] text-white px-6 py-2 border-4 border-[#1E2019] shadow-[6px_6px_0px_0px_#1E2019] font-heading text-2xl font-black tracking-wider">
          BOOM!
        </div>
      </div>
      <div className="absolute bottom-20 right-10 lg:right-32 transform rotate-6 animate-pulse">
        <div className="bg-[#08C2A8] text-white px-6 py-2 border-4 border-[#1E2019] shadow-[6px_6px_0px_0px_#1E2019] font-heading text-2xl font-black tracking-wider">
          FAST!
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block relative">
              <span className="absolute -top-6 -right-8">
                <Star className="w-10 h-10 text-[#FF5A5F] animate-spin-slow fill-current" />
              </span>
              <h1 className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl text-[#1E2019] leading-none uppercase tracking-tighter drop-shadow-[4px_4px_0_#FFE873]">
                Unleash <br/>
                <span className="text-[#08C2A8] drop-shadow-[4px_4px_0_#1E2019] inline-block transform -rotate-2">
                  Your
                </span><br/>
                Superpower
              </h1>
            </div>
            
            <p className="font-body font-bold text-xl sm:text-2xl text-[#1E2019] max-w-2xl mx-auto lg:mx-0 bg-white p-4 border-4 border-[#1E2019] shadow-[4px_4px_0_0_#1E2019] transform rotate-1">
              The ultimate platform for heroes to collaborate, track missions, and save the world faster than ever before. No capes required.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <Link 
                to="/register" 
                className="w-full sm:w-auto flex items-center justify-center py-4 px-8 bg-[#FF5A5F] text-white font-heading text-2xl font-black uppercase tracking-wider border-4 border-[#1E2019] neu-shadow-interactive hover:bg-[#FFE873] hover:text-[#1E2019] group"
              >
                Start Mission
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              </Link>
              <a 
                href="#demo" 
                className="w-full sm:w-auto flex items-center justify-center py-4 px-8 bg-white text-[#1E2019] font-heading text-2xl font-black uppercase tracking-wider border-4 border-[#1E2019] neu-shadow-interactive hover:bg-[#08C2A8] hover:text-white group"
              >
                Watch Trailer
              </a>
            </div>
            
            {/* Social Proof */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 font-body font-bold text-lg text-[#1E2019]">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-12 h-12 rounded-full border-4 border-[#1E2019] flex items-center justify-center font-heading font-black text-white ${
                    i % 3 === 0 ? 'bg-[#FF5A5F]' : i % 2 === 0 ? 'bg-[#08C2A8]' : 'bg-[#FFE873] text-[#1E2019]'
                  }`}>
                    {i}
                  </div>
                ))}
              </div>
              <p>Trusted by <span className="bg-[#FFE873] px-2 py-0.5 border-2 border-[#1E2019] transform inline-block rotate-2">10,000+</span> heroes worldwide</p>
            </div>
          </div>

          {/* Hero Image / Illustration Area */}
          <div className="relative mt-12 lg:mt-0 hidden md:block">
            {/* Frame */}
            <div className="absolute inset-0 bg-[#08C2A8] border-4 border-[#1E2019] transform translate-x-4 translate-y-4"></div>
            <div className="relative bg-[#FFE873] border-4 border-[#1E2019] p-2 aspect-[4/3] overflow-hidden group">
              {/* Halftone pattern overlay */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#1e2019_2px,transparent_2px)] [background-size:12px_12px] pointer-events-none"></div>
              
              {/* Dummy Image Content - Placeholder for actual illustration */}
              <div className="w-full h-full bg-white border-4 border-[#1E2019] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#08C2A8]/20 to-[#FF5A5F]/20"></div>
                
                {/* Comic action lines */}
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-conic-gradient(from 0deg, transparent 0deg 15deg, rgba(0,0,0,0.05) 15deg 30deg)'
                }}></div>
                
                <div className="relative z-10 text-center transform group-hover:scale-110 transition-transform duration-500">
                  <span className="font-heading font-black text-8xl text-[#FF5A5F] drop-shadow-[4px_4px_0_#1E2019]">
                    KAPOW!
                  </span>
                </div>
              </div>
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white border-4 border-[#1E2019] p-4 shadow-[4px_4px_0_0_#1E2019] transform -rotate-6 z-20">
              <p className="font-heading font-black text-xl text-[#1E2019] uppercase text-center leading-tight">
                #1 App<br/>of the year
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
