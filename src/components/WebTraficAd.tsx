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
      {/* WebTrafic 广告代码 - 完全按照ads.md中的原始代码 */}
      {isMobile ? (
        // 移动端版本
        <div
          id="webtraf_16929"
          style={{
            width: '100%',
            maxWidth: '468px',
            height: '60px',
            margin: '0 auto'
          }}
          dangerouslySetInnerHTML={{
            __html: '<script src="https://webtrafic.ru/ads.php?uid=16929" async></script>'
          }}
        />
      ) : (
        // 桌面端版本
        <div
          id="webtraf_16929"
          style={{
            width: '468px',
            height: '60px',
            margin: '0 auto'
          }}
          dangerouslySetInnerHTML={{
            __html: '<script src="https://webtrafic.ru/ads.php?uid=16929" async></script>'
          }}
        />
      )}
      <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
        {isMobile ? 'WebTrafic移动端广告 (100%宽度，最大468px)' : 'WebTrafic桌面端广告 (468px宽度)'}
      </p>
    </div>
  );
}
