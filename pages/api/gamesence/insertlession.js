import { connectToDatabase } from '../../../util/mongodb'

export default async (req, res) => {
    // const { method } = req;
    const { db } = await connectToDatabase()
    // const data = await db.collection("gamesencedata")


    const {
        method
    } = req;

    switch (method) {
        // case 'GET':
        //     try {
        //         const note = await db.collection("gamesencedata").find({ subject: id }).toArray();

        //         if (!note) {
        //             return res.status(400).json({ success: false });
        //         }

        //         res.status(200).json({ success: true, data: note });
        //     } catch (error) {
        //         res.status(400).json({ success: false });
        //     }
        //     break;
        case 'PUT':
            try {
                const note = await db.collection("gamesencedata").updateOne(
                    { subject: req.body[0].subject },
                    {
                        $set: {
                            all_lession: req.body[0].data
                        }
                    }
                );
                // console.log(req.body)
                if (!note) {
                    return res.status(400).json({ success: false });
                }
                res.status(200).json({ success: true, data: "note" });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        // case 'DELETE':
        //     try {
        //         const deletedNote = await Note.deleteOne({ _id: id });

        //         if (!deletedNote) {
        //             return res.status(400).json({ success: false })
        //         }

        //         res.status(200).json({ success: true, data: {} });
        //     } catch (error) {
        //         res.status(400).json({ success: false })
        //     }
        //     break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}