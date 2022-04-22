const sql = require('mssql/msnodesqlv8');

//db confg
var dbConn={
    server: '213.63.232.54', //ip address of the mssql database
    user: 'estagio_dev', //username to login to the database
    password: '12345678', //password to login to the database
    database: 'AnturioGlobal_DEV', //the name of the database to connect to
    port: 49158, //OPTIONAL, port of the database on the server
    // timeout: 10 //OPTIONAL, login timeout for the server
};

//connect to db
sql.connect(dbConn, function(err) {
    if(err){
        console.log(err);
    }else{
        console.log("connected to db");
    }
});

module.exports = dbConn;