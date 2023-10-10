import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';

hljs.registerLanguage('json', json);

hljs.configure({
  languages: ['json'],

});

// document.addEventListener('DOMContentLoaded', (event) => {
//   document.querySelectorAll('pre code').forEach((block) => {
//     hljs.highlightBlock(block);
//   });
// });
hljs.highlightAll();

console.log(hljs.listLanguages());

