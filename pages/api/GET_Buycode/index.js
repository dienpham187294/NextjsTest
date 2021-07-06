import { connectToDatabase } from '../../../util/mongodb'
// const nodemailer = require("nodemailer");

export default async (req, res) => {
    const { db } = await connectToDatabase();
    const { mail } = req.query
    try {
        const data = await db.collection("users").find({ mail: mail }).toArray()
        let Output = "";
        try {
            Output = data[0].buycode
        } catch (error) {
            console.log("e")
        }

        res.status(200).json({ success: true, data: Output })
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
    }
}