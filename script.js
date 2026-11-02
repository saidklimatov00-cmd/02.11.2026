// Задание 2
//1. вывод глобальных объектов в консоль
console.log(window); //глобальный объект окна браузера
console.log(document); //объект текущей html-страницы (DOM)
console.log(navigator); //объект с текущей информацией о браузере и ОС пользователя
console.log(location.href); //строка с полным url-адресом текущей страницы

//2. вызов диалогового окна
alert("Добро пожаловать"); 

//3. запрос имени у пользователя и вывод его в консоль
let name = prompt("Как его зовут");

//4. выводим имя в консоь. если пользователь нажмет отмена, вернется null.
console.log("Добро пожаловать : + name")


// Задание 4
const title = document.getElementById('main-title');
console.log("1. поиск по id (main-title: ", title);

const descriptions = document.getElementsByClassName('description');
console.log("2. по класс(description): ", descriptions);

const listItems = document.getElementsByTagName('li');
console.log("3. по тегу (li): ", listItems);

const container = document.querySelector('#container');
console.log("4. первый по селектору (#container): ", container);

const allDescriptions = document.querySelectorAll('.description');
console.log("5. все по селектору (.descripton): ", allDescriptions);
