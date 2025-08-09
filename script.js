// Sayfa kaydırıldığında stil ekleme
window.addEventListener("scroll", () => {
  document.body.classList.toggle("scrolled", window.scrollY > 200);
});

// Sayfayı en üste kaydıran buton
document.getElementById("toTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dil seçeneği değiştirildiğinde doğru sayfaya yönlendirme
const languageSelect = document.getElementById("language-select");
if (languageSelect) {
  languageSelect.addEventListener("change", function () {
    const selectedLanguage = this.value;
    if (selectedLanguage === "en") {
      window.location.href = "en/index.html";
    } else {
      window.location.href = "index.html";
    }
  });
}

// Header'ı kaydırıldığında gizleyip, yukarı kaydırıldığında tekrar gösterme
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

const hamburgerBtn = document.getElementById("hamburger-btn");
const menu = document.getElementById("main-menu");

// Aç/kapa butonu
hamburgerBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Link tıklanınca menüyü kapat
const menuLinks = document.querySelectorAll("#main-menu a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// HERO BÖLÜMÜ
particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    size: { value: 2 },
    color: { value: "#00bcd4" },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#00bcd4",
      opacity: 0.25,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.2
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});

// EXPERIENCE BÖLÜMÜ
particlesJS("experience-particles", {
  particles: {
    number: { value: 40 },
    size: { value: 2 },
    color: { value: "#00bcd4" },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#00bcd4",
      opacity: 0.25,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.2
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});
