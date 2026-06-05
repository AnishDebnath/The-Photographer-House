import React from 'react';
import { BannerManager } from '../../components/common/BannerManager';

export const ServicesManager: React.FC = () => {
  return (
    <div className="space-y-8">
      <BannerManager
        bannerName="services-hero"
        title="Services Banner"
        fetchUrl="/api/banners/services-hero"
        saveUrl="/api/banners/save"
        uploadFolder="services/hero-banner"
      />
    </div>
  );
};
