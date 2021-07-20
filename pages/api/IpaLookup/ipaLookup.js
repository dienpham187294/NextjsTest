// import { connectToDatabase } from '../../../util/mongodb'
// const nodemailer = require("nodemailer");
// // const TextToIPA = require('text-to-ipa')
let arrIPA = [
    {
        "text": "lesson",
        "ipa": "ˈles.ən"
    },
    {
        "text": "1",
        "ipa": "wʌn"
    },
    {
        "text": "unit",
        "ipa": "ˈjuː.nɪt"
    },
    {
        "text": "hello",
        "ipa": "heˈloʊ"
    },
    {
        "text": "look",
        "ipa": "lʊk"
    },
    {
        "text": "listen",
        "ipa": "ˈlɪs.ən"
    },
    {
        "text": "and",
        "ipa": "ænd"
    },
    {
        "text": "repeat",
        "ipa": "rɪˈpiːt"
    },
    {
        "text": "I'm",
        "ipa": "ˌaɪˈem"
    },
    {
        "text": "hi",
        "ipa": "haɪ"
    },
    {
        "text": "miss",
        "ipa": "mɪs"
    },
    {
        "text": "nice",
        "ipa": "naɪs"
    },
    {
        "text": "to",
        "ipa": "tuː"
    },
    {
        "text": "meet",
        "ipa": "miːt"
    },
    {
        "text": "you",
        "ipa": "jʊ"
    },
    {
        "text": "point",
        "ipa": "pɔɪnt"
    },
    {
        "text": "say",
        "ipa": "seɪ"
    },
    {
        "text": "let's",
        "ipa": "lets"
    },
    {
        "text": "talk",
        "ipa": "tɑːk"
    },
    {
        "text": "write",
        "ipa": "raɪt"
    },
    {
        "text": "sing",
        "ipa": "sɪŋ"
    },
    {
        "text": "2",
        "ipa": "tuː"
    },
    {
        "text": "How",
        "ipa": "haʊ"
    },
    {
        "text": "are",
        "ipa": "ɑːr"
    },
    {
        "text": "Fine",
        "ipa": "faɪn"
    },
    {
        "text": "thank",
        "ipa": "θæŋk"
    },
    {
        "text": "Bye",
        "ipa": "baɪ"
    },
    {
        "text": "Read",
        "ipa": "riːd"
    },
    {
        "text": "complete",
        "ipa": "kəmˈpliːt"
    },
    {
        "text": "goodbye",
        "ipa": "ɡʊdˈbaɪ"
    },
    {
        "text": "3",
        "ipa": "θriː"
    },
    {
        "text": "match",
        "ipa": "mætʃ"
    },
    {
        "text": "Project",
        "ipa": "ˈprɒdʒ.ekt"
    },
    {
        "text": "What",
        "ipa": "wɑːt"
    },
    {
        "text": "is",
        "ipa": "ɪz"
    },
    {
        "text": "your",
        "ipa": "jɔːr"
    },
    {
        "text": "name",
        "ipa": "neɪm"
    },
    {
        "text": "my",
        "ipa": "mai"
    },
    {
        "text": "name's",
        "ipa": "neɪm's"
    },
    {
        "text": "Now",
        "ipa": "naʊ"
    },
    {
        "text": "I",
        "ipa": "aj"
    },
    {
        "text": "know",
        "ipa": "noʊ"
    },
    {
        "text": "Next",
        "ipa": "nekst"
    },
    {
        "text": "time",
        "ipa": "taɪm"
    },
    {
        "text": "will",
        "ipa": "wɪl"
    },
    {
        "text": "with",
        "ipa": "wɪð"
    },
    {
        "text": "me",
        "ipa": "miː"
    },
    {
        "text": "What's",
        "ipa": "wɑːts"
    },
    {
        "text": "chant",
        "ipa": "tʃænt"
    },
    {
        "text": "Work",
        "ipa": "wɝːk"
    },
    {
        "text": "in",
        "ipa": "ɪn"
    },
    {
        "text": "groups",
        "ipa": "ɡruːp"
    },
    {
        "text": "Interview",
        "ipa": "ˈɪn.tə.vjuː"
    },
    {
        "text": "classmates",
        "ipa": "ˈklɑːs.meɪt"
    },
    {
        "text": "This",
        "ipa": "ðɪs"
    },
    {
        "text": "go",
        "ipa": "ɡoʊ"
    },
    {
        "text": "school",
        "ipa": "skuːl"
    },
    {
        "text": "together",
        "ipa": "təˈɡeð.ər"
    },
    {
        "text": "we're",
        "ipa": "wər"
    },
    {
        "text": "yes",
        "ipa": "jes"
    },
    {
        "text": "that",
        "ipa": "ðæt"
    },
    {
        "text": "it",
        "ipa": "ɪt"
    },
    {
        "text": "no",
        "ipa": "nəʊ"
    },
    {
        "text": "isn't",
        "ipa": "ˈɪz.ənt"
    },
    {
        "text": "it's",
        "ipa": "ɪts"
    },
    {
        "text": "number",
        "ipa": "ˈnʌm.bər"
    },
    {
        "text": "answer",
        "ipa": "ˈɑːn.sər"
    },
    {
        "text": "play",
        "ipa": "pleɪ"
    },
    {
        "text": "Line-up",
        "ipa": "ˈlaɪn.ʌp"
    },
    {
        "text": "Making",
        "ipa": "ˈmeɪ.kɪŋ"
    },
    {
        "text": "sentences",
        "ipa": "ˈsen.təns"
    },
    {
        "text": "4",
        "ipa": "fɔːr"
    },
    {
        "text": "Who's",
        "ipa": "huːz"
    },
    {
        "text": "Mr",
        "ipa": "ˈmɪs.tər"
    },
    {
        "text": "years",
        "ipa": "jɪər"
    },
    {
        "text": "old",
        "ipa": "oʊld"
    },
    {
        "text": "too",
        "ipa": "tuː"
    },
    {
        "text": "tick",
        "ipa": "tɪk"
    },
    {
        "text": "count",
        "ipa": "kaʊnt"
    },
    {
        "text": "from",
        "ipa": "frɒm"
    },
    {
        "text": "one",
        "ipa": "wan"
    },
    {
        "text": "ten",
        "ipa": "ten"
    },
    {
        "text": "two",
        "ipa": "tuː"
    },
    {
        "text": "three",
        "ipa": "θriː"
    },
    {
        "text": "four",
        "ipa": "fɔːr"
    },
    {
        "text": "five",
        "ipa": "faɪv"
    },
    {
        "text": "six",
        "ipa": "sɪks"
    },
    {
        "text": "seven",
        "ipa": "ˈsev.ən"
    },
    {
        "text": "eight",
        "ipa": "eɪt"
    },
    {
        "text": "nine",
        "ipa": "naɪn"
    },
    {
        "text": "jump",
        "ipa": "dʒʌmp"
    },
    {
        "text": "jump",
        "ipa": "dʒʌmp"
    },
    {
        "text": "friend",
        "ipa": "frend"
    },
    {
        "text": "friends",
        "ipa": "frends"
    },
    {
        "text": "ages",
        "ipa": "ˈeɪ·dʒɪz"
    },
    {
        "text": "age",
        "ipa": "ˈeɪ·dʒɪz"
    },
    {
        "text": "their",
        "ipa": "ðer"
    },
    {
        "text": "The",
        "ipa": "ðə"
    },
    {
        "text": "more",
        "ipa": "mɔːr"
    },
    {
        "text": "we",
        "ipa": "wiː"
    },
    {
        "text": "happier",
        "ipa": "ˈhæp.i.er"
    },
    {
        "text": "That's",
        "ipa": "ðæts"
    },
    {
        "text": "they",
        "ipa": "ðeɪ"
    },
    {
        "text": "aren't",
        "ipa": "ɑːnt"
    },
    {
        "text": "she",
        "ipa": "ʃiː"
    },
    {
        "text": "Who",
        "ipa": "huː"
    },
    {
        "text": "They're",
        "ipa": "ðeər"
    },
    {
        "text": "Circle",
        "ipa": "ˈsɜː.kəl"
    },
    {
        "text": "correct",
        "ipa": "kəˈrekt"
    },
    {
        "text": "words",
        "ipa": "wɝːd"
    },
    {
        "text": "put",
        "ipa": "pʊt"
    },
    {
        "text": "photos",
        "ipa": "ˈfoʊ.t̬oʊ"
    },
    {
        "text": "of",
        "ipa": "əv"
    },
    {
        "text": "on",
        "ipa": "ɒn"
    },
    {
        "text": "a",
        "ipa": "ə"
    },
    {
        "text": "sheet",
        "ipa": "ʃiːt"
    },
    {
        "text": "paper",
        "ipa": "ˈpeɪ.pər"
    },
    {
        "text": "present",
        "ipa": "ˈprez.ənt"
    },
    {
        "text": "them",
        "ipa": "ðem"
    },
    {
        "text": "class",
        "ipa": "klɑːs"
    },
    {
        "text": "Review",
        "ipa": "rɪˈvjuː"
    },
    {
        "text": "Short",
        "ipa": "ʃɔːrt"
    },
    {
        "text": "story",
        "ipa": "ˈstɔːr.i"
    },
    {
        "text": "Cat",
        "ipa": "kæt"
    },
    {
        "text": "Mouse",
        "ipa": "maʊs"
    },
    {
        "text": "Pleased",
        "ipa": "pliːzd"
    },
    {
        "text": "conversation",
        "ipa": "ˌkɑːn.vɚˈseɪ.ʃən"
    },
    {
        "text": "pairs",
        "ipa": "peər"
    },
    {
        "text": "Have",
        "ipa": "hæv"
    },
    {
        "text": "Have",
        "ipa": "hæv"
    },
    {
        "text": "similar",
        "ipa": "ˈsɪm.ɪ.lər"
    },
    {
        "text": "partner",
        "ipa": "ˈpɑːt.nər"
    },
    {
        "text": "questions",
        "ipa": "ˈkwes.tʃən"
    },
    {
        "text": "question",
        "ipa": "ˈkwes.tʃən"
    },
    {
        "text": "answers",
        "ipa": "ɑːn.sər"
    },
    {
        "text": "spell",
        "ipa": "spel"
    },
    {
        "text": "6",
        "ipa": "sɪks"
    },
    {
        "text": "Stand",
        "ipa": "stænd"
    },
    {
        "text": "up",
        "ipa": "ʌp"
    }
]
let arrNEW = [
    "good", "ɡʊd", "morning", "ˈmɔː.nɪŋ", "Be", "biː", "quiet", "ˈkwaɪ.ət", "boys", "bɔɪs",
    "Sorry", "ˈsɔːr.i", "Sir", "sɜːr", "actions", "ˈæk.ʃən", "come", "kʌm", "here", "hɪr", "don't", "doʊnt",
    "open", "ˈəʊ.pən", "close", "kloʊz"
]

for (let i = 0; i < arrNEW.length; i += 2) {
    arrIPA.push({
        "text": arrNEW[i],
        "ipa": arrNEW[i + 1]
    })
}

let ArrstringApi =
    [
        `book,bʊk,can,kæn,can't,kænt,May,meɪ,speak,spiːk,sit,sɪt,down,daʊn,study,ˈstʌd.i,aloud,əˈlaʊd,please,pliːz,instructions,ɪnˈstrʌk·ʃənz,box,bɒks`,
        `Choose,tʃuːz,act,ækt,out,aʊt,classroom,ˈklɑːs.ruːm,big,bɪɡ,small,smɑːl,gym,dʒɪm,library,ˈlaɪ.brər.i,computer,kəmˈpjuː.tər,room,ruːm`,
        `playground,ˈpleɪ.ɡraʊnd,So,soʊ,early,ˈɜː.li,new,ˈnju,large,ˈɫɑrdʒ,beautiful,ˈbjutəfəɫ,about,əˈbaʊt,but,ˈbət,music,ˈmjuzɪk`,
        `very,ˈvɛri,rooms,ˈrumz,Tell,ˈtɛɫ`,
        `8,ˈeɪt,pen,ˈpɛn,rubber,ˈrəbɝr,notebook,ˈnoʊtˌbʊk,pencil,ˈpɛnsəɫ,case,ˈkeɪs,sharpener,ˈʃɑː.pən.ər`,
        `these,ˈðiz,books,ˈbʊks,Those,ˈðoʊz,pencils,ˈpɛnsəɫz,notebooks,ˈnoʊtˌbʊks,rubbers,ˈrəbɝz`,
        `things,ˈθɪŋz,rulers,ˈruɫɝz,pens,ˈpɛnz,robots,ˈroʊˌbɑts,9,ˈnaɪn,bag,ˈbæɡ,desk,ˈdɛsk`,
        `colour,ˈkəɫɝ,red,ˈɹɛd,green,ˈɡɹin,blue,ˈbɫu,white,ˈwaɪt,yellow,ˈjɛɫoʊ,bags,ˈbæɡz,orange,ˈɔɹəndʒ,brown,ˈbɹaʊn,sharpeners,ˈʃɑː.pən.ərs`,
        `black,ˈbɫæk,bookcase,ˈbʊkˌkeɪs,Thanks,ˈθæŋks,rainbow,ˈɹeɪnˌboʊ,classmate,ˈkɫæsˌmeɪt,10,ˈtɛn,break,ˈbɹeɪk`,
        `badminton,ˈbædˌmɪntən,football,ˈfʊtˌbɔɫ,basketball,ˈbæskətˌbɔɫ,chess,ˈtʃɛs,table,ˈteɪbəɫ`,
        `tennis,ˈtɛnɪs,different,ˈdɪfɝənt,games,ˈɡeɪmz,sports,ˈspɔɹts,do,ˈdu,OK,ˈoʊˈkeɪ,skipping,ˈskɪpɪŋ,skating,ˈskeɪtɪŋ,hide-and-seek,ˌhaɪd.ənˈsiːk`,
        `blind,ˌblaɪnd,man's,.mænz,bluff,ˈblʌf,like,ˈɫaɪk,Hide,ˈhaɪd,Where,ˈwɛɹ,find,ˈfaɪnd`,
        `Bingo,ˈbɪŋɡoʊ,volleyball,ˈvɑɫiˌbɔɫ,then,ˈðɛn,check,ˈtʃɛk,right,ˈɹaɪt,house,ˈhaʊs,order,ˈɔɹdɝ,calculator,ˈkæɫkjəˌɫeɪtɝ`,
        `ruler,ˈɹuɫɝ,magic,ˈmædʒɪk,finger,ˈfɪŋɡɝ,Teacher,ˈtitʃɝ,Follow,ˈfɑɫoʊ,letters,ˈɫɛtɝz,sounds,ˈsaʊndz,Start,ˈstɑɹt,Finish,ˈfɪnɪʃ`,
        `Board,ˈbɔɹd,race,ˈɹeɪs,feeling,ˈfiɫɪŋ`,
        `happy,ˈhæpi,ask,ˈæsk,chain,ˈtʃeɪn`
    ]


let arrrStringApi = ArrstringApi.join(",").split(",")

for (let i = 0; i < arrrStringApi.length; i += 2) {
    arrIPA.push({
        "text": arrrStringApi[i],
        "ipa": arrrStringApi[i + 1]
    })
}
let arrstr11 = [
    `stones/ˈstoʊnz/stepping/ˈstɛpɪŋ/example/ɪɡˈzæmpəɫ/queen/ˈkwin/penguin/ˈpɛŋɡwən/letters/ˈɫɛtɝz/hop/ˈhɑp/clap/ˈkɫæp/trace/ˈtɹeɪs/ball/ˈbɔɫ/game/ˈɡeɪm`,
    `cycle/ˈsaɪkəɫ/cupboard/ˈkəbɝd/cup/ˈkəp/cook/ˈkʊk/coat/ˈkoʊt/cloudy/ˈkɫaʊdi/chair/ˈtʃɛɹ/central/ˈsɛntɹəɫ/cathedral/kəˈθidɹəɫ/brother/ˈbɹəðɝ/behind/bɪˈhaɪnd/bedroom/ˈbɛˌdɹum/bed/ˈbɛd/bay/ˈbeɪ/bathroom/ˈbæˌθɹum`,
    `doll/ˈdɑɫ/grandmother/ˈɡɹændˌməðɝ/grandfather/ˈɡɹænˌfɑðɝ/goldfish/ˈɡoʊɫdˌfɪʃ/gate/ˈɡeɪt/garden/ˈɡɑɹdən/garage/ɡɝˈɑʒ/kites/ˈkaɪts/fly/ˈfɫaɪ/tank/ˈtæŋk/fish/ˈfɪʃ/fence/ˈfɛns/father/ˈfɑðɝ/far/ˈfɑɹ/fan/ˈfæn/family/ˈfæməɫi/draw/ˈdɹɔ/door/ˈdɔɹ/dog/ˈdɔɡ/homework/ˈhoʊmˌwɝk/does/ˈdəz/dining/ˈdaɪnɪŋ`,
    `his
    /ˈhɪz/picture
    /ˈpɪktʃɝ/children
    /ˈtʃɪɫdɹən/photo
    /ˈfoʊˌtoʊ/sister
    /ˈsɪstɝ/she's
    /ˈʃiz/him
    /ˈhɪm/mother
    /ˈməðɝ/young
    /ˈjəŋ/really
    /ˈɹiɫi/he's
    /ˈhiz/man
    /ˈmæn/11
    /ˈiɫɛvən`
]

let ArrStr11 = arrstr11.join("/").split("\n    ").join("").split("/");
for (let i = 0; i < ArrStr11.length; i += 2) {
    arrIPA.push({
        "text": ArrStr11[i],
        "ipa": ArrStr11[i + 1].split("/").join("")
    })
}

let arr1 = `Listen and number.
Read and complete. 
Hi! My name is Quan. 
I am ten years old. 
That is a picture of my family. 
My father is forty-four years old. 
My mother is thirty-nine years old. 
My brother is fourteen years old.
His father
His mother
His brother
Write about your family.
How old are you?
How old is your mother?
How old is your father?
How old is your brother?
How old is your sister?`

let arr2 = `Nghe và số.
Đọc và hoàn thành.
Chào! Tôi tên Quân.
Tôi mười tuổi.
Đó là hình ảnh của gia đình tôi.
Cha tôi bốn mươi bốn tuổi.
Mẹ tôi ba mươi chín tuổi.
Em trai tôi mười bốn tuổi.
Bố của anh ấy
Mẹ của anh ta
Anh trai của anh ấy
Viết về gia đình của bạn.
Bạn bao nhiêu tuổi?
Mẹ của bạn bao nhiêu tuổi?
Bố bạn bao nhiêu tuổi?
Anh trai bạn bao nhiêu tuổi?
Em gái bạn bao nhiêu tuổi?`

export default async (req, res) => {// const { db } = await connectToDatabase();// TextToIPA.loadDict(); // blocking load
    try {
        let ARR1 = arr1.split("\n")
        let ARR2 = arr2.split("\n")
        let ArrFN = [];
        ARR1.forEach(e => {
            ArrFN.push(e.split(" "))
        })
        let ArrFNIPA = []
        ArrFN.forEach(e => {
            let Arr_temp = []
            e.forEach(ee => {

                if (ee !== "") {
                    let status = true
                    arrIPA.forEach(eee => {

                        if (eee.text.FN_sort() === ee.FN_sort()) {
                            if (status) {
                                Arr_temp.push(eee.ipa)
                            }
                            status = false
                        }
                    })
                    if (status) {
                        Arr_temp.push(ee)
                    }
                }

            })
            ArrFNIPA.push(Arr_temp.join(" "))
        })
        let arrFinal = []
        for (let i = 0; i < ARR1.length; i++) {
            arrFinal.push({
                "EN": ARR1[i],
                "VN": ARR2[i],
                "IPA": ArrFNIPA[i],
            })
        }



        res.status(200).json({ success: true, data: arrFinal })
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
    }
}

String.prototype.FN_sort = function () {
    return this.toLowerCase().split(/[\?#!-':()\".,]+/).join("")
}

