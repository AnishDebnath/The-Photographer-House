import React from 'react';
import { Heart, Award, Clock } from 'lucide-react';
import { Button } from '../../components/Button';
import { SectionHeader } from '../../components/SectionHeader';

interface ValuesProps {
    onNavigate: (page: string) => void;
}

export const Values: React.FC<ValuesProps> = ({ onNavigate }) => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <SectionHeader
                    subtitle="Our Promise"
                    title="What We Provide"
                    description="Beyond the shutter click, we offer a premium experience designed for peace of mind."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {/* Card 1 */}
                    <div className="bg-white dark:bg-dark-800 p-10 rounded-[2rem] shadow-lg border border-gray-100 dark:border-white/5 hover:-translate-y-2 transition-transform duration-300 group">
                        <div className="w-14 h-14 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-gray-900 dark:text-white mb-6 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                            <Heart size={28} />
                        </div>
                        <h3 className="font-serif text-2xl text-gray-900 dark:text-white mb-4">Emotional Intelligence</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            We know when to step in and direct, and when to step back and let the moment unfold. We read the room to capture authentic connections, not forced smiles.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white dark:bg-dark-800 p-10 rounded-[2rem] shadow-lg border border-gray-100 dark:border-white/5 hover:-translate-y-2 transition-transform duration-300 group">
                        <div className="w-14 h-14 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-gray-900 dark:text-white mb-6 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                            <Award size={28} />
                        </div>
                        <h3 className="font-serif text-2xl text-gray-900 dark:text-white mb-4">Heirloom Quality</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            We don't just deliver digital files. We provide archival-grade prints and Italian leather-bound albums designed to last over 100 years without fading.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white dark:bg-dark-800 p-10 rounded-[2rem] shadow-lg border border-gray-100 dark:border-white/5 hover:-translate-y-2 transition-transform duration-300 group">
                        <div className="w-14 h-14 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-gray-900 dark:text-white mb-6 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                            <Clock size={28} />
                        </div>
                        <h3 className="font-serif text-2xl text-gray-900 dark:text-white mb-4">Seamless Workflow</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            From the first consultation to the final delivery, our process is organized and transparent. We stick to our timelines so you never have to wonder where your photos are.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" onClick={() => onNavigate('services')}>View All Services</Button>
                </div>
            </div>
        </section>
    );
};



