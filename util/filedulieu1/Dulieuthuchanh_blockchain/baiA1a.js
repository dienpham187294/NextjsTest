import ArrPeple from "./ArrOfpeple"
import getElementsToDataTable from "../dataHelperFunction/getElementsToDataTable"
// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []

// let ArrName = ['Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly', 'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna', 'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda', 'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas', 'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily', 'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua']

// DataTable.push(ArrName)


let ArrIn1 = [
    { "input": "Modern technology allows people to communicate directly.", "qs": "What does modern technology allow people to do?" },
    { "input": "Voice and video calls, emails, pictures, and instant messages travel directly from A to B.", "qs": "What can travel directly from a to b?" },
    { "input": "Maintaining trust between individuals no matter how far apart they are.", "qs": "How far can technology maintain trust between people?" },
    { "input": "When it comes to money people have to trust a third party to be able to complete a transaction.", "qs": "When it comes to money, what does it take to complete a transaction?" },
    { "input": "Blockchain technology is challenging the status quo in a radical way.", "qs": "How does blockchain affect the status quo?" },
    { "input": "By using math and cryptography, Blockchain provides an open decentralized database of any transaction involving value money goods property work, or even votes.", "qs": "What does blockchain provide?" },
    { "input": "Creating a record whose authenticity can be verified by the entire community.", "qs": "What does blockchain create?" },
    { "input": "The future global economy will move towards one of distributed property and trust where anyone with access to the internet can get involved in blockchain based transactions and third-party trust organizations may no longer be necessary.", "qs": "How will the future global economy evolve?" },
    { "input": "The uses of blockchain technology are endless.", "qs": "What is the potential of blockchain in the future?" },
    { "input": "Some expect that in less than 10 years it will be used to collect taxes.", "qs": "What do experts think will happen in the next 10 years?" },
    { "input": "It will make it easier for immigrants to send money back to countries where access to financial institutions is limited.", "qs": "How will immigrants to send money back to the countries?" },
    { "input": "Financial fraud will be significantly reduced as every transaction will be recorded on a public and distributed ledger which will be accessible by anyone who has an internet connection.", "qs": "What will financial fraud look like in the future?" },
    { "input": "Think of it as wills and contracts that execute themselves or  dated proof of existence for ideas much like a patent.", "qs": "What wills and contracts look like in the future?" },
    { "input": "Blockchain will become a global decentralized source of trust but not everyone is ready to embrace it.", "qs": "Is everyone ready to embrace blockchain?" },
    { "input": "A huge proportion of trust services from banking to notaries will face challenges on price volume and in some cases the farrance survival.", "qs": "Which industries will face great challenges?" },
    { "input": "Public authorities could find it more and more difficult to enforce traditional financial regulations due to the new possibilities offered by the Bitcoin network to bypass traditional financial intermediaries.", "qs": "What will public authorities face in the future?" },
    { "input": "Unimaginable new networks will evolve to meet society's needs more cheaply and potentially more securely.", "qs": "How will new networks evolve to meet society's needs?" },
]


DataTable.push(getElementsToDataTable(ArrIn1, "input", "-----"))

ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]
    let i1 = GETRANDOMi(ArrIn1)

    let SpeakFirst = [ArrIn1[i1].qs]

    let ArrBegin = []



    ArrBegin.push(FnObjHanldingNext([ArrIn1[i1].input], ["Good."], { "end_successfull": true }))

    //middle

    let Arrin3 = []
    let Arrin4 = []

    Arrin3.push("0")
    Arrin4.push(FnObjHanldingNext([], []))
    ArrInFN.Submit.push(e[0])
    let End = null
    // End.push(FnObjHanldingNext([arr_In1[i1].qs], ["I will follow your advice.", "That’s good advice.", "Thank you for your advice."], { end_successfull: true }))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(Arrin3, Arrin4), End, SpeakFirst, ""))
})

let hoctap = [
    { "EN": "Modern technology allows people to communicate directly.", "VN": "Công nghệ hiện đại cho phép mọi người giao tiếp trực tiếp.", "IPA": "ˈmɒdən tɛkˈnɒləʤi əˈlaʊz ˈpiːpl tuː kəˈmjuːnɪkeɪt dɪˈrɛktli." },
    { "EN": "Voice and video calls, emails, pictures, and instant messages travel directly from A to B.", "VN": "Các cuộc gọi thoại và video, email, hình ảnh và tin nhắn tức thì truyền trực tiếp từ A đến B.", "IPA": "vɔɪs ænd ˈvɪdɪəʊ kɔːlz, ˈiːmeɪlz, ˈpɪkʧəz, ænd ˈɪnstənt ˈmɛsɪʤɪz ˈtrævl dɪˈrɛktli frɒm ə tuː biː." },
    { "EN": "Maintaining trust between individuals no matter how far apart they are.", "VN": "Duy trì sự tin tưởng giữa các cá nhân cho dù họ có cách xa nhau như thế nào.", "IPA": "meɪnˈteɪnɪŋ trʌst bɪˈtwiːn ˌɪndɪˈvɪdjʊəlz nəʊ ˈmætə haʊ fɑːr əˈpɑːt ðeɪ ɑː." },
    { "EN": "When it comes to money people have to trust a third party to be able to complete a transaction.", "VN": "Khi nói đến tiền, mọi người phải tin tưởng vào bên thứ ba để có thể hoàn thành giao dịch.", "IPA": "wɛn ɪt kʌmz tuː ˈmʌni ˈpiːpl hæv tuː trʌst ə θɜːd ˈpɑːti tuː biː ˈeɪbl tuː kəmˈpliːt ə trænˈzækʃən." },
    { "EN": "Blockchain technology is challenging the status quo in a radical way.", "VN": "Công nghệ chuỗi khối đang thách thức hiện trạng một cách triệt để.", "IPA": "Blockchain tɛkˈnɒləʤi ɪz ˈʧælɪnʤɪŋ ðə ˈsteɪtəs kwəʊ ɪn ə ˈrædɪkəl weɪ." },
    { "EN": "By using math and cryptography, Blockchain provides an open decentralized database of any transaction involving value money goods property work, or even votes.", "VN": "Bằng cách sử dụng toán học và mật mã, Blockchain cung cấp một cơ sở dữ liệu phi tập trung mở về bất kỳ giao dịch nào liên quan đến tài sản hàng hóa giá trị tiền tệ hoặc thậm chí là phiếu bầu.", "IPA": "baɪ ˈjuːzɪŋ mæθ ænd krɪpˈtɒgrəfi, Blockchain prəˈvaɪdz ən ˈəʊpən diːˈsɛntrəlaɪzd ˈdeɪtəˌbeɪs ɒv ˈɛni trænˈzækʃən ɪnˈvɒlvɪŋ ˈvæljuː ˈmʌni gʊdz ˈprɒpəti wɜːk, ɔːr ˈiːvən vəʊts." },
    { "EN": "Creating a record whose authenticity can be verified by the entire community.", "VN": "Tạo một bản ghi mà tính xác thực có thể được xác minh bởi toàn bộ cộng đồng.", "IPA": "kri(ː)ˈeɪtɪŋ ə ˈrɛkɔːd huːz ˌɔːθɛnˈtɪsɪti kæn biː ˈvɛrɪfaɪd baɪ ði ɪnˈtaɪə kəˈmjuːnɪti." },
    { "EN": "The future global economy will move towards one of distributed property and trust where anyone with access to the internet can get involved in blockchain based transactions and third-party trust organizations may no longer be necessary.", "VN": "Nền kinh tế toàn cầu trong tương lai sẽ hướng tới một tài sản phân tán và niềm tin nơi bất kỳ ai có quyền truy cập internet đều có thể tham gia vào các giao dịch dựa trên blockchain và các tổ chức ủy thác của bên thứ ba có thể không còn cần thiết nữa.", "IPA": "ðə ˈfjuːʧə ˈgləʊbəl i(ː)ˈkɒnəmi wɪl muːv təˈwɔːdz wʌn ɒv dɪsˈtrɪbju(ː)tɪd ˈprɒpəti ænd trʌst weər ˈɛnɪwʌn wɪð ˈæksɛs tuː ði ˈɪntəˌnɛt kæn gɛt ɪnˈvɒlvd ɪn blockchain beɪst trænˈzækʃənz ænd θɜːd-ˈpɑːti trʌst ˌɔːgənaɪˈzeɪʃənz meɪ nəʊ ˈlɒŋgə biː ˈnɛsɪsəri." },
    { "EN": "The uses of blockchain technology are endless.", "VN": "Việc sử dụng công nghệ blockchain là vô tận.", "IPA": "ðə ˈjuːzɪz ɒv blockchain tɛkˈnɒləʤi ɑːr ˈɛndlɪs." },
    { "EN": "Some expect that in less than 10 years it will be used to collect taxes.", "VN": "Một số người hy vọng rằng trong vòng chưa đầy 10 năm, nó sẽ được sử dụng để thu thuế.", "IPA": "sʌm ɪksˈpɛkt ðæt ɪn lɛs ðæn 10 jɪəz ɪt wɪl biː juːzd tuː kəˈlɛkt ˈtæksɪz." },
    { "EN": "It will make it easier for immigrants to send money back to countries where access to financial institutions is limited.", "VN": "Nó sẽ giúp người nhập cư dễ dàng gửi tiền trở lại các quốc gia nơi khả năng tiếp cận các tổ chức tài chính bị hạn chế.", "IPA": "ɪt wɪl meɪk ɪt ˈiːzɪə fɔːr ˈɪmɪgrənts tuː sɛnd ˈmʌni bæk tuː ˈkʌntriz weər ˈæksɛs tuː faɪˈnænʃəl ˌɪnstɪˈtjuːʃənz ɪz ˈlɪmɪtɪd." },
    { "EN": "Financial fraud will be significantly reduced as every transaction will be recorded on a public and distributed ledger which will be accessible by anyone who has an internet connection.", "VN": "Gian lận tài chính sẽ giảm đáng kể vì mọi giao dịch sẽ được ghi lại trên một sổ cái công khai và phân tán mà bất kỳ ai có kết nối internet đều có thể truy cập được.", "IPA": "faɪˈnænʃəl frɔːd wɪl biː sɪgˈnɪfɪkəntli rɪˈdjuːst æz ˈɛvri trænˈzækʃən wɪl biː rɪˈkɔːdɪd ɒn ə ˈpʌblɪk ænd dɪsˈtrɪbju(ː)tɪd ˈlɛʤə wɪʧ wɪl biː əkˈsɛsəbl baɪ ˈɛnɪwʌn huː hæz ən ˈɪntəˌnɛt kəˈnɛkʃən." },
    { "EN": "Think of it as wills and contracts that execute themselves or  dated proof of existence for ideas much like a patent.", "VN": "Hãy coi đó là những bản di chúc và hợp đồng tự thực hiện hoặc bằng chứng về sự tồn tại ghi ngày tháng cho những ý tưởng giống như bằng sáng chế.", "IPA": "θɪŋk ɒv ɪt æz wɪlz ænd ˈkɒntrækts ðæt ˈɛksɪkjuːt ðəmˈsɛlvz ɔː ˈdeɪtɪd pruːf ɒv ɪgˈzɪstəns fɔːr aɪˈdɪəz mʌʧ laɪk ə ˈpeɪtənt." },
    { "EN": "Blockchain will become a global decentralized source of trust but not everyone is ready to embrace it.", "VN": "Blockchain sẽ trở thành một nguồn tin cậy phi tập trung toàn cầu nhưng không phải ai cũng sẵn sàng đón nhận nó.", "IPA": "Blockchain wɪl bɪˈkʌm ə ˈgləʊbəl diːˈsɛntrəlaɪzd sɔːs ɒv trʌst bʌt nɒt ˈɛvrɪwʌn ɪz ˈrɛdi tuː ɪmˈbreɪs ɪt." },
    { "EN": "A huge proportion of trust services from banking to notaries will face challenges on price volume and in some cases the farrance survival", "VN": "Một tỷ lệ rất lớn các dịch vụ ủy thác từ ngân hàng cho công chứng viên sẽ phải đối mặt với những thách thức về khối lượng giá cả và trong một số trường hợp là khả năng tồn tại lâu dài", "IPA": "ə hjuːʤ prəˈpɔːʃən ɒv trʌst ˈsɜːvɪsɪz frɒm ˈbæŋkɪŋ tuː ˈnəʊtəriz wɪl feɪs ˈʧælɪnʤɪz ɒn praɪs ˈvɒljʊm ænd ɪn sʌm ˈkeɪsɪz ðə farrance səˈvaɪvəl" },
    { "EN": "Public authorities could find it more and more difficult to enforce traditional financial regulations due to the new possibilities offered by the Bitcoin network to bypass traditional financial intermediaries.", "VN": "Các cơ quan công quyền có thể ngày càng thấy khó khăn hơn trong việc thực thi các quy định tài chính truyền thống do các khả năng mới được cung cấp bởi mạng Bitcoin để vượt qua các trung gian tài chính truyền thống.", "IPA": "ˈpʌblɪk ɔːˈθɒrɪtiz kʊd faɪnd ɪt mɔːr ænd mɔː ˈdɪfɪkəlt tuː ɪnˈfɔːs trəˈdɪʃənl faɪˈnænʃəl ˌrɛgjʊˈleɪʃənz djuː tuː ðə njuː ˌpɒsəˈbɪlɪtiz ˈɒfəd baɪ ðə Bitcoin ˈnɛtwɜːk tuː ˈbaɪpɑːs trəˈdɪʃənl faɪˈnænʃəl ˌɪntəˈmiːdiəriz." },
    { "EN": "Unimaginable new networks will evolved to meet society's needs more cheaply and potentially more securely. ", "VN": "Không thể tưởng tượng được đã phát triển để đáp ứng nhu cầu của xã hội với giá rẻ hơn và có khả năng an toàn hơn.", "IPA": "ˌʌnɪˈmæʤɪnəbl ɪˈvɒlvd tuː miːt səˈsaɪətiz niːdz mɔː ˈʧiːpli ænd pəʊˈtɛnʃəli mɔː sɪˈkjʊəli." },
    { "EN": "Will governments, financial and legal institutions embrace blockchain?", "VN": "Liệu các chính phủ, tổ chức tài chính và luật pháp có chấp nhận blockchain không?", "IPA": "wɪl ˈgʌvnmənts, faɪˈnænʃəl ænd ˈliːgəl ˌɪnstɪˈtjuːʃənz ɪmˈbreɪs blockchain?" },
    { "EN": "What will happen to the ones who don't?", "VN": "Điều gì sẽ xảy ra với những người không?", "IPA": "wɒt wɪl ˈhæpən tuː ðə wʌnz huː dəʊnt?" },
]
let listenOnly = [

]
let writeOnly = [
]
const BaiA1a

    = [
        {
            "nameoflession": "Blockchain và các tác động đến nền kinh tế. 1a What is blockchain?",
            "srcYoutube": "https://www.youtube.com/embed/6WG7D47tGb0",
            "hoctap": {
                "listenRead": hoctap,
                "listenOnly": listenOnly,
                "writeOnly": writeOnly
            },
            "status": "",
        },
        {
            "coerdataoflession": coerdataoflession
        }
    ]

export default BaiA1a


function FnToArrobj(ArrIn1, ArrIn2) {
    let ObjRes = []
    ArrIn1.forEach((e, i) => {
        if (e.length === 1) {
            ObjRes.push(ArrIn2[i])
        }
        else {
            let ArrTem1 = e.split("-")
            try {
                let StrTem1 = "ObjRes"
                for (let i = 0; i < ArrTem1.length - 1; i++) {
                    if (i > 0) {
                        StrTem1 += "['handling_next']"
                    }
                    StrTem1 += "[" + ArrTem1[i] + "]"
                }
                StrTem1 += "['handling_next']"
                eval(StrTem1).push(ArrIn2[i])

            } catch (error) {
                console.log(error)
            }

        }
    })
    // console.log(JSON.stringify(ObjRes))
    return ObjRes
}

// function GetDataArrToClick(Arr) {
//     let ArrRes = [];
//     Arr.forEach(e => {
//         ArrRes.push(e.input)
//     })
//     return ArrRes
// }

function FnObjHanldingNext(ArrIn1, ArrIn2, objIn, icon) {
    let objOut = {};
    if (objIn !== undefined) {
        objOut = objIn
    }
    let iconOut = ""
    if (icon !== undefined) {
        iconOut = icon
    }
    let objRes =
    {
        "manspeak": ArrIn1,
        "robotspeak": ArrIn2,
        "icon": iconOut,
        "function": objOut,
        "handling_next": []
    }
    return objRes
}


function Fnperson(Arr, DataTable, Begin, Middle, End, robotspeakfirst, icon) {
    // console.log(End)
    let endIn;
    if (End !== undefined) {
        endIn = {
            "handling_next": End
        }
    } else {
        endIn = null
    }
    let person = {
        "total": {
            "image": Arr.img,
            "status": true,
            "gender": Arr.gender,
            "icon": icon,
            "submit": [
                Arr.Submit
            ],
            "submitsyntax": [
                [
                    "1",
                    "2",
                    "3",
                ]
            ],
            "Tabletool": [
                {
                    "indexToSubmit": 0,
                    "dataoftable": DataTable
                }
            ],
            "robotspeakfirst": robotspeakfirst
        },
        "begin": {
            "handling_next": Begin
        },
        "middle": {
            "handling_next": Middle
        },
        "end": endIn
    }

    return person
}

// function PickRandom(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

function GETRANDOMi(arr) {
    return Math.floor(Math.random() * arr.length);
}