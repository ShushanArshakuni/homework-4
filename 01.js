class University {
  constructor() {
    this.students = [];
    this.teachers = [];
  }
  addMember(member) {
    if (member.role === "teacher") {
      this.teachers.push(member);
    } else if (member.role === "student") {
      this.students.push(member);
    } else {
      return "wrong member";
    }
  }

  removeMember(member) {
    if (member.role === "teacher") {
      let indexOfRemovingMember = this.teachers.indexOf(member);
      this.teachers.splice(indexOfRemovingMember, 1);
    }
    if (member.role === "student") {
      let indexOfRemovingMember = this.students.indexOf(member);
      this.students.splice(indexOfRemovingMember, 1);
    }
  }
  startLesson() {
    for (let item of this.students) {
      item.energy -= 2;
    }
    for (let item of this.teachers) {
      item.energy -= 5;
    }
  }
}
let university = new University();
// university.startLesson();

class UniversityMember {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.role = props.role;
    this.energy = 24;
    this.id = props.id;
  }
  info() {
    let pros = {
      name: this.name,
      age: this.age,
      role: this.role,
      energy: this.energy,
      id: this.id,
    };
    return pros;
  }
}

let member = new UniversityMember({
  name: "name",
  age: "age",
  role: "role",
  id: "id",
});

class Student extends UniversityMember {
  constructor(props) {
    props.role = "student";
    super(props);
  }
}
let student1 = new Student({
  name: "Ann",
  age: "18",
  id: 1,
});
let student2 = new Student({
  name: "George",
  age: "18",
  id: 2,
});

class Teacher extends UniversityMember {
  constructor(props) {
    props.role = "teacher";
    super(props);
  }
}

let teacher1 = new Teacher({
  name: "Marry",
  age: "38",
  id: 1,
});

let teacher2 = new Teacher({
  name: "Tom",
  age: "35",
  role: "teacher",
  energy: 24,
  id: 2,
});

university.addMember(teacher1);
university.addMember(teacher2);
university.addMember(student1);
university.addMember(student2);

// university.startLesson();
console.log(university.students);
// console.log(university.teachers);
// university.startLesson();
// console.log(university.students);
// console.log(university.teachers);
university.removeMember(student1);
// console.log(university.teachers);
console.log(university.students);
