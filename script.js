document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('navList');
  
    if (menuToggle && navList) {
      menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
      });
    }
  });
