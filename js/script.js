document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. HIỆU ỨNG FADE-IN KHI CUỘN TRANG ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    elementsToFadeIn.forEach(el => {
        observer.observe(el);
    });

    // --- 2. HIỆU ỨNG GÕ CHỮ (TYPED.JS) ---
    if (document.getElementById('typing-target')) {
        new Typed('#typing-target', {
            strings: ['Lập trình viên Android.', 'AI Enthusiast.', 'UI/UX Designer.'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            startDelay: 500,
            backDelay: 1500,
        });
    }

    // --- 3. CHẾ ĐỘ SÁNG/TỐI (LIGHT/DARK MODE) ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;
    const moonIcon = '<i class="fas fa-moon"></i>';
    const sunIcon = '<i class="fas fa-sun"></i>';

    // Kiểm tra theme đã lưu trong localStorage khi tải trang
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeSwitcher.innerHTML = sunIcon;
        } else {
            themeSwitcher.innerHTML = moonIcon;
        }
    }

    // Xử lý sự kiện click vào nút chuyển đổi
    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Lưu lựa chọn vào localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            themeSwitcher.innerHTML = sunIcon;
        } else {
            localStorage.removeItem('theme'); // hoặc setItem('theme', 'light-mode')
            themeSwitcher.innerHTML = moonIcon;
        }
    });

});
