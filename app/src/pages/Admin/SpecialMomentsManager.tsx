import React from 'react';
import { BannerManager } from '../../components/common/BannerManager';

export const SpecialMomentsManager: React.FC = () => {
  return (
    <div className="space-y-8">
      <BannerManager
        bannerName="special-moments-hero"
        title="Special Moments Banner"
        fetchUrl="/api/banners/special-moments-hero"
        saveUrl="/api/banners/save"
        uploadFolder="special-moments/hero-banner"
      />
    </div>
  );
};
