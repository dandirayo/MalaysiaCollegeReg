document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownList = document.querySelector('.dropdown-list');

    // Toggle dropdown list visibility on button click
    dropdownButton.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownList.classList.toggle('active');
    });

    // Close the dropdown if clicked outside
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdownList.classList.remove('active');
        }
    });
});
