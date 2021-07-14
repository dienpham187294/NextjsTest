import { connectToDatabase } from '../../../util/mongodb'
// const nodemailer = require("nodemailer");

export default async (req, res) => {
    const { db } = await connectToDatabase();
    try {
        const data = await db.collection("users").find({}).toArray()
        const data1 = await db.collection("token_app").find({}).toArray()
        res.status(200).json({ success: true, data: data, data1: data1 })
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
    }
}