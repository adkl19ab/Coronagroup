
class client {
    constructor (name, company, email, address, usertype) {
        this.name = name;
        this.company = company;
        this.email = email;
        this.address = address;
        this.usertype = usertype;

    }
}

var client1 = new client ("Isak", "CBS", "Johan@Lundtoft.com", "Gernersgade 16, 1319 Kbh K", "1");

console.log(client1);

