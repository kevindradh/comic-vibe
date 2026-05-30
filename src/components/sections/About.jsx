import { Shield, Target, Users, ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Active Heroes', value: '10K+', color: 'bg-[#FF5A5F]' },
    { label: 'Missions Complete', value: '1M+', color: 'bg-[#08C2A8]' },
    { label: 'Villains Defeated', value: '99%', color: 'bg-[#FFE873]', textColor: 'text-[#1E2019]' },
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Impenetrable Security',
      description: 'Your secret identity stays secret. We use military-grade encryption for all hero comms.',
      color: 'bg-[#08C2A8]'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission Tracking',
      description: 'Never miss an objective. Real-time alerts and strategic objective mapping.',
      color: 'bg-[#FF5A5F]'
    },
    {
      icon: <Users className="w-8 h-8 text-[#1E2019]" />,
      title: 'Squad Assembly',
      description: 'Find the perfect teammates for co-op missions based on power synergy.',
      color: 'bg-[#FFE873]'
    }
  ];

  return (
    <section id="about" className="relative bg-white py-24 overflow-hidden border-t-8 border-[#1E2019]">
      
      {/* Infinite Marquee Strip */}
      <div className="absolute top-0 left-0 w-full bg-[#1E2019] text-[#FFE873] py-3 overflow-hidden border-b-4 border-[#1E2019] z-10 flex whitespace-nowrap">
        <div className="animate-[marquee_15s_linear_infinite] flex items-center font-heading font-black text-2xl uppercase tracking-widest">
          {/* Repeating content for seamless loop (copied twice for the -50% trick) */}
          <span className="mx-4">⚡ JOIN THE RESISTANCE ⚡ NO CAPES REQUIRED ⚡ SAVE THE WORLD ⚡ JOIN THE RESISTANCE ⚡ NO CAPES REQUIRED ⚡ SAVE THE WORLD ⚡</span>
          <span className="mx-4">⚡ JOIN THE RESISTANCE ⚡ NO CAPES REQUIRED ⚡ SAVE THE WORLD ⚡ JOIN THE RESISTANCE ⚡ NO CAPES REQUIRED ⚡ SAVE THE WORLD ⚡</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 items-end justify-between mb-20">
          <div className="max-w-2xl relative">
            <h2 className="font-heading font-black text-5xl sm:text-7xl text-[#1E2019] uppercase leading-[0.9] drop-shadow-[3px_3px_0_#FF5A5F] mb-6">
              We Build <br/>
              <span className="bg-[#08C2A8] text-white px-2 border-4 border-[#1E2019] transform inline-block rotate-2 my-2">Legends</span>
            </h2>
            <p className="font-body font-bold text-xl text-[#1E2019] bg-[#FFE873] p-4 border-4 border-[#1E2019] shadow-[4px_4px_0_0_#1E2019] transform -rotate-1">
              HeroBase isn't just an app. It's the central command for the next generation of extraordinary individuals. We handle the logistics, you handle the saving.
            </p>
          </div>
          
          <a href="#" className="hidden md:flex items-center justify-center gap-2 font-heading font-black text-xl uppercase tracking-wider text-[#1E2019] hover:text-[#FF5A5F] group transition-colors">
            Read the Manifesto
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
          </a>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-8 border-4 border-[#1E2019] neu-shadow bg-white hover:bg-[#1E2019] group transition-colors duration-300 relative z-10`}
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 ${feature.color} border-4 border-[#1E2019] shadow-[4px_4px_0_0_#1E2019] flex items-center justify-center mb-6 text-white transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="font-heading font-black text-2xl uppercase tracking-wide text-[#1E2019] group-hover:text-white mb-4 transition-colors">
                {feature.title}
              </h3>
              
              <p className="font-body font-bold text-lg text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-[#1E2019] border-4 border-[#1E2019] shadow-[8px_8px_0_0_#08C2A8] p-8 md:p-12 relative">
          {/* Comic action lines background */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGwyMCAyME0yMCAwbC0yMCAyMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIHN0cm9rZS13aWR0aD0iMSIgLz48L3N2Zz4=')] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-block px-4 py-2 ${stat.color} ${stat.textColor || 'text-white'} font-heading font-black text-5xl md:text-6xl lg:text-7xl border-4 border-transparent group-hover:border-white group-hover:transform group-hover:scale-110 transition-all duration-300 shadow-[4px_4px_0_0_rgba(255,255,255,0.2)] mb-2`}>
                  {stat.value}
                </div>
                <div className="font-body font-bold text-xl text-white uppercase tracking-wider mt-4">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
