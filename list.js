// list.js – semua saluran / list digabung di sini
// JB¹, JB², SL¹, Website, dll semuanya dikelola dari file ini

document.addEventListener('DOMContentLoaded', () => {
  console.log('UK • Untuk Kamu – list.js loaded (semua saluran)');

  // ========== DATA SALURAN ==========
  const saluran = {
    jb1: {
      title: 'UK ELITE | JB¹',
      items: [
        { id: 1, name: 'Paket JB¹ Basic', status: 'Ready', harga: 'Rp 15.000' },
        { id: 2, name: 'Paket JB¹ Premium', status: 'Ready', harga: 'Rp 25.000' },
        { id: 3, name: 'Paket JB¹ Elite', status: 'Pending', harga: 'Rp 40.000' },
      ]
    },
    jb2: {
      title: 'UK ELITE | JB²',
      items: [
        { id: 1, name: 'Paket JB² Basic', status: 'Ready', harga: 'Rp 18.000' },
        { id: 2, name: 'Paket JB² Premium', status: 'Ready', harga: 'Rp 30.000' },
        { id: 3, name: 'Paket JB² Elite', status: 'Ready', harga: 'Rp 50.000' },
        { id: 4, name: 'Paket JB² Ultra', status: 'Pending', harga: 'Rp 75.000' },
      ]
    },
    sl1: {
      title: 'UK ELITE | SL¹',
      items: [
        { id: 1, name: 'Saluran SL¹ Starter', status: 'Ready', harga: 'Rp 20.000' },
        { id: 2, name: 'Saluran SL¹ Pro', status: 'Ready', harga: 'Rp 35.000' },
        { id: 3, name: 'Saluran SL¹ Max', status: 'Ready', harga: 'Rp 55.000' },
      ]
    },
    website: {
      title: 'WEBSITE UK UNTUK KAMU',
      items: [
        { id: 1, name: 'Landing Page', status: 'Ready', harga: 'Rp 50.000' },
        { id: 2, name: 'Website Portfolio', status: 'Ready', harga: 'Rp 100.000' },
        { id: 3, name: 'Website Toko Online', status: 'Pending', harga: 'Rp 200.000' },
      ]
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
        showSaluran(saluran[key]);
      });
    }
  });

  // ========== FUNGSI TAMPILKAN SALURAN ==========
  function showSaluran(data) {
    if (!data) return;

    let message = `✨ ${data.title}\n`;
    message += '────────────────────\n\n';

    data.items.forEach((item, index) => {
      const statusIcon = item.status === 'Ready' ? '✅' : '⏳';
      message += `${index + 1}. ${item.name}\n`;
      message += `   ${statusIcon} ${item.status}  |  ${item.harga}\n\n`;
    });

    message += `Total: ${data.items.length} item`;
    alert(message);

    // Debug di console
    console.group(data.title);
    console.table(data.items);
    console.groupEnd();
  }
});
