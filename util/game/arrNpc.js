export default [
    {
        "x": 25,
        "y": 380,
        "width": 100,
        "height": 120,
        "xuly":
        {
            "Showhinh": "https://i.postimg.cc/dQym97VH/Address.jpg",
            "sound1st": "mixkit-ominous-drums-227.wav",
            "funtionXuly": [

                {
                    "type": "showHTML",
                    "data": "<h1>Map</h1>"
                }
            ],
            "handling_next": []

        }
    },
    {
        "x": 185,
        "y": 95,
        "width": 60,
        "height": 55,
        "xuly":
        {
            "Showhinh": "https://i.postimg.cc/B6Y7Syf1/Avatar-1.jpg",
            "sound1st": "mixkit-video-game-treasure-2066.wav",
            "robotspeak1st": ["Hi. May i help you", "hello. may i help you"],
            "robotgender": 2,
            "funtionXuly": [],
            "handling_next": [
                {
                    "location": [0, 0],
                    "manspeak": ["Take a request"],
                    "robotspeak": ["You can see request table that you can take"],
                    "voice": 2,
                    "funtionXuly": [{
                        "type": "showHTML",
                        "data": `<table class="table"><tbody><tr><td>Dòng 1</td><td>Dòng 2</td></tr></tboby><tr><td>ABC</td><td>CDF</td></tr></table>`
                    }],
                    "handling_next": [
                        {
                            "location": [0, 0, 1],
                            "manspeak": ["Take table 1"],
                            "robotspeak": ["that's ok"],
                            "voice": 2,
                            "funtionXuly": [
                                { "type": "showHTML", "data": "<h1>Commited</h1>" }],
                            "handling_next": [
                                {
                                    "location": [0, 0, 0, 1],
                                    "manspeak": ["yes or yes"],
                                    "voice": 2,
                                    "robotspeak": ["that's ok"],
                                    "funtionXuly": [{}],
                                    "handling_next": []
                                }
                            ]
                        },
                        {
                            "location": [0, 0, 2],
                            "manspeak": ["Take table 23"],
                            "robotspeak": ["that fine"],
                            "voice": 2,
                            "funtionXuly": [{}],
                            "handling_next": []
                        }
                    ]

                },
                {
                    "location": [0, 1],
                    "manspeak": ["I want to buy an banana"],
                    "robotspeak": ["You want to buy an banana, right?"],
                    "voice": 2,
                    "funtionXuly": [{}],
                    "handling_next": [
                        {
                            "location": [0, 1, 0],
                            "manspeak": ["yes"],
                            "robotspeak": ["that's ok"],
                            "voice": 2,
                            "funtionXuly": [{}],
                            "handling_next": []
                        },
                        {
                            "location": [0, 1, 1],
                            "manspeak": ["no"],
                            "robotspeak": ["that fine"],
                            "voice": 2,
                            "funtionXuly": [{}],
                            "handling_next": []
                        }
                    ]

                },
            ]
        }
    },
    {
        "x": 225,
        "y": 350,
        "width": 50,
        "height": 30,
        "xuly":
        {
            "Showhinh": "https://i.postimg.cc/W1RrsCDp/foundation-market.jpg",
            "sound1st": "market.mp3",
            "robotspeak1st": ["Market"],
            "funtionXuly": [
                {
                    "type": "showHTML",
                    "data": "<h1>In the Market</h1>"
                }
            ],
            "handling_next": [
                {
                    "location": [0, 0],
                    "manspeak": ["Go to baker shop"],
                    "voice": 2,
                    "robotspeak": ["hi welcome to baker shop. May i help you"],
                    "funtionXuly": [
                        {
                            "type": "changeImage",
                            "data": "https://i.postimg.cc/B6Y7Syf1/Avatar-1.jpg"
                        }
                    ],
                    "handling_next": [
                        {
                            "location": [0, 0, 1],
                            "manspeak": ["I want to buy"],
                            "voice": 2,
                            "robotspeak": ["You want to buy what?"],
                            "funtionXuly": [],
                            "handling_next": []
                        },
                        {
                            "location": [0, 0, 2],
                            "manspeak": ["I want to change"],
                            "voice": 2,
                            "robotspeak": ["You want to change what"],
                            "funtionXuly": [],
                            "handling_next": []
                        }
                    ]
                },
                {
                    "location": [0, 1],
                    "manspeak": ["Go to butcher shop"],
                    "voice": 2,
                    "robotspeak": ["that's ok"],
                    "funtionXuly": [
                        {
                            "type": "showHTML",
                            "data": "<p>In the Butcher shop</p>"
                        },
                        {
                            "type": "changeImage",
                            "data": "https://i.postimg.cc/W1RrsCDp/foundation-market.jpg"
                        }
                    ],
                    "handling_next": []
                }

            ]

        }
    },
]