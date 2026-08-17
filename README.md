# 🎓 毕业倒数网站 | Graduation Countdown

一个设计精美的毕业倒数计时器网站，采用清爽的青蓝渐变设计。

## ✨ 功能特性

- 🎨 清爽青蓝渐变背景设计
- ⏱️ 实时倒数显示（天、小时、分钟、秒）
- 📱 完全响应式设计，支持各种设备
- 🎯 动画效果，提升视觉体验
- 🌐 毛玻璃效果，现代感十足

## 🚀 使用方法

1. 克隆或下载项目文件
2. 用浏览器打开 `index.html` 文件
3. 即可看到实时的毕业倒数计时

## 📅 日期设置

当前倒数日期为 **2025年11月20日**

如需修改日期，编辑 `script.js` 中的这一行：
```javascript
const graduationDate = new Date('2025-11-20T00:00:00').getTime();
```

将日期改为你想要的日期即可。

## 🎨 自定义样式

### 修改渐变颜色
在 `style.css` 中找到 `.background` 部分，修改渐变色值：
```css
background: linear-gradient(135deg, #00d4d4 0%, #0099ff 50%, #0066cc 100%);
```

### 修改文本内容
在 `index.html` 中修改：
- 标题：`<h1 class="title">毕业倒数</h1>`
- 日期：`<p class="date">2025年 11月 20日</p>`
- 励志语：`<p>✨ 为梦想而努力，为青春而骄傲 ✨</p>`

## 💻 技术栈

- HTML5
- CSS3 (动画、渐变、毛玻璃效果)
- JavaScript (原生，无依赖)

## 📄 文件结构

```
graduation-countdown/
├── index.html      # 主页面
├── style.css       # 样式文件
├── script.js       # 脚本文件
└── README.md       # 说明文档
```

## 🌟 特色效果

- 数字脉搏动画
- 冒号闪烁效果
- 背景渐变呼吸动画
- 励志语淡入淡出动画
- 毛玻璃毛玻璃效果卡片

## 📱 浏览器兼容性

- Chrome/Edge ✅
- Firefox ✅
- Safari ✅
- 移动浏览器 ✅

## 🎊 祝福

加油，为梦想而努力！💪✨
