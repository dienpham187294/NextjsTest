// import { connectToDatabase } from '../../../util/mongodb'
// // const nodemailer = require("nodemailer");
const LanguageDetect = require('languagedetect');
let strinout = `Glad to know/ meet you.

Rất vui được làm quen (gặp) với anh.

g-leđ tu nôu / mit jiu

Hi! 

Xin chào!

hai

Happy to know you. 

Rất vui được làm quen với anh. 

He-pi tu nôu jiu

How do you do? 

Xin chào.

Hao đu jiu đu?

I’m glad to meet you.

Rất vui được gặp anh.

am g-leđ tu mit jiu

I’m delighted to know you

Rất vui được biết anh.

am đi-lai-tiđ tu nôu jiu.

I’m very pleased to make your acquaintance.

Được biết anh tôi rất vui.

am ve-ri pli-zđ tu mêk
ịio ơk-quên-tâns

I’ve heard so much 
about you.

Nghe danh dã lâu.

ai-vd hdd sou match dbao-t jiu.

It’s pleasure to meet 
you.

Rất vui dược gặp anh.

itz ple-sd tu mit jiu.

Nice to meet you.

Được gặp anh tôi rất
vui.

nai-s tu mit jiu

Yes, I think I do.

Vâng, tôi nghĩ tôi biết.

jes, ai thinh-k ai du.

No, I don’t think so, how 
do you do?

Không, tôi nghĩ không
phải như vậy, xin chào.

nou, ai dont thinh-k sou,
hao du jiu du?

Yes, I think we have, 
haven’t we?

Vâng, tôi nghĩ chúng ta
đã gặp nhau, đúng
không?

jes, ai thinh-k guy he-vd,
he-vdnt, wi?

It’s a great pleasure to 
have the honour of 
making your 
acquaintance.

Rất hân hạnh dược làm
quen với anh.

itz g-ret ple-sd tu he-v dd o-nơ ơf mêch-king jio ơkquên-tâns

It’s a privilege to know you. 

Rất vinh hạnh được biết anh.

itz ơpri-vi-li-dz tu nôu
jiu.`
export default async (req, res) => {

    // const lngDetector = new LanguageDetect();
    // // const { db } = await connectToDatabase();
    // // lngDetector.detect('nam', 2)
    // try {
    //     let ARR_output = [];
    //     let ARR_output_VN = [];
    //     let Arr_ouput_Arr = []
    //     ARR_Input.forEach(e => {
    //         let Obj = lngDetector.detect(e, 1)
    //         try {
    //             if (Obj[0][0] === "vietnamese") {
    //                 ARR_output_VN.push({
    //                     "intinial": e,
    //                     "detect": Obj[0][0]
    //                 })
    //             } else {
    //                 ARR_output.push({
    //                     "intinial": e,
    //                     "detect": Obj[0][0]
    //                 })
    //             }
    //         } catch (error) {
    //             console.log(error)
    //         }

    //     })
    //     let j = -1
    //     for (let i = 0; i < ARR_output.length; i++) {
    //         let e = ARR_output[i]["intinial"].charAt(0);
    //         if (e !== e.toLowerCase()) {
    //             j++;
    //             Arr_ouput_Arr[j] = []
    //         }
    //         Arr_ouput_Arr[j].push(ARR_output[i]["intinial"]);
    //     }
    //     let arrR = []
    //     Arr_ouput_Arr.forEach((e, e_i) => {
    //         let EN = ""
    //         let IPA = ""
    //         let i = 0
    //         e.forEach((ee) => {
    //             let finalChart = ee.split(" ").join("").slice(-1);
    //             if ((finalChart === "." || finalChart === '?' || finalChart === '!') && i === 0) {
    //                 i = 1
    //             }
    //             if (i === 2) {
    //                 IPA += ee
    //             }
    //             if (i === 0) {
    //                 EN += ee
    //             }
    //             if (i === 1) {
    //                 EN += ee;
    //                 i = 2
    //             }
    //         })
    //         let VN_FN = "";
    //         try {
    //             VN_FN = ARR_output_VN[e_i]["intinial"]
    //         } catch (error) {
    //             console.log("e")
    //         }
    //         arrR.push({ "EN": EN, "IPA": IPA, "VN": VN_FN })
    //     })
    //     res.status(200).json({ success: true, data: arrR })
    // } catch (error) {
    //     console.log(error)
    //     res.status(400).json({ success: false })
    // }
    try {
        let arrFN = [];
        let arr = strinout.split("\n\n")
        for (let i = 0; i < arr.length; i += 3) {
            arrFN.push({
                "EN": arr[i].split("\n").join(" "),
                "VN": arr[i + 1].split("\n").join(" "),
                "IPA": arr[i + 2].split("\n").join(" "),
            })
        }
        res.status(200).json({ success: true, data: arrFN })
    } catch (error) {
        res.status(400).json({ success: false })
    }

}