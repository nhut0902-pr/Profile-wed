/* script.js
   Chứa: Typing animation, progress bars, project filter, parallax mouse, GSAP reveal, theme toggle, Formspree simple handling
*/

// Wait DOM
document.addEventListener('DOMContentLoaded', function() {

  /* ========== Typing animation ========== */
  (function typing() {
    const phrases = [
      "Phát triển web • Ứng dụng Android • AI enthusiast",
      "Thiết kế UI/UX tinh gọn",
      "Tập trung vào hiệu năng và trải nghiệm người dùng"
    ];
    const el = document.getElementById('typing');
    let pi = 0, ci = 0, forward = true;

    function tick() {
      const full = phrases[pi];
      if (forward) {
        ci++;
        el.textContent = full.slice(0, ci);
        if (ci === full.length) { forward = false; setTimeout(tick, 1000); return; }
      } else {
        ci--;
        el.textContent = full.slice(0, ci);
        if (ci === 0) { forward = true; pi = (pi + 1) % phrases.length; }
      }
      setTimeout(tick, forward ? 60 : 24);
    }
    tick();
  })();

  /* ========== Progress bars animate on scroll ========== */
  (function progressBars() {
    const bars = document.querySelectorAll('.progress');
    if (!bars.length) return;
    // animate when in view (simple)
    function animate() {
      bars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          const v = parseInt(bar.getAttribute('data-value') || 70, 10);
          const inner = bar.querySelector('i');
          if (inner) inner.style.width = v + '%';
        }
      });
    }
    animate();
    window.addEventListener('scroll', animate);
    window.addEventListener('resize', animate);
  })();

  /* ========== Project filters ========== */
  (function projectFilter() {
    const grid = document.getElementById('projectsGrid');
    const filters = document.getElementById('filters');
    if (!grid || !filters) return;
    filters.addEventListener('click', e => {
      const btn = e.target.closest('.filter');
      if (!btn) return;
      filters.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.getAttribute('data-filter');
      grid.querySelectorAll('.project').forEach(p => {
        if (f === 'all' || p.dataset.type === f) p.style.display = 'block';
        else p.style.display = 'none';
      });
    });
  })();

  /* ========== Simple parallax (mouse move) ========== */
  (function parallaxMouse() {
    const root = document.getElementById('bg-root');
    if (!root) return;
    const layers = root.querySelectorAll('.bg-layer[data-speed]');
    root.addEventListener('mousemove', e => {
      const w = root.clientWidth, h = root.clientHeight;
      const x = (e.clientX / w) - 0.5;
      const y = (e.clientY / h) - 0.5;
      layers.forEach(l => {
        const s = parseFloat(l.getAttribute('data-speed')) || 0.2;
        const tx = -x * s * 40;
        const ty = -y * s * 30;
        l.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
    });
    // subtle motion on mobile via device orientation (if available)
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', ev => {
        const x = ev.gamma ? ev.gamma / 90 : 0; // -1..1
        const y = ev.beta ? ev.beta / 180 : 0; // -1..1
        layers.forEach(l => {
          const s = parseFloat(l.getAttribute('data-speed')) || 0.2;
          const tx = x * s * 40;
          const ty = y * s * 30;
          l.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        });
      }, true);
    }
  })();

  /* ========== GSAP reveal animations ========== */
  (function gsapReveal() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.utils.toArray('.card').forEach(el => {
      gsap.from(el, {
        y: 20, opacity: 0, duration: 0.8,
        scrollTrigger: { trigger: el, start: 'top 92%' }
      });
    });
  })();

  /* ========== Theme toggle (dark/light) ========== */
  (function themeToggle() {
    const btn = document.getElementById('themeToggle');
    const root = document.documentElement;
    function setTheme(t) {
      if (t === 'light') root.setAttribute('data-theme', 'light');
      else root.removeAttribute('data-theme');
      localStorage.setItem('theme', t === 'light' ? 'light' : 'dark');
    }
    const saved = localStorage.getItem('theme');
    if (saved === 'light') setTheme('light');

    if (btn) btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      setTheme(cur === 'light' ? 'dark' : 'light');
    });
  })();

  /* ========== Simple form handling (Formspree) ========== */
  (function formHandler() {
    const form = document.getElementById('contactForm');
    const msgEl = document.getElementById('formMsg');
    if (!form) return;
    form.addEventListener('submit', (ev) => {
      // Let HTML handle submit to Formspree; here we provide UX messaging if needed.
      msgEl.textContent = 'Đang gửi...';
      // After submit, Formspree will redirect or show response — we can also handle via fetch if wanted.
      // For now just show message; if you prefer AJAX submission, we can change to fetch() POST to Formspree.
      setTimeout(() => {
        msgEl.textContent = 'Nếu trang không chuyển, kiểm tra email của bạn hoặc liên hệ trực tiếp.';
      }, 1200);
    });
  })();

  /* Accessibility: keyboard hover-like effect for project cards */
  (function keyboardProjectHover() {
    document.querySelectorAll('.project').forEach(p => {
      p.addEventListener('focus', () => p.classList.add('focused'));
      p.addEventListener('blur', () => p.classList.remove('focused'));
    });
  })();

});
