# 马天跃 - 学术个人主页

<div align="center">
  <img src="profile.jpg" alt="马天跃" width="200" height="200" style="border-radius: 50%;">
  
  **马天跃**  
  *博士研究生, 测绘科学与技术*  
  *中国矿业大学（北京）*
</div>

## 📖 项目简介

这是一个现代化的学术个人主页，专为博士生和研究人员设计，采用 Next.js 14 + TypeScript + Tailwind CSS 构建。网站具有响应式设计，支持中英文双语切换，展示学术成果、研究经历、教育背景等信息。

## ✨ 主要特性

- 🎨 **现代化设计** - 简洁优雅的界面设计
- 🌐 **双语支持** - 中英文一键切换
- 📱 **响应式布局** - 完美适配各种设备
- 🎯 **科技感元素** - 研究方向卡片化展示
- 📅 **时间线展示** - 教育背景时间轴设计
- 📊 **折叠式列表** - 科研成果智能折叠
- 🚀 **快速部署** - 支持 Vercel 一键部署

## 🛠️ 技术栈

- **前端框架**: Next.js 14
- **开发语言**: TypeScript
- **样式框架**: Tailwind CSS
- **图标系统**: 自定义 SVG 图标
- **部署平台**: Vercel
- **版本控制**: Git + GitHub

## 📁 项目结构

```
academic-personal-homepage/
├── components/          # React 组件
│   ├── Header.tsx      # 头部组件
│   ├── Section.tsx     # 章节组件
│   ├── ProjectItem.tsx # 项目展示组件
│   ├── PublicationItem.tsx # 论文展示组件
│   └── FoldableList.tsx # 折叠列表组件
├── pages/              # 页面文件
│   ├── index.tsx       # 主页
│   ├── _app.tsx        # 应用入口
│   └── _document.tsx   # 文档配置
├── styles/             # 样式文件
│   └── globals.css     # 全局样式
├── constants.tsx       # 数据常量
├── types.ts           # TypeScript 类型定义
└── profile.jpg        # 个人头像
```

## 🚀 快速开始

### 环境要求

- Node.js 18.0+ 
- npm 或 yarn

### 安装和运行

1. **克隆项目**
   ```bash
   git clone https://github.com/mty0716/academic-personal-homepage.git
   cd academic-personal-homepage
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问网站**
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建和部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 预览构建结果
npm run preview
```

## 🌐 在线部署

### Vercel 部署（推荐）

1. 访问 [Vercel](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "New Project"
4. 选择您的 GitHub 仓库
5. 点击 "Deploy"

### 其他部署平台

- **Netlify**: 支持静态网站部署
- **GitHub Pages**: 免费的静态网站托管
- **阿里云/腾讯云**: 国内云服务商部署

## 📝 自定义配置

### 个人信息修改

编辑 `constants.tsx` 文件中的 `CONTENT` 对象：

```typescript
export const CONTENT = {
  zh: {
    personalInfo: {
      name: "您的姓名",
      title: "您的职位",
      affiliation: "您的机构",
      email: "您的邮箱",
      imageUrl: "/profile.jpg"
    },
    // ... 其他配置
  }
}
```

### 添加新的研究内容

1. **添加研究方向**: 修改 `researchInterests.list` 数组
2. **添加论文**: 修改 `PUBLICATIONS_DATA` 对象
3. **添加项目**: 修改 `PROJECTS_DATA` 对象
4. **添加教育经历**: 修改 `education.list` 数组

### 样式定制

- 修改 `tailwind.config.js` 配置主题色彩
- 编辑 `styles/globals.css` 添加自定义样式
- 在组件中使用 Tailwind CSS 类名

## 📊 页面结构

- **关于我** - 个人简介和研究兴趣
- **研究方向** - 科技感卡片展示
- **教育背景** - 时间线设计
- **科研成果** - 论文、专利、软件著作权
- **科研项目** - 纵向和横向项目
- **实习经历** - 工作经历展示

## 🔧 开发指南

### 添加新组件

1. 在 `components/` 目录下创建新的 `.tsx` 文件
2. 使用 TypeScript 定义组件类型
3. 在 `types.ts` 中定义相关类型
4. 在主页面中导入并使用

### 数据管理

- 所有静态数据存储在 `constants.tsx` 中
- 支持中英文双语数据结构
- 类型安全的 TypeScript 定义

### 样式开发

- 使用 Tailwind CSS 进行样式开发
- 响应式设计优先
- 保持设计一致性

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👥 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

- **邮箱**: tianyue.ma@example.com
- **GitHub**: [@mty0716](https://github.com/mty0716)
- **个人主页**: [在线预览](https://your-vercel-app.vercel.app)

---

<div align="center">
  <p>⭐ 如果这个项目对您有帮助，请给个 Star！</p>
  <p>Made with ❤️ by 马天跃</p>
</div>