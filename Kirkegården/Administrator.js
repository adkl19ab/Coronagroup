
class administrator {
    constructor (name, password, email, usertype,) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.usertype = usertype;
    }
}

var administrator1 = new administrator("Isak", "1234", "Johanlundtoft@gmail.com", "0");

console.log(administrator1);