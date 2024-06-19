document.addEventListener('DOMContentLoaded', (event) => {
    const missionBox = document.getElementById('mission-box');
    const missionPopup = document.getElementById('mission-popup');
    const closeBtn = document.querySelector('.close-btn');

    missionBox.addEventListener('click', () => {
        missionPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        missionPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === missionPopup) {
            missionPopup.style.display = 'none';
        }
    });
});