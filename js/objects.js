
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// console.log(apartment);

// #2

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     owner: {
//         name: 'Генри',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// console.log(apartment);

// #3
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment.rating;
// console.log(aptRating);

// const aptDescr = apartment.descr;
// console.log(aptDescr);

// const aptPrice = apartment.price;
// console.log(aptPrice);

// const aptTags = apartment.tags;
// console.log(aptTags);
//   // Пиши код выше этой строки

// #4

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Генри',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com',
//     },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// console.log(ownerName);

// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);

// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);

// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);

// const firstTag = apartment.tags[0];
// console.log(firstTag);

// const lastTag = apartment.tags[2];
// console.log(lastTag);
// // Пиши код выше этой строки

// #5

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// console.log(aptTags);
// // Пиши код выше этой строки

// #6
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//         name: 'Генри',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com'
//     }
// };

// // Пиши код ниже этой строки
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');



// console.log(apartment);

// #7
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4.7,
//     price: 5000,
//     tags: ['premium', 'promoted', 'top', 'trusted'],
//     owner: {
//         name: 'Генри Сибола',
//         phone: '982-126-1588',
//         email: 'henry.carter@aptmail.com'
//     }
// };

// // Пиши код ниже этой строки
// apartment.location = {
//     country: 'Ямайка',
//     city: 'Кингстон',
// };
// apartment.area = 60;
// apartment.rooms = 3;

// console.log(apartment);

// #8

// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//     // Пиши код ниже этой строки
//     name,
//     price,
//     image,
//     tags,



//     // Пиши код выше этой строки
// };
// console.log(product);

// #9

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//     // Пиши код ниже этой строки
//     [emailInputName]: 'henry.carter@aptmail.com',
//     [passwordInputName]: 'jqueryismyjam',





// //     // Пиши код выше этой строки
// // };

// // console.log(credentials);

// // #10

// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
// };
// const keys = [];
// const values = [];
// Пиши код ниже этой строк

// for (const key in apartment) {
//     // Пиши код ниже этой строки

//     keys.push(key);
//     values.push(apartment[key]);

//     console.log(keys);
//     console.log(values);


//     // Пиши код выше этой строки
// }

// #11

// const keys = [];
// const values = [];
// const advert = {
//     service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     // Пиши код ниже этой строки


//     if (apartment.hasOwnProperty(key)) {
//         console.log(key);
//         console.log(apartment[key]);

//         keys.push(key);
//         values.push(apartment[key]);
//     }

//     console.log(keys);
//     console.log(values);

//     // Пиши код выше этой строки
// }

// #12

// function countProps(object) {
//     let propCount = 0;
//     // Пиши код ниже этой строки

//     console.log(Object.keys(object).length);

//     // Пиши код выше этой строки
//     return (Object.keys(object).length);
// };

// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });


// #13

// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
// };
// const values = [];

// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);

// };
// console.log(values);

// #14

// function countProps(object) {
//     // Пиши код ниже этой строки
//     let propCount = 0;

//     const keys = Object.keys(object);
//     console.log(propCount = keys.length);

//     return propCount = keys.length;

//     // Пиши код выше этой строки
// };

// countProps({ name: 'Mango', age: 2 });
// countProps({});
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

// #15


// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
// };
// // Пиши код ниже этой строки

// const keys = Object.keys(apartment);

// // console.log(keys);


// const values = Object.values(apartment);
// console.log(values);

// #16

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Пиши код ниже этой строки
//     const keys = Object.keys(salaries);
//     console.log(keys);


//     for (const key of keys) {
//         console.log(key);
//         console.log(salaries[key]);

//         totalSalary += salaries[key];
//     }

//     // Пиши код выше этой строки
//     console.log(totalSalary);
//     return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// #17

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const color of colors) {
//     console.log(color.hex);
//     hexColors.push(color.hex);

//     console.log(color.rgb);
//     rgbColors.push(color.rgb);
// }


// console.log('hexColors:', hexColors);
// console.log('RgbColors:', rgbColors);

// #18

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Пиши код ниже этой строки
//     let foundedProduct = 0;

//     for (const product of products) {

//         if (product.name === productName) {
//             foundedProduct = product.price;
//             console.log(foundedProduct);
//             return (product.price);

//         }


//     }
//     console.log(null);
//     return (null);

//     // Пиши код выше этой строки
// }

// getProductPrice('Захват');
// getProductPrice('Радар');
// getProductPrice('Сканер');
// getProductPrice('Двигатель');
//



// #18


// #20



// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     let foundedProduct = 0;


//     for (const product of products) {

//         if (product.name === productName) {
//             foundedProduct = product;
//             // console.log(foundedProduct);
//             console.log(product.price * product.quantity);
//             return (product.price * product.quantity);
//         }

//     }
//     console.log(foundedProduct);
//     return foundedProduct


//     // Пиши код выше этой строки
// }

// calculateTotalPrice('Радар')
// calculateTotalPrice('Бластер')
// calculateTotalPrice('Захват')

// #21

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const { yesterday, today, tomorrow } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// // #22

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Пиши код ниже этой строки

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;
// const { yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;


// // #23
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// #24

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки


// for (const { hex, rgb } of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }

// #25

const forecast = {
    today: {
        low: 28,
        high: 32,
        icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
    },
    tomorrow: {
        low: 27,
        high: 31,
    },
};
// Пиши код ниже этой строки
// const highTemperatures = [];


// const { low, high, icon } = today;
// console.log(low, high, icon);


// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// const { today: { low: lowToday, high: highToday, icon: todayIcon }, tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } } = forecast;
// console.log(todayIcon);

// // let { title = "Меню", size: { width, height }, items: [item1, item2] } = options;

// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// // Пиши код ниже этой строки

// const { today: { low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg' }, tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } } = forecast;

// #26

// Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {

//     const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;

//     // const todayLow = forecast.today.low;
//     // const todayHigh = forecast.today.high;
//     // const tomorrowLow = forecast.tomorrow.low;
//     // const tomorrowHigh = forecast.tomorrow.high;

//     // Пиши код выше этой строки
//     console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } });
// calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } })

// #27

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = (Math.max(...scores));
// const worstScore = (Math.min(...scores));

// console.log(bestScore);
// console.log(worstScore);

// #28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = (Math.max(...allScores));
// const worstScore = (Math.min(...allScores));

// #29


// const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// #30

// function makeTask(data) {
//     const completed = false;
//     const category = 'Общее';
//     const priority = 'Обычный';
//     // Пиши код ниже этой строки
//     const newTask = { category: 'Общее', priority: 'Обычный', completed: false, ...data };

//     console.log(newTask);
//     return newTask;


//     // Пиши код выше этой строки
// }
// makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' });
// makeTask({ category: 'Финансы', text: 'Забрать проценты' });
// makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' });

// #31

// Пиши код ниже этой строки

// function add(...args) {

//     let total = 0;

//     console.log(args);
//     for (const el of args) {
//         // console.log(el);
//         total += el;
//     }

//     console.log(total);
//     return total;

//     // Пиши код выше этой строки
// }
// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);

// #32

// Пиши код ниже этой строки
// function addOverNum(...args) {
//     let total = 0;

//     const numbers = [];

//     for (const arg of args) {

//         if (arg > args[0]) {

//             numbers.push(arg);
//             total += arg
//         }

//     }
//     console.log(total);
//     return total;
//     // Пиши код выше этой строки
// }

// addOverNum(50, 15, 27);;
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);

// #33

// Пиши код ниже этой строки
// Пиши код ниже этой строки
// function findMatches(array, ...args) {
//     const matches = []; // Не изменяй эту строку
//     for (const arg of args) {
//         for (const arr of array) {
//             if (arg === arr) {
//                 matches.push(arr);
//             }
//         }
//     }
//     // Пиши код выше этой строки
//     console.log(matches);
//     return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);

// #34

// const bookShelf = {
//     // Пиши код ниже этой строки
//     books: ['Последнее королевство', 'Страж снов'],
//     getBooks() {
//         return 'Возвращаем все книги';
//     },
//     addBook(bookName) {
//         return `Добавляем книгу ${bookName}`;
//     },

//     removeBook(bookName) {
//         return `Удаляем книгу ${bookName}`
//     },

//     updateBook(oldName, newName) {
//         return `Обновляем книгу ${oldName} на ${newName}`
//     }

//     // Пиши код выше этой строки
// };

// #35

// const bookShelf = {
//     books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//     updateBook(oldName, newName) {
//         // Пиши код ниже этой строки

//         const bookIndex = this.books.indexOf(oldName);
//         console.log(bookIndex);
//         // this.books.splice(bookIndex, 1, newName);

//         console.log(this.books.splice(bookIndex, 1, newName));
//         console.log(bookShelf);


//         // Пиши код выше этой строки
//     },

// };

// console.log(bookShelf);

// bookShelf.updateBook('Мгла', 'Хроники подземелий');
// bookShelf.updateBook('Последнее королевство', 'Дюна');

// #36

// const atTheOldToad = {
//     // Пиши код ниже этой строки

//     // Пиши код выше этой строки
// };
// atTheOldToad.potions = [];

// #37
// const atTheOldToad = {
//     // Пиши код ниже этой строки
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//     getPotions() {
//         this.potions;
//         console.log(this.potions);
//         return ((this.potions));


//     },
//     // Пиши код выше этой строки
// };

// atTheOldToad.getPotions();

// #38

// const atTheOldToad = {
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//     addPotion(potionName) {
//         // Пиши код ниже этой строки
//         this.potions.push(potionName);
//         // Пиши код выше этой строки
//     },
// };
// console.log(atTheOldToad);
// atTheOldToad.addPotion('Невидимка');

// #39

// const atTheOldToad = {
//     potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//     removePotion(potionName) {
//         // Пиши код ниже этой строки
//         const potionIndex = this.potions.indexOf(potionName);

//         this.potions.splice(potionIndex, 1,);
//         // Пиши код выше этой строки
//     },
// };
// console.log(atTheOldToad);
// atTheOldToad.removePotion('Дыхание дракона');

// #40

// const atTheOldToad = {
//     potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//     updatePotionName(oldName, newName) {
//         // Пиши код ниже этой строки
//         const bookIndex = this.potions.indexOf(oldName);


//         console.log(this.potions.splice(bookIndex, 1, newName));

//         // Пиши код выше этой строки
//     },
// };
// console.log(atTheOldToad);
// atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');

// #41

// const atTheOldToad = {
//     potions: [
//         { name: 'Зелье скорости', price: 460 },
//         { name: 'Дыхание дракона', price: 780 },
//         { name: 'Каменная кожа', price: 520 },
//     ],
//     // Пиши код ниже этой строки
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(potionName) {

//         if (this.potions.includes(potionName)) {

//             return `Зелье ${potionName} уже есть в инвентаре!`;
//         }

//         this.potions.push(potionName);
//     },
//     removePotion(potionName) {

//         // const { items } = this;
//         for (let i = 0; i < this.potions.length; i += 1) {
//             // console.log(this.potions[i]);
//             const { name } = this.potions[i];

//             if (potionName === name) {

//                 this.potions.splice(i, 1);

//             };
//         };
//         return `Зелья ${potionName} нет в инвентаре!`;
//     },
//     updatePotionName(oldName, newName) {


//         for (let i = 0; i < this.potions.length; i += 1) {


//             if (oldName === this.potions[i].name) {

//                 // this.potions.splice(i, 1, newName);

//                 this.potions[i].name = newName;

//             }
//         }
//         return `Зелья ${oldName} нет в инвентаре!`;

//     },
// };

// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// atTheOldToad.removePotion('Дыхание');
// // atTheOldToad.removePotion('Зелье скорости');
// console.log(atTheOldToad.updatePotionName('Дыхание', 'Полиморф'));
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));
