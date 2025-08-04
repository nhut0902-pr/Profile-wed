// Typing Effect
const typingText = document.getElementById('typing-text');
const textArray = ['Nhutcoder', 'Developer', 'AI Enthusiast'];
let currentTextIndex = 0;
let charIndex = 0;

function typeText() {
  const currentText = textArray[currentTextIndex];
  if (charIndex < currentText.length) {
    typingText.textContent += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100); // Speed of typing
  } else {
    setTimeout(eraseText, 1000); // Wait before erasing
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingText.textContent = typingText.textContent.slice(0, -1);
    charIndex--;
    setTimeout(eraseText, 50); // Speed of erasing
  } else {
    currentTextIndex = (currentTextIndex + 1) % textArray.length;
    charIndex = 0;
    setTimeout(typeText, 500); // Wait before typing next text
  }
}

typeText();

// Dark Mode Switch
const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
const body = document.body;

darkModeCheckbox.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});
