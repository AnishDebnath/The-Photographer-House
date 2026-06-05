import React from 'react';
import { BannerManager } from '../../components/common/BannerManager';

export const PortfolioManager: React.FC = () => {
  return (
    <div className="space-y-8">
      <BannerManager
        bannerName="portfolio-hero"
        title="Portfolio Banner"
        fetchUrl="/api/banners/portfolio-hero"
        saveUrl="/api/banners/save"
        uploadFolder="portfolio/hero-banner"
      />
    </div>
  );
};
