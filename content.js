// 监听页面中的文本内容，查找并屏蔽比分信息
function hideScores() {
  // 使用更精确的XPath表达式定位包含比分的元素
  const scorePattern = /\b\d+[:-]\d+\b/g;

  // 使用CSS选择器定位包含比分的元素
  const scoreElements = document.querySelectorAll('title, h1 span, div.name.actStyle, div.b-btn');
  scoreElements.forEach(element => {
    element.textContent = element.textContent.replace(scorePattern, 'XX:XX');
  });
}

// 在页面加载时运行一次
hideScores();

// 使用MutationObserver监听页面内容的变化
const observer = new MutationObserver(hideScores);

// 开始监听
observer.observe(document.body, {
  childList: true,
  subtree: true
});