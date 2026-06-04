import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Home,
  User,
  Image,
  Camera,
  Film,
  MessageSquare,
  BookOpen,
  Heart,
  LogOut,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const TABS = [
  { id: 'home', label: 'Home', icon: Home, path: '/admin/home' },
  { id: 'about', label: 'About', icon: User, path: '/admin/about' },
  { id: 'portfolio', label: 'Portfolio', icon: Image, path: '/admin/portfolio' },
  { id: 'services', label: 'Services', icon: Camera, path: '/admin/services' },
  { id: 'films', label: 'Films', icon: Film, path: '/admin/films' },
  { id: 'reviews', label: 'Reviews', icon: MessageSquare, path: '/admin/reviews' },
  { id: 'blog', label: 'Blog', icon: BookOpen, path: '/admin/blog' },
  { id: 'special-moments', label: 'Special Moments', icon: Heart, path: '/admin/special-moments' },
  { id: 'albums', label: 'Albums', icon: Image, path: '/admin/albums' },
];

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [owner, setOwner] = useState<any>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    // Lock scroll on root container
    const root = document.getElementById('root');
    if (root) {
      root.style.overflow = isMobileOpen ? 'hidden' : 'unset';
      root.style.height = isMobileOpen ? '100vh' : 'auto';
    }
    return () => {
      if (root) {
        root.style.overflow = 'unset';
        root.style.height = 'auto';
      }
    };
  }, [isMobileOpen]);

  React.useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      fetch(`/api/auth/me?username=${username}`)
        .then(res => res.json())
        .then(data => setOwner(data))
        .catch(console.error);
    }
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    navigate('/admin/login', { replace: true });
  };

  const SidebarContent = (
    <aside
      className={`w-64 bg-dark-800 border-r border-white/10 transition-all duration-300 flex flex-col h-screen`}
    >
      <div className="flex flex-col items-center py-8 border-b border-white/5 relative">
        <button 
          onClick={() => setIsMobileOpen(false)} 
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors xl:hidden"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/20 font-bold text-2xl mb-4">
            {owner?.full_name?.charAt(0) || 'O'}
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-white">{owner?.full_name}</span>
            <span className="text-xs text-gray-400 mt-1">{owner?.username}</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto pointer-events-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-600">
        {TABS.map((tab) => (
          <Link
            key={tab.id}
            to={tab.path}
            onClick={() => setIsMobileOpen(false)}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gold-500/10 hover:text-gold-500 transition-all group ${window.location.pathname === tab.path ? 'bg-gold-500/20 text-gold-500' : 'text-gray-400'
              }`}
          >
            <tab.icon size={20} className="flex-shrink-0" />
            <span className="font-medium whitespace-nowrap">{tab.label}</span>
            {window.location.pathname === tab.path && <ChevronRight size={16} className="ml-auto" />}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
        >
          <LogOut size={20} className="flex-shrink-0" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen bg-dark-900 text-white flex">
      {/* Mobile/Tablet/Laptop Sidebar Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm xl:hidden" onClick={() => setIsMobileOpen(false)} />
      )}
      <div className={`fixed inset-y-0 left-0 z-50 transform ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} xl:translate-x-0 xl:fixed xl:flex transition-transform duration-300`}>
        {SidebarContent}
      </div>

      {/* Main Content */}
      <main className="flex-1 transition-all duration-300 xl:ml-64">
        <header className="bg-dark-800 border-b border-white/10 px-4 md:px-8 py-4 sticky top-0 z-30 shadow-lg flex items-center gap-4">
          <button className="xl:hidden p-2 text-gray-400" onClick={() => setIsMobileOpen(true)}>
            <Menu size={24} />
          </button>
          <div className="max-w-6xl mx-auto flex-1 flex items-center justify-between">
            <h1 className="text-xl font-serif text-white tracking-wider">
              The Photographer House <span className="text-gold-500 font-sans font-medium text-xs uppercase tracking-widest ml-2 hidden md:inline">Admin Portal</span>
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400 font-medium px-3 py-1 bg-white/5 rounded-full">Dashboard</span>
            </div>
          </div>
        </header>
        <div className="p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

