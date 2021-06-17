import Cors from 'cors'
const gse = require("general-search-engine")
// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'POST'],
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


    // .catch (res.status(400).json({ success: false }))

}

export default handler