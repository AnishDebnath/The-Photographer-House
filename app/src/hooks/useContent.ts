import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export const useContent = (page: string, section: string, fallback: any) => {
  const [content, setContent] = useState(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      console.log('Fetching content for:', page, section);
      try {
        const { data, error } = await supabase
          .from('page_content')
          .select('content')
          .eq('page_name', page)
          .eq('section_name', section)
          .single();

        console.log('Fetch result:', { data, error });

        if (error) {
            console.error('Supabase error:', error);
        }

        if (data && data.content) {
          setContent(data.content);
        }
      } catch (err) {
        console.error(`Error fetching content for ${page}/${section}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [page, section]);

  return { content, loading };
};
