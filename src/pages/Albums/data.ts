export interface Album {
    id: number;
    image: string;
    title: string;
    category: string;
    desc: string;
}

export const albums: Album[] = [
    {
        id: 1,
        image: "assets/albums/albums (1).jpg",
        title: "The Royal Wedding",
        category: "Wedding",
        desc: "A luxurious leather-bound collection capturing the essence of heritage."
    },
    {
        id: 2,
        image: "assets/albums/albums (2).jpg",
        title: "Heritage & Soul",
        category: "Traditional",
        desc: "Deeply rooted rituals preserved in archival quality paper."
    },
    {
        id: 3,
        image: "assets/albums/albums (3).jpg",
        title: "Eternal Bonds",
        category: "Wedding",
        desc: "Heirloom quality for timeless memories of a grand celebration."
    },
    {
        id: 4,
        image: "assets/albums/albums (4).jpg",
        title: "Vivid Moments",
        category: "Candid",
        desc: "Capturing the raw, unfiltered emotions of your special day."
    },
    {
        id: 5,
        image: "assets/albums/albums (5).jpg",
        title: "Golden Hour Series",
        category: "Portrait",
        desc: "Soft light and warm tones meeting premium matte finish."
    },
    {
        id: 6,
        image: "assets/albums/albums (6).jpg",
        title: "Urban Love",
        category: "Commercial",
        desc: "Contemporary aesthetics for modern storytelling."
    },
];
