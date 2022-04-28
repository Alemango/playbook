const trendingTopic = {
    hashtag: '#nodeJS',
    mentions: 3672,
    retweets: 589,
    likes: 789,
    location: 'México',
    date: '2022-04-01',
    principalUser: '@nodejs',
    lastMention: '@alemango',
    getGeneralInfo: function(){
        return `${this.hashtag} was mentioned ${this.mentions} times, retweets ${this.retweets} times and liked ${this.likes} times`
    },
    getLastMention: function(){
        return `Last mention by: ${this.lastMention}`
    }
}

console.log(trendingTopic.getGeneralInfo());
console.log(trendingTopic.getLastMention());