class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, position, department) {
        const valid =
            [name, position, department]
                .map((el) => Boolean(el))
                .includes(false) || salary <= 0
                ? false
                : true;

        if (valid) {
            if (this.departments[department]) {
                this.departments[department].push({ name, position, salary });
            } else this.departments[department] = [{ name, position, salary }];

            return `New employee is hired. Name: ${name}. Position: ${position}`;
        } else {
            throw new TypeError('Invalid input!');
        }
    }

    bestDepartment() {
        const bestDepartment = { average: 0 };

        for (const d in this.departments) {
            const currentAverage =
                this.departments[d].reduce((a, c) => (a += c.salary), 0) /
                this.departments[d].length;

            if (currentAverage > bestDepartment.average) {
                bestDepartment.average = currentAverage;
                bestDepartment.department = d;
            }
        }

        const sortedEmployees = this.departments[bestDepartment.department]
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .reduce((a, c) => {
                a.push(`${c.name} ${c.salary} ${c.position}`);
                return a;
            }, [])
            .join('\n');

        return `Best Department is: ${
            bestDepartment.department
        }\nAverage salary: ${bestDepartment.average.toFixed(
            2
        )}\n${sortedEmployees}`;
    }
}

const c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());

// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect
// Stanimir 2000 engineer
// Pesho 1500 electrical engineer
// Slavi 500 dyer
