var dbConn = require('../../config/db.config');

var Mx = (mx) => {
    this.teste = Mx.teste;
    this.teste2 = Mx.teste2;
}

// get all
Mx.getAllMx = (result) =>{
    console.log('ligado');
    dbConn.query('Select * FROM MX', (err, res)=> {
        if(err){
            console.log('Error while fetching MX', err);
            result(null, err);
        }else{
            console.log('MX fetched sucessfully');
            result(null, res);
        }
    })
}

module.exports = Mx;