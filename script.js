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

type(); // Bắt đầu hiệu ứng

// 2. Chế độ sáng/tối
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});

// 3. Danh sách 10 công cụ AI
const tools = [
  { name: "ChatGPT", desc: "Trợ lý AI đa năng của OpenAI." },
  { name: "Gemini", desc: "AI đa mô hình từ Google." },
  { name: "Claude", desc: "AI an toàn, logic từ Anthropic." },
  { name: "DALL-E 3", desc: "Tạo ảnh từ mô tả văn bản." },
  { name: "Midjourney", desc: "Tạo ảnh nghệ thuật chất lượng cao." },
  { name: "Stable Diffusion", desc: "Mô hình AI mở tạo hình ảnh." },
  { name: "Perplexity", desc: "Tìm kiếm thông minh với AI." },
  { name: "Notion AI", desc: "Hỗ trợ viết, ghi chú, quản lý công việc." },
  { name: "GitHub Copilot", desc: "Trợ lý lập trình AI." },
  { name: "Runway ML", desc: "AI cho video, âm thanh, sáng tạo." }
];

const toolList = document.getElementById('tool-list');

tools.forEach(tool => {
  const card = document.createElement('div');
  card.className = 'tool-card';
  card.innerHTML = `
    <h3><i class="fa-solid fa-robot"></i> ${tool.name}</h3>
    <p>${tool.desc}</p>
  `;
  toolList.appendChild(card);
});

// 4. Xử lý form đăng ký
const signupForm = document.getElementById('signup-form');
const signupMessage = document.getElementById('signup-message');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  signupMessage.style.display = 'block';
  signupForm.reset();
  setTimeout(() => {
    signupMessage.style.display = 'none';
  }, 3000);
});
