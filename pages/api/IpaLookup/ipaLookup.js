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
let arr_Hold_not_ipa = []
let arrstr11 = [
    `stones/ˈstoʊnz/stepping/ˈstɛpɪŋ/example/ɪɡˈzæmpəɫ/queen/ˈkwin/penguin/ˈpɛŋɡwən/letters/ˈɫɛtɝz/hop/ˈhɑp/clap/ˈkɫæp/trace/ˈtɹeɪs/ball/ˈbɔɫ/game/ˈɡeɪm`,
    `cycle/ˈsaɪkəɫ/cupboard/ˈkəbɝd/cup/ˈkəp/cook/ˈkʊk/coat/ˈkoʊt/cloudy/ˈkɫaʊdi/chair/ˈtʃɛɹ/central/ˈsɛntɹəɫ/cathedral/kəˈθidɹəɫ/brother/ˈbɹəðɝ/behind/bɪˈhaɪnd/bedroom/ˈbɛˌdɹum/bed/ˈbɛd/bay/ˈbeɪ/bathroom/ˈbæˌθɹum`,
    `doll/ˈdɑɫ/grandmother/ˈɡɹændˌməðɝ/grandfather/ˈɡɹænˌfɑðɝ/goldfish/ˈɡoʊɫdˌfɪʃ/gate/ˈɡeɪt/garden/ˈɡɑɹdən/garage/ɡɝˈɑʒ/kites/ˈkaɪts/fly/ˈfɫaɪ/tank/ˈtæŋk/fish/ˈfɪʃ/fence/ˈfɛns/father/ˈfɑðɝ/far/ˈfɑɹ/fan/ˈfæn/family/ˈfæməɫi/draw/ˈdɹɔ/door/ˈdɔɹ/dog/ˈdɔɡ/homework/ˈhoʊmˌwɝk/does/ˈdəz/dining/ˈdaɪnɪŋ`,
    `great/ˈɡɹeɪt/his/ˈhɪz/picture/ˈpɪktʃɝ/children/ˈtʃɪɫdɹən/photo/ˈfoʊˌtoʊ/sister/ˈsɪstɝ/she's/ˈʃiz/him/ˈhɪm/mother/ˈməðɝ/young/ˈjəŋ/really/ˈɹiɫi/he's/ˈhiz/man/ˈmæn/11/ˈiɫɛvən`,
    `near/ˈnɪɹ/mountain/ˈmaʊntən/mirror/ˈmɪɹɝ/map/ˈmæp/love/ˈɫəv/living/ˈɫɪvɪŋ/kite/ˈkaɪt/kitchen/ˈkɪtʃən/keep/ˈkip/front/ˈfɹənt/many/ˈmɛni/has/ˈhæz`,
    `wardrobe/ˈwɔɹˌdɹoʊb/wall/ˈwɔɫ/under/ˈəndɝ/truck/ˈtɹək/tree/ˈtɹi/train/ˈtɹeɪn/toy/ˈtɔɪ/car/ˈkɑɹ/toy/ˈtɔɪ/there/ˈðɛɹ/theatre/ˈθiətɝ/temple/ˈtɛmpəɫ/bear/ˈbɛɹ/teddy/ˈtɛdi/sunny/ˈsəni/stormy/ˈstɔɹmi/much/ˈmətʃ/sofa/ˈsoʊfə/snowy/ˈsnoʊi/skip/ˈskɪp/skate/ˈskeɪt/ship/ˈʃɪp/robot/ˈɹoʊˌbɑt/rabbit/ˈɹæbət/puzzle/ˈpəzəɫ/poster/ˈpoʊstɝ/pond/ˈpɑnd/plane/ˈpɫeɪn/parrot/ˈpɛɹət/park/ˈpɑɹk/north/ˈnɔɹθ`,
    `chairs/ˈtʃɛɹz/balls/ˈbɔɫz/posters/ˈpoʊstɝz/dear/ˈdɪɹ/where's/ˈhwɛɹz/13/ˈθɝˈtin/clean/ˈkɫin/see/ˈsi/over/ˈoʊvɝ/there's/ðerz/12/ˈtwɛɫv/yard/ˈjɑɹd/woman/ˈwʊmən/windy/ˈwaɪndi/window/ˈwɪndoʊ/weather/ˈwɛðɝ/puppet/ˈpəpət/water/ˈwɔtɝ/watch/ˈwɑtʃ`
    , `15/ˈfɪfˈtin/desks/ˈdɛsks/differences/ˈdɪfɝənsɪz/spot/ˈspɑt/cupboards/ˈkəbɝdz/wardrobes/ˈwɔɹˌdɹoʊbz/windows/ˈwɪndoʊz/doors/ˈdɔɹz/mirrors/ˈmɪɹɝz/fans/ˈfænz/sofas/ˈsoʊfəz/maps/ˈmæps/any/ˈɛni/14/ˈfɔɹˈtin/hero/ˈhiɹoʊ/pictures/ˈpɪktʃɝz`
    , `make/ˈmeɪk/goes/ˈɡoʊz/sure/ˈʃʊɹ/everywhere/ˈɛvɹiˌwɛɹ/little/ˈɫɪtəɫ/doesn't/ˈdəzən/he/ˈhi/bedrooms/ˈbɛˌdɹumz/balcony/ˈbæɫkəni/tables/ˈteɪbəɫz/bubbles/ˈbəbəɫz/brothers/ˈbɹəðɝz/sisters/ˈsɪstɝz/between/bitˈwin/16/ˈsɪkˈstin/17/ˈsɛvənˈtin/18/ˈeɪˈtin/19/ˈnaɪnˈtin/20/ˈtwɛni/toys/ˈtɔɪz`
    , `flower/ˈfɫaʊɝ/pot/ˈpɑt/pets/ˈpɛts/parrots/ˈpɛɹəts/dogs/ˈdɑɡz/birds/ˈbɝdz/rabbits/ˈɹæbəts/ships/ˈʃɪps/trucks/ˈtɹəks/dolls/ˈdɑɫz/planes/ˈpɫeɪnz/playroom/ˈpɫeɪˌɹum/planes/ˈpɫeɪnz/doing/ˈduɪŋ/home/ˈhoʊm/reading/ˈɹɛdɪŋ/cooking/ˈkʊkɪŋ/listening/ˈɫɪsənɪŋ/today/təˈdeɪ/cleaning/ˈkɫinɪŋ/singing/ˈsɪŋɪŋ/drawing/ˈdɹɔɪŋ/playing/ˈpɫeɪɪŋ/watching/ˈwɑtʃɪŋ/dancing/ˈdænsɪŋ/cycling/ˈsaɪkəɫɪŋ/cats/ˈkæts`
    , `some/ˈsəm/song/ˈsɔŋ/hometown/ˈhoʊmˌtaʊn/rainy/ˈɹeɪni/tomorrow's/təˈmɑˌɹoʊz/place/ˈpɫeɪs/card/ˈkɑɹd/south/ˈsaʊθ/favourite/ˈfeɪvɝɪt/floor/ˈfɫɔɹ/country/ˈkəntɹi/cold/ˈkoʊɫd/wait/ˈweɪt/minute/ˈmɪnət/everyone/ˈɛvɹiˌwən/careful/ˈkɛɹfəɫ/dangerous/ˈdeɪndʒɝəs/rhyming/ˈɹaɪmɪŋ/walk/ˈwɑk/late/ˈɫeɪt/again/əˈɡeɪn/well/ˈwɛɫ/afternoon/ˌæftɝˈnun/evening/ˈivnɪŋ/greets/ˈɡɹits/teachers/ˈtitʃɝz/let’s/lets/tomorrow/təˈmɑˌɹoʊ/later/ˈɫeɪtɝ/night/ˈnaɪt/I’m /ˌaɪˈem/england/ˈɪŋɡɫənd/yourself/ˈjɔɹsɛɫf/japan/dʒəˈpæn/malaysia/məˈɫeɪʒə/america/əˈmɛɹəkə/australia/ɔˈstɹeɪɫjə/imagine/ˌɪˈmædʒən/introduce/ˌɪntɹəˈdus/information/ˌɪnfɝˈmeɪʃən/activities/ækˈtɪvətiz/nationality/ˌnæʃəˈnæɫəti/countries/ˈkəntɹiz/city/ˈsɪti/select/səˈɫɛkt/flag/ˈfɫæɡ/monday/ˈmənˌdeɪ/mondays/ˈmənˌdeɪz/when/ˈhwɛn/wednesday/ˈwɛnzˌdeɪ/tuesday/ˈtjuzˌdeɪ/partners/ˈpɑɹtnɝz/visit/ˈvɪzɪt/grandparents/ˈɡɹændˌpɛɹənts/zoo/ˈzu/flying/ˈfɫaɪɪŋ`
    , `wednesdays/ˈwɛnzˌdeɪz/tuesdays/ˈtjuzˌdeɪz/thursdays/ˈθɝzdeɪz/fridays/ˈfɹaɪˌdeɪz/parents/ˈpɛɹənts/saturdays/ˈsætɝdeɪz/guitar/ɡɪˈtɑɹ/swimming/ˈswɪmɪŋ/help/ˈhɛɫp/saturday/ˈsæˌtɪˌdeɪ/friday/ˈfɹaɪˌdeɪ/sunday/ˈsənˌdeɪ/thursday/ˈθɝzˌdeɪ/first/ˈfɝst/thursday/ˈθɝzˌdeɪ/her/ˈhɝ/birthday/ˈbɝθˌdeɪ/july/ˌdʒuˈɫaɪ/weekend/ˈwiˌkɛnd/sundays/ˈsənˌdeɪz/every/ˈɛvɝi/day/ˈdeɪ/report/ɹiˈpɔɹt/when's/ˈhwɛnz/october/ɑkˈtoʊbɝ/second/ˈsɛkənd/third/ˈθɝd/fourteenth/ˈfɔɹˈtinθ/date/ˈdeɪt/march/ˈmɑɹtʃ/months/ˈmənθs/january/ˈdʒænjuˌɛɹi/february/ˈfɛbjəˌwɛɹi/march/ˈmɑɹtʃ/april/ˈeɪpɹəɫ/tune/ˈtun/august/ˈɑɡəst/september/sɛpˈtɛmbɝ/november/noʊˈvɛmbɝ/december/dɪˈsɛmbɝ/remember/ɹiˈmɛmbɝ/fourth/ˈfɔɹθ/june/ˈdʒun/fifth/ˈfɪfθ/sixth/ˈsɪksθ/london/ˈɫəndən/birthdays/ˈbɝθˌdeɪz/presents/ˈpɹɛzənts/soon/ˈsun/invitation/ˌɪnvɪˈteɪʃən/party/ˈpɑɹti/swim/ˈswɪm/dance/ˈdæns/piano/piˈænə/daddy/ˈdædi/mummy/ˈməmi/baby/ˈbeɪbi/swing/ˈswɪŋ/international/ˌɪnɝˈnæʃənəɫ/pupil/ˈpjupəɫ/vietnamese/viˌɛtnɑˈmis/songs/ˈsɔŋz/club/ˈkɫəb/american/əˈmɛɹəkən/cousin/ˈkəzən/piano/piˈænə/own/ˈoʊn/penfriend/ˈpen.frend/english/ˈɪŋɡɫɪʃ`
    , `bike/ˈbaɪk/unscramble/ənsˈkɹæmbəɫ/primary/ˈpɹaɪˌmɛɹi/street/ˈstɹit/oxford/ˈɑksfɝd/our/ˈaʊɝ/likes/ˈɫaɪks/stream/ˈstɹim/way/ˈweɪ/address/ˈæˌdɹɛs/welcome/ˈwɛɫkəm/collecting/kəˈɫɛktɪŋ/stamps/ˈstæmps/comic/ˈkɑmɪk/models/ˈmɑdəɫz/cool/ˈkuɫ/hobby/ˈhɑbi/super/ˈsupɝ/riding/ˈɹaɪdɪŋ/taking/ˈteɪkɪŋ/sailing/ˈseɪɫɪŋ/boat/ˈboʊt/drum/ˈdɹəm/fun/ˈfən/lot/ˈɫɑt/collect/kəˈɫɛkt/stickers/ˈstɪkɝz/candy/ˈkændi/wrappers/ˈɹæpɝz/subjects/ˈsəbdʒɪkts/maths/ˈmæθs/run/ˈɹən/studying/ˈstədiɪŋ/science/ˈsaɪəns/favorite/ˈfeɪvɝɪt/often/ˈɔfən/week/ˈwik/subject/ˈsəbdʒɪkt/another/əˈnəðɝ/timetable/ˈtaɪmˌteɪbəɫ/below/biˈɫoʊ/idea/aɪˈdiə/video/ˈvɪdioʊ/writing/ˈɹaɪtɪŋ/dictation/dɪkˈteɪʃən/text/ˈtɛkst/pupils/ˈpjupəɫz/having/ˈhævɪŋ/an/ˈæn/art/ˈɑɹt/painting/ˈpeɪntɪŋ/masks/ˈmæsks/painting/ˈpeɪntɪŋ/mask/ˈmæsk/exercise/ˈɛksɝˌsaɪz/members/ˈmɛmbɝz/yesterday/ˈjɛstɝˌdeɪ/beach/ˈbitʃ/watered/ˈwɔtɝd/flowers/ˈfɫaʊɝz/played/ˈpɫeɪd/watched/ˈwɑtʃt/did/ˈdɪd/painted/ˈpeɪntɪd/was/ˈwɑz/comes/ˈkəmz/here's/ˈhɪɹz/cake/ˈkeɪk/whose/ˈhuz/activity/ækˈtɪvəti/australian/ɔˈstɹeɪɫjən/dishes/ˈdɪʃəz/japanese/ˌdʒæpəˈniz/malaysian/məˈɫeɪʒən/model/ˈmɑdəɫ/once/ˈwəns/paint/ˈpeɪnt/physical/ˈfɪzɪkəɫ/education/ˌɛdʒəˈkeɪʃən/photograph/ˈfoʊtəˌɡɹæf/plant/ˈpɫænt/radio/ˈɹeɪdiˌoʊ/return/ɹiˈtɝn/road/ˈɹoʊd/sail/ˈseɪɫ/stamp/ˈstæmp/take/ˈteɪk/twice/ˈtwaɪs/village/ˈvɪɫədʒ/wash/ˈwɑʃ/sumps/ˈsəmps/ride/ˈɹaɪd`
    , `lucky/ˈɫəki/money/ˈməni/lunch/ˈɫəntʃ/medicine/ˈmɛdəsən/milk/ˈmɪɫk/mobile/ˈmoʊbəɫ/phone/ˈfoʊn/monkey/ˈməŋki/noodles/ˈnudəɫz/noon/ˈnun/nurse/ˈnɝs/o'clock/əˈkɫɑk/office/ˈɔfɪs/juice/ˈdʒus/pharmacy/ˈfɑɹməsi/p.m./ˈpiˈɛm/pork/ˈpɔɹk/prepare/pɹiˈpɛɹ/relative/ˈɹɛɫətɪv/repeal/ɹiˈpiɫ/rice/ˈɹaɪs/sandals/ˈsændəɫz/sandcastle/ˈsændˌkæs.əl/scarf/ˈskɑɹf/scary/ˈskɛɹi/scenery/ˈsinɝi/sea/ˈsi/seafood/ˈsiˌfud/shoes/ˈʃuz/skirt/ˈskɝt/slim/ˈsɫɪm/smart/ˈsmɑɹt/stay/ˈsteɪ/strong/ˈstɹɔŋ/student/ˈstudənt/summer/ˈsəmɝ/holidays/ˈhɑɫəˌdeɪz/supermarket/ˈsupɝˌmɑɹkɪt/sweet/ˈswit/shop/ˈʃɑp/pool/ˈpuɫ/tall/ˈtɔɫ/thick/ˈθɪk/thin/ˈθɪn/tiger/ˈtaɪɡɝ/trousers/ˈtɹaʊzɝz/uncle/ˈəŋkəɫ/usually/ˈjuʒəɫi/vegetables/ˈvɛdʒtəbəɫz/want/ˈwɑnt/wear/ˈwɛɹ/wish/ˈwɪʃ/wonderful/ˈwəndɝfəɫ/worker/ˈwɝkɝ/zebra/ˈzibɹə/after/ˈæftɝ/a.m./ˌeɪˈɛm/animal/ˈænəməɫ/bakery/ˈbeɪkɝi/beef/ˈbif/blouse/ˈbɫaʊs/bookshop/ˈbʊkˌʃɑp/bread/ˈbɹɛd/breakfast/ˈbɹɛkfəst/build/ˈbɪɫd/busy/ˈbɪzi/buy/ˈbaɪ/celebration/ˌsɛɫəˈbɹeɪʃən/children's/ˈtʃɪɫdɹənz/chocolate/ˈtʃɔkɫət/christmas/ˈkɹɪsməs/cinema/ˈsɪnəmə/clerk/ˈkɫɝk/clothes/ˈkɫoʊðz/countryside/ˈkəntɹiˌsaɪd/crocodile/ˈkɹɑkəˌdaɪɫ/decorate/ˈdɛkɝˌeɪt/delicious/dɪˈɫɪʃəs/dictionary/ˈdɪkʃəˌnɛɹi/dinner/ˈdɪnɝ/doctor/ˈdɑktɝ/driver/ˈdɹaɪvɝ/elephant/ˈɛɫəfənt/enjoy/ˌɛnˈdʒɔɪ/enormous/iˈnɔɹməs/expensive/ɪkˈspɛnsɪv/factory/ˈfæktɝi/farmer/ˈfɑɹmɝ/fast/ˈfæst/festival/ˈfɛstəvəɫ/field/ˈfiɫd/film/ˈfɪɫm/finally/ˈfaɪnəɫi/firework/ˈfaɪɹˌwɝk/display/dɪsˈpɫeɪ/footballer/ˈfʊt.bɑː.lɚ/free/ˈfɹi/friendly/ˈfɹɛndɫi/funny/ˈfəni/get/ˈɡɛt/fishing/ˈfɪʃɪŋ/for/ˈfɔɹ/picnic/ˈpɪkˌnɪk/cruise/ˈkɹuz/grandparent/ˈɡɹændˌpɛɹənt/holiday/ˈhɑɫəˌdeɪ/hospital/ˈhɑˌspɪtəɫ/hotel/hoʊˈtɛɫ/hungry/ˈhəŋɡɹi/invite/ˌɪnˈvaɪt/jacket/ˈdʒækət/jeans/ˈdʒinz/join/ˈdʒɔɪn/jumper/ˈdʒəmpɝ/kangaroo/ˌkæŋɡɝˈu/leaf/ˈɫif/mum/ˈməm/fifteen/ˈfɪfˈtin/twenty-five/ˈtwɛntiˌfaɪv/thirty/ˈθɝˌdi/forty-five/ˈfɔɹtiˌfaɪv/studies/ˈstədiz/gets/ˈɡɛts/finishes/ˈfɪnɪʃɪz/at/ˈæt/listens/ˈɫɪsənz/daily/ˈdeɪɫi/routine/ɹuˈtin/into/ˈɪntu/jobs/ˈdʒɑbz/lemonade/ˈɫɛməˈneɪd`
    , `drink/drɪŋk/chicken/ˈtʃɪkən/menu/ˈmɛnju/dish/ˈdɪʃ/loves/ˈɫəvz/food/fuːd`
    , `started/ˈstɑɹtɪd/seem/ˈsim/received/ɹəˈsivd/letter/ˈɫɛtɝ/think/ˈθɪŋk/next-door/ˌnekst ˈdɔːr/neighbor/ˈneɪbɝ/lovely/ˈɫəvɫi/smile/ˈsmaɪɫ/wasn't/ˈwɑzənt/enough/iˈnəf/twelve/ˈtwɛɫv/going/ˈɡoʊɪn/she'll/ˈʃiɫ/would/ˈaɪd/practice/ˈwʊd/i'd/ˈpɹæktəs/dialogue/ˈdaɪəˌɫɔɡ/following/ˈfɑɫoʊɪŋ/which/ˈhwɪtʃ/sentence/ˈsɛntəns/tells/ˈtɛɫz/older/ˈoʊɫdɝ/than/ˈðæn/going/ˈɡoʊɪn/getting/ˈɡɛtɪŋ`
    , `long/ˈɫɔŋ/blond/ˈbɫɑnd/hair/ˈhɛɹ/turns/ˈtɝnz/dialogues/ˈdaɪəˌɫɔɡz/use/ˈjus/adjectives/ˈædʒɪktɪvz/hair/ˈhɛɹ/fat/ˈfæt/long/ˈɫɔŋ/straight/ˈstɹeɪt/curly/ˈkɝɫi/bald/ˈbɔɫd/dark/ˈdɑɹk/fair/ˈfɛɹ/pleasure/ˈpɫɛʒɝ/all/ˈɔɫ/mine/ˈmaɪn/principal/ˈpɹɪnsəpəɫ/excuse/ɪkˈskjus/mrs/ˈmɪsɪz/must/ˈməst/certainly/ˈsɝtənɫi/ma'am/ˈmæm/not/ˈnɑt/ones/ˈwənz/spend/ˈspɛnd/most/ˈmoʊs/each/ˈitʃ/us/ˈəs/however/ˌhaʊˈɛvɝ/character/ˈkɛɹɪktɝ/most/ˈmoʊs/sociable/ˈsoʊʃəbəɫ/also/ˈɔɫsoʊ/extremely/ɛkˈstɹimɫi/kind/ˈkaɪnd/generous/ˈdʒɛnɝəs/spends/ˈspɛndz/volunteer/ˌvɑɫənˈtɪɹ/local/ˈɫoʊkəɫ/orphanage/ˈɔɹfənədʒ/hard-working/ˌhɑɹdhˈwɝkɪŋ/always/ˈɔɫˌweɪz/grades/ˈɡɹeɪdz/unlike/ənˈɫaɪk/quite/ˈkwaɪt/reserved/ɹiˈzɝvd/public/ˈpəbɫɪk/both/ˈboʊθ/prefer/pɹəˈfɝ/outside/ˈaʊtˈsaɪd/school's/ˈskuɫz/star/ˈstɑɹ/soccer/ˈsɑkɝ/player/ˈpɫeɪɝ/peace/ˈpis/as/ˈæz/outgoing/ˈaʊtˌɡoʊɪŋ/telling/ˈtɛɫɪŋ/jokes/ˈdʒoʊks/sense/ˈsɛns/humor/ˈhjumɝ/sometimes/ˈsəmˌtaɪmz/annoy/əˈnɔɪ/although/ˌɔɫˈðoʊ/personalities/ˌpɝsəˈnæɫɪtiz/best/ˈbɛst/none/ˈnən/helps/ˈhɛɫps/causes/ˈkɑzəz/problems/ˈpɹɑbɫəmz/exam/ɪɡˈzæm/affect/əˈfɛkt/takes/ˈteɪks/places/ˈpɫeɪsəz/dislike/dɪˈsɫaɪk/laugh/ˈɫæf/tired/ˈtaɪɝd/feel/ˈfiɫ/bad/ˈbæd/thing/ˈθɪŋ/same/ˈseɪm/or/ˈɔɹ/characters/ˈkæɹəktɝz/fourteen/ˈfɔɹˈtin/lives/ˈɫaɪvz/elder/ˈɛɫdɝ/humorous/ˈhjumɝəs/helpful/ˈhɛɫpfəɫ/fill/ˈfɪɫ/form/ˈfɔɹm/prompts/ˈpɹɑmps/language/ˈɫæŋɡwədʒ/focus/ˈfoʊkəs/simple/ˈsɪmpəɫ/tenses/tens/general/ˈdʒɛnɝəɫ/truths/ˈtɹuθs/paragraphs/ˈpæɹəˌɡɹæfs/verbs/ˈvɝbz/brackets/ˈbɹækəts/move/ˈmuv/set/ˈsɛt/rise/ˈɹaɪz/describe/dɪsˈkɹaɪb/people/ˈpipəɫ/wearing/ˈwɛɹɪŋ/person/ˈpɝsən`
]

let ArrStr11 = arrstr11.join("/").split("\n    ").join("").split("/");
for (let i = 0; i < ArrStr11.length; i += 2) {
    arrIPA.push({
        "text": ArrStr11[i],
        "ipa": ArrStr11[i + 1].split("/").join("")
    })
}

let arr1 = `UNIT 1
GETTING STARTED.
LISTEN AND READ.
Hello, Lan.
Hi Hoa. You seem happy
I am. I received a letter from my friend Nien today.
Do I know her?
I don't think so. She was my next-door neighbor in Hue.
What does she look like?
Oh. She's beautiful. Here is her photograph.
What a lovely smile! Was she your classmate?
Oh, no. She wasn't old enough to be in my class.
How old is she?
Twelve. She's going to visit me. She'll be here for Christmas.
Would you like to meet her?
I'd love to.



Practice the dialogue with a partner.
Answer the following questions.
Does Lan know Nien?
Which sentence tells you that Hoa is older than Nien?
When is Nien going to visit Hoa?
SPEAK
Read dialogue
This person is short and thin.
She has long blond hair.
Is this Mary?
Now take turns making similar dialogues.
Use the adjectives in the table.
build
hair
tall
In short,
fat
slim
thin
long
Straight
curly
Bald
black
dark
Blond
fair
brown



LISTEN.
What do you do?
Nice to meet you
It’s a pleasure to meet you.
I'd like you to come and meet me.
Hello, Nam.
Morning, Hoa.
Nice to meet you too, Nam.
The pleasure is all mine. Miss Lien.
Oh, there is the principal. Please excuse me, Mrs. Vi, but I must talk to him.
Certainly.



Hello, ma'am.
Hello, young man.
Bao is my classmate's grandmother.
What was that?
Classmate! Bao is my classmate.
I see.
Isn't that Lan’s father, my dear?
I'm not sure. Go and ask him.
Excuse me. Are you Mr. Thanh?
Yes, I am.
I’m Lam, Nga's father.
READ
I am lucky enough to have a lot of friends.
Of all my friends, Khai and Song are the ones I spend most of my time with.
Each of us, however, has a different character.
Bao is the most sociable.
He is also extremely kind and generous.
He spends his free time doing volunteer work at a local orphanage, and he is a hard-working student who always gets good grades.
Unlike Bao, Khai and Song are quite reserved in public.
Both boys enjoy school, but they prefer to be outside the classroom.
Song is our school's star soccer player, and Khai likes the peace and quiet of the local library.



I am not as outgoing as Bao, but I enjoy telling jokes.
My friends usually enjoy my sense of humor.
However, sometimes my jokes annoy them.
Although we have quite different personalities, the four of us are very close friends.
Choose the best answer and write it.
three
All
four
None.
It helps him make friends.
It causes problems at exam time.
It does not affect his school work.
which takes up a lot of time.
They like quiet places.
They don't talk much in public.
They dislike school.
They enjoy sports.
answer
Do not listen to
laugh at
I get tired of
Now, answer the questions.
How do you feel about having a lot of friends?
Who is the most sociable?
Who likes reading?
What is the bad thing about Ba’s jokes?
Where does Bao spend his free time?
Do you and your close friends have the same or different characters?



WRITE
Read the information about Tam.
His name's Le Van Tam and he’s fourteen years old.
He lives at 26 Tran Phu Street in Ha Noi with his mother, father and his elder brother, Hung.
He's tall and thin and has short black hair.
He is sociable, humorous and helpful.
His best friends are Ba and Bao.
Fill in a similar form for your partner.
Use the following questions as prompts.



Language focus
Simple tenses.
present simple to talk about general truths.
Complete the paragraphs.
Use the correct form of the verbs in brackets.
Complete the dialogue.
Use the correct form of the verbs in the box.
You will have to use some verbs more than once.
be
Move.
Set.
rise


Look and describe
How many people are there in the picture?
What does each person look like?
What is each person wearing?`
let arr2 = `BÀI 1
BẮT ĐẦU.
NGHE VÀ ĐỌC.
Xin chào Lan.
Chào Hoa. Bạn có vẻ hạnh phúc
Tôi là. Hôm nay tôi nhận được một lá thư từ bạn Niên.
Tôi có biết cô ta ko?
Tôi không nghĩ vậy. Cô ấy từng là hàng xóm gần nhà tôi ở Huế.
Cô ấy trông như thế nào?
Ồ. Cô ấy đẹp. Đây là bức ảnh của cô ấy.
Một nụ cười đáng yêu! Cô ấy là bạn cùng lớp của anh à?
Ôi không. Cô ấy không đủ lớn để học trong lớp của tôi.
Cô ấy bao nhiêu tuổi?
Mười hai. Cô ấy sẽ đến thăm tôi. Cô ấy sẽ ở đây vào dịp Giáng sinh.
Bạn có muốn gặp cô ấy không?
Tôi rất thích.



Thực hành đối thoại với đối tác.
Trả lời các câu hỏi sau.
Có phải Lan biết Niên?
Câu nào cho bạn biết Hoa nhiều tuổi hơn Niên?
Khi nao Niên sẽ đến thăm Hòa?
NÓI
Đọc đối thoại
Người này thấp và gầy.
Cô ấy có mái tóc dài màu vàng.
Đây có phải là Mary không?
Bây giờ hãy lần lượt thực hiện các cuộc đối thoại tương tự.
Sử dụng các tính từ trong bảng.
xây dựng
tóc
cao
In ngắn,
mập
mảnh mai
gầy
Dài
Thẳng
quăn
Hói
đen
tối
Tóc vàng
công bằng
màu nâu



NGHE.
Bạn làm nghề gì?
Hân hạnh được biết bạn
Hân hạnh được gặp bạn.
Tôi muốn bạn đến và gặp tôi.
Xin chào, Nam.
Chào Hoa.
Rất vui được gặp bạn, Nam.
Những niềm vui là tất cả của tôi. Hoa hậu Liên.
Ồ, có hiệu trưởng. Bà Vi xin lỗi, nhưng tôi phải nói chuyện với anh ta.
Chắc chắn.



Xin chào thưa cô.
Xin chào, bạn trẻ.
Bảo là bà của bạn cùng lớp với tôi.
Đó là gì?
Bạn cùng lớp! Bảo là bạn học của tôi.
Tôi thấy.
Đó không phải là bố của Lan sao con yêu?
Tôi không chắc. Đi và hỏi anh ta.
Xin lỗi. Bạn có phải là Mr. Bar?
Vâng là tôi.
Tôi là Lâm, bố của Nga.
ĐỌC
Tôi đủ may mắn để có rất nhiều bạn bè.
Trong tất cả những người bạn của tôi, Khải và Song là những người tôi dành nhiều thời gian nhất.
Tuy nhiên, mỗi người chúng ta đều có một tính cách khác nhau.
Bảo là xã giao nhất.
Ông cũng là vô cùng tốt bụng và hào phóng.
Anh dành thời gian rảnh để làm công việc tình nguyện tại trại trẻ mồ côi địa phương, và anh là một học sinh chăm chỉ luôn đạt điểm cao.
Khác với Bảo, Khải và Song khá dè dặt trước công chúng.
Cả hai cậu con trai đều thích đi học, nhưng họ thích ở ngoài lớp học hơn.
Song là cầu thủ bóng đá ngôi sao của trường chúng tôi, còn Khải thích sự yên bình và tĩnh lặng của thư viện địa phương.



Tôi không hướng ngoại như Bảo, nhưng tôi thích kể chuyện cười.
Bạn bè của tôi thường thích thú với khiếu hài hước của tôi.
Tuy nhiên, đôi khi những trò đùa của tôi làm họ khó chịu.
Mặc dù chúng tôi có tính cách khá khác nhau, bốn chúng tôi là những người bạn rất thân.
Chọn câu trả lời đúng nhất và viết nó.
số ba
Tất cả các
bốn
Không có.
Nó giúp anh ấy kết bạn.
Nó gây ra vấn đề vào thời gian thi.
Nó không ảnh hưởng đến việc học ở trường của anh ấy.
chiếm nhiều thời gian.
Họ thích những nơi yên tĩnh.
Họ không nói nhiều ở nơi công cộng.
Họ không thích trường học.
Họ thích thể thao.
trả lời
Đừng nghe
cười vào
Tôi cảm thấy mệt mỏi vì
Bây giờ, hãy trả lời các câu hỏi.
Bạn cảm thấy thế nào khi có nhiều bạn bè?
Ai là người xã hội nhất?
Ai thích đọc sách?
Chuyện dở khóc dở cười của Ba là gì?
Thời gian rảnh rỗi của Bảo ở đâu?
Bạn và những người bạn thân của bạn có nhân vật giống nhau hay khác nhau?



VIẾT
Đọc thông tin về Tâm.
Tên anh ấy Lê Văn Tam và anh ấy mười bốn tuổi.
Anh sống tại 26 Trần Phú, Hà Nội cùng mẹ, cha và anh trai Hùng.
Anh ấy cao, gầy và có mái tóc ngắn màu đen.
Anh ấy hòa đồng, hài hước và hay giúp đỡ.
Bạn thân nhất của anh ấy là Ba và Bảo.
Điền vào một biểu mẫu tương tự cho đối tác của bạn.
Sử dụng các câu hỏi sau khi gợi ý.



Ngôn ngữ trọng tâm
Thì đơn.
trình bày đơn giản để nói về sự thật chung.
Hoàn thành các đoạn văn.
Sử dụng dạng đúng của các động từ trong ngoặc.
Hoàn thành đoạn đối thoại.
Sử dụng dạng đúng của các động từ trong hộp.
Bạn sẽ phải sử dụng một số động từ nhiều hơn một lần.
thì là ở
Di chuyển.
Đặt.
nổi lên


Nhìn và mô tả
Có bao nhiêu người trong bức tranh?
Mỗi người nhìn trông như thế nào?
Mỗi người mặc gì?`

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
                        arr_Hold_not_ipa.push(ee);
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



        res.status(200).json({ success: true, notipa: arr_Hold_not_ipa, data: arrFinal })
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
    }
}

String.prototype.FN_sort = function () {
    return this.toLowerCase().split(/[\?#!-':()’\"\t.,]+/).join("")
}

