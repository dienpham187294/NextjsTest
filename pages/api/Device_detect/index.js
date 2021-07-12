var MobileDetect = require('mobile-detect')
export default async (req, res) => {
    let md = new MobileDetect(req.headers['user-agent']);

    console.log(md)
    try {
        res.status(200).json({ success: true, data: md })
    } catch (error) {
        res.status(400).json({ success: false })
    }
}
