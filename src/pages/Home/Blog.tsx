import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../../components/Button';
import { SectionHeader } from '../../components/SectionHeader';
import { blogs } from '../Blog/data';

interface BlogProps {
    onNavigate: (page: string) => void;
    handleBlogNavigation: (id: number) => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigate, handleBlogNavigation }) => {
    return (
        <section className="py-24 bg-white dark:bg-dark-800 transition-colors duration-300" aria-labelledby="blog-heading">
            <SectionHeader subtitle="Follow The Shadow" title="Latest Photography Stories" />
            <h2 id="blog-heading" className="sr-only">Latest Blog Posts</h2>
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <article
                        key={blog.id}
                        className="group cursor-pointer bg-white dark:bg-dark-900 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 dark:border-white/5 transition-all duration-500 hover:-translate-y-2 flex flex-col"
                        onClick={() => handleBlogNavigation(blog.id)}
                    >
                        {/* Image Container */}
                        <div className="relative h-64 w-full overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gold-500">{blog.category}</p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex items-center gap-3 mb-4 text-xs text-gray-400 font-medium">
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={12} className="text-gold-500" />
                                    <time dateTime={blog.date}>{blog.date}</time>
                                </div>
                            </div>

                            <h3 className="text-2xl font-serif text-gray-900 dark:text-white leading-tight mb-4 group-hover:text-gold-500 transition-colors">
                                {blog.title}
                            </h3>

                            <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Read Story</span>
                                <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                                    <ArrowRight size={14} className="group-hover:-rotate-45 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <div className="text-center mt-16">
                <Button variant="dark-outline" onClick={() => onNavigate('blog')}>View All Blog Posts</Button>
            </div>
        </section>
    );
};



