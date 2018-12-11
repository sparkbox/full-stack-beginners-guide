// import Prism from 'prismjs'
// import 'prismjs/themes/prism-tomorrow.css'

//  Prism.highlightAll();

import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/atom-one-dark.css'

hljs.initHighlighting();


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
