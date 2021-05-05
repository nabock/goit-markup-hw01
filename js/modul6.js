// 1.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Пиши код ниже этой строки

//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //     totalPrice += orderedItems[i];
//     // }

//     orderedItems.forEach(function (orderedItems) {
//         totalPrice += orderedItems;
//     });

//     // Пиши код выше этой строки
//     return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));





// 2.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки

//     // for (let i = 0; i < numbers.length; i += 1) {
//     //     if (numbers[i] > value) {
//     //         filteredNumbers.push(numbers[i]);
//     //     }
//     // }
//     numbers.forEach(function (numbers) {
//         if (numbers > value) {
//             filteredNumbers.push(numbers);
//         }
//     });
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 4));






// 3.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //     if (secondArray.includes(firstArray[i])) {
//     //         commonElements.push(firstArray[i]);
//     //     }
//     // }

//     firstArray.forEach(function (firstArray) {
//         if (secondArray.includes(firstArray)) {
//             commonElements.push(firstArray);
//         }
//     });
//     return commonElements;
//     // Пиши код выше этой строки
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));





// 4.

// Пиши код ниже этой строки

// function calculateTotalPrice(quantity, pricePerItem) => {
//     // Пиши код выше этой строки
//     return quantity * pricePerItem;
// };

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100));






// 5.

// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;


// // Пиши код выше этой строки





// 6.

// Пиши код ниже этой строки
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach(function (item) {
//         totalPrice += item;
//     });

//     return totalPrice;
// }
// const orderedItems = [];

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
//     orderedItems.forEach(item => totalPrice += item);
//     return totalPrice;
// };


// // Пиши код выше этой строки
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));





// 7.

// Пиши код ниже этой строки
// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
// }

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

// numbers.forEach(number => {
//     if (number > value) {
//         filteredNumbers.push(number)
//     }

// });
//     return filteredNumbers;
// };


// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));




// 8.
// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     // firstArray.forEach(function (element) {
//     //     if (secondArray.includes(element)) {
//     //         commonElements.push(element);
//     //     }
//     // });

//     firstArray.forEach(element => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

//     // Пиши код выше этой строки
//     return commonElements;
// };

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));






// 9.
// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 === 0) {
//             numbers[i] = numbers[i] + value;
//         }
//     }
//     // Пиши код выше этой строки
// }



// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     let getNumbers = [];

//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 === 0) {
//             getNumbers.push(numbers[i] + value);
//         } else {
//             getNumbers.push(numbers[i]);
//         }

//     };

//     return getNumbers;
//     // Пиши код выше этой строки
// };


// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));



// 10.


// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// // const planetsLengths = [];
// const planetsLengths = planets.map((planet) => planet.length);

// // const getLengths = function {
// //     planets.mapForEach(planet) => planetsLengths.push(planet.length);
// // };


// console.log(planetsLengths);





// 11.

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const titles = books.map((book) => book.title);

// console.log(titles);




// 12.

// const books = [
//     {
//         title: 'Последнее королевство',
//         author: 'Бернард Корнуэлл',
//         genres: ['приключения', 'историческое']
//     },
//     {
//         title: 'На берегу спокойных вод',
//         author: 'Роберт Шекли',
//         genres: ['фантастика']
//     },
//     {
//         title: 'Красна как кровь',
//         author: 'Ли Танит',
//         genres: ['ужасы', 'мистика']
//     }
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap((book) => book.genres);

// console.log(genres);





// 13.
// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ];
// Пиши код ниже этой строки






// const getUserNames = users => users.map((user) => user.name);

// // Пиши код выше этой строки
// console.log(getUserNames([
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         skills: ['ipsum', 'lorem'],
//         gender: 'male',
//         age: 37,
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//         gender: 'female',
//         age: 34,
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//         gender: 'male',
//         age: 24,
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         skills: ['adipisicing', 'irure', 'velit'],
//         gender: 'female',
//         age: 21,
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         skills: ['ex', 'culpa', 'nostrud'],
//         gender: 'male',
//         age: 27,
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         skills: ['non', 'amet', 'ipsum'],
//         gender: 'male',
//         age: 38,
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         skills: ['lorem', 'veniam', 'culpa'],
//         gender: 'female',
//         age: 39,
//     },
// ]));






// 14.

// // Пиши код ниже этой строки
// const getUserEmails = users => users.map((user) => user.email);
// // Пиши код выше этой строки


// console.log(getUserEmails(users));






// 15.


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);





// 16.


// const books = [
//     {
//         title: 'Последнее королевство',
//         author: 'Бернард Корнуэлл',
//         genres: ['приключения', 'историческое']
//     },
//     {
//         title: 'На берегу спокойных вод',
//         author: 'Роберт Шекли',
//         genres: ['фантастика', 'мистика']
//     },
//     {
//         title: 'Красна как кровь',
//         author: 'Ли Танит',
//         genres: ['ужасы', 'мистика', 'приключения']
//     }
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap((book) => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter(
//     (genre, index, array) => array.indexOf(genre) === index
// );

// console.log(uniqueGenres);






// 17.

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);





// 18.
// const users = [
//     {
//         name: 'Moore Hensley',
//         email: 'moorehensley@indexia.com',
//         eyeColor: 'blue',
//         friends: ['Sharron Pace'],
//         isActive: false,
//         balance: 2811,
//         gender: 'male'
//     },
//     {
//         name: 'Sharlene Bush',
//         email: 'sharlenebush@tubesys.com',
//         eyeColor: 'blue',
//         friends: ['Briana Decker', 'Sharron Pace'],
//         isActive: true,
//         balance: 3821,
//         gender: 'female'
//     },
//     {
//         name: 'Ross Vazquez',
//         email: 'rossvazquez@xinware.com',
//         eyeColor: 'green',
//         friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//         isActive: false,
//         balance: 3793,
//         gender: 'male'
//     },
//     {
//         name: 'Elma Head',
//         email: 'elmahead@omatom.com',
//         eyeColor: 'green',
//         friends: ['Goldie Gentry', 'Aisha Tran'],
//         isActive: true,
//         balance: 2278,
//         gender: 'female'
//     },
//     {
//         name: 'Carey Barr',
//         email: 'careybarr@nurali.com',
//         eyeColor: 'blue',
//         friends: ['Jordan Sampson', 'Eddie Strong'],
//         isActive: true,
//         balance: 3951,
//         gender: 'male'
//     },
//     {
//         name: 'Blackburn Dotson',
//         email: 'blackburndotson@furnigeer.com',
//         eyeColor: 'brown',
//         friends: ['Jacklyn Lucas', 'Linda Chapman'],
//         isActive: false,
//         balance: 1498,
//         gender: 'male'
//     },
//     {
//         name: 'Sheree Anthony',
//         email: 'shereeanthony@kog.com',
//         eyeColor: 'brown',
//         friends: ['Goldie Gentry', 'Briana Decker'],
//         isActive: true,
//         balance: 2764,
//         gender: 'female'
//     }
// ];
// Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => users.filter((user) => user.eyeColor === color);
// // Пиши код выше этой строки


// console.log(getUsersWithEyeColor(users, 'blue'));
// console.log(getUsersWithEyeColor(users, 'green'));
// console.log(getUsersWithEyeColor(users, 'brown'));
// console.log(getUsersWithEyeColor(users, 'yellow'));






// 19.

// Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => users.filter((user) => user.age >= minAge && user.age <= maxAge);

// // Пиши код выше этой строки

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 80, 100));
// console.log(getUsersWithAge(users));




// 20.

// Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => users.filter((user) => user.friends.includes(friendName));

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));




// 21.

// Пиши код ниже этой строки



// const getFriends = (users) => users.flatMap(user => user.friends).filter(
//     (friend, index, array) => array.indexOf(friend) === index);

// // console.log(allFriends);

// console.log(getFriends(users));


// 22.

// // Пиши код ниже этой строки
// const getActiveUsers = (users) => users.filter(user => user.isActive);
// // Пиши код выше этой строки

// console.log(getActiveUsers(users));




// 23.

// Пиши код ниже этой строки
// const getInactiveUsers = (users) => users.filter(user => user.isActive === false);
// // Пиши код выше этой строки

// console.log(getInactiveUsers(users));





// 24.


// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title.includes(BOOK_TITLE));
// const bookByAuthor = books.find((book) => book.author.includes(AUTHOR));

// console.log(bookWithTitle);
// console.log(bookByAuthor);





// 25.
// Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => users.find((user) => user.email.includes(email));
// // Пиши код выше этой строки

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));




// 26.


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((element) => firstArray.element % 2 !== 0);
// const eachElementInFirstIsOdd = firstArray.every((element) => firstArray.element % 2 === 0);

// const eachElementInSecondIsEven = secondArray.every((element) => secondArray.element % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((element) => secondArray.element % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((element) => thirdArray.element % 2 !== 0);
// const eachElementInThirdIsOdd = thirdArray.every((element) => thirdArray.element % 2 === 0);



// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);





// 27.

// Пиши код ниже этой строки
// const isEveryUserActive = (users) => users.every((user) => user.isActive === true);

// console.log(isEveryUserActive(users));




// 28.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((element) => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((element) => element % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((element) => element % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((element) => element % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((element) => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((element) => element % 2 !== 0);

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);
// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);
// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);





// 29.

// const isAnyUserActive = (users) => users.some((user) => user.isActive === true);

// console.log(isAnyUserActive(users));





// 30.

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((previousValue, playtime) => previousValue += playtime);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;



// console.log(totalPlayTime);
// console.log(averagePlayTime);





// 31.


// const players = [
//     { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//     { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//     { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//     { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((previousValue, player) => {
//     return previousValue += (player.playtime / player.gamesPlayed);
// }, 0);


// console.log(totalAveragePlaytimePerGame);





// 32.

// Пиши код ниже этой строки

// const calculateTotalBalance = (users) => users.reduce((previousValue, user) => {
//     return previousValue += user.balance;
// }, 0);
// // Пиши код выше этой строки

// console.log(calculateTotalBalance(users));



// 33.

// Пиши код ниже этой строки
// const getTotalFriendCount = users => users.reduce((previousValue, user) => {
//     return previousValue += user.friends.length;
// }, 0);
// // Пиши код выше этой строки

// console.log(getTotalFriendCount(users));





// 34.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();


// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);




// 35.
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);




// 36.

// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
// ];
// // Пиши код ниже этой строки

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));


// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);


// 37.


// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);


// console.log(sortedByAuthorName);

// console.log(sortedByReversedAuthorName);

// console.log(sortedByAscendingRating);

// console.log(sortedByDescentingRating);





// 38.



// const sortByAscendingBalance = (users) => [...users].sort((a, b) => [a.balance - b.balance]);
// // Пиши код выше этой строки


// console.log(sortByAscendingBalance(users));




// 39.

// Пиши код ниже этой строки
// const sortByDescendingFriendCount = (users) => [...users].sort((a, b) => [b.friends.length - a.friends.length]);
// // Пиши код выше этой строки

// console.log(sortByDescendingFriendCount(users));




// 40.
// Пиши код ниже этой строки
// const sortByName = (users) => [...users].sort((a, b) => a.name.localeCompare(b.name));
// // Пиши код выше этой строки

// console.log(sortByName(users));


// 41.
// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//     { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books.filter((book) => book.rating >= MIN_BOOK_RATING).map((book) => book.author).sort((a, b) => a.localeCompare(b));

// console.log(names);





// 42.
// Пиши код ниже этой строки
// const getNamesSortedByFriendCount = (users) => [...users].sort((a, b) => [a.friends.length - b.friends.length]).map((user) => user.name);
// // Пиши код выше этой строки
// console.log(getNamesSortedByFriendCount(users));




// 43.

// filter(
//     (genre, index, array) => array.indexOf(genre) === index
const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male'
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female'
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male'
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female'
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
        isActive: true,
        balance: 3951,
        gender: 'male'
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
        isActive: false,
        balance: 1498,
        gender: 'male'
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female'
    }
];
// Пиши код ниже этой строки
// const getSortedFriends = (users) => users.flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));

// // Пиши код выше этой строки

// console.log(getSortedFriends(users));







//44. 
// Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) => users.filter((user) => user.gender === gender).reduce((previousValue, user) => {
//     return previousValue += user.balance;
// }, 0)
// // Пиши код выше этой строки

// // users.filter((user) => user.eyeColor === color);

// // const calculateTotalBalance = (users) => users.reduce((previousValue, user) => {
// //     return previousValue += user.balance;
// // }, 0);



// console.log(getTotalBalanceByGender(users, 'male'));
// console.log(getTotalBalanceByGender(users, 'female'));






// const namaEmailget = users.map(({ name, email }) => ({ name, email }));
// console.table(namaEmailget);