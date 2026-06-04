import { useState, useEffect } from 'react';

export const useContent = (page: string, section: string, fallback: any) => {
  const [content, setContent] = useState(fallback);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // FIXME: Need to implement fetch using custom API instead of Supabase
    console.log('Fetching content for:', page, section, ' (Not implemented)');
  }, [page, section]);

  return { content, loading };
};
