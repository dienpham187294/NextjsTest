import { useEffect, useState } from 'react';

function Dictionary(props) {
    const [DefineWord, SET_DefineWord] = useState("")
    const Owlbot = require('owlbot-js');
    const client = Owlbot("ec7bc79a68147ad64fb199f357d001f5428e7ddd");
    useEffect(() => {
        try {
            if (props.Word.indexOf(" ") === -1) {
                client.define(props.Word).then(function (result) {
                    SET_DefineWord(result);
                });
            } else {
                SET_DefineWord(["Không hợp lệ"])
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
                            <p>Type: {e.type}</p>
                            <p>Definition: {e.definition}</p>
                            <p>Example: {e.example}</p>
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