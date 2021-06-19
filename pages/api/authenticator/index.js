import { connectToDatabase } from '../../../util/mongodb'
// const nodemailer = require("nodemailer");

export default async (req, res) => {
    const { mail, token } = req.query;
    const { db } = await connectToDatabase();
    try {
        console.log(mail, token)
        const data = await db.collection("users").find({ mail: mail }).toArray()
        res.status(200).json({ success: true, data: data })
    } catch (error) {
        res.status(400).json({ success: false })
    }

}


// function codangkytaikhoanmoi(id) {

//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'dienpham187294@gmail.com',
//             pass: 'rqccbitaohabcrzv'
//         }
//     });

//     var mailOptions = {
//         from: 'dienpham187294@gmail.com',
//         to: id,
//         subject: 'Xác thực tài khoản EnglishTool',
//         html: `<div>
//             <h1> Đăng ký tài khoản tại EnglishTool</h1>
//         <h2>Bấm Vào Link Để Xác Thực</h2>
//         <a href="https://www.englishtool.co/api/authenticator/`+ id + `" target="_blank"><h1>Xác thực</h1></a>
//     </div >`
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });

// }
