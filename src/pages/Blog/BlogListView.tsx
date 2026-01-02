import React, { useState } from 'react';
import { Search, Calendar, User, ChevronRight } from 'lucide-react';
import { Button } from '../../components/Button';
import { BlogPost } from '../../types';
import { blogPosts } from './data';

import { LazyImage } from '../../components/LazyImage';

interface BlogListViewProps {
    onPostClick: (post: BlogPost) => void;
}

export const BlogListView: React.FC<BlogListViewProps> = ({ onPostClick }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Weddings', 'Photography Tips', 'Gear Talk', 'Travel', 'Behind the Scenes'];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPost = blogPosts.find(p => p.featured);

    return (
        <div className="container mx-auto px-6 py-20">
            {/* Search & Filter Bar */}
            <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                                ? 'bg-gold-500 border-gold-500 text-black'
                                : 'bg-transparent border-gray-200 dark:border-white/20 text-gray-500 dark:text-gray-400 hover:border-gold-500 hover:text-gold-500'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative w-full lg:w-72">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-gray-100 dark:bg-white/5 border border-transparent focus:border-gold-500 rounded-full py-3 pl-5 pr-12 text-sm outline-none text-gray-900 dark:text-white transition-all"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
            </div>

            {/* Featured Post */}
            {activeCategory === 'All' && !searchQuery && featuredPost && (
                <div className="mb-20">
                    <div
                        className="group relative rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-gray-50 dark:bg-dark-800 shadow-xl dark:shadow-none border border-gray-100 dark:border-white/5 cursor-pointer"
                        onClick={() => onPostClick(featuredPost)}
                    >
                        <div className="relative h-[400px] lg:h-auto overflow-hidden">
                            <LazyImage
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                containerClassName="h-full w-full"
                            />
                            <div className="absolute top-6 left-6 bg-gold-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                Featured Story
                            </div>
                        </div>
                        <div className="p-10 lg:p-16 flex flex-col justify-center">
                            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-6">
                                <span className="flex items-center gap-1"><Calendar size={14} className="text-gold-500" /> {featuredPost.date}</span>
                                <span className="flex items-center gap-1"><User size={14} className="text-gold-500" /> {featuredPost.author}</span>
                                <span>• {featuredPost.readTime}</span>
                            </div>
                            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 dark:text-white mb-6 leading-tight group-hover:text-gold-500 transition-colors">
                                {featuredPost.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <div>
                                <Button variant="outline" className="group-hover:bg-gold-500 group-hover:text-black">Read Full Article</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.filter(p => !p.featured || activeCategory !== 'All' || searchQuery).map(post => (
                    <article key={post.id} className="group bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg dark:shadow-none border border-gray-100 dark:border-white/5 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                        <div
                            className="relative h-64 overflow-hidden cursor-pointer"
                            onClick={() => onPostClick(post)}
                        >
                            <LazyImage
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                containerClassName="h-full w-full"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 dark:bg-black/80 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest text-gold-500">
                                    {post.category}
                                </span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-gray-400 mb-4">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h3
                                className="font-serif text-xl text-gray-900 dark:text-white mb-4 leading-snug group-hover:text-gold-500 transition-colors cursor-pointer"
                                onClick={() => onPostClick(post)}
                            >
                                {post.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                {post.excerpt}
                            </p>
                            <button
                                onClick={() => onPostClick(post)}
                                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gold-500 hover:text-gray-900 dark:hover:text-white transition-colors mt-auto self-start"
                            >
                                Read More <ChevronRight size={14} className="ml-1" />
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No articles found matching your criteria.
                </div>
            )}

            {filteredPosts.length > 0 && (
                <div className="mt-16 text-center">
                    <Button variant="text">Load More Articles</Button>
                </div>
            )}
        </div>
    );
};



