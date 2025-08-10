// Typing animation
const typingText = document.getElementById("typing-text");
const text = "Xin chào, tôi là Nhựt - Lập trình viên & Nghiên cứu AI";
let index = 0;
function type() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 80);
  }
}
type();

// Dark/Light mode toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// GSAP Parallax effect
gsap.utils.toArray(".parallax-layer").forEach((layer, i) => {
  gsap.to(layer, {
    y: (i + 1) * 50,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      scrub: true
    }
  });
});

// Progress bars animation
const progressBars = document.querySelectorAll(".progress-bar div");
function showProgressBars() {
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
}
let skillsSection = document.getElementById("skills");
let skillsShown = false;
window.addEventListener("scroll", () => {
  let rect = skillsSection.getBoundingClientRect();
  if (!skillsShown && rect.top < window.innerHeight - 50) {
    showProgressBars();
    skillsShown = true;
  }
});

// GSAP Page transitions (fade-in)
gsap.from("section", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

// Hover 3D effect for project cards
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});
