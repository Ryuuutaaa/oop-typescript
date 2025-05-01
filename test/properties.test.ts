describe("Properties", () => {
    
    class Customer{
        readonly id : number = 2;
        name: string = "Ryuta";
        age? : number = 10


        constructor(id : number, name : string, age : number){
            this.id = id;
            this.name = name;
            this.age = age;
        }

        sayHello(name : string){
            console.info(`Hello ${name}, my name is ${name}`);
        }
    }

    it("Sholud can have properties", () => {

        const costumer = new Customer(10,"rau", 23);

        console.info(costumer);
        console.info(costumer.id)
        console.info(costumer.name);
        console.info(costumer.age);

        costumer.sayHello("Rafi")

    })
})