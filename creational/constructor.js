class Car {
    constructor(brand, year, number) {
        this.brand = brand
        this.year = year
        this.number = number
    }

    drive() {
        return `${this.brand} ${this.number} is driving`
    }

    stop() {
        return `${this.brand} ${this.number} stopped`
    }

    getManufactureYear() {
        return `Year of manufacture of the car ${this.brand} ${this.number} ${this.year}`
    }
}

const renaultCar = new Car('Renault', '2016', 'ВС2058')

console.log(renaultCar.drive())
console.log(renaultCar.stop())
console.log(renaultCar.getManufactureYear())