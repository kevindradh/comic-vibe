import { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Star, Sparkles, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Registration data:', formData);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative comic elements */}
      <div className="absolute top-10 right-10 transform rotate-12">
        <div className="bg-[#FFE873] text-[#1E2019] px-6 py-2 neu-border neu-shadow font-heading text-xl font-bold tracking-wider">
          POW!
        </div>
      </div>
      <div className="absolute bottom-10 left-10 transform -rotate-12">
        <div className="bg-[#08C2A8] text-white px-6 py-2 neu-border neu-shadow font-heading text-xl font-bold tracking-wider">
          ZAP!
        </div>
      </div>
      
      {/* Floating Sparkles */}
      <Star className="absolute top-20 left-20 w-12 h-12 text-[#FF5A5F] animate-spin-slow fill-current" strokeWidth={3} style={{ animationDuration: '4s' }} />
      <Sparkles className="absolute bottom-32 right-24 w-12 h-12 text-[#08C2A8] animate-pulse" strokeWidth={3} />

      <div className="w-full max-w-md relative z-10 my-8">
        <div className="bg-white neu-border neu-shadow p-8 rounded-xl relative">
          
          {/* Header */}
          <div className="mb-8 text-center relative">
            <h1 className="font-heading text-4xl sm:text-5xl font-black text-[#1E2019] tracking-tight mb-2 uppercase drop-shadow-[2px_2px_0_#08C2A8]">
              Join the Squad
            </h1>
            <p className="font-body text-lg font-bold text-white bg-[#FF5A5F] inline-block px-3 py-1 neu-border transform rotate-2">
              Create your hero profile
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              
              {/* Username Field */}
              <div>
                <label htmlFor="username" className="block font-heading text-xl font-bold text-[#1E2019] mb-2 uppercase tracking-wide">
                  Hero Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#1E2019]">
                    <User className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-3 bg-white neu-border font-body text-lg font-bold text-[#1E2019] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#FF5A5F]/50 transition-shadow"
                    placeholder="e.g. Captain Awesome"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block font-heading text-xl font-bold text-[#1E2019] mb-2 uppercase tracking-wide">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#1E2019]">
                    <Mail className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-3 bg-white neu-border font-body text-lg font-bold text-[#1E2019] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#FF5A5F]/50 transition-shadow"
                    placeholder="hero@hq.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block font-heading text-xl font-bold text-[#1E2019] mb-2 uppercase tracking-wide">
                  Secret Code
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#1E2019]">
                    <Lock className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    required
                    minLength={8}
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-12 py-3 bg-white neu-border font-body text-lg font-bold text-[#1E2019] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#FF5A5F]/50 transition-shadow"
                    placeholder="Min. 8 characters"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#1E2019] hover:scale-110 transition-transform"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
                    ) : (
                      <Eye className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="pt-2 pb-1">
              <div className="flex items-start cursor-pointer group">
                <div className="relative flex items-start mt-1">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    checked={formData.terms}
                    onChange={handleChange}
                    className="peer absolute opacity-0 w-full h-full cursor-pointer z-10"
                  />
                  <div className="w-6 h-6 shrink-0 bg-white border-3 border-[#1E2019] peer-checked:bg-[#FF5A5F] transition-colors flex items-center justify-center">
                    <svg className={`w-4 h-4 text-white ${formData.terms ? 'opacity-100' : 'opacity-0'} transition-opacity`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <label htmlFor="terms" className="ml-3 block font-body font-bold text-base text-[#1E2019] cursor-pointer">
                  I agree to the <a href="#" className="text-[#08C2A8] hover:underline decoration-2 underline-offset-2">Hero Code of Conduct</a> and <a href="#" className="text-[#08C2A8] hover:underline decoration-2 underline-offset-2">Privacy Policy</a>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center py-3 px-4 bg-[#08C2A8] text-white font-heading text-2xl font-black uppercase tracking-wider neu-border neu-shadow-interactive hover:bg-\[#07a38d\] disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
            >
              {isLoading ? (
                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  <span className="relative z-10 flex items-center">
                    Create Account
                    <Rocket className="ml-3 h-6 w-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                  </span>
                  {/* Comic action lines hover effect */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGwyMCAyME0yMCAwbC0yMCAyMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIHN0cm9rZS13aWR0aD0iMSIgLz48L3N2Zz4=')] opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                </>
              )}
            </button>
          </form>
          
          <div className="mt-6 pt-6 border-t-4 border-[#1E2019] text-center font-body text-lg font-bold text-[#1E2019]">
            Already a hero?{' '}
            <Link to="/login" className="text-[#FF5A5F] hover:text-[#1E2019] hover:underline decoration-2 underline-offset-4 transition-colors uppercase tracking-wide">
              Login here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
