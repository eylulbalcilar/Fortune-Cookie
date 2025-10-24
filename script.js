// HTML'deki öğeleri seçelim
const button = document.getElementById('get-fortune-btn');
const cookie = document.getElementById('cookie');
const leftHalf = document.querySelector('.left-half');
const rightHalf = document.querySelector('.right-half');
const paper = document.getElementById('fortunePaper');
const fortuneText = document.getElementById('fortuneText');
const fortunes = [
  "Good news will come to you soon.",
  "Your kindness will open unexpected doors.",
  "Adventure awaits you this weekend!",
  "You will meet someone inspiring.",
  "Your hard work will soon pay off.",
  "Happiness is coming your way.",
  "Believe in yourself — success follows.",
  "A pleasant surprise is waiting for you.",
  "Patience brings sweet rewards.",
  "Your energy attracts good fortune!"
];
button.addEventListener('click', () => {
  // 1️⃣ Cookie görünür hale gelsin
  cookie.style.display = 'block';
  fortuneText.textContent = ""; // önceki yazıyı sıfırla
  
  // 2️⃣ Rastgele fortune seç
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  fortuneText.textContent = randomFortune;

  // 3️⃣ Kırılma animasyonu
  setTimeout(() => {
    leftHalf.style.transform = 'translateX(-60px) rotate(-20deg)';
    rightHalf.style.transform = 'translateX(60px) rotate(20deg)';
  }, 300);

  // 4️⃣ Kağıdın çıkma animasyonu
  setTimeout(() => {
    paper.style.transform = 'translate(-50%, -50%) scale(1)';
  }, 1000);

  // 5️⃣ 4 saniye sonra animasyonu sıfırla
  setTimeout(() => {
    leftHalf.style.transform = 'translateX(0) rotate(0deg)';
    rightHalf.style.transform = 'translateX(0) rotate(0deg)';
    paper.style.transform = 'translate(-50%, -50%) scale(0)';
    cookie.style.display = 'none';
  }, 5000);
});
