//From CodeCademy's JS project - meal maker: https://www.youtube.com/watch?v=dfQlhjmb-P0

const menu = {
   _courses: {
     // should these be _ appended? 
     appetizers: [],
     mains: [],
     desserts: []
   },
   get courses(){
     //assuming this is longer syntax, could probably just return this._courses, no?
     return {
       appetizers: this.appetizers,
       mains: this.mains,
       desserts: this.desserts
     };
   },
   addDishToCourse(courseName, dishName, dishPrice){
     //adding a dish to the course - name + price in object.
     let dish = {
       name: dishName,
       price: dishPrice
     }
     this._courses[courseName].push(dish);
   },
   getRandomDishFromCourse(courseName){
     //getting random dish based on random indexing
     let dishes = this._courses[courseName];
     const randIndex = Math.floor(Math.random()*dishes.length)
     return dishes[randIndex];
   },
   generateRandomMeal(){
     //creating a random meal, utilizing the getrandomdish function from above, putting together all course options + total price of each.
     let appetizer = this.getRandomDishFromCourse('appetizers');
     let main = this.getRandomDishFromCourse('mains');
     let dessert = this.getRandomDishFromCourse('desserts');
     let totalPrice = appetizer.price + main.price + dessert.price;
     return `Your meal consists of ${appetizer.name}, followed by ${main.name}, with a final dessert of ${dessert.name}, totaling $${totalPrice}.`;
   },

   get appetizers(){
     return this._courses.appetizers;
   },
   set appetizers(appetizerIn){
     this._courses.appetizers=appetizerIn;
   },
   get mains(){
     return this._courses.mains;
   },
   set mains(mainsIn){
     this._courses.mains=mainsIn;
   },
   get desserts(){
     return this._courses.desserts;
   },
   set desserts(dessertsIn){
     this._courses.desserts=dessertsIn;
   }
 }

menu.addDishToCourse('appetizers','Caesar Salad',4.50);
menu.addDishToCourse('appetizers','Burratta',5.50);
menu.addDishToCourse('appetizers','Bruschetta',5.00);

menu.addDishToCourse('mains','Hanger Steak',18.50);
menu.addDishToCourse('mains','Roast Chicken',16.50);
menu.addDishToCourse('mains','Vegetable Risotto',17.00);

menu.addDishToCourse('desserts','Vanilla Ice Cream',7.00);
menu.addDishToCourse('desserts','Chocolate Martini',9.00);
menu.addDishToCourse('desserts','Creme Brulee',11.00);

const meal = menu.generateRandomMeal();
console.log(meal);
console.log(menu.courses);
