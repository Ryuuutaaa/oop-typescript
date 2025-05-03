describe("Inheritance", () => {



    // parrent class
    class Employee {
        name : string;

        constructor(name : string){
            this.name = name
        }
    }

    class Managet extends Employee {

        

    }

    class Director extends Managet{

    }

    it("should support", () => {

        const employee = new Employee("Rafi");
        console.info(employee);

        const manager = new Managet("Ryuta");
        console.info(manager);

        const derector = new Director("Ryuna");
        console.info(derector);

    })



})