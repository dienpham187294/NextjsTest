import { connectToDatabase } from '../../../util/mongodb'
const nodemailer = require("nodemailer");
import Linkapi from '../../../util/Linkapi';
import { async } from 'regenerator-runtime';
export default async (req, res) => {
    const { mail, n } = req.query;
    const { method } = req.query;
    const { db } = await connectToDatabase();



    try {
        // sendmail(mail)
        const data = await db.collection("users").find({ mail: mail }).toArray();
        if (data.length === 0) {
            await db.collection("users").insertOne({
                mail: mail,
                password: mail,
                expired: Date.now() + 15 * 24 * 60 * 60
            })
            const data1 = await db.collection("users").find({ mail: mail }).toArray();
            sendmail(mail, n, 0);
            setTimeout(() => {
                res.status(200).json({ success: true, data: data1 });
            }, 3000)

        } else {
            sendmail(mail, n, 0);
            setTimeout(() => {
                res.status(200).json({ success: true, data: data });
            }, 3000)

        }

    } catch (error) {
        res.status(400).json({ success: false });
    }

}


async function sendmail(mail, n, i) {

    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dienpham187294@gmail.com',
            pass: 'rqccbitaohabcrzv'
        }
    });

    let mailOptions = await {
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
            if (i === 0) {
                setTimeout(() => {
                    sendmail(mail, n, 1)
                }, 2000)
            }
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}
