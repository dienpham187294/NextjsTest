
let strinout = `Aren't you the lucky one! 

Ảnh thật may mắn!

an-t jiu dd lac-ki oan

Breathtaking!

Đẹp quá!

bret-tek-king

How clever/ lucky you 
are!

Anh thật thông minh/
may mắn.

hao kle-vd/ lac-ki jiu a

I do think it's charming.

Tôi chắc chắn nó sẽ làm
mọi người phải say mê.

ai du thing-k itz chamming

It looks nice. 

Trông thật tuyệt vời.

it luks nais

I really must express my 
admiration for your 
performance

Tôi thực sự ước ao có
được tài năng biểu diễn
như anh.

ai ria-li md-st iks-p-res
mai dd-mi-ray-san for
jio pd-fom-man-z

You speak very good 
English. You really 
deserve the highest praise.

Anh nói tiếng Anh rất
giỏi, đáng được khen
ngợi.

jiu s-pich-k ưe-ri gud
ing-lich. jiu ria-li đi-zơu
dơ hai-its p-rêis

My compliments on your success.

Xin chúc mừng thành Xin chúc mừng thành

mai com-pli-mânts on jio
sdk-ses

You are quite good with 
your hands.

Ảnh thật khéo tay.

jiu a koai gud witd jio
hen-dz

You have good taste!

Anh thật có con mắt
thẩm mỹ!

jiu he-vd gud tei-st

Lucky of you!

Anh thật may mắn!

lac-ki df jiu

You look cool in that 
shirt!

Ảnh mặc chiếc áo đó
trông thật bảnh bao!

Ảnh mặc chiếc áo đó
trông thật bảnh bao!

Super!

Đẹp quá!

siu-pơ

Wonderful!

Tuyệt vời!

woăn-đơ-ful

Oh, you look great!

Ô, trông anh thật tuyệt!

ÔU, jiu luk g-rết

Your thesis is excellent.

Bài luận văn của anh
thật xuất sắc

jio thi-sis iz ếk-sơ-lầnt

You're doing great!

Anh làm rất tốt!

jiu-a đuing g-rết

That was quite an 
evening.

Buổi dạ hội thật tuyệt
vời.

dat wơz koai ơn i-vining.
 `
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