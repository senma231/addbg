'use client';

import { useEffect, useState, useRef } from 'react';

export default function WebTraficAd() {
  const [isMobile, setIsMobile] = useState(false);
  const [adLoaded, setAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !adContainerRef.current) return;

    const loadAd = () => {
      const adContainer = adContainerRef.current;
      if (!adContainer) return;

      try {
        // 清理之前的内容
        adContainer.innerHTML = '';
        setAdLoaded(false);
        setAdError(false);

        // 创建广告脚本
        const script = document.createElement('script');
        script.src = 'https://webtrafic.ru/ads.php?uid=16929';
        script.async = true;

        script.onload = function() {
          console.log('WebTrafic广告加载成功');
          setAdLoaded(true);
        };

        script.onerror = function() {
          console.log('WebTrafic广告加载失败');
          setAdError(true);
          setAdLoaded(false);
        };

        // 直接添加脚本到容器
        adContainer.appendChild(script);

      } catch (error) {
        console.error('WebTrafic广告加载错误:', error);
        setAdError(true);
        setAdLoaded(false);
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
        ref={adContainerRef}
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
        {!adLoaded && !adError && <span style={{ color: '#999', fontSize: '14px' }}>广告加载中...</span>}
        {adError && <span style={{ color: '#f56565', fontSize: '14px' }}>广告加载失败</span>}
      </div>
      <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
        {isMobile ? '移动版广告 (100%宽度，最大468px)' : '桌面版广告 (固定468px宽度)'}
        {adError && ' - 网络连接问题'}
      </p>
    </div>
  );
}
