const mysql = require('mysql2');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'ahkframework'
});


connection.connect((err, res) => {
    if(err){
        console.log('Error on connect database');
    }
    else{
        console.log('Database connection succesfully');
    }
});

module.exports = connection;