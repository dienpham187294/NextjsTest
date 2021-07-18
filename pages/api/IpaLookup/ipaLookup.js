// import { connectToDatabase } from '../../../util/mongodb'
// const nodemailer = require("nodemailer");
// // const TextToIPA = require('text-to-ipa')
let arrIPA = [
    {
        "text": "lesson",
        "ipa": ""
    }
]
let arr1 = `Unit 1 Hello
lesson 1
Look, listen and repeat.
Hello. I'm Mai.
Hi, Mai. I'm Nam.
Hello. I'm Miss Hien.
Hello, Miss Hien.
Nice to meet you.
Point and say.
Let's talk.`
export default async (req, res) => {
    // const { db } = await connectToDatabase();
    // TextToIPA.loadDict(); // blocking load
    try {
        let ARR1 = arr1.split("\n")
        let ArrFN = [];
        ARR1.forEach(e => {
            ArrFN.push(e.split(" "))
        })
        let ArrFNIPA = []
        ArrFN.forEach(e => {
            let Arr_temp = []
            e.forEach(ee => {
                let temp = ee.toLowerCase()
                Arr_temp.push(temp)
            })
            ArrFNIPA.push(Arr_temp)
        })
        // const data = await db.collection("users").find({}).toArray()
        // const data1 = await db.collection("token_app").find({}).toArray()
        // TextToIPA.loadDict(); // blocking load
        // let arrRes = []
        // TextToIPA.lookup('word'); // > wɚˈd
        // arr.forEach(e => {
        //     arrRes.push(TextToIPA.lookup(e))
        // })
        res.status(200).json({ success: true, data: ArrFNIPA })
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
    }
}