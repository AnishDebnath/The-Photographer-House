import { PortfolioFolder } from '../../types';

export const projectFolders: PortfolioFolder[] = [
    {
        title: "Arijit & Susmita",
        category: "Wedding",
        coverImage: "/assets/portfolio/Wedding/arijit & susmita wedding/arijit & susmita wedding cover.jpg",
        count: 13,
        items: Array.from({ length: 13 }, (_, i) => ({
            id: 201 + i,
            image: `/assets/portfolio/Wedding/arijit & susmita wedding/arijit & susmita wedding (${i + 1}).jpg`,
            title: "Arijit & Susmita",
            category: "Wedding"
        }))
    },
    {
        title: "Biswanath & Niketa",
        category: "Wedding",
        coverImage: "/assets/portfolio/Wedding/biswanath & niketa wedding/biswanath & niketa wedding (8).jpg",
        count: 16,
        items: Array.from({ length: 16 }, (_, i) => ({
            id: 101 + i,
            image: `/assets/portfolio/Wedding/biswanath & niketa wedding/biswanath & niketa wedding (${i + 1}).jpg`,
            title: "Biswanath & Niketa",
            category: "Wedding"
        }))
    },
    {
        title: "Ayesha & Eliyaz",
        category: "Wedding",
        coverImage: "/assets/portfolio/Wedding/ayesha & eliyaz nikha/ayesha & eliyaz nikha (8).jpg",
        count: 9,
        items: Array.from({ length: 9 }, (_, i) => ({
            id: 301 + i,
            image: `/assets/portfolio/Wedding/ayesha & eliyaz nikha/ayesha & eliyaz nikha (${i + 1}).jpg`,
            title: "Ayesha & Eliyaz",
            category: "Wedding"
        }))
    },
    {
        title: "Pooja & Anik",
        category: "Wedding",
        coverImage: "/assets/portfolio/Wedding/pooja & anik wedding/pooja & anik wedding (7).jpg",
        count: 10,
        items: Array.from({ length: 10 }, (_, i) => ({
            id: 401 + i,
            image: `/assets/portfolio/Wedding/pooja & anik wedding/pooja & anik wedding (${i + 1}).jpg`,
            title: "Pooja & Anik",
            category: "Wedding"
        }))
    },
    {
        title: "Rajasree & Bishal",
        category: "Wedding",
        coverImage: "/assets/portfolio/Wedding/rajasree & bishal wedding/rajasree & bishal wedding (17).jpg",
        count: 39,
        items: Array.from({ length: 39 }, (_, i) => ({
            id: 501 + i,
            image: `/assets/portfolio/Wedding/rajasree & bishal wedding/rajasree & bishal wedding (${i + 1}).jpg`,
            title: "Rajasree & Bishal",
            category: "Wedding"
        }))
    },
    {
        title: "Sourav & Swagata",
        category: "Wedding",
        coverImage: "/assets/portfolio/Wedding/sourav & swagata wedding/sourav & swagata wedding (8).jpg",
        count: 10,
        items: Array.from({ length: 10 }, (_, i) => ({
            id: 601 + i,
            image: `/assets/portfolio/Wedding/sourav & swagata wedding/sourav & swagata wedding (${i + 1}).jpg`,
            title: "Sourav & Swagata",
            category: "Wedding"
        }))
    },
    {
        title: "Susanta & Iti",
        category: "Wedding",
        coverImage: "/assets/portfolio/Wedding/susanta & iti wedding & reception/susanta & iti wedding & reception (1).jpg",
        count: 21,
        items: Array.from({ length: 21 }, (_, i) => ({
            id: 650 + i,
            image: `/assets/portfolio/Wedding/susanta & iti wedding & reception/susanta & iti wedding & reception (${i + 1}).jpg`,
            title: "Susanta & Iti",
            category: "Wedding"
        }))
    },
    {
        title: "Indranil & Plavita",
        category: "Engagement",
        coverImage: "/assets/portfolio/Engagement/indranil & plavita ring ceremony/indranil & plavita ring ceremony (10).jpg",
        count: 12,
        items: Array.from({ length: 12 }, (_, i) => ({
            id: 701 + i,
            image: `/assets/portfolio/Engagement/indranil & plavita ring ceremony/indranil & plavita ring ceremony (${i + 1}).jpg`,
            title: "Indranil & Plavita",
            category: "Engagement"
        }))
    },
    {
        title: "Indranil & Plavita",
        category: "Reception",
        coverImage: "/assets/portfolio/Reception/indranil & plavita reception/indranil & plavita reception (6).jpg",
        count: 8,
        items: Array.from({ length: 8 }, (_, i) => ({
            id: 801 + i,
            image: `/assets/portfolio/Reception/indranil & plavita reception/indranil & plavita reception (${i + 1}).jpg`,
            title: "Indranil & Plavita",
            category: "Reception"
        }))
    },
    {
        title: "Ayesha",
        category: "Haldi",
        coverImage: "/assets/portfolio/Haldi/ayesha haldi/ayesha haldi (10).jpg",
        count: 11,
        items: Array.from({ length: 11 }, (_, i) => ({
            id: 901 + i,
            image: `/assets/portfolio/Haldi/ayesha haldi/ayesha haldi (${i + 1}).jpg`,
            title: "Ayesha",
            category: "Haldi"
        }))
    },
    {
        title: "Deb & Suchismita",
        category: "Pre-wedding",
        coverImage: "/assets/portfolio/Pre-wedding/deb & suchismita pre wedding/deb & suchismita pre wedding (1).jpg",
        count: 46,
        items: Array.from({ length: 46 }, (_, i) => ({
            id: 950 + i,
            image: `/assets/portfolio/Pre-wedding/deb & suchismita pre wedding/deb & suchismita pre wedding (${i + 1}).jpg`,
            title: "Deb & Suchismita",
            category: "Pre-wedding"
        }))
    },
    {
        title: "Baby Birthday",
        category: "Birthday",
        coverImage: "/assets/portfolio/Birthday/baby birthday/baby birthday (1).jpg",
        count: 10,
        items: Array.from({ length: 10 }, (_, i) => ({
            id: 980 + i,
            image: `/assets/portfolio/Birthday/baby birthday/baby birthday (${i + 1}).jpg`,
            title: "Baby Birthday",
            category: "Birthday"
        }))
    },
    {
        title: "Kia",
        category: "Rice Ceremony",
        coverImage: "/assets/portfolio/Rice Ceremony/kia rice ceremony/kia rice ceremony (6).jpg",
        count: 21,
        items: Array.from({ length: 21 }, (_, i) => ({
            id: 1001 + i,
            image: `/assets/portfolio/Rice Ceremony/kia rice ceremony/kia rice ceremony (${i + 1}).jpg`,
            title: "Kia",
            category: "Rice Ceremony"
        }))
    },
    {
        title: "Oiendrila",
        category: "Rice Ceremony",
        coverImage: "/assets/portfolio/Rice Ceremony/oiendrila rice ceremony/oiendrila rice ceremony (12).jpg",
        count: 12,
        items: Array.from({ length: 12 }, (_, i) => ({
            id: 1101 + i,
            image: `/assets/portfolio/Rice Ceremony/oiendrila rice ceremony/oiendrila rice ceremony (${i + 1}).jpg`,
            title: "Oiendrila",
            category: "Rice Ceremony"
        }))
    },
    {
        title: "Studio Collection",
        category: "Jewellery Photography",
        coverImage: "/assets/portfolio/Jewellery Photography/Jewellery photoshoot/gold & diamond jewellery (5).jpg",
        count: 30,
        items: Array.from({ length: 30 }, (_, i) => ({
            id: 1201 + i,
            image: `/assets/portfolio/Jewellery Photography/Jewellery photoshoot/gold & diamond jewellery (${i + 1}).jpg`,
            title: "Studio Collection",
            category: "Jewellery Photography"
        }))
    },
    {
        title: "AI Concept Shoot",
        category: "Jewellery Photography",
        coverImage: "/assets/portfolio/Jewellery Photography/Jewellery with AI Models/gold & diamond jewellery (1).jpg",
        count: 15,
        items: Array.from({ length: 15 }, (_, i) => ({
            id: 1301 + i,
            image: `/assets/portfolio/Jewellery Photography/Jewellery with AI Models/gold & diamond jewellery (${i + 1}).jpg`,
            title: "AI Concept Shoot",
            category: "Jewellery Photography"
        }))
    },
    {
        title: "Before After",
        category: "Jewellery Photography",
        coverImage: "/assets/portfolio/Jewellery Photography/Before After/before after (1).jpg",
        count: 6,
        items: Array.from({ length: 6 }, (_, i) => {
            const ext = (i + 1 === 2 || i + 1 === 4) ? 'JPG' : 'jpg';
            return {
                id: 1401 + i,
                image: `/assets/portfolio/Jewellery Photography/Before After/before after (${i + 1}).${ext}`,
                title: "Before After",
                category: "Jewellery Photography"
            };
        })
    }
];

export const allItems = projectFolders.flatMap(folder => folder.items);
