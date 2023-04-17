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
    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.getSum = this.getSum.bind(this);
    this.getMul = this.getMul.bind(this);
    this.getSub = this.getSub.bind(this);
    this.getDiv = this.getDiv.bind(this);
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

// ===Task#3===
class RickAndMorty {
  getCharachter(id) {
    if (id === null || !isFinite(id)) {
      throw new Error();
    }
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          return null;
        }
        return data;
      })
      .catch((error) => {
        throw error;
      });
  }

  async getEpisode(id) {
    if (id === null || !isFinite(id)) {
      throw new Error();
    }
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      const data = await res.json();
      if (data.error) {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
}
