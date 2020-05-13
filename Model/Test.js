/*


//Vi forsøgte her at bruge passport pluginnet til at få user-authentification til at fungere.

const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const bcrypt = require('bcrypt')

//Vi gjorde her brug af BCRYPT og Passport som plugin, vi forsøgte dog ikke med eksterne accounts som Google, men blot vores eget i passport-Local.

function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = async (email, password, done) => {
        const user = getUserByEmail(email)
        if (user == null) {
            return done(null, false, { message: 'No user with that email' })
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Password incorrect' })
            }
        } catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize



// https://github.com/WebDevSimplified/Nodejs-Passport-Login/blob/master/server.js

 */



//Nedenstående er et Testmiljø som vi har brugt til at forsøge at implementere tokens.
/*
//TESTMILJØ
const passport = require('passport-local')
const bcrypt = require('bcrypt');

const initializePassport = require('../Model/Test.js');
initializePassport(passport)


router.post('/client_create', async (req,res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.client_password, 10)

        let dummy = new User(
            req.body.client_name,
            req.body.client_lastname,
            hashedPassword,
            req.body.client_Email,
            2
        )

        console.log(dummy);
        dummy.displayUsername();
        dummy.addUser();
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
});

router.post('/auth', function (request, response) {
    var Email = request.body.Email;
    var password = request.body.password;

    if (Email && password) {
        connection.query('SELECT * FROM users WHERE Email = ? AND password = ?', [Email, password], function (error, results, fields) {
            if (results.length > 0) {
                console.log('succesfully logged in');


                const token = jwt.sign({ user: User.user }, secret);
                response.cookie('jwt-token', token);
                response.redirect('/consultants');


                debugger;
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});
*/

