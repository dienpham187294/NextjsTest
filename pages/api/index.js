
import Cors from 'cors'
const gse = require("general-search-engine")
const cors = Cors({
    methods: ['GET', 'POST'],
})
export default async (req, res) => {
    
    try {
        let petition = await new gse.search()
            .setType("image")
            .setQuery(req.body.Word).run()

        res.status(200).json({ success: true, data: petition })
    } catch (error) {
        res.status(400).json({ success: false })
    }

}