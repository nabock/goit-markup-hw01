// const printMessage = function (message, callback) {
//     console.log(message);
//     callback(100);
// };

// const higherOrderFunction = function (number) {
//     // const string = 'HOCs are awesome';
//     // callback(string);
//     console.log('Log after call higherOrderFunction ', number);
// };

// // higherOrderFunction(printMessage);

// printMessage('Hello!', higherOrderFunction);

// #1
// function makePizza() {
//     return 'Ваша пицца готовится, ожидайте.';
// }
// // Пиши код ниже этой строки

// const result = makePizza();
// const pointer = makePizza;

// console.log(pointer);
// console.log(result);

// #2

// function deliverPizza(pizzaName) {
//     console.log(`Доставляем пиццу ${pizzaName}.`);
//     return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName,) {
//     console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//     return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }


// makeMessage('4 cheeses', deliverPizza);
// makeMessage('Bavarian"s', makePizza);

// #3

// function makePizza(pizzaName, callback) {
//     console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//     callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//     console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр', function eatPizza(pizzaName) {
//     console.log(`Едим пиццу ${pizzaName}.`);
// });

// #4

// const pizzaPalace = {
//     pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     order(pizzaName, onSuccess, onError) {
//         if (this.pizzas.includes(pizzaName)) {
//             console.log(onSuccess(pizzaName));
//             return onSuccess(pizzaName);
//         };
//         console.log(onError(pizzaName));
//         return onError(pizzaName);
//     }

// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//     return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(pizzaName) {
//     return `Ошибка! В ассортименте нет пиццы с названием ${pizzaName}.`;
// }

// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

// #5

// const pizzaPalace = {
//     pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     // Пиши код ниже этой строки
//     checkPizza(pizzaName) {
//         return this.pizzas.includes(pizzaName);
//     },

//     order(pizzaName) {
//         const isPizzaAvailable = this.checkPizza(pizzaName);

//         if (!isPizzaAvailable) {
//             return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//         }

//         return `Заказ принят, готовим пиццу «${pizzaName}».`;
//     },
//     // Пиши код выше этой строки
// };

// #6

// const customer = {
//     username: 'Mango',
//     balance: 24000,
//     discount: 0.1,
//     orders: ['Burger', 'Pizza', 'Salad'],
//     // Пиши код ниже этой строки

//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;

//         if (this.balance < 0) {

//             console.log(`Недостаточно средств.`);
//             this.balance += cost - cost * this.discount;

//             return `Недостаточно средств.`;
//         };

//         this.orders.push(order);
//     },
//     // Пиши код выше этой строки
// };

// console.log('Balance:', customer.balance);

// customer.setDiscount(0.15);
// // console.log('Discount:', customer.getDiscount()); // 0.15
// // customer.addOrder(5000, 'Steak');
// customer.addOrder(30000, 'Huinya');
// console.log('Balance:', customer.getBalance()); // 19750
// console.log('Orders:', customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

// console.log('Balance:', customer.balance);



// const foo = function () {
//     console.log('foo -> this', this);

// };

// foo();

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

// // showTag();
// const user = {
//     tag: 'Mango',
// };


// user.showUserTag = showTag;
// console.log('user', user)

// user.showUserTag();

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();



// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };


// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// console.log(user.showTag);

// invokeAction(user.showTag);





// const fn = function () {
//     console.log('fn -> this', this)
// };

// fn();




// const book = {
//     title: 'React for beginers',
//     showThis() {
//         console.log('showThis -> this', this);
//         // console.log('showThis -> this.tag', this.tag);
//     },

//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//         // console.log('showThis -> this.tag', this.tag);
//     },
// };

// // book.showThis();


// // const outerShowThis = book.showThis;
// // outerShowThis();


// const outerShowTitle = book.showTitle;

// outerShowTitle();







// const makeChangeColor = function () {

//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         this.color = color;
//     }

//     // changeColor();

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;

//     sweater.updateColor('red');


//     return sweater.updateColor;
// };

// // makeChangeColor();

// const swapColor = makeChangeColor();
// swapColor('blue');





// const makeChangeColor = function () {

//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);

//     }

//     return changeColor;
// }

// const updateColor = makeChangeColor();
// // updateColor('yellow');


// const hat = {
//     color: 'blue',
//     updateColor,
// };

// hat.updateColor('orange');
// // console.log(makeChangeColor.hat.length)




// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },

//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);






// const showThis = function (...args) {
//     console.log(args);
//     console.log('showThis -> this', this);
// };

// // console.log(showThis);
// // console.dir(showThis);

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };

// showThis.call(objA, 1, 15, 30, 45, 18, 100, 87, 92);


// const objB = {
//     x: 555,
//     y: 777,
// };


// showThis.call(objB, 1, 15, 30, 45, 18, 100, 87, 92);

// showThis(1, 15, 30, 45, 18, 100, 87, 92);

// showThis.apply(objB, [1, 15, 30, 45, 18, 100, 87, 92]);


// 






// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },

//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// updateCounter(100, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter);



// #7

// Задание
// Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.

// Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра position - позиция элемента в массиве(на единицу больше чем индекс).

// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта - заказа.
// Используй this в теле функции для доступа к свойствам объекта - заказа в контексте которого она была вызывана.
// Дополни код так, чтобы в переменной messages, с помощью метода map, получился массив сообщений о статусе заказов из массива orders.

//     Тесты
// Объявлена переменная orders.
// Значение переменной orders это исходный массив объектов - заказов.
// Объявлена функция composeMessage(position).
// У функции composeMessage объявлен один параметр position.
// В теле функции composeMessage используется this.
// Объявлена переменная messages.
// Переменной messages с помощью метода map присваивают значение - массив, создаваемый вызовом функции composeMessage.Значение this при вызове функции переопределяется с помощью метода call.
// Значение переменной messages это массив['Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в очереди.', 'Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.', 'Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди.'].

// const orders = [
//     { email: 'solomon@topmail.ua', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки


// function composeMessage(position) {

//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`


// };
// const founMessages = orders.map(order => composeMessage.call(order, orders.indexOf(order) + 1));

// const messages = founMessages;
// console.log(messages);

// #8

// const orders = [
//     { email: 'solomon@topmail.ua', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = orders.map((order, index) => composeMessage.apply(order, [index + 1]));

// console.log(messages);

// #9


// const pizzaPalace = {
//     company: 'Pizza Palace',
// };

// const burgerShack = {
//     company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//     return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');


// console.log(pizzaPalaceMessage);

// #10

// const service = {
//     mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//     subscribe(email) {
//         this.mailingList.push(email);
//         return `Почта ${email} добавлена в рассылку.`;
//     },
//     unsubscribe(email) {
//         this.mailingList = this.mailingList.filter((e) => e !== email);
//         return `Почта ${email} удалена из рассылки.`;
//     },
// };

// function logAndInvokeAction(email, action) {
//     console.log(`Выполняем действие с ${email}.`);
//     return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']





// const square = function (x) {
//     return x * x;
// }
// // выводит  25
// console.log(square(5));

// // Функции, назначенные переменным или константам, можно назначать другим переменным или константам:

// const foo = square;
// // выводит 36

// console.log(foo(6));



// function formalGreeting() {
//     console.log("How are you?");
// }
// function casualGreeting() {
//     console.log("What's up?");
// }
// function greet(type, greetFormal, greetCasual) {
//     if (type === 'formal') {
//         greetFormal();
//     } else if (type === 'casual') {
//         greetCasual();
//     }
// }
// // выводит 'What's up?'
// greet('casual', formalGreeting, casualGreeting);



// #MAP

// const arr1 = [1, 2, 3];
// // const arr2 = [];
// // for (let i = 0; i < arr1.length; i++) {
// //     arr2.push(arr1[i] * 2);
// // }
// const arr2 = arr1.map(function (item) {
//     return item * 2;
//     // выводит [ 2, 4, 6 ]
// });
// console.log(arr2);


// const arr3 = arr1.map(item => item * 2);
// // выводит [ 2, 4, 6 ]

// console.log(arr3);



// const birthYear = [1975, 1997, 2002, 1995, 1985];
// const ages = [];
// for (let i = 0; i < birthYear.length; i++) {
//     let age = 2018 - birthYear[i];
//     ages.push(age);
// }
// // выводит [ 43, 21, 16, 23, 33 ]
// console.log(ages);



// const birthYear = [1975, 1997, 2002, 1995, 1985];

// const ages = birthYear.map(year => 2018 - year);

// // выводит [ 43, 21, 16, 23, 33 ]
// console.log(ages);



// #  Метод Array.prototype.filter


// const persons = [
//     { name: 'Peter', age: 16 },
//     { name: 'Mark', age: 18 },
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 14 },
//     { name: 'Tony', age: 24 },
// ];
// // // const fullAge = [];
// // for (let i = 0; i < persons.length; i++) {
// //     if (persons[i].age >= 18) {
// //         fullAge.push(persons[i]);
// //     }
// // }

// const fullAge = persons.filter(persons => persons.age >= 18)
// console.log(fullAge);




// # Метод Array.prototype.reduce


// Предположим, у нас есть массив чисел.Нам надо посчитать сумму его элементов.

// Решение задачи без использования функций высшего порядка

// const arr = [5, 7, 1, 8, 4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// // выводит 25
// console.log(sum);




// Сначала рассмотрим использование метода reduce() без предоставления ему начального значения.

// const arr = [5, 7, 1, 8, 4];
// const sum = arr.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// });
// // выводит 25
// console.log(sum);





// Теперь посмотрим на то, как будет выглядеть решение задачи в том случае, если передать начальное значение в метод reduce().

// const arr = [5, 7, 1, 8, 4];
// const sum = arr.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 10);
// // выводит 35
// console.log(sum);






// Пусть у нас имеется массив строк, и мы хотели бы создать на его основе массив с числами, каждое из которых представляет собой длину строки, хранящейся в некоем элементе исходного массива.


// const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

// function mapForEach(arr, fn) {
//     const newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(
//             fn(arr[i])
//         );
//     }
//     return newArray;
// }
// const lenArray = mapForEach(strArray, function (item) {
//     return item.length;
// });
// // выводит [ 10, 6, 3, 4, 1 ]
// console.log(lenArray);



// Удаление элементов
// let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
// const deleteWords = words.filter((word, index, arr) => {
//     arr.pop()
//     return word.length < 9
// })

// console.log(deleteWords)
// Заметьте, что 'elite' не получено, так как удалено из `words` до того,
// как filter смог получить его: ['spray', 'limit']