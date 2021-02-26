// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const refreshButton = document.querySelector('.refresh__btn'); // кнопка сброса фильтрация
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления
const minWeightInput = document.querySelector('.minweight__input'); // поле для ввода минимального веса
const maxWeightInput = document.querySelector('.maxweight__input'); // поле для ввода максимального веса


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

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {
  fruitsList.innerHTML = "";

  for (let i = 0; i < fruits.length; i++) {
    
    let list = document.createElement('li');
    list.classList.add('fruit__item');
    list.classList.add(`fruit_${fruits[i]['classColor']}`);
    list.innerHTML = `
      <div class="fruit__info">
        <div>№: ${i}</div>
        <div>Вид: ${fruits[i]['kind']}</div>
        <div>Цвет: ${fruits[i]['color']}</div>
        <div>Вес (кг): ${fruits[i]['weight']}</div>
      </div>
    `;
    fruitsList.appendChild(list);
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

  const srcArray = [...fruits];

  while (fruits.length > 0) {

    let i = getRandomInt(0, fruits.length-1);
    result.push(fruits[i]);
    fruits.splice(i,1);

  }
  
  fruits = result;

  let prevArray = fruits.every((el, i) => el == srcArray[i]);
  
  if (prevArray) {
    alert("Порядок не изменился")
  };
};

shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  display();
});


/*** ФИЛЬТРАЦИЯ ***/

let minWeight;
let maxWeight;

// фильтрация массива
const filterFruits = () => {
  return fruits.filter((i) => {
    return ((i.weight >= minWeight) && (i.weight <= maxWeight)); 
  });
};

filterButton.addEventListener('click', () => {
  if ((minWeightInput.value != '') && (maxWeightInput.value != '')) {
    minWeight = parseInt(minWeightInput.value); // знаение поле ввода мин 
    maxWeight = parseInt(maxWeightInput.value); // значение поле ввода макс

    fruits = filterFruits();
    display();
  } else {

    minWeightInput ? minWeightInput.setAttribute('required', 'true') : minWeightInput.removeAttribute('required');
    maxWeightInput ? maxWeightInput.setAttribute('required', 'true') : maxWeightInput.removeAttribute('required');

    alert ('Заполните все поля');
  };
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '0.000 мс'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  const priority = ['желтый', 'зеленый', 'фиолетовый', 'светло-коричневый', 'розово-красный']
  const priority1 = priority.indexOf(a.color);
  const priority2 = priority.indexOf(b.color);
  console.log(priority1 > priority2);
  return priority1 > priority2;
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    const n = arr.length;
    for (let i = 0; i < n-1; i++) { 
      for (let j = 0; j < n-1-i; j++) { 
        if (comparation(arr[j], arr[j+1])) { 
            let temp = arr[j+1]; 
            arr[j+1] = arr[j]; 
            arr[j] = temp; 
        }
      }
    }   
  },

  quickSort(arr, comparation) {
  
  },
 
  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = end - start;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {

  (sortKind == 'bubbleSort') ? sortKind = 'quickSort ' : sortKind = 'bubbleSort';
  sortKindLabel.textContent = sortKind;
  sortTimeLabel.textContent = '0.000 мс';

});

sortActionButton.addEventListener('click', () => {
  
  sortTimeLabel.innerHTML = 'sorting...';
  setTimeout(() => {  
    const sort = sortAPI[sortKind];
    sortAPI.startSort(sort, fruits, comparationColor);
    display();
    sortTimeLabel.innerHTML = `${sortTime+0.001} мс`;
  }, 1000);

});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  function fruit(kind, color, weight, classColor = 'grey'){
    this.kind = kind;
    this.color = color;
    this.weight = weight;
    this.classColor = classColor;
  }

  let kind = document.querySelector('.kind__input');
  let color = document.querySelector('.color__input');
  let weight = document.querySelector('.weight__input');

  if (!kind.value || !color.value || !weight.value){

    kind ? kind.setAttribute('required', 'true') : kind.removeAttribute('required');
    color ? color.setAttribute('required', 'true') : color.removeAttribute('required');
    weight ? weight.setAttribute('required', 'true') : weight.removeAttribute('required');
    alert('Заполните все поля');

  } else {
    
    fruits.push(new fruit(kind.value, color.value, weight.value));
    newFruits = [...fruits];
    display();

  }  
});
