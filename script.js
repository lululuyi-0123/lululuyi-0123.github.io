// 搜索功能
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            // 根据当前页面执行不同的搜索
            if (window.location.pathname.includes('projects.html')) {
                searchProjects(searchTerm);
            } else if (window.location.pathname.includes('design.html')) {
                searchDesign(searchTerm);
            } else if (window.location.pathname.includes('photography.html')) {
                searchPhotography(searchTerm);
            } else if (window.location.pathname.includes('about.html')) {
                searchAbout(searchTerm);
            } else {
                // 首页搜索 - 搜索所有板块
                searchHome(searchTerm);
            }
        });
    }

    // 平滑滚动
    initSmoothScroll();
    
    // 初始化占位符显示
    initPlaceholders();
});

// 项目搜索（瀑布流）
function searchProjects(searchTerm) {
    const projectItems = document.querySelectorAll('.project-item, .masonry-item.project-item');
    
    projectItems.forEach(item => {
        const keywords = item.getAttribute('data-keywords') || '';
        const title = item.querySelector('.masonry-title')?.textContent || '';
        const subtitle = item.querySelector('.masonry-subtitle')?.textContent || '';
        
        const searchableText = (keywords + ' ' + title + ' ' + subtitle).toLowerCase();
        
        if (searchableText.includes(searchTerm) || searchTerm === '') {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// 设计作品搜索（瀑布流）
function searchDesign(searchTerm) {
    const designItems = document.querySelectorAll('.design-item, .masonry-item.design-item');
    
    designItems.forEach(item => {
        const keywords = item.getAttribute('data-keywords') || '';
        const title = item.querySelector('.masonry-title')?.textContent || '';
        const subtitle = item.querySelector('.masonry-subtitle')?.textContent || '';
        
        const searchableText = (keywords + ' ' + title + ' ' + subtitle).toLowerCase();
        
        if (searchableText.includes(searchTerm) || searchTerm === '') {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// 摄影作品搜索（瀑布流）
function searchPhotography(searchTerm) {
    const photoItems = document.querySelectorAll('.photo-item, .masonry-item.photo-item');
    
    photoItems.forEach(item => {
        const keywords = item.getAttribute('data-keywords') || '';
        const title = item.querySelector('.masonry-title')?.textContent || '';
        const subtitle = item.querySelector('.masonry-subtitle')?.textContent || '';
        
        const searchableText = (keywords + ' ' + title + ' ' + subtitle).toLowerCase();
        
        if (searchableText.includes(searchTerm) || searchTerm === '') {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// 个人简介搜索
function searchAbout(searchTerm) {
    const aboutSection = document.querySelector('.about-section');
    if (!aboutSection) return;
    
    const allText = aboutSection.textContent.toLowerCase();
    
    if (allText.includes(searchTerm) || searchTerm === '') {
        aboutSection.classList.remove('hidden');
    } else {
        aboutSection.classList.add('hidden');
    }
}

// 首页搜索
function searchHome(searchTerm) {
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        const title = item.querySelector('.grid-title')?.textContent || '';
        const subtitle = item.querySelector('.grid-subtitle')?.textContent || '';
        
        const searchableText = (title + ' ' + subtitle).toLowerCase();
        
        if (searchableText.includes(searchTerm) || searchTerm === '') {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// 平滑滚动初始化
function initSmoothScroll() {
    // 为所有内部链接添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 初始化占位符显示
function initPlaceholders() {
    // 检查所有图片，如果加载失败则显示占位符
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = this.nextElementSibling;
            if (placeholder && placeholder.classList.contains('placeholder-box')) {
                placeholder.style.display = 'flex';
            }
        });
    });
}

// 图片懒加载（可选，提升性能）
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

