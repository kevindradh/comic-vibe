import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
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
      console.log('Login data:', formData);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative comic elements */}
      <div className="absolute top-10 left-10 transform -rotate-12">
        <div className="bg-[#08C2A8] text-white px-6 py-2 neu-border neu-shadow font-heading text-xl font-bold tracking-wider">
          WOW!
        </div>
      </div>
      <div className="absolute bottom-20 right-10 transform rotate-12">
        <div className="bg-[#FF5A5F] text-white px-6 py-2 neu-border neu-shadow font-heading text-xl font-bold tracking-wider">
          BAM!
        </div>
      </div>
      
      {/* Floating Sparkles */}
      <Sparkles className="absolute top-32 right-32 w-12 h-12 text-[#FF5A5F] animate-pulse" strokeWidth={3} />
      <Zap className="absolute bottom-32 left-32 w-12 h-12 text-[#08C2A8] animate-bounce" strokeWidth={3} />

      <div className="w-full max-w-md relative z-10 my-8">
        <div className="bg-white neu-border neu-shadow p-8 rounded-xl relative">
          
          {/* Header */}
          <div className="mb-8 text-center relative">
            <h1 className="font-heading text-5xl font-black text-[#1E2019] tracking-tight mb-2 uppercase drop-shadow-[2px_2px_0_#FF5A5F]">
              Login
            </h1>
            <p className="font-body text-lg font-bold text-[#1E2019] bg-[#FFE873] inline-block px-3 py-1 neu-border transform -rotate-2">
              Ready for action?
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
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
                    className="block w-full pl-12 pr-4 py-3 bg-white neu-border font-body text-lg font-bold text-[#1E2019] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#08C2A8]/50 transition-shadow"
                    placeholder="hero@example.com"
                  />
                </div>
              </div>

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
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-12 py-3 bg-white neu-border font-body text-lg font-bold text-[#1E2019] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#08C2A8]/50 transition-shadow"
                    placeholder="••••••••"
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

            <div className="flex items-center justify-between">
              <div className="flex items-center cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="peer absolute opacity-0 w-full h-full cursor-pointer z-10"
                  />
                  <div className="w-6 h-6 bg-white border-3 border-[#1E2019] peer-checked:bg-[#08C2A8] transition-colors flex items-center justify-center">
                    <svg className={`w-4 h-4 text-white ${formData.remember ? 'opacity-100' : 'opacity-0'} transition-opacity`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <label htmlFor="remember" className="ml-3 block font-body font-bold text-lg text-[#1E2019] cursor-pointer group-hover:underline decoration-2 underline-offset-4">
                  Remember me
                </label>
              </div>

              <div className="text-lg font-body font-bold">
                <a href="#" className="text-[#FF5A5F] hover:text-[#1E2019] hover:underline decoration-2 underline-offset-4 transition-colors">
                  Lost key?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center py-3 px-4 bg-[#FF5A5F] text-white font-heading text-2xl font-black uppercase tracking-wider neu-border neu-shadow-interactive hover:bg-\[#e0454a\] disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
            >
              {isLoading ? (
                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  <span className="relative z-10 flex items-center">
                    Sign In
                    <Zap className="ml-2 h-6 w-6 group-hover:scale-125 transition-transform" strokeWidth={3} />
                  </span>
                  {/* Comic action lines hover effect */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGwyMCAyME0yMCAwbC0yMCAyMCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIHN0cm9rZS13aWR0aD0iMSIgLz48L3N2Zz4=')] opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t-4 border-[#1E2019] text-center font-body text-lg font-bold text-[#1E2019]">
            New recruit?{' '}
            <Link to="/register" className="text-[#08C2A8] hover:text-[#1E2019] hover:underline decoration-2 underline-offset-4 transition-colors uppercase tracking-wide">
              Sign up here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
