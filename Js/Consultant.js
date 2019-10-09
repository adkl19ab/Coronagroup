
class consultant {
    constructor (name, password, skilltag, email, type) {
        this.name = name;
        this.password = password;
        this.skilltag = skilltag;
        this.email = email;
        this.type = type;
    }
}

var consultant1 = new consultant("Caroline", "1234", "HTML", "Test@Caroline.com", 2);

console.log(consultant1);