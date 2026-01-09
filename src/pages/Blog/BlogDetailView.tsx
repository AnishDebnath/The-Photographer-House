import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Share2, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../../components/Button';
import { Booking } from '../../components/Booking';
import { BlogPost } from '../../types';
import { blogPosts } from './data';

interface BlogDetailViewProps {
    selectedPost: BlogPost;
    onBackToList: () => void;
    onPostClick: (post: BlogPost) => void;
    onNavigate: (page: string) => void;
}

export const BlogDetailView: React.FC<BlogDetailViewProps> = ({ selectedPost, onBackToList, onPostClick, onNavigate }) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    // Update Scroll Progress
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const relatedPosts = blogPosts
        .filter(p => p.id !== selectedPost.id)
        .sort((a, b) => {
            if (a.category === selectedPost.category && b.category !== selectedPost.category) return -1;
            if (a.category !== selectedPost.category && b.category === selectedPost.category) return 1;
            return 0;
        })
        .slice(0, 3);

    return (
        <div className="bg-white dark:bg-dark-900 min-h-screen transition-colors duration-300 pb-0 animate-in fade-in">
            {/* Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1.5 bg-gold-500 z-50 transition-all duration-100 ease-out"
                style={{ width: `${scrollProgress * 100}%` }}
            ></div>

            {/* Back Button */}
            <div className="fixed top-24 left-6 md:left-12 z-40">
                <button
                    onClick={onBackToList}
                    className="flex items-center gap-3 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full transition-all duration-300 group border border-white/10"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest hidden md:inline">Back to Journal</span>
                </button>
            </div>

            {/* Hero Section */}
            <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 select-none">
                    <img
                        src={selectedPost.image}
                        alt={selectedPost.title}
                        className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-dark-900"></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-12">
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                            {selectedPost.category}
                        </span>
                    </div>

                    <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {selectedPost.title}
                    </h1>

                    <div className="inline-flex items-center gap-2 text-white/80 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <span className="text-xs uppercase tracking-widest opacity-70">Published</span>
                        <span className="w-8 h-px bg-gold-500/50"></span>
                        <span className="font-serif italic text-lg">{selectedPost.date}</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-white dark:bg-dark-900 relative z-20 -mt-6 rounded-t-[3rem] border-t border-white/10 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)]">
                <div className="container mx-auto px-6 py-20 max-w-3xl">
                    <div
                        className="prose dark:prose-invert prose-lg max-w-none 
                    prose-headings:font-serif prose-headings:text-gray-900 dark:prose-headings:text-white 
                    prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-9 prose-p:font-light
                    prose-a:text-gold-500 prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-4 prose-blockquote:border-gold-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:font-serif prose-blockquote:text-gray-800 dark:prose-blockquote:text-gray-200 prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-white/5 prose-blockquote:py-6 prose-blockquote:pr-6 prose-blockquote:rounded-r-2xl prose-blockquote:shadow-sm
                    prose-strong:text-gold-500 prose-strong:font-bold
                    prose-img:rounded-3xl prose-img:shadow-2xl prose-img:w-full prose-img:my-12
                    marker:text-gold-500
                    first-letter:text-6xl first-letter:font-serif first-letter:text-gold-500 first-letter:mr-3 first-letter:float-left first-letter:font-bold"
                        dangerouslySetInnerHTML={{ __html: selectedPost.content || `<p>${selectedPost.excerpt}</p>` }}
                    />

                    {/* Engagement & Share */}
                    <div className="mt-24 pt-10 border-t border-gray-200 dark:border-white/10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex gap-4">
                                <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-500 hover:text-red-500 transition-all group">
                                    <Heart size={20} className="group-hover:fill-current transition-colors" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Love this</span>
                                </button>
                                <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-500 hover:text-blue-500 transition-all group">
                                    <Share2 size={20} />
                                    <span className="text-xs font-bold uppercase tracking-widest">Share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Section */}
            <Booking onNavigate={onNavigate} />

            {/* Related Posts */}
            <section className="py-24 bg-gray-50 dark:bg-dark-900 border-t border-gray-200 dark:border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <p className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">Related Reads</p>
                            <h2 className="font-serif text-3xl md:text-5xl text-gray-900 dark:text-white">You Might Also Like</h2>
                        </div>
                        <Button variant="outline" onClick={onBackToList}>View All Articles</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.map(related => (
                            <div key={related.id} className="group cursor-pointer flex flex-col h-full bg-white dark:bg-dark-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl dark:shadow-none" onClick={() => onPostClick(related)}>
                                <div className="h-64 overflow-hidden relative">
                                    <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 dark:bg-black/80 backdrop-blur-sm text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest text-gold-500 border border-gold-500/20">
                                            {related.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-gray-400 mb-4">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {related.date}</span>
                                        <span className="text-gold-500">•</span>
                                        <span className="flex items-center gap-1"><Clock size={12} /> {related.readTime}</span>
                                    </div>
                                    <h4 className="font-serif text-xl text-gray-900 dark:text-white leading-tight group-hover:text-gold-500 transition-colors mb-4 line-clamp-2">{related.title}</h4>
                                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                        <Button variant="text" className="px-0 py-0 text-xs">Read More</Button>
                                        <ArrowRight size={14} className="text-gold-500 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};



