
let strinout = `Be careful! 

Coi chừng!

bi ke-ful

Be careful of the banana skin.

cẩn thận vỏ chuối.

bi ke-ful ơp de bơ-na-nờ s-kin

Be ready for the traffic! 

Coi chừng xe!

bi ret-đi for de tre-fik

Beware of dogs! 

Coi chừng có chó!

bi woe ơf doog-z

Behave yourself!

Ngay thẳng một chút!

bi-hei-v jio-seo-lf

Be on your guard 
against pickpocket!

Đề phòng trộm cướp!

bi on jio ga-dt d-genst
pich-poc-kit

Be careful not to stain 
your clothes.

Cẩn thận đừng làm bẩn
áo

bi ke-ful not tu s-ten jio
k-lau-ds

Be sure not to attempt 
to guess a girl's mind.

Tuyệt đối đừng có ý độ
phỏng đoán tấm lòng
của con gái.

bi sud not tu at-tem-pt
tu get-s dgdn-s mai-d

Be aware! Danger is 
here.

Coi chừng! Chỗ này
nguy hiểm.

bi d-woe! Den-chờ iz hiơ

Don't get fresh! 

Không dược bừa bãi!

dont get f-ret

Don't lose your head! 

Không dược mê muội!

dont lu-z jio hed

Don’t try any tricks!

Đừng giở trò!

đônt troai e-ni trich-ks

Mind out! 

Cẩn thậnl

mai-đ aot

Mind the wet paint!

Chú ý, sơn chưa khô/

mai-đ dơ woét pêint

Look out! 

Cẩn thận!

luk ao-t

Mind your own business!

Đừng nhiều chuyện!

mai-đ jio ôn bi-zi-nis

Watch out!

Chú ý!

wat-ch ao-t

Watch your step! 

Đi đường cẩn thận!

goat-ch jio s-tep

Watch yourself!

Chú ý hơnỉ

wat-ch h jio-seo-lf

You stay out of it! 

Anh đừng tham gia vào
chuyện này!

jiu s-tay ao-t <jf it

You'd better stay a way from it. 

Tốt nhất anh tránh xa nó.

jiu-đ bet-tờ s-tây ơ wêi from i`
export default async (req, res) => {
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
        console.log(error)
        res.status(400).json({ success: false })
    }

}