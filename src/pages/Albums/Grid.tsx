import React from 'react';

interface Album {
    id: number;
    image: string;
    title: string;
    category: string;
    desc: string;
}

interface GridProps {
    onImageClick: (image: string) => void;
}

export const Grid: React.FC<GridProps> = ({ onImageClick }) => {
    const albums: Album[] = [
        { id: 1, image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1200", title: "The Royal Wedding", category: "Wedding", desc: "A luxurious leather-bound collection." },
        { id: 2, image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200", title: "Parisian Dreams", category: "Travel", desc: "Lay-flat pages capturing the city of love." },
        { id: 3, image: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?auto=format&fit=crop&q=80&w=1200", title: "Generations", category: "Family", desc: "Heirloom quality for timeless memories." },
        { id: 4, image: "https://images.unsplash.com/photo-1629079360814-7221379b32c9?auto=format&fit=crop&q=80&w=1200", title: "Udaipur Palace", category: "Wedding", desc: "Velvet textures meeting royal aesthetics." },
        { id: 5, image: "https://images.unsplash.com/photo-1550948537-130a1ce83314?auto=format&fit=crop&q=80&w=1200", title: "Monochrome Series", category: "Fine Art", desc: "Black and white spreads on matte paper." },
        { id: 6, image: "https://images.unsplash.com/photo-1603574670812-d24560880210?auto=format&fit=crop&q=80&w=1200", title: "Wilderness", category: "Travel", desc: "Panoramic spreads of nature's best." },
        { id: 7, image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=1200", title: "First Year", category: "Family", desc: "Documenting the early days." },
        { id: 8, image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=1200", title: "Abstract Forms", category: "Concept", desc: "High-gloss finish for artistic expression." },
        { id: 9, image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200", title: "Vows at Sunset", category: "Wedding", desc: "Warm tones preserved in linen." },
    ];

    return (
        <div className="container mx-auto px-6 py-20">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {albums.map((album) => (
                    <div
                        key={album.id}
                        className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 bg-gray-100 dark:bg-dark-800"
                        onClick={() => onImageClick(album.image)}
                    >
                        <img
                            src={album.image}
                            alt={album.title}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};



