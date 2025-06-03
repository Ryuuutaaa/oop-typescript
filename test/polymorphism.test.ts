describe('Polymorphis', () => {
    class Employee{
        constructor(public name : String){

        }
    }

    class Manager extends Employee{}

    class VicePresident extends Manager{ }

    function sayHello(employee : Employee): void{
        if(employee instanceof VicePresident){
            const vp = employee as VicePresident; 
           console.info(`heelo vp ${vp.name}`);

        }else if(employee instanceof Manager){
            const manager = employee as Manager; 
            console.info(`heelo manajer ${manager.name}`)

        }else{
            console.info(`heelo employee ${employee.name}`)
        }
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

    it("should supprot method parameter plymorephism", () => {
        sayHello(new Employee("Eko"))
        sayHello(new Manager("budi"))
        sayHello(new VicePresident("Joko"))
    })
})