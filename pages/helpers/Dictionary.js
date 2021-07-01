import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
function Dictionary(props) {
    const [DefineWord, SET_DefineWord] = useState("")
    const Owlbot = require('owlbot-js');
    const client = Owlbot("ec7bc79a68147ad64fb199f357d001f5428e7ddd");

    useEffect(() => {
        try {
            let status = true;
            if (props.Word.indexOf(" ") === -1 && status) {
                client.define(props.Word).then(function (result) {
                    SET_DefineWord(result);
                }).catch(
                    function (error) {
                        console.log(error)
                    }
                );
            }
            return function cleanup() {
                status = false
            }

        } catch (error) {
            SET_DefineWord(["Không hợp lệ"])
        }
    }, [props.Word])

    return (
        <div>
            {Show_word()}
        </div>
    )

    function Show_word() {
        try {
            return (
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h4>{DefineWord.word}</h4>
                    <p>{DefineWord.pronunciation}</p>
                    {DefineWord.definitions.map((e, i) =>
                        <div key={i}>
                            <p><b>Type:</b> {e.type}</p>
                            <p><b>Definition:</b> {e.definition}</p>
                            <p><b>Example: </b>    {e.example !== null ? parse("<span>" + e.example + "</span>") : ""}</p>
                            <hr />
                        </div>
                    )}
                </div>


            )
        } catch (error) {
            return ""
        }
    }
}

export default Dictionary