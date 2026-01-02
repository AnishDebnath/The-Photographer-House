import { SpecialMoment } from '../../types';

export const specialMoments: SpecialMoment[] = [
    // {
    //     id: 1,
    //     image: "assets/special-moments/special moment (1).jpg",
    //     title: "The Golden Hour",
    //     desc: "A breathtaking sunset capture hitting the peaks.",
    //     date: "Dec 2025",
    //     location: "Kolkata, India"
    // },
    ...Array.from({ length: 24 }, (_, i) => ({
        id: 1 + i,
        image: `assets/special-moments/special moment (${i + 1}).jpg`,
        title: `Special Moment ${i + 1}`,
        desc: "Capturing the purest emotions of your special day.",
        date: "2025",
        location: "Selected Location"
    }))
] as any; // Cast because SpecialMoment type might be slightly different in types.ts vs this structure
