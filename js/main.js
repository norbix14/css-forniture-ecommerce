document.addEventListener('DOMContentLoaded', () => {
  const emptyAnchors = Array.from(document.querySelectorAll('a[href="#"]'));
  const navLinks = Array.from(document.querySelectorAll('a.nav-link'));
  const contactForm = document.querySelector('#contactForm');

  const getPathname = (location) => {
    const { pathname, protocol } = location;
    let path, len, split, route, isHTTP;
    isHTTP = protocol === 'http:' || protocol === 'https:';
    if (isHTTP) {
      if (pathname === '/') {
        route = 'index';
      } else {
        path = pathname.split('.')[0];
        route = path.startsWith('/') ? path.slice(1) : path;
      }
    } else {
      split = pathname.split('/');
      len = split.length;
      route = split[len - 1].split('.')[0];
    }
    return route;
  };

  const linkMap = {
    index: 'index',
    nosotros: 'about',
    tienda: 'store',
    blog: 'blog',
    galeria: 'gallery',
    contacto: 'contact',
  };
  const path = getPathname(window.location);
  const linkActive = linkMap[path];

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }

  emptyAnchors.forEach((anchor) => {
    anchor.addEventListener('click', (e) => e.preventDefault());
  });

  navLinks.forEach((link) => {
    const { id } = link;
    if (id === linkActive) {
      link.classList.add('link-active');
    } else {
      link.classList.remove('link-active');
    }
  });
});
