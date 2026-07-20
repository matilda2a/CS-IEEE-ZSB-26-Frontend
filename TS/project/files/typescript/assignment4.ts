// Task 2
// Write Function Code Here
function showTypes<T = string, S = string, V = string>(val1?: T, val2?: S, val3?: V): string {
  return `${val1 ?? "Nothing"} - ${val2 ?? "Nothing"} - ${val3 ?? "Nothing"}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true


// Task 3
// Write Class Code Here
class Game<T> {
  constructor(public title: T, public price: number) {}

  getDiscount(discount: string | number): void {
    console.log(`The Discount Is ${discount}`);
  }
}

// Do Not Edit Here
let gameOne = new Game<string>("Ys", 100);
let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
gameOne.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
gameTwo.getDiscount(80); // "The Discount Is 80"
