function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active'); // Toggle menu visibility
}

document.addEventListener("DOMContentLoaded", function() {
    // Menghilangkan efek fade-out saat halaman baru dimuat
    document.body.classList.add('fade-element');

    // Fungsi untuk menghandle klik pada tautan
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            let destination = this.href; 

            document.body.classList.add('fade-out'); 

            setTimeout(function() {
                window.location = destination; 
            }, 500); 
        });
    });
});
