console.log('hi');

import smoothScroll from './smoothScroll';

const scrollLinks = document.querySelectorAll('.js-smooth-scroll');

[...scrollLinks].forEach((el) => {
  el.addEventListener('click', (e) => {
    const pageFragmentToScrollTo = e.target.getAttribute('href');
    const elementToScrollTo = document.querySelector(pageFragmentToScrollTo);

    smoothScroll(
      elementToScrollTo,
      700,
      'easeOutQuint',
    );
  });
});
