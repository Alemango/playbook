//GitHub - Issues
class Issues {
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated) {
        this.title = title;
        this.repositoryNameAssociated = repositoryNameAssociated;
        this.status = status;
        this.numberOfComments = numberOfComments;
        this.labels = labels;
        this.author = author;
        this.dateCreated = dateCreated;
        this.lastUpdated = lastUpdated;
    }
    getTitleAndAuthor() {
        return `${this.title} by ${this.author}`;
    }
    getGeneralInfo() {
        return `This repository ${this.repositoryNameAssociated} was created by ${this.author}`;
    }
}

const issue = new Issues('Issue 1', 'Repository 1', 'Open', 10, ['bug', 'enhancement'], 'Author 1', '01/01/2020', '01/01/2020');

//GitHub - pullRequest
class pullRequest {
    constructor(title, branchName, dateCreated, status, repositoryNameAssociated){
        this.title = title;
        this.branchName = branchName;
        this.dateCreated = dateCreated;
        this.status = status;
        this.repositoryNameAssociated = repositoryNameAssociated;
    }
    getStatus(){
        return `${this.status}`
    }
    getTitleAndAuthor(){
        return `${this.title}`
    }
}

const pullRequests = new pullRequest('Pull Request 1', 'branch1', '01/01/2020', 'Open', 'Repository 1');

//GitHub - repo
class Repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close) {
        this.name = name;
        this.author = author;
        this.language = language;
        this.numberOfCommits = numberOfCommits;
        this.stars = stars;
        this.forks = forks;
        this.issues_open = issues_open;
        this.issues_close = issues_close;
    }
    getTotalIssues() {
        return this.issues_open + this.issues_close;
    }
    getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`;
    }
}

const repos = new Repo('Repo 1', 'Author 1', 'JavaScript', 10, 10, 10, 10, 10);

//Twitter - user
class twitterUser {
    constructor(user, username, bio, age){
        this.user = user;
        this.username = username;
        this.bio = bio;
        this.age = age;
    }
    getUserInfo(){
        return `Cuenta de ${this.user} (${this.username})`
    }
    getBio(){
        return `${this.user} con ${this.age} años de edad es ${this.bio}`
    }
}

const userT = new twitterUser('Juan Alemán', 'alemango__', 'Ingeniero Biomédico', 25);

//Twitter - hashtag
class hashtag {
    constructor(hashtag, mentions, firstUser, lastMention){
        this.hashtag = hashtag;
        this.mentions = mentions;
        this.firstUser = firstUser;
        this.lastMention = lastMention;
    }
    getGeneralInfo(){
        return `${this.hashtag} was mentioned ${this.mentions} times, first mention by ${this.firstUser} and last mention by ${this.lastMention}`
    }
}

const hashtagT = new hashtag('#nodeJS', 107, 'nodejs', 'alemango__');

//Twitter - trendingTopic
class trendingTopic {
    constructor(hashtag, mentions, retweets, likes, location, date, principalUser, lastMention){
        this.hashtag = hashtag;
        this.mentions = mentions;
        this.retweets = retweets;
        this.likes = likes;
        this.location = location;
        this.date = date;
        this.principalUser = principalUser;
        this.lastMention = lastMention;
    }
    getGeneralInfo(){
        return `${this.hashtag} was mentioned ${this.mentions} times, retweets ${this.retweets} times and liked ${this.likes} times`
    }
    getLastMention(){
        return `Last mention by: ${this.lastMention}`
    }
}

const trendTopic = new trendingTopic('#nodeJS', 107, 100, 170, 'Madrid', '01/01/2020', 'nodejs', 'alemango__');

//Facebook - user
class facebookUser {
    constructor(user, username, bio, age, location, registered, friends){
        this.user = user;
        this.username = username;
        this.bio = bio;
        this.age = age;
        this.location = location;
        this.registered = registered;
        this.friends = friends;
    }
    getUserInfo(){
        return `Cuenta de ${this.user} (${this.username})`
    }
    getBio(){
        return `${this.user} con ${this.age} años de edad es ${this.bio} vive en ${this.location}`
    }
}

const userF = new facebookUser('Juan Alemán', 'alemango__', 'Ingeniero Biomédico', 25, 'México', '01/01/2020', 220);

//Facebook - biography
class biography {
    constructor(name, lastName, age, location, education, hobbies, work, link){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
        this.education = education;
        this.hobbies = hobbies;
        this.work = work;
        this.link = link;
    }
    getBio(){
        return `${this.name} ${this.lastName} tiene ${this.age} años de edad, vive en ${this.location}, estudia ${this.education} y sus hobbies son: ${this.hobbies[0]}, ${this.hobbies[1]}, ${this.hobbies[2]}`
    }
}

const bio = new biography('Juan', 'Alemán', 25, 'México', 'Ingeniero Biomédico', ['Música', 'Béisbol', 'Programar'], 'Ingeniero Biomédico', 'https://www.facebook.com/chuchoaleman');

//Facebook - post
class post {
    constructor(title, date, time, content, likes, comments, shares, reactions){
        this.title = title;
        this.date = date;
        this.time = time;
        this.content = content;
        this.likes = likes;
        this.comments = comments;
        this.shares = shares;
        this.reactions = reactions;
    }
    getGeneralInfo(){
        return `${this.title} posted on ${this.date} at ${this.time} by ${this.author}`
    }
    getReactions(){
        return `${this.reactions} reactions, ${this.shares} shares and ${this.comments.length} comments`
    }
}

const posts = new post('Graduación', '01/01/2020', '12:00', 'Me gradué :D', 180, ["Felicidades", "Qué alegría"], 10, 201);

//Uber - profile
class profile {
    constructor(name, username, registered, lastTravel, paymentMethod, rate, destiny, cost){
        this.name = name;
        this.username = username;
        this.registered = registered;
        this.lastTravel = lastTravel;
        this.paymentMethod = paymentMethod;
        this.rate = rate;
        this.destiny = destiny;
        this.cost = cost;
    }
    getGeneralInfo(){
        return `${this.name} is a ${this.rate} star user`
    }
    getLastTravel(){
        return `${this.name} is going to ${this.destiny} on ${this.lastTravel} for ${this.cost}`
    }
}

const profileU = new profile('Juan Alemán', 'alemango__', '01/01/2020', '01/01/2020', 'Efectivo', 5, 'Madrid', '$100');

//Uber - travel
class travel {
    constructor(travel, destiny, cost, car, driver, timeToDestiny, paymentMethod, pool){
        this.travel = travel;
        this.destiny = destiny;
        this.cost = cost;
        this.car = car;
        this.driver = driver;
        this.timeToDestiny = timeToDestiny;
        this.paymentMethod = paymentMethod;
        this.pool = pool;
    }
    getGeneralInfo(){
        return `${this.travel} is going to ${this.destiny} for ${this.cost}`
    }
}

const travelU = new travel('Juan Alemán', 'Madrid', '$100', 'Toyota', 'Juan Alemán', '01/01/2020', 'Efectivo', false);

console.log(issue);