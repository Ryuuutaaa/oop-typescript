describe("Instance Of", () => {

     class Employee {}
     class Manager {}

    const budi = new Employee();
    const eko = new Manager();

    it("Should have problem using type of" , () => {
        console.info(typeof budi);
        console.info(typeof eko);
    })

    it("should support Instanceoff", () => {
        expect(budi instanceof Employee).toBe("true");
        expect(budi instanceof Manager).toBe("false");

        expect(eko instanceof Manager).toBe("true");
        expect(eko instanceof Employee).toBe("false");
    })
}) 