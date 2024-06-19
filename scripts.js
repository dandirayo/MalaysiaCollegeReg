function playVideo(button) {
    const container = button.closest('.intro-container, .video-container');
    const video = container.querySelector('.intro-element, .video-element');
    const thumbnail = container.querySelector('.video-thumbnail');
    
    thumbnail.style.display = 'none';
    video.style.opacity = '1';
    video.play();
    video.volume = 1; // Atur volume video
}