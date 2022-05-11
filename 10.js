"use strict"

const contents = document.querySelectorAll('.tabs-content li')

const buttons = document.querySelectorAll('.tabs li')

const table = document.querySelector('.tabs');

const Akali = document.querySelector('#Akali')

Akali.classList.add('active')


function showContent(elem, content) {

  content.forEach(item => item.classList.remove('active'))

  let currentElem = document.querySelector(`${elem.dataset.content}`);

  return currentElem.classList.add('active')

}

// buttons.forEach( item =>item.onclick = () => showContent(item,contents))

table.addEventListener('click', (e) => {
  let target = e.target;

  if (target.tagName != 'LI') return;

  showContent(target, contents);

buttons.forEach(button => button.classList.remove('first'))

target.classList.add('first')

})








