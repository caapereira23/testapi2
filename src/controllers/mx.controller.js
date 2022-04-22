// const Mx = require('../models/mx.model');
const MxModel = require('../models/mx.model');

exports.getMxList = (req, res) => {
    // console.log('MX -> test');
    MxModel.getAllMx((err, mxs) => {
        if(err)
        res.send(err);
        // console.log('MX -> ', mxs);
        res.send(mxs);
    })
} 
