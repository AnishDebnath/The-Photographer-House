import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  title?: string;
  category?: string;
  span?: string; // Tailwind class for grid span
}

export interface Stat {
  label: string;
  value: string;
  icon?: React.ElementType;
}

export interface ServiceData {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  features: string[];
  images: string[];
  alignment?: string;
}

export interface PortfolioFolder {
  title: string;
  category?: string;
  count: number;
  coverImage: string;
  items: GalleryItem[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export interface FullReview {
  id: number;
  name: string;
  location: string;
  rating: number;
  image?: string;
  eventImage: string;
  video?: string;
  text: string;
  source: 'google' | 'facebook' | 'instagram' | 'youtube';
}

export interface FilmItem {
  id: string;
  title: string;
  category: string;
  description: string;
  si?: string;
}

export interface SpecialMoment {
  id: number;
  image: string;
  title: string;
  desc: string;
  date: string;
  location: string;
}