const biography = {
    name: "Juan",
    lastName: "Alemán",
    age: 25,
    location: "México",
    education: "Ingeniería Biomédica",
    hobbies: ["Música", "Beisbol", "Programación"],
    work: "Ingeniero Biomédico",
    link: "https://www.facebook.com/chuchoaleman",
    getBio: function(){
        return `${this.name} ${this.lastName} tiene ${this.age} años de edad, vive en ${this.location}, estudia ${this.education} y sus hobbies son: ${this.hobbies[0]}, ${this.hobbies[1]}, ${this.hobbies[2]}`
    }
}

console.log(biography.getBio());