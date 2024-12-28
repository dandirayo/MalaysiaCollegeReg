document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById('college-popup');
    const closeBtn = document.getElementById('college-close');
    const facultyTitle = document.getElementById('facultyTitle');
    const facultyImage = document.getElementById('facultyImage');
    const facultyDescription = document.getElementById('facultyDescription');
    const facultyVideo = document.getElementById('facultyVideo');

    // Data fakultas (simulasi data JSON)
    const facultyData = {
        "Applied Chemistry": {
            title: "Applied Chemistry",
            image: "images/faculty/applied-chemistry.jpg",
            description: "Learn about advanced chemical processes and applications.",
            video: "https://www.youtube.com/embed/video1"
        },
        "Business Management": {
            title: "Business Management",
            image: "images/faculty/business-management.jpg",
            description: "Study the art of managing businesses effectively.",
            video: "https://www.youtube.com/embed/video2"
        }
        // Tambahkan data untuk fakultas lainnya
    };

    // Fungsi membuka popup
    function openPopup(faculty) {
        const data = facultyData[faculty];
        if (data) {
            facultyTitle.textContent = data.title;
            facultyImage.src = data.image;
            facultyDescription.textContent = data.description;
            facultyVideo.src = data.video;
        }
        popup.style.display = 'block';
        document.body.classList.add('blurred-background');
    }

    // Fungsi menutup popup
    function closePopup() {
        popup.style.display = 'none';
        facultyVideo.src = ""; // Hentikan video saat popup ditutup
        document.body.classList.remove('blurred-background');
    }

    // Event Listener tombol close
    closeBtn.addEventListener('click', closePopup);

    // Event Listener untuk tombol fakultas
    const facultyButtons = document.querySelectorAll('.faculty-button');
    facultyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const faculty = button.dataset.faculty;
            openPopup(faculty);
        });
    });

    // Event klik di luar popup
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });
});
