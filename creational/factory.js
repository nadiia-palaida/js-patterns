class NewCar {
    constructor(fuel, range, dispersal) {
        this.fuel = fuel
        this.range = range
        this.dispersal = dispersal
    }
}

class CarFactory {
    create(fuel = 'diesel') {
        if(fuel === 'diesel') {
            return new NewCar(fuel, 400, 12)
        }
        if(fuel === 'petrol') {
            return new NewCar(fuel, 600, 10)
        }
        if(fuel === 'electric') {
            return new NewCar(fuel, 350, 6)
        }
    }
}

const factory = new CarFactory()

const renaultDiesel = factory.create('diesel')
const teslaElectric = factory.create('electric')

console.log('renaultDiesel', renaultDiesel)
console.log('teslaElectric', teslaElectric)