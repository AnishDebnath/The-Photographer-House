import React, { useState } from 'react';
import { Camera, Gem, ShoppingBag, Book } from 'lucide-react';
import { ServiceData } from '../../types';
import { ServiceCard } from './ServiceCard';

interface ServiceListProps {
    onNavigate: (page: string, sectionId?: string) => void;
}

export const ServiceList: React.FC<ServiceListProps> = ({ onNavigate }) => {
    const [filter, setFilter] = useState('All Services');
    const categories = ['All Services', 'Engagement & Wedding', 'Birthday & Rice Ceremony', 'Jewellery', 'Product & Event', 'Photo Album'];

    const services: ServiceData[] = [
        {
            id: 'engagement-wedding-full-package',
            category: 'Engagement & Wedding',
            title: 'Engagement – Wedding Full Package',
            subtitle: 'PREMIUM & AFFORDABLE COMPLETE WEDDING COVERAGE',
            icon: Camera,
            description: 'Our Engagement – Wedding Full Package in Kolkata provides complete photography and cinematography from engagement to reception, including candid, cinematic, and traditional Bengali wedding coverage at premium yet affordable pricing.',
            features: [
                'Engagement to wedding full photography package in Kolkata',
                'Candid, traditional & cinematic wedding coverage',
                'Premium quality with budget-friendly pricing'
            ],
            images: [
                'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'left'
        },
        {
            id: 'pre-wedding',
            category: 'Engagement & Wedding',
            title: 'Pre-Wedding Shoot',
            subtitle: 'CINEMATIC LOVE STORIES',
            icon: Camera,
            description: 'We provide creative and cinematic pre-wedding photography in Kolkata with concept planning, romantic storytelling, and premium visuals. Our pre-wedding shoot packages are stylish, modern, and budget-friendly.',
            features: [
                'Pre-wedding photography in Kolkata',
                'Concept-based cinematic shoots',
                'Affordable pre-wedding packages'
            ],
            images: [
                'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'right'
        },
        {
            id: 'engagement',
            category: 'Engagement & Wedding',
            title: 'Engagement & Ring Ceremony',
            subtitle: 'ELEGANT MOMENTS',
            icon: Camera,
            description: 'Professional engagement and ring ceremony photography in Kolkata capturing rituals, family emotions, and candid moments. Perfect for premium-quality coverage at budget-friendly rates.',
            features: [
                'Engagement photography in Kolkata',
                'Ring ceremony candid moments',
                'Premium yet affordable coverage'
            ],
            images: [
                'https://images.unsplash.com/photo-1530023367847-a683933f4178?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1520962918287-7448c2868f65?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'left'
        },
        {
            id: 'wedding-night',
            category: 'Engagement & Wedding',
            title: 'Wedding Night',
            subtitle: 'INTIMATE & ELEGANT PORTRAITS',
            icon: Camera,
            description: 'Elegant and artistic wedding night photography in Kolkata capturing romantic and intimate moments with a premium yet tasteful approach.',
            features: [
                'Low-light wedding night photography',
                'Couple-focused portraits',
                'Premium retouching'
            ],
            images: [
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'right'
        },
        {
            id: 'reception',
            category: 'Engagement & Wedding',
            title: 'Reception',
            subtitle: 'GRAND CELEBRATIONS',
            icon: Camera,
            description: 'Professional reception photography and videography in Kolkata capturing stage moments, guest interactions, decor, and candid celebrations.',
            features: [
                'Reception photography in Kolkata',
                'Multi-camera coverage',
                'Cinematic highlight videos'
            ],
            images: [
                'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1545232979-6e0b3a9c5b4f?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'left'
        },
        {
            id: 'birthday',
            category: 'Birthday & Rice Ceremony',
            title: 'Birthday Shoot',
            subtitle: 'JOYFUL CELEBRATIONS',
            icon: Camera,
            description: 'Fun and vibrant birthday photography in Kolkata for kids and adults, capturing cake cutting, decorations, and joyful moments at affordable prices.',
            features: [
                'Kids birthday photography in Kolkata',
                'Candid birthday moments',
                'Budget-friendly birthday packages'
            ],
            images: [
                'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'right'
        },
        {
            id: 'rice-ceremony',
            category: 'Birthday & Rice Ceremony',
            title: 'Rice Ceremony',
            subtitle: 'TRADITIONAL MILESTONES',
            icon: Camera,
            description: 'Traditional rice ceremony photography in Kolkata capturing rituals, family emotions, and cultural moments with care and storytelling.',
            features: [
                'Rice ceremony photography in Kolkata',
                'Traditional ritual coverage',
                'Affordable family packages'
            ],
            images: [
                'https://images.unsplash.com/photo-1606214174103-8f7e2d1d8f8a?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1606214174200-2d9d4f5f7e9c?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1606214173911-9b8f2a5d1e2f?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'left'
        },
        {
            id: 'baby-shoot',
            category: 'Birthday & Rice Ceremony',
            title: 'Baby Shoot',
            subtitle: 'PRECIOUS BEGINNINGS',
            icon: Camera,
            description: 'Capturing the innocence and tiny details of your little ones with patience and creativity. Professional baby and newborn photography that preserves their earliest milestones.',
            features: [
                'Newborn & toddler photography in Kolkata',
                'Creative props and theme-based setups',
                'Patient and gentle photography approach'
            ],
            images: [
                'https://images.unsplash.com/photo-1519689680058-324335c77eb2?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1544126592-807daa2b565b?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'right'
        },
        {
            id: 'jewellery',
            category: 'Jewellery',
            title: 'Jewellery Retouch & Editing',
            subtitle: 'PREMIUM PRODUCT VISUALS',
            icon: Camera,
            description: 'High-end jewellery photography services in Kolkata focusing on fine details, craftsmanship, and shine for catalogs, websites, and social media.',
            features: [
                'Jewellery product photography in Kolkata',
                'Macro and detail shots',
                'Brand-ready premium images'
            ],
            images: [
                'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1606760227091-3dd870d97f1b?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1589987607627-616cac9cfa9b?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'left'
        },
        {
            id: 'jewellery-model',
            category: 'Jewellery',
            title: 'Jewellery Photoshoot with Models',
            subtitle: 'LIFESTYLE & FASHION',
            icon: Camera,
            description: 'Lifestyle jewellery photography on professional models in Kolkata for advertisements, catalogs, and premium brand promotion.',
            features: [
                'Jewellery shoots with models',
                'Fashion & lifestyle presentation',
                'Studio & outdoor shoots'
            ],
            images: [
                'https://images.unsplash.com/photo-1618354691229-4f5f3e4d2b5f?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'right'
        },
        {
            id: 'product-shoot',
            category: 'Product & Event',
            title: 'Product Shoot',
            subtitle: 'E-COMMERCE & SOCIAL MEDIA',
            icon: Camera,
            description: 'Professional product photography services in Kolkata for e-commerce websites and brands. We highlight textures, colors, and design to make your products stand out.',
            features: [
                'High-end studio product photography',
                'Clean white or creative backgrounds',
                'Web-ready optimized images'
            ],
            images: [
                'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'left'
        },
        {
            id: 'portfolio-shoot',
            category: 'Product & Event',
            title: 'Portfolio Shoot',
            subtitle: 'FASHION & TALENT',
            icon: Camera,
            description: 'Professional portfolio shoots for aspiring models, actors, and professionals. We capture your best angles to help you build a compelling visual identity.',
            features: [
                'Indoor & outdoor portfolio sessions',
                'Guidance on posing and styling',
                'Professional high-end retouching'
            ],
            images: [
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'right'
        },
        {
            id: 'food-photography',
            category: 'Product & Event',
            title: 'Food Photography',
            subtitle: 'CULINARY ARTISTRY',
            icon: Camera,
            description: 'Mouth-watering food photography for restaurants, cafes, and cookbooks. We use specialized lighting to showcase the freshness and appeal of your cuisine.',
            features: [
                'Restaurant menu photography',
                'Professional food styling guidance',
                'High-resolution promotional shots'
            ],
            images: [
                'https://images.unsplash.com/photo-1476224483472-1b8dc9ed1301?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'left'
        },
        {
            id: 'ecommerce-shoot',
            category: 'Product & Event',
            title: 'E-commerce Shoot',
            subtitle: 'MARKETPLACE OPTIMIZED',
            icon: Camera,
            description: 'Bulk product shoots optimized for Amazon, Flipkart, and other marketplaces. Fast turnaround and consistent quality for higher conversion rates.',
            features: [
                'Bulk e-commerce photography in Kolkata',
                'Standardized white background shots',
                'Amazon & Flipkart compliance'
            ],
            images: [
                'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1585386959984-a4155222f56c?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'right'
        },
        {
            id: 'corporate-event',
            category: 'Product & Event',
            title: 'Corporate Event',
            subtitle: 'BUSINESS MILESTONES',
            icon: Camera,
            description: 'Comprehensive photography coverage for corporate seminars, conferences, and award ceremonies. We document professional moments with a polished look.',
            features: [
                'Event documentation and highlight reels',
                'Candid networking & keynote shots',
                'Quick delivery for PR and social media'
            ],
            images: [
                'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1475721027187-402ad2989a38?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1505373633560-fa9aee362cf1?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'left'
        },
        {
            id: 'photo-albums',
            category: 'Photo Album',
            title: 'Premium Album Design & High-Quality Print',
            subtitle: 'MEMORIES FOREVER',
            icon: Camera,
            description: 'Premium photo album design and printing services in Kolkata with elegant layouts, high-quality materials, and long-lasting finishes.',
            features: [
                'Custom photo album design',
                'Premium print quality',
                'Multiple size options'
            ],
            images: [
                'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'right'
        },
        {
            id: 'light-frame',
            category: 'Photo Album',
            title: 'Customizable Led Photo Frame',
            subtitle: 'MODERN DISPLAY',
            icon: Camera,
            description: 'Stylish LED light photo frames in Kolkata, perfect for home décor, gifting, and showcasing your favorite memories.',
            features: [
                'LED illuminated photo frames',
                'Custom photo selection',
                'Modern premium finish'
            ],
            images: [
                'https://images.unsplash.com/photo-1582719478185-8f5c7f8a6a35?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1504198266285-165a16f82c0a?auto=format&fit=crop&q=80&w=800',
                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&q=80&w=800'
            ],
            alignment: 'left'
        }
    ];

    const filteredServices = filter === 'All Services'
        ? services
        : services.filter(s => s.category === filter);

    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 border-b border-gray-200 dark:border-white/10 pb-8 gap-8">
                <div className="text-left">
                    <h2 className="font-serif text-3xl md:text-4xl text-gray-900 dark:text-white mb-2">Our Expertise</h2>
                    <p className="text-gray-500 italic text-sm md:text-base">Choose the perfect package for your needs</p>
                </div>

                {/* Category Menu with Horizontal Scroll on Mobile */}
                <div className="w-full md:w-auto">
                    <div className="flex overflow-x-auto no-scrollbar gap-2 bg-gray-100 dark:bg-white/5 p-1.5 rounded-2xl md:rounded-full">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`whitespace-nowrap px-5 md:px-6 py-2.5 md:py-2 rounded-xl md:rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === cat
                                    ? 'bg-red-900 text-white shadow-md'
                                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
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



