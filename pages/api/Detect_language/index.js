
let strinout = `I can't be certain/sure 

ai kan-t bi sơ tần/ Sua

I can't decide.

ai kan-t di-sai-d

I can't say for 
certain/sure

ai kan-t sei for sơtan / sua

I can’t make up my mind

ai kan-t mek dp mai mai
d

I'm not too sure of it. 

am not thu sud df it. 

I find it hard to come to a conclusion

ai fai-đ it hat tu kăm tu
ơ kơn-k-lu-zần

I'm afraid I can't be certain about it. 

am ơ-ph-rêđ ai kan-t bi
sơ-tần ơ-bao it

I'm afraid I can't be positive about the place where the meeting will be held.

am ơ-f-rếđ ai can-t bi pozơ-tiv ơ-bao dơplêi-s woe
dơ mit-ting wil bi heo-lđ

It's hard to tell

itz hađ tu theo-l

I'm not at all convinced. 

am not ơt ôl kơn-vin-sđ

I'm in two minds about which way to take. 

am in thu mai-đs ơ-bao-t
wich wêi tu tếk

There's some doubt in my mind.

dez săm đao-bt in mai
mai-đ

I'm still in the dark. 

am stil in dơ đak

Let's leave it to chance

letz li-vơ it tu tran-s. 

I wonder if I can pass the exam. 

ai wan-đơ if ai ken pas
di ik-zem.

I feel in such a muddle.

ai fit in săt-ch ơ măđ-đờ

I have my doubt about that

ai he-uơ mai đao- bt ơbao de
==
Tôi không thể khẳng định

Tôi không thể quyết định

Tôi nói không đúng.

Tôi không quyết tâm nổi

Việc này tôi không nắm vững lắm

Tôi thấy rất khó kết luận.

Việc này chắc tôi không thể khắng định.

Có lẽ tôi không thể dám chắc địa điểm tổ chức hội nghị.

Rất khó nói.

Tôi không dám khẳng định

Tôi không biết lựa chọn con đường nào.

Tôi có chút hoài nghi.

Tôi vẫn chưa rõ lắm.

Chúng ta cứ tin vào số phận

Tồỉ không biết có thể thi qua kỳ thi này không

Tôi thấy trong đầu thật rối rắm

Việc này tôi hơi nghi ngờ
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