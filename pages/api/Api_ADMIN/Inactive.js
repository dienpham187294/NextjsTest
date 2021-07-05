import { connectToDatabase } from '../../../util/mongodb'
// const nodemailer = require("nodemailer");

export default async (req, res) => {
    const { db } = await connectToDatabase();
    const { mail, buycode } = req.query
    try {
        const data = await db.collection("users").find({ mail: mail }).toArray()
        let temp = data[0].buycode;
        let temp1 = ""
        if (temp !== undefined) {
            temp1 = temp.split(buycode).join("")
        }
        console.log(temp)
        console.log(temp, "buycode")
        await db.collection("users").updateOne(
            { mail: mail },
            {
                $set: {
                    buycode: temp1
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