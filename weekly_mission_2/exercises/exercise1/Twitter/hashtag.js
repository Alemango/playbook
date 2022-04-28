const hashtag = {
    hashtag: '#nodeJS',
    mentions: 3672,
    firstUser: '@nodejs',
    lastMention: '@alemango',
    getGeneralInfo: function(){
        return `${this.hashtag} was mentioned ${this.mentions} times, first mention by ${this.firstUser} and last mention by ${this.lastMention}`
    }
}

console.log(hashtag.getGeneralInfo());