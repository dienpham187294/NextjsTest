
import { useEffect, useState } from 'react'
import { connectToDatabase } from '../../util/mongodb'
import parse from 'html-react-parser';
import Playing from "./play"
import { useRouter } from 'next/router'
const e = React.createElement;

export default function Manager({ Tempdata }) {

    const router = useRouter()

    const [AllData, SET_AllData] = useState([])
    const [OnetoInsert, SET_OnetoInsert] = useState("")
    const [ArrNameoflession, SET_ArrNameoflession] = useState([])
    const [NewName, SET_NewName] = useState("")
    const [NewNameMesage, SET_NewNameMesage] = useState("")
    const [NewDescription, SET_NewDescription] = useState("")
    const [Lock_select, SET_Lock_select] = useState(false)


    const [Lession, SET_Lession] = useState("")
    const [Lock_lession, SET_Lock_lession] = useState(false)
    const [HTMLTEST, SET_HTMLTEST] = useState("")

    const [ToolData, SET_ToolData] = useState([])
    const [Lock_gametool, SET_Lock_gametool] = useState(false)

    const [Gamedata, SET_Gamedata] = useState([])
    const [Gameplay, SET_Gameplay] = useState(false)

    const [ScoreSubmit, SET_ScoreSumit] = useState(0)

    useEffect(() => {

        SET_AllData(Tempdata)
    })

    useEffect(() => {
        try {
            Tempdata.forEach(e => {
                if (e.subject === OnetoInsert) {

                    let arrNameoflession = []
                    e.all_lession.forEach(ee => {
                        arrNameoflession.push(ee.nameoflession)
                    })
                    SET_ArrNameoflession(arrNameoflession)
                }
            });
        } catch (error) {

        }

    }, [OnetoInsert])

    function check_nameoflession(e) {
        let status = true;
        if (ArrNameoflession.length > 0) {
            ArrNameoflession.forEach(ee => {
                if (ee === e) {
                    status = false;
                }
            })
        }
        if (status && e.length > 6) {
            SET_NewName(e);
            SET_NewNameMesage("Tên này có thể dùng được")
        } else {
            SET_NewName("");
            SET_NewNameMesage("Tên này đã bị trùng hoặc quá ngắn.")
        }
        // if(e.length>6 &&){

        // }
    }


    function ParsingTest() {

        try {

            if (setHtml(document.getElementById("HTMLTest_id").value)) {

                SET_HTMLTEST(parse(document.getElementById("HTMLTest_id").value))

                SET_Lession(document.getElementById("HTMLTest_id").value)
            } else {
                SET_HTMLTEST("Lỗi cú pháp.")
                SET_HTMLTEST("")
            }

        } catch (error) {
            SET_HTMLTEST("Lỗi cú pháp.")
            SET_HTMLTEST("")
        }
    }

    function Show_option() {
        if (AllData.length > 0) {
            return (
                <select onChange={e => {
                    SET_OnetoInsert(e.currentTarget.value)
                }} className="form-control">
                    <option value="">Chọn chủ đề để thêm bài </option>
                    {AllData.map(e =>
                        <option key={e.subject} value={e.subject}>{e.subject} | {e.author} | {e.description}</option>
                    )}
                </select>
            )
        }
        return ""
    }




    function SHOW_Search(ARR) {

        if (!TestArray(ARR)) {

            return "Lỗi cú pháp."
        } else {
            if (ARR.length === 0) {
                return "Lỗi cú pháp."
            }
        }

        try {
            let Info_Tool_AfterSearch = JSON.parse(ARR);

            let ArrLevelTale = []
            Info_Tool_AfterSearch.forEach((Element) => {
                let ArrInside = [<h4 key={Key()}>{Element.name}</h4>];
                let TableTr = [];
                Element.content.forEach((eeee) => {
                    let ArrObjectkey = Object.keys(eeee);
                    let ArrTD = [];
                    ArrObjectkey.forEach((eArrObjectkey, i) => {

                        if (eArrObjectkey === "img" || eArrObjectkey === "image") {


                            ArrTD.push(e("td", { key: Key() },
                                e("img", { src: eeee[eArrObjectkey], className: "img_inSearch" })
                            ))
                        } else {


                            ArrTD.push(e("td", { key: Key() }, eeee[eArrObjectkey]))
                        }

                    })

                    TableTr.push(e("tr", { key: Key() }, ArrTD))
                })
                let Table = e("table", { key: Key(), className: "table table-sm" },
                    e("tbody", { key: Key() }, TableTr)
                )



                ArrInside.push(Table)

                let temp = e("div", { key: Key() }, ArrInside);
                ArrLevelTale.push(temp)
            })


            let RES = e("div", { key: Key() }, ArrLevelTale)

            return (
                <div className="toolSearch">
                    {RES}
                </div >
            )
        } catch (error) {

            return "Lỗi cú pháp"
        }
    }





    async function UPDATE_NEW() {
        try {
            let arr = ([OnetoInsert, NewName, NewDescription, Lession, ToolData, Gamedata]);
            console.log(arr)
            let newData = Tempdata
            let Datatoupdate;
            newData.forEach(e => {
                if (e.subject === arr[0]) {
                    let obj = {
                        "nameoflession": NewName,
                        "description": NewDescription,
                        "lession": Lession,
                        "gametool": JSON.parse(ToolData),
                        "gamedata": JSON.parse(Gamedata)
                    }
                    e.all_lession.push(obj)
                    Datatoupdate = e.all_lession;
                }
            })

            // const res = await fetch(`http://localhost:3000/api/gamesence/insertlession`, {
            //     method: 'PUT',
            //     headers: {
            //         "Accept": "application/json",
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify([{ "subject": OnetoInsert, "data": Datatoupdate }])
            // })
            const res = await fetch(`https://app-testdienpham.herokuapp.com/api/gamesence/insertlession`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify([{ "subject": OnetoInsert, "data": Datatoupdate }])
            })

            const { success } = await res.json();


            if (success) {
                router.push("/manager/success")
            } else {
                // const res1 = await fetch(`http://localhost:3000/api/gamesence/insertlession`, {
                //     method: 'PUT',
                //     headers: {
                //         "Accept": "application/json",
                //         "Content-Type": "application/json"
                //     },
                //     body: JSON.stringify([{ "subject": OnetoInsert, "data": Datatoupdate }])
                // })
                const res = await fetch(`https://app-testdienpham.herokuapp.com/api/gamesence/insertlession`, {
                    method: 'PUT',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify([{ "subject": OnetoInsert, "data": Datatoupdate }])
                })
                const { success1 } = await res1.json();
                if (success1) {
                    router.push("/manager/success")
                } else {
                    router.push("/manager/fail")
                }

            }


        } catch (error) {
            console.log(error)
        }
    }




    return (
        <>
            <div>
                <h3>Pick one to insert</h3>
                {!Lock_select ?
                    <div className="container">
                        {Show_option()}
                        <br />
                        Đặt tên không trùng những tên đã có sẵn:  {JSON.stringify(ArrNameoflession)}
                        <br />
                        <input
                            onKeyUp={(e) => {
                                check_nameoflession(e.currentTarget.value)
                            }}
                            className="form-control mt-3" type="text" placeholder="Đặt tên bài học. Lưu ý: Không trùng lặp và ít nhất 6 kí tự." />

                        {NewNameMesage}
                        <br />
                        <input
                            onKeyUp={(e) => {
                                SET_NewDescription(e.currentTarget.value)
                            }}
                            className="form-control mt-3" type="text" placeholder="Nhập mô tả về bài học!" />


                        {NewName !== "" && OnetoInsert !== "" ?
                            <button onClick={() => {
                                SET_Lock_select(true)
                            }} style={{ marginLeft: "60%", marginTop: "5px" }} className="btn btn-outline-danger">Khóa</button>
                            : ""}
                    </div>
                    : OnetoInsert + "  -  " + NewName + "  -  " + NewDescription}

            </div>

            <hr />
            {Lock_select ?
                <div>
                    <h3>Insert Lession</h3>
                    {!Lock_lession ?
                        <div className="row Insert_lession">
                            <div className="col-12">
                                <button className="btn btn-outline-primary" onClick={() => ParsingTest()}>Run</button>
                                <textarea id="HTMLTest_id"></textarea>
                            </div>
                            <div className="col-12">
                                {HTMLTEST}
                            </div>
                            {HTMLTEST !== "" ?
                                <button onClick={() => SET_Lock_lession(true)} style={{ marginLeft: "60%", marginTop: "5px" }} className="btn btn-outline-danger">Khóa</button>
                                : ""}
                        </div>
                        : "Done"}


                </div>
                : ""}
            <hr />

            {Lock_lession ?
                <div>
                    <h3>Insert Tool</h3>
                    {!Lock_gametool ?
                        <>
                            <button
                                onClick={() => {
                                    SET_ToolData(document.getElementById("Text_Tool_id").value)
                                }}
                                style={{ marginLeft: "60%", marginTop: "5px" }} className="btn btn-outline-primary"
                            >Run</button>
                            <div className="row Insert_tool">
                                <div className="col-12">
                                    <textarea id="Text_Tool_id" placeholder={strintGamedatademo} ></textarea>
                                </div>
                                <div className="col-12">
                                    {SHOW_Search(ToolData)}
                                </div>
                            </div>
                            {SHOW_Search(ToolData) !== "Lỗi cú pháp." ? <button
                                onClick={() => {
                                    SET_Lock_gametool(true)
                                }}
                                style={{ marginLeft: "60%", marginTop: "5px" }} className="btn btn-outline-danger">Khóa</button> : ""}
                        </> : "Done"}
                </div>

                : ""}
            <hr />

            {Lock_gametool ? <>
                <div>
                    <h3>Insert Gamedata</h3>
                    <div>
                        <textarea id="Text_gamedata">

                        </textarea>
                    </div>


                </div>
                <button
                    onClick={() => {
                        SET_Gamedata(document.getElementById("Text_gamedata").value);
                        SET_Gameplay(true);
                        SET_ScoreSumit(0)
                    }}
                    style={{ marginLeft: "60%", marginTop: "5px" }} className="btn btn-outline-primary"
                >Run</button>

                <div>

                    {Gameplay ? <Playing ToolData={ToolData} Gamedata={Gamedata} SET_ScoreSumit={SET_ScoreSumit} /> : "Lỗi cú pháp"}
                    <h1>ScoreSubmit: {ScoreSubmit}</h1>

                    {ScoreSubmit >= 20 ?
                        <button
                            onClick={() => {
                                UPDATE_NEW()
                            }}
                            style={{ marginLeft: "60%", marginTop: "5px" }} className="btn btn-outline-primary"
                        >SAVE</button> : "Score >=20 to Save"}
                </div>
            </>
                : ""}
        </>
    )
}




export async function getStaticProps(context) {
    const { db } = await connectToDatabase()

    const isConnected = await db.collection("gamesencedata").find({}).toArray()

    let Tempdata = JSON.parse(JSON.stringify(isConnected))
    return {
        props: { Tempdata },
    }
}





function setHtml(getElemContent) {


    // Clean Up whitespace in the element
    // If you don't want to remove whitespace, then you can skip this line
    let newHtml = getElemContent.replace(/[\n\t ]+/g, " ");

    //RegEX to check HTML
    let checkHtml = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/.test(getElemContent);

    //Check it is html or not
    if (checkHtml) {
        return true
    }
    else {
        return false
    }
}

function TestArray(string_toparce) {
    try {
        if (typeof (JSON.parse(string_toparce).length) === "number") {
            return true
        } else { return false }
    } catch (error) {

        return false
    }
}

function Key() {
    return Math.random();
}




let strintGamedatademo = `[{"name":"Table People","content":[{"name":"James","age":30,"status":true,"room":1089,"image":"https://i.postimg.cc/mgdMdLCP/man5.png"},{"name":"Alexis","age":38,"status":true,"room":1115,"image":"https://i.postimg.cc/Jz7ZcDDw/women5.jpg"},{"name":"Kayla","age":37,"status":true,"room":1111,"image":"https://i.postimg.cc/Jz7ZcDDw/women5.jpg"},{"name":"Charlotte","age":38,"status":true,"room":1134,"image":"https://i.postimg.cc/wMKDhwJF/women2.png"}]},
{"name":"Table Fruit","content":[{"name":"Elizabeth","age":25,"image":"https://i.postimg.cc/mgdMdLCP/man5.png","status":true,"nameoffruit":"Avocado","fruittochange":"Durian","hour":8,"minutes":30,"endtime":"PM"},{"name":"Emily","age":78,"image":"https://i.postimg.cc/mgdMdLCP/man5.png","status":true,"nameoffruit":"Apple","fruittochange":"Lychee","hour":8,"minutes":30,"endtime":"AM"},{"name":"Emma","age":44,"image":"https://i.postimg.cc/mgdMdLCP/man5.png","status":true,"nameoffruit":"Orange","fruittochange":"Orange","hour":8,"minutes":15,"endtime":"PM"},{"name":"Selina","age":78,"image":"https://i.postimg.cc/mgdMdLCP/man5.png","status":true,"nameoffruit":"Lychee","fruittochange":"Melon","hour":12,"minutes":30,"endtime":"PM"}]}]`
