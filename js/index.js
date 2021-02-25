// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13, "classColor": "violet"},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35, "classColor": "green"},
  {"kind": "Личи", "color": "розово-красный", "weight": 17, "classColor": "carmazin"},
  {"kind": "Карамбола", "color": "желтый", "weight": 28, "classColor": "yellow"},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22, "classColor": "lightbrown"}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

console.log(fruits);


/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {
  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits

  let parent = document.querySelector(".fruits__list");

  for (let i = 0; i < fruits.length; i++) {
    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild

    let list = document.createElement('li');
    list.classList.add('fruit__item');
    list.classList.add(`fruit_${fruits[i]['classColor']}`);
    list.innerHTML = `
      <div class="fruit__info">
        <div>№: ${i+1}</div>
        <div>Вид: ${fruits[i]['kind']}</div>
        <div>Цвет: ${fruits[i]['color']}</div>
        <div>Вес (кг): ${fruits[i]['weight']}</div>
      </div>
    `;
    parent.appendChild(list);
  }
};

// первая случайная отрисовка карточек
document.addEventListener("DOMContentLoaded", () => {
  shuffleFruits();
  display();
});

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
const shuffleFruits = () => {
  let result = [];
  const oldFruits = [...fruits];

  while (fruits.length > 0) {

    let i = getRandomInt(0, fruits.length-1);
    result.push(fruits[i]);
    fruits.splice(i,1);

  }
  
  fruits = result;

  let notShuffled = fruits.every((el, i) => el == oldFruits[i]);
  
  if (notShuffled) {
    alert("Порядок не изменился")
  };
};

shuffleButton.addEventListener('click', () => {
  shuffleFruits();

  //Удаление старого списка
  for (let i = 0; i < fruits.length; i++){
    document.querySelector('.fruit__item').remove();
  }
  display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  fruits.filter((item) => {
    // TODO: допишите функцию
  });
};

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  display();
});
