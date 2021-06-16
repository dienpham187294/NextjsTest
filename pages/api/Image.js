import Cors from 'cors'
const gse = require("general-search-engine")
// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

async function handler(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors)

    try {
        let petition = await new gse.search()
            .setType("image")
            .setQuery("req.body.Word").run()

        res.status(200).json({ success: true, data: petition })
    } catch (error) {
        res.status(400).json({ success: false })
    }
}

export default handler