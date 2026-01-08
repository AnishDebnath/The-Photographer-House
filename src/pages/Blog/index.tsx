import React, { useState, useEffect } from 'react';
import { BlogPost } from '../../types';
import { blogPosts } from './data';

import { Hero } from './Hero';
import { BlogListView } from './BlogListView';
import { BlogDetailView } from './BlogDetailView';
import { Newsletter } from './Newsletter';

interface BlogPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
  initialPostId?: number | null;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, initialPostId }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Initial Post ID
  useEffect(() => {
    if (initialPostId) {
      const post = blogPosts.find(p => p.id === initialPostId);
      if (post) {
        setSelectedPost(post);
      }
    }
  }, [initialPostId]);

  if (selectedPost) {
    return (
      <BlogDetailView
        selectedPost={selectedPost}
        onBackToList={handleBackToList}
        onPostClick={handlePostClick}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <div className="bg-white dark:bg-dark-900 min-h-screen transition-colors duration-300 pb-0 animate-in fade-in">
      <Hero />
      <BlogListView onPostClick={handlePostClick} />
      <Newsletter />
    </div>
  );
};
