// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//     return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);


// #1

// const parent = {
//     name: 'Stacey',
//     surname: 'Moore',
//     age: 54,
//     heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// console.log(child.heritage);



// #2

// const ancestor = {
//     name: 'Paul',
//     age: 83,
//     surname: 'Dawson',
//     heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки


// console.log(ancestor.child);



// #3

// const Guest = function (name, room) {
//     this.name = name;
//     this.room = room;
// };

// // console.log(Guest.prototype);


// const mango = new Guest('Mango', 28);

// console.log(mango);




// Guest.prototype.showGuestInfo = function () {
//     console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const mango = new Guest('Mango', 28);
// const poly = new Guest('Poly', 36);

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36



// function Car(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };

// console.log(Car);



// #4

// function Car({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };

// #5

// function Car({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };

// Car.prototype.getPrice = function () {
//     return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// };

// console.log(Car.prototype.hasOwnProperty('changePrice'));





// #6
// function Storage(items) {
//     this.items = items;
// };

// Storage.prototype.getItems = function (Storage) {
//     return this.items;
// };

// Storage.prototype.addItem = function (newStorage) {
//     this.items.push(newStorage);
// };

// Storage.prototype.removeItem = function (removeStorage) {

//     const storageIndex = this.items.indexOf(removeStorage);
//     this.items.splice(storageIndex, 1);
// };


// // Пиши код выше этой строки
// console.log(Storage.prototype);
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]

// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]






// #7
// function StringBuilder(baseValue) {
//     this.value = baseValue;
// };


// StringBuilder.prototype.getValue = function () {
//     return this.value;
// };

// StringBuilder.prototype.padStart = function (str) {
//     return (this.value = str + this.value);
// };

// StringBuilder.prototype.padEnd = function (str) {
//     return (this.value += str);
// };


// StringBuilder.prototype.padBoth = function (str) {
//     return (this.value = str + this.value + str);
// };



// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='






// №10

// class Car {
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }


//     getPrice() {
//         return this.price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }
// }





// №11

// class Car {
//     #brand;
//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.model = model;
//         this.price = price;
//     }

//     getBrand() {
//         console.log(this.#brand);
//         return this.#brand;
//     }

//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }
// }

// const AudiA3 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// // AudiA3.changeBrand('BMW');
// // console.log(AudiA3.getBrand()); // mango@supermail.com
// // console.log(AudiA3.#brand); // Будет ошибка, это приватное свойство





// #12
// class Storage {
//     #items
//     constructor(items) {
//         this.#items = items;
//     }

//     getItems() {
//         return this.#items;
//     }

//     addItem(newItem) {
//         this.#items.push(newItem);
//     }

//     removeItem(item) {
//         const itemIndex = this.#items.indexOf(item);
//         this.#items.splice(itemIndex, 1);
//     }
// };

// console.log(Storage.prototype.hasOwnProperty('getItems'));
// console.log(Storage.prototype.hasOwnProperty('addItem'));


// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]





// #13


// class StringBuilder {

//     #value;
//     constructor(value) {
//         this.#value = class StringBuilder {

//             #value;
//             constructor(value) {
//                 this.#value = value;
//             }

//             getValue() {
//                 return this.#value;
//             }

//             padEnd(str) {
//                 this.#value += str;
//             }

//             padStart(str) {
//                 this.#value = str + this.#value;
//             }

//             padBoth(str) {
//                 this.padStart(str);
//                 this.padEnd(str);
//             }

//         }
//             ;
//     }

//     getValue() {
//         return this.#value;
//     }

//     padEnd(str) {
//         this.#value += str;
//     }

//     padStart(str) {
//         this.#value = str + this.#value;
//     }

//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }

// }





// #14

// class Car {
//     #model;
//     #price;
//     #brand;

//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.#model = model;
//         this.#price = price;
//     }

//     get brand() {
//         return this.#brand;
//     }



//     set brand(newBrand) {
//         this.#brand = newBrand;
//     }

//     get model() {
//         return this.#model;
//     }

//     set model(newModel) {
//         this.#model = newModel;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         this.#price = newPrice;
//     }
// }








// #15

// class Car {
//     // Пиши код ниже этой строки
//     static MAX_PRICE = 50000;
//     #price;

//     constructor({ price }) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if (Car.MAX_PRICE >= newPrice) {
//             this.#price = newPrice;
//         }
//         this.#price = this.#price;

//         // Пиши код выше этой строки
//     }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000





// #16
// class Car {
//     static #MAX_PRICE = 50000;
//     // Пиши код ниже этой строки

//     static checkPrice(price) {
//         if (Car.#MAX_PRICE < price) {
//             return `Внимание! Цена превышает допустимую.`
//         }

//         return `Всё хорошо, цена в порядке.`

//     }

//     // Пиши код выше этой строки
//     constructor({ price }) {
//         this.price = price;

//     }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.






// #17

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// // Пиши код ниже этой строки

// class Admin extends User {
//     static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };

// };

// console.log(Admin.AccessLevel.SUPERUSER);





// #18

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     // Пиши код ниже этой строки
//     accessLevel;

//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser'
//     };

//     constructor({ email, accessLevel }) {
//         // Вызов конструктора родительского класса User
//         super(email);
//         this.accessLevel = Admin.AccessLevel.SUPERUSER;
//     };

//     // Пиши код выше этой строки
// }

// const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser







// #19

// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// class Admin extends User {
//     // Пиши код ниже этой строки
//     blacklistedEmails = [];
//     // blacklist = [];
//     accessLevel = [];

//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser'
//     };

//     constructor({ email, accessLevel }) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }

//     blacklist(email) {
//         this.blacklistedEmails.push(email)
//     };


//     isBlacklisted(email) {
//         return (this.blacklistedEmails.includes(email));
//     };

//     // Пиши код выше этой строки
// }

// const mango = new Admin({
//     email: 'mango@mail.com',
//     accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 