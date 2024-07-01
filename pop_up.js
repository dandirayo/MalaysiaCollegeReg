document.addEventListener('DOMContentLoaded', () => {
    const popupMap = {
        'mission-box1': 'popup-text1',
        'mission-box2': 'popup-text2',
        'mission-box3': 'popup-text3',
        'event-button': 'popup-event',
        'openCollegePopup': 'collegePopup'
    };

    const facultyData = {
        'Applied Chemistry': {
            title: 'Applied Chemistry',
            image: 'images/faculty-applied-chemistry.jpg',
            description: 'About Applied Chemistry...',
            video: 'https://www.youtube.com/embed/applied_chemistry_video',
            additionalInfo: 'Additional information about Applied Chemistry...'
        },
        'Business Management': {
            title: 'Business Management',
            image: 'images/faculty-business-management.jpg',
            description: 'About Business Management...',
            video: 'https://www.youtube.com/embed/business_management_video',
            additionalInfo: 'Additional information about Business Management...'
        },
        'Computer Engineering': {
            title: 'Computer Engineering',
            image: 'images/faculty-computer-engineering.jpg',
            description: 'About Computer Engineering...',
            video: 'https://www.youtube.com/embed/computer_engineering_video',
            additionalInfo: 'Additional information about Computer Engineering...'
        },
        'Chemical Engineering': {
            title: 'Chemical Engineering',
            image: 'images/faculty-chemical-engineering.jpg',
            description: 'About Chemical Engineering...',
            video: 'https://www.youtube.com/embed/chemical_engineering_video',
            additionalInfo: 'Additional information about Chemical Engineering...'
        },
        'Computer Science': {
            title: 'Computer Science',
            image: 'images/faculty-computer-science.jpg',
            description: 'About Computer Science...',
            video: 'https://www.youtube.com/embed/computer_science_video',
            additionalInfo: 'Additional information about Computer Science...'
        },
        'Civil Engineering': {
            title: 'Civil Engineering',
            image: 'images/faculty-civil-engineering.jpg',
            description: 'About Civil Engineering...',
            video: 'https://www.youtube.com/embed/civil_engineering_video',
            additionalInfo: 'Additional information about Civil Engineering...'
        },
        'Electrical and Electronics Engineering': {
            title: 'Electrical and Electronics Engineering',
            image: 'images/faculty-electrical-engineering.jpg',
            description: 'About Electrical and Electronics Engineering...',
            video: 'https://www.youtube.com/embed/electrical_engineering_video',
            additionalInfo: 'Additional information about Electrical and Electronics Engineering...'
        },
        'Information System': {
            title: 'Information System',
            image: 'images/faculty-information-system.jpg',
            description: 'About Information System...',
            video: 'https://www.youtube.com/embed/information_system_video',
            additionalInfo: 'Additional information about Information System...'
        },
        'Information Technology': {
            title: 'Information Technology',
            image: 'images/faculty-information-technology.jpg',
            description: 'About Information Technology...',
            video: 'https://www.youtube.com/embed/information_technology_video',
            additionalInfo: 'Additional information about Information Technology...'
        },
        'Material Engineering': {
            title: 'Material Engineering',
            image: 'images/faculty-material-engineering.jpg',
            description: 'About Material Engineering...',
            video: 'https://www.youtube.com/embed/material_engineering_video',
            additionalInfo: 'Additional information about Material Engineering...'
        },
        'Petroleum Engineering': {
            title: 'Petroleum Engineering',
            image: 'images/faculty-petroleum-engineering.jpg',
            description: 'About Petroleum Engineering...',
            video: 'https://www.youtube.com/embed/petroleum_engineering_video',
            additionalInfo: 'Additional information about Petroleum Engineering...'
        },
        'Petroleum GeoScience': {
            title: 'Petroleum GeoScience',
            image: 'images/faculty-petroleum-geoscience.jpg',
            description: 'About Petroleum GeoScience...',
            video: 'https://www.youtube.com/embed/petroleum_geoscience_video',
            additionalInfo: 'Additional information about Petroleum GeoScience...'
        }
    };

    // Function to toggle popup visibility
    const togglePopup = (popupElement) => {
        popupElement.style.display = popupElement.style.display === 'block' ? 'none' : 'block';
    };

    // Function to open faculty popup with data
    const openFacultyPopup = (faculty) => {
        const data = facultyData[faculty];
        if (data) {
            document.getElementById('facultyTitle').innerText = data.title;
            document.getElementById('facultyImage').src = data.image;
            document.getElementById('facultyDescription').innerText = data.description;
            document.getElementById('facultyVideo').src = data.video;
            document.getElementById('additionalInfo').innerText = data.additionalInfo;
            togglePopup(document.getElementById('collegePopup'));
        }
    };

    // Add event listeners for each box and its corresponding popup
    Object.keys(popupMap).forEach(boxId => {
        const boxElement = document.getElementById(boxId);
        const popupId = popupMap[boxId];
        const popupElement = document.getElementById(popupId);
        const closeBtn = popupElement.querySelector('.close-btn') || popupElement.querySelector('.college-close');

        // Toggle popup when box is clicked
        if (boxElement) {
            boxElement.addEventListener('click', () => {
                togglePopup(popupElement);
            });
        }

        // Toggle popup when close button is clicked
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                togglePopup(popupElement);
            });
        }

        // Close popup when clicking outside of it
        window.addEventListener('mousedown', (event) => {
            if (event.target === popupElement) {
                togglePopup(popupElement);
            }
        });
    });

    // Add event listeners for faculty buttons
    document.querySelectorAll('.openCollegePopup').forEach(button => {
        button.addEventListener('click', () => {
            openFacultyPopup(button.getAttribute('data-faculty'));
        });
    });
});

function closeCollegePopup() {
    document.getElementById("collegePopup").style.display = "none";
}
