"use strict"

const contents = document.querySelectorAll('.tabs-content li')

const table = document.querySelector('.tabs');


function showContent(elem, content) {

  content.forEach(item => item.classList.remove('active'))

  let currentElem = document.querySelector(`${elem.dataset.content}`);

  return currentElem.classList.add('active')

}

table.addEventListener('click', (e) => {
  let target = e.target;

  if (target.tagName != 'LI') return;

  showContent(target, contents);

})








