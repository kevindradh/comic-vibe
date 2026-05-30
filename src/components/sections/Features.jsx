import { Map, MessageSquare, BarChart3, Settings, Crosshair, Radar } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-24 bg-[#08C2A8] relative overflow-hidden border-t-8 border-[#1E2019]">
      {/* Brutalist Diagonal Stripes Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #1E2019 25%, transparent 25%, transparent 75%, #1E2019 75%, #1E2019), repeating-linear-gradient(45deg, #1E2019 25%, #08C2A8 25%, #08C2A8 75%, #1E2019 75%, #1E2019)',
        backgroundPosition: '0 0, 20px 20px',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block bg-white border-4 border-[#1E2019] shadow-[8px_8px_0_0_#1E2019] p-6 transform -rotate-1">
            <h2 className="font-heading font-black text-5xl sm:text-6xl text-[#1E2019] uppercase tracking-tighter mb-2">
              Super <span className="text-[#FF5A5F]">Gadgets</span>
            </h2>
            <p className="font-body font-bold text-xl text-gray-700 max-w-xl">
              Everything you need in your utility belt to fight crime efficiently. Built for performance, designed for heroes.
            </p>
          </div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Feature 1: Large Threat Map (Spans 2 columns on Desktop) */}
          <div className="md:col-span-2 bg-white border-4 border-[#1E2019] p-8 shadow-[6px_6px_0_0_#1E2019] group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Map className="w-64 h-64 text-[#1E2019]" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#FFE873] border-4 border-[#1E2019] flex items-center justify-center mb-6">
                <Radar className="w-8 h-8 text-[#1E2019] animate-spin-slow" style={{ animationDuration: '4s' }} />
              </div>
              <h3 className="font-heading font-black text-3xl uppercase tracking-wide text-[#1E2019] mb-4">
                Global Threat Radar
              </h3>
              <p className="font-body font-bold text-xl text-gray-600 max-w-md">
                Monitor villain activity in real-time. Our global satellite network tracks energy spikes and suspicious monologues anywhere on Earth.
              </p>
            </div>
          </div>

          {/* Feature 2: Secure Comms */}
          <div className="bg-[#FF5A5F] border-4 border-[#1E2019] p-8 shadow-[6px_6px_0_0_#1E2019] group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-white border-4 border-[#1E2019] flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
              <MessageSquare className="w-8 h-8 text-[#1E2019]" />
            </div>
            <h3 className="font-heading font-black text-3xl uppercase tracking-wide text-white mb-4 drop-shadow-[2px_2px_0_#1E2019]">
              Encrypted Comms
            </h3>
            <p className="font-body font-bold text-lg text-white">
              End-to-end encryption that even technopaths can't crack. Keep your secret identity absolutely secure.
            </p>
          </div>

          {/* Feature 3: Analytics */}
          <div className="bg-[#FFE873] border-4 border-[#1E2019] p-8 shadow-[6px_6px_0_0_#1E2019] group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#1E2019] flex items-center justify-center mb-6 transform group-hover:-rotate-12 transition-transform">
              <BarChart3 className="w-8 h-8 text-[#FFE873]" />
            </div>
            <h3 className="font-heading font-black text-3xl uppercase tracking-wide text-[#1E2019] mb-4">
              Hero Analytics
            </h3>
            <p className="font-body font-bold text-lg text-[#1E2019]">
              Track your save rate, civilian approval scores, and property damage metrics in one clean dashboard.
            </p>
          </div>

          {/* Feature 4: Integrations (Spans 2 columns) */}
          <div className="md:col-span-2 bg-[#1E2019] border-4 border-[#1E2019] p-8 shadow-[6px_6px_0_0_#FFE873] group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#08C2A8] border-2 border-white flex items-center justify-center animate-bounce" style={{ animationDelay: '0s' }}>
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-[#FF5A5F] border-2 border-white flex items-center justify-center animate-bounce" style={{ animationDelay: '0.2s' }}>
                    <Crosshair className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-heading font-black text-3xl uppercase tracking-wide text-white mb-4">
                  Gadget Integration API
                </h3>
                <p className="font-body font-bold text-lg text-gray-300">
                  Connect your existing suit sensors, batmobiles, and orbital lasers directly into the HeroBase grid using our open API.
                </p>
              </div>
              <div className="hidden md:block w-32 h-32 bg-white border-4 border-[#08C2A8] p-2 transform rotate-6 group-hover:rotate-12 transition-transform">
                <div className="w-full h-full bg-[#1E2019] flex items-center justify-center">
                  <span className="font-heading font-black text-[#FFE873] text-2xl uppercase">SYNC</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
