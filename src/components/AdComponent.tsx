'use client';

import { useEffect } from 'react';

export default function AdComponent() {
  useEffect(() => {
    // 只在客户端执行PopCash广告代码
    if (typeof window !== 'undefined') {
      try {
        const uid = '494658';
        const wid = '745470';
        const pop_tag = document.createElement('script');
        pop_tag.src = '//cdn.popcash.net/show.js';
        pop_tag.async = true;

        pop_tag.onload = function() {
          console.log('PopCash广告加载成功');
        };

        pop_tag.onerror = function() {
          console.log('PopCash主CDN失败，尝试备用CDN...');
          // 移除失败的脚本
          if (pop_tag.parentNode) {
            pop_tag.parentNode.removeChild(pop_tag);
          }

          // 尝试备用CDN
          const backup_tag = document.createElement('script');
          backup_tag.src = '//cdn2.popcash.net/show.js';
          backup_tag.async = true;

          backup_tag.onload = function() {
            console.log('PopCash备用CDN加载成功');
          };

          backup_tag.onerror = function() {
            console.log('PopCash所有CDN都失败了');
          };

          document.body.appendChild(backup_tag);
        };

        document.body.appendChild(pop_tag);
      } catch (error) {
        console.error('PopCash广告加载错误:', error);
      }
    }
  }, []);

  return null; // 不渲染任何内容，只执行脚本
}
