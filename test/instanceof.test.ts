describe("Instance Of", () => {
    it("Should have problem using type of" , () => {
        class Employee {}
        class Manager {}

        const budi = new Employee();
        const eko = new Manager();

        console.info(typeof budi);
        console.info(typeof eko);
    })
})