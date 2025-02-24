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


document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from bubbling to document
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function() {
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    });
});

