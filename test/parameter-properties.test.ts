describe("Parameter Properties", () => {


    class Person {
        constructor(public name : string){
        }
    }

    it("Should Support", () => {
        const person = new Person("Rafi");
        console.info(person.name);

        person.name = "Ryuta";
        console.info(person.name);
    })
})