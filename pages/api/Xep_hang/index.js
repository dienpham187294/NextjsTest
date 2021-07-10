import { connectToDatabase } from '../../../util/mongodb'


export default async (req, res) => {
    const { db } = await connectToDatabase();
    try {
        const data = await db.collection("ranking").find({}).toArray()
        res.status(200).json({
            success: true, data: data.sort(function (a, b) {
                return b.score - a.score;
            })
        })
    } catch (error) {
        res.status(400).json({ success: false })
    }

}