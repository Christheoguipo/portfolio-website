const navLinkElements = document.querySelectorAll('.navigation-list__link');
const sectionElements = document.querySelectorAll('section');

let currentSection = 'home-section';
const headerHeight = document.querySelector('.page-header').offsetHeight;

window.addEventListener('scroll', () => {

  sectionElements.forEach(sectionElement => {
    if (window.scrollY >= (sectionElement.offsetTop - headerHeight)) {
      currentSection = sectionElement.id;
    }
  });

  navLinkElements.forEach(navLinkElement => {
    if (navLinkElement.href.includes(currentSection)) {
      document.querySelector('.active').classList.remove('active');
      navLinkElement.classList.add('active');
    }
  });
});