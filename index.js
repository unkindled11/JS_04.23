// ===Task#1===
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// ===Task#2===
class Calculator {
  constructor(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("not a number");
    }
    this.x = x;
    this.y = y;
  }

  setX(newX) {
    if (typeof newX !== "number") {
      throw new Error("not a number");
    }
    return (this.x = newX);
  }
  setY(newY) {
    if (typeof newY !== "number") {
      throw new Error("not a number");
    }
    return (this.y = newY);
  }
  getSum() {
    return this.x + this.y;
  }
  getMul() {
    return this.x * this.y;
  }
  getSub() {
    return Math.abs(this.x - this.y);
  }
  getDiv() {
    if (this.y === 0) {
      throw new Error("y is 0 ");
    }
    return this.x / this.y;
  }
}

const calculator = new Calculator(5, 3);

console.log(calculator.getSum());
console.log(calculator.getMul());
console.log(calculator.getSub());
console.log(calculator.getDiv());
console.log(calculator.getSum());
