import { connectToDatabase } from '../../../util/mongodb'
// const nodemailer = require("nodemailer");

export default async (req, res) => {
    const { db } = await connectToDatabase();
    const { mail, buycode } = req.query
    console.log(mail, buycode)
    try {
        const data = await db.collection("users").find({ mail: mail }).toArray()
        // let temp = data.buycode + buycode + '124'
        let temp = data[0].buycode + buycode
        console.log(temp, "buycode")
        await db.collection("users").updateOne(
            { mail: mail },
            {
                $set: {
                    buycode: temp
                }
            },
            {
                upsert: true
            }
        )
        const data1 = await db.collection("users").find({}).toArray()
        res.status(200).json({ success: true, data: data1 })
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
    }
}