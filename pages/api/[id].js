const gse = require("general-search-engine")
export default async (req, res) => {
    const { id } = req.query;
    await new gse.search()
        .setType("image")
        .setQuery(id).run()
        .then(function (result) {
            res.status(200).json({ success: true, data: result })
        })
        .catch(function (error) {
            res.status(200).json({ success: true, data: error })
        })

}