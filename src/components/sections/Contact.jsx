import { Mail, MessageSquare, Phone, Send, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'mission', // default select value
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Transmission sent to HeroBase HQ! We will dispatch a response soon.');
      setFormState({ name: '', email: '', subject: 'mission', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#FF5A5F] relative overflow-hidden border-t-8 border-[#1E2019]">
      
      {/* Background Comic Texture */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAwMDAiLz48L3N2Zz4=')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Info & Copy */}
          <div>
            <div className="inline-block relative mb-8">
              <div className="absolute -top-6 -left-6 bg-[#FFE873] border-4 border-[#1E2019] p-3 transform -rotate-12 z-20">
                <AlertTriangle className="w-8 h-8 text-[#1E2019]" />
              </div>
              <h2 className="bg-[#1E2019] text-white px-6 py-4 border-4 border-white font-heading font-black text-5xl sm:text-6xl uppercase tracking-wider transform rotate-1 shadow-[8px_8px_0_0_#FFE873]">
                HQ Comms
              </h2>
            </div>
            
            <p className="font-body font-bold text-2xl text-white mb-10 max-w-lg drop-shadow-[2px_2px_0_#1E2019]">
              Got a villain problem? System glitch? Or just want to brag about your latest save? Patch a signal through to our operators.
            </p>

            <div className="space-y-6">
              {/* Contact Method 1 */}
              <div className="flex items-center gap-6 bg-white border-4 border-[#1E2019] p-4 shadow-[4px_4px_0_0_#1E2019] transform -rotate-1 hover:rotate-0 transition-transform cursor-crosshair">
                <div className="w-16 h-16 bg-[#08C2A8] border-4 border-[#1E2019] flex flex-shrink-0 items-center justify-center">
                  <Phone className="w-8 h-8 text-[#1E2019]" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-xl uppercase tracking-wide text-[#1E2019]">Emergency Hotline</h4>
                  <p className="font-body font-bold text-lg text-gray-600">1-800-HERO-NOW</p>
                </div>
              </div>

              {/* Contact Method 2 */}
              <div className="flex items-center gap-6 bg-[#FFE873] border-4 border-[#1E2019] p-4 shadow-[4px_4px_0_0_#1E2019] transform rotate-1 hover:rotate-0 transition-transform cursor-crosshair">
                <div className="w-16 h-16 bg-[#FF5A5F] border-4 border-[#1E2019] flex flex-shrink-0 items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-xl uppercase tracking-wide text-[#1E2019]">Secure Intel</h4>
                  <p className="font-body font-bold text-lg text-[#1E2019]">hq@herobase.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white border-4 border-[#1E2019] shadow-[12px_12px_0_0_#1E2019] relative">
            
            {/* Form Header */}
            <div className="bg-[#08C2A8] border-b-4 border-[#1E2019] p-6 flex justify-between items-center">
              <h3 className="font-heading font-black text-2xl uppercase tracking-wide text-white drop-shadow-[2px_2px_0_#1E2019]">
                Send Transmission
              </h3>
              <MessageSquare className="w-8 h-8 text-white fill-current" />
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-heading font-black text-lg uppercase tracking-wide text-[#1E2019]">
                    Codename
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-white border-4 border-[#1E2019] px-4 py-3 font-body font-bold text-lg focus:outline-none focus:ring-4 focus:ring-[#FFE873] transition-shadow"
                    placeholder="e.g. Night Owl"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-heading font-black text-lg uppercase tracking-wide text-[#1E2019]">
                    Secure Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full bg-white border-4 border-[#1E2019] px-4 py-3 font-body font-bold text-lg focus:outline-none focus:ring-4 focus:ring-[#FFE873] transition-shadow"
                    placeholder="hero@hq.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block font-heading font-black text-lg uppercase tracking-wide text-[#1E2019]">
                  Transmission Type
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full appearance-none bg-white border-4 border-[#1E2019] px-4 py-3 font-body font-bold text-lg focus:outline-none focus:ring-4 focus:ring-[#FFE873] transition-shadow cursor-pointer"
                  >
                    <option value="mission">Mission Intel (General)</option>
                    <option value="bug">Suit/Tech Bug Report</option>
                    <option value="billing">Base Rent / Billing</option>
                    <option value="villain">Villain Sighting</option>
                  </select>
                  {/* Custom select arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 bg-[#1E2019] text-white">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-heading font-black text-lg uppercase tracking-wide text-[#1E2019]">
                  Intel Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-white border-4 border-[#1E2019] px-4 py-3 font-body font-bold text-lg focus:outline-none focus:ring-4 focus:ring-[#FFE873] transition-shadow resize-none"
                  placeholder="Describe the situation..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-[#FFE873] border-4 border-[#1E2019] font-heading font-black text-2xl uppercase tracking-wider text-[#1E2019] neu-shadow-interactive hover:bg-[#FF5A5F] hover:text-white transition-colors group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                   <span className="animate-pulse">Transmitting...</span>
                ) : (
                  <>
                    Send Signal
                    <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={3} />
                  </>
                )}
              </button>
            </form>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
