import React from 'react';
import { BannerManager } from '../../components/common/BannerManager';

export const ReviewsManager: React.FC = () => {
  return (
    <div className="space-y-8">
      <BannerManager
        bannerName="reviews-hero"
        title="Reviews Banner"
        fetchUrl="/api/banners/reviews-hero"
        saveUrl="/api/banners/save"
        uploadFolder="reviews/hero-banner"
      />
    </div>
  );
};
