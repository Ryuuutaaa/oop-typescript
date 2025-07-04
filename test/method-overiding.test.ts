describe("Methond Overriding", () => {
    class Employee {
        name : string;

        constructor(name : string){
            this.name = name;
        }

        sayHello(name : string) : void{
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee{
        sayHello(name: string): void {
            super.sayHello(name);
            console.info("At Manager right now");
        }
    }


    it("should supprot", () => {
        const employee = new Employee("Ryta");
        employee.sayHello("Rafi");

        const manager = new Manager("Ryuna");
        manager.sayHello("Rafi")
    })
})