describe("Properties", () => {
    
    class Customer{
        readonly id : number = 2;
        name: string = "Ryuta";
        age? : number = 10


        constructor(id : number, name : string){
            this.id = id;
            this.name = name;
        }

        sayHello(name : string){
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    it("Sholud can have properties", () => {

        const costumer = new Customer(10,"rau",);

        console.info(costumer);
        console.info(costumer.id)
        console.info(costumer.name);
        console.info(costumer.age);


    })

    it("should can have method", () => {
        const costumer =  new Customer(1, "Eko")

        costumer.sayHello("Rafi")
    })
})