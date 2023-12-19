const models = require('../models')
const tool = require('./tool')

function sendOTP(req, res) {
    var OTP = Math.floor(1000 + Math.random() * 9999);
    phone = tool.PhoneFormat(req.body.phone)
    const httpRequest = require('https');
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    };

    const data = `{
        "userName": "Rahmahi",
        "numbers":"${phone}",
        "userSender": "OTP",
        "apiKey": "bb8980e24850b7d60961cda4dc914f1d",
        "msg": "Pin Code is:${OTP}"
      }`;

    const request = httpRequest.request('https://www.msegat.com/gw/sendsms.php', options, response => {
        console.log('Status', response.statusCode);
        console.log('Headers', response.headers);
        let responseData = '';

        response.on('data', dataChunk => {
            responseData += dataChunk;
        });
        response.on('end', () => {
            console.log('Response: ', responseData)
            if (JSON.parse(responseData).code == 1) {
                const expirationTime = new Date(new Date().getTime() + 10*60000);
                createOTP(phone, OTP, expirationTime,res)
            } else {
                res.status(500).json({
                    status:false,
                    OTP: responseData,
                })
            }
        });
    });
    request.on('error', error => console.log('ERROR', error));
    request.write(data);
    request.end();
}
/////////////////////////////////////////////////////////////////////

function createOTP(phone, OTP, expirationTime,res) {
    console.log(phone)
    models.Otp.findOne({ where: { phone } }).then(async result => {
        //if we sent OTP to the number before 
        if (result) {
            models.Otp.update({ otp: OTP,expirationTime:expirationTime }, { where: { phone: phone } }).then(result => {
                res.status(201).json({
                    message: "OTP is  changed successfully",
                    OTP: result,
                    status: true
                })
            })
        }
         else {
            //start new user 
            models.Otp.create({ phone: phone, otp: OTP,expirationTime:expirationTime  }).then(result => {
                res.status(201).json({
                    message: "OTP create successfully",
                    OTP: result,
                    status: true
                })
            })
        }
    }).catch(error => {
        res.status(400).json({
            message: "Please send OTP and phone",
            error: error,
            status: false
        })
    })
}
/////////////////////////////////////////////////////////////////////
function verfiyOTP(req, res) {
    var OTP = req.body.otp
    var now = new Date()
    phone = tool.PhoneFormat(req.body.phone)
    models.Otp.findOne({ where: { phone } }).then(async result => {
        if (result.otp == OTP && result.expirationTime>=new Date()) {
            models.Otp.update({ verified: true }, { where: { phone: phone } }).then(result => {
                res.status(201).json({
                    message: "number is verfiyed successfully",
                    result: result,
                    status: true
                })
            })
        } else {
            res.status(200).json({
                message: "wrong OTP try again ",
                result,
                status: false
            })
        }
    }).catch(error => {
        res.status(400).json({
            message: "Please send OTP and phone",
            error: error,
            status: false
        })
    })
}

module.exports = {
    sendOTP,
    verfiyOTP,
}

