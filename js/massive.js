// const friends = ['Манго', 'Поли', 'Хьюстон', 'Аякс', 'Челси'];
// // output table
// console.table(friends);

// // last index
// const lastIndex = friends.length - 1;

// перебор масива
// for (i = 0; i <= friends.length - 1; i += 1) {

// изменеие в масиве
//     friends[5] = '48';


// обращение к каждому элемету
//     console.log(friends[i]);
// }

// for (let friend of friends) {
//     // friend += friend;
//     console.log(friend);
// }

// console.table(friends);

// const friends = ['Манго', 'Поли', 'Хьюстон', 'Аякс', 'Челси'];

// const cart = [12, 85, 37, 4];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);
//     cart[i] = Math.round(cart[i] * 1.1);
//     // console.log(cart[i]);

//     // total = total + cart[i];

//     total += cart[i];
// }
// console.log("Total: ", total);

// for (const value of cart) {
//     value = Math.round(value * 1.1);

//     total += value;
// }
// console.log("Total: ", total);

// const friends = ['Манго', 'Поли', 'Хьюстон', 'Аякс', 'Челси'];

// const numbers = [12, 85, 37, 4];

// let total = 0;


// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     console.log(number);

//     if (number % 2 === 0) {
//         console.log('Четное!!!!!!');
//         total += number;
//     }


// }

// for (const number of numbers) {
//     console.log(number);

//     if (number % 2 === 0) {
//         console.log('${number} - Четное!!!!!!');
//         total += number;
//     }

// }

// for (const number of numbers) {
//     // console.log(number);

//     if (number % 2 !== 0) {
//         console.log(`${number} - Пропустить!!!!!`);
//         continue;

//     }
//     console.log(`${number} - Четное!!!!!!`)
//     total += number;
// }
// console.log("Total: ", total);


// const logins = ['Манго', 'Поли', 'Хьюстон', 'Аякс', 'Челси'];
// const loginToFind = 'Поли';
// let message = "";


// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log(`Login: `, login);

//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('URA!!!');
//         message = `${loginToFind} найден`;
//         break;
//     }
//     message = `${loginToFind} не найден`;
// }

// console.log(message);


// const logins = ['Манго', 'Поли', 'Хьюстон', 'Аякс', 'Челси'];
// const loginToFind = 'Челси';
// let message = `${loginToFind} не найден`;


// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log(`Login: `, login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('URA!!!');
//         message = `${loginToFind} найден`;
//         break;
//     }
// }

// console.log(message);

// const logins = ['Манго', 'Поли', 'Хьюстон', 'Аякс', 'Челси'];
// const loginToFind = 'Челси';
// let message = `${loginToFind} не найден`;


// for (const login of logins) {
//     // const login = logins[i];

//     console.log(`Login: `, login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('URA!!!');
//         message = `${loginToFind} найден`;
//         break;
//     }
// }

// console.log(message);

// INCLUDES
// const logins = ['Манго', 'Поли', 'Хьюстон', 'Аякс', 'Челси'];
// const loginToFind = 'Хьюстон';
// let message = `${loginToFind} не найден`;


// console.log(logins.includes(loginToFind));

// Ternarnik
// const logins = ['Манго', 'Поли', 'Хьюстон', 'Аякс', 'Челси'];
// const loginToFind = 'Хьюстон';

// const message = logins.includes(loginToFind) ? `TRUE ${loginToFind}` : `FALSE ${loginToFind}`;
// console.log(message);

// const numbers = [12, 85, 37, 4];

// let smallestNum = numbers[0];

// console.log(smallestNum);

// for (const number of numbers) {
//     console.log(number);

//     if (number < smallestNum) {
//         smallestNum = number;
//     }
// }
// console.log('smallestNum: ', smallestNum);


// const logins = ['Манго', 'Поли', 'Хьюстон', 'Аякс', 'Челси'];

// let string = '';

// for (const login of logins) {
//     string += login + ',';

// }

// string = string.slice(0, string.length - 1);
// console.log(string);

// const logins = ['Манго', 'Поли', 'Хьюстон', 'Аякс', 'Челси'];


// const string = logins.join(',');
// console.log(logins);
// console.log(string);

// const string = 'SmallestNum';
// const letters = string.split('');
// let inverted = '';
// // const letters = string.split('');
// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     // if (letter === letter.toLowerCase()) {
//     //     console.log('Эта буква в нижнем регистре!!! -', letter);

//     //     inverted += letter.toUpperCase();
//     // } else {
//     //     console.log('Эта буква в верхнем регистре -', letter);
//     //     inverted += letter.toLowerCase();
//     // }

//     inverted += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log(`inverted:`, inverted);





// const title = 'Есть некоторые функции JavaScript';

// // const normalizedtitle = title.toLowerCase();
// // console.log(normalizedtitle);

// // const words = normalizedtitle.split(' ');
// // console.log(words);

// // const slug = words.join('-');
// // console.log(slug);


// const slug1 = title.toLowerCase().split(' ').join('-');


// console.log(slug1);





// const numbers1 = [12, 85, 37, 4];
// const numbers2 = [15, 40, 20];

// let total = 0;

// const numbers = numbers1.concat(numbers2);

// console.log(numbers);

// for (const number of numbers) {
//     total += number;

// }
// console.log(total);


