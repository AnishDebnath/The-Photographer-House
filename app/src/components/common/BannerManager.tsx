import React, { useState, useEffect } from 'react';
import { Button } from '../../components/ui/Button';
import { X } from 'lucide-react';

interface BannerManagerProps {
  bannerName: string;
  title: string;
  fetchUrl: string;
  saveUrl: string;
  uploadFolder: string;
}

export const BannerManager: React.FC<BannerManagerProps> = ({ bannerName, title, fetchUrl, saveUrl, uploadFolder }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [savedAsset, setSavedAsset] = useState<{ url: string; type: 'image' | 'video' } | null>(null);
  const [heroAsset, setHeroAsset] = useState<{ url: string; type: 'image' | 'video' } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(fetchUrl)
      .then(res => res.json())
      .then(data => {
        if (data && data.asset_url) {
          const asset = { url: data.asset_url, type: data.asset_type };
          setHeroAsset(asset);
          setSavedAsset(asset);
        }
      })
      .catch(console.error);
  }, [fetchUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    setSelectedFile(file);
    setHeroAsset({
      url: URL.createObjectURL(file),
      type: file.type.startsWith('video/') ? 'video' : 'image'
    });
  };

  const handleCancel = () => {
    setHeroAsset(savedAsset);
    setSelectedFile(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append('file', selectedFile);

    const headers: Record<string, string> = { 'x-upload-folder': uploadFolder };
    
    if (savedAsset?.url) {
      try {
        const parts = savedAsset.url.split('/');
        const fileNameWithExt = parts[parts.length - 1];
        const publicId = `The Photographer House/${uploadFolder}/${fileNameWithExt.split('.')[0]}`;
        headers['x-old-public-id'] = publicId;
      } catch (e) {
        console.error('Failed to parse old public ID:', e);
      }
    }

    setLoading(true);
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers,
        body: formData,
      });
      const data = await response.json();
      const assetData = {
        url: data.url,
        type: selectedFile.type.startsWith('video/') ? 'video' : 'image'
      };

      await fetch(saveUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: bannerName, asset_url: assetData.url, asset_type: assetData.type })
      });

      setHeroAsset(assetData);
      setSavedAsset(assetData);
      setSelectedFile(null);
    } catch (err) {
      console.error(err);
      alert('Upload/Save failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-dark-800 p-4 md:p-8 rounded-2xl border border-white/10 mb-8">
      <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6">{title}</h2>
      <div className="border-2 border-dashed border-white/10 rounded-2xl p-0 flex flex-col items-center justify-center bg-dark-900/50 hover:border-gold-500/50 transition-colors overflow-hidden relative min-h-[150px] md:min-h-[250px] group">
        {heroAsset ? (
          <>
            {heroAsset.type === 'video' ? (
              <video src={heroAsset.url} className="w-full h-full object-cover" autoPlay loop muted playsInline />
            ) : (
              <img src={heroAsset.url} alt={title} className="w-full h-full object-cover" />
            )}
            {!selectedFile && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <label className="cursor-pointer bg-gold-500 text-black px-6 py-2 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                  <input type="file" className="hidden" onChange={handleFileChange} accept="image/*,video/*" />
                  Replace
                </label>
              </div>
            )}
            <button 
             onClick={() => { setHeroAsset(null); setSelectedFile(null); }}
             className="absolute top-3 right-3 p-1.5 bg-black/60 backdrop-blur-sm text-white rounded-full hover:bg-black/80 transition-colors border border-white/10"
            >
              <X size={18} />
            </button>
          </>
        ) : (
          <label className="cursor-pointer bg-dark-900 border border-gold-500/20 text-gold-500 px-4 py-2 rounded-lg font-bold hover:bg-gold-500/10">
            <input type="file" className="hidden" onChange={handleFileChange} accept="image/*,video/*" />
            Choose {title}
          </label>
        )}
      </div>
      {selectedFile && (
        <div className="mt-6 flex gap-4 justify-center">
          <Button onClick={handleCancel} variant="danger" size="sm" className="rounded-xl">Cancel</Button>
          <Button onClick={handleUpload} disabled={loading} variant="primary" size="sm" className="rounded-xl">
            {loading ? 'Uploading...' : 'Upload'}
          </Button>
        </div>
      )}
    </section>
  );
};
