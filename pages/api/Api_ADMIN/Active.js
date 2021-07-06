import { connectToDatabase } from '../../../util/mongodb'
// const nodemailer = require("nodemailer");

export default async (req, res) => {
    const { db } = await connectToDatabase();
    const { mail, buycode } = req.query
    try {
        const data = await db.collection("users").find({ mail: mail }).toArray()
        let Output_CodeAndTime;
        let Time_365sDay = Date.now() + 365 * 24 * 60 * 60 * 1000
        try {
            Output_CodeAndTime = data[0].buycode + buycode + Time_365sDay + "epdp";
        } catch (error) {
            Output_CodeAndTime = buycode + Time_365sDay + "epdp";
        }
        await db.collection("users").updateOne(
            { mail: mail },
            {
                $set: {
                    buycode: Output_CodeAndTime
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