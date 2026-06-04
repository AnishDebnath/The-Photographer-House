import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../../components/ui/Button';
import { Upload, Save, Trash2, Plus } from 'lucide-react';

export const HomeManager: React.FC = () => {
  const [heroContent, setHeroContent] = useState({
    title: '',
    subtitle: '',
    videoUrl: '',
    buttonText: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchHeroContent();
  }, []);

  const fetchHeroContent = async () => {
    const { data, error } = await supabase
      .from('page_content')
      .select('content')
      .eq('page_name', 'home')
      .eq('section_name', 'hero')
      .single();

    if (data) {
      setHeroContent(data.content);
    }
    setLoading(false);
  };

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase
      .from('page_content')
      .upsert({
        page_name: 'home',
        section_name: 'hero',
        content: heroContent,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'page_name,section_name' });

    if (error) {
      alert('Error saving: ' + error.message);
    } else {
      alert('Saved successfully!');
    }
    setSaving(false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-serif">Home Page Management</h1>
        <Button onClick={handleSave} disabled={saving} variant="primary">
          <Save size={18} className="mr-2" />
          {saving ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>

      <section className="bg-dark-800 p-6 rounded-2xl border border-white/10">
        <h2 className="text-xl font-medium mb-6 flex items-center gap-2">
          Hero Section
        </h2>
        <div className="grid gap-6">
          <div>
            <label className="block text-gray-400 text-sm mb-2">Main Title (Use &lt;br /&gt; for line breaks)</label>
            <input
              type="text"
              value={heroContent.title}
              onChange={(e) => setHeroContent({ ...heroContent, title: e.target.value })}
              className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-gold-500 outline-none"
              placeholder="Where Every Click Tells a Story"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Subtitle / Description</label>
            <textarea
              value={heroContent.subtitle}
              onChange={(e) => setHeroContent({ ...heroContent, subtitle: e.target.value })}
              className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-gold-500 outline-none h-24"
              placeholder="Turning spare moments into lasting memories..."
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-2">Background Video/Image URL</label>
            <div className="flex gap-4">
              <input
                type="text"
                value={heroContent.videoUrl}
                onChange={(e) => setHeroContent({ ...heroContent, videoUrl: e.target.value })}
                className="flex-1 bg-dark-900 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-1 focus:ring-gold-500 outline-none"
                placeholder="/assets/home/banner-video.webm"
              />
              <Button variant="dark-outline">
                <Upload size={18} className="mr-2" />
                Upload
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section Placeholder */}
      <section className="bg-dark-800 p-6 rounded-2xl border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium">Gallery Images</h2>
          <Button variant="dark-outline" size="sm">
            <Plus size={18} className="mr-2" />
            Add Image
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square bg-dark-900 rounded-lg border border-dashed border-white/20 flex items-center justify-center text-gray-500">
            No images added
          </div>
        </div>
      </section>
    </div>
  );
};
