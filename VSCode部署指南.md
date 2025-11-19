# VSCode 部署指南

本指南将帮助你在VSCode中运行和预览你的个人网页。

## 🚀 方法一：使用 Live Server 扩展（最简单，推荐）

### 步骤 1：安装 Live Server 扩展

1. 打开 VSCode
2. 点击左侧边栏的 **扩展** 图标（或按快捷键 `Ctrl+Shift+X`）
3. 在搜索框中输入 **"Live Server"**
4. 找到由 **Ritwick Dey** 开发的 Live Server 扩展
5. 点击 **安装** 按钮

### 步骤 2：启动服务器

**方法 A：右键菜单**
1. 在 VSCode 文件资源管理器中，找到 `index.html` 文件
2. 右键点击 `index.html`
3. 选择 **"Open with Live Server"**

**方法 B：状态栏**
1. 打开 `index.html` 文件
2. 查看 VSCode 底部状态栏
3. 点击 **"Go Live"** 按钮

### 步骤 3：查看网站

- 浏览器会自动打开网站
- 默认地址通常是：`http://127.0.0.1:5500` 或 `http://localhost:5500`
- 如果浏览器没有自动打开，手动在浏览器中输入上述地址

### 步骤 4：停止服务器

- 点击 VSCode 底部状态栏的 **"Port: 5500"** 或 **"Go Live"** 按钮
- 或右键点击 `index.html`，选择 **"Stop Live Server"**

### Live Server 的优势

✅ 自动刷新：修改文件后，浏览器自动刷新  
✅ 实时预览：所见即所得  
✅ 简单易用：一键启动  
✅ 支持多设备：可以在同一网络的其他设备上访问

---

## 🐍 方法二：使用 Python 内置服务器

### 前提条件

确保你的电脑已安装 Python（Python 2.7+ 或 Python 3.x）

### 步骤 1：打开终端

在 VSCode 中：
- 按快捷键 `Ctrl+`` (反引号，通常在键盘左上角)
- 或点击菜单：**终端** → **新建终端**
- 或点击顶部菜单：**终端** → **新建终端**

### 步骤 2：启动服务器

**Python 3（推荐）:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

### 步骤 3：访问网站

1. 打开浏览器
2. 输入地址：`http://localhost:8000`
3. 或输入：`http://127.0.0.1:8000`

### 步骤 4：停止服务器

在终端中按 `Ctrl+C`

---

## 📦 方法三：使用 Node.js 的 http-server

### 前提条件

确保你的电脑已安装 Node.js

### 步骤 1：安装 http-server

在 VSCode 终端中运行：

```bash
npm install -g http-server
```

**注意**: 如果遇到权限问题，可能需要使用管理员权限运行

### 步骤 2：启动服务器

在项目根目录（包含 `index.html` 的文件夹）运行：

```bash
http-server -p 8000
```

### 步骤 3：访问网站

在浏览器中打开：`http://localhost:8000`

### 步骤 4：停止服务器

在终端中按 `Ctrl+C`

---

## 🔧 常见问题解决

### 问题 1：Live Server 无法启动

**解决方案**:
- 检查端口是否被占用（尝试更改端口）
- 重启 VSCode
- 重新安装 Live Server 扩展

### 问题 2：图片无法显示

**解决方案**:
- 检查图片路径是否正确
- 确认图片文件是否存在于指定文件夹
- 检查文件名大小写是否匹配（建议使用小写）
- 查看浏览器控制台（按 F12）查看错误信息

### 问题 3：页面样式错乱

**解决方案**:
- 确认 `styles.css` 文件在同一目录
- 检查 HTML 文件中的 CSS 链接路径是否正确
- 清除浏览器缓存（按 `Ctrl+F5` 强制刷新）

### 问题 4：搜索功能不工作

**解决方案**:
- 确认 `script.js` 文件在同一目录
- 检查 HTML 文件中的 JavaScript 链接路径是否正确
- 查看浏览器控制台（按 F12）查看是否有 JavaScript 错误

### 问题 5：端口被占用

**解决方案**:
- 关闭占用端口的其他程序
- 或使用不同的端口号（如 8001, 8080 等）

---

## 📱 在移动设备上预览

### 使用 Live Server

1. 确保电脑和手机连接在同一 Wi-Fi 网络
2. 启动 Live Server
3. 查看 VSCode 终端或状态栏显示的 IP 地址（如 `192.168.1.100:5500`）
4. 在手机浏览器中输入该 IP 地址

### 使用 Python/Node.js 服务器

1. 查找你的电脑 IP 地址：
   - Windows: 在命令提示符运行 `ipconfig`，查找 IPv4 地址
   - Mac/Linux: 在终端运行 `ifconfig` 或 `ip addr`
2. 启动服务器时，使用 `0.0.0.0` 作为主机：
   ```bash
   python -m http.server 8000 --bind 0.0.0.0
   ```
3. 在手机浏览器中输入：`http://你的IP地址:8000`

---

## 🎯 推荐工作流程

1. **开发阶段**: 使用 Live Server，享受自动刷新功能
2. **测试阶段**: 在不同浏览器和设备上测试
3. **部署阶段**: 将文件上传到服务器或使用 GitHub Pages

---

## 📚 相关资源

- [Live Server 扩展文档](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [VSCode 官方文档](https://code.visualstudio.com/docs)
- [GitHub Pages 部署指南](https://pages.github.com/)

---

## ✅ 部署检查清单

在部署到生产环境前，请确认：

- [ ] 所有图片已添加并正确显示
- [ ] 所有文本内容已填写完整
- [ ] 所有链接正常工作
- [ ] 搜索功能正常
- [ ] 在不同浏览器中测试正常
- [ ] 在移动设备上测试正常
- [ ] 页面加载速度可接受
- [ ] 没有控制台错误（按 F12 检查）

---

祝你部署顺利！如有问题，请参考 README.md 或检查浏览器控制台的错误信息。

