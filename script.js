// Example interactive functionality
window.onload = function() {
    console.log("Website loaded successfully.");
};
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('navList');
  
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  });
