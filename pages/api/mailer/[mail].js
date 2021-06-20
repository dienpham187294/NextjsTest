import { connectToDatabase } from '../../../util/mongodb'
const nodemailer = require("nodemailer");
import Linkapi from '../../../util/Linkapi';
export default async (req, res) => {
    const { mail, n } = req.query;
    const { method } = req.query;
    const { db } = await connectToDatabase();



    try {
        // codangkytaikhoanmoi(mail)
        const data = await db.collection("users").find({ mail: mail }).toArray();
        if (data.length === 0) {
            await db.collection("users").insertOne({
                mail: mail,
                password: mail,
                expired: Date.now() + 15 * 24 * 60 * 60
            })
            const data1 = await db.collection("users").find({ mail: mail }).toArray();
            codangkytaikhoanmoi(mail, n)
            res.status(200).json({ success: true, data: data1 })
        } else {
            codangkytaikhoanmoi(mail, n)
            res.status(200).json({ success: true, data: data })
        }

    } catch (error) {
        res.status(400).json({ success: false })
    }

}


function codangkytaikhoanmoi(mail, n) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dienpham187294@gmail.com',
            pass: 'rqccbitaohabcrzv'
        }
    });

    var mailOptions = {
        from: 'dienpham187294@gmail.com',
        to: mail,
        subject: 'Xác thực tài khoản EnglishTool',
        html: `<div style={}>
            <h1> Mã xác thực tài khoản</h1>
            <h1>`+ n + `</h1>
    </div >`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}
