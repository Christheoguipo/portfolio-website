const navLinkElements = document.querySelectorAll('.navigation-list-link');
const sectionElements = document.querySelectorAll('section');

let currentSection = 'home-section';
const headerHeight = document.querySelector('.navbar-content').offsetHeight;

// Highlight the menu items
window.addEventListener('scroll', () => {

  sectionElements.forEach(sectionElement => {
    if (window.scrollY >= (sectionElement.offsetTop - headerHeight)) {
      currentSection = sectionElement.id;
    }
  });

  navLinkElements.forEach(navLinkElement => {
    if (navLinkElement.href.includes(currentSection)) {
      if (document.querySelector('.active')) {
        document.querySelector('.active').classList.remove('active');
      }

      navLinkElement.classList.add('active');
    }
  });
});


const hamburgerElement = document.querySelector('.hamburger');
const navigationListWrapperElement = document.querySelector('.navigation-list-wrapper');

// Show or Hide the menu list once the Hamburger menu is clicked 
hamburgerElement.addEventListener('click', () => {
  navigationListWrapperElement.classList.toggle('navbar-show');
});

// Hide the menu list once a link is clicked on smaller devices
navLinkElements.forEach(navLinkElement => {
  navLinkElement.addEventListener('click', () => {
    if (document.querySelector('.navbar-show')) {
      navigationListWrapperElement.classList.remove('navbar-show');
    }
  });
});

// Imitates the hover effect on mobile devices
const projectImgWrappers = document.querySelectorAll('.project-img-wrapper');
projectImgWrappers.forEach(projectImgWrapper => {
  projectImgWrapper.addEventListener('touchstart', function () {
    // Leave blank
  });
});