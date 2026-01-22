import React, { useState, useMemo } from 'react';
import { Camera, Gem, ShoppingBag, Book } from 'lucide-react';
import { ServiceData } from '../../types';
import { ServiceCard } from './ServiceCard';

// Eagerly import all service images
const serviceImages = import.meta.glob('../../assets/services/**/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' });
const albumImages = import.meta.glob('../../assets/albums/**/*.{jpg,jpeg,png,webp}', { eager: true, as: 'url' });

interface ServiceListProps {
    onNavigate: (page: string, sectionId?: string) => void;
}

export const ServiceList: React.FC<ServiceListProps> = ({ onNavigate }) => {
    const [filter, setFilter] = useState('All Services');
    const categories = ['All Services', 'Engagement & Wedding', 'Birthday & Rice Ceremony', 'Jewellery', 'Product & Event', 'Photo Album'];

    const getImagesForService = (serviceId: string): string[] => {
        const folderMapping: Record<string, string> = {
            'engagement-wedding-full-package': 'wedding',
            'pre-wedding': 'pre wedding',
            'engagement': 'ring ceremony',
            'wedding-night': 'Wedding nights',
            'reception': 'reception',
            'anniversary-shoot': 'reception', // Fallback
            'birthday': 'birthday',
            'rice-ceremony': 'rice ceremony',
            'baby-shoot': 'newborn baby shoot',
            'maternity-shoot': 'newborn baby shoot', // Fallback
            'jewellery': 'jewellery',
            'jewellery-model': 'jewellery with model',
            'product-shoot': 'products with model',
            'portfolio-shoot': 'products with model', // Fallback
            'food-photography': 'food photography',
            'corporate-event': 'corporate event',
            'photo-albums': 'albums',
            'light-frame': 'led photoframe',
        };

        const folderName = folderMapping[serviceId];
        if (!folderName) return [];

        if (serviceId === 'photo-albums') {
            return Object.entries(albumImages)
                .filter(([path]) => path.includes(`/albums/`))
                .map(([_, url]) => url as string);
        }

        return Object.entries(serviceImages)
            .filter(([path]) => path.toLowerCase().includes(`/services/${folderName.toLowerCase()}/`))
            .map(([_, url]) => url as string);
    };

    const services: ServiceData[] = useMemo(() => [
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
            images: getImagesForService('engagement-wedding-full-package'),
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
            images: getImagesForService('pre-wedding'),
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
            images: getImagesForService('engagement'),
            alignment: 'left'
        },
        {
            id: 'wedding-night',
            category: 'Engagement & Wedding',
            title: 'Wedding Night Shoot',
            subtitle: 'INTIMATE & ELEGANT PORTRAITS',
            icon: Camera,
            description: 'Elegant and artistic wedding night photography in Kolkata capturing romantic and intimate moments with a premium yet tasteful approach.',
            features: [
                'Low-light wedding night photography',
                'Couple-focused portraits',
                'Premium retouching'
            ],
            images: getImagesForService('wedding-night'),
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
            images: getImagesForService('reception'),
            alignment: 'left'
        },
        {
            id: 'anniversary-shoot',
            category: 'Engagement & Wedding',
            title: 'Anniversary Shoot',
            subtitle: 'GRAND CELEBRATIONS',
            icon: Camera,
            description: 'Celebrate your lasting love with a professional anniversary photoshoot. We capture the enduring bond and beautiful journey of your relationship.',
            features: [
                'Romantic couple portraits',
                'Indoor & outdoor locations',
                'Artistic anniversary highlights'
            ],
            images: getImagesForService('anniversary-shoot'),
            alignment: 'right'
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
            images: getImagesForService('birthday'),
            alignment: 'left'
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
            images: getImagesForService('rice-ceremony'),
            alignment: 'right'
        },
        {
            id: 'baby-shoot',
            category: 'Birthday & Rice Ceremony',
            title: 'Baby / Newborn Shoot',
            subtitle: 'PRECIOUS BEGINNINGS',
            icon: Camera,
            description: 'Capturing the innocence and tiny details of your little ones with patience and creativity. Professional baby and newborn photography that preserves their earliest milestones.',
            features: [
                'Newborn & toddler photography in Kolkata',
                'Creative props and theme-based setups',
                'Patient and gentle photography approach'
            ],
            images: getImagesForService('baby-shoot'),
            alignment: 'left'
        },
        {
            id: 'maternity-shoot',
            category: 'Birthday & Rice Ceremony',
            title: 'Maternity Shoot',
            subtitle: 'THE JOURNEY TO MOTHERHOOD',
            icon: Camera,
            description: 'Celebrate the beautiful journey of motherhood with an artistic maternity photoshoot. We capture the glow and emotion of this special time in your life.',
            features: [
                'Elegant maternity portraits',
                'Comfortable and creative sessions',
                'Professional styling and posing'
            ],
            images: getImagesForService('maternity-shoot'),
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
            images: getImagesForService('jewellery'),
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
            images: getImagesForService('jewellery-model'),
            alignment: 'right'
        },
        {
            id: 'product-shoot',
            category: 'Product & Event',
            title: 'Product / E-commerce Shoot',
            subtitle: 'E-COMMERCE & SOCIAL MEDIA',
            icon: Camera,
            description: 'Professional product photography services in Kolkata for e-commerce websites and brands. We highlight textures, colors, and design to make your products stand out.',
            features: [
                'High-end studio product photography',
                'Clean white or creative backgrounds',
                'Web-ready optimized images'
            ],
            images: getImagesForService('product-shoot'),
            alignment: 'left'
        },
        {
            id: 'portfolio-shoot',
            category: 'Product & Event',
            title: 'Portfolio / Fashion Shoot',
            subtitle: 'FASHION & TALENT',
            icon: Camera,
            description: 'Professional portfolio shoots for aspiring models, actors, and professionals. We capture your best angles to help you build a compelling visual identity.',
            features: [
                'Indoor & outdoor portfolio sessions',
                'Guidance on posing and styling',
                'Professional high-end retouching'
            ],
            images: getImagesForService('portfolio-shoot'),
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
            images: getImagesForService('food-photography'),
            alignment: 'left'
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
            images: getImagesForService('corporate-event'),
            alignment: 'right'
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
            images: getImagesForService('photo-albums'),
            alignment: 'left'
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
            images: getImagesForService('light-frame'),
            alignment: 'right'
        }
    ], []);

    const filteredServices = useMemo(() => filter === 'All Services'
        ? services
        : services.filter(s => s.category === filter), [filter, services]);

    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            <div className="flex flex-col items-start mb-12 md:mb-16 border-b border-gray-200 dark:border-white/10 pb-8 gap-8">
                <div className="text-left">
                    <h2 className="font-serif text-3xl md:text-4xl text-gray-900 dark:text-white mb-2">Our Expertise</h2>
                    <p className="text-gray-500 italic text-sm md:text-base">Choose the perfect package for your needs</p>
                </div>

                {/* Category Menu with Horizontal Scroll */}
                <div className="w-full overflow-hidden">
                    <div className="inline-flex overflow-x-auto no-scrollbar gap-2 bg-gray-100 dark:bg-white/5 p-1.5 rounded-2xl md:rounded-full max-w-full">
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



