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

// 2. Chế độ sáng/tối
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
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

// 4. Blog / Tin tức AI
const blogPosts = [
  { title: "Hướng dẫn dùng ChatGPT hiệu quả", date: "10/04/2025", desc: "5 mẹo giúp bạn khai thác tối đa sức mạnh của ChatGPT." },
  { title: "Gemini vs GPT-4: Ai mạnh hơn?", date: "05/04/2025", desc: "So sánh chi tiết hiệu suất, tốc độ và độ chính xác." },
  { title: "Mẹo lập trình nhanh với GitHub Copilot", date: "01/04/2025", desc: "Tăng tốc code với trợ lý AI ngay trong VS Code." }
];

const blogList = document.getElementById('blog-list');
blogPosts.forEach(post => {
  const item = document.createElement('div');
  item.className = 'blog-post';
  item.innerHTML = `
    <h3>${post.title}</h3>
    <span class="date">${post.date}</span>
    <p>${post.desc}</p>
  `;
  blogList.appendChild(item);
});

// 5. Modal cảm ơn
const modal = document.getElementById('thank-you-modal');
const closeBtn = document.querySelector('.close');
const closeModalBtn = document.getElementById('close-modal');
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function(e) {
  // Không ngăn submit form (để Formspree xử lý)
  setTimeout(() => {
    modal.style.display = 'block';
  }, 1000); // Chờ 1s để đảm bảo gửi thành công
});

closeBtn.onclick = () => modal.style.display = 'none';
closeModalBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};

// 6. Easter Egg: Nhấn 5 lần vào avatar
const avatar = document.getElementById('avatar');
let clickCount = 0;

avatar.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 5) {
    alert("🎉 Chúc mừng! Bạn đã tìm thấy Easter Egg bí mật! Cảm ơn bạn đã khám phá trang web của tôi!");
    clickCount = 0;
  }
});

// 7. Thống kê lượt tải (giả lập - bạn có thể thay bằng API GitHub sau)
const downloadCount = document.getElementById('download-count');
let count = 0;
const target = 1234; // Số lượt tải thực tế

const counter = setInterval(() => {
  if (count < target) {
    count++;
    downloadCount.textContent = count.toLocaleString();
  } else {
    clearInterval(counter);
  }
}, 3);

// Đếm người đăng ký (giả lập)
const subscriberCount = document.getElementById('subscriber-count');
let subCount = 0;
const subTarget = 567;

const subCounter = setInterval(() => {
  if (subCount < subTarget) {
    subCount++;
    subscriberCount.textContent = subCount.toLocaleString();
  } else {
    clearInterval(subCounter);
  }
}, 10);
