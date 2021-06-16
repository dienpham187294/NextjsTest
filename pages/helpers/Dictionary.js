import { useState } from 'react';

function Dictionary(props) {
    const [Word, SET_Word] = useState("")
    const [DefineWord, SET_DefineWord] = useState([])
    const Owlbot = require('owlbot-js');

    const client = Owlbot("ec7bc79a68147ad64fb199f357d001f5428e7ddd");

    client.define('September').then(function (result) {
        // console.log(result);
    });


    return (
        <div>
            <input type="text" onChange={
                (e) => {
                    SET_Word(e.currentTarget.value)
                }
            } />

            <button
                onClick={() => {
                    client.define(Word).then(function (result) {
                        SET_DefineWord(result);
                    });
                }}
            >
                Search
            </button>
            <button
                onClick={() => {
                    props.SET_MessageToRead([Word, "Google UK English Male"])
                }}
            >
                Speech
            </button>
            <br />
            {JSON.stringify(DefineWord)}
        </div>
    )
}

export default Dictionary