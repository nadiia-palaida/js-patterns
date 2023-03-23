class Car2 {
    constructor(model, price, headlights, seats) {
        this.model = model
        this.price = price
        this.headlights = headlights
        this.seats = seats
    }

    make() {
        return new Car2(this.model, this.price, this.headlights, this.seats)
    }
}