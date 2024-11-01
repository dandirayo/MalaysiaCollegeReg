document.addEventListener('DOMContentLoaded', () => {
  const popupMap = {
      'box1': 'popup-content1',
      'box2': 'popup-content2',
      'box3': 'popup-content3',
      'event-button': 'popup-content4',
      'openCollegePopup': 'collegePopup'
  };

  const togglePopup = (popupElement) => {
    popupElement.style.display = popupElement.style.display === 'block' ? 'none' : 'block';
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

});
// ------ PopUp Box Halaman 1 ------

// Function to close popup
const closePopup = (popupElement) => {
    popupElement.style.display = 'none';
    document.body.classList.remove('blurred-background'); // Remove blur from background
};

function openImage(element) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = element.getAttribute("data-src");
}

function closeImage() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
document.addEventListener('DOMContentLoaded', () => {
  const facultyData = {
      'Applied Chemistry': {
          title: 'Applied Chemistry',
          image: ' images/faculty-applied-chemistry.jpg',
          description: 'About Applied Chemistry...',
          video: 'C:\Users\dandi\OneDrive\Pictures\Source Website Maker\TopAlumniGlobal\Video\Testing28Sep',
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
          description: 'About Petroleum GeoScience...',
          video: 'https://www.youtube.com/watch?v=FWyWH27-La8',
          additionalInfo: 'Additional information about Petroleum GeoScience...'
      }
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faculty-button').forEach(button => {
        button.addEventListener('click', () => {
            openFacultyPopup(button.getAttribute('data-faculty'));
        });
    });
});

  const openFacultyPopup = (faculty) => {
      const data = facultyData[faculty];
      console.log('Opening popup for:', faculty);
      if (data) {
          console.log('Popup data:', data);
          document.getElementById('facultyTitle').innerText = data.title;
          document.getElementById('facultyImage').src = data.image;
          document.getElementById('facultyVideo').src = data.video;
          document.getElementById('facultyDescription').innerText = data.description;
          document.getElementById('collegePopup').style.display = 'block';
          document.body.classList.add('blurred-background');
      }
  };

  const closePopup = () => {
      document.getElementById('collegePopup').style.display = 'none';
      document.body.classList.remove('blurred-background');
  };

  document.getElementById('collegeClose').addEventListener('click', closePopup);
  window.addEventListener('click', (event) => {
      if (event.target === document.getElementById('collegePopup')) {
          closePopup();
      }
  });
});