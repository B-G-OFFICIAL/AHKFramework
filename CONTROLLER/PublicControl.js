const connection = require('../SRC/db');
const fs = require('fs');

var Home = (req, res, next) => {
    res.render('index');
}

var About = (req, res, next) => {
    res.render('about');
}

var Contact = (req, res, next) => {
    res.render('contact');
}

var AddContact = (req, res, next) => {
    let { contact_name, contact_email, contact_mobile, contact_information } = req.body;

    let sql_addcontact = `INSERT INTO contact_us(contact_name, contact_email, contact_mobile, contact_information) VALUES(?, ?, ?, ?)`;
    connection.query(sql_addcontact, [contact_name, contact_email, contact_mobile, contact_information], (err, data) => {
        if(err){
            console.log(`error in inserting contact data`);
            res.redirect('contact?UrlMessageData=Error on Data receive');
        }
        else{
            console.log(data);
            res.redirect('contact?UrlMessageData=Contact with admin successfully');
        }
    });
}

var CreateFile = (req, res, next) => {
    let fn = Date.now();
    req.session.filename = fn;
    res.render('createfile', {FileName : fn});
}

var AddScript = (req, res, next) => {
    const screenclickData = req.body.AddDataAHK;
    const FileName = req.session.filename;
    
    fs.appendFile(`./PUBLIC/AHKFILE/${FileName}.ahk`, screenclickData, 'utf8', (err) => {
      if (err)
        {
        console.error(err);
        res.status(500).send('Error appending to file');
        }
    else
        {
        console.log('Data appended successfully');
        }
    });
}


var Login = (req, res, next) => {
    res.render('login');
}

var Authentication = (req, res, next) => {
    let { user, pass } = req.body;
    let sql_login = `SELECT * FROM users WHERE (phone = ? OR email = ?) AND password = ?`;
    connection.query(sql_login, [user, user, pass], (err, data) => {
        if(err){
            res.redirect('/login?error=An Error Occur On Database')
        }
        else{
            if(data.length === 1) {
                if(data[0].type === 'Admin'){
                req.session.userId = data[0].id;
                res.redirect(`/admin`)
                }
                else{
                    res.redirect(`/`)
                }
            }
            else{
                res.redirect(`/login?error=Wrong Username or Password`)
            }
        }
    });
}

var Logout = (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error destroying session:", err);
            res.send('logout UnSuccesfull');
        }
        res.redirect('login');
    });
}

module.exports = { Home, About, Contact, AddContact, CreateFile, AddScript, Login, Authentication, Logout }