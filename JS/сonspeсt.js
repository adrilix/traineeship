// class User {
//     // Синтаксис оголошення методу класу
//     constructor(name, email) {
//       // Ініціалізація властивостей екземпляра
//       this.name = name;
//       this.email = email;
//     }
//   }
  
//   const mango = new User("Mango", "mango@mail.com");
//   console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }
  
//   const poly = new User("Poly", "poly@mail.com");
//   console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
/////////////////////////////////////////////////////////////////////////////////

// class Storage {
//     constructor (items){
//       this.items = items;
//     }
  
//     getItems(){
//       return this.items
//     }
  
//     addItem(newItem){
//       this.items.push(newItem)
//     }
  
//     removeItem(itemToRemove){
//         const indexToDelete = this.items.indexOf(itemToRemove)
//         this.items.splice(indexToDelete,1)
      
//     }
//   }
  
  
//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

/////////////////////////////////////////////////////////////////////////////////////

//   class StringBuilder{
//     constructor(initialValue){
//       this.value = initialValue;
//     }
  
//     getValue(){
//         // console.log(typeof(this.value));
//       return this.value
//     }
  
//     padEnd(str){
//         const newString= this.value.split("").concat(str).join("");
//         this.value = newString
//     }
  
//     padStart(str){
//         this.value = str + this.value;
//     }

//     padBoth(str){
//       this.padEnd(str)
//       this.padStart(str)
//     }
//   }
  
  
//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="

//////////////////////////////////////////////////////////////////
// class Car {
//     // Change code below this line
//     static MAX_PRICE = 50000;
//     #price;
  
//     constructor({ price }) {
//       this.#price = price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//       if (newPrice < Car.MAX_PRICE){
//         this.#price = newPrice;
//     }
  
//       }
//     // Change code above this line
//   }
  
//   const audi = new Car({ price: 35000 });
//   console.log(audi);
//   console.log(audi.price); // 35000

  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000
///////////////////////////////////////////////////////////////////
// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line

//     static checkPrice (price){
//       return price > this.#MAX_PRICE
//       ? "Error! Price exceeds the maximum" 
//       : "Success! Price is within acceptable limits"
//     }

//     // Change code above this line
//     constructor({ price }) {
//       this.price = price;
//     }
//     get maxPrice(){
//         return Car.#MAX_PRICE
//     }
//   }
  
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
  
//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
//   console.log(Car.maxPrice);

//   class User {
//     // Оголошення та ініціалізація статичної властивості
//     static Roles = {
//       ADMIN: "admin",
//       EDITOR: "5424453567676798709806755345245",
//     };
  
//     #email;
//     #role;

//     static addRoles(newRole, id){
//         this.Roles[newRole]= id;
//     }

//     static getRoles(){
//         return this.Roles
//     }
  
//     constructor({ email, role }) {
//       this.#email = email;
//       this.#role = role;
//     }
  
//     get role() {
//       return this.#role;
//     }
  
//     set role(newRole) {
//       this.#role = newRole;
//     }
//   }
  
//   const mango = new User({
//     email: "mango@mail.com",
//     role: User.Roles.EDITOR,
//   });
  
//   console.log(mango.Roles); // undefined
//   console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }
  
//   console.log(mango.role); // "admin"
//   mango.role = 'zxc';
//   console.log(mango.role); // "editor"

//   User.addRoles('Saver', '1234567890');
//   console.log(User.getRoles());

// class User {
//     static #takenEmails = [];
  
//     static isEmailTaken(email) {
//       return User.#takenEmails.includes(email);
//     }

//     static getAllEmails(){
//         return this.#takenEmails
//     }
  
//     #email;
  
//     constructor({ email }) {
//       this.#email = email;
//       User.#takenEmails.push(email);
//     }
//   }
  
//   const mango = new User({ email: "mango@mail.com" });
  
//   console.log(User.isEmailTaken("poly@mail.com"));
//   console.log(User.isEmailTaken("mango@mail.com"));
//   console.log(User.getAllEmails());
// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
    // Change code below this line
  //   blacklistedEmails = [];
  //   static AccessLevel = {
  //     BASIC: "basic",
  //     SUPERUSER: "superuser",
  //   };
  
  //   constructor({ email, accessLevel }) {
  //     super(email);
  //     this.accessLevel = accessLevel;
  //   }
  
  //   isBlacklisted(email){
  //     return blacklistedEmails.includes(email)
  //   }
  //   // Change code above this line
  // }
  
  // const mango = new Admin({
  //   email: "mango@mail.com",
  //   accessLevel: Admin.AccessLevel.SUPERUSER,
  // });
  
  // console.log(mango.email); // "mango@mail.com"
  // console.log(mango.accessLevel); // "superuser"
  
  // mango.blacklist("poly@mail.com");
  // console.log(mango.blacklistedEmails); // ["poly@mail.com"]
  // console.log(mango.isBlacklisted("mango@mail.com")); // false
  // console.log(mango.isBlacklisted("poly@mail.com")); // true

  //////////////////////////////////////////////////
//   function maskify(cc) {
//     const stringToArray = cc.split("");
//     if (stringToArray.length>4){

//       for (let index = 0; index < stringToArray.length-4; index+=1) {
//         stringToArray[index]="#";
//     }
//     return stringToArray.join("");
      
//     }
//     else return stringToArray.join("")
//   }
  


// maskify('4556364607935616')
// maskify('1')
// maskify('11111')
// const article = document.querySelector('article[data-marker="all"]');
// console.log(article.innerHTML);
// console.log(article.textContent);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// const lastItem = menuItemsByTagName[menuItemsByTagName.length -1];
// console.log(lastItem);
// lastItem.classList.add('lastItem');
// console.log(lastItem.classList.contains('lastItem'));
// lastItem.style.color = 'green'
// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   const selectedOptionIndex = select.selectedIndex;
//   const selectedOptionText = select.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
//   console.log(select.value);
//   console.log(select.selectedIndex);
//   console.log(select.options);
// }
// console.log(select.value);
// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 10; i++) {
//     const color = getRandomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }

// const result = _.add(2, 3);
// console.log(result); // 5
