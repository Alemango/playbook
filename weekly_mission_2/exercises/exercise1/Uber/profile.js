const profile = {
    name: 'Juan Alemán',
    username: 'alemango',
    registered: '2020-02-10',
    lastTravel: '2020-02-15',
    paymentMethod: 'Credit Card',
    rate: '5',
    destiny: 'Auditorio Nacional',
    cost: '$100',
    getGeneralInfo: function(){
        return `${this.name} is a ${this.rate} star user`
    },
    getTravelInfo: function(){
        return `${this.name} is going to ${this.destiny} on ${this.lastTravel} for ${this.cost}`
    }
}

console.log(profile.getGeneralInfo());
console.log(profile.getTravelInfo());