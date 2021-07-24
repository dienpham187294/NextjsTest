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
]

let ArrStr11 = arrstr11.join("/").split("\n    ").join("").split("/");
for (let i = 0; i < ArrStr11.length; i += 2) {
    arrIPA.push({
        "text": ArrStr11[i],
        "ipa": ArrStr11[i + 1].split("/").join("")
    })
}

let arr1 = `Unit 11
What time is it?
Look, listen and repeat.
It's time to get up, Phong.
What time is it, Mum?
It's seven o'clock.
Today’s Sunday and I don’t have to go to school.
But it’s time for breakfast.
Oh yes, Mum.
Point and say.
What time is it?
seven
seven fifteen.
seven twenty-five.
seven thirty.
seven forty-five.
Work pairs. Ask your partners what time it is.


Listen and tick.
look and write.
What time is it?
It s four o’clock
Let’s sing.
What time is it?
It's six o’clock.
It's time to get up.
What time is it?
It's six fifteen.
It’s time for breakfast.
What time is it?
It's six forty-five 
It’s time for school.


Look, listen and repeat.
What time do you get up?
six o’clock.
What time is it now?
Seven fifteen.
Oh no! We're late for school.
Let's run. 
Yes!
Point and say.
get up
have breakfast
have dinner
go to bed
Let’s talk.
What time is it?


Listen and draw the time.
Draw and write the time.
What time do you get up?
What time do you go to school?
What time do you have dinner?
What time do you go to bed?
Let’s play.


Listen and repeat.
cook
book
noon
school
My mother cooks at six o'clock.
Your book is on the table.
I play football at noon.
They have lunch at school.
Listen and write. Then say aloud.
Let’s chant.
What time do you go to school?
Seven o'clock in the morning ​is time for school.
What time do you have dinner?
Six o'clock in the evening is time for dinner.


Read and complete.
Phong studies at Nguyen Du Primary School. 
Every day he gets up at 6.30. 
He goes to school at 7 a.m. 
School starts at 7.30 a.m. and finishes at 4.30 p.m. He goes home at 5 o’clock. 
He has dinner at 7.15 in the evening. 
Then he does his homework or listens to music. 
He goes to bed at 9.45.
Let’s write.
Project
Complete your daily routine. 
Then tell the class about it.
In the morning
In the afternoon
In the evening

Unit 12
What does your father do?
Look, listen and repeat.
Class, get into pairs, please! 
Interview your partner about the jobs of his or her family members.
Yes OK.
What does your father do, Mai?
He's a teacher.
And what about your mother?
She’s a nurse.
What does your sister do?
She’s a student.
Point and say.
father
farmer
mother
nurse
uncle
driver
brother
factory worker
Work in pairs. 
Ask your partners about the jobs of their family members.


Listen and tick.
Look and write.
Let’s sing.
my family
This is a picture of my family.
This is my grandpa. He’s a driver.
This is my grandma. She's a factory worker.
This is my father. He's a farmer.
This is my mother. She's a nurse.
And this is me. I am a pupil.


Look, listen, and repeat.
Let's play a game of jobs.
She’s a doctor. Where does she work?
in a hospital.
Well done! Now it’s your turn.
He's a worker. Where does he work?
In a factory.
Great.
She's a farmer. Where does she work?
in a field.
Correct!
Point and say.
doctor
in a hospital 
farmer
in a field
worker
in a factory 
clerk
in an office
Let’s talk.
What does your father do?
What does your mother do?
What does your grandpa do?
What does your grandma do?
What does your brother do?
What does your sister do?
Where does he work?
Where does she work?

I Listen and number.
Look and write.
Let’s play.


Listen and repeat.
field
piece
teacher
reading
My grandpa works in a field. 
I want a piece of chocolate. 
My mother is a teacher. 
She's reading a book now.
Listen and circle. Then say sentences with the circled words.
field
piece
reading
Let’s chant.
Jobs and places of work
What does your father do? 
He's a farmer. 
Where does he work? 
In a field.
What does your mother do? 
She’s a teacher. 
Where does she work? 
In a school.
What does your sister do? 
She's a worker 
Where does she work? 
In a factory.
What does your brother do? 
He's a clerk. 
Where does he work? 
In an office.



Read and complete.
Report
This is the report of my interview with Phong. 
His father is a teacher. 
He works in Le Hong Phong Primary School. 
His mother is a nurse. 
She works in Thanh Nhan Hospital. 
Phong has a brother but he doesn’t have a sister. His brother is a worker in a car factory. 
And as you know. 
Phong is a pupil in Class 4A. 
Thank you for reading.
Write about the jobs of your family members and where they work.
Project
Interview two classmates about their parents’ jobs. Tell the class about them.
Job
Place of work

Unit 13
Would you like some milk?
Look, listen and repeat.
What’s your favourite food?
It's fish.
How about you, Tom?
I like chicken.
What’s your favourite drink, Mai?
it's orange juice.
Do you like orange juice?
No. I don’t. I like milk.
Point and say.
food
beef
pork
drink
orange juice 
water
Work in pairs. Ask your partners about their favourite food and drink.


Listen and tick.
What’s his favourite food?
What’s his favourite drink?
What is her favourite food and drink?
Look and write.
What’s his favourite food?
What's her favourite drink?
What's his favourite food and drink?
Let’s sing.
My favourite food and drink
What's your favourite food? 
My favourite food is beef.
my favourite drink is milk.
Beef and milk, they're my favourite food and drink.


Lesson 2
Look, listen and repeat.
Would you like some noodles?
Yes, please.
I love noodles.
Would you like some milk? 
No, thanks.
What about orange juice?
No, thank you.
How about lemonade?
Lemonade! Yes, please!
That's my favourite drink.
Point and say.
bread
rice
vegetables
lemonade
Yes, please
No, thanks.
Let’s talk.
What’s your favourite food?
What’s your favourite drink?


Listen and number.
Look and write.
Menu
Let’s play.


Listen and repeat.
beef 
leaf 
fish 
dish
My favourite food is beef.
The leaf is yellow.
Would you like some fish?
That’s a big dish of fish.
Listen and tick. Then write and say aloud.
Let’s chant.
Would you like some fish?
Yes, please. I love fish.
It’s my favourite food.
Would you like some milk?
Yes, please. I love milk
It's my favourite drink. 



Read and complete.
Hi. My name is Linda.
I like beef. It is my favourite food. 
My favourite drink is orange juice. 
I don’t like vegetables. 
My younger brother Peter doesn’t like beef. 
He loves chicken. 
It is his favourite food. 
He loves lemonade too.
Lemonade is his favourite drink. 
He drinks it every day.
Favourite food 
Favourite drink
Write about your favourite food and drink.
Project!
Interview your classmates about their favourite food and drink. 
Then report the results to the class.

after that 
afternoon
a.m.
animal 
bakery 
bay 
bear 
beautiful 
beef
big
birthday present 
blouse 
bookshop 
bread 
breakfast 
build 
busy 
buy 
celebration 
chicken 
Children's Day
chocolate 
Christmas 
cinema 
clerk 
clothes 
complete



cook 
countryside 
crocodile 
dangerous 
decorate 
delicious 
dictionary 
dinner 
doctor 
dong 
driver 
elephant 
enjoy 
enormous 
evening 
expensive 
factory 
farmer 
fast
festival 
field 
film
finally
firework display 
first
fish
footballer
free




friendly
funny
get
go
go fishing
go for a picnic
go for a walk
go home
go on a boat cruise
go skating
go to bed
go to school 
grandparent 
have breakfast
have lunch
have dinner
holiday
hospital 
hotel 
house 
how much 
hungry 
Invite
jacket
jeans 
join
jumper 
kangaroo 
late
leaf



lemonade
lucky money 
lunch 
make 
medicine
milk
mobile 
phone 
monkey 
morning 
next 
nice
noodles
noon 
nurse 
o'clock 
office 
old
orange juice 
pharmacy 
phone number
p.m. 
pork 
prepare 
relative 
repeal 
rice 
sandals


sandcastle 
scarf
scary 
scenery 
sea 
seafood 
shoes 
short 
skirt 
slim
small 
smart 
start 
stay 
strong 
student
summer
summer 
holidays
supermarket 
sweet 
sweet shop 
swimming pool 
tall
Teachers' Day  ​
then 
thick
thin


tiger
time 
trousers 
uncle 
usually 
vegetables 
visit
want 
water
wear 
wish 
wonderful 
worker
young 
zebra
zoo`
let arr2 = `Đơn vị 11
Mấy giờ rồi?
Nhìn, nghe và lặp lại.
Đến giờ dậy rồi Phong ơi.
Mấy giờ rồi mẹ?
Bây giờ là bảy giờ.
Hôm nay là Chủ nhật và tôi không phải đi học.
Nhưng đã đến giờ ăn sáng.
Ồ vâng, mẹ.
Chỉ và nói.
Mấy giờ rồi?
bảy
bảy giờ mười lăm.
bảy hai lăm.
bảy giờ rưỡi.
bảy giờ bốn mươi lăm.
Làm việc cặp. Hỏi đối tác của bạn bây giờ là mấy giờ.


Nghe và đánh dấu.
nhìn và viết.
Mấy giờ rồi?
Bây giờ là bốn giờ đồng hồ
Hãy hát nào.
Mấy giờ rồi?
Bây giờ là sáu giờ đồng hồ.
Đã đến lúc phải dậy.
Mấy giờ rồi?
Bây giờ là sáu giờ mười lăm.
Đã đến giờ ăn sáng.
Mấy giờ rồi?
Bây giờ là sáu giờ bốn mươi lăm
Đã đến giờ học.


Nhìn, nghe và lặp lại.
Bạn dậy lúc mấy giờ?
sáu giờ đúng.
Bây giờ là mấy giờ?
Bảy giờ mười lăm.
Ôi không! Chúng tôi đi học muộn.
Chạy thôi.
Đúng!
Chỉ và nói.
thức dậy
ăn sáng
ăn tối
đi ngủ
Hãy nói chuyện.
Mấy giờ rồi?


Lắng nghe và rút ra thời gian.
Vẽ và viết thời gian.
Bạn dậy lúc mấy giờ?
Thời gian nào bạn đi học?
Bạn ăn tối lúc mấy giờ?
Bạn đi ngủ lúc mấy giờ?
Hãy chơi.


Lắng nghe và lặp lại.
đầu bếp
sách
Buổi trưa
trường học
Mẹ tôi nấu ăn lúc sáu giờ.
Cuốn sách của bạn đang ở trên bàn.
Tôi chơi bóng đá vào buổi trưa.
Họ ăn trưa ở trường.
Nghe và viết. Sau đó nói to.
Hãy hát đồng ca.
Thời gian nào bạn đi học?
Bảy giờ sáng là thời gian đến trường.
Bạn ăn tối lúc mấy giờ?
Sáu giờ tối là lúc ăn tối.


Đọc và hoàn thành.
Phong học trường Tiểu học Nguyễn Du.
Mỗi ngày anh ấy dậy lúc 6h30.
Anh ấy đến trường lúc 7 giờ sáng.
Trường học bắt đầu lúc 7h30 sáng và kết thúc lúc 4h30 chiều. Anh ấy về nhà lúc 5 giờ đồng hồ.
Anh ấy ăn tối lúc 7 giờ 15 tối.
Sau đó, anh ấy làm bài tập về nhà hoặc nghe nhạc.
Anh ấy đi ngủ lúc 9h45.
Cùng viết nào.
Dự án
Hoàn thành thói quen hàng ngày của bạn.
Sau đó kể cho cả lớp nghe về điều đó.
Vào buổi sáng
vào buổi chiều
Vào buổi tối

Đơn vị 12
Ba của bạn làm nghề gì?
Nhìn, nghe và lặp lại.
Cả lớp, làm ơn xếp thành cặp!
Phỏng vấn đối tác của bạn về công việc the của các thành viên trong gia đình của họ.
Vâng ok.
Bố bạn làm nghề gì vậy Mai?
Anh ấy là một giáo viên.
Còn mẹ bạn thì sao?
Cô ấy là một y tá.
Chị gái của bạn làm nghề gì vậy?
Cô ấy là một sinh viên.
Chỉ và nói.
cha
nông dân
mẹ
cô y tá
Chú
tài xế
Anh trai
công nhân nhà máy
Làm việc theo cặp.
Hỏi đối tác của bạn về công việc của các thành viên trong gia đình của họ.


Nghe và đánh dấu.
Nhìn và viết.
Hãy hát nào.
gia đình tôi
Đây là một hình ảnh của gia đình tôi.
Đây là ông nội của tôi. Anh ấy là một người lái xe.
Đây là bà của tôi. Cô ấy là một công nhân nhà máy.
Đây là bố tôi. Anh ấy là một nông dân.
Đây là mẹ tôi. Cô ấy là một y tá.
Và đây là tôi. Tôi là học sinh.


Nhìn, nghe và lặp lại.
Hãy chơi trò chơi công việc.
Cô ấy là một bác sĩ. Cô ấy làm việc ở đâu?
trong một bệnh viện.
Làm tốt! Bây giờ đến lượt của bạn.
Anh ấy là một công nhân. Anh ấy làm việc ở đâu?
Trong nhà máy.
Tuyệt vời.
Cô ấy là một nông dân. Cô ấy làm việc ở đâu?
trong một lĩnh vực.
Chính xác!
Chỉ và nói.
Bác sĩ
trong một bệnh viện
nông dân
trong một cánh đồng
người làm việc
trong nhà máy
nhân viên bán hàng
trong một văn phòng
Hãy nói chuyện.
Ba của bạn làm nghề gì?
Mẹ bạn làm nghề gì?
Ông của bạn làm nghề gì?
Bà của bạn làm nghề gì?
Anh trai của bạn làm nghề gì?
Chị gái của bạn làm nghề gì vậy?
Anh ấy làm việc ở đâu?
Cô ấy làm việc ở đâu?

Tôi Lắng nghe và đánh số.
Nhìn và viết.
Hãy chơi.


Lắng nghe và lặp lại.
đồng ruộng
mảnh
giáo viên
đọc hiểu
Ông tôi làm ruộng.
Tôi muốn một miếng sô cô la.
Mẹ tôi là giáo viên.
Bây giờ cô ấy đang đọc một cuốn sách.
Nghe và khoanh tròn. Sau đó nói các câu với các từ được khoanh tròn.
đồng ruộng
mảnh
đọc hiểu
Hãy hát đồng ca.
Công việc và nơi làm việc
Ba của bạn làm nghề gì?
Anh ấy là một nông dân.
Anh ấy làm việc ở đâu?
Trong một lĩnh vực.
Mẹ bạn làm nghề gì?
Cô ấy là cô giáo.
Cô ấy làm việc ở đâu?
Trong một trường học.
Chị gái của bạn làm nghề gì vậy?
Cô ấy là một công nhân
Cô ấy làm việc ở đâu?
Trong nhà máy.
Anh trai của bạn làm nghề gì?
Anh ấy là một thư ký.
Anh ấy làm việc ở đâu?
Trong một văn phòng.



Đọc và hoàn thành.
Báo cáo
Đây là bản tường trình cuộc phỏng vấn của tôi với Phong.
Cha của anh ấy là một giáo viên.
Anh công tác tại trường tiểu học Lê Hồng Phong.
Mẹ anh ấy là một y tá.
Cô ấy làm việc ở bệnh viện Thanh Nhàn.
Phong có anh trai nhưng không có em gái. Anh trai của anh ấy là công nhân trong một nhà máy sản xuất ô tô.
Và như bạn biết.
Phong là học sinh lớp 4A.
Cảm ơn bạn đã đọc.
Viết về công việc của các thành viên trong gia đình bạn và nơi họ làm việc.
Dự án
Phỏng vấn hai bạn cùng lớp về công việc của cha mẹ họ. Kể cho cả lớp nghe về chúng.
Việc làm
Nơi làm việc

Đơn vị 13
Bạn có muốn một ít sữa?
Nhìn, nghe và lặp lại.
Món ăn yêu thích của bạn là gì?
Đó là cá.
Còn bạn thì sao, Tom?
Tôi thích gà.
Đồ uống yêu thích của bạn là gì, Mai?
đó là nước cam.
Bạn thích nước cam?
Không, tôi không. Tôi thích sữa.
Chỉ và nói.
món ăn
thịt bò
thịt heo
uống
nước cam
nước
Làm việc theo cặp. Hỏi đối tác của bạn về đồ ăn và thức uống yêu thích của họ.


Nghe và đánh dấu.
Món ăn yêu thích của anh ấy là gì?
Đồ uống yêu thích của anh ấy là gì?
Đồ ăn thức uống yêu thích của cô ấy là gì?
Nhìn và viết.
Món ăn yêu thích của anh ấy là gì?
Đồ uống yêu thích của cô ấy là gì?
Đồ ăn và thức uống yêu thích của anh ấy là gì?
Hãy hát nào.
Đồ ăn thức uống yêu thích của tôi
Món ăn yêu thích của bạn là gì?
Thức ăn yêu thích của tôi là thịt bò.
thức uống yêu thích của tôi là sữa.
Thịt bò và sữa, chúng là đồ ăn thức uống yêu thích của tôi.


Bài 2
Nhìn, nghe và lặp lại.
Bạn có muốn ăn mì không?
Vâng, làm ơn.
Tôi yêu mì.
Bạn có muốn một ít sữa?
Không, cám ơn.
Còn nước cam thì sao?
Không cám ơn.
Làm thế nào về nước chanh?
Nước chanh! Vâng, làm ơn!
Đó là thức uống yêu thích của tôi.
Chỉ và nói.
bánh mỳ
cơm
rau
Nước chanh
Vâng, làm ơn
Không, cám ơn.
Hãy nói chuyện.
Món ăn yêu thích của bạn là gì?
Đồ uống ưa thích của bạn là gì?


Nghe và số.
Nhìn và viết.
Thực đơn
Hãy chơi.


Lắng nghe và lặp lại.
thịt bò
Lá cây
cá
món ăn
Thức ăn yêu thích của tôi là thịt bò.
Lá màu vàng.
Bạn muốn một số cá?
Đó là một món cá lớn.
Nghe và đánh dấu. Sau đó viết và nói to.
Hãy hát đồng ca.
Bạn muốn một số cá?
Vâng, làm ơn. Tôi yêu cá.
Đó là món ăn yêu thích của tôi.
Bạn có muốn một ít sữa?
Vâng, làm ơn. tôi yêu sữa
Đó là thức uống yêu thích của tôi.



Đọc và hoàn thành.
Chào. Tên tôi là Linda.
Tôi thích thịt bò. Nó là món ăn yêu thích của tôi.
Thức uống yêu thích của tôi là nước cam.
Tôi không thích rau.
Em trai tôi, Peter không thích thịt bò.
Anh ấy yêu gà.
Nó là món ăn yêu thích của anh ấy.
Anh ấy cũng thích nước chanh.
Nước chanh là thức uống yêu thích của anh ấy.
Anh ấy uống nó mỗi ngày.
Món ăn yêu thích
Đồ uống ưa thích
Viết về đồ ăn và thức uống yêu thích của bạn.
Dự án!
Phỏng vấn bạn học của bạn về đồ ăn và thức uống yêu thích của họ.
Sau đó báo cáo kết quả trước lớp.

sau đó
buổi chiều
sáng.
thú vật
cửa hàng bánh mì
Vịnh
chịu
đẹp
thịt bò
to lớn
quà sinh nhật
áo cánh
hiệu sách
bánh mỳ
bữa ăn sáng
xây dựng
bận
mua
lễ kỷ niệm
gà
Ngày trẻ em
sô cô la
Giáng sinh
Rạp chiếu phim
nhân viên bán hàng
quần áo
hoàn chỉnh



đầu bếp
vùng nông thôn
Cá sấu
sự nguy hiểm
trang trí
thơm ngon
từ điển
bữa ăn tối
Bác sĩ
dong
tài xế
con voi
vui thích
lớn lao
tối
đắt tiền
nhà máy
nông dân
Nhanh
ngày hội
đồng ruộng
phim ảnh
cuối cùng
bắn pháo hoa
đầu tiên
cá
cầu thủ bóng đá
miễn phí




thân thiện
vui
được
đi
đi câu cá
một chuyến đi dã ngoại
đi dạo
về nhà
đi du thuyền
đi trượt băng
đi ngủ
đi học
ông bà
ăn sáng
bữa trưa
ăn tối
ngày lễ
bệnh viện
khách sạn
căn nhà
bao nhiêu
đói bụng
Mời gọi
Áo khoác
Quần jean
tham gia
jumper
con chuột túi
muộn
Lá cây



Nước chanh
tiền lì xì
Bữa trưa
chế tạo
dược phẩm
Sữa
di động
điện thoại
con khỉ
buổi sáng
tiếp theo
đẹp
mì sợi
không bật
cô y tá
giờ
văn phòng
cũ
nước cam
tiệm thuốc
số điện thoại
buổi chiều.
thịt heo
chuẩn bị các
quan hệ
bãi bỏ
cơm
Dép xăng đan


lâu đài cát
khăn quàng cổ
đáng sợ
phong cảnh
biển
Hải sản
đôi giày
ngắn ngủi
váy
mảnh mai
bé nhỏ
thông minh
bắt đầu
ở lại
mạnh
học sinh
mùa hạ
mùa hạ
ngày lễ
siêu thị
ngọt
cửa hàng bánh kẹo
Hồ bơi
cao
Ngày nhà giáo
sau đó
đặc
gầy


con hổ
thời gian
quần
Chú
thông thường
rau
thăm nom
muốn
nước
mặc
ước
Tuyệt vời
người làm việc
trẻ tuổi
ngựa rằn
vườn bách thú`

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
    return this.toLowerCase().split(/[\?#!-':()’\"\t.,]+/).join("")
}

