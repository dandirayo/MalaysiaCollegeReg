document.addEventListener('DOMContentLoaded', (event) => {
    // Popup 1
    const missionBox = document.getElementById('mission-box');
    const missionPopup = document.getElementById('mission-popup');
    const closeBtn1 = missionPopup.querySelector('.close-btn');

    missionBox.addEventListener('click', () => {
        missionPopup.style.display = 'block';
    });

    closeBtn1.addEventListener('click', () => {
        missionPopup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === missionPopup) {
            missionPopup.style.display = 'none';
        }
    });

    // Popup 2
    const missionBox2 = document.getElementById('mission-box2');
    const missionPopup2 = document.getElementById('mission-popup2');
    const closeBtn2 = missionPopup2.querySelector('.close-btn');

    missionBox2.addEventListener('click', () => {
        missionPopup2.style.display = 'block';
    });

    closeBtn2.addEventListener('click', () => {
        missionPopup2.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === missionPopup2) {
            missionPopup2.style.display = 'none';
        }
    });


    // Popup 3
    const missionBox3 = document.getElementById('mission-box3');
    const missionPopup3 = document.getElementById('mission-popup3');
    const closeBtn3 = missionPopup3.querySelector('.close-btn');

    missionBox3.addEventListener('click', () => {
        missionPopup3.style.display = 'block';
    });

    closeBtn3.addEventListener('click', () => {
        missionPopup3.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === missionPopup3) {
            missionPopup3.style.display = 'none';
        }
    });
    
});
