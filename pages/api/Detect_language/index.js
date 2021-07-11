
let strinout = `All the best in your new job. 

ol do bets in jio niu job

All the very best! 

ol dơ ve-ri best

Bless you! 

b-les jiu

Every success in your 
new career.

e-ve-ri sdkses in jio niu
kd-ri-d

Every success with you. 

e-ve-ri sdkses witd jiu

Enjoy your trip! 

in-joi jio trip

Enjoy yourself! 

in-joi jio seo-lf

Good luck! 

gud lak

Good luck with you. 

gut-d lak witd jiu

Have a good time.

he-v d gud tharn

Have a nice day. 

he-v ơ nais đêi

I wish you success. 

ai wis jiu sơk-ses

ai wis jiu sơk-ses

mêi jiu e-ve-ri sơk-ses

I wish you every success. 

ai wis jiu e-ve-ri sơk-ses

The best of luck.

dơ be-st ơflăk

The very best luck with you.

dơ ưe-ri be-st lăk luitd jiu

Would you give Mr.Frank my best whishes? 

ut jiu gi-vơ mi-stơ Ph- ranh-k mai best wi-sis

The best wishes to your family

dơ best wi-sis tu jio fe-mi-li
==
Chúc anh thuận lợi trên cương vị mới.

Chúc vạn sự như ý!

Chúc mừng anh!

Chúc anh luôn thuận lợi
trong sự nghiệp mới

Chúc anh thành công
trong mọi lĩnh vực

Chúc chuyến đi vui vẻ!

Chúc anh sống vui vẻ!

Chúc anh may mắn!

Chúc anh may mắn

Chúc vui vẻ.

Chúc một ngày vui vẻ

Chúc anh thành công

Chúc anh thành công

Chúc anh thuận lợi.

Chúc anh may mắn

Chúc anh gặp may.

Xin gửi lời chúc tới ông Frank giúp tôi được không?

Cho tôi gửi lời chúc tới toàn thể gia đình.
`
export default async (req, res) => {
    try {
        let arrFN = [];
        let Arr1 = strinout.split("==")

        let arr = Arr1[0].split("\n\n")
        let arr2 = Arr1[1].split("\n\n")
        for (let i = 0; i < arr.length; i += 2) {
            arrFN.push({
                "EN": arr[i],
                "VN": arr2[i / 2],
                "IPA": arr[i + 1]
            })
        }
        res.status(200).json({ success: true, data: arrFN })
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
    }

}