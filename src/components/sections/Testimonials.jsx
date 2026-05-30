import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Captain Crimson",
      role: "Class S Hero",
      image: "bg-[#FF5A5F]",
      quote: "Before HeroBase, I was using spreadsheets to track my nemesis. Now? I can coordinate city-wide defenses with three taps. Absolute game changer.",
      rotation: "rotate-2"
    },
    {
      name: "Shadow Weaver",
      role: "Vigilante",
      image: "bg-[#08C2A8]",
      quote: "The encryption on this platform is actually decent. I've tried to hack my own profile three times and failed. Keep up the good work, nerds.",
      rotation: "-rotate-2"
    },
    {
      name: "Dr. Velocity",
      role: "Speedster",
      image: "bg-[#FFE873]",
      quote: "FAST! SO FAST! The app loads instantly. I can accept missions while running at Mach 3 without any lag or layout shifts. 10/10!",
      rotation: "rotate-1"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-[#1E2019] relative overflow-hidden border-t-8 border-[#1E2019]">
      
      {/* Comic dot pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#FFFFFF_2px,transparent_2px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block relative mb-4">
            <span className="absolute -top-4 -left-6">
              <Star className="w-8 h-8 text-[#FFE873] animate-pulse fill-current" />
            </span>
            <span className="absolute -bottom-4 -right-6">
              <Star className="w-8 h-8 text-[#FF5A5F] animate-bounce fill-current" />
            </span>
            <h2 className="bg-[#08C2A8] text-white px-6 py-2 border-4 border-white font-heading font-black text-4xl sm:text-6xl uppercase tracking-wider transform -rotate-2">
              Hero Reviews
            </h2>
          </div>
          <p className="font-body font-bold text-xl text-white mt-4 text-center max-w-2xl">
            Don't just take it from us. Hear what the defenders of Earth are saying about their new command center.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white border-4 border-white p-8 relative transform ${testimonial.rotation} transition-transform duration-300 hover:scale-105 hover:rotate-0 hover:z-20`}
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 -left-6 bg-[#FFE873] border-4 border-[#1E2019] p-3 shadow-[4px_4px_0_0_#1E2019]">
                <Quote className="w-8 h-8 text-[#1E2019] fill-current" />
              </div>

              {/* Tape decoration */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/50 backdrop-blur-sm border-2 border-gray-200 transform -rotate-2 opacity-70"></div>

              <div className="pt-4">
                <p className="font-body font-bold text-xl leading-relaxed text-[#1E2019] mb-8">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto border-t-4 border-[#1E2019] pt-6">
                  <div className={`w-14 h-14 rounded-full border-4 border-[#1E2019] ${testimonial.image} shadow-[2px_2px_0_0_#1E2019]`}></div>
                  <div>
                    <h4 className="font-heading font-black text-xl text-[#1E2019] uppercase tracking-wide leading-none">
                      {testimonial.name}
                    </h4>
                    <p className="font-body font-bold text-[#FF5A5F] mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
