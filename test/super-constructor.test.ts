describe("Supser constructor", () => {


    class Person {
        name : string;

        constructor(name : string){
            this.name = name;
        }
    }

    class Employee extends Person{
        departement :  string;

        constructor(name : string, departement : string){
            super(name);

            this.departement = departement;
        }
    }


  
    it("Should support", () => {

        const employee = new Employee("Rafi", "Widikta");

        console.info(employee.name);
        console.info(employee.departement)
        
    })

})