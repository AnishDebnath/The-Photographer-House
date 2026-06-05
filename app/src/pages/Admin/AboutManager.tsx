import React from 'react';
import { BannerManager } from '../../components/common/BannerManager';

export const AboutManager: React.FC = () => {
  return (
    <div className="space-y-8">
      <BannerManager
        bannerName="about-hero"
        title="About Banner"
        fetchUrl="/api/banners/about-hero"
        saveUrl="/api/banners/save"
        uploadFolder="about/hero-banner"
      />
    </div>
  );
};
