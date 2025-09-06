export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>🛠️ ToolHub</h1>
        <p className="subtitle">精选免费在线工具导航</p>
        <p>发现最实用的网页工具，提升工作效率</p>
      </header>
      
      <section className="intro">
        <h2>关于 ToolHub</h2>
        <p>ToolHub 是一个精心策划的免费在线工具集合，我们致力于为开发者、设计师、学生和职场人士提供最实用的网页工具。无需下载安装，打开浏览器即可使用，让您的工作更加高效便捷。</p>
      </section>
      
      <div className="tools-grid">
        <div className="tool-category">
          <h3 className="category-title">🔧 开发工具</h3>
          <ul className="tool-list">
            <li><a href="https://codepen.io" target="_blank" rel="noopener noreferrer">CodePen - 在线代码编辑器</a></li>
            <li><a href="https://jsfiddle.net" target="_blank" rel="noopener noreferrer">JSFiddle - JavaScript 测试工具</a></li>
            <li><a href="https://jsonformatter.org" target="_blank" rel="noopener noreferrer">JSON 格式化工具</a></li>
            <li><a href="https://regex101.com" target="_blank" rel="noopener noreferrer">正则表达式测试器</a></li>
            <li><a href="https://caniuse.com" target="_blank" rel="noopener noreferrer">Can I Use - 浏览器兼容性查询</a></li>
          </ul>
        </div>
        
        <div className="tool-category">
          <h3 className="category-title">🎨 设计资源</h3>
          <ul className="tool-list">
            <li><a href="https://coolors.co" target="_blank" rel="noopener noreferrer">Coolors - 配色方案生成器</a></li>
            <li><a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash - 免费高质量图片</a></li>
            <li><a href="https://fontawesome.com" target="_blank" rel="noopener noreferrer">Font Awesome - 图标库</a></li>
            <li><a href="https://remove.bg" target="_blank" rel="noopener noreferrer">Remove.bg - 在线抠图工具</a></li>
            <li><a href="https://tinypng.com" target="_blank" rel="noopener noreferrer">TinyPNG - 图片压缩工具</a></li>
          </ul>
        </div>
        
        <div className="tool-category">
          <h3 className="category-title">📊 办公助手</h3>
          <ul className="tool-list">
            <li><a href="https://docs.google.com" target="_blank" rel="noopener noreferrer">Google Docs - 在线文档编辑</a></li>
            <li><a href="https://www.canva.com" target="_blank" rel="noopener noreferrer">Canva - 在线设计平台</a></li>
            <li><a href="https://smallpdf.com" target="_blank" rel="noopener noreferrer">SmallPDF - PDF 工具集</a></li>
            <li><a href="https://translate.google.com" target="_blank" rel="noopener noreferrer">Google 翻译</a></li>
            <li><a href="https://www.grammarly.com" target="_blank" rel="noopener noreferrer">Grammarly - 英语语法检查</a></li>
          </ul>
        </div>
        
        <div className="tool-category">
          <h3 className="category-title">📚 学习资源</h3>
          <ul className="tool-list">
            <li><a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer">Coursera - 在线课程平台</a></li>
            <li><a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer">Khan Academy - 免费教育资源</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub - 代码托管平台</a></li>
            <li><a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">Stack Overflow - 编程问答社区</a></li>
            <li><a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">W3Schools - 网页技术教程</a></li>
          </ul>
        </div>
      </div>
      
      <section className="ad-section">
        <h3 className="ad-title">🎯 推荐服务</h3>
        <p>以下是我们精选的优质服务，助力您的项目成功</p>
        <div style={{ marginTop: '20px' }}>
          <div 
            id="webtraf_16929" 
            style={{
              width: '468px',
              height: '60px',
              margin: '0 auto'
            }}
          >
            <script src="https://webtrafic.ru/ads.php?uid=16929" async></script>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <h3>关于我们</h3>
        <p>ToolHub 致力于收集和分享最实用的免费在线工具。我们相信好的工具能够显著提升工作效率，让创意和生产力得到更好的释放。</p>
        <p style={{marginTop: '15px', color: '#888'}}>
          © 2024 ToolHub. 持续更新中，欢迎收藏本站。
        </p>
      </footer>
      
      {/* PopCash 广告代码 */}
      <script
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
    </div>
  );
}
