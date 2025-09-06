'use client';

import { useEffect, useState } from 'react';

export default function WebTraficAd() {
  const [isMobile, setIsMobile] = useState(false);
  const [adLoaded, setAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadAd = () => {
      const adContainer = document.getElementById('webtraf_16929');
      if (!adContainer) return;

      try {
        // 清理之前的内容
        adContainer.innerHTML = '';

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
          if (adContainer) {
            adContainer.innerHTML = '<div style="padding: 20px; text-align: center; color: #999; border: 1px dashed #ccc;">广告暂时无法加载</div>';
          }
        };

        // 创建广告容器div
        const adDiv = document.createElement('div');
        if (isMobile) {
          adDiv.style.cssText = 'width:100%;max-width:468px;height:60px;margin:0 auto;';
        } else {
          adDiv.style.cssText = 'width:468px;height:60px;margin:0 auto;';
        }

        adDiv.appendChild(script);
        adContainer.appendChild(adDiv);

      } catch (error) {
        console.error('WebTrafic广告加载错误:', error);
        setAdError(true);
        setAdLoaded(false);
        const adContainer = document.getElementById('webtraf_16929');
        if (adContainer) {
          adContainer.innerHTML = '<div style="padding: 20px; text-align: center; color: #999;">广告加载出错</div>';
        }
      }
    };

    // 延迟加载广告，确保DOM准备就绪
    const timer = setTimeout(loadAd, 500);

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
