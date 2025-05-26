describe('Polymorphis', () => {
    class Employee{
        constructor(public name : String){

        }
    }

    class Manager extends Employee{}

    class VicePresident extends Manager{ }

    function sayHello(employee : Employee): void{
        console.info(`Hello ${employee.name}`);
    }


    it("should support", () => {
        let employee : Employee = new Employee('Rafi');
        console.info(employee); 

        employee = new Manager("Rafi");
        console.info(employee);

        employee = new VicePresident("Rafi");
        console.info(employee);

        sayHello(employee = new Employee("Rafi"));
        sayHello(employee = new Manager("Rafi"));
        sayHello(employee = new VicePresident("Rafi"));
    })
})