import React from 'react';
import { Heart, Aperture, ShieldCheck, Clock } from 'lucide-react';
import { SectionHeader } from '../../components/SectionHeader';

export const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-dark-900 relative overflow-hidden transition-colors duration-300" aria-labelledby="philosophy-heading">
            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader
                    subtitle="Our Philosophy"
                    title="Why Choose Us"
                    description="Because photography is not just about clicking a button. It's about vision, experience, and the art of storytelling."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {[
                        {
                            icon: Heart,
                            title: "Client-Centric Approach",
                            desc: "Your comfort is our priority. We create a relaxed atmosphere so your authentic self shines through in every frame."
                        },
                        {
                            icon: Aperture,
                            title: "Artistic Vision",
                            desc: "We don't just capture scenes; we compose art. We see light, shadow, and angles that others simply miss."
                        },
                        {
                            icon: ShieldCheck,
                            title: "Reliability & Safety",
                            desc: "With dual-slot backups and professional-grade gear, your memories are safe with us. No compromises."
                        },
                        {
                            icon: Clock,
                            title: "Timely Delivery",
                            desc: "We know you are excited. We deliver high-quality, curated, and edited galleries within our promised timeline."
                        }
                    ].map((item, i) => (
                        <div key={i} className="group p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-gold-900/10 relative overflow-hidden">

                            <div className="w-16 h-16 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-gray-900 dark:text-white mb-8 shadow-sm group-hover:bg-gold-500 group-hover:text-black transition-all duration-500 relative z-10">
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>

                            <h4 className="text-xl font-serif text-gray-900 dark:text-white mb-4 relative z-10 group-hover:text-gold-600 dark:group-hover:text-gold-500 transition-colors">{item.title}</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed relative z-10">{item.desc}</p>

                            {/* Subtle pattern on hover */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
