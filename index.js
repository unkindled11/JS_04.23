// === Task#1 ===

function isTrue() {
  let sign = prompt("Please enter value");

  if (Math.sign(sign) == -1) {
    console.log("Incorrect input");
    return isTrue();
  } else if (sign % 1 === 0) {
    console.log(`Number: ${toNumber(sign)}`);
    console.log(`Factorial: ${factorial(sign)}`);
    console.log(`Square: ${sign * sign}`);
    console.log(`isPrime: ${isPrime(sign)}`);
    console.log(`isEven: ${isEven(sign)}`);
    console.log(`Delimiters: ${delimiters(sign)}`);
  } else {
    console.log("Incorrect input");
    return isTrue();
  }
}

function toNumber(n) {
  return Number(n);
}

function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n != 1 ? n * factorial(n - 1) : 1;
}

function isPrime(n) {
  if (n < 2) {
    return "Число должно быть больше 1";
  } else if (n === 2) {
    return "True";
  }

  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return "False";
    }
    i += 1;
  }

  return "True";
}

function isEven(n) {
  return n % 2 === 0 ? "True" : "False";
}

function delimiters(n) {
  let dlmtrs = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      dlmtrs.push(i);
    }
  }
  return dlmtrs.join(" ");
}

// === Task#2 ===

function message() {
  let symbol = prompt("Please enter symbol value");

  if (symbol === "" || symbol === " ") {
    console.log("Incorrect input");
    return message();
  } else if (symbol.length < 1 || symbol.length > 3) {
    console.log("Incorrect symbol");
    return message();
  }
  let row = prompt("Please enter number of rows");
  if (row <= 0 || row >= 10) {
    console.log("Incorrect row number");
    return message();
  } else if (isNaN(row)) {
    console.log("Incorrect row number");
    return message();
  } else {
    console.log(((symbol + " ").repeat(row) + "\n").repeat(row));
  }
}

isTrue();
message();
