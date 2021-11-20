import { connectToDatabase } from '../../../util/mongodb'
// const fs = require('file-system');
export default async (req, res) => {

    const { idRoom, idMember, score } = req.query;
    const { db } = await connectToDatabase();
    try {
        console.log(idRoom, idMember, score)

        const data = await db.collection("roomOnline").find({ _id: "6198a0cecd9c640d86725128" }).toArray()

        let jsonFile = data[0].data;
        console.log(jsonFile)
        let tArr = [];

        if (checkArray(jsonFile)) {
            tArr = JSON.parse(jsonFile)
            if (jsonFile.includes(idRoom)) {
                console.log("includes")
                tArr.forEach(e => {
                    if (e.idRoom === idRoom) {
                        if (!JSON.stringify(e.Members).includes(idMember)) {
                            e.Members.push({
                                "idMember": idMember,

                                "score": score
                            })
                        } else {
                            e.Members.forEach(ee => {
                                if (ee.idMember === idMember) {

                                    ee.score = score
                                }
                            })
                        }
                        res.status(200).json({ success: true, data: e.Members })
                    }
                });
            } else {
                tArr.push({
                    "idRoom": idRoom,
                    "Members": [
                        {
                            "idMember": idMember,

                            "score": score
                        }
                    ]
                })

                res.status(200).json({ success: true, data: ["first"] })
            }
        } else {
            tArr.push({
                "idRoom": idRoom,
                "Members": [
                    {
                        "idMember": idMember,

                        "score": score
                    }
                ]
            })

            res.status(200).json({ success: true, data: ["first"] })

        }

        await db.collection("roomOnline").updateOne(
            { _id: "6198a0cecd9c640d86725128" },
            {
                $set: {
                    data: JSON.stringify(tArr)
                }
            },
            {
                upsert: true
            }
        )



    } catch (error) {
        res.status(400).json({ success: false })
    }

}

function checkArray(input) {
    try {
        return Array.isArray(JSON.parse(input))
    } catch (error) {
        return false
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
