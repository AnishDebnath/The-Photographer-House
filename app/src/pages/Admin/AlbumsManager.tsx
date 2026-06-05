import React from 'react';
import { BannerManager } from '../../components/common/BannerManager';

export const AlbumsManager: React.FC = () => {
  return (
    <div className="space-y-8">
      <BannerManager
        bannerName="albums-hero"
        title="Albums Banner"
        fetchUrl="/api/banners/albums-hero"
        saveUrl="/api/banners/save"
        uploadFolder="albums/hero-banner"
      />
    </div>
  );
};
