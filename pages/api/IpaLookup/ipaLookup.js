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
]

let ArrStr11 = arrstr11.join("/").split("\n    ").join("").split("/");
for (let i = 0; i < ArrStr11.length; i += 2) {
    arrIPA.push({
        "text": ArrStr11[i],
        "ipa": ArrStr11[i + 1].split("/").join("")
    })
}

let arr1 = `Unit 1
Nice to see you again
Lesson 1
Look, listen and repeat.
Good morning, class.
Good morning, Miss Hien.
Nice to see you again.
How are you, Mai?
I’m very well, thank you. And you?
Very well, too.
Good morning, Miss Hien. 
Sorry, I'm late! 
Yes, come in.
Point and say.
Good morning.
Good afternoon.
Good evening.
Greets your teachers in the classroom or at school.

Listen and tick.
Look and write.
Let’s sing.
Good morning to you
Good morning, Miss Hien.


Lesson 2
Look, listen and repeat.
Good morning, Miss Hien. 
I’m Hoa. I’m a new pupil.
Hi, Hoa. It’s nice to meet you.
Nice to meet you, too
Goodbye, Miss Hien.
See you tomorrow
Point and say.
Goodbye, you tomorrow.
Goodbye.
See you later.
Good night.
Let’s talk.
Nice to meet you. 
See you tomorrow.
Listen and number.
Look and write.
Let’s play.
Good morning. 
Good afternoon.
Hello.
Good night.
Nice to meet you.
Hi.
Good evening.
Goodbye.
Bye.


Lesson 3
Listen and repeat.
Night.
Hello, Linda.
Good night.
Listen and circle. 
Then write and say aloud.
Let’s chant.
Hello, friends!
Hello, I'm Linda.
I’m from England.
Nice to meet you, Linda.
Hello. I’m Nam.
I’m from Viet Nam.
Nice to meet you, Nam.
Hello, Linda.
Hello, Nam.
We’re friends.


Read and answer.
What is the girl’s name?
Where is she from?
What is the boy’s name?
Where is he from?
Write about you.
Write your name, your hometown, and your school.
Project
Make a card about yourself.
Then look at your classmate’s card and tell the teacher about him.
Name.
Hometown.	
School.
Class.

Unit 2
I'm from Japan.
Lesson 1
Look, listen and repeat.
Nice work!
Thanks.
Hi. I’m Nam.
Hi Nam. I’m Akiko.
Nice to meet you.
Nice to meet you, too.
Where are you from, Akiko?
I’m from Japan.
Oh no. Sorry.
Point and say.
Where are you from?
Malaysia
America
Australia
England
Work in pairs. Imagine you are Akiko. Introduce yourself and ask where your partner is from.

Listen and tick.
Look and write.
Use the information from Activities 1 and 2.
Let’s sing.
Where are you from?
Hi. I’m Mai from Viet Nam.
Hello, Mai. Nice to meet you.
Hello. I'm Akiko from Japan.
Hello, Akiko. Nice to meet you.
Hi. I’m Hakim from Malaysia.
Hello, Hakim. Nice to meet you.
Hello. I’m Linda from England.
Hello, Linda. Nice to meet you.

Lesson 2
Look, listen and repeat.
What’s your name, please?
My name s Akiko.
Where are you from?
I'm from Japan.
What nationality are you?
I'm Japanese.
Point and say.
What nationality are you?
Vietnamese
English
Australian
Malaysian
Let’s talk.
What’s your name?
Where are you from?
What nationality are you?


Listen and number.
Lool and write.
Let’s play.


Lesson 3
Listen and repeat.
Japan.
Vietnamese.
I’m from Japan.
I’m Vietnamese.
Listen and tick. Then say aloud.
Let’s chant.
What nationality are you?
Hello. What's your name?
Where are you from?
Where in Viet Nam?
My name’s Mai.
I’m from Viet Nam. 
What nationality are you?
Vietnamese. 
Hello. What’s your name?
My name's Akiko.
Where are you from?
Where in Japan?
I’m from Japan.
What nationality are you?
Japanese. 


Read and complete.
Hi. My name is Akiko. 
I am from Tokyo, Japan. 
I am Japanese. 
I am in Ha Noi now. 
I have a lot of friends. 
They are from different countries. 
Tony is from Sydney, Australia. 
He is Australian. 
Linda is from London, England. 
She is English. 
Tom is from New York, America. 
He is American.
Name
City
Country
Nationality
Let’s write.
Hi. My name is Quan. What is your name?
Project
Select a country.
Make a name card and draw the flag. Then show it to your class.
Name.
Country.	
City.		
Nationality.
Flag.

Unit 3
What day is it today?
Lesson 1
Look, listen and repeat.
Hello, class.
Hello, Miss Hien.
What day is it today, class?
It’s Monday.
Very good! 
And what do we have on Mondays?
We have English.
And when is the next English class?
On Wednesday!
No! It’s on Tuesday!
That's right, Mai. 
It’s on Tuesday.
Point and say.
What day is it today?
Work in pairs.
Ask your partners what day it is today.


Listen and tick.
Look and write.
I play football today.
I watch TV today.
I visit my grandparents today.
I go to the zoo today.
Let’s sing.
We have English today
What day is it today?
It’s Monday.
We have English today.
Do you have English on Wednesdays? No. We have English on Tuesdays, Thursdays, and Fridays.
What day is it today? 
It’s Wednesday.

We have English today.
Do you have English on Thursdays? 
No. We have English on Mondays, Wednesdays, and Fridays.

Lesson 2
Look, listen and repeat.
What do you do on Fridays, Nam?
I go to school in the morning.
How about in the afternoon?
I help my parents at home.
What do you do on Saturdays?
I visit my grandparents in the morning.
And in the afternoon?
I play football.
Point and say.
Go to school.
Listen to music.
Watch TV 
Play the guitar
Go to the zoo
Go swimming
Visit my friends
Play football
Help my parents.
Visit my grandparents
Let’s talk.
What day is it today?
What do you do on Mondays?


Listen and number.
Look and write.
Let’s play.
Monday
Tuesday
Saturday
Friday
Wednesday
Sunday
Today
Thursday
Tomorrow


Lesson 3
Listen and repeat.
First.
Thursday.
Her.
My birthday is on the first of July.
I have English on Thursdays.
Mr. Loc is her English teacher.
Listen and circle. 
Then say aloud.
Let’s chant.'
What day is it today?
It’s Friday.
What do you do on Fridays? 
I go to school in the morning. 
How about in the afternoon?
I go swimming.
What day is it tomorrow?
It’s Saturday.
Do you go to school on Saturdays?
No, I don’t.
What do you do on Saturdays?
I go to the zoo in the morning
I help my parents in the afternoon.


Read and answer.
My name is Mai. 
Today is Monday. 
It is a school day. 
I go to school on Mondays, Tuesdays, Wednesdays, Thursdays, and Fridays. 
I do not go to school at the weekend. 
I go swimming on Saturdays and visit my grandparents on Sundays.
What is her name?
What day is it today?
Does she go to school every day?
What does she do on Saturdays and Sundays?
Write about you.
What class are you in?
What day is it today?
Project
Interview one of your classmates about what he does at the weekend.
Saturdays and Sundays. 
Then report the results to the class.

Unit 4
When's your birthday?
Lesson 1
Look, listen and repeat.
Good morning, class.
Good morning. Miss Hien.
How are you?
We’re fine, thank you.
What is the date today, Nam?
It's the first of October.
No, it isn’t! 
It’s the second of October.
Point and say.
What is the date today?
The first of October.
The second of October.
The third of October.
The fourteenth of October.
The twenty-second of October.
The thirty-first of October.
Tell your class the date today.
Listen and tick.
Look and write.
Let’s sing
What’s the date today?
Is it the first of October?
Is it the first or is it the third?
It’s the second of October.


Lesson 2
Look, listen and repeat.
Oh! What a nice cake!
Yes. It’s my birthday today.
Happy birthday, Linda.
Thank you.
When’s your birthday, Mai?
It’s on the fifth of March.
Point and say.
When’s your birthday?
Let’s talk.
What is the date today? 
When’s your birthday?


Listed and number.
Look and write.
When's your birthday, Tony?
When’s your birthday, Mai?
When’s your birthday, Phong?
Let’s chant.
Months of the year.
January.
February.
March.
Now it’s time to start.
April, May, and June.
Sing a happy tune.
July, August, September.
Let’s play together.
October, November, and December.
Remember, remember, remember!


Lesson 3
Listen and repeat.
four
March
It’s the fourth of June.
My birthday is on the fifth of March.
Listen and circle. 
Then write and say aloud.
Let’s chant.
When's your birthday?
When's your birthday, Mai?
It's on the fifth of March.
When's your birthday, Mary? 
It’s on the fifth of March, too.
When’s your birthday, Nam? 
It’s on the second of April. 
When's your birthday, Peter? 
It's on the sixth of May.


Read and tick.
Dear penfriend.
My name's Peter. 
I'm from London, England. 
Today is Sunday, the sixth of May. 
It's my birthday. 
I'm happy. 
I have many birthdays presents from my friends. 
What about you? 
When's your birthday?
Write to me soon, Peter.
Where is Peter from?
When is his birthday?
What does he have from his friends?
Write an invitation card.
Please come to my birthday party.
Project
Make a birthday card. 
Then tell the class about it.

Unit 5
Can you swim
Look, listen and repeat.
Look. I can draw a cat.
It’s really nice.
What can you do, Phong?
I can dance.
What about you, Nam?
I can’t dance, but I can sing.
Point and say.
What can you do?
Work in pairs. 
Tell your partners what you can do.


Listen and tick.
Look and write.
Let’s play.
It can swim, but it can’t walk. 
What is it?
It’s a fish!


Look, listen and repeat.
Can you play volleyball?
No, I can’t, but I can play football.
Let’s play football.
Point and say.
Play table tennis
Play volleyball
Play the piano
Play the guitar
Let’s talk.
What can you do?
Listen and number.
Look and write.
Can you cycle?
Can you play the piano?
Can you play the guitar?
Can you play chess?


Let’s sing.
Can you swim?
Daddy.
Can you swim? 
Yes, I can.
I can swim.
Mummy.
Can you dance?
Yes, I can.
I can dance.
Baby.
Can you sing? 
Yes, I can.
I can sing.


Lesson 3
Listen and repeat.
sing
Swim
I can sing.
I can’t swim.
Listen and number. Then say aloud.
Can you sing?
Can you swim?
Can you sit on the chair?
Can you swing?
Let’s chant.
Can you sing?
Yes. I can.
I can sing.
Can you swim? 
No, I can’t.
I can’t swim.
Can you swing?
No, I can't.
I can't swing.


Read and complete.
Hi. My name is Mai. 
I like music very much. 
I can sing and dance, but I can't play the piano. 
My friends are Phong and Nam. 
Phong can play badminton, but he can't play football. 
Nam can play chess, but he can't swim.
Write about yourself.
My name is Linda. 
I can swim. 
I can ride a bike.
I can sing and dance, but I can't play the piano. 
What about you?
Project
Interview three friends and complete the chart.
Can you swim, Hoa?
Can you play badminton?
No, I can’t.
Yes. I can

REVIEW 1
Listen and tick.
Read and write.
This is my new friend. 
Her name is Linda. 
She is nine years old. 
She is from England. 
She is a pupil at Ha Noi International School. 
She likes music very much. 
She can play the guitar and sing many Vietnamese songs. 
She goes to the Music Club on Wednesdays.
Where is Linda from?
How old is she?
What can she do?
What does she do on Wednesdays?
Read and match.
What nationality are you? 
When’s your birthday?
What can you do?
What day is it today?
Goodbye, Mai.
It’s on the second of May.
See you later, Nam.
It’s Tuesday.
I’m American.
I can swim.
Look and write. Then say.
Write about you.

Short story.
Cat and Mouse.
Read and listen to the story.
Hello, I'm Miu the cat.
Hello, I'm Chit the mouse and this is my sister Mimi.
And those are my friends Maurice and Doris!
Hello.
Who are you?
Hello.
My name's Mary.
Is this Chit's house?
Hello, Mary!
Hello, Chit!
How are you?
I'm very well, thank you.
Miu, this is my cousin Mary.
Nice to meet you, Mary.
Nice to meet you too, Miu.
Where are you from, Mary?
I'm from America.
Really? 
Where in America?
New York.
Can you play the guitar?
Yes, I can. 
Can you play the guitar, too?
No, I can't. 
But I play the piano.
Great! Let's play! 

Complete the conversation.
Work in groups of three. Read the conversation. 
Then act it out with your own names.
Miu, this is my cousin Mary.
Nice to meet you, Mary.
Nice to meet you too.
Where are you from, Mary?
I’m from America
Really? Where in America?
New York.
Can you play the guitar?
Yes, I can. Can you play the guitar, too?
No, I can’t
Unscramble these words from the conversation.

Unit 6
Where's your school?
Look, listen and repeat.
This is my cousin, Jack. 
He’s in London.
hello, Jack. 
Nice to meet you. I'm Phong.
Nice to meet you too, Phong.
Phong and I study in the same school.
What’s the name of your school?
Nguyen Du Primary School.
Where’s your school?
It’s in Nguyen Du Street in Ha Noi.
What about you, Jack? 
What's the name of your school?
Oxford Primary School.
It’s in Oxford Street.
Point and say.
Where’s your school?
Work in pairs. 
Ask and answer questions about your school.
Ask its name and where it is.

Listen and tick.
Look and write.
Let’s sing.
This is the way we go to school.
So early in the morning. 
This is the way we go for a walk.



Listen and tick.
Look and write.
Look, listen and repeat
Hello, Phong. 
Where are you going?
I’m going to school.
Where’s your school?
It’s in Nguyen Du Street.
What class are you in?
I’m in Class 4A.
Point and say.
What class are you in?
What class is he in?
Let’s talk.
What’s the name of your school?
Where is it?
What class are you in?


Listen and number.
Look and write.
Where’s his school?
Where’s her school?
What class is she in?
What class is he in?
Let’s play.
My school is in Nguyen Trai Street.


Listen and repeat.
school
skipping
street
This is our school. 
Mai likes skipping.
My school is in Nguyen Du street.
Listen and circle. 
Then write and say aloud.
street
stream
skipping
school
skating
Let’s chant.
School.
This is the way we go to school. 
It’s so much fun!
Street, street, street!
This is the way we walk on the street. 

Read and complete.
Write about your school.
Write the name and address of your school and your class.
Project
Make a card about your friend’s school and class.

Unit 7
What do you like doing?
Look, listen and repeat.
Hello! welcome to my house. 
Come in.
Thank you.
I like reading, too.
I don’t like reading.
I like listening to music.
What do you like doing, Phong?
I like watching TV.
Point and say.
What do you like doing?
swimming	
cooking
collecting stamps
playing chess
Work in pairs. 
Tell your partners what you like doing.


Listen and tick.
Look and write.
Let’s sing.
I like doing things
I like reading comic books so much.
Reading comic books is lots of fun.
I like making models, too.
Making models is very cool.
I like collecting stamps so much. Collecting stamps is lots of fun.
I like playing football, too. 
Playing football is very cool.

Lesson 2
Look, listen and repeat.
What’s your hobby, Linda?
I like playing the piano.
Playing the guitar is my hobby.
I like singing.
Well, we all like music.
Let’s. go to Super Music Club.
Point and say.
What’s your hobby?
riding a bike
playing badminton
flying a kite
taking photos 
watching TV
Let’s talk.
Vhat do you like doing? 
What’s your hobby?


Listen and number.
Look and write.
What do you like doing?
What’s your hobby?
Let’s play.
Collecting stamps
Flying a kite
Reading comic books
Drawing pictures
Listening to music
Riding a bike
playing the guitar
playing the piano


Listen and repeat.
flying
playing
I like flying a kite.
He likes playing the piano.
Listen and circle.
Then say aloud.
playing football 
flying a kite
playing the guitar
playing the piano
sailing a boat
playing with a yo-yo
flying in a plane 
Let’s chant.
Flying a little kite
playing a big drum. 
sailing an old boat.
planting a new tree. 
What fun it will be!


Read and complete.
Dear penfriend
Hi! My name is Mai. 
I'm nine years old. 
I'm Vietnamese 
I like collecting stamps. 
I have a lot of stamps. 
They are so beautiful. 
I don't like playing chess but I like taking photos. This is a photo of me. 
I really want a penfriend. 
Please write to me.
Add your photo and write a reply email to Mai.
Project
Collect things that you like and show them to your classmates.
stickers
sumps
candy 
wrappers

Unit 8
What subjects do you have today?
Look, listen and repeat.
What day is it today, Tom?
It's Monday.
Do you have Maths today?
Yes, I do.
What subjects do you have today?
I have Vietnamese, Maths and English.
Oh, we’re late for school!
Let’s run!
Point and say.
What subjects do you have today?
Work in pairs. 
Ask your partners what subjects they have today.	


Listen and tick.
Look and write.
Let’s sing.
What day is it today?
It’s Monday. 
What subjects do you have?
I have Maths and Art and English. 
But we’re late! 
We’re late for school. 
Let’s run! We’re late.  
We're late for school. Let's run!


Look, listen and repeat.
What are you doing, Nam?
I’m studying for my English lesson.
When do you have English?
I have it on Mondays, Tuesdays, Thursdays, and Fridays.
What about you?
I have it Mondays, Tuesdays, Wednesdays, and Fridays.
Who’s your English teacher? 
It’s Miss Hien.
Point and say.
When do you have Science?
Let’s talk.
What subjects do you have today?


Listen and number.
Look and write.
let's play.
Write the names of the subjects.


listen and repeat.
subjects
English is my favorite subject.
What subjects do you have today?
Listen and tick. 
Then write and say aloud.
Let’s chant.
What subjects do you have today?
I have Maths, Music, and Art. 
How often do you have Maths? 
I have it every day of the week. 
What is your favorite subject? 
English is my favorite subject.


Read and complete.
My name is Nga. 
I go to school from Monday to Friday. 
I have Vietnamese and Maths every day. 
I have English on Mondays, Tuesdays, Thursdays, and Fridays. 
On Wednesdays and Thursdays, I have Science. 
I have PE on Mondays and Wednesdays. 
I have Music on Tuesdays and Art on Fridays.
Write about you and your school subjects.
Project
Ask a friend in another school about his timetable and tick the table below. 
Then tell the class about it.

Unit 9 	
What are they doing?
Look, listen and repeat.
Hi, Mai. Where’s Tom?
He's in the classroom.
what's he doing?
He s reading.
What are you reading?
I’m reading a book.
Let's play football. Tom.
Great idea.
Point and say.
What's he doing?
What's she doing?
watching a video 
listening to music
writing a dictation 
reading a text
Work in pairs. 
Ask your partners what one of your classmates is doing in the classroom. 

Listen and tick.
Look and write.
What’s Nam doing?
What’s Linda doing?
What’s Phong doing?
What’s Mai doing?
Let’s play.
What's she doing?
She’s reading a book.
look, listen and repeat.
What are the pupils doing in the classroom?
Well, at the red table, they're drawing pictures.
At the blue table, they’re making a paper boat.
And at the yellow table, they’re making a kite.
Are they having an Art lesson?
Yes, they are.
Point and say.
What are they doing?
painting masks
making a puppet
playing badminton
making paper planes
Let’s talk.
Where is she?
what’s he doing?
Where are they?
What are they doing?


Listen and number.
Look and write.
What are Nam and Tom doing?
What are Phong and Peter doing?
What are Mai and Linda doing? 
What are Mai and Nam doing?
Let’s sing.
What are they doing?
They are painting a picture. 
That’s what they're doing.
They are making a puppet. 
That's what they’re doing.


Listen and repeat.
mask
text
He’s making a mask 
She’s reading a text.
Listen and tick. 
Then write and say aloud.
Let’s chant.
What's he doing?
He’s reading a text.
What’s she doing? 
She’s painting a mask.
What are they doing?
They're drawing a desk.


Read and tick.
It is Friday today. 
We are having a break. 
We are doing exercise in the school playground. Phong is jumping. 
Linda and Mai are playing badminton. 
Nam and Tom are skipping. 
Quan and Peter are playing basketball. 
We are having a lot of fun here.
We are doing exercise in the school gym.
Phong is skipping.
Linda and Peter are playing badminton.
Nam and Tom are skipping.
Quan and Peter are playing tennis.
Write about the picture.
Project
Add a photo of your family. 
Then tell the class what your family members are doing in the photo.

Unit 10
Where were you yesterday?
look, listen and repeat.
where were you yesterday, Linda?
I was at home.
What about you, Nam?
I was at the zoo.
Where were you yesterday, Phong?
I was on the beach.
What about you, Tom and Tony?
we were in the school library.
Point and say.
Where were you yesterday?
at home
at the zoo
on the beach
in the school library
Work in pairs. 
Ask your partners where they were yesterday.


Listen and tick.
Look and write.
where was Tom yesterday?
Where was Linda yesterday?
Where were Phong and Nam
Let’s sing.
where were you yesterday?
I was at home.
What did you do yesterday?
We watched TV.


Look, listen and repeat.
Where were you yesterday, Mai?
I was at home.
What did you do in the morning?
I watered the flowers.
What did you do in the afternoon?
I played chess with my father
What about yesterday evening?  
I watched TV.
Point and say.
What did you do yesterday?
played badminton
painted a picture 
watered the flowers
Let’s talk.
Where were you yesterday?
What did you do?


Listen and number.
Look and write.
Where was Tom yesterday afternoon?
What did he do?
Let’s play.


Listen and repeat.
played
watched
painted
I played badminton yesterday morning.
I watched TV yesterday evening.
Mai painted a big picture last weekend.
Listen and tick. 
Then say aloud.
I played badminton yesterday afternoon.
We watched TV in the evening.
They painted many beautiful pictures.
Let’s chant.
what did he do yesterday?
What did he do yesterday? 
He played badminton. 
What did she do yesterday? 
She watched TV. 
What did you do yesterday? 
I painted pictures.


Read and complete.
Hello everyone. 
It was Sunday yesterday and it was very cold. 
I was at home. 
In the morning, I watered the flowers in the garden. In the afternoon, I played chess with my father. After dinner, I watched TV. 
I was happy.
Write about you.
Project
Work in pairs. 
Ask your partners where they were and what they did last weekend. 
Then tell the class about it.


REVIEW 2
Listen and tick.
Read and circle.
Hi. My name is Peter. 
I study at Oxford Primary School. 
It is in Oxford Street, London. 
I go to school from Monday to Friday. 
At school, I have English, Maths, Science, Music, Art, PE, and IT. 
Music is my favorite subject.
It was Saturday yesterday. 
I was at home. 
In the morning, I played games with my friends on the Internet. 
In the afternoon, I played football. 
In the evening, I watched TV. 
I went to bed early.


Read and match. 
What do you like doing?
What subjects do you have today?
When do you have Music?
Where were you yesterday?
What did you do?
I have it on Mondays.
I was at home.
I watched TV and played badminton.
I like reading.
I have Vietnamese, Maths and English.
Look and write.
Where is the school?
What subjects do you have today?
What are they do
Where were they yesterday?
Let’s write.


short story 
Read and listen to the story.
What day is it today?
It’s Monday.
And what’s the date?
It's the fifth of October. 1
Oh! It's Maurice's birthday today!
Is he having a party?
Yes, he is!
Happy birthday, Maurice!
Thank you.
Maurice, this is my cousin Mary. 
She comes from America and she can play the guitar.
Nice to meet you, Mary. 
Come in!
What are they doing?
They're playing a game.
What game is it?
Blind Man's Bluff.
Look, everyone.
Here's Maurice's cake!
Happy Birthday, Maurice!


Complete the conversation.
Work in pairs. 
Answer these questions.
Whose birthday is it today?
What colour is Mary’s guitar case?
What game are the cats playing?
How many cats are playing the game?
How old is Maurice today?
Write the correct answers to Activity 3.
It’s Chit’s birthday today.
Mary’s guitar case is blue.
They’re playing Bingo.
Three cats are playing the game.
He is seven.

address 
afternoon 
again 
America 
American 
April 
Art
August 
Australia 
Australian 
badminton 
beach 
bike 
can
chess
class
collect
comic 
book
cook 
cool
dance
date
December


dictation
dishes 
district
drum
England
English
English 
evening 
every day 
exercise
February 
flower 
fly 
Friday 
guitar 
have (English) 
hobby
home
hometown
homework
IT (Information Technology)
January
Japan


Japanese 
July 
Jun 
kite 
later 
library 
listen 
make 
Malaysia 
Malaysian 
March 
mask 
Maths 
May 
meet 
model 
Monday 
morning 
Music 
night 
November
October 
once


paint
paper
penfriend
PE (Physical Education)
photograph
piano
plane
plant
play
puppet
radio
read
return
ride
road
sail
Saturday
school
Saturday school Science
see
September
skate
skip


stamp
stream 
street 
study 
subject 
Sunday 
swim 
swing 
table 
tennis 
take 
text 
Thursday 
time 
today
tomorrow
tree
Tuesday
TV 
twice 
video
Viet Nam 
Vietnamese 
Vietnamese


village 
volleyball 
wash 
watch
water 
Wednesday 
weekend 
write 
yesterday
zoo`

let arr2 = `Bài 1
Rất vui được gặp lại bạn
Bài 1
Nhìn, nghe và lặp lại.
Chào buổi sáng cả lớp.
Chào buổi sáng cô Hiền.
Rất vui được gặp lại bạn.
Bạn có khỏe không, Mai?
Tôi rất khỏe, cảm ơn bạn. Và bạn?
Cũng rất tốt.
Chào buổi sáng cô Hiền.
Xin lỗi tôi tới trễ!
Vâng, vào đi.
Chỉ và nói.
Buổi sáng tốt lành.
Chao buổi chiêu.
Chào buổi tối.
Chào hỏi giáo viên của bạn trong lớp học hoặc ở trường.

Nghe và đánh dấu.
Nhìn và viết.
Hãy hát nào.
Chào buổi sáng
Khai thác tốt, cô Hiền thân mến.


Bài 2
Nhìn, nghe và lặp lại.
Chào buổi sáng cô Hiền.
Tôi là Hoa. Tôi là một học sinh mới.
Chào bạn Hoa. Thật vui được gặp bạn.
Cũng hân hạnh được gặp bạn
Tạm biệt cô Hiền.
Hẹn gặp bạn vào ngày mai
Chỉ và nói.
Tạm biệt, bạn ngày mai.
Tạm biệt.
Hẹn gặp lại.
Chúc ngủ ngon.
Hãy nói chuyện.
Hân hạnh được biết bạn.
Hẹn gặp bạn vào ngày mai.
Nghe và số.
Nhìn và viết.
Hãy chơi.
Buổi sáng tốt lành.
Chao buổi chiêu.
Xin chào.
Chúc ngủ ngon.
Hân hạnh được biết bạn.
Chào.
Chào buổi tối.
Tạm biệt.
Tạm biệt.


Bài 3
Lắng nghe và lặp lại.
Đêm.
Xin chào, Linda.
Chúc ngủ ngon.
Nghe và khoanh tròn.
Sau đó viết và nói to.
Hãy hát thánh ca.
Xin chào các bạn!
Xin chào, tôi là Linda.
Tôi đến từ nước Anh.
Rất vui được gặp bạn, Linda.
Xin chào. Tôi là Nam.
Tôi đến từ Việt Nam.
Rất vui được gặp bạn, Nam.
Xin chào, Linda.
Xin chào, Nam.
Chúng ta là bạn.


Đọc và trả lời.
Tên của cô gái là gì?
Cô ấy đến từ đâu?
Tên của cậu nhóc là gì?
Anh ấy đến từ đâu?
Viết về bạn.
Viết tên của bạn, quê quán của bạn và trường học của bạn.
Dự án
Làm một tấm thẻ về bản thân bạn.
Sau đó, nhìn vào thẻ của bạn cùng lớp và nói với giáo viên về anh ấy.
Tên.
Quê nhà.
Trường học.
Lớp học.

Mục 2
Tôi đến từ Nhật Bản.
Bài 1
Nhìn, nghe và lặp lại.
Công việc tốt đẹp!
Cảm ơn.
Chào. Tôi là Nam.
Chào Nam. Tôi là Akiko.
Hân hạnh được biết bạn.
Cũng hân hạnh được gặp bạn.
Bạn đến từ đâu, Akiko?
Tôi đến từ Nhật Bản.
Ôi không. Xin lỗi.
Chỉ và nói.
Bạn đến từ đâu?
Malaysia
Châu Mỹ
Châu Úc
nước Anh
Làm việc theo cặp. Hãy tưởng tượng bạn là Akiko. Giới thiệu bản thân và hỏi đối tác của bạn đến từ đâu.

Nghe và đánh dấu.
Nhìn và viết.
Sử dụng thông tin từ Hoạt động 1 và 2.
Hãy hát nào.
Bạn đến từ đâu?
Chào. Tôi là Mai đến từ Việt Nam.
Xin chào, Mai. Hân hạnh được biết bạn.
Xin chào. Tôi là Akiko đến từ Nhật Bản.
Xin chào, Akiko. Hân hạnh được biết bạn.
Chào. Tôi là Hakim đến từ Malaysia.
Xin chào, Hakim. Hân hạnh được biết bạn.
Xin chào. Tôi là Linda đến từ Anh.
Xin chào, Linda. Hân hạnh được biết bạn.

Bài 2
Nhìn, nghe và lặp lại.
Làm ơn cho biết tên của bạn là gì?
Tên tôi là Akiko.
Bạn đến từ đâu?
Tôi đến từ Nhật Bản.
Quốc tịch của bạn là gì?
Tôi là người Nhật.
Chỉ và nói.
Quốc tịch của bạn là gì?
Tiếng Việt
tiếng Anh
người Úc
người Malaysia
Hãy nói chuyện.
Bạn tên là gì?
Bạn đến từ đâu?
Quốc tịch của bạn là gì?


Nghe và số.
Lool và viết.
Hãy chơi.


Bài 3
Lắng nghe và lặp lại.
Nhật Bản.
Tiếng Việt.
Tôi đến từ Nhật Bản.
Tôi là người Việt.
Nghe và đánh dấu. Sau đó nói to.
Hãy hát thánh ca.
Quốc tịch của bạn là gì?
Xin chào. Bạn tên là gì?
Bạn đến từ đâu?
Ở đâu tại Việt Nam?
Tên tôi là Mai.
Tôi đến từ Việt Nam.
Quốc tịch của bạn là gì?
Tiếng Việt.
Xin chào. Bạn tên là gì?
Tên tôi là Akiko.
Bạn đến từ đâu?
Ở đâu tại Nhật Bản?
Tôi đến từ Nhật Bản.
Quốc tịch của bạn là gì?
Tiếng Nhật.


Đọc và hoàn thành.
Chào. Tên tôi là Akiko.
Tôi đến từ Tokyo, Nhật Bản.
Tôi là người Nhật.
Hiện tôi đang ở hà nội.
Tôi có rất nhiều bạn.
Họ đến từ các quốc gia khác nhau.
Tony đến từ Sydney, Úc.
Anh ấy là người Úc.
Linda đến từ London, Anh.
Cô ấy là là người Anh.
Tom đến từ New York, Mỹ.
Anh ây là ngươi Mỹ.
Tên
Thành phố
Quốc gia
Quốc tịch
Cùng viết nào.
Chào. Tôi tên Quân. Tên của bạn là gì?
Dự án
Chọn một quốc gia.
Làm thẻ tên và vẽ lá cờ. Sau đó, hiển thị nó cho lớp của bạn.
Tên.
Quốc gia.
Thành phố.
Quốc tịch.
Cờ.

Bài 3
Hôm nay là ngày gì?
Bài 1
Nhìn, nghe và lặp lại.
Chào cả lớp.
Chào cô Hiền.
Hôm nay là ngày mấy vậy lớp?
Hôm nay là thứ Hai.
Rất tốt!
Và chúng ta có gì vào thứ Hai?
Chúng tôi có tiếng Anh.
Và khi nào thì lớp học tiếng Anh tiếp theo?
Vào thứ Tư!
Không! Đó là vào Thứ Ba!
Đúng vậy, Mai.
Đó là vào thứ Ba.
Chỉ và nói.
Hôm nay là ngày gì?
Làm việc theo cặp.
Hỏi đối tác của bạn hôm nay là ngày gì.


Nghe và đánh dấu.
Nhìn và viết.
Tôi chơi bóng đá hôm nay.
Tôi xem TV hôm nay.
Hôm nay tôi đến thăm ông bà ngoại.
Tôi đi đến sở thú hôm nay.
Hãy hát nào.
Hôm nay chúng ta có tiếng anh
Hôm nay là ngày gì?
Hôm nay là thứ Hai.
Chúng tôi có tiếng Anh ngày hôm nay.
Bạn có tiếng Anh vào thứ Tư không? Không. Chúng tôi có tiếng Anh vào các ngày Thứ Ba, Thứ Năm và Thứ Sáu.
Hôm nay là ngày gì?
Hôm nay là thứ Tư.

Chúng tôi có tiếng Anh ngày hôm nay.
Bạn có tiếng Anh vào thứ Năm không?
Không. Chúng tôi có tiếng Anh vào các ngày Thứ Hai, Thứ Tư và Thứ Sáu.

Bài 2
Nhìn, nghe và lặp lại.
Bạn làm gì vào thứ Sáu, Nam?
Tôi đến trường vào buổi sáng.
Còn vào buổi chiều thì sao?
Tôi giúp bố mẹ tôi ở nhà.
Bạn sẽ làm gì vào thứ Bảy?
Tôi đến thăm ông bà của tôi vào buổi sáng.
Và vào buổi chiều?
Tôi chơi bóng đá.
Chỉ và nói.
Đi học.
Nghe nhạc.
Xem tivi
Chơi guitar
Đi đến sở thú
Đi bơi
Thăm bạn bè của tôi
Chơi bóng đá
Giúp cha mẹ tôi.
Thăm ông bà của tôi
Hãy nói chuyện.
Hôm nay là ngày gì?
Bạn làm gì vào thứ hai?


Nghe và số.
Nhìn và viết.
Hãy chơi.
Thứ hai
Thứ ba
ngày thứ bảy
Thứ sáu
thứ tư
chủ nhật
Hôm nay
Thứ năm
Ngày mai


Bài 3
Lắng nghe và lặp lại.
Ngày thứ nhất.
Thứ năm.
Của cô.
Sinh nhật của tôi là vào ngày đầu tiên của tháng bảy.
Tôi có tiếng Anh vào thứ Năm.
Anh Lộc là giáo viên dạy tiếng Anh của cô.
Nghe và khoanh tròn.
Sau đó nói to.
Hãy hát thánh ca.'
Hôm nay là ngày gì?
Hôm nay là thứ sáu.
Bạn làm gì vào thứ Sáu?
Tôi đến trường vào buổi sáng.
Còn vào buổi chiều thì sao?
Tôi đi bơi.
Ngày mai là ngày mấy?
Hôm nay là thứ bảy.
Bạn có đi học vào thứ bảy?
Không, tôi không.
Bạn sẽ làm gì vào thứ Bảy?
Tôi đi đến sở thú vào buổi sáng
Chiều em giúp bố mẹ.


Đọc và trả lời.
Tôi tên là Mai.
Hôm nay là thứ hai.
Đó là một ngày học.
Tôi đi học vào các ngày thứ Hai, thứ Ba, thứ Tư, thứ Năm và thứ Sáu.
Tôi không đi học vào cuối tuần.
Tôi đi bơi vào thứ bảy và thăm ông bà vào chủ nhật.
Tên cô ấy là gì?
Hôm nay là ngày gì?
Cô ấy có đi học hàng ngày không?
Cô ấy làm gì vào thứ bảy và chủ nhật?
Viết về bạn.
Bạn học lớp nào?
Hôm nay là ngày gì?
Dự án
Phỏng vấn một trong những bạn học của bạn về những gì anh ấy làm vào cuối tuần.
Những ngày thứ bảy và chủ nhật.
Sau đó báo cáo kết quả trước lớp.

Đơn vị 4
Khi nào là sinh nhật của bạn?
Bài 1
Nhìn, nghe và lặp lại.
Chào buổi sáng cả lớp.
Buổi sáng tốt lành. Cô Hiền.
Bạn khỏe không?
Chúng tôi vẫn khoẻ. Cảm ơn bạn.
Hôm nay là ngày mấy vậy Nam?
Đó là ngày đầu tiên của tháng Mười.
Không, không phải vậy!
Đó là ngày thứ hai của tháng mười.
Chỉ và nói.
Hôm nay là ngày bao nhiêu?
Ngày đầu tiên của tháng Mười.
Ngày thứ hai của tháng mười.
Ngày thứ ba của tháng mười.
Ngày mười bốn tháng mười.
Ngày hai mươi hai của tháng mười.
Ngày 31 tháng Mười.
Cho lớp của bạn biết ngày hôm nay.
Nghe và đánh dấu.
Nhìn và viết.
Hãy hát nào
Hôm nay là ngày mấy?
Có phải là ngày đầu tiên của tháng mười?
Nó là thứ nhất hay là thứ ba?
Đó là ngày thứ hai của tháng mười.


Bài 2
Nhìn, nghe và lặp lại.
Ồ! Thật là một chiếc bánh đẹp!
Đúng. Hôm nay là sinh nhật tôi.
Chúc mừng sinh nhật, Linda.
Cảm ơn bạn.
Sinh nhật của bạn là khi nào, Mai?
Đó là vào ngày 5 tháng 3.
Chỉ và nói.
Khi nào là sinh nhật của bạn?
Hãy nói chuyện.
Hôm nay là ngày bao nhiêu?
Khi nào là sinh nhật của bạn?


Liệt kê và đánh số.
Nhìn và viết.
Sinh nhật của bạn là khi nào, Tony?
Sinh nhật của bạn là khi nào, Mai?
Sinh nhật của bạn là khi nào vậy Phong?
Hãy hát thánh ca.
Các tháng trong năm.
Tháng Một.
Tháng 2.
Bước đều.
Bây giờ đã đến lúc bắt đầu.
Tháng 4, 5 và 6.
Hát một giai điệu vui vẻ.
Tháng Bảy tháng Tám Tháng Chín.
Hãy chơi cùng nhau.
Tháng 10, 11 và 12.
Hãy nhớ, hãy nhớ, hãy nhớ!


Bài 3
Lắng nghe và lặp lại.
bốn
bước đều
Đó là ngày 4 tháng 6.
Sinh nhật của tôi là vào ngày 5 tháng Ba.
Nghe và khoanh tròn.
Sau đó viết và nói to.
Hãy hát thánh ca.
Khi nào là sinh nhật của bạn?
Sinh nhật của bạn là khi nào, Mai?
Đó là vào ngày 5 tháng 3.
Sinh nhật của bạn là khi nào, Mary?
Đó cũng là ngày 5 tháng 3.
Sinh nhật của bạn là khi nào, Nam?
Đó là vào ngày 2 tháng 4.
Sinh nhật của bạn là khi nào, Peter?
Đó là vào ngày 6 tháng Năm.


Đọc và đánh dấu.
Bạn tâm thư.
Tên tôi là Peter.
Tôi đến từ London, Anh.
Hôm nay là Chủ nhật, ngày sáu tháng Năm.
Đó là sinh nhật của tôi.
Tôi đang hạnh phúc.
Tôi có nhiều món quà sinh nhật từ bạn bè của tôi.
Còn bạn thì sao?
Khi nào là sinh nhật của bạn?
Viết thư cho tôi sớm, Peter.
Peter đến từ đâu?
Khi nào là sinh nhật anh ấy?
Anh ấy có gì từ bạn bè của mình?
Viết thiệp mời.
Hãy đến với bữa tiệc sinh nhật của tôi.
Dự án
Làm một cái thiệp sinh nhật.
Sau đó kể cho cả lớp nghe về điều đó.

Bài 5
Bạn có biết bơi
Nhìn, nghe và lặp lại.
Nhìn. Tôi có thể vẽ một con mèo.
Nó thực sự tuyệt vời.
Bạn có thể làm gì, Phong?
Tôi có thể nhảy.
Còn bạn thì sao, Nam?
Tôi không thể nhảy, nhưng tôi có thể hát.
Chỉ và nói.
Bạn có thể làm gì?
Làm việc theo cặp.
Nói với đối tác của bạn những gì bạn có thể làm.


Nghe và đánh dấu.
Nhìn và viết.
Hãy chơi.
Nó có thể bơi, nhưng nó không thể đi bộ.
Nó là gì?
Đó là một con cá!


Nhìn, nghe và lặp lại.
Bạn có thể chơi bóng chuyền không?
Không, tôi không thể, nhưng tôi có thể chơi bóng đá.
Hãy chơi bóng đá.
Chỉ và nói.
Chơi bóng bàn
Chơi bóng chuyền
Chơi đàn piano
Chơi guitar
Hãy nói chuyện.
Bạn có thể làm gì?
Nghe và số.
Nhìn và viết.
Bạn có thể đi xe đạp không?
Bạn có thể chơi piano không?
Bạn có thể chơi guitar?
Bạn có thể chơi cờ vua không?


Hãy hát nào.
Bạn có biết bơi?
Bố.
Bạn có biết bơi?
Vâng tôi có thể.
Tôi có thể bơi.
Xác ướp.
Bạn nhảy đựoc chứ?
Vâng tôi có thể.
Tôi có thể nhảy.
Em bé.
Bạn có thể hát không?
Vâng tôi có thể.
Tôi có thể hát.


Bài 3
Lắng nghe và lặp lại.
hát
Bơi
Tôi có thể hát.
Tôi không biết bơi.
Nghe và số. Sau đó nói to.
Bạn có thể hát không?
Bạn có biết bơi?
Bạn có thể ngồi trên ghế?
Bạn có thể xoay?
Hãy hát thánh ca.
Bạn có thể hát không?
Đúng. Tôi có thể.
Tôi có thể hát.
Bạn có biết bơi?
Không, tôi không thể.
Tôi không biết bơi.
Bạn có thể xoay?
Không, tôi không thể.
Tôi không thể đánh đu.


Đọc và hoàn thành.
Chào. Tôi tên là Mai.
Tôi thích âm nhạc rất nhiều.
Tôi có thể hát và nhảy, nhưng tôi không thể chơi piano.
Bạn của tôi là Phong và Nam.
Phong có thể chơi cầu lông, nhưng anh ấy không thể chơi bóng đá.
Nam có thể chơi cờ vua, nhưng anh ấy không biết bơi.
Viết về bản thân bạn.
Tên tôi là Linda.
Tôi có thể bơi.
Tôi có thể đi xe đạp.
Tôi có thể hát và nhảy, nhưng tôi không thể chơi piano.
Còn bạn thì sao?
Dự án
Phỏng vấn ba người bạn và hoàn thành biểu đồ.
Bạn có biết bơi không, Hoa?
Bạn có thể chơi cầu lông không?
Không, tôi không thể.
Đúng. tôi có thể

ĐÁNH GIÁ 1
Nghe và đánh dấu.
Đọc và viết.
Đây là bạn mới của tôi.
Tên của cô ấy là Linda.
Cô ấy chín tuổi.
Cô ấy đến từ nước Anh.
Cô là học sinh trường Quốc tế Hà Nội.
Cô ấy rất thích âm nhạc.
Cô có thể chơi guitar và hát nhiều bài hát Việt Nam.
Cô ấy đến Câu lạc bộ Âm nhạc vào thứ Tư hàng tuần.
Linda đến từ đâu?
Cô ấy bao nhiêu tuổi?
Cô ấy có thể làm gì?
Cô ấy làm gì vào thứ Tư?
Đọc và nối.
Quốc tịch của bạn là gì?
Khi nào là sinh nhật của bạn?
Bạn có thể làm gì?
Hôm nay là ngày gì?
Tạm biệt, Mai.
Đó là vào ngày 2 tháng 5.
Hẹn gặp lại Nam.
Hôm nay là thứ Ba.
Tôi là người Mỹ.
Tôi có thể bơi.
Nhìn và viết. Vậy thì nói đi.
Viết về bạn.

Truyện ngắn.
Mèo và chuột.
Đọc và nghe câu chuyện.
Xin chào, tôi là mèo Miu.
Xin chào, tôi là chuột Chit và đây là chị Mimi của tôi.
Và đó là những người bạn của tôi, Maurice và Doris!
Xin chào.
Bạn là ai?
Xin chào.
Tên tôi là Mary.
Đây có phải là nhà của Chit không?
Xin chào mary!
Xin chào, Chit!
Bạn khỏe không?
Tôi rất khỏe, cảm ơn bạn.
Miu, đây là Mary, em họ của tôi.
Rất vui được gặp bạn mary.
Rất vui được gặp bạn, Miu.
Bạn đến từ đâu, Mary?
Tôi đến từ Mỹ.
Có thật không?
Ở đâu ở Mỹ?
Newyork.
Bạn có thể chơi guitar?
Vâng tôi có thể.
Bạn cũng có thể chơi guitar chứ?
Không, tôi không thể.
Nhưng tôi chơi piano.
Tuyệt vời! Hãy chơi!

Hoàn thành cuộc trò chuyện.
Làm việc trong nhóm ba. Đọc cuộc trò chuyện.
Sau đó, hành động nó với tên của riêng bạn.
Miu, đây là Mary, em họ của tôi.
Rất vui được gặp bạn mary.
Cũng hân hạnh được gặp bạn.
Bạn đến từ đâu, Mary?
Tôi đến từ Mỹ
Có thật không? Ở đâu ở Mỹ?
Newyork.
Bạn có thể chơi guitar?
Vâng tôi có thể. Bạn cũng có thể chơi guitar chứ?
Không, tôi không thể
Sắp xếp những từ này khỏi cuộc trò chuyện.

Bài 6
Nơi là trường học của bạn?
Nhìn, nghe và lặp lại.
Đây là anh họ của tôi, Jack.
Anh ấy đang ở London.
xin chào, Jack.
Hân hạnh được biết bạn. Tôi là Phong.
Rất vui được gặp anh, Phong.
Tôi và Phong học chung trường.
Trường bạn tên gì?
Trường Tiểu học Nguyễn Du.
Nơi là trường học của bạn?
It’s in Nguyen Du Street in Ha Noi.
Còn bạn thì sao, Jack?
Trường bạn tên gì?
Trường tiểu học Oxford.
Nó ở phố Oxford.
Chỉ và nói.
Nơi là trường học của bạn?
Làm việc theo cặp.
Hỏi và trả lời các câu hỏi về trường học của bạn.
Hỏi tên của nó và nó ở đâu.

Nghe và đánh dấu.
Nhìn và viết.
Hãy hát nào.
Đây là con đường chúng ta đến trường.
Sáng sớm.
Đây là cách chúng ta đi dạo.



Nghe và đánh dấu.
Nhìn và viết.
Nhìn, nghe và lặp lại
Xin chào, Phong.
Bạn đi đâu?
Tôi đang đi học.
Nơi là trường học của bạn?
Nó ở đường Nguyễn Du.
Bạn học lớp nào?
Tôi học lớp 4A.
Chỉ và nói.
Bạn học lớp nào?
Anh ấy học lớp mấy?
Hãy nói chuyện.
Trường bạn tên gì?
Nó đâu rồi?
Bạn học lớp nào?


Nghe và số.
Nhìn và viết.
Trường học của anh ấy ở đâu?
Trường học của cô ấy ở đâu?
Cô ấy học lớp mấy?
Anh ấy học lớp mấy?
Hãy chơi.
Trường tôi ở đường Nguyễn Trãi.


Lắng nghe và lặp lại.
trường học
bỏ qua
đường phố
Đây là trường học của chúng tôi.
Mai thích bỏ qua.
Trường tôi ở đường Nguyễn Du.
Nghe và khoanh tròn.
Sau đó viết và nói to.
đường phố
dòng
bỏ qua
trường học
trượt băng
Hãy hát thánh ca.
Trường học.
Đây là con đường chúng ta đến trường.
Nó rất vui!
Phố, phố, phố!
Đây là cách chúng ta đi trên đường phố.

Đọc và hoàn thành.
Viết về trường học của bạn.
Viết tên và địa chỉ của trường học và lớp học của bạn.
Dự án
Làm thẻ về trường học và lớp học của bạn bè bạn.

Bài 7
Bạn thích làm gì?
Nhìn, nghe và lặp lại.
Xin chào! chào mừng tới nhà của tôi.
Mời vào.
Cảm ơn bạn.
Tôi cũng thích đọc sách.
Tôi không thích đọc.
Tôi thích nghe nhạc.
Bạn thích làm gì, Phong?
Tôi thích xem TV.
Chỉ và nói.
Bạn thích làm gì?
bơi lội
nấu nướng
sưu tầm tem
chơi cờ vua
Làm việc theo cặp.
Nói với đối tác của bạn những gì bạn thích làm.


Nghe và đánh dấu.
Nhìn và viết.
Hãy hát nào.
Tôi thích làm mọi thứ
Tôi thích đọc truyện tranh rất nhiều.
Đọc truyện tranh rất thú vị.
Tôi cũng thích làm mô hình.
Làm mô hình rất tuyệt.
Tôi thích sưu tập tem rất nhiều. Sưu tập tem rất thú vị.
Tôi cũng thích chơi bóng đá.
Chơi bóng rất tuyệt.

Bài 2
Nhìn, nghe và lặp lại.
Sở thích của bạn là gì, Linda?
Tôi thích chơi piano.
Chơi guitar là sở thích của tôi.
Tôi thích ca hát.
Tất cả chúng ta đều thích âm nhạc.
Hãy. đi đến Super Music Club.
Chỉ và nói.
Sở thích của bạn là gì?
đi xe đạp
chơi cầu lông
thả diều
chụp ảnh
xem TV
Hãy nói chuyện.
Tôi ... Bạn thích làm gì?
Sở thích của bạn là gì?


Nghe và số.
Nhìn và viết.
Bạn thích làm gì?
Sở thích của bạn là gì?
Hãy chơi.
Sưu tầm tem
Thả diều
Đọc truyện tranh
Vẽ tranh
Nghe nhạc
Đi xe đạp
chơi guitar
chơi đàn piano


Lắng nghe và lặp lại.
bay
đang chơi
Tôi thích thả diều.
Anh ấy thích chơi piano.
Nghe và khoanh tròn.
Sau đó nói to.
chơi đá banh
thả diều
chơi guitar
chơi đàn piano
đi thuyền
chơi với một yo-yo
bay trên máy bay
Hãy hát thánh ca.
Thả diều nhỏ
chơi một cái trống lớn.
chèo thuyền cũ.
trồng một cây mới.
Nó sẽ vui biết mấy!


Đọc và hoàn thành.
Bạn tâm thư
Chào! Tôi tên là Mai.
Tôi chín tuổi.
Tôi là người Việt
Tôi thích sưu tập tem.
Tôi có rất nhiều tem.
Họ trông rất đẹp.
Tôi không thích chơi cờ nhưng tôi thích chụp ảnh. Đây là một bức ảnh của tôi.
Tôi thực sự muốn có một người bạn cùng bút.
Hãy viết thư cho tôi.
Thêm ảnh của bạn và viết email trả lời cho Mai.
Dự án
Thu thập những thứ mà bạn thích và cho bạn cùng lớp xem.
miếng dán
bể phốt
kẹo
giấy gói

Bài 8
Hôm nay bạn học môn gì?
Nhìn, nghe và lặp lại.
Hôm nay là ngày mấy, Tom?
Hôm nay là thứ Hai.
Hôm nay bạn có môn Toán không?
Vâng tôi đồng ý.
Hôm nay bạn học môn gì?
Tôi có Tiếng Việt, Toán và Tiếng Anh.
Ồ, chúng ta đi học muộn rồi!
Chạy thôi!
Chỉ và nói.
Hôm nay bạn học môn gì?
Làm việc theo cặp.
Hỏi đối tác của bạn những môn học họ có ngày hôm nay.


Nghe và đánh dấu.
Nhìn và viết.
Hãy hát nào.
Hôm nay là ngày gì?
Hôm nay là thứ Hai.
Bạn có những môn học nào?
Tôi có Toán và Nghệ thuật và Tiếng Anh.
Nhưng chúng tôi đến muộn!
Chúng tôi đi học muộn.
Chạy thôi! Chúng ta muộn rồi.
Chúng tôi đi học muộn. Chạy thôi!


Nhìn, nghe và lặp lại.
Bạn đang làm gì vậy Nam?
Tôi đang học bài tiếng Anh của mình.
Khi nào bạn có tiếng Anh?
Tôi có nó vào các ngày thứ Hai, thứ Ba, thứ Năm và thứ Sáu.
Còn bạn thì sao?
Tôi có nó vào thứ Hai, thứ Ba, thứ Tư và thứ Sáu.
Ai là giáo viên tiếng Anh của bạn?
Đó là cô Hiền.
Chỉ và nói.
Khi nào bạn có Khoa học?
Hãy nói chuyện.
Hôm nay bạn học môn gì?


Nghe và số.
Nhìn và viết.
chơi nào.
Viết tên các môn học.


lắng nghe và lặp lại.
đối tượng
Tiếng Anh là môn học yêu thích của tôi.
Hôm nay bạn học môn gì?
Nghe và đánh dấu.
Sau đó viết và nói to.
Hãy hát thánh ca.
Hôm nay bạn học môn gì?
Tôi có Toán, Âm nhạc và Nghệ thuật.
Bạn thường có môn Toán như thế nào?
Tôi có nó mỗi ngày trong tuần.
Môn học yêu thích của bạn là gì?
Tiếng Anh là môn học yêu thích của tôi.


Đọc và hoàn thành.
Tôi tên là Nga.
Tôi đi học từ thứ Hai đến thứ Sáu.
Tôi có môn Tiếng Việt và Toán mỗi ngày.
Tôi có tiếng Anh vào các ngày Thứ Hai, Thứ Ba, Thứ Năm và Thứ Sáu.
Vào thứ Tư và thứ Năm, tôi có môn Khoa học.
Tôi có thể dục vào các ngày Thứ Hai và Thứ Tư.
Tôi có Âm nhạc vào Thứ Ba và Nghệ thuật vào Thứ Sáu.
Viết về bạn và các môn học ở trường của bạn.
Dự án
Hỏi một người bạn ở trường khác về thời gian biểu của anh ấy và đánh dấu vào bảng bên dưới.
Sau đó kể cho cả lớp nghe về điều đó.

Đơn vị 9
Họ đang làm gì?
Nhìn, nghe và lặp lại.
Chào, Mai. Tom ở đâu?
Anh ấy đang ở trong lớp học.
anh ấy đang làm gì vậy?
Anh ấy đang đọc.
Bạn đang đọc gì
Tôi đang đọc một cuốn sách.
Hãy chơi bóng đá. Tom.
Ý tưởng tuyệt vời.
Chỉ và nói.
Anh ấy đang làm gì vậy?
Những gì cô ấy làm?
xem video
nghe nhạc
viết một bài chính tả
đọc một văn bản
Làm việc theo cặp.
Hỏi đối tác của bạn xem một trong những bạn học của bạn đang làm gì trong lớp học.

Nghe và đánh dấu.
Nhìn và viết.
Nam đang làm gì vậy?
Linda đang làm gì?
Phong đang làm gì vậy?
Mai đang làm gì vậy?
Hãy chơi.
Những gì cô ấy làm?
Cô ấy đang đọc một cuốn sách.
nhìn, nghe và lặp lại.
Các học sinh đang làm gì trong lớp học?
Chà, ở chiếc bàn màu đỏ, họ đang vẽ những bức tranh.
Ở chiếc bàn màu xanh, họ đang làm một chiếc thuyền bằng giấy.
Và ở chiếc bàn màu vàng, họ đang làm một con diều.
Họ đang có một buổi học nghệ thuật?
Đúng vậy.
Chỉ và nói.
Họ đang làm gì?
vẽ mặt nạ
làm một con rối
chơi cầu lông
làm máy bay giấy
Hãy nói chuyện.
Cô ấy ở đâu?
anh ấy đang làm gì vậy?
Họ ở đâu?
Họ đang làm gì?


Nghe và số.
Nhìn và viết.
Nam và Tom đang làm gì?
Phong và Peter đang làm gì vậy?
Mai và Linda đang làm gì?
Mai và Nam đang làm gì?
Hãy hát nào.
Họ đang làm gì?
Họ đang vẽ một bức tranh.
Đó là những gì họ đang làm.
Họ đang làm một con rối.
Đó là những gì họ đang làm.


Lắng nghe và lặp lại.
mặt nạ
chữ
Anh ấy đang làm mặt nạ
Cô ấy đang đọc một văn bản.
Nghe và đánh dấu.
Sau đó viết và nói to.
Hãy hát thánh ca.
Anh ấy đang làm gì vậy?
Anh ấy đang đọc một văn bản.
Những gì cô ấy làm?
Cô ấy đang vẽ một chiếc mặt nạ.
Họ đang làm gì?
Họ đang vẽ một cái bàn.


Đọc và đánh dấu.
Hôm nay là thứ sáu.
Chúng tôi đang có một thời gian nghỉ ngơi.
Chúng tôi đang tập thể dục trong sân chơi của trường. Phong đang nhảy.
Linda và Mai đang chơi cầu lông.
Nam và Tom đang bỏ qua.
Quân và Peter đang chơi bóng rổ.
Chúng tôi đang có rất nhiều niềm vui ở đây.
Chúng tôi đang tập thể dục trong phòng tập thể dục của trường.
Phong đang bỏ qua.
Linda và Peter đang chơi cầu lông.
Nam và Tom đang bỏ qua.
Quân và Peter đang chơi tennis.
Viết về bức tranh.
Dự án
Thêm ảnh của gia đình bạn.
Sau đó cho cả lớp biết các thành viên trong gia đình bạn đang làm gì trong bức ảnh.

Đơn vị 10
Hôm qua bạn đã ở đâu?
nhìn, nghe và lặp lại.
bạn đã ở đâu ngày hôm qua, Linda?
Tôi đã ở nhà.
Còn bạn thì sao, Nam?
Tôi đã ở sở thú.
Hôm qua anh ở đâu vậy Phong?
Tôi đã ở trên bãi biển.
Còn bạn, Tom và Tony?
chúng tôi đã ở trong thư viện của trường.
Chỉ và nói.
Hôm qua bạn đã ở đâu?
ở nhà
Ở sở thú
Ở bãi biển
trong thư viện trường học
Làm việc theo cặp.
Hỏi đối tác của bạn xem họ đã ở đâu vào ngày hôm qua.


Nghe và đánh dấu.
Nhìn và viết.
hôm qua Tom đã ở đâu?
Hôm qua Linda đã ở đâu?
Phong và Nam đã ở đâu
Hãy hát nào.
hôm qua bạn đã ở đâu?
Tôi đã ở nhà.
Bạn đã làm gì ngày hôm qua?
Chúng tôi xem TV.


Nhìn, nghe và lặp lại.
Bạn đã ở đâu ngày hôm qua, Mai?
Tôi đã ở nhà.
Bạn đã làm gì vào buổi sáng?
Tôi đã tưới hoa.
Bạn đã làm gì vào buổi chiều?
Tôi đã chơi cờ vua với cha tôi
Còn buổi tối hôm qua thì sao?
Tôi đã xem TV.
Chỉ và nói.
Bạn đã làm gì ngày hôm qua?
chơi cầu lông
vẽ một bức tranh
tưới hoa
Hãy nói chuyện.
Hôm qua bạn đã ở đâu?
Bạn đã làm gì?


Nghe và số.
Nhìn và viết.
Tom đã ở đâu vào chiều hôm qua?
Anh ấy đã làm gì?
Hãy chơi.


Lắng nghe và lặp lại.
chơi
đã xem
Sơn
Tôi đã chơi cầu lông vào sáng hôm qua.
Tôi đã xem TV vào tối hôm qua.
Mai đã vẽ một bức tranh lớn vào cuối tuần trước.
Nghe và đánh dấu.
Sau đó nói to.
Tôi đã chơi cầu lông vào chiều hôm qua.
Chúng tôi đã xem TV vào buổi tối.
Họ đã vẽ nhiều bức tranh đẹp.
Hãy hát thánh ca.
Anh ta đã làm gì ngày hôm qua?
Anh ta đã làm gì ngày hôm qua?
Anh ấy chơi cầu lông.
Cô ấy đã làm gì ngày hôm qua?
Cô ấy đã xem TV.
Bạn đã làm gì ngày hôm qua?
Tôi đã vẽ những bức tranh.


Đọc và hoàn thành.
Xin chào tất cả mọi người.
Hôm qua là Chủ nhật và trời rất lạnh.
Tôi đã ở nhà.
Buổi sáng, tôi tưới hoa trong vườn. Buổi chiều, tôi chơi cờ với bố. Sau bữa tối, tôi xem TV.
Tôi đã hạnh phúc.
Viết về bạn.
Dự án
Làm việc theo cặp.
Hỏi đối tác của bạn xem họ đã ở đâu và họ đã làm gì vào cuối tuần trước.
Sau đó kể cho cả lớp nghe về điều đó.


ĐÁNH GIÁ 2
Nghe và đánh dấu.
Đọc và khoanh tròn.
Chào. Tên của tôi là Peter.
Tôi học tại trường tiểu học Oxford.
Nó ở phố Oxford, London.
Tôi đi học từ thứ Hai đến thứ Sáu.
Ở trường, tôi có tiếng Anh, Toán, Khoa học, Âm nhạc, Nghệ thuật, Thể dục và CNTT.
Âm nhạc là môn học yêu thích của tôi.
Hôm qua là thứ bảy.
Tôi đã ở nhà.
Vào buổi sáng, tôi chơi game với bạn bè trên Internet.
Vào buổi chiều, tôi chơi bóng đá.
Vào buổi tối, tôi xem TV.
Tôi đi ngủ sớm.


Đọc và nối.
Bạn thích làm gì?
Hôm nay bạn học môn gì?
Khi nào bạn có Âm nhạc?
Hôm qua bạn đã ở đâu?
Bạn đã làm gì?
Tôi có nó vào thứ Hai.
Tôi đã ở nhà.
Tôi đã xem TV và chơi cầu lông.
Tôi thích đọc.
Tôi có Tiếng Việt, Toán và Tiếng Anh.
Nhìn và viết.
Trường học ở đâu?
Hôm nay bạn học môn gì?
Họ đang làm gì
Họ ở đâu ngày hôm qua?
Cùng viết nào.


truyện ngắn
Đọc và nghe câu chuyện.
Hôm nay là ngày gì?
Hôm nay là thứ Hai.
Và ngày đó là ngày nào?
Đó là ngày thứ năm của tháng mười. 1
Ồ! Hôm nay là sinh nhật của Maurice!
Anh ta có một bữa tiệc?
Vâng, anh ấy là như vậy!
Chúc mừng sinh nhật, Maurice!
Cảm ơn bạn.
Maurice, đây là Mary, em họ của tôi.
Cô ấy đến từ Mỹ và cô ấy có thể chơi guitar.
Rất vui được gặp bạn mary.
Mời vào!
Họ đang làm gì?
Họ đang chơi một trò chơi.
Đó là trò chơi gì?
Chơi bịt mắt bắt dê.
Mọi người nhìn kìa.
Đây là bánh của Maurice!
Chúc mừng sinh nhật, Maurice!


Hoàn thành cuộc trò chuyện.
Làm việc theo cặp.
Trả lời những câu hỏi này.
Hôm nay là sinh nhật của ai?
Hộp đựng đàn guitar của Mary có màu gì?
Những con mèo đang chơi trò chơi gì?
Có bao nhiêu con mèo đang chơi trò chơi?
Maurice hôm nay bao nhiêu tuổi?
Viết các câu trả lời đúng cho Hoạt động 3.
Hôm nay là sinh nhật của Chit.
Hộp đàn guitar của Mary có màu xanh lam.
Họ đang chơi Bingo.
Ba con mèo đang chơi trò chơi.
Anh ấy bảy tuổi.

Địa chỉ
buổi chiều
như trước
Châu Mỹ
Người Mỹ
tháng tư
Nghệ thuật
tháng Tám
Châu Úc
người Úc
cầu lông
bờ biển
xe đạp
có thể
cờ vua
lớp học
sưu tầm
hài hước
sách
đầu bếp
mát mẻ
nhảy
ngày tháng
tháng 12


chính tả
chén đĩa
quận
cái trống
nước Anh
tiếng Anh
tiếng Anh
tối
Hằng ngày
bài tập
tháng 2
Hoa
ruồi
Thứ sáu
đàn ghi ta
có (tiếng Anh)
sở thích
Trang Chủ
quê nhà
bài tập về nhà
CNTT (Công nghệ thông tin)
tháng Một
Nhật Bản


tiếng Nhật
tháng Bảy
Tháng sáu
cánh diều
một lát sau
thư viện
nghe
chế tạo
Malaysia
người Malaysia
bước đều
mặt nạ
Toán học
Có thể
gặp
người mẫu
Thứ hai
buổi sáng
Âm nhạc
đêm
tháng Mười Một
Tháng Mười
Một lần


Sơn
giấy
bạn qua thư
Giáo dục thể chất PE)
ảnh chụp
đàn piano
chiếc máy bay
thực vật
Phat
con rối
Đài
đọc
trở về
điều khiển
đường bộ
cánh buồm
ngày thứ bảy
trường học
Khoa học thứ bảy trường học
xem
Tháng Chín
giày trượt băng
nhảy


con tem
dòng
đường phố
học
môn học
chủ nhật
bơi
lung lay
bàn
quần vợt
lấy
chữ
Thứ năm
thời gian
hôm nay
ngày mai
cây
Thứ ba
TV
hai lần
video
Việt Nam
Tiếng Việt
Tiếng Việt


làng bản
bóng chuyền
rửa
đồng hồ
nước
thứ tư
ngày cuối tuần
viết
hôm qua
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

