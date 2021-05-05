// const add = function add(x, y) {
//     console.log(x);
//     console.log(y);

// const result = x + y;
// console.log('x+y:' result);
//     console.log('Выполняет функции add');

//     return x + y;
// };

// const r1 = add(5, 3);
// console.log('r1: ', r1);

// const r2 = add(10, 15);
// console.log('r2: ', r2);

// const r3 = add(50, 30);
// console.log('r3: ', r3);
// add(10, 15);
// add(30, 50);
// add(14, 28);
// add(15, 30);
// add(40, 18);

// const fn = function (params) {
//     console.log(1);

//     return 555;

//     console.log(2);

//     console.log(3);

//     // return 111;


// }

// console.log('Результат функции: ', fn());


// const or = function checkStorage(available, ordered) {
//     // Пиши код ниже этой строки

//     console.log(available = -1);
//     console.log(ordered = -2);

//     // const order = (40, 50)

//     if (ordered === 0) {
//         return 'В заказе еще нет товаров';
//     } if (ordered > available) {
//         return 'Слишком большой заказ, на складе недостаточно товаров!';
//     }

//     return 'Заказ оформлен, с вами свяжется менеджер';


// }

// console.log('Результат функции: ', or());

// const fnA = function (params) {
//     console.log('Выполняет функции A');

//     fnB();
// };

// const fnB = function (params) {
//     console.log('Выполняет функции B');
//     fnC();
// };
// const fnC = function (params) {
//     console.log('Выполняет функции C');
// };

// // console.log('Log before call function A');
// fnA();
// console.log('Log after call function A');

// console.log('Log before call function B');
// fnB();
// console.log('Log after call function B');

// console.log('Log before call function C');
// fnC();
// console.log('Log after call function C');

// Пиши код ниже этой строки
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// fruits[0];
// console.log(fruits[0]);
// fruits[1];
// console.log(fruits[1]);
// fruits[fruits.length - 1];
// console.log(fruits[fruits.length - 1]);


// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
//     const array1 = [];
//     console.log(array1);
//     const lastElemet = [array.length - 1];


//     array1.push(array[0], array[lastElemet]);




//     return (array1);

//     // Пиши код выше этой строки
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(['Земля', 'Марс', 'Венера']);
// getExtremeElements(['яблоко', 'персик', 'груша', 'банан']);

// function splitMessage(message, delimeter) {
//     let words;
//     // Пиши код ниже этой строки

//     words = message.split(delimeter);

//     console.log(words);

//     // Пиши код выше этой строки
//     return words;
// }

// splitMessage('Манго спешит на поезд', ' ');

// function calculateEngravingPrice(message, pricePerWord) {
//     // Пиши код ниже этой строки

//     const words = message.split(' ');
//     console.log(words);
//     const result = words.length * pricePerWord;
//     console.log(result);
//     return result;
// }

// caculateEngravingPrice('JavaScript у меня в крови', 10);


// console.log(result);
// calculateEngravingPrice('JavaScript у меня в крови', 20);
// calculateEngravingPrice('Веб-разработка это творческая работа', 40);
// calculateEngravingPrice('Веб-разработка это творческая работа', 20);
// console.log(result);

// function makeStringFromArray(array, delimeter) {

//     let string;
//     // console.log(string);
//     // Пиши код ниже этой строки

//     let words = array.join(delimeter);

//     console.log(words);




//     return words;
//     // Пиши код выше этой строки
//     return string;
// }

// makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' ');


// function slugify(title) {
//     // Пиши код ниже этой строки

//     return title.tolowerCase.split(' ').join('-');

//     // Пиши код выше этой строки
// }
// slugify('Массивы для новичков');
// console.log(title);

// slugify('Массивы для новичков');
// console.log(title);
// function slugify(title) {
//     // Пиши код ниже этой строки



//     return title.toLowerCase().split(' ').join('-');


//     // Пиши код выше этой строки
// }

// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку
// console.log(allClients);



// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
//     const allArray = firstArray.concat(secondArray);
//     console.log(allArray);
//     console.log(allArray);
//     console.log(allArray);

//     if (allArray.length > maxLength) {
//         return allArray.slice(0, maxLegth);
//     } else {
//         return allArray;
//     }


//     // Пиши код выше этой строки
// }
// makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3);

// makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4);
// makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3);

// #16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
//     const allArray = firstArray.concat(secondArray);
//     console.log(allArray);

//     if (allArray.length > maxLength) {
//         return allArray.slice(0, maxLength);
//     } else {
//         return allArray;
//     }


//     // Пиши код выше этой строки
// }
// makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4);

// #17

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Дополни эту строку
//     console.log(i);
// }

// #18

// function calculateTotal(number) {
//     // Пиши код ниже этой строки
//     let total = 0;
//     for (let i = 1; i <= number; i += 1) {
//         total += i;
//     }

//     console.log(total);
//     return total;

//     let sum = 0;
//     for (let i = 1; i <= number; i += 1) {
//         sum += i;
//     }
//     return sum;

//     // Пиши код выше этой строки
// }
// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);
// calculateTotal();

// #19

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
//     const fruit = fruits[i]; // Дополни эту строку
//     console.log(fruit);
// }

// #20

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Пиши код ниже этой строки
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i];
//         console.log(total);
//     }

//     // Пиши код выше этой строки

//     return total;

// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);

// #21
// function findLongestWord(string) {
//     // Пиши код ниже этой строки
//     let words = string.split(' ');
//     console.log(words);
//     let wordLength = words[0];
//     console.log(wordLength);

//     for (const word of words) {

//         if (word.length >= wordLength.length) {
//             wordLength = word;
//         }
//     }
//     console.log(wordLength);
//     return wordLength;
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');


// #22 

// function createArrayOfNumbers(min, max) {

//     let list = [];
//     for (var i = min; i <= max; i++) {
//         list.push(i);
//     }
//     console.log(list);
//     return list;
// }

// createArrayOfNumbers(1, 3);

// createArrayOfNumbers(14, 17);

// createArrayOfNumbers(29, 34);

// createArrayOfNumbers();

// let lowEnd = min;
// console.log(lowEnd);

// let highEnd = max;
// console.log(highEnd);

// let total = [];
// console.log(total);

// while (lowEnd <= highEnd) {
//     total.push(lowEnd++);
// }
// console.log(total);
// return total;
// Пиши код выше этой строки




// Создаем пустой массив
// // const stack = [];

// // // Добавляем элементы в конец массива
// // stack.push(1);
// // console.log(stack); // [1]

// // stack.push(2);
// // console.log(stack); // [1, 2]

// // stack.push(3);
// // console.log(stack); // [1, 2, 3]
// // #23
// // function filterArray(numbers, value) {
// //     // Пиши код ниже этой строки
// //     const bigNumbers = [];

// //     for (let i = 0; i < numbers.length; i++) {
// //         if (numbers[i] > value) {
// //             bigNumbers.push(numbers[i])
// //         }
// //     }
// //     console.log(bigNumbers);
// //     return bigNumbers;
// //     // Пиши код выше этой строки
// // }


// // filterArray([1, 2, 3, 4, 5], 3);
// // filterArray([1, 2, 3, 4, 5], 4);
// // filterArray([1, 2, 3, 4, 5], 5);
// // filterArray([12, 24, 8, 41, 76], 38);
// // filterArray([12, 24, 8, 41, 76], 20);
// // filterArray();

// // #24

// function checkFruit(fruit) {
//     const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//     let freshFruit = [];

//     console.log(freshFruit);
//     return (fruits.includes(fruit) ? true : false);
// }


// // let freshFruit = fruits.includes(fruit) ? true : false;
// // console.log(freshFruit);
// // return fruits.includes(fruit);

// // let freshFruit = fruits.includes(fruit); {
// //     if (fruits.includes(fruit)) {
// //         freshFruit = true;
// //     }



// // }





// // return fruits.includes(fruit); // Дополни эту строку


// checkFruit('слива');
// checkFruit('Груша');
// checkFruit('мандарин');
// checkFruit('груша');
// checkFruit('яблоко');

// function checkFruit(fruit) {
//     const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//     let freshFruit =
//         fruits.includes(fruit) ? true : false;
//     console.log(freshFruit);
//     return fruits.includes(fruit);
// }



// return fruits.includes(fruit); // Дополни эту строку

// #25

// function getCommonElements(array1, array2) {
//     // Пиши код ниже этой строки
//     // const array1 = [];
//     // const array2 = [];

//     const numbers = [];

//     // const allElements = array1.concat(array2);

//     for (let i = 0; i < array1.length; i += 1) {
//         if (array2.includes(array1[i])) {
//             numbers.push(array1[i]);
//         }
//     }

//     console.log(numbers.includes(array1 && array2));

//     return (numbers);






//     // Пиши код выше этой строки
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// 26#
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// #26
// function calculateTotalPrice(order) {
//     let total = 0;

//     for (const value of order) {

//         total += value;
//     }
//     console.log(total);

//     // // Пиши код выше этой строки
//     return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// #27
// function filterArray(numbers, value) {
//     // Пиши код ниже этой строки
//     const filteredNumbers = [];

//     for (const number of numbers) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     }
//     console.log(filteredNumbers);

//     return filteredNumbers;
//     // Пиши код выше этой строки
// }



// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);

// // #28
// numbers([0, 1, 3, 5, 2])

// const a = 3 % 1;

// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// #29

// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//     const evenNumbers = [];

//     for (let i = start; i <= end; i += 1) { // Дополни эту строку

//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//             console.log(evenNumbers);
//         }
//     }
//     return evenNumbers;
//     // Пиши код выше этой строки
// }
// getEvenNumbers(2, 5);

// #30

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
// }

// #31

// function findNumber(start, end, divisor) {
//     // Пиши код ниже этой строки
//     let number;

//     for (let i = start; i < end; i += 1) {
//         if (i % divisor === 0) {
//             number = i;
//             return number;
//         }
//     }


//     // Пиши код выше этой строки
// }

// #32

// function includes(array, value) {
//     // Пиши код ниже этой строки

//     for (let number of array) {
//         // console.log(number);

//         if (number === value) {

//             console.log(true);
//             return true;

//         }
//     }
//     console.log(false);
//     return false;
//     // Пиши код выше этой строки
// }

// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);