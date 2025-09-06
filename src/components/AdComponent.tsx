'use client';

import Script from 'next/script';

export default function AdComponent() {
  return (
    <>
      {/* PopCash 广告代码 - 使用HTTPS确保Cloudflare兼容性 */}
      <Script
        id="popcash-ad"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            try {
              var uid = '494658';
              var wid = '745470';
              var pop_tag = document.createElement('script');
              pop_tag.src='https://cdn.popcash.net/show.js';
              pop_tag.async = true;
              pop_tag.crossOrigin = 'anonymous';

              pop_tag.onload = function() {
                console.log('PopCash广告加载成功');
              };

              pop_tag.onerror = function() {
                console.log('PopCash主CDN失败，尝试备用CDN...');
                var backup_tag = document.createElement('script');
                backup_tag.src='https://cdn2.popcash.net/show.js';
                backup_tag.async = true;
                backup_tag.crossOrigin = 'anonymous';

                backup_tag.onload = function() {
                  console.log('PopCash备用CDN加载成功');
                };

                backup_tag.onerror = function() {
                  console.log('PopCash所有CDN都失败 - 可能被Cloudflare阻止');
                };

                document.body.appendChild(backup_tag);
              };

              document.body.appendChild(pop_tag);
            } catch (error) {
              console.error('PopCash广告初始化失败:', error);
            }
          `
        }}
      />
    </>
  );
}
