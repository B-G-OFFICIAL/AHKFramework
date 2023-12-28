const connection = require('../SRC/db');

var tempAdmin = (req, res, next) => {
    if(req.session.userId){
        let id = req.session.userId;
        let sql_user = `SELECT * FROM users WHERE id = ?`;
        let sql_users_data = `SELECT * FROM users`;
        let sql_contact_message= `SELECT * FROM contact_us`;
        connection.query(sql_user, [id], (err, data1) => {
            if(err){
                res.send(`error on database`);
            }
            else{
                connection.query(sql_users_data, (err, data2) => {
                    if(err){
                        res.send(`error on database`);
                    }
                    else{
                        connection.query(sql_contact_message, (err, data3) => {
                            if(err){
                                res.send(`error on database`);
                            }
                            else{
                                connection.query(sql_user, [id], (err, data4) => {
                                    if(err){
                                        res.send(`error on database`);
                                    }
                                    else{
                                        res.render('admin', { 
                                            UserData : data1, 
                                            UsersData : data2, 
                                            ContactMessages : data3, 
                                            ProfileData : data4 
                                        });
                                    }
                                })
                            }
                        })
                        
                    }
                })
            }
        })
    }
    else{
        res.render(`404`);
    }
}
var addAdmin = (req, res, next) => {
    res.render('register');
}
var addAdminData = (req, res, next) => {
    if(req.session.userId){
        let { reg_name, reg_email, reg_phone, reg_pass } = req.body;

        let sql_contactdata = `INSERT INTO users(name, email, phone, password) VALUES(?, ?, ?, ?)`;
        let user_data_t_f = `SELECT * FROM users WHERE phone = ? OR email = ?`;
        connection.query(user_data_t_f, [reg_phone, reg_email], (err, data) => {
            if(err){
                res.render('register', { errMessage: 'Server error on Data receive' });
            }
            else if (data.length > 0 && (data[0].phone === reg_phone || data[0].email === reg_email)) {
                res.render('register', { errMessage: 'phone or email already register' });
            }
            else{
                connection.query(sql_contactdata, [reg_name, reg_email, reg_phone, reg_pass], (err, data) => {
                    if(err){
                        console.log(`error in Registering data`);
                        res.render('register', { errMessage: 'Error on Data receive' });
                    }
                    else{
                        console.log(data);
                        res.render('register', { successMessage: 'Data Added successfully' });
                    }
                });
            }
        });
    }
    else{
        res.render(`404`);
    }
}

var Dashboard = (req, res, next) => {
    if(req.session.userId){
        let id = req.session.userId;
        let sql_user = `SELECT * FROM users WHERE id = ?`;
        connection.query(sql_user, [id], (err, data) => {
            res.render('dashboard', { UserData : data });
        })
    }
    else{
        res.render(`404`);
    }
}

var Users = (req, res, next) => {
    if(req.session.userId){
        let sql_users_data = `SELECT * FROM users`;
        connection.query(sql_users_data, (err, data) => {
            if(err){
                res.send(`error on database`);
            }
            else{
                res.render('users', { UsersData : data });
            }
        })
    }
    else{
        res.render(`404`);
    }
}

var DeleteUsers = (req, res, next) => {
    let admin_id = req.body.admin_id;
    let sql_remove_admin = `DELETE FROM users WHERE id = ?`;
    connection.query(sql_remove_admin, [ admin_id ], (err, data) => {
        if(err){
            console.log(`error on delete admin`);
        }
        console.log(`admin remove succesfully`);
        res.redirect('/admin');
    });
}

var Messages = (req, res, next) => {
    if(req.session.userId){
        let sql_contact_message= `SELECT * FROM contact_us`;
        connection.query(sql_contact_message, (err, data) => {
            if(err){
                res.send(`error on database`);
            }
            else{
                res.render('messeages', { ContactMessages : data });
            }
        })
    }
    else{
        res.render(`404`);
    }
}

var DeleteMessages = (req, res, next) => {
    let message_id = req.body.message_id;
    let sql_remove_admin = `DELETE FROM contact_us WHERE id = ?`;
    connection.query(sql_remove_admin, [message_id], (err, data) => {
        if(err){
            console.log(`error on delete contact message`);
        }
        console.log(`contact message remove succesfully`);
        res.redirect('/admin');
    });
}

var Profile = (req, res, next) => {
    if(req.session.userId){
        let id = req.session.userId;
        let sql_user = `SELECT * FROM users WHERE id = ?`;
        connection.query(sql_user, [id], (err, data) => {
            if(err){
                res.send(`error on database`);
            }
            else{
                res.render('profile', { ProfileData : data });
            }
        })
    }
    else{
        res.render(`404`);
    }
}

var editProfile = (req, res, next) => {
    let { profile_id, profile_name, profile_email, profile_phone, profile_password } = req.body;

    let update_data = `UPDATE users SET name = ?, email = ?, phone = ?, password = ? WHERE id = ?`;
    connection.query(update_data,[ profile_name, profile_email, profile_phone, profile_password, profile_id ], (err, data) => {
        if(err){
            res.redirect('/admin?UrlMessage=Data update error');
        }
        else{
            res.redirect('/admin?UrlMessage=Data update Succesfully');
        }
    });
}

module.exports = { tempAdmin, addAdmin, addAdminData, Dashboard, Users, DeleteUsers, Messages, DeleteMessages, Profile, editProfile }