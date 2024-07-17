// script.js
function showSection(sectionId) {
    // Hide the hero section
    document.getElementById('hero').style.display = 'none';
    
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Update active link
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`header nav ul li a[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

// Show the hero section when clicking on "Home"
function showHome() {
    document.getElementById('hero').style.display = 'block';
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`header nav ul li a[onclick="showSection('hero')"]`).classList.add('active');
}
