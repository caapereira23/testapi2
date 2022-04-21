const Mx = require('../models/mx.models');
const MxModel = require('../models/mx.models');

exports.getMxList = (req, res) => {
    console.log('MX ->');
    MxModel.getAllMx((err, mx) => {
        console.log('MX ->');
        if(err)
        res.send(err);
        console.log('MX -> ', Mx);
        res.send(Mx);
    })
} 
