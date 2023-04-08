// ===Task#1===
// function makeDeepClone(obj) {
//   if (arguments.length === 0 || obj === null) {
//     throw new Error("It's empty");
//   } else if (obj instanceof Array) {
//     throw new Error("It's an Array");
//   } else if (obj == null || typeof obj !== "object") {
//     return obj;
//   }
//   if (obj instanceof Date) {
//     return new Date(obj);
//   } else if (obj instanceof String) {
//     return new String(obj);
//   } else if (obj instanceof Number) {
//     return new Number(obj);
//   } else if (obj instanceof Boolean) {
//     return new Boolean(obj);
//   } else if (obj instanceof RegExp) {
//     return new RegExp(obj);
//   }

//   let clone = {};

//   for (let key in obj) {
//     clone[key] = makeDeepClone(obj[key]);
//   }
//   return clone;
// }

// makeDeepClone(obj);

// ===Task#2===
function selectFromInterval(arr, x, y) {
  if (
    arr.length === 0 ||
    arr.some((i) => typeof i !== "number") ||
    typeof x != "number" ||
    typeof y != "number"
  ) {
    throw new Error("xx");
  } else if (x < y) {
    return arr.filter((i) => i >= x && i <= y);
  } else if (y < x) {
    return arr.filter((i) => i >= y && i <= x);
  }
}

// ===Task#3===
