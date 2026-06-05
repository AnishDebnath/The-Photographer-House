import React from 'react';
import { BannerManager } from '../../components/common/BannerManager';

export const FilmsManager: React.FC = () => {
  return (
    <div className="space-y-8">
      <BannerManager
        bannerName="films-hero"
        title="Films Banner"
        fetchUrl="/api/banners/films-hero"
        saveUrl="/api/banners/save"
        uploadFolder="films/hero-banner"
      />
    </div>
  );
};
