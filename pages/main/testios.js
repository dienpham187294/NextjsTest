
import { useEffect } from "react"
export default function tets(params) {

    useEffect(() => {
        $(function () {

            if ('speechSynthesis' in window) {
                speechSynthesis.onvoiceschanged = function () {
                    var $voicelist = $('#voices');

                    if ($voicelist.find('option').length == 0) {
                        speechSynthesis.getVoices().forEach(function (voice, index) {
                            var $option = $('<option>')
                                .val(index)
                                .html(voice.name + (voice.default ? ' (default)' : ''));

                            $voicelist.append($option);
                        });

                        // $voicelist.material_select();
                    }
                }

                $('#speak').click(function () {
                    var text = $('#message').val();
                    var msg = new SpeechSynthesisUtterance();
                    var voices = window.speechSynthesis.getVoices();
                    // msg.voice = voices[$('#voices').val()];
                    msg.voice = voices["0"];
                    msg.rate = $('#rate').val() / 10;
                    msg.pitch = $('#pitch').val();
                    msg.text = text;

                    msg.onend = function (e) {
                        document.getElementById("test").innerText = ('Finished in ' + event.elapsedTime + ' seconds.' + $('#voices').val() + typeof ($('#voices').val()) + voices[$('#voices').val()].name);
                    };

                    speechSynthesis.speak(msg);
                })
            } else {
                $('#modal1').openModal();
            }
        });
    }, [])
    return (
        <div>
            <div className="container">
                <hr />
                <p id="test"></p>
                <div className="row">
                    <nav>
                        <div className="nav-wrapper">
                            <div className="col s12">
                                <a href="#" className="brand-logo">Text to speech example</a>
                            </div>
                        </div>
                    </nav>
                </div>
                <form className="col s8 offset-s2">
                    <div className="row">
                        <label>Choose voice</label>
                        <select id="voices"></select>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <label>Rate</label>
                            <p className="range-field">
                                <input type="range" id="rate" min="1" max="100" value="10" />
                            </p>
                        </div>
                        <div className="col s6">
                            <label>Pitch</label>
                            <p className="range-field">
                                <input type="range" id="pitch" min="0" max="2" value="1" />
                            </p>
                        </div>
                        <div className="col s12">
                            <p>N.B. Rate and Pitch only work with native voice.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="message" className="materialize-textarea"></textarea>
                            <label>Write message</label>
                        </div>
                    </div>
                    <a href="#" id="speak" className="waves-effect waves-light btn">Speak</a>
                </form>
            </div>

            <div id="modal1" className="modal">
                <h4>Speech Synthesis not supported</h4>
                <p>Your browser does not support speech synthesis.</p>
                <p>We recommend you use Google Chrome.</p>
                <div className="action-bar">
                    <a href="#" className="waves-effect waves-green btn-flat modal-action modal-close">Close</a>
                </div>
            </div>
        </div>
    )
}