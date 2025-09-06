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

  return (
    <div style={{ marginTop: '20px' }}>
      <div
        style={{
          width: isMobile ? '100%' : '468px',
          maxWidth: isMobile ? '468px' : 'none',
          height: '60px',
          margin: '0 auto'
        }}
      >
        <script src="https://webtrafic.ru/ads.php?uid=16929" async></script>
      </div>
      <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
        {isMobile ? '移动版广告 (100%宽度，最大468px)' : '桌面版广告 (固定468px宽度)'}
      </p>
    </div>
  );
}
