document.addEventListener('DOMContentLoaded', () => {
    const popupMap = {
        'box1': 'popup-content1',
        'box2': 'popup-content2',
        'box3': 'popup-content3',
        'event-button': 'popup-content4',
        'openCollegePopup': 'collegePopup'
    };

document.addEventListener('DOMContentLoaded', () => {   
    const facultyData = {
        'Applied Chemistry': {
            title: 'Applied Chemistry',
            image: 'images/faculty-applied-chemistry.jpg',
            description: 'About Applied Chemistry...',
            video: 'https://www.youtube.com/watch?v=FWyWH27-La8',
            additionalInfo: 'Additional information about Applied Chemistry...'
        },
        'Business Management': {
            title: 'Business Management',
            image: 'images/faculty-business-management.jpg',
            description: 'About Business Management...',
            video: 'https://www.youtube.com/watch?v=FWyWH27-La8',
            additionalInfo: 'Additional information about Business Management...'
        },
        'Computer Engineering': {
            title: 'Computer Engineering',
            image: 'images/faculty-computer-engineering.jpg',
            description: 'About Computer Engineering...',
            video: 'https://www.youtube.com/watch?v=FWyWH27-La8',
            additionalInfo: 'Additional information about Computer Engineering...'
        },
        'Chemical Engineering': {
            title: 'Chemical Engineering',
            image: 'images/faculty-chemical-engineering.jpg',
            description: 'About Chemical Engineering...',
            video: 'https://www.youtube.com/watch?v=FWyWH27-La8',
            additionalInfo: 'Additional information about Chemical Engineering...'
        },
        'Computer Science': {
            title: 'Computer Science',
            image: 'images/faculty-computer-science.jpg',
            description: 'About Computer Science...',
            video: 'https://www.youtube.com/watch?v=FWyWH27-La8',
            additionalInfo: 'Additional information about Computer Science...'
        },
        'Civil Engineering': {
            title: 'Civil Engineering',
            image: 'images/faculty-civil-engineering.jpg',
            description: 'About Civil Engineering...',
            video: 'https://www.youtube.com/watch?v=FWyWH27-La8',
            additionalInfo: 'Additional information about Civil Engineering...'
        },
        'Electronics Engineering': {
            title: 'Electronics Engineering',
            image: 'images/faculty-electronics-engineering.jpg',
            description: 'About Electronics Engineering...',
            video: 'https://www.youtube.com/watch?v=FWyWH27-La8',
            additionalInfo: 'Additional information about Electronics Engineering...'
        },
        'Information System': {
            title: 'Information System',
            image: 'images/faculty-information-system.jpg',
            description: 'About Information System...',
            video: 'https://www.youtube.com/watch?v=FWyWH27-La8',
            additionalInfo: 'Additional information about Information System...'
        },
        'Information Technology': {
            title: 'Information Technology',
            image: 'images/faculty-information-technology.jpg',
            description: 'About Information Technology...',
            video: 'https://www.youtube.com/watch?v=FWyWH27-La8',
            additionalInfo: 'Additional information about Information Technology...'
        },
        'Material Engineering': {
            title: 'Material Engineering',
            image: 'images/faculty-material-engineering.jpg',
            description: 'About Material Engineering...',
            video: 'https://www.youtube.com/watch?v=FWyWH27-La8',
            additionalInfo: 'Additional information about Material Engineering...'
        },
        'Petroleum Engineering': {
            title: 'Petroleum Engineering',
            image: 'images/faculty-petroleum-engineering.jpg',
            description: 'About Petroleum Engineering...',
            video: 'https://www.youtube.com/watch?v=FWyWH27-La8',
            additionalInfo: 'Additional information about Petroleum Engineering...'
        },
        'Petroleum GeoScience': {
        title: 'Petroleum GeoScience',
        image: 'images/faculty-petroleum-geoscience.jpg',
        description: 'About'
        }
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
            document.getElementById('collegePopup').style.display = 'block';
          }
        };
      
        // Add event listeners for faculty buttons
        document.querySelectorAll('.faculty-button').forEach(button => {
          button.addEventListener('click', () => {
            openFacultyPopup(button.getAttribute('data-faculty'));
          });
        });
      });
      
      // Function to close the college popup
      function closeCollegePopup() {
        document.getElementById("collegePopup").style.display = "none";
      }

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
            document.getElementById('collegePopup').style.display = 'block';
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

// Function to close the college popup
function closeCollegePopup() {
    document.getElementById("collegePopup").style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
  const facultyData = {
    'Applied Chemistry': {
      title: 'Applied Chemistry',
      image: 'images/faculty-applied-chemistry.jpg',
      description: 'About Applied Chemistry...',
      video: 'https://www.youtube.com/watch?v=FWyWH27-La8',
      additionalInfo: 'Additional information about Applied Chemistry...'
    },
    // ...
    'Petroleum GeoScience': {
      title: 'Petroleum GeoScience',
      image: 'images/faculty-petroleum-geoscience.jpg',
      description: 'About Petroleum GeoScience...',
      video: 'https://www.youtube.com/watch?v=FWyWH27-La8',
      additionalInfo: 'Additional information about Petroleum GeoScience...'
    }
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
      document.getElementById('collegePopup').style.display = 'block';
    }
  };

  // Add event listeners for faculty buttons
  document.querySelectorAll('.faculty-button').forEach(button => {
    button.addEventListener('click', () => {
      openFacultyPopup(button.getAttribute('data-faculty'));
    });
  });
});

// Function to close the college popup
function closeCollegePopup() {
  document.getElementById("collegePopup").style.display = "none";
}