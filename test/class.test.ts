describe("Class", () => {
  it("Should can crate class", () => {
    class Costumer {
      
      constructor(){
        console.log("Crate new costumer");
      }
    }

    class Order {}

    const costumer: Costumer = new Costumer();
    const order: Order = new Order();
  });
});
