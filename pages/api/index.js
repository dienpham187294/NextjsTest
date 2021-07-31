const gse = require("general-search-engine")
export default async (req, res) => {

    try {
        let petition = await new gse.search()
            .setType("image")
            .setQuery(req.body.Word).run()
        res.status(200).json({ success: true, data: petition })
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
    }

}