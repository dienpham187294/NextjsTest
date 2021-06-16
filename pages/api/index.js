
import NextCors from 'nextjs-cors';
const gse = require("general-search-engine")

export default async (req, res) => {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    // console.log(req.body.Word)

    try {
        let petition = await new gse.search()
            .setType("image")
            .setQuery(req.body.Word).run()

        res.status(200).json({ success: true, data: petition })
    } catch (error) {
        res.status(400).json({ success: false })
    }

}