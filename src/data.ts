
import { Camera, Video, Heart, Aperture, ShoppingBag, Film } from 'lucide-react';
import { Service, GalleryItem, BlogPost } from './types';

export const galleryItems: GalleryItem[] = [
    { id: 1, image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 1.jpg", title: "Biswanath & Niketa", category: "Wedding" },
    { id: 2, image: "/src/assets/portfolio/Engagement/Indranil & Plavita/post 2.jpg", title: "Indranil & Plavita", category: "Engagement" },
    { id: 3, image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 3.jpg", title: "Biswanath & Niketa", category: "Wedding" },
    { id: 4, image: "/src/assets/portfolio/Engagement/Indranil & Plavita/post 4.jpg", title: "Indranil & Plavita", category: "Engagement" },
    { id: 5, image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 5.jpg", title: "Biswanath & Niketa", category: "Wedding" },
    { id: 6, image: "/src/assets/portfolio/Engagement/Indranil & Plavita/post 6.jpg", title: "Indranil & Plavita", category: "Engagement" },
];

export const clientStories = [
    {
        id: 1,
        name: "Biswanath & Niketa",
        category: "Wedding",
        location: "Kolkata",
        image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 1.jpg",
        description: "A timeless celebration of love and culture."
    },
    {
        id: 2,
        name: "Indranil & Plavita",
        category: "Engagement",
        location: "Bengaluru",
        image: "/src/assets/portfolio/Engagement/Indranil & Plavita/post 1.jpg",
        description: "Captured the intimate glances and joyful beginnings of their forever."
    },
    {
        id: 3,
        name: "Vikram & Aditi",
        category: "Ceremony",
        location: "Udaipur",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
        description: "A grand palace celebration in Jaipur, where royalty meets modern elegance."
    },
    {
        id: 4,
        name: "Arjun & Meera",
        category: "Pre-Wedding",
        location: "Goa",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800",
        description: "A candid evening walk capturing the anticipation of their new journey together."
    },
    {
        id: 5,
        name: "Kabir & Zoya",
        category: "Reception",
        location: "Mumbai",
        image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=800",
        description: "Elegance and tradition blended perfectly in a night of celebration and joy."
    },
    {
        id: 6,
        name: "Dev & Ishita",
        category: "Post-Wedding",
        location: "Rishikesh",
        image: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?auto=format&fit=crop&q=80&w=800",
        description: "Serene moments in nature, reflecting the peace and love of their union."
    },
];

export const services: Service[] = [
    { icon: Camera, title: "Wedding Photography", description: "Capturing the purest emotions of your special day with artistic vision." },
    { icon: Video, title: "Cinematography", description: "Creating cinematic masterpieces that tell your love story in motion." },
    { icon: Heart, title: "Pre-Wedding Shoots", description: "Casual and romantic sessions to celebrate your chemistry." },
    { icon: Aperture, title: "Jewelry Photography", description: "Highlighting the intricate details of precious ornaments." },
    { icon: ShoppingBag, title: "Product Shoots", description: "Professional imagery for brands that demand excellence." },
    { icon: Film, title: "Event Coverage", description: "Comprehensive documentation of corporate and social events." },
];

export const testimonials = [
    {
        name: "Priya & Rahul",
        role: "Wedding Couple",
        location: "Udaipur, India",
        rating: 5,
        image: "https://picsum.photos/id/1005/100/100",
        text: "The team captured the soul of our wedding. Every photo brings back a flood of memories. The team was invisible yet present everywhere."
    },
    {
        name: "Anita Desai",
        role: "Fashion Designer",
        location: "Mumbai, India",
        rating: 5,
        image: "https://picsum.photos/id/334/100/100",
        text: "Professional, creative, and timely. They understood my brand vision perfectly. The photos are candid, raw, and undeniably us."
    },
    {
        name: "Mark & Sarah",
        role: "Anniversary Shoot",
        location: "Goa, India",
        rating: 5,
        image: "https://picsum.photos/id/129/100/100",
        text: "We are awkward in front of cameras, but they made us feel so comfortable. The results are stunning. It felt like a walk in the park."
    },
];

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Art of the Candid Moment: Why Unposed Photos Matter",
        excerpt: "In a world of curated feeds, the raw, unfiltered emotion of a candid photograph stands out. Here is how we blend into the background to capture the real you.",
        content: `
        <p class="lead text-xl md:text-2xl font-light leading-relaxed mb-8 text-gray-700 dark:text-gray-200">Photography, at its core, is about memory. It is about freezing a split second in time that would otherwise be lost forever. While posed portraits have their place—they are grand, beautiful, and often what hangs on the wall—candid photography captures the <em class="text-gold-500 not-italic font-serif">soul</em> of an event.</p>

        <figure class="my-12">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" alt="Candid laughter at a wedding" class="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-2xl" />
            <figcaption class="text-center text-sm text-gray-500 mt-4 italic">The moments in between the poses often tell the truest story.</figcaption>
        </figure>

        <h3 class="text-3xl font-serif mt-12 mb-6 text-gray-900 dark:text-white">The Invisible Photographer</h3>
        <p class="mb-6 text-lg leading-loose">The key to great candid photography is invisibility. Not literally, of course, but energetically. When a photographer can blend into the room, becoming part of the flow rather than an interruption to it, people let their guard down. They laugh louder, cry freer, and hug tighter.</p>
        <p class="mb-6 text-lg leading-loose">We use long lenses (often 70-200mm) and silent shutters to ensure we aren't intruding on intimate whispers or tearful toasts. The result? Images that actually feel like the moment they depict, free from the stiffness of "hold that pose."</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <div class="space-y-4">
             <img src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=800" alt="Couple whispering" class="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-500" />
             <p class="text-xs text-center text-gray-500 uppercase tracking-widest">Intimate Whispers</p>
          </div>
          <div class="space-y-4 md:mt-12">
             <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800" alt="Guests dancing" class="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-500" />
             <p class="text-xs text-center text-gray-500 uppercase tracking-widest">Unfiltered Joy</p>
          </div>
        </div>

        <h3 class="text-3xl font-serif mt-16 mb-6 text-gray-900 dark:text-white">Why Candids Age Better</h3>
        <p class="mb-6 text-lg leading-loose">Trends in editing and posing come and go. Remember selective color? Or the extreme Dutch angles of the early 2000s? What never goes out of style is genuine emotion. A photo of your grandmother laughing at a joke, head thrown back, is timeless. It connects you to her personality, not just her appearance on that day.</p>

        <blockquote class="border-l-4 border-gold-500 pl-8 italic text-2xl md:text-3xl font-serif text-gray-800 dark:text-gray-200 my-16 bg-gray-50 dark:bg-white/5 py-10 pr-8 rounded-r-2xl leading-relaxed shadow-sm">
          "The best thing about a picture is that it never changes, even when the people in it do."
        </blockquote>

        <h3 class="text-3xl font-serif mt-16 mb-6 text-gray-900 dark:text-white">Creating the Environment</h3>
        <p class="mb-6 text-lg leading-loose">Even "candid" moments can be encouraged. During our sessions, we often give prompts rather than poses. "Whisper your favorite vegetable in her ear" usually gets a better smile than "Say cheese." It's about creating an environment where authentic connection can happen.</p>
        
        <figure class="my-12">
            <img src="https://images.unsplash.com/photo-1529636721157-d488f5d623a4?auto=format&fit=crop&q=80&w=1200" alt="Atmospheric wedding shot" class="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-2xl" />
        </figure>

        <h3 class="text-3xl font-serif mt-16 mb-6 text-gray-900 dark:text-white">The Technical Side of Spontaneity</h3>
        <p class="mb-6 text-lg leading-loose">Capturing these fleeting moments requires a mastery of camera settings. We shoot in manual mode to adapt instantly to changing light—from the harsh sun of an outdoor ceremony to the moody, romantic lighting of a reception dinner. High shutter speeds are non-negotiable to freeze laughter or dance moves without blur.</p>
        <p class="mb-6 text-lg leading-loose">But beyond settings, it requires anticipation. A good candid photographer watches the room, predicting where the next laugh or tear will come from. We don't just look through the lens; we feel the energy of the room.</p>
        
        <div class="bg-gray-100 dark:bg-white/5 p-8 md:p-10 rounded-3xl mt-16 border border-gray-200 dark:border-white/10">
            <h4 class="font-bold text-xl mb-6 text-gold-500 uppercase tracking-widest border-b border-gray-200 dark:border-white/10 pb-4 inline-block">Our Approach to Candids</h4>
            <ul class="list-none space-y-4 m-0 p-0 text-lg">
                <li class="flex items-start gap-4"><span class="text-gold-500 text-2xl leading-none">•</span> <span>We dress like guests to blend in seamlessly.</span></li>
                <li class="flex items-start gap-4"><span class="text-gold-500 text-2xl leading-none">•</span> <span>Silent mode on cameras is always active.</span></li>
                <li class="flex items-start gap-4"><span class="text-gold-500 text-2xl leading-none">•</span> <span>We prioritize reaction shots during speeches.</span></li>
                <li class="flex items-start gap-4"><span class="text-gold-500 text-2xl leading-none">•</span> <span>We never interrupt a genuine moment for a photo op.</span></li>
            </ul>
        </div>
      `,
        category: "Weddings",
        author: "Alex Richardson",
        date: "Jan 03, 2026",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=1200",
        featured: true
    },
    {
        id: 2,
        title: "5 Essential Lenses for Low Light Receptions",
        excerpt: "When the sun goes down and the party lights come on, you need glass that performs. We break down our kit bag favorites.",
        content: `
        <p class="text-lg leading-loose mb-6">Lighting is everything in photography, but weddings rarely offer perfect studio conditions. Here is how we tackle dimly lit reception halls without killing the ambiance with harsh flash.</p>
        <h3 class="text-2xl font-serif mt-8 mb-4">1. The 85mm f/1.4</h3>
        <p class="text-lg leading-loose mb-6">This is our portrait king. The wide aperture lets in an incredible amount of light, and the compression is flattering for faces.</p>
        <h3 class="text-2xl font-serif mt-8 mb-4">2. The 35mm f/1.4</h3>
        <p class="text-lg leading-loose mb-6">Perfect for the dance floor. It's wide enough to capture the chaos but fast enough to freeze the action.</p>
      `,
        category: "Gear Talk",
        author: "Sarah Jenkins",
        date: "Dec 28, 2025",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
        featured: false
    },
    {
        id: 3,
        title: "Planning Your Destination Wedding in Rajasthan",
        excerpt: "From Udaipur's lakes to Jaipur's palaces, here is everything you need to know about lighting and logistics in India's royal state.",
        content: `<p class="text-lg leading-loose">Rajasthan is the jewel of Indian destination weddings. The colors, the architecture, the history—it is a photographer's playground. However, the harsh midday sun can be a challenge.</p>`,
        category: "Travel",
        author: "Alex Richardson",
        date: "Dec 15, 2025",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1599026462776-563b72381e24?auto=format&fit=crop&q=80&w=800",
        featured: false
    },
    {
        id: 4,
        title: "Golden Hour: The Magician's Trick",
        excerpt: "Why we insist on stealing you away for 15 minutes during sunset, and why you will thank us later.",
        content: `<p class="text-lg leading-loose">It happens quickly. The sun dips low, the light turns soft and warm, and for about 20 minutes, the world looks magical. This is the Golden Hour.</p>`,
        category: "Photography Tips",
        author: "Alex Richardson",
        date: "September 15, 2023",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1470246973918-29a53221c197?auto=format&fit=crop&q=80&w=800",
        featured: false
    },
    {
        id: 5,
        title: "Preserving Colors: The Significance of Print",
        excerpt: "In the digital age, the photo album is a rebellious act of permanence. Discover our heirloom quality binding process.",
        content: `<p class="text-lg leading-loose">A hard drive can fail. A cloud password can be forgotten. But a leather-bound album sitting on your coffee table invites you to open it.</p>`,
        category: "Behind the Scenes",
        author: "Sarah Jenkins",
        date: "August 30, 2023",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1552168324-d612d77725e3?auto=format&fit=crop&q=80&w=800",
        featured: false
    },
    {
        id: 6,
        title: "What to Wear for Your Pre-Wedding Shoot",
        excerpt: "Color coordination without matching. Textures, layers, and movement. A style guide for couples.",
        content: `<p class="text-lg leading-loose">The number one question we get asked: 'What should we wear?' The answer is simple: Wear what makes you feel like the best version of yourself.</p>`,
        category: "Photography Tips",
        author: "Fashion Team",
        date: "August 12, 2023",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1583939003579-73013917c9dd?auto=format&fit=crop&q=80&w=800",
        featured: false
    }
];

export const blogs = blogPosts.map(({ id, title, image, date, category }) => ({ id, title, image, date, category }));

export const albumImages = [
    "/src/assets/portfolio/Wedding/Rajasree & Bishal/post 6.jpg",
    "/src/assets/portfolio/Jewellery Photography/Jewellery photoshoot/jewellery-cover.jpg",
    "/src/assets/portfolio/Engagement/Indranil & Plavita/post 1.jpg",
    "/src/assets/portfolio/Rice Ceremony/Oiendrila/baby post cover.jpg",
    "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 3.jpg",
    "/src/assets/portfolio/Wedding/Arijit & Susmita/as post cover.jpg",
    "/src/assets/portfolio/Wedding/Sourav & Swagata/ss post 5.jpg"
];

export const specialMoments = [
    {
        id: 1,
        image: "/src/assets/portfolio/Wedding/Rajasree & Bishal/8I4A8166.jpg",
        title: "The Royal Entry",
        desc: "A grand entrance captured in its full glory.",
        date: "Dec 2025",
        location: "Kolkata, India"
    },
    {
        id: 2,
        image: "/src/assets/portfolio/Jewellery Photography/Jewellery photoshoot/gold Necklace- 27.0710 gm Earrings- 12.770 gm.jpg",
        title: "Golden Elegance",
        desc: "Fine details of traditional craftsmanship.",
        date: "Nov 2025",
        location: "Studio Session"
    },
    {
        id: 3,
        image: "/src/assets/portfolio/Rice Ceremony/Oiendrila/baby post 13.jpg",
        title: "Innocent Wonder",
        desc: "The pure joy of a first ceremony.",
        date: "Oct 2025",
        location: "Kolkata, India"
    },
    {
        id: 4,
        image: "/src/assets/portfolio/Engagement/Indranil & Plavita/post 7.jpg",
        title: "The Silent Vow",
        desc: "An intimate moment amidst the celebration.",
        date: "Sept 2025",
        location: "Bengaluru, India"
    },
    {
        id: 5,
        image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/post 6.jpg",
        title: "Eternal Union",
        desc: "A beautiful capture of traditional rituals.",
        date: "Aug 2025",
        location: "Kolkata, India"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd552?auto=format&fit=crop&q=80&w=1200",
        title: "The Bride",
        desc: "A quiet moment before the ceremony.",
        date: "Dec 10, 2023",
        location: "Udaipur Palace"
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
        title: "Fashion Forward",
        desc: "Editorial shoot for Summer '24.",
        date: "July 05, 2023",
        location: "Paris, France"
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1200",
        title: "Deep Blue",
        desc: "Seascape long exposure.",
        date: "July 22, 2023",
        location: "Goa Coastline"
    },
    {
        id: 10,
        image: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?auto=format&fit=crop&q=80&w=1200",
        title: "Alpine Glow",
        desc: "Sunset hitting the peaks.",
        date: "June 14, 2023",
        location: "Swiss Alps"
    }
];

export const faqs = [
    {
        q: "Do you travel for destination weddings?",
        a: "Absolutely! We love traveling and have covered weddings across India and abroad. Travel and accommodation costs are typically borne by the client."
    },
    {
        q: "How many photos will we receive?",
        a: "For a typical full-day wedding, you can expect between 500-800 edited high-resolution images. We focus on quality storytelling rather than just quantity."
    },
    {
        q: "Do you provide raw files?",
        a: "We do not provide RAW files as they are unpolished and incomplete. Our editing style is a crucial part of our artistic signature, and we delivers only the final, perfected images."
    },
    {
        q: "What is your payment term?",
        a: "We require a 50% retainer to secure your date. The remaining balance is due 2 weeks prior to the event date."
    },
    {
        q: "How long does it take to get our photos?",
        a: "We deliver a sneak peek within 1 week! The full gallery is typically delivered within 8-10 weeks, depending on the season."
    }
];
