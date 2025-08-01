// Form gönderildiğinde mesajı göster
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mesajın gönderildi! (Demo)");
});

// Gece modu açma/kapama
const toggle = document.getElementById("mode-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Sayfa kaydırıldığında stil ekleme
window.addEventListener("scroll", () => {
  document.body.classList.toggle("scrolled", window.scrollY > 200);
});

// Sayfayı en üste kaydıran buton
document.getElementById("toTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dil seçeneği değiştirildiğinde doğru sayfaya yönlendirme
document.getElementById("language-select").addEventListener("change", function() {
  const selectedLanguage = this.value;
  if (selectedLanguage === "en") {
    window.location.href = "en/index.html";  // İngilizce sayfaya yönlendirme
  } else {
    window.location.href = "index.html";  // Türkçe sayfaya yönlendirme
  }
});

// Header'ı kaydırıldığında gizleyip, yukarı kaydırıldığında tekrar gösterme
let lastScrollTop = 0; // Son kaydırma pozisyonu

// Header'ı gizleme ve gösterme işlevi
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Sayfa aşağı kaydırılıyorsa header'ı gizle
  if (scrollTop > lastScrollTop) {
    header.classList.add('header-hidden'); // Header'ı gizle
  } else {
    header.classList.remove('header-hidden'); // Header'ı göster
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Sayfa yukarı kaydırıldığında sınırları ayarla
});
