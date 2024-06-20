document.addEventListener('DOMContentLoaded', () => {
    const popupMap = {
        'mission-box1': 'popup-text1',
        'mission-box2': 'popup-text2',
        'mission-box3': 'popup-text3'
    };

    // Function to toggle popup visibility
    const togglePopup = (popupElement) => {
        popupElement.style.display = popupElement.style.display === 'block' ? 'none' : 'block';
    };

    // Add event listeners for each box and its corresponding popup
    Object.keys(popupMap).forEach(boxId => {
        const boxElement = document.getElementById(boxId);
        const popupId = popupMap[boxId];
        const popupElement = document.getElementById(popupId);
        const closeBtn = popupElement.querySelector('.close-btn');

        // Toggle popup when box is clicked
        boxElement.addEventListener('click', () => {
            togglePopup(popupElement);
        });

        // Toggle popup when close button is clicked
        closeBtn.addEventListener('click', () => {
            togglePopup(popupElement);
        });

        // Close popup when clicking outside of it
        window.addEventListener('mousedown', (event) => {
            if (event.target === popupElement) {
                togglePopup(popupElement);
            }
        });
    });
});
