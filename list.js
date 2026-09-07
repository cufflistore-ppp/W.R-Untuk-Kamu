// list.js – semua saluran digabung di sini
// Tombol mengarah ke link grup / saluran WhatsApp (tanpa harga)

document.addEventListener('DOMContentLoaded', () => {
  console.log('UK • Untuk Kamu – list.js loaded (semua saluran)');

  // ========== LINK GRUP / SALURAN WHATSAPP ==========
  // Ganti link di bawah dengan link grup/saluran asli kalau sudah ada
  const saluran = {
    jb1: {
      title: 'UK ELITE | JB¹',
      link: 'https://wa.me/6285842728134?text=Halo%20saya%20mau%20join%20UK%20ELITE%20JB1'
    },
    jb2: {
      title: 'UK ELITE | JB²',
      link: 'https://wa.me/6285842728134?text=Halo%20saya%20mau%20join%20UK%20ELITE%20JB2'
    },
    sl1: {
      title: 'UK ELITE | SL¹',
      link: 'https://wa.me/6285842728134?text=Halo%20saya%20mau%20join%20UK%20ELITE%20SL1'
    },
    website: {
      title: 'WEBSITE UK UNTUK KAMU',
      link: 'https://wa.me/6285842728134?text=Halo%20saya%20mau%20info%20Website%20UK%20Untuk%20Kamu'
    }
  };

  // ========== EVENT LISTENER SEMUA TOMBOL ==========
  const btnMap = {
    'btn-jb1': 'jb1',
    'btn-jb2': 'jb2',
    'btn-sl1': 'sl1',
    'btn-website': 'website'
  };

  Object.keys(btnMap).forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const key = btnMap[btnId];
        const data = saluran[key];
        if (data && data.link) {
          window.open(data.link, '_blank');
        }
      });
    }
  });
});
