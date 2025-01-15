// Membuka Popup Gambar Event
document.addEventListener('DOMContentLoaded', () => {
    const eventImages = document.querySelectorAll('.event-img');
    const popup = document.getElementById('eventPopup');
    const popupImage = document.getElementById('popupImage');

    // Event listener pada setiap gambar event
    eventImages.forEach(image => {
        image.addEventListener('click', () => {
            const src = image.getAttribute('data-src');
            popupImage.src = src; 
            popup.style.display = 'flex'; 
        });
    });

    // Menutup popup saat tombol close diklik
    document.querySelector('.close').addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Menutup popup jika klik di luar gambar
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});

// Fungsi untuk menutup popup (optional jika menggunakan onclick)
function closeEventPopup() {
    document.getElementById('eventPopup').style.display = 'none';
}


