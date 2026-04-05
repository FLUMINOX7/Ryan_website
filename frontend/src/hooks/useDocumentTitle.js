import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title ? `Ryan | ${title}` : 'Ryan';

    // Cleanup function pour restaurer le titre précédent si nécessaire
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export default useDocumentTitle;
