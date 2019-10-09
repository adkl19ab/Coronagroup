
class consultant {
    constructor (name, password, skilltag, email, usertype) {
        this.name = name;
        this.password = password;
        this.skilltag = skilltag;
        this.email = email;
        this.usertype = usertype;
    }
}

var consultant1 = new consultant("Isak","1234","HTML","Johanlundtoft@gmail.com","2");

console.log(consultant1);