
import { useState } from "react";
import shuffleArr from "../filedulieu1/dataHelperFunction/shuffleArr";

function UpLoadFile(props) {

    const [srcYoutube, SET_SrcYoutube] = useState("https://www.youtube.com/embed/a-48STRZtIQ")

    function Fnpick(arrPick) {
        try {
            props.Total.fnObj.SET_Data_InfoOflession(arrPick[0].hoctap)
            props.Total.fnObj.SET_NameOflession(arrPick[0].nameoflession)
            props.Total.fnObj.SET_DataToolR(arrPick[0].dataTool)
            props.Total.fnObj.SET_Data_Game(shuffleArr(shuffleArr(arrPick[1].coerdataoflession)))
            props.Total.fnObj.SET_PageChange(1);
        } catch (error) {
            console.log(error);
        }
    }
    function setStructure(arrPick) {
        try {
            props.Total.fnObj.SET_Data_InfoOflession(arrPick[0].hoctap)
            props.Total.fnObj.SET_Data_structure(shuffleArr(shuffleArr(arrPick[1].coerdataoflession)))
            props.Total.fnObj.SET_PageChange(2)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{ margin: "5%" }}>
            <div style={{ width: "100%", textAlign: "center", }}>
                <h1 style={{ color: "red" }}> <i>Luyện tập!</i></h1>
                <p>Nhanh chóng đạt được một kĩ năng tương đối với cách thức đơn giản, hiệu quả.</p>
                <b> <i>Phổ cập tiếng anh phổ thông!</i></b>
            </div>

            <hr />
            {showInInline(props.DL, setStructure, Fnpick, SET_SrcYoutube)}
            <hr />
            <div id="videoID" className="respondiframe">
                <iframe className="responsive-iframe" src={srcYoutube} allowFullScreen></iframe>
            </div>
        </div >
    )
}

export default UpLoadFile


function showInInline(test, setStructure, Fnpick, SET_SrcYoutube) {
    try {
        return (
            <>
                {test.map((e, i) =>
                    <div key={i} className="divT1">
                        {e[0].nameoflession !== undefined ? <div>
                            {e[0].storyBoicanh !== "" && e[0].storyBoicanh !== undefined ?
                                <>
                                    <p style={
                                        {
                                            color: "blueviolet"
                                        }
                                    }>
                                        {e[0].storyBoicanh}
                                    </p>
                                </>

                                : null}

                            <b style={{ color: "black" }}>{e[0].nameoflession}</b>
                            <p>{e[0].story}</p>
                            <button
                                style={{ border: "1px solid green", borderRadius: "5px", padding: "5px", marginTop: "5px", cursor: "pointer" }}
                                className="btnHover ml-1"
                                onClick={() => {
                                    Fnpick(e)
                                }}

                            >T. hành</button>
                            <button
                                style={{ border: "1px solid green", borderRadius: "5px", padding: "5px", marginTop: "5px", cursor: "pointer" }}
                                className="btnHover ml-1"
                                onClick={() => {
                                    setStructure(e)
                                }}
                            >Học tập</button>
                            {showBtnVideoHuongdan(e[0].srcYoutube, SET_SrcYoutube)}

                        </div>
                            : showInInline1(e, setStructure, Fnpick, SET_SrcYoutube)}
                    </div>
                )}
            </>
        )


    } catch (error) {
        console.log(error)
    }
}


function showInInline1(test, setStructure, Fnpick, SET_SrcYoutube) {
    try {
        return (
            <>
                {test.map((e, i) =>
                    <div key={i} className="divT2" >
                        {e[0].nameoflession !== undefined ? <div>
                            {e[0].storyBoicanh !== "" && e[0].storyBoicanh !== undefined ?
                                <>
                                    <p style={
                                        {
                                            color: "blueviolet"
                                        }
                                    }>
                                        {e[0].storyBoicanh}
                                    </p>
                                </>

                                : null}

                            <b style={{ color: "black" }}>{e[0].nameoflession}</b>
                            <p>{e[0].story}</p>
                            <button
                                style={{ border: "1px solid green", borderRadius: "5px", padding: "5px", marginTop: "5px", cursor: "pointer" }}
                                className="btnHover ml-1"
                                onClick={() => {
                                    Fnpick(e)
                                }}

                            >T.hành</button>
                            <button
                                style={{ border: "1px solid green", borderRadius: "5px", padding: "5px", marginTop: "5px", cursor: "pointer" }}
                                className="btnHover ml-1"
                                onClick={() => {
                                    setStructure(e)
                                }}
                            >Học tập</button>
                            {showBtnVideoHuongdan(e[0].srcYoutube, SET_SrcYoutube)}
                            {showBtnVideoNgheTacham(e[0].srcListenAndSplit, SET_SrcYoutube)}
                        </div>
                            : showInInline(e, setStructure, Fnpick, SET_SrcYoutube)}
                    </div>
                )}
            </>
        )


    } catch (error) {
        console.log(error)
    }
}


function showBtnVideoNgheTacham(dataqInput, SET_SrcYoutube) {
    try {
        return (
            <>
                {dataqInput.map((e, i) =>
                    <div key={i}>
                        <a href="#videoID">
                            <button
                                style={{ border: "1px solid green", borderRadius: "5px", padding: "5px", marginTop: "5px", cursor: "pointer" }}
                                className="btnHover ml-1"
                                onClick={() => {
                                    SET_SrcYoutube(e)
                                }}
                            >Video {i + 1}</button>
                        </a>
                    </div>
                )}
            </>
        )
    } catch (error) {
        return null
    }
}

function showBtnVideoHuongdan(dataqInput, SET_SrcYoutube) {
    try {

        if (dataqInput !== "") {
            return (
                <>
                    <br />
                    <a href="#videoID">
                        <button
                            style={{ border: "1px solid green", borderRadius: "5px", padding: "5px", marginTop: "5px", cursor: "pointer" }}
                            className="btnHover ml-1"
                            onClick={() => {
                                SET_SrcYoutube(dataqInput)
                            }}
                        >Video</button>
                    </a>
                </>
            )
        }
        return null
    } catch (error) {
        return null
    }
}