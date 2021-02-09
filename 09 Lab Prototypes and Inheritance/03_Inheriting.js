function extend() {
  class Person {
    constructor(name, email) {
      (this.name = name), (this.email = email);
    }

    toString() {
        return this.constructor.name + ' (' + Object.keys(this).map(k => `${k}: ${this[k]}`).join(', ') + ')';           
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email), (this.subject = subject);
    }
  }

  class Student extends Person {
    constructor(name, email, course) {
      super(name, email), (this.course = course);
    }
  }

  return { Person, Teacher, Student };
}
