import { PortfolioFolder } from '../../types';

export const projectFolders: PortfolioFolder[] = [
    {
        title: "Arijit & Susmita",
        category: "Wedding",
        coverImage: "/assets/portfolio/Wedding/arijit & susmita wedding/arijit & susmita wedding cover.jpg",
        count: 13,
        items: Array.from({ length: 13 }, (_, i) => ({
            id: 1101 + i,
            image: `/assets/portfolio/Wedding/arijit & susmita wedding/arijit & susmita wedding (${i + 1}).jpg`,
            title: "Arijit & Susmita",
            category: "Wedding"
        }))
    },
    {
        title: "Biswanath & Niketa",
        category: "Wedding",
        coverImage: "/assets/portfolio/Wedding/biswanath & niketa wedding/biswanath & niketa wedding cover.jpg",
        count: 20,
        items: Array.from({ length: 20 }, (_, i) => ({
            id: 1201 + i,
            image: `/assets/portfolio/Wedding/biswanath & niketa wedding/biswanath & niketa wedding (${i + 1}).jpg`,
            title: "Biswanath & Niketa",
            category: "Wedding"
        }))
    },
    {
        title: "Ayesha & Eliyaz",
        category: "Wedding",
        coverImage: "/assets/portfolio/Wedding/ayesha & eliyaz nikha/ayesha & eliyaz nikha cover.jpg",
        count: 10,
        items: Array.from({ length: 10 }, (_, i) => ({
            id: 1301 + i,
            image: `/assets/portfolio/Wedding/ayesha & eliyaz nikha/ayesha & eliyaz nikha (${i + 1}).jpg`,
            title: "Ayesha & Eliyaz",
            category: "Wedding"
        }))
    },
    {
        title: "Pooja & Anik",
        category: "Wedding",
        coverImage: "/assets/portfolio/Wedding/pooja & anik wedding/pooja & anik wedding cover.jpg",
        count: 10,
        items: Array.from({ length: 10 }, (_, i) => ({
            id: 1401 + i,
            image: `/assets/portfolio/Wedding/pooja & anik wedding/pooja & anik wedding (${i + 1}).jpg`,
            title: "Pooja & Anik",
            category: "Wedding"
        }))
    },
    {
        title: "Rajasree & Bishal",
        category: "Wedding",
        coverImage: "/assets/portfolio/Wedding/rajasree & bishal wedding/rajasree & bishal wedding cover.jpg",
        count: 40,
        items: Array.from({ length: 40 }, (_, i) => ({
            id: 1501 + i,
            image: `/assets/portfolio/Wedding/rajasree & bishal wedding/rajasree & bishal wedding (${i + 1}).jpg`,
            title: "Rajasree & Bishal",
            category: "Wedding"
        }))
    },
    {
        title: "Sourav & Swagata",
        category: "Wedding",
        coverImage: "/assets/portfolio/Wedding/sourav & swagata wedding/sourav & swagata wedding cover.jpg",
        count: 10,
        items: Array.from({ length: 10 }, (_, i) => ({
            id: 1601 + i,
            image: `/assets/portfolio/Wedding/sourav & swagata wedding/sourav & swagata wedding (${i + 1}).jpg`,
            title: "Sourav & Swagata",
            category: "Wedding"
        }))
    },
    {
        title: "Susanta & Iti",
        category: "Wedding",
        coverImage: "/assets/portfolio/Wedding/susanta & iti wedding & reception/susanta & iti wedding & reception cover.jpg",
        count: 23,
        items: Array.from({ length: 23 }, (_, i) => ({
            id: 1701 + i,
            image: `/assets/portfolio/Wedding/susanta & iti wedding & reception/susanta & iti wedding & reception (${i + 1}).jpg`,
            title: "Susanta & Iti",
            category: "Wedding"
        }))
    },
    {
        title: "Indranil & Plavita",
        category: "Engagement",
        coverImage: "/assets/portfolio/Engagement/indranil & plavita ring ceremony/indranil & plavita ring ceremony cover.jpg",
        count: 13,
        items: Array.from({ length: 13 }, (_, i) => ({
            id: 3101 + i,
            image: `/assets/portfolio/Engagement/indranil & plavita ring ceremony/indranil & plavita ring ceremony (${i + 1}).jpg`,
            title: "Indranil & Plavita",
            category: "Engagement"
        }))
    },
    {
        title: "Indranil & Plavita",
        category: "Reception",
        coverImage: "/assets/portfolio/Reception/indranil & plavita reception/indranil & plavita reception cover.jpg",
        count: 15,
        items: Array.from({ length: 15 }, (_, i) => ({
            id: 4101 + i,
            image: `/assets/portfolio/Reception/indranil & plavita reception/indranil & plavita reception (${i + 1}).jpg`,
            title: "Indranil & Plavita",
            category: "Reception"
        }))
    },
    {
        title: "Ayesha",
        category: "Haldi",
        coverImage: "/assets/portfolio/Haldi/ayesha haldi/ayesha haldi cover.jpg",
        count: 11,
        items: Array.from({ length: 11 }, (_, i) => ({
            id: 5101 + i,
            image: `/assets/portfolio/Haldi/ayesha haldi/ayesha haldi (${i + 1}).jpg`,
            title: "Ayesha",
            category: "Haldi"
        }))
    },
    {
        title: "Deb & Suchismita",
        category: "Pre-wedding",
        coverImage: "/assets/portfolio/Pre-wedding/deb & suchismita pre wedding/deb & suchismita pre wedding cover.jpg",
        count: 46,
        items: Array.from({ length: 46 }, (_, i) => ({
            id: 2101 + i,
            image: `/assets/portfolio/Pre-wedding/deb & suchismita pre wedding/deb & suchismita pre wedding (${i + 1}).jpg`,
            title: "Deb & Suchismita",
            category: "Pre-wedding"
        }))
    },
    {
        title: "Baby Birthday",
        category: "Birthday",
        coverImage: "/assets/portfolio/Birthday/baby birthday/baby birthday cover.jpg",
        count: 10,
        items: Array.from({ length: 10 }, (_, i) => ({
            id: 7101 + i,
            image: `/assets/portfolio/Birthday/baby birthday/baby birthday (${i + 1}).jpg`,
            title: "Baby Birthday",
            category: "Birthday"
        }))
    },
    {
        title: "Kiara",
        category: "Rice Ceremony",
        coverImage: "/assets/portfolio/Rice Ceremony/kiara rice ceremony/kiara rice ceremony cover.jpg",
        count: 22,
        items: Array.from({ length: 22 }, (_, i) => ({
            id: 6101 + i,
            image: `/assets/portfolio/Rice Ceremony/kiara rice ceremony/kiara rice ceremony (${i + 1}).jpg`,
            title: "Kiara",
            category: "Rice Ceremony"
        }))
    },
    {
        title: "Oiendrila",
        category: "Rice Ceremony",
        coverImage: "/assets/portfolio/Rice Ceremony/oiendrila rice ceremony/oiendrila rice ceremony cover.jpg",
        count: 13,
        items: Array.from({ length: 13 }, (_, i) => ({
            id: 6201 + i,
            image: `/assets/portfolio/Rice Ceremony/oiendrila rice ceremony/oiendrila rice ceremony (${i + 1}).jpg`,
            title: "Oiendrila",
            category: "Rice Ceremony"
        }))
    },
    {
        title: "Studio Collection",
        category: "Jewellery Photography",
        coverImage: "/assets/portfolio/Jewellery Photography/Jewellery photoshoot/gold & diamond jewellery cover.jpg",
        count: 30,
        items: Array.from({ length: 30 }, (_, i) => ({
            id: 8101 + i,
            image: `/assets/portfolio/Jewellery Photography/Jewellery photoshoot/gold & diamond jewellery (${i + 1}).jpg`,
            title: "Studio Collection",
            category: "Jewellery Photography"
        }))
    },
    {
        title: "AI Concept Shoot",
        category: "Jewellery Photography",
        coverImage: "/assets/portfolio/Jewellery Photography/Jewellery with AI Models/gold & diamond jewellery cover.jpg",
        count: 15,
        items: Array.from({ length: 15 }, (_, i) => ({
            id: 8201 + i,
            image: `/assets/portfolio/Jewellery Photography/Jewellery with AI Models/gold & diamond jewellery (${i + 1}).jpg`,
            title: "AI Concept Shoot",
            category: "Jewellery Photography"
        }))
    },
    {
        title: "Before After",
        category: "Jewellery Photography",
        coverImage: "/assets/portfolio/Jewellery Photography/Before After/before after cover.jpg",
        count: 6,
        items: Array.from({ length: 6 }, (_, i) => {
            const ext = (i + 1 === 2 || i + 1 === 4) ? 'JPG' : 'jpg';
            return {
                id: 8301 + i,
                image: `/assets/portfolio/Jewellery Photography/Before After/before after (${i + 1}).${ext}`,
                title: "Before After",
                category: "Jewellery Photography"
            };
        })
    }
];

export const allItems = projectFolders.flatMap(folder => folder.items);
