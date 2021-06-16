

const gse = require("general-search-engine")

export default async (req, res) => {
    let petition = await new gse.search()
        .setType("image")
        .setQuery("impact").run()

    res.status(200).json({ success: true, data: petition })
}