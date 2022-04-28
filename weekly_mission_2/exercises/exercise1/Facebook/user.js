const user = {
    user: "Juan Alemán",
    username: "alemango__",
    bio: "Ingeniero Biomédico",
    age: "25",
    location: 'México',
    registered: '2020-02-10',
    friends: 320,
    getUserInfo: function(){
        return `Cuenta de ${this.user} (${this.username})`
    },
    getBio: function(){
        return `${this.user} con ${this.age} años de edad es ${this.bio} vive en ${this.location}`
    }
}

console.log(user.getUserInfo());
console.log(user.getBio());