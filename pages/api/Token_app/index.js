import { connectToDatabase } from '../../../util/mongodb'


export default async (req, res) => {
    const { db } = await connectToDatabase();
    try {
        const data = await db.collection("token_app").find({}).toArray()
        res.status(200).json({
            success: true, data: data
        })
    } catch (error) {
        res.status(400).json({ success: false })
    }

}