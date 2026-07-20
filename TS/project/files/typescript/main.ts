// Task 2
function calculate(numOne: number, numTwo: number): number {
  return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
console.log(calculate(+true, +true)); // 2


// Task 8
function printInConsole(...args: any[]): string {
  args.forEach(arg => console.log(`The Value Is ${arg} And Type Is ${typeof arg}`));
  return "Done";
}

console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
