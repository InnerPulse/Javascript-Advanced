function extend() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return (
                this.constructor.name +
                '(' +
                Object.keys(this)
                    .map((k) => `${k}: ${this[k]}`)
                    .join(', ') +
                ')'
            );
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

/////////////////////////////////////// version 2 below ///////////////////////////////////////

function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString() {
            let inheritToString = super.toString().slice(0, -1);
            return inheritToString + `, subject: ${this.subject})`;
        }
    }
    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            let inheritToString = super.toString().slice(0, -1);
            return inheritToString + `, course: ${this.course})`;
        }
    }

    return {
        Person,
        Student,
        Teacher,
    };
}
