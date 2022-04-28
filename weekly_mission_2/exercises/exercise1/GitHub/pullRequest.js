const pullRequest = {
    title: 'Fix the bug',
    branchName: 'master',
    dateCreated: '2020-02-10',
    status: 'open',
    repositoryNameAssociated: 'Buscador de repos',
    getStatus: function(){
        return `${this.status}`
    },
    getTitleAndAuthor: function(){
        return `${this.title}`
    }
};

console.log("Título: " + pullRequest.getTitleAndAuthor());
console.log("Estado: " + pullRequest.getStatus());