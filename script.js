// 1. Hiệu ứng gõ chữ
const typingText = document.getElementById('typing-text');
const phrases = ['Nhutcoder', 'Developer', 'AI Lover', 'Tech Blogger'];
let phraseIndex = 0;
let charIndex = 0;

function type() {
  const currentPhrase = phrases[phraseIndex];
  if (charIndex < currentPhrase.length) {
    typingText.textContent += currentPhrase[charIndex];
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = typingText.textContent.slice(0, -1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

type();

// 2. Chế độ sáng/tối (đã sửa lỗi)
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Kiểm tra chế độ đã lưu
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
  }
});

// 3. Danh sách AI Tools có link
const tools = [
  { name: "ChatGPT", desc: "Trợ lý AI đa năng của OpenAI.", link: "https://chat.openai.com" },
  { name: "Gemini", desc: "AI đa mô hình từ Google.", link: "https://gemini.google.com" },
  { name: "Claude", desc: "AI an toàn, logic từ Anthropic.", link: "https://claude.ai" },
  { name: "DALL-E 3", desc: "Tạo ảnh từ mô tả văn bản.", link: "https://openai.com/dall-e" },
  { name: "Midjourney", desc: "Tạo ảnh nghệ thuật chất lượng cao.", link: "https://www.midjourney.com" },
  { name: "Stable Diffusion", desc: "Mô hình AI mở tạo hình ảnh.", link: "https://stability.ai" },
  { name: "Perplexity", desc: "Tìm kiếm thông minh với AI.", link: "https://perplexity.ai" },
  { name: "Notion AI", desc: "Hỗ trợ viết, ghi chú, quản lý công việc.", link: "https://www.notion.so" },
  { name: "GitHub Copilot", desc: "Trợ lý lập trình AI.", link: "https://github.com/features/copilot" },
  { name: "Runway ML", desc: "AI cho video, âm thanh, sáng tạo.", link: "https://runwayml.com" }
];

const toolList = document.getElementById('tool-list');

tools.forEach(tool => {
  const card = document.createElement('div');
  card.className = 'tool-card';
  card.innerHTML = `
    <a href="${tool.link}" target="_blank" style="color: inherit; text-decoration: none;">
      <h3><i class="fa-solid fa-robot"></i> ${tool.name}</h3>
      <p>${tool.desc}</p>
    </a>
  `;
  toolList.appendChild(card);
});

// 4. Form đăng ký - Hiển thị thông báo
const signupForm = document.getElementById('signup-form');
const signupMessage = document.getElementById('signup-message');

signupForm.addEventListener('submit', (e) => {
  // Không ngăn chặn nếu dùng Formspree (để gửi)
  signupMessage.style.display = 'block';
  setTimeout(() => {
    signupMessage.style.display = 'none';
  }, 3000);
});
