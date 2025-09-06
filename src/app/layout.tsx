import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "免费在线工具导航 - 精选实用网页工具集合 | ToolHub",
  description: "精选最实用的免费在线工具，包括开发工具、设计资源、办公助手、学习资料等。一站式工具导航，提高工作效率，节省时间成本。",
  keywords: "在线工具,免费工具,网页工具,开发工具,设计工具,办公工具,工具导航,实用工具",
  authors: [{ name: "ToolHub" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://addbg.pages.dev/",
    title: "免费在线工具导航 - 精选实用网页工具集合",
    description: "精选最实用的免费在线工具，包括开发工具、设计资源、办公助手等。一站式工具导航，提高工作效率。",
  },
  twitter: {
    card: "summary_large_image",
    title: "免费在线工具导航 - 精选实用网页工具集合",
    description: "精选最实用的免费在线工具，包括开发工具、设计资源、办公助手等。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ToolHub - 免费在线工具导航",
              "description": "精选最实用的免费在线工具集合",
              "url": "https://addbg.pages.dev/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://addbg.pages.dev/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
