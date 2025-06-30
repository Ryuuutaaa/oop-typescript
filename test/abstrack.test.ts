describe("Abstrack class", () => {
    


    abstract class Customer {
        readonly id : number; 
        abstract name : string;

        constructor(id : number) {
            this.id = id; 
        }

        hello(){
            console.info(`hello`);
        }

        abstract sayHello(nama : string) : void;
    }

    class RegularCustomer extends Customer {
        name : string; 

        constructor(id : number, name : string) {
            super(id);
            this.name  = name;
        }

        sayHello(name: string): void {
            console.info(`helo ${name}, my name is ${this.name}`)
        }
    }

    it("shoud supprot", () => { 

        const cosumterone = new RegularCustomer(1, "Eko"); 
        cosumterone.sayHello("budi");

    })


})