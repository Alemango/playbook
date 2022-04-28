const issues = {
    title: "Error in console",
    repositoryNameAssociated: "Buscador de repos",
    status: "open",
    numberOfComments: 10,
    labels: ["bug", "enhancement"],
    author: "alemango",
    dateCreated: "2020-02-10",
    lastUpdated: "2020-02-15",
    getTitleAndAuthor: function(){
        return `${this.title} by ${this.author}`
    },
    getGeneralInfo: function(){
        return `This repository ${this.repositoryNameAssociated} was created by ${this.author}`
    }
}

console.log("Título: " + issues.getTitleAndAuthor());
console.log("Información General: " + issues.getGeneralInfo());