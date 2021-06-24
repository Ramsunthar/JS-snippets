class Employee {
    constructor(name){
        this.name =name;
    }

    banner =() => console.log(this.name + ' is an employee');
}

class Principal extends Employee {
    constructor(name,section){
        super(name);
        this.section=section;
    }

    banner =() => console.log(this.name + ' is an Employee and Principal of '+ this.section);
}

const Emp1 = new Employee("Connor");
const Emp2 = new Principal("Edward", "VNC");

Emp1.banner();
Emp2.banner();

Emp2.banner =() => console.log("This function is overridden");
Emp2.banner();



