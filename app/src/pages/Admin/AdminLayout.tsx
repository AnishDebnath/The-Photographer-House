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
import { supabase } from '../../lib/supabase';

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
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white flex">
      {/* Sidebar */}
      <aside
        className={`${isSidebarOpen ? 'w-64' : 'w-20'
          } bg-dark-800 border-r border-white/10 transition-all duration-300 flex flex-col fixed h-full z-50`}
      >
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && <span className="font-serif text-xl text-gold-500 tracking-wider">Admin</span>}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
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
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'} p-8`}>
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
