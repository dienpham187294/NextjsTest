import { connectToDatabase } from '../../../util/mongodb'


export default async (req, res) => {
    const { db } = await connectToDatabase();
    const { name } = req.query;
    try {
        const data = await db.collection("ranking").find({ name: name }).toArray()
        try {
            if (data.length !== 0) {
                let score1 = data[0].score + 1;
                await db.collection("ranking").updateOne(
                    { name: name },
                    {
                        $set: {
                            score: score1
                        }
                    },
                    {
                        upsert: true
                    })
            } else {
                await db.collection("ranking").insertOne({
                    name: name,
                    score: 1,
                })
            }
            console.log()
        } catch (error) {
            console.log("e")
        }
        const data1 = await db.collection("ranking").find({}).toArray()
        res.status(200).json({ success: true, data: data1 })
    } catch (error) {
        res.status(400).json({ success: false })
    }
}