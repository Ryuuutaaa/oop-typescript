describe("Properties", () => {
    
    class Customer{
        readonly id : number;
        name: string
        age? : number


        constructor(id : number, name : string, age : number){
            this.id = id;
            this.name = name;
            this.age = age;
        }
    }

    it("Sholud can have properties", () => {

        const costumer = new Customer(1, "Rafi", 2);

        console.info(costumer);
        console.info(costumer.id)
        console.info(costumer.name);
        console.info(costumer.age);

    })
})