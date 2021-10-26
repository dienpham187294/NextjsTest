import ArrPeple from "./ArrOfpeple"

// let ARRp = (JSON.parse(JSON.stringify(ArrPeple)).concat(JSON.parse(JSON.stringify(ArrPeple))));

// Gia định những người tới để làm một cuộc khảo sát về sở thích cá nhân

// Một hàm return về hanhdlingNext object một hàm return về Một dãy đan xen các handlingnextObj một hàm thêm Submit)  

// Bối cảnh Bạn đang nhân viên
let DataTable = []
let coerdataoflession = []
// let ArrName = [
//     'Richard', 'Barbara', 'Michael', 'Betty', 'Kimberly',
//     'Lisa', 'Steven', 'Robert', 'Susan', 'Dorothy', 'William', 'Donna',
//     'Mary', 'Michelle', 'David', 'Anthony', 'Charles', 'Ashley', 'Linda',
//     'Patricia', 'Christopher', 'Kenneth', 'Margaret', 'Karen', 'Mark', 'Thomas',
//     'Matthew', 'Sandra', 'Sarah', 'Jessica', 'Daniel', 'Donald', 'Joseph', 'Emily',
//     'James', 'Nancy', 'Paul', 'Jennifer', 'Andrew', 'Elizabeth', 'John', 'Joshua'
// ]




let Arr2_01 = [
    {
        "readfisrt": ["Blockchain is a specific type of database."],
        "qs": ["Blockchain is a specific type of database."],
        "output": ["That's good."]
    },
    {
        "readfisrt": ["It differs from a typical database in the way it stores information; blockchains store data in blocks that are then chained together. "],
        "qs": ["It differs from a typical database in the way it stores information; blockchains store data in blocks that are then chained together."],
        "output": ["That's good."]
    },
    {
        "readfisrt": ["As new data comes in it is entered into a fresh block. Once the block is filled with data it is chained onto the previous block, which makes the data chained together in chronological order."],
        "qs": ["As new data comes in it is entered into a fresh block. Once the block is filled with data it is chained onto the previous block, which makes the data chained together in chronological order."],
        "output": ["That's good."]
    },
    {
        "readfisrt": ["Different types of information can be stored on a blockchain but the most common use so far has been as a ledger for transactions. "],
        "qs": ["Different types of information can be stored on a blockchain but the most common use so far has been as a ledger for transactions. "],
        "output": ["That's good."]
    },
    {
        "readfisrt": ["In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group has control—rather, all users collectively retain control."],
        "qs": ["In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group has control—rather, all users collectively retain control."],
        "output": ["That's good."]
    },
    {
        "readfisrt": ["Decentralized blockchains are immutable, which means that the data entered is irreversible. For Bitcoin, this means that transactions are permanently recorded and viewable to anyone."],
        "qs": ["Decentralized blockchains are immutable, which means that the data entered is irreversible. For Bitcoin, this means that transactions are permanently recorded and viewable to anyone."],
        "output": ["That's good."]
    },
]
let Arr2_01_Datatable = []
Arr2_01.forEach(
    (e) => {
        Arr2_01_Datatable.push(e.qs)
    }
)
DataTable.push(Arr2_01_Datatable)


ArrPeple.forEach(e => {

    let ArrInFN = {}
    ArrInFN.Submit = []
    ArrInFN.img = e[1]
    ArrInFN.gender = e[2]


    // // let Arrin2 = [FnObjHanldingNext(["Good evening, sir."], ["Good evening."])]
    let ArrBegin = []

    let Middle = []

    let i5 = GETRANDOMi(Arr2_01)
    ArrBegin.push(FnObjHanldingNext(["Hi"], [Arr2_01[i5].readfisrt]))
    Middle.push(
        FnObjHanldingNext(
            Arr2_01[i5].qs,
            Arr2_01[i5].output,
            {
                "end_successfull": true,
                // "readFirst": Arr2_01[i5].readfisrt
            }
        ))

    // console.log(JSON.stringify(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(["0"], Middle))))
    coerdataoflession.push(Fnperson(ArrInFN, DataTable, ArrBegin, FnToArrobj(["0"], Middle)))
})


// let Arrin1 = ["0"]
// let Arrin2 = [
//     FnObjHanldingNext(["Hi, What do you want?", "Hi, May I help you?"], ["I want to book a table for tonight"]),
// ]

// FnToArrobj(Arrin1, Arrin2)


// coerdataoflession.push(nam)
const Bai11

    = [
        {
            "nameoflession": "Thực hành bài 11",
            "srcYoutube": "",
            "hoctap": [
                { "EN": "Blockchain is a specific type of database.", "VN": "Blockchain là một loại cơ sở dữ liệu cụ thể.", "IPA": "Blockchain ɪz ə spɪˈsɪfɪk taɪp ɒv ˈdeɪtəˌbeɪs." },
                { "EN": "It differs from a typical database in the way it stores information; blockchains store data in blocks that are then chained together. ", "VN": "Nó khác với một cơ sở dữ liệu điển hình ở cách nó lưu trữ thông tin; các blockchains lưu trữ dữ liệu trong các khối sau đó được liên kết với nhau.", "IPA": "ɪt ˈdɪfəz frɒm ə ˈtɪpɪk(ə)l ˈdeɪtəˌbeɪs ɪn ðə weɪ ɪt stɔːz ˌɪnfəˈmeɪʃən; blockchains stɔː ˈdeɪtə ɪn blɒks ðæt ɑː ðɛn ʧeɪnd təˈgɛðə. " },
                { "EN": "As new data comes in it is entered into a fresh block. Once the block is filled with data it is chained onto the previous block, which makes the data chained together in chronological order.", "VN": "Khi dữ liệu mới đến, nó được nhập vào một khối mới. Khi khối chứa đầy dữ liệu, nó sẽ được xâu chuỗi vào khối trước đó, điều này làm cho dữ liệu được liên kết với nhau theo thứ tự thời gian.", "IPA": "æz njuː ˈdeɪtə kʌmz ɪn ɪt ɪz ˈɛntəd ˈɪntuː ə frɛʃ blɒk. wʌns ðə blɒk ɪz fɪld wɪð ˈdeɪtə ɪt ɪz ʧeɪnd ˈɒntʊ ðə ˈpriːviəs blɒk, wɪʧ meɪks ðə ˈdeɪtə ʧeɪnd təˈgɛðər ɪn ˌkrɒnəˈlɒʤɪkəl ˈɔːdə." },
                { "EN": "Different types of information can be stored on a blockchain but the most common use so far has been as a ledger for transactions. ", "VN": "Các loại thông tin khác nhau có thể được lưu trữ trên một blockchain nhưng cách sử dụng phổ biến nhất cho đến nay là làm sổ cái cho các giao dịch.", "IPA": "ˈdɪfrənt taɪps ɒv ˌɪnfəˈmeɪʃən kæn biː stɔːd ɒn ə blockchain bʌt ðə məʊst ˈkɒmən juːz səʊ fɑː hæz biːn æz ə ˈlɛʤə fɔː trænˈzækʃənz. " },
                { "EN": "In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group has control—rather, all users collectively retain control.", "VN": "Trong trường hợp của Bitcoin, blockchain được sử dụng theo cách phi tập trung để không một cá nhân hoặc nhóm nào có quyền kiểm soát — thay vào đó, tất cả người dùng đều giữ quyền kiểm soát chung.", "IPA": "ɪn Bitcoin's keɪs, blockchain ɪz juːzd ɪn ə diːˈsɛntrəlaɪzd weɪ səʊ ðæt nəʊ ˈsɪŋgl ˈpɜːsn ɔː gruːp hæz kənˈtrəʊl-ˈrɑːðə, ɔːl ˈjuːzəz kɒˈlɛktɪvli rɪˈteɪn kənˈtrəʊl." },
                { "EN": "Decentralized blockchains are immutable, which means that the data entered is irreversible. For Bitcoin, this means that transactions are permanently recorded and viewable to anyone.", "VN": "Các blockchains phi tập trung là bất biến, có nghĩa là dữ liệu đã nhập là không thể thay đổi. Đối với Bitcoin, điều này có nghĩa là các giao dịch được ghi lại vĩnh viễn và bất kỳ ai cũng có thể xem được.", "IPA": "diːˈsɛntrəlaɪzd blockchains ɑːr ɪˈmjuːtəbl, wɪʧ miːnz ðæt ðə ˈdeɪtə ˈɛntəd ɪz ˌɪrɪˈvɜːsəbl. fɔː Bitcoin, ðɪs miːnz ðæt trænˈzækʃənz ɑː ˈpɜːmənəntli rɪˈkɔːdɪd ænd ˈvjuːəbl tuː ˈɛnɪwʌn." },
            ],
            "status": "",
        },
        {
            "coerdataoflession": coerdataoflession
        }
    ]

export default Bai11

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

function FnObjHanldingNext(ArrIn1, ArrIn2, objIn) {
    let objOut = {};
    if (objIn !== undefined) {
        objOut = objIn
    }
    let objRes =
    {
        "manspeak": ArrIn1,
        "robotspeak": ArrIn2,
        "icon": "",
        "function": objOut,
        "handling_next": []
    }
    return objRes
}


function Fnperson(Arr, DataTable, Begin, Middle, End) {
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
            "submit": [
                Arr.Submit
            ],
            "submitsyntax": [
                [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                ]
            ],
            "Tabletool": [
                {
                    "indexToSubmit": 0,
                    "dataoftable": DataTable
                }
            ],
            "robotspeakfirst": [
                "Hi",
                "Hello"
            ]
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