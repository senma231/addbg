'use client';

import Script from 'next/script';

export default function AdComponent() {
  return (
    <>
      {/* PopCash 标准广告代码 */}
      <Script
        id="popcash-ad"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var uid = '494658';
            var wid = '745470';
            var pop_tag = document.createElement('script');
            pop_tag.src='//cdn.popcash.net/show.js';
            document.body.appendChild(pop_tag);
            pop_tag.onerror = function() {
              pop_tag = document.createElement('script');
              pop_tag.src='//cdn2.popcash.net/show.js';
              document.body.appendChild(pop_tag);
            };
          `
        }}
      />
    </>
  );
}
