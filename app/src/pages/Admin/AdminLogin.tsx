import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error('Invalid credentials');

      // Success, navigate
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', username);
      navigate('/admin');
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url('/assets/home/login-banner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm -z-0" />

      <div className="max-w-md w-full bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl relative z-10">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl text-white mb-3 tracking-tight">Admin Portal</h1>
          <p className="text-gray-500 text-sm tracking-widest uppercase">The Photographer House</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all"
                placeholder="admin"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all pr-12"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[42px] text-gray-500 hover:text-white transition-colors flex items-center justify-center"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-500/5 border border-red-500/10 text-red-400 text-xs text-center py-3 px-4 rounded-xl">
              {error}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            className="w-full py-4 text-sm font-semibold tracking-wider hover:scale-[1.02] transition-transform"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </Button>
        </form>
      </div>
    </div>
  );
};
