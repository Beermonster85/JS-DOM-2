//ДЗ №7
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
//Решение
// const dropDownIt = document.querySelectorAll('.dropdown-item');
// dropDownIt.forEach(dropDownIt => {
//     dropDownIt.classList.add ("super-dropdown")
// });
// console.log(dropDownIt)
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
//Решение
// const btn = document.querySelector (".btn");
// console.log (btn);
// btn.classList.remove("btn-secondary");
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
//Решение
// const dropdownMenu = document.querySelector(".dropdown-menu");
// console.log (dropdownMenu);
// const menu = document.querySelector (".menu");
// menu.classList.remove ("dropdown-menu");
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
//Решение
// const dropDown = document.querySelector("div.dropdown");
// console.log (dropDown);
// dropDown.insertAdjacentHTML ('afterend', '<a href="#">link</a>'); 
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// Решение
// const dropDownBtn = document.querySelector ('#dropdownMenuButton');
// console.log (dropDownBtn);
// dropDownBtn.setAttribute('id', 'superDropdown');
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
//Решение
// document.querySelector('[aria-labelledby="dropdownMenuButton"]')
// .dataset.dd = "3";
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
//Решение
// const dropdownT = document.querySelector ('.dropdown-toggle')
// console.log (dropdownT)
// dropdownT.removeAttribute('type')
"use strict";