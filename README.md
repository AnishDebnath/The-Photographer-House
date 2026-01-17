# 📸 The Photographer House

A premium, modern photography portfolio and business management platform built with React, TypeScript, and Vite. Designed to showcase breathtaking visual storytelling through a seamless, cinematic user experience.

## ✨ Features

- **🎭 Cinematic Portfolio**: Multi-category gallery with a custom masonry layout and high-performance lightbox.
- **🎬 Wedding Films**: Integrated video showcase with custom-styled YouTube modal players.
- **📂 Client Project Folders**: Organized client-specific galleries (Wedding, Engagement, etc.) for a personalized experience.
- **✨ Special Moments**: A curated collection of artistic shots with a dedicated distraction-free viewing mode.
- **📅 Advanced Booking**: Integrated inquiry system with **EmailJS** for direct client communication.
- **💬 Centered Chat Widget**: Responsive floating chat support with multi-channel contact options (WhatsApp, Call, Maps).
- **🌪️ Smooth Scrolling**: Premium momentum scrolling experience powered by **Lenis**.
- **🌓 Adaptive Theme**: Full Dark/Light mode support with smooth transitions.
- **📱 Fully Responsive**: Optimized for everything from 4K studio monitors to mobile devices, with refined layouts for 1024px and 1440px widths.
- **🎨 Rich Aesthetics**: Elegant typography (Playfair Display & Outfit) and glassmorphism effects for a premium feel.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks (useState, useEffect, useRef)

## 📁 Project Structure

```text
src/
├── assets/             # Local optimized images and branding
│   ├── portfolio/      # Client-specific project folders
│   └── logo/           # Brand assets
├── components/         # Shared UI components (NavBar, ChatWidget, etc.)
│   ├── data/           # Component-specific static data
│   └── ...
├── services/           # External API services (EmailJS)
├── pages/              # Individual page modules
│   ├── Home/           # Landing page sections
│   ├── Portfolio/      # Interactive gallery views
│   ├── Booking/        # Inquiry forms and contact info
│   └── ...
├── types/              # Centralized TypeScript definitions
└── App.tsx             # Main application entry and routing
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

3. **Configure EmailJS**:
   Update your credentials in `src/services/emailAvailability.ts` and `src/services/emailBooking.ts`:
   ```typescript
   const SERVICE_ID = "your_service_id";
   const TEMPLATE_ID = "your_template_id";
   const PUBLIC_KEY = "your_public_key";
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

## 💡 Usage

- **Adding Photos**: Place your images in `src/assets/portfolio/[Category]/[ProjectName]` and update the metadata in `src/pages/Portfolio/data.ts`.
- **Contact Details**: Update global business info (Phone, Email, Address) in `src/components/data/contact.ts`.
- **Customizing Style**: Global animations and Lenis styles can be adjusted in `index.css`.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the Copyright Rights Reserved License of **The Photographer House**.

---

<p align="center">Designed & Developed with ❤️ by <b>Anish Debnath</b></p>
