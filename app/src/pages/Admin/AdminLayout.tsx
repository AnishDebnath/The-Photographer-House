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
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white flex">
      {/* Sidebar */}
      <aside
        className={`${isSidebarOpen ? 'w-64' : 'w-20'
          } bg-dark-800 border-r border-white/10 transition-all duration-300 flex flex-col fixed h-full z-50`}
      >
        <div className="h-20 flex items-center px-4 border-b border-white/5">
          <div className="flex items-center gap-3 flex-1 overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/20 flex-shrink-0 font-bold">
              O
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col truncate">
                <span className="text-sm font-medium text-white truncate">Hello, Owner</span>
              </div>
            )}
          </div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className="p-2 text-gray-500 hover:text-white transition-colors flex-shrink-0"
          >
            {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {TABS.map((tab) => (
            <Link
              key={tab.id}
              to={tab.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gold-500/10 hover:text-gold-500 transition-all group ${window.location.pathname === tab.path ? 'bg-gold-500/20 text-gold-500' : 'text-gray-400'
                }`}
            >
              <tab.icon size={20} className="flex-shrink-0" />
              {isSidebarOpen && <span className="font-medium whitespace-nowrap">{tab.label}</span>}
              {isSidebarOpen && window.location.pathname === tab.path && <ChevronRight size={16} className="ml-auto" />}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
          >
            <LogOut size={20} className="flex-shrink-0" />
            {isSidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <header className="bg-dark-800 border-b border-white/10 px-8 py-4 sticky top-0 z-40 shadow-lg">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-serif text-white tracking-wider">
              The Photographer House <span className="text-gold-500 font-sans font-medium text-xs uppercase tracking-widest ml-2">Admin Portal</span>
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
