window.addEventListener('DOMContentLoaded', () => {
  const sound = document.getElementById('introSound');
  if (sound) {
    sound.play().catch(() => {});
    sound.loop = true; // jaga-jaga jika browser abaikan atribut HTML
  }
});
function playIntroSound() {
  const sound = document.getElementById('introSound');
  if (sound) {
    sound.play().catch(() => {});
    sound.loop = true;
  }
  const popup = document.getElementById('popup');
  if (popup) popup.style.display = 'none';
}

