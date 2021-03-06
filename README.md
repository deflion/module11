# 🚀 Практическая работа для модуля<br>"Базовый JS. Циклы и массивы" от SkillFactory

<img src="https://lms.skillfactory.ru/assets/courseware/v1/c840407c9c43fed39d7281144e28c2e5/asset-v1:SkillFactory+PHP-2.0+2020+type@asset+block/undraw_feeling_proud_qne1.svg" style="height:500px ">

Пару лет тому назад наш общий знакомый долго вел переговоры с местным фермером о покупке небольшого участка. Вы определенно должны его знать, а если не знаете, обязательно должны познакомиться с ним! Так вот, в его распоряжении оказалось несколько грядок, которые он мог засадить экзотическими фруктами.

Интерфейс **[нашей программы](/module11/project)** будет включать в себя несколько алгоритмических конструкций. Фермер просит сделать функционал, который мы подробно начнем подробно разбирать ниже. А вот техническое задание будет четко сформулировано в конце.

В первую очередь необходимо динамически отобразить исходный список фруктов. Верстка отдельных элементов будет в шаблоне, ссылка ниже. Элементы хранятся в формате JSON, ведь фермер будет получать данные с сервера, нужно подготовиться!

Теперь мы бы хотели перемешать все элементы списка. То есть если изначально все элементы выставлены в определенном порядке, то этот порядок должен быть нарушен. В качестве примера для работы алгоритма используем произвольный числовой массив [1, 3, 2, 0, 4], перемешаем его и получим [3, 0, 1, 2, 4]. Обратите внимание на особый случай, когда при перемешивании получившийся массив совпадает со старым. К примеру [1, 0] => [1, 0]. Тогда выводите alert с предупреждением, что порядок не изменился.

Обязательно добавить фильтрацию списка по полю weight в заданном диапазоне, включая концы. Снова упростим список для наглядности и создадим массив с весами фруктов [22, 12, 47, 5, 16]. Зададим диапазон значений: 12 <= weight <= 22, тогда в результате фрукты только с этими весами [22, 12, 16] попадут в диапазон. Из 5 элементов останется 3 элемента для отображения.

На следующий день фермер попросил добавить возможность сортировки по полю color. Текущий алгоритм сортировки отражается напротив поля "Алгоритм сортировки" (по умолчанию "bubbleSort"), а время сортировки напротив поля "Время сортировки" (по умолчанию "-").

Всего будет 2 алгоритма, которые меняются по кнопке "Сменить алгоритм сортировки": "bubbleSort" и "quickSort".

Напишите функцию "comparationColor", чтобы абстрагировать логику сравнения элементов. Как сравнивать цвета - ваш выбор, можете располагать их по цветам радуги, к примеру. Создается массив priority, только по цветам, аналогично одному из примеров в юните сортировок.

Не исключать возможность добавлять новые фрукты. Если одно из полей пустое, фрукт не добавляется, выводится alert с предупреждением.

Чтобы агрегировать и анализировать данные о растениях, наш знакомый решил составлять после сбора урожая список экзотических фруктов (сбор урожая проходит 1 раз в году). Элемент списка — это объект с данными о каком-либо виде фруктов.

Данные модели:

- kind — вид фрукта;
- color — цвет фрукта;
- weight — вес всех фруктов.

Для удобства вы будете выводить не только данные модели, но и index соответствующего элемента в массиве. Изначально все элементы выводятся упорядоченным списком, индексы расставлены по порядку, от 0 до n, где n - количество элементов списка.

Список должен формироваться динамически, однако, чтобы посмотреть, как должна выглядеть разметка, в коде есть закомментированные элементы списка с тегом `<li>`.
<hr>

### 5 баллов

- [x] При загрузке страницы динамически формируется список на основе исходных данных в JSON - формате. Реализовать функцию "display", которая получает на вход массив элементов и отображает их на странице.
- [x] Есть кнопка “Перемешать”, которая перемешивает карточки в хаотичном порядке. При неудаче () выводится предупреждение через alert.
<br>

###  10 баллов
<hr>

- [x] Выполнены условия на отметку 5.
- [x] При нажатии на кнопку "Фильтровать" происходит фильтрация элементов массива по полю weight.
- [x] При нажатии на кнопку "Сортировать" происходит сортировка элементов по полю color, вычисляется время работы алгоритма и записывается в поле “Время сортировки”.
<br>

###  15 баллов
<hr>

- [x] Выполнены условия на отметку 10.
- [ ] При нажатии на кнопку "Сменить алгоритм сортировки" происходит смена алгоритма сортировки и текущий алгоритм записывается в поле "Алгоритм сортировки".
<br>

###  20 баллов
<hr>

- [ ] Выполнены условия на отметку 15.
- [x] При нажатии на кнопку "Добавить фрукт" в конец списка добавляется новый элемент. При неудаче (одно из полей пустое) выводится предупреждение через alert.


