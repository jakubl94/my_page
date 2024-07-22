function showSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'block';
}

function hideSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
}

function showSection(sectionId) {
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
    } else {
        hideSidebar();
    }

    // Update active link
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`header nav ul li a[onclick="showSection('${sectionId}')"]`).classList.add('active');
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

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal.style.display = "none";
}
