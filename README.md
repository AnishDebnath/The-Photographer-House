# 📸 The Photographer House

A premium, modern photography portfolio and business management platform built with React, TypeScript, and Vite. Designed to showcase breathtaking visual storytelling through a seamless, cinematic user experience.

![GHBanner](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

## ✨ Features

- **🎭 Cinematic Portfolio**: Multi-category gallery with a custom masonry layout and high-performance lightbox.
- **🎬 Wedding Films**: Integrated video showcase with custom-styled YouTube modal players.
- **📂 Client Project Folders**: Organized client-specific galleries (Wedding, Engagement, etc.) for a personalized experience.
- **✨ Special Moments**: A curated collection of artistic shots with a dedicated distraction-free viewing mode.
- **📅 Advanced Booking**: Integrated inquiry system for clients to book sessions easily.
- **🌓 Adaptive Theme**: Full Dark/Light mode support with smooth transitions.
- **📱 Fully Responsive**: Optimized for everything from large studio monitors to mobile devices.
- **🎨 Rich Aesthetics**: Elegant typography (Playfair Display & Lato) and glassmorphism effects for a premium feel.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks (useState, useEffect, useCallback)

## 📁 Project Structure

```text
src/
├── assets/             # Local optimized images
│   ├── portfolio/      # Client-specific project folders
│   └── hero/           # High-resolution landing visuals
├── components/         # Shared UI components (NavBar, Button, etc.)
├── pages/              # Individual page modules
│   ├── Home/           # Landing page sections
│   ├── Portfolio/      # Interactive gallery views
│   ├── Films/          # Cinematic video grid
│   └── ...
├── types.ts            # Centralized TypeScript definitions
└── data.ts             # Application content and project metadata
```

## 🛠️ Installation & Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AnishDebnath/The-Photographer-House.git
   cd The-Photographer-House
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:3000` (or the port shown in your terminal).

## 💡 Usage

- **Adding Photos**: Place your images in `src/assets/portfolio/[Category]/[ProjectName]` and update the data in `src/pages/Portfolio/index.tsx` or `src/data.ts`.
- **Customizing Style**: Global colors and fonts can be adjusted in `index.html` (Tailwind Config) and `index.css`.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">Crafted with ❤️ by Anish Debnath</p>
