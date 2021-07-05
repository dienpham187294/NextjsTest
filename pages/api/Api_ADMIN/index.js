import { connectToDatabase } from '../../../util/mongodb'
// const nodemailer = require("nodemailer");

export default async (req, res) => {
    const { db } = await connectToDatabase();
    try {
        const data = await db.collection("users").find({}).toArray()
        res.status(200).json({ success: true, data: data })
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
    }
}