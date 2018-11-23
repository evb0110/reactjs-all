// const add =  (a, b) => {
//   console.log(arguments);
//   return a + b;
// }
// console.log(add(55, 1, 1000));

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived ()  {
  const cityMessages = this.cities.map( city =>      this.name + " has lived in " + city);
  cityMessages.forEach(message => console.log(message));
  }
 };

// user.printPlacesLived();

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(n => n * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
