import { useEffect, useState } from "react";
import Dictaphone from "../../helpers/RegcognitionV1-0-1";

// let flag = true;
// let arr_HoldQuestion = ["none"]
// let i = 0
function PracticeDiv(props) {
    const [MessageListen, SET_MessageListen] = useState("")
    const [Time, SET_Time] = useState(5)
    // const [QuestionNumber, SET_QuestionNumber] = useState(0)
    const [Hint, SET_Hint] = useState("");
    const [Score, SET_Score] = useState(0);
    const [Anwer, SET_Anwer] = useState(0);

    const [i, SET_i] = useState(0)
    const [flag, SET_flag] = useState(true)
    const [arr_HoldQuestion, SET_arr_HoldQuestion] = useState(["none"])
    useEffect(
        () => {
            if (flag) {
                let arr_temp = props.Data.sort(() => 0.5 - Math.random()).sort(() => 0.5 - Math.random());
                SET_arr_HoldQuestion(arr_temp)
                SET_flag(false)
            }
        }
    )

    useEffect(() => {

        if (MessageListen.indexOf(Anwer) !== -1) {
            SET_Score(S => S + 1);

            try {
                if (arr_HoldQuestion[i][3] !== undefined) {
                    SET_Time(15);
                    SET_Hint(arr_HoldQuestion[i][3]);
                    SET_Anwer(arr_HoldQuestion[i][0])
                    SET_i(I => I + 1)
                    SET_MessageListen("")
                    // SET_QuestionNumber(Q => Q + 1);
                }
            } catch (error) {
                console.log("")
            }

        }

    }, [MessageListen])
    useEffect(() => {
        if (Time === 0) {
            try {
                if (arr_HoldQuestion[i][3] !== undefined) {
                    SET_Time(15);
                    SET_Hint(arr_HoldQuestion[i][3]);
                    SET_Anwer(arr_HoldQuestion[i][0]);
                    SET_i(I => I + 1);
                    // SET_QuestionNumber(Q => Q + 1);
                }
            } catch (error) {
                console.log("")
            }
        }
        let timer1 = setTimeout(() => {
            SET_Time(T => T - 1);
        }, 1000);
        return () => {
            clearTimeout(timer1);
        };
    }, [Time])



    return (
        <div style={{
            position: "fixed",
            top: "3%",
            bottom: "3%",
            left: "3%",
            right: "3%",
            border: "1px solid black",
            borderRadius: "10px",
            backgroundColor: "white",
            overflow: "auto"
        }}>
            <button
                style={{
                    position: "absolute",

                    right: "10px",
                    top: "10px"
                }}
                className="btn btn-outline-danger"
                onClick={() => {
                    props.SET_Practice(false)
                }}>Thoát</button>

            <div
                style={{
                    width: "100%",
                    textAlign: "center"
                }}
            >
                <h1>{Time}</h1>
                <h5>Điểm: {Score}/ {arr_HoldQuestion.length}</h5>

                <h5>Đọc từ có nghĩa: {Hint}</h5>


            </div>










            <hr />
            <div style={{
                width: "100%",
                bottom: "10px",
                height: "200px",
                textAlign: "center"
            }}>
                <Dictaphone
                    Data={props.Data_Commands}
                    SET_MessageListen={SET_MessageListen}
                />
            </div>
        </div>
    )
}

export default PracticeDiv

Array.prototype.PickRandom = function () {
    return this[Math.floor(Math.random() * this.length)];
}