
const messageElement = document.getElementById('message');

messageElement.classList.add('active');
console.log("Добавлен класс 'active'");

messageElement.classList.remove('text');
console.log("Удален класс 'text'");

const isHidden = messageElement.classList.contains('hidden');
console.log("Есть ли класс 'hidden'?", isHidden);

messageElement.classList.toggle('hidden');
console.log("Переключен класс 'hidden' (текст скрылся)");

console.log("Текущие классы элемента:", messageElement.classList);
