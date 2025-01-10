const slides = document.querySelector('.slides');
const thumbnails = document.querySelectorAll('.thumbnails img');
let currentIndex = 0;

function showSlide(index) {
    const slideWidth = slides.children[0].offsetWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
    showSlide(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// Auto-slide (optional)
setInterval(() => {
    currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
}, 5000);

// Initialize
showSlide(currentIndex);
