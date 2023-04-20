// ===Task#1===
class Stack {
  constructor(limit = 10) {
    this.limit = limit;
    this.size = 0;
    this.top = null;

    if (
      !Number.isInteger(limit) ||
      limit <= 0 ||
      !isFinite(limit) ||
      isNaN(limit) ||
      typeof limit !== "number"
    ) {
      throw new Error("Invalid limit value");
    }
  }

  push(item) {
    if (this.size >= this.limit) {
      throw new Error("Limit exceeded");
    }
    this.top = { value: item, next: this.top };
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Empty stack");
    }
    const topItem = this.top;
    this.top = topItem.next;
    this.size--;
    return topItem.value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    const res = [];
    let current = this.top;
    while (current) {
      res.push(current.value);
      current = current.next;
    }
    return res.reverse();
  }

  static fromIterable(iterable) {
    if (
      iterable === undefined ||
      iterablle === null ||
      typeof iterable[Symbol.iterator] !== "function"
    ) {
      throw new Error("Not iterable");
    }
    const stack = new Stack([...iterable].length);
    for (const elem of iterable) {
      stack.push(elem);
    }
    return stack;
  }
}

// ===Task#2===
class LinkedList {
  constructor() {
    this.top = null;
    this.end = null;
    this.length = 0;
  }

  append(elem) {
    const item = { value: elem, next: null };

    if (this.length === 0) {
      this.top = item;
      this.end = item;
    } else {
      this.end.next = item;
      this.end = item;
    }

    this.length++;
  }

  prepend(elem) {
    const item = { value: elem, next: null };

    if (this.length === 0) {
      this.top = item;
      this.end = item;
    } else {
      item.next = this.top;
      this.top = item;
    }

    this.length++;
  }

  find(elem) {
    let currentItem = this.top;

    while (currentItem) {
      if (currentItem.value === elem) {
        return currentItem.value;
      }

      currentItem = currentItem.next;
    }

    return null;
  }

  toArray() {
    const elements = [];

    let currentItem = this.top;

    while (currentItem) {
      elements.push(currentItem.value);
      currentItem = currentItem.next;
    }

    return elements;
  }

  static fromIterable(iterable) {
    if (
      iterable === undefined ||
      iterable === null ||
      typeof iterable[Symbol.iterator] !== "function"
    ) {
      throw new Error("Not iterable");
    }

    const linkedList = new LinkedList();

    for (const element of iterable) {
      linkedList.append(element);
    }

    return linkedList;
  }
}
// ===Task#3===
class Car {
  #brand = "";
  #model = "";
  #yearOfManufacturing = 1950;
  #maxSpeed = 100;
  #maxFuelVolume = 20;
  #fuelConsumption = 1;
  #damage = 1;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;
  #health = 100;

  get brand() {
    return this.#brand;
  }

  set brand(value) {
    if (
      typeof value === "string" &&
      value.trim().length >= 1 &&
      value.trim().length <= 50
    ) {
      this.#brand = value.trim();
    } else {
      throw new Error("Invalid brand name");
    }
  }

  get model() {
    return this.#model;
  }

  set model(value) {
    if (
      typeof value === "string" &&
      value.trim().length >= 1 &&
      value.trim().length <= 50
    ) {
      this.#model = value.trim();
    } else {
      throw new Error("Invalid model name");
    }
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(value) {
    const currentYear = new Date().getFullYear();
    if (Number.isInteger(value) && value >= 1950 && value <= currentYear) {
      this.#yearOfManufacturing = value;
    } else {
      throw new Error("Invalid year of manufacturing");
    }
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(value) {
    if (Number.isInteger(value) && value >= 100 && value <= 330) {
      this.#maxSpeed = value;
    } else {
      throw new Error("Invalid max speed");
    }
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(value) {
    if (Number.isInteger(value) && value >= 20 && value <= 100) {
      this.#maxFuelVolume = value;
    } else {
      throw new Error("Invalid max fuel volume");
    }
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(value) {
    if (Number.isInteger(value) && value > 0) {
      this.#fuelConsumption = value;
    } else {
      throw new Error("Invalid fuel consumption");
    }
  }

  get damage() {
    return this.#damage;
  }

  set damage(value) {
    if (Number.isInteger(value) && value >= 1 && value <= 5) {
      this.#damage = value;
    } else {
      throw new Error("Invalid damage");
    }
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get health() {
    return this.#health;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error("Car has already started");
    } else {
      this.#isStarted = true;
    }
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error("Car hasn't started yet");
    } else {
      this.#isStarted = false;
    }
  }

  fillUpGasTank(fuelAmount) {
    if (
      !Number.isFinite(fuelAmount) ||
      fuelAmount <= 0 ||
      !Number.isInteger(fuelAmount)
    ) {
      throw new Error("Invalid fuel amount");
    }
    if (this.#currentFuelVolume + fuelAmount > this.#maxFuelVolume) {
      throw new Error("Too much fuel");
    }

    if (this.#isStarted) {
      throw new Error("You have to shut down your car first");
    }

    this.#currentFuelVolume += fuelAmount;
  }

  drive(speed, duration) {
    if (!Number.isFinite(speed) || speed <= 0 || !Number.isInteger(speed)) {
      throw new Error("Invalid speed");
    }
    if (
      !Number.isFinite(duration) ||
      duration <= 0 ||
      !Number.isInteger(duration)
    ) {
      throw new Error("Invalid duration");
    }

    if (speed > this.#maxSpeed) {
      throw new Error("Car can't go this fast");
    }

    if (!this.#isStarted) {
      throw new Error("You have to start your car first");
    }

    const distance = speed * duration;
    const fuelNeeded = (this.#fuelConsumption / 100) * distance;
    const healthLost = (this.#damage / 100) * distance;

    if (fuelNeeded > this.#currentFuelVolume) {
      throw new Error("You don't have enough fuel");
    }

    if (healthLost > this.#health) {
      throw new Error("Your car won't make it");
    }

    this.#currentFuelVolume -= fuelNeeded;
    this.#health -= healthLost;
    this.#mileage += distance;
  }

  repair() {
    if (this.#isStarted) {
      throw new Error("You have to shut down your car first");
    }
    if (this.#currentFuelVolume < this.#maxFuelVolume) {
      throw new Error("You have to fill up your gas tank first");
    }

    this.#health = 100;
  }

  getFullAmount() {
    return this.#maxFuelVolume - this.#currentFuelVolume;
  }
}
