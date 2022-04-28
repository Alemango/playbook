const post = {
    title: "Graduación de la carrera",
    date: "2020-02-10",
    time: "10:00",
    content: "Hola, estoy graduando la carrera de Ingeniería Biomédica en la UAM",
    photo: true,
    reactions: 203,
    comments: ["Orgulloso", "Felicidades", "Bien hecho"],
    privacity: "public",
    shares: 5,
    author: "alemango",
    getGeneralInfo: function(){
        return `${this.title} posted on ${this.date} at ${this.time} by ${this.author}`
    },
    getReactions: function(){
        return `${this.reactions} reactions, ${this.shares} shares and ${this.comments.length} comments`
    }
}

console.log(post.getGeneralInfo());
console.log(post.getReactions());