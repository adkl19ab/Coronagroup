
class client {
    constructor (name, password, company, email, address, usertype) {
        this.name = name;
        this.password = password;
        this.company = company;
        this.email = email;
        this.address = address;
        this.usertype = usertype;

    }
}

var client1 = new client("Isak", "1234", "CBS", "Johanlundtoft@gmail.com", "Gernersgade 26, 1319 Kbh K", "1");

console.log(client1);

