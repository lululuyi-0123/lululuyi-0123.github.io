# 个人作品集网页

一个简洁优雅的黑白风格个人作品集网站，包含个人简介、项目经历、平面视觉和摄影四大板块。

## 项目结构

```
个人网页/
├── index.html          # 首页
├── about.html          # 个人简介页面
├── projects.html       # 项目经历页面
├── design.html         # 平面视觉页面
├── photography.html    # 摄影页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能文件
├── README.md           # 说明文档
├── images/             # 图片文件夹
│   ├── about-photo.jpg              # 个人照片
│   ├── projects/                    # 项目截图文件夹
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   └── project-3.jpg
│   ├── design/                      # 平面设计作品文件夹
│   │   ├── design-1.jpg
│   │   ├── design-2.jpg
│   │   └── ...
│   └── photography/                 # 摄影作品文件夹
│       ├── photo-1.jpg
│       ├── photo-2.jpg
│       └── ...
└── videos/              # 视频文件夹（可选）
    └── video-1.mp4
```

## 需要添加的内容

### 1. 图片文件

#### 个人简介页面 (about.html)
- **位置**: `images/about-photo.jpg`
- **说明**: 你的个人照片
- **建议尺寸**: 800x1000px 或类似比例

#### 项目经历页面 (projects.html)
- **位置**: `images/projects/project-1.jpg`, `project-2.jpg`, `project-3.jpg` 等
- **说明**: 项目截图或展示图
- **建议尺寸**: 1200x800px 或类似比例
- **如何添加**: 在 `projects.html` 中复制 `project-card` 结构添加更多项目

#### 平面视觉页面 (design.html)
- **位置**: `images/design/design-1.jpg`, `design-2.jpg` 等
- **说明**: 平面设计作品
- **建议尺寸**: 1000x1000px（正方形）或根据作品比例
- **如何添加**: 在 `design.html` 中复制 `gallery-item` 结构添加更多作品

#### 摄影页面 (photography.html)
- **位置**: `images/photography/photo-1.jpg`, `photo-2.jpg` 等
- **说明**: 摄影作品
- **建议尺寸**: 1200x900px（4:3比例）或根据照片比例
- **如何添加**: 在 `photography.html` 中复制 `photo-item` 结构添加更多照片

### 2. 视频文件（可选）

#### 摄影页面 (photography.html)
- **位置**: `videos/video-1.mp4`
- **说明**: 视频作品（如果有）
- **格式**: MP4格式
- **如何添加**: 在 `photography.html` 中复制 `video-item` 结构添加更多视频

### 3. 文本内容编辑

#### 个人简介页面 (about.html)
- 编辑 "关于我" 部分
- 编辑 "教育背景" 部分
- 编辑 "技能专长" 列表
- 编辑 "联系方式" 信息

#### 项目经历页面 (projects.html)
- 编辑每个项目的标题 (`project-title`)
- 编辑项目日期 (`project-date`)
- 编辑项目描述 (`project-description`)
- 编辑技术标签 (`tag`)

#### 平面视觉页面 (design.html)
- 编辑作品标题 (`gallery-title`)
- 编辑作品年份 (`gallery-year`)
- 编辑搜索关键词 (`data-keywords` 属性)

#### 摄影页面 (photography.html)
- 编辑作品标题 (`photo-title`)
- 编辑拍摄地点 (`photo-location`)
- 编辑拍摄日期 (`photo-date`)
- 编辑搜索关键词 (`data-keywords` 属性)

## 在VSCode中部署和运行

### 方法一：使用Live Server扩展（推荐）

1. **安装Live Server扩展**
   - 在VSCode中，点击左侧扩展图标（或按 `Ctrl+Shift+X`）
   - 搜索 "Live Server"
   - 点击安装（作者：Ritwick Dey）

2. **启动服务器**
   - 右键点击 `index.html` 文件
   - 选择 "Open with Live Server"
   - 浏览器会自动打开网站（通常是 `http://127.0.0.1:5500`）

3. **停止服务器**
   - 点击VSCode底部状态栏的 "Go Live" 按钮
   - 或右键点击文件选择 "Stop Live Server"

### 方法二：使用Python内置服务器

1. **打开终端**
   - 在VSCode中按 `Ctrl+`` (反引号) 打开终端
   - 或点击菜单：终端 → 新建终端

2. **启动服务器**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # 或 Python 2
   python -m SimpleHTTPServer 8000
   ```

3. **访问网站**
   - 在浏览器中打开 `http://localhost:8000`

4. **停止服务器**
   - 在终端中按 `Ctrl+C`

### 方法三：使用Node.js的http-server

1. **安装http-server**（如果已安装Node.js）
   ```bash
   npm install -g http-server
   ```

2. **启动服务器**
   ```bash
   http-server -p 8000
   ```

3. **访问网站**
   - 在浏览器中打开 `http://localhost:8000`

## 功能说明

### 搜索功能
- 每个页面顶部都有搜索栏
- 支持按关键词搜索内容
- 实时过滤显示结果

### 滚动浏览
- 项目经历、平面视觉、摄影页面支持滚动浏览
- 自定义滚动条样式（黑色主题）

### 响应式设计
- 支持桌面、平板、手机等不同设备
- 自动适配屏幕尺寸

## 自定义修改

### 修改颜色
- 所有颜色定义在 `styles.css` 中
- 主要颜色：`#000000`（黑色）和 `#ffffff`（白色）
- 可以修改这些值来改变配色方案

### 添加新页面
1. 创建新的HTML文件
2. 复制现有页面的基本结构
3. 在导航栏中添加链接
4. 根据需要修改内容区域

### 修改字体
- 在 `styles.css` 的 `body` 样式中修改 `font-family`
- 可以添加Google Fonts等外部字体

## 浏览器兼容性

- Chrome（推荐）
- Firefox
- Safari
- Edge

## 注意事项

1. **图片路径**: 确保所有图片路径正确，图片文件放在对应的文件夹中
2. **文件命名**: 建议使用小写字母和连字符，避免空格和特殊字符
3. **图片大小**: 建议压缩图片以提升加载速度
4. **备份**: 修改前建议备份原始文件

## 技术支持

如有问题，请检查：
- 浏览器控制台是否有错误（按F12打开）
- 文件路径是否正确
- 图片文件是否存在
- 服务器是否正常运行

