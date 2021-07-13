import { connectToDatabase } from '../../../util/mongodb'


export default async (req, res) => {
    const { db } = await connectToDatabase();
    const { token, browserinfo } = req.query;
    try {
        const data = await db.collection("token_app").find({ token: token }).toArray()
        let Status = "";
        let username = "";
        let Data_list_sentences;
        try {
            if (data.length !== 0) {
                Status = "token-found"
                username = data[0]["name"];
                if (data[0]["list_sentences"] !== undefined) {
                    Data_list_sentences = data[0]["list_sentences"]
                }

                let ARR_1 = []
                ARR_1.push(browserinfo);
                let Arr_browserinfo;
                try {
                    if (data[0]["list_of_machine"].length > 0) {
                        Arr_browserinfo = data[0]["list_of_machine"].concat(ARR_1)
                    } else {
                        Arr_browserinfo = ["none"].concat(ARR_1)
                    }
                } catch (error) {
                    console.log("e")
                }
                await db.collection("token_app").updateOne(
                    { token: token },
                    {
                        $set: {
                            list_of_machine: Arr_browserinfo
                        }
                    },
                    {
                        upsert: true
                    })
            } else {
                Status = "token-not-found";
                try {
                    await db.collection("token_not_found").insertOne({
                        token: token,
                        browerifo: browserinfo
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        } catch (error) {
            console.log(error)
            Status = "token-not-found-error"
        }
        res.status(200).json({ success: true, data: { "status": Status, "username": username, "Data_list_sentences": Data_list_sentences } })
    } catch (error) {
        res.status(400).json({ success: false })
    }
}