export const clientStories = [
    {
        id: 1,
        name: "Rajasree & Bishal",
        category: "Wedding",
        folderTitle: "Rajasree & Bishal",
        location: "Rishikesh",
        image: "/src/assets/portfolio/Wedding/Rajasree & Bishal/rajasree bishal wedding (17).jpg",
        description: "Serene moments in nature, reflecting the peace and love of their union."
    },
    {
        id: 2,
        name: "Sourav & Swagata",
        category: "Wedding",
        folderTitle: "Sourav & Swagata",
        location: "Goa",
        image: "/src/assets/portfolio/wedding/Sourav & Swagata/sourav swagata wedding (8).jpg",
        description: "Captured the intimate glances and joyful beginnings of their forever."
    },
    {
        id: 3,
        name: "Pooja & Anik",
        category: "wedding",
        folderTitle: "Pooja & Anik", // Mapping to an existing folder as a fallback
        location: "Mumbai",
        image: "/src/assets/portfolio/Wedding/Pooja & Anik/pooja anik wedding (7).jpg",
        description: "A grand palace celebration in Jaipur, where royalty meets modern elegance."
    },
    {
        id: 4,
        name: "Arijit & Susmita",
        category: "Wedding",
        folderTitle: "Arijit & Susmita", // Mapping to an existing folder
        location: "Jaipur",
        image: "/src/assets/portfolio/Wedding/Arijit & Susmita/arijit susmita wedding (2).jpg",
        description: "A candid evening walk capturing the anticipation of their new journey together."
    },
    {
        id: 5,
        name: "Biswanath & Niketa",
        category: "Wedding",
        folderTitle: "Biswanath & Niketa", // Mapping to an existing folder
        location: "Kolkata",
        image: "/src/assets/portfolio/Wedding/Biswanath & Niketa/biswanath niketa wedding (8).jpg",
        description: "Elegance and tradition blended perfectly in a night of celebration and joy."
    },
    {
        id: 6,
        name: "Ayesha & Eliyaz",
        category: "wedding",
        folderTitle: "Ayesha & Eliyaz", // Mapping to an existing folder
        location: "Goa",
        image: "/src/assets/portfolio/Wedding/Ayesha & Eliyaz/ayesha eliyaz wedding (8).jpg",
        description: "Serene moments in nature, reflecting the peace and love of their union."
    },
];

import { albums } from '../Albums/data';

export const albumImages = albums.map(album => album.image);

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

export const galleryItems = [
    { id: 1, image: "/src/assets/home/latest work/latest work (1).jpg", title: "Rajasree & Bishal", category: "Wedding" },
    { id: 2, image: "/src/assets/home/latest work/latest work (2).jpg", title: "Sourav & Swagata", category: "Wedding" },
    { id: 3, image: "/src/assets/home/latest work/latest work (3).jpg", title: "Pooja & Anik", category: "Wedding" },
    { id: 4, image: "/src/assets/home/latest work/latest work (4).jpg", title: "Arijit & Susmita", category: "Wedding" },
    { id: 5, image: "/src/assets/home/latest work/latest work (5).jpg", title: "Biswanath & Niketa", category: "Wedding" },
    { id: 6, image: "/src/assets/home/latest work/latest work (6).jpg", title: "Ayesha & Eliyaz", category: "Wedding" },
];
