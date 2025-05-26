describe('Polymorphis', () => {
    class Employee{
        constructor(public name : String){

        }
    }

    class Manager extends Employee{}

    class VicePresident extends Manager{ }


    it("should support", () => {
        let employee : Employee = new Employee('Rafi');
        console.info(employee); 

        employee = new Manager("Rafi");
        console.info(employee);

        employee = new VicePresident("Rafi");
        console.info(employee);
    })
})