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
    , `some
    /ˈsəm/song
    /ˈsɔŋ/hometown
    /ˈhoʊmˌtaʊn/rainy
    /ˈɹeɪni/tomorrow's
    /təˈmɑˌɹoʊz/place
    /ˈpɫeɪs/card
    /ˈkɑɹd/south
    /ˈsaʊθ/favourite
    /ˈfeɪvɝɪt/floor
    /ˈfɫɔɹ/country
    /ˈkəntɹi/cold
    /ˈkoʊɫd/wait
    /ˈweɪt/minute
    /ˈmɪnət/everyone
    /ˈɛvɹiˌwən/careful
    /ˈkɛɹfəɫ/dangerous
    /ˈdeɪndʒɝəs/rhyming
    /ˈɹaɪmɪŋ/walk
    /ˈwɑk/late
    /ˈɫeɪt/flying/ˈfɫaɪɪŋ`
]

let ArrStr11 = arrstr11.join("/").split("\n    ").join("").split("/");
for (let i = 0; i < ArrStr11.length; i += 2) {
    arrIPA.push({
        "text": ArrStr11[i],
        "ipa": ArrStr11[i + 1].split("/").join("")
    })
}

let arr1 = `Unit 20
Where's Sa Pa,
Look, listen and repeat.
Where's Sa Pa, Mai?
It's in north Viet Nam.
This is a photo of Sa Pa.
Oh! It's very beautiful.
Point and say.
Let's talk.


Listen and tick.
Look and write.
Let's write.


Look, listen and repeat.
Look. This is a photo of Hai Duong.
Is Hai Duong near Ha Noi?
Yes, it is.
And this is a photo of Ha Long Bay.
Is Ha Long Bay near Ha Noi?
No, it isn't. It's far from Ha Noi.
Point and say.
Let's talk.

Listen and number.
Read and complete.
far 
theatre 
near 
name
Let's play.
Card game

Listen and repeat.
far
north
Can Tho is far from Ho Chi Minh City.
Sa Pa is in north Viet Nam.
Listen and write.
Let's chant.
Where's Ba Vi?
Is it near Ha Noi?
Where's Da Nang?
Is it near Hue?
Where's Can Tho?
Is it near Ho Chi Minh City?
It's in north Viet Nam.
Yes, it is. 
Yes, It is.
It's in central Viet Nam.
Yes, It is.
It's in south Viet Nam.
No, It isn't. No, it isn't.
Read and write.
Hello! My name is A Vung. 
I am eight years old. 
My family is in Sa Pa. 
It is in north Viet Nam. 
Sa Pa is near Lai Chau but very far from Ha Noi. 
There are a lot of mountains and trees in my place. 
How about your place?
Where is it in Viet Nam?
Let's write.
Where is your family?
Where are they in Viet Nam? 
Is your place near Ha Noi?
Is your place near Da Nang?
Is your place near Ho Chi Minh City?
Project
Talk about your favourite place.


Review 4
Listen and tick.
Listen and number.


Read and complete.
near 
playing 
watching 
reading 
dog 
living 
room
Read and match.
Where's Hue?
How many toys do you have? 
What's your brother doing?
Do you have any goldfish? 
What are those on the wall?
He's cleaning the floor.
Yes, I do.
I have three kites, two robots and a ball.
A map and a picture.
It's in central Viet Nam.
Look and say.
Who are they?
What are they doing?
What is there on the shelf?
How many balls are there?
How many kites are there?
How many ships are there?
How many robots are there?
How many trucks are there?
How many planes are there?
How many dolls are there?
What toys do you have?
What country Is this? 
Where is Sa Pa?
Where are the children? 
What are they doing?


Short story
Cat and Mouse 4
Read and listen to the story.
It's cold! 
Yes, but it's sunny. 
Let's go for a walk.
Wait a minute.
Come on, everyone 
Let's go to the park!
No! We're busy.
They're busy.
What are they doing?
Mimi is watching TV. 
Nini is listening to music and Jack is playing the piano.
OK. Let's go to the park.
OK!
Oh look! There's Maurice and Doris!
What are they doing?
They're skating.
Hello, Mounce!
Hello, Doris!
Oh no!
Be careful! 
Skating is fun, but it can be dangerous too!

Put the words in the correct order.
Match the rhyming words.
cold 
wait 
walk 
play 
hello
late 
know 
stay 
old 
talk
Read and write.`

let arr2 = `Đơn vị 20
Sa Pa ở đâu,
Nhìn, nghe và lặp lại.
Sa Pa, Mai ở đâu?
Nó ở miền bắc Việt Nam.
Đây là ảnh chụp Sa Pa.
Oh! Nó rất đẹp.
Chỉ và nói.
Hãy nói chuyện.


Nghe và đánh dấu.
Nhìn và viết.
Cùng viết nào.


Nhìn, nghe và lặp lại.
Nhìn. Đây là ảnh của Hải Dương.
Hải Dương có gần Hà Nội không?
Vâng, đúng vậy.
Còn đây là ảnh Vịnh Hạ Long.
Vịnh Hạ Long có gần Hà Nội không?
Không, không phải vậy. Nó ở xa Hà Nội.
Chỉ và nói.
Hãy nói chuyện.

Nghe và số.
Đọc và hoàn thành.
xa
rạp hát
ở gần
Tên
Hãy chơi.
Chơi bài

Lắng nghe và lặp lại.
xa
Bắc
Cần Thơ cách Tp.
Sa Pa thuộc miền Bắc Việt Nam.
Nghe và viết.
Hãy hát thánh ca.
Ba Vì ở đâu?
Có gần hà nội không?
Đà Nẵng ở đâu?
Có gần Huế không?
Cần Thơ ở đâu?
Có gần thành phố Hồ Chí Minh không?
Nó ở miền bắc Việt Nam.
Vâng, đúng vậy.
Vâng, đúng vậy.
Nó ở miền Trung Việt Nam.
Vâng, đúng vậy.
Nó ở miền nam Việt Nam.
Không, không phải vậy. Không, không phải vậy.
Đọc và viết.
Xin chào! Tôi tên là A Vững.
Tôi tám tuổi.
Gia đình tôi ở Sa Pa.
Nó ở miền bắc Việt Nam.
Sa Pa gần Lai Châu nhưng rất xa Hà Nội.
Có rất nhiều núi và cây cối ở nơi tôi ở.
Làm thế nào về nơi của bạn?
Nó ở đâu tại Việt Nam?
Cùng viết nào.
Gia đình bạn ở đâu?
Họ ở đâu tại Việt Nam?
Địa điểm của bạn có gần Hà Nội không?
Địa điểm của bạn có gần Đà Nẵng không?
Địa điểm của bạn có gần Thành phố Hồ Chí Minh không?
Dự án
Nói về địa điểm yêu thích của bạn.


Đánh giá 4
Nghe và đánh dấu.
Nghe và số.


Đọc và hoàn thành.
ở gần
đang chơi
xem
đọc hiểu
chó
cuộc sống
phòng
Đọc và nối.
Huế ở đâu?
Bạn có bao nhiêu đồ chơi?
Anh trai của bạn đang làm gì?
Bạn có con cá vàng nào không?
Những cái đó trên tường là gì?
Anh ấy đang lau sàn.
Vâng tôi đồng ý.
Tôi có ba con diều, hai con rô bốt và một quả bóng.
Một bản đồ và một bức tranh.
Nó ở miền Trung Việt Nam.
Nhìn và nói.
Họ là ai?
Họ đang làm gì?
Có gì trên kệ?
Bao nhiêu quả bóng đang có?
Có bao nhiêu con diều?
Có bao nhiêu tàu?
Có bao nhiêu người máy?
Có bao nhiêu xe tải?
Có bao nhiêu mặt phẳng?
Có bao nhiêu con búp bê?
Bạn có đồ chơi gì?
Đây là đất nước nào?
Sa Pa ở đâu?
Những đứa tre đang ở đâu?
Họ đang làm gì?


Truyện ngắn
Cat and Mouse 4
Đọc và nghe câu chuyện.
Trời lạnh!
Có, nhưng trời nắng.
Đi dạo thôi.
Đợi tí.
Đi nào mọi người
Chúng ta hãy đi đến công viên!
Không! Chúng tôi đang bận.
Họ đang bận.
Họ đang làm gì?
Mimi đang xem TV.
Nini đang nghe nhạc và Jack đang chơi piano.
ĐỒNG Ý. Chúng ta hãy đi đến công viên.
ĐỒNG Ý!
Ôi nhìn kìa! Maurice và Doris!
Họ đang làm gì?
Họ đang trượt băng.
Xin chào, Mounce!
Xin chào, Doris!
Ôi không!
Hãy cẩn thận!
Trượt băng rất vui, nhưng nó cũng có thể nguy hiểm!

Đặt các từ theo đúng thứ tự.
Ghép các từ có vần.
lạnh
chờ đợi
đi bộ
chơi
xin chào
muộn
biết rôi
ở lại
cũ
nói chuyện
Đọc và viết.`

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

