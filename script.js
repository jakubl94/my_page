function showSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'block';
}

function hideSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
}

function showSection(sectionId) {
    console.log("showSection is being run");
    // Hide the hero section
    document.getElementById('hero').style.display = 'none';

    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
    

    // Show or hide the sidebar based on the section
    if (sectionId === 'guides') {
        showSidebar();
        showGuideSection('info');  // Ensure parking section is shown
    } else {
        hideSidebar();
    }

    // Update active link - underlines the section being used
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`header nav ul li a[onclick="showSection('${sectionId}')"]`).classList.add('active');

    // Add or remove margin-left class based on the section
    const mainContent = document.getElementById('main-content');
    if (sectionId === 'guides' && window.innerWidth >= 768) {
        mainContent.classList.add('margin-left');
        console.log("Adding padding for bigger screens");
    } else {
        mainContent.classList.remove('margin-left');
    }

}

function showHome() {
    document.getElementById('hero').style.display = 'block';
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector('header nav ul li a[onclick="showHome()"]').classList.add('active');
    hideSidebar(); // Ensure the sidebar is hidden when going home

    // Remove margin-left class
    const mainContent = document.getElementById('main-content');
    mainContent.classList.remove('margin-left');
}
// Modal picture - zoom
// Get the modal
var modal = document.getElementById("myModal");

// Get the modal image and caption elements
var modalImg = document.getElementById("imgModal");
var captionText = document.getElementById("caption");

// Get all images with the class "zoomable"
var images = document.getElementsByClassName("zoomable");

// Add click event listener to each image
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal on escape key press
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal('myModal');
    }
});

// Close password modal
document.getElementById('closePasswordModal').onclick = function() {
    closeModal('passwordModal');
};

// Close image modal
document.getElementById('closeImageModal').onclick = function() {
    closeModal('myModal');
};

function toggleMenu() {
    const navbarMenu = document.querySelector('.small-screen-menu');
    navbarMenu.classList.toggle('show');
}

// Function to hide the menu when a menu item is clicked
function hideMenu() {
    const navbarMenu = document.querySelector('.navbar-menu');
    if (navbarMenu.classList.contains('show')) {
        navbarMenu.classList.remove('show');
    }
}

// Add event listeners to menu items
document.querySelectorAll('.navbar-menu li a').forEach(item => {
    item.addEventListener('click', hideMenu);
});

function showGuideSection(sectionId) {
    if (window.innerWidth < 768){
        hideSidebar();
    }
    console.log(sectionId);

    // Hide all guide sections so nothing overlaps from previous selection
    document.querySelectorAll('.guide').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected guide section
    document.getElementById(sectionId).style.display = 'block';
}

// Show the first guide section (parking) by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showGuideSection('info');
});

function promptPassword() {
    document.getElementById('passwordModal').style.display = 'block';
}

function checkPassword() {
    const enteredPassword = document.getElementById('passwordInput').value;
    const hashedEnteredPassword = CryptoJS.SHA256(enteredPassword).toString();

    // Replace this hash with the hash of your actual password
    const correctPasswordHash = '38087dfc2d324c6b348ae9f2032f1894d965d714cd09c4067b062a3a789b874d';
    console.log('Entered Password:', enteredPassword);
    console.log('Hashed Entered Password:', hashedEnteredPassword);
    if (hashedEnteredPassword === correctPasswordHash) {
        showGuideSection('secret');
        closeModal();
    } else {
        alert('Incorrect password. Please try again.');
    }
}

function checkAddressPassword() {
    const enteredPassword = document.getElementById('addressPassword').value;
    const hashedEnteredPassword = CryptoJS.SHA256(enteredPassword).toString();

    // Replace this hash with the hash of your actual password
    const correctPasswordHash = '38087dfc2d324c6b348ae9f2032f1894d965d714cd09c4067b062a3a789b874d';

    if (hashedEnteredPassword === correctPasswordHash) {
        document.getElementById('addressContent').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
}

// Function to hide the small-screen menu
function hideSmallScreenMenu() {
    const navbarMenu = document.querySelector('.navbar-menu.small-screen-menu');
    navbarMenu.classList.remove('show');
}

// Add event listeners to all small-screen menu links
document.querySelectorAll('.small-screen-menu a').forEach(link => {
    link.addEventListener('click', function() {
        hideSmallScreenMenu();
    });
});
