"use strict"

const contents = document.querySelectorAll('.tabs-content li');

const table = document.querySelector('.tabs');


const showContent = (elem, content) => {

  content.forEach(item => item.classList.remove('active'))

  let currentContent = document.querySelector(`${elem.dataset.content}`);

  return currentContent.classList.add('active')

}

table.addEventListener('click', (e) => {
  let target = e.target;

  if (target.tagName != 'LI') return;

  showContent(target, contents);

})








