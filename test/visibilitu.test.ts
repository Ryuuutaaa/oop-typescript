describe("Visibility", () => {

    class Counter {
        private counter : number = 0;

        public increment() : void{
            this.counter++;
        }

        public getCounter() : number {
            return this.counter;
        }
    }


    it("Should Visibity", () => {
        const counter =  new Counter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    })
})
