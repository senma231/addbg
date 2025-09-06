'use client';

import { useEffect, useState } from 'react';

export default function WebTraficAd() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // 动态加载WebTrafic广告脚本
    const script = document.createElement('script');
    script.src = 'https://webtrafic.ru/ads.php?uid=16929';
    script.async = true;
    
    const adContainer = document.getElementById('webtraf_16929');
    if (adContainer) {
      adContainer.appendChild(script);
    }

    return () => {
      // 清理脚本
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [isMobile]);

  return (
    <div style={{ marginTop: '20px' }}>
      <div 
        id="webtraf_16929" 
        style={{
          width: isMobile ? '100%' : '468px',
          maxWidth: isMobile ? '468px' : 'none',
          height: '60px',
          margin: '0 auto'
        }}
      />
      <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
        {isMobile ? '移动版广告' : '桌面版广告'}
      </p>
    </div>
  );
}
