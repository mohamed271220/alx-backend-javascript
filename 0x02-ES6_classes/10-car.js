export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getters
  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  // Setters
  set brand(newBrand) {
    this._brand = newBrand;
  }

  set motor(newMotor) {
    this._motor = newMotor;
  }

  set color(newColor) {
    this._color = newColor;
  }

  // Method to display full car details
  displayFullCar() {
    return `${this._color} ${this._brand} with ${this._motor}`;
  }

  // Method to clone the car
  cloneCar() {
    const ClonedClass = this.constructor[Symbol.species] || this.constructor;
    return new ClonedClass(this._brand, this._motor, this._color);
  }

  // Define Symbol.species to return the current constructor
  static get [Symbol.species]() {
    return this;
  }
}
