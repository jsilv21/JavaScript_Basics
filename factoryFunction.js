// CodeCademy Factory Function test code
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    bark (){
      return 'ruff! ruff!';
    },
    eatTooManyTreats(){
      this.weight++;
    },
    get name(){
      return this._name;
    },
    get breed(){
      return this._breed;
    },
    get weight(){
      return this._weight;
    },
    //setter for name checks for non-empty string
    set name(newName){
      if (typeof newName === 'string' && newName.length > 0){
      this._name = newName; 
    } else {
      console.log("ERROR: name must be a non-empty string"); 
    }
  },
  //same for breed
    set breed(newBreed){
      if (typeof newBreed === 'string' && newBreed.length > 0){
      this._breed = newBreed; 
    } else {
      console.log("ERROR: breed must be a non-empty string"); 
    }
  },
      set weight(newWeight){
      if (typeof newWeight === 'number'){
      this._weight = newWeight; 
    } else {
      console.log("ERROR: weight must be a number");
    }
  }
}
}
//invoke function
dog1 = dogFactory('Sam','Australian Shepherd', 45);
console.log(dog1);
//checking treats function
dog1.eatTooManyTreats();
console.log(dog1);
//example of error checking on setter
dog1.name = 123;
//bark function
console.log(dog1.bark());

dog2 = dogFactory('Jacob','Pitbull', 36);
console.log(dog2);
