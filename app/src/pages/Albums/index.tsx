import React, { useState } from 'react';

import { Hero } from './Hero';
import { Grid } from './Grid';
import { Lightbox } from './Lightbox';

export const AlbumsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white dark:bg-dark-900 min-h-screen transition-colors duration-300 pb-0 animate-in fade-in">
      <Hero />
      <Grid onImageClick={setSelectedImage} />

      {selectedImage && (
        <Lightbox
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};
