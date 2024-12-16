document.addEventListener('DOMContentLoaded', () => {
    const popupMap = {
        'box1': 'popup-content1',
        'box2': 'popup-content2',
        'box3': 'popup-content3'
    };

    Object.keys(popupMap).forEach(boxId => {
        const box = document.getElementById(boxId);
        const popup = document.getElementById(popupMap[boxId]);
        const closeBtn = popup.querySelector('.close-btn');

        // Tampilkan popup saat box diklik
        box.addEventListener('click', () => {
            popup.style.display = 'block';
        });

        // Sembunyikan popup saat tombol close diklik
        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        // Sembunyikan popup saat klik di luar popup-content
        window.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.style.display = 'none';
            }
        });
    });
});
