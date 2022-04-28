const user = {
    user: "Juan Alemán",
    username: "alemango__",
    bio: "Ingeniero Biomédico",
    age: "25",
    getUserInfo: function(){
        return `Cuenta de ${this.user} (${this.username})`
    },
    getBio: function(){
        return `${this.user} con ${this.age} años de edad es ${this.bio}`
    },
}

console.log(user.getUserInfo());
console.log(user.getBio());
