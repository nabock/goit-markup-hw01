// const calculateTotalPrice = function (items) {
//     console.log('item внутри функциии ', items);

//     let total = 0;

//     for (const item of items) {

//         total += item;
//     }

//     return total;
// };

// const r1 = calculateTotalPrice([12, 85, 37, 4]);
// console.log(`Oбщая сумма покупок ${r1}`);

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// const numbers = [412, 371, 94, 63, 176];

// const findNumber = function (numbers, numberToFind) {
//     return numbers.includes(numberToFind) ? `Пользователь ${numberToFind} найден.` : `Пользователь ${numberToFind} не найден.`;

//     // return message;
// };

// console.log(findNumber(numbers, 4));
// console.log(findNumber(numbers, 412));
// console.log(findNumber(numbers, 176));


// самое маленькое число

// const numbers = [412, 371, 94, 63, 176];


// const findsmallestNum = function (numbers) {
//     let smallestNum = numbers[0];

//     for (const number of numbers) {
//         if (number < smallestNum) {
//             smallestNum = number;
//         }

//     }

//     return smallestNum;
// };

// console.log(findsmallestNum([412, 371, 94, 63, 176]));


// замена регистра

// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';

//     for (const letter of letters) {

//         const isInLowerCase = letter === letter.toLowerCase();

//         invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();

//     }

//     return invertedString;

// }
// console.log(changeCase('findSmallestNum'));

// const slugify = function (string) {
//     // const normalizedtitle = string.toLowerCase();
//     // const words = normalizedtitle.split(' ');
//     // const slug = words.join('-');

//     return string.toLowerCase().split(' ').join('-');

//     // return slug;

// }
// console.log(slugify('Есть некоторые функции JavaScript'));
