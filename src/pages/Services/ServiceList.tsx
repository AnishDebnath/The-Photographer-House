import React, { useState } from 'react';
import { Camera, Gem, ShoppingBag, Book } from 'lucide-react';
import { ServiceData } from '../../types';
import { ServiceCard } from './ServiceCard';

interface ServiceListProps {
    onNavigate: (page: string, sectionId?: string) => void;
}

export const ServiceList: React.FC<ServiceListProps> = ({ onNavigate }) => {
    const [filter, setFilter] = useState('All Services');
    const categories = ['All Services', 'Wedding / Occasion', 'Jewellery', 'Product Shoot', 'Photo Albums'];

    const services: ServiceData[] = [
        {
            id: 'wedding',
            category: 'Wedding / Occasion',
            title: 'Wedding & Occasion',
            subtitle: 'CELEBRATIONS & MILESTONES',
            icon: Camera,
            description: 'Comprehensive coverage for weddings, galas, private parties, and large-scale gatherings. We ensure every keynote, handshake, and candid smile is documented with precision.',
            features: ['Multi-photographer coverage options', 'Cinematic video highlights', 'Online gallery for guest sharing'],
            images: [
                'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'left'
        },
        {
            id: 'jewellery',
            category: 'Jewellery',
            title: 'Jewellery Photography',
            subtitle: 'LUXURY & DETAIL',
            icon: Gem,
            description: 'Highlighting the intricate craftsmanship of gold, diamond, and gemstone jewellery. We use specialized lighting to create dazzling reflections and sharp details that showcase luxury.',
            features: ['Macro lens precision for details', 'Creative reflection styling', 'High-end retouching included'],
            images: [
                'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1617038220319-88af1199b1e1?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'right'
        },
        {
            id: 'product',
            category: 'Product Shoot',
            title: 'Product Shoot',
            subtitle: 'COMMERCIAL & E-COMMERCE',
            icon: ShoppingBag,
            description: 'Studio-quality images designed to elevate your brand and drive sales. From clean white-background e-commerce shots to stylized lifestyle compositions.',
            features: ['High-resolution crisp details', 'Creative styling and prop sourcing', 'Fast turnaround for campaigns'],
            images: [
                'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'left'
        },
        {
            id: 'albums',
            category: 'Photo Albums',
            title: 'Photo Albums',
            subtitle: 'PRINTED MEMORIES',
            icon: Book,
            description: 'Your memories deserve to be held. Our handcrafted albums feature lay-flat binding, archival-quality paper, and luxurious leather or linen covers to preserve your legacy.',
            features: ['Custom cover embossing', 'Archival matte or glossy paper', 'Personalized design consultation'],
            images: [
                'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1532153955177-f59af40d6472?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'right'
        }
    ];

    const filteredServices = filter === 'All Services'
        ? services
        : services.filter(s => s.category === filter);

    return (
        <div className="container mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 dark:border-white/10 pb-8 gap-6">
                <div>
                    <h2 className="font-serif text-4xl text-gray-900 dark:text-white mb-2">Our Expertise</h2>
                    <p className="text-gray-500 italic">Choose the perfect package for your needs</p>
                </div>
                <div className="flex flex-wrap gap-2 bg-gray-100 dark:bg-white/5 p-1 rounded-full">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === cat
                                ? 'bg-red-900 text-white shadow-md'
                                : 'text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Service List */}
            <div className="space-y-24">
                {filteredServices.map((service) => (
                    <ServiceCard key={service.id} service={service} onNavigate={onNavigate} />
                ))}

                {filteredServices.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500">No services found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};



