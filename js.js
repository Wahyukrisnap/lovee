document.addEventListener("DOMContentLoaded", function () {
  createFloatingHearts();
});

function createFloatingHearts() {
  const container = document.getElementById("floating-hearts");
  const heartSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.innerHTML = heartSVG;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${10 + Math.random() * 5}s`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(heart);
  }
}

function showLoveImage() {
  const heartWrapper = document.querySelector(".heart-wrapper");
  const sparklesWrapper = document.querySelector(".sparkles-wrapper");
  const loveImageContainer = document.getElementById("love-image-container");
  const loveMessage = document.getElementById("love-message");
  const container = document.querySelector(".anniversary-container");

  heartWrapper.classList.add("heart-animation");
  sparklesWrapper.classList.add("sparkles-animation");

  // Create love emojis
  for (let i = 0; i < 10; i++) {
    const loveEmoji = document.createElement("span");
    loveEmoji.textContent = "❤️"; // Love emoji
    loveEmoji.style.position = "absolute";
    loveEmoji.style.left = `${Math.random() * 100}%`;
    loveEmoji.style.top = `${Math.random() * 100 + 50}%`; // Adjust to appear above the button

    loveEmoji.style.fontSize = "24px";
    loveEmoji.style.pointerEvents = "none"; // Prevent interaction
    container.appendChild(loveEmoji);

    // Animate the emoji
    setTimeout(() => {
      loveEmoji.style.transform = `translateY(-100px)`;
      loveEmoji.style.transition = "transform 1s ease-in";
    }, 100);
  }

  setTimeout(() => {
    heartWrapper.classList.remove("heart-animation");
    sparklesWrapper.classList.remove("sparkles-animation");
    loveImageContainer.classList.remove("hidden");
    loveMessage.classList.remove("hidden"); // Show the love message
    setTimeout(() => {
      loveImageContainer.classList.add("visible");
    }, 50);
  }, 1000);

  loveImageContainer.addEventListener("click", hideLoveImage);
}

function hideLoveImage() {
  const loveImageContainer = document.getElementById("love-image-container");
  const loveMessage = document.getElementById("love-message");
  loveImageContainer.classList.remove("visible");
  loveMessage.classList.add("hidden"); // Hide the love message
  setTimeout(() => {
    loveImageContainer.classList.add("hidden");
  }, 500);
}
