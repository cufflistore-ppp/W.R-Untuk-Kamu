// script.js – script umum (sosial media & utilitas)
// Semua tombol JB / SL / Website sudah digabung di list.js

document.addEventListener('DOMContentLoaded', () => {
  console.log('UK • Untuk Kamu – script.js loaded');

  // Link sosial media
  const socialLinks = {
    'link-tiktok': 'https://www.tiktok.com/@untukkamu',      // ganti dengan link asli
    'link-whatsapp': 'https://wa.me/6281234567890'          // ganti dengan nomor WA
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
