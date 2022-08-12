class City {
  constructor(buildings) {
    this.buildings = buildings;
  }
}

class Building {
  constructor(type) {
    this.type = type;
  }
}
class Hospital extends Building {
  constructor(type, car) {
    super(type, car);
    this.car = car;
  }
}
class PoliceDepartment extends Building {
  constructor(type, car) {
    super(type);
    this.car = car;
  }
}
class Car {
  constructor(type, color, id) {
    this.type = type;
    this.color = color;
    this.id = id;
  }
}

class PoliceCar extends Car {
  constructor(type, color, id) {
    super(type, color, id);
    this.type = type;
    this.color = color;
    this.id = id;
  }
}
let policeCar1 = new PoliceCar("police", "blue", 1);
let policeCar2 = new PoliceCar("police", "blue", 2);
class AmbulanceCar extends Car {
  constructor(type, color, id) {
    super(type, color, id);
    this.type = type;
    this.color = color;
    this.id = id;
  }
}
let ambulanceCar1 = new AmbulanceCar("medicine", "white", 1);
let ambulanceCar2 = new AmbulanceCar("medicine", "white", 2);

let policeDepartment = new PoliceDepartment("police", [
  "policeCar1",
  "policeCar2",
]);
let margaryanHospital = new Hospital("hospital", [
  "ambulanceCar1",
  "ambulanceCar2",
]);
let erebuniHospital = new Hospital("hospital", [
  "ambulanceCar1",
  "ambulanceCar2",
]);

let city = new City([margaryanHospital, erebuniHospital, policeDepartment]);

console.log(city.buildings);
