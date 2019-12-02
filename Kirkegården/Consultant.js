let consultants = [];

class consultant {
    constructor (name, consultantPassword, skilltag, email, usertype) {
        this.name = name;
        this.consultantPassword = password;
        this.skilltag = skilltag;
        this.email = email;
    }
}

if(localStorage.getItem('consultants') == null) {
    consultants.push(new consultant('consultant1','password1','HTML','test1@consultant.com'));
    consultants.push(new consultant('consultant2','password2','CSS','test2@consultant.com'));
    consultants.push(new consultant('consultant3','password3','Javascript','test3@consultant.com'));

    localStorage.setItem('consultants', JSON.stringify(consultants))
}                                                                                                    