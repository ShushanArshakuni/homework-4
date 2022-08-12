class Character {
  constructor(name, type, health = 100, level = 1) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
  }

  setName(name) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
      return "It is a valid name";
    } else {
      return "Sorry, it is not a valid name";
    }
  }
  setType(type) {
    if (this.type.includes(type)) {
      return "You are passed";
    } else {
      throw new Error("Sorry, you are not passed");
    }
  }
  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.attack += (this.attack / 100) * 20;
      this.defense += (this.defense / 100) * 20;
      this.health = 100;
    } else {
      throw new Error("you cannot increase the level of the deceased");
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defense / 100);
    } else {
      return "Sorry, your game is over";
    }
  }
}

let character = new Character("name", [
  "Bowman",
  "Swordsman",
  "Magician",
  "Daemon",
  "Undead",
  "Zombie",
]);

class Bowerman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 25;
    this.defense = 25;
  }
}
let bowerman = new Bowerman("Bow", "Bowerman");

class Swordsman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 40;
    this.defense = 10;
  }
}
let swordsman = new Swordsman("Sword", "Swordsman");

class Magician extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 10;
    this.defense = 40;
  }
}
let magician = new Magician("Magic", "Magician");

class Daemon extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 25;
    this.defense = 25;
  }
}
let daemon = new Daemon("Dam", "Daemon");

class Undead extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 40;
    this.defense = 10;
  }
}
let undead = new Undead("Und", "Undead");

class Zombie extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 10;
    this.defense = 40;
  }
}
let zombie = new Zombie("Zomb", "Zombie");

// console.log(character.setName("Ab"));
// console.log(character.setType("Magiciann"));
// console.log(character);
// console.log(zombie);
// console.log(bowerman);
// zombie.levelUp();
zombie.damage(5);
// console.log(zombie);
