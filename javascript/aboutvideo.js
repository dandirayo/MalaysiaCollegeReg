document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('aboutVideo');
    const playThumbnail = document.getElementById('playThumbnail');

    //Function play video
    function playVideo() {
        videoElement.play(); // Memulai video
        playThumbnail.style.display = 'none'; // Sembunyikan thumbnail
    }

    // Event listener untuk thumbnail
    playThumbnail.addEventListener('click', playVideo);

    // Event listener untuk mengembalikan thumbnail jika video selesai
    videoElement.addEventListener('ended', () => {
        playThumbnail.style.display = 'flex'; // Tampilkan kembali thumbnail
    });
});
