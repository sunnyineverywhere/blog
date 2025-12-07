'use client';

import { useEffect } from 'react';

export default function CodeCopy() {
  useEffect(() => {
    const handleCopyClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('copy-button')) {
        const code = decodeURIComponent(target.dataset.code || '');
        
        navigator.clipboard.writeText(code).then(() => {
          const originalText = target.textContent;
          target.textContent = 'Copied!';
          target.classList.add('copied');
          
          setTimeout(() => {
            target.textContent = originalText;
            target.classList.remove('copied');
          }, 2000);
        }).catch(() => {
          console.error('Failed to copy code');
        });
      }
    };

    document.addEventListener('click', handleCopyClick);
    return () => document.removeEventListener('click', handleCopyClick);
  }, []);

  return null;
}