import { Check, X, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const tiers = [
    {
      name: 'Sidekick',
      price: 'Free',
      period: '',
      description: 'Perfect for the local neighborhood watch.',
      features: [
        'Basic hero profile',
        'Local crime alerts',
        'Standard suit colors',
        '1 Sidekick allowed'
      ],
      notIncluded: [
        'Global missions',
        'Super gadget access'
      ],
      cta: 'Start Free',
      ctaClass: 'bg-white text-[#1E2019] hover:bg-[#FFE873]',
      cardClass: 'bg-white transform md:translate-y-4',
      badge: null
    },
    {
      name: 'Hero',
      price: '$19',
      period: '/mo',
      description: 'For full-time defenders of justice.',
      features: [
        'Verified hero badge',
        'Global mission alerts',
        'Custom suit designer',
        'Unlimited team-ups',
        'Super gadget access'
      ],
      notIncluded: [],
      cta: 'Upgrade to Hero',
      ctaClass: 'bg-[#FF5A5F] text-white hover:bg-[#e0454a]',
      cardClass: 'bg-[#FFE873] relative z-10',
      badge: 'MOST POPULAR!'
    },
    {
      name: 'Legend',
      price: '$49',
      period: '/mo',
      description: 'Lead the resistance. Save the universe.',
      features: [
        'Everything in Hero',
        'Direct mayor hotline',
        'Secret base deed',
        'Action figure royalties',
        'Priority backup'
      ],
      notIncluded: [],
      cta: 'Become a Legend',
      ctaClass: 'bg-[#1E2019] text-white hover:bg-gray-800',
      cardClass: 'bg-[#08C2A8] transform md:translate-y-4 text-[#1E2019]',
      badge: null
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white border-t-8 border-[#1E2019] overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5A5F] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#08C2A8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="absolute -top-10 -left-10 transform -rotate-12 hidden md:block">
            <Zap className="w-16 h-16 text-[#FF5A5F] fill-current" />
          </div>
          <h2 className="font-heading font-black text-5xl sm:text-7xl text-[#1E2019] uppercase tracking-tight drop-shadow-[4px_4px_0_#FFE873] mb-6">
            Pick Your <br/> Power Level
          </h2>
          <p className="font-body font-bold text-xl text-gray-700 bg-white inline-block px-4 py-2 border-4 border-[#1E2019] shadow-[4px_4px_0_0_#08C2A8] transform rotate-1">
            No hidden fees. No evil contracts. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`p-8 border-4 border-[#1E2019] neu-shadow ${tier.cardClass} transition-transform duration-300 hover:scale-105`}
            >
              {tier.badge && (
                <div className="absolute -top-5 -right-5 bg-[#FF5A5F] text-white px-4 py-1 border-4 border-[#1E2019] font-heading font-black uppercase tracking-wider transform rotate-6 shadow-[4px_4px_0_0_#1E2019] z-20">
                  {tier.badge}
                </div>
              )}
              
              <h3 className="font-heading font-black text-3xl uppercase tracking-wide text-[#1E2019] mb-2">
                {tier.name}
              </h3>
              
              <p className="font-body font-bold text-gray-800 h-12 mb-6">
                {tier.description}
              </p>
              
              <div className="flex items-baseline mb-8">
                <span className="font-heading font-black text-6xl text-[#1E2019] tracking-tighter">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="font-body font-bold text-xl text-gray-800 ml-1">
                    {tier.period}
                  </span>
                )}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1 min-h-[240px]">
                {tier.features.map((feature, idx) => (
                  <li key={`feature-${idx}`} className="flex items-start">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-[#1E2019] flex items-center justify-center mt-0.5 mr-3">
                      <Check className="w-4 h-4 text-white" strokeWidth={4} />
                    </div>
                    <span className="font-body font-bold text-lg text-[#1E2019] leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
                
                {tier.notIncluded.map((feature, idx) => (
                  <li key={`not-${idx}`} className="flex items-start opacity-60">
                    <div className="shrink-0 w-6 h-6 rounded-full border-2 border-[#1E2019] flex items-center justify-center mt-0.5 mr-3">
                      <X className="w-4 h-4 text-[#1E2019]" strokeWidth={3} />
                    </div>
                    <span className="font-body font-bold text-lg text-[#1E2019] leading-tight line-through">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/register" 
                className={`block w-full text-center py-4 px-6 border-4 border-[#1E2019] font-heading font-black text-2xl uppercase tracking-wider neu-shadow-interactive transition-colors ${tier.ctaClass}`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Pricing;
