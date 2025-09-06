'use client';

import { useEffect, useState } from 'react';

export default function WebTraficAd() {
  const [isMobile, setIsMobile] = useState(false);
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // 清理之前的广告
    const adContainer = document.getElementById('webtraf_16929');
    if (adContainer) {
      adContainer.innerHTML = '';
    }

    // 重新加载广告
    const loadAd = () => {
      if (adContainer) {
        // 根据设备类型创建不同的广告代码
        if (isMobile) {
          // 移动版广告代码
          adContainer.innerHTML = '<div style="width:100%;max-width:468px;height:60px;"><script src="https://webtrafic.ru/ads.php?uid=16929" async><\/script></div>';
        } else {
          // 桌面版广告代码
          adContainer.innerHTML = '<div style="width:468px;height:60px;"><script src="https://webtrafic.ru/ads.php?uid=16929" async><\/script></div>';
        }

        // 重新执行脚本
        const scripts = adContainer.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
          const script = document.createElement('script');
          script.src = scripts[i].src;
          script.async = true;
          document.head.appendChild(script);
        }

        setAdLoaded(true);
      }
    };

    // 延迟加载广告，确保DOM准备就绪
    const timer = setTimeout(loadAd, 100);

    return () => {
      clearTimeout(timer);
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
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: adLoaded ? 'transparent' : '#f5f5f5',
          border: adLoaded ? 'none' : '1px dashed #ccc'
        }}
      >
        {!adLoaded && <span style={{ color: '#999', fontSize: '14px' }}>广告加载中...</span>}
      </div>
      <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
        {isMobile ? '移动版广告 (100%宽度，最大468px)' : '桌面版广告 (固定468px宽度)'}
      </p>
    </div>
  );
}
