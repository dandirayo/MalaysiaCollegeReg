document.addEventListener('DOMContentLoaded', () => {
    const popupMap = {
        'box1': 'popup-boxes1',
        'box2': 'popup-boxes2',
        'box3': 'popup-boxes3',
        'box4': 'popup-boxes4',
        'box5': 'popup-boxes5'
    };

    Object.keys(popupMap).forEach(boxId => {
        const box = document.getElementById(boxId);
        const popupboxes = document.getElementById(popupMap[boxId]);
        const closeBtn = popupboxes.querySelector('.close-btn');

        // Tampilkan popup saat box diklik
        box.addEventListener('click', () => {
            popupboxes.style.display = 'block';
        });

        // Sembunyikan popup saat tombol close diklik
        closeBtn.addEventListener('click', () => {
            popupboxes.style.display = 'none';
        });

        // Sembunyikan popup saat klik di luar popup-boxes
        window.addEventListener('click', (e) => {
            if (e.target === popupboxes) {
                popupboxes.style.display = 'none';
            }
        });
    });
});
