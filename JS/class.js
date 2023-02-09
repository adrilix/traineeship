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

  class StringBuilder{
    constructor(initialValue){
      this.value = initialValue;
    }
  
    getValue(){
        // console.log(typeof(this.value));
      return this.value
    }
  
    padEnd(str){
        const newString= this.value.split("").concat(str).join("");
        this.value = newString
    }
  
    padStart(str){
        this.value = str + this.value;
    }

    padBoth(str){
      this.padEnd(str)
      this.padStart(str)
    }
  }
  
  
  // Change code above this line
  const builder = new StringBuilder(".");
  console.log(builder.getValue()); // "."
  builder.padStart("^");
  console.log(builder.getValue()); // "^."
  builder.padEnd("^");
  console.log(builder.getValue()); // "^.^"
  builder.padBoth("=");
  console.log(builder.getValue()); // "=^.^="



  