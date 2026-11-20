/* ==========================================
   PRINCESS BIRTHDAY WEBSITE
   Princess Name: Ri Ka
   JavaScript
========================================== */

/* ==========================================
   1. GET HTML ELEMENTS
========================================== */

const welcomeScreen = document.getElementById("welcomeScreen");
const enterButton = document.getElementById("enterButton");

const mainContent = document.getElementById("mainContent");

const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

const wishButton = document.getElementById("wishButton");
const wishMessage = document.getElementById("wishMessage");
const candleFlame = document.getElementById("candleFlame");

const envelope = document.getElementById("envelope");
const letterButton = document.getElementById("letterButton");

const giftBox = document.getElementById("giftBox");
const giftButton = document.getElementById("giftButton");
const giftMessage = document.getElementById("giftMessage");

/* ==========================================
   2. WEBSITE SETTINGS
========================================== */

const PRINCESS_NAME = "Ri Ka";

const BIRTHDAY_DATE = new Date(2026, 10, 12);

let musicPlaying = false;
let wishMade = false;
let letterOpened = false;
let giftOpened = false;

/* ==========================================
   3. ENTER WEBSITE
========================================== */

if (enterButton) {
  enterButton.addEventListener("click", async function () {
    // Hide Welcome Screen
    welcomeScreen.classList.add("hide");

    // Show Main Website
    mainContent.classList.add("show");

    // Play Background Music
    if (backgroundMusic) {
      try {
        await backgroundMusic.play();

        musicPlaying = true;

        updateMusicButton();
      } catch (error) {
        console.log("Music could not start:", error);

        musicPlaying = false;

        updateMusicButton();
      }
    }

    // Start Website Animations
    createFloatingParticles();

    // Start Birthday Confetti
    createConfetti();
  });
}

/* ==========================================
   4. BACKGROUND MUSIC
========================================== */

function updateMusicButton() {
  if (!musicButton) return;

  if (musicPlaying) {
    musicButton.innerHTML = "🔊 Music ON";
  } else {
    musicButton.innerHTML = "🔇 Music OFF";
  }
}

if (musicButton && backgroundMusic) {
  musicButton.addEventListener("click", async function () {
    if (musicPlaying) {
      backgroundMusic.pause();

      musicPlaying = false;
    } else {
      try {
        await backgroundMusic.play();

        musicPlaying = true;
      } catch (error) {
        console.log("Unable to play music:", error);

        musicPlaying = false;
      }
    }

    updateMusicButton();
  });
}

if (backgroundMusic) {
  backgroundMusic.addEventListener("ended", function () {
    musicPlaying = false;

    updateMusicButton();
  });
}

/* ==========================================
   5. FLOATING PARTICLES
========================================== */

function createFloatingParticles() {
  const particles = ["💗", "💕", "✨", "🌸", "⭐", "💖"];

  setInterval(function () {
    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.innerHTML =
      particles[Math.floor(Math.random() * particles.length)];

    // Random horizontal position
    particle.style.left = Math.random() * 100 + "vw";

    // Random animation duration
    const duration = Math.random() * 5 + 5;

    particle.style.animationDuration = duration + "s";

    // Random size
    particle.style.fontSize = Math.random() * 15 + 15 + "px";

    document.body.appendChild(particle);

    // Remove after animation
    setTimeout(function () {
      particle.remove();
    }, duration * 1000);
  }, 500);
}

/* ==========================================
   6. BIRTHDAY CONFETTI
========================================== */

function createConfetti() {
  const confettiItems = ["🎉", "✨", "💗", "🌸", "⭐", "🎊"];

  for (let i = 0; i < 35; i++) {
    setTimeout(function () {
      const confetti = document.createElement("div");

      confetti.classList.add("confetti");

      confetti.innerHTML =
        confettiItems[Math.floor(Math.random() * confettiItems.length)];

      confetti.style.left = Math.random() * 100 + "vw";

      confetti.style.fontSize = Math.random() * 15 + 15 + "px";

      confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

      document.body.appendChild(confetti);

      setTimeout(function () {
        confetti.remove();
      }, 4500);
    }, i * 100);
  }
}

/* ==========================================
   7. BIRTHDAY CAKE - MAKE A WISH
========================================== */

if (wishButton) {
  wishButton.addEventListener("click", function () {
    if (wishMade) {
      wishMessage.innerHTML = "សូមឱ្យបំណងប្រាថ្នារបស់អ្នកក្លាយជាការពិត 💗";

      return;
    }

    wishMade = true;

    // Turn off candle flame
    if (candleFlame) {
      candleFlame.classList.add("off");
    }

    // Update Message
    wishMessage.innerHTML =
      "🎉 Happy Birthday " +
      PRINCESS_NAME +
      "! សូមឱ្យបំណងប្រាថ្នាទាំងអស់ក្លាយជាការពិត! 💖";

    // Change Button
    wishButton.innerHTML = "Wish Completed 💗";

    // Birthday Celebration
    createConfetti();
  });
}

/* ==========================================
   8. OPEN / CLOSE BIRTHDAY LETTER
========================================== */

if (letterButton && envelope) {
  letterButton.addEventListener("click", function () {
    letterOpened = !letterOpened;

    if (letterOpened) {
      envelope.classList.add("open");

      letterButton.innerHTML = "Close Your Letter 💌";
    } else {
      envelope.classList.remove("open");

      letterButton.innerHTML = "Open Your Letter 💌";
    }
  });
}

/* ==========================================
   9. CLICK ENVELOPE TO OPEN LETTER
========================================== */

if (envelope) {
  envelope.addEventListener("click", function () {
    letterOpened = !letterOpened;

    if (letterOpened) {
      envelope.classList.add("open");

      if (letterButton) {
        letterButton.innerHTML = "Close Your Letter 💌";
      }
    } else {
      envelope.classList.remove("open");

      if (letterButton) {
        letterButton.innerHTML = "Open Your Letter 💌";
      }
    }
  });
}

/* ==========================================
   10. OPEN BIRTHDAY GIFT
========================================== */

if (giftButton && giftBox) {
  giftButton.addEventListener("click", function () {
    if (giftOpened) {
      giftMessage.innerHTML = "💗 សូមឱ្យអ្នកមានសេចក្តីសុខជានិច្ច!";

      return;
    }

    giftOpened = true;

    // Open Gift Animation
    giftBox.classList.add("open");

    // Update Button
    giftButton.innerHTML = "Gift Opened 💝";

    // Display Gift Message
    giftMessage.innerHTML =
      "🎁 Surprise! សូមជូនពរឱ្យ Princess " +
      PRINCESS_NAME +
      " មានសុភមង្គល សំណាងល្អ និងជោគជ័យគ្រប់ពេលវេលា។ 💗";

    // Celebration
    createConfetti();
  });
}

/* ==========================================
   11. GALLERY IMAGE ANIMATION
========================================== */

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(function (image) {
  image.addEventListener("error", function () {
    console.warn("Image not found: " + image.getAttribute("src"));
  });
});

/* ==========================================
   12. BIRTHDAY DATE
========================================== */

function updateBirthdayDate() {
  const birthdayDateElement = document.querySelector(".birthday-date");

  if (!birthdayDateElement) return;

  birthdayDateElement.textContent = BIRTHDAY_DATE.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

updateBirthdayDate();

/* ==========================================
   13. SMOOTH NAVIGATION
========================================== */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetID = link.getAttribute("href");

    const targetSection = document.querySelector(targetID);

    if (targetSection) {
      event.preventDefault();

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

/* ==========================================
   14. PAGE VISIBILITY
========================================== */

document.addEventListener("visibilitychange", function () {
  if (!backgroundMusic) return;

  if (document.hidden) {
    backgroundMusic.pause();

    musicPlaying = false;

    updateMusicButton();
  }
});

/* ==========================================
   15. CONSOLE MESSAGE
========================================== */

console.log("👑 Princess Birthday Website Loaded Successfully!");

console.log("Happy Birthday " + PRINCESS_NAME + " 💗");
