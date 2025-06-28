class Employee {
    constructor (name, department) {
        this.name = name;
        this.department = department;
    }
    describe(){
        return `${this.name} works in ${this.department}.`;
    }
}

class Manager extends Employee {
    constructor (name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    describe(){
        return `${this.name} manages a team of ${this.teamSize} in ${this.department}.`
    }
}

const emp1 = new Employee("Jim Halpert", "Sales");
const emp2 = new Employee("Creed Bratton", "Quality Assurance");
const emp3 = new Employee("Angela Martin", "Accounting");
const mngr1 = new Manager("Micheal Scott", "Scranton, PA", 15);

class Company {
    constructor (employees) {
        this.employees = [];
    }
    
    addEmployee(employee){
        this.employees.push(employee);
    }

    listEmployees(employee){
        this.employees.forEach (emp => {
            console.log(employee.describe());
        });
    }
}
