var dbConn = require('../../config/db.config');
const sql = require('mssql/msnodesqlv8');

var Mx = (mx) => {
    this.AGABERTA = AGABERTA;
    this.AGOCUPADA = AGOCUPADA;
    this.APRIV = APRIV;
    this.CKEYID = CKEYID;
    this.CLESTAB = CLESTAB;
    this.CLNO = CLNO;
    this.CLNOME = CLNOME;
    this.CODDIV = CODDIV;
    this.CODPOST = CODPOST;
    this.COR = COR;
    this.DATA = DATA;
    this.DESCORIGEM = DESCORIGEM;
    this.DIV = DIV;
    this.EORIGEM = EORIGEM;
    this.FIM = FIM;
    this.GCALEVENTID = GCALEVENTID;
    this.HFIM = HFIM;
    this.HINICIO = HINICIO;
    this.IND = IND;
    this.INICIO = INICIO;
    this.ISCLIENTE = ISCLIENTE;
    this.LOCAL = LOCAL;
    this.MORADA = MORADA;
    this.MSERIESREGSTAMP = MSERIESREGSTAMP;
    this.MXID = MXID;
    this.NKEYID = NKEYID;
    this.ORIGEM = ORIGEM;
    this.TECNICO = TECNICO;
    this.TECNNM = TECNNM;
    this.TEXTO = TEXTO;
    this.TUSERNAME = TUSERNAME;
    this.TUSERNO = TUSERNO;
    this.U_ABSSTAMP = U_ABSSTAMP;
    this.U_FPSTAMP = U_FPSTAMP;
    this.U_TIPOMARC = U_TIPOMARC;
    this.USERINIS = USERINIS;
    this.USERNAME = USERNAME;
    this.USERNO = USERNO;
    this.VENDEDOR = VENDEDOR;
    this.VENDNM = VENDNM;
    this.VUSERNAME = VUSERNAME;
    this.VUSERNO = VUSERNO;
}

// get all
Mx.getAllMx = (result) => {
    // dbConn.query("SELECT username, texto FROM MX WHERE username='Carlos Alberto'", (err, res)=>{
    //     if(err){
    //         console.log('error', err);
    //         result(null, err);
    //     }else{
    //         console.log('success');
    //         result(null, res);
    //     }
    // })

    sql.connect(dbConn, function (err) {
        // create the request obj
        var request = new sql.Request();

        // db query
        request.query("SELECT username, texto FROM MX WHERE username='Carlos Alberto'", function (err, res) {
            if (err) {
                console.log(err);
                result(null, err);
            } else {
                console.log('success');
                result(null, res);
            }
        });
    });

};

module.exports = Mx;