const travel = {
    travelNumber: 13,
    destiny: 'Auditorio Nacional',
    cost: '$100',
    car: 'Mercedes',
    driver: 'Paco Pérez',
    timeToDestiny: '1h',
    paymentMethod: 'Credit Card',
    pool: false,
    getTravelInfo: function(){
        return `${this.travelNumber} - ${this.destiny} - ${this.cost} - ${this.car} - ${this.driver} - ${this.timeToDestiny} - ${this.paymentMethod} - ${this.pool}`
    }
}

console.log(travel.getTravelInfo());