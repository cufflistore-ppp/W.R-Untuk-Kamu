// script.js – link sosial media

document.addEventListener('DOMContentLoaded', () => {
  console.log('UK • Untuk Kamu – script.js loaded');

  // ========== LINK SOSIAL MEDIA ==========
  const socialLinks = {
    'link-whatsapp': 'https://wa.me/6285842728134',
    'link-tiktok': 'https://www.tiktok.com/@untukkamu5210',
    'link-instagram': 'https://www.instagram.com/untukkamu896',
    'link-telegram': 'https://t.me/untukkamu521',
    'link-email': 'mailto:untukkamuu521@gmail.com'
  };

  Object.keys(socialLinks).forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(socialLinks[id], '_blank');
      });
    }
  });
});
