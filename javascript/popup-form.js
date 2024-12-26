document.addEventListener('DOMContentLoaded', () => {
    const popupForm = document.getElementById('popupForm');
    const askAwayBtn = document.getElementById('askAwayBtn');
    const closePopup = document.querySelector('.close-popup');

    // Fungsi untuk menampilkan popup
    askAwayBtn.addEventListener('click', () => {
        popupForm.style.display = 'flex'; // Tampilkan popup
        document.body.classList.add('blurred-background'); // Tambahkan efek blur
    });

    // Fungsi untuk menyembunyikan popup
    closePopup.addEventListener('click', () => {
        popupForm.style.display = 'none'; // Sembunyikan popup
        document.body.classList.remove('blurred-background'); // Hapus efek blur
    });

    // Menutup popup jika klik di luar konten
    window.addEventListener('click', (event) => {
        if (event.target === popupForm) {
            popupForm.style.display = 'none';
            document.body.classList.remove('blurred-background');
        }
    });
});
