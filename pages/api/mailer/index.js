

const nodemailer = require("nodemailer");

export default async (req, res) => {


    try {
        codangkytaikhoanmoi()
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(400).json({ success: false })
    }

}


function codangkytaikhoanmoi() {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dienpham187294@gmail.com',
            pass: 'rqccbitaohabcrzv'
        }
    });

    var mailOptions = {
        from: 'dienpham187294@gmail.com',
        to: 'dienpham187294@gmail.com',
        subject: 'Có người đăng ký tài khoản mới',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}