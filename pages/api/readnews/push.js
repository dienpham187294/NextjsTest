import { connectToDatabase } from '../../../util/mongodb'

export default async (req, res) => {
    const { mail, token } = req.query;
    const { db } = await connectToDatabase();
    try {
        console.log(mail, token)
        await db.collection("readingfile").insertOne(req.body)
        const data = await db.collection("readingfile").find({}).toArray()
        res.status(200).json({ success: true, data: data })
    } catch (error) {
        res.status(400).json({ success: false })
    }
}