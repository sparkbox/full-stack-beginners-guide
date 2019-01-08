import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/nord.css' 
import smoothScroll from './smoothScroll';

hljs.initHighlighting();

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
