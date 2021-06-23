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
            "handling_next": [
                {
                    "location": [0, 0],
                    "manspeak": ["I want to buy an apple"],
                    "robotspeak": ["You want to buy an apple, right?"],
                    "handling_next": [
                        {
                            "location": [0, 0, 1],
                            "manspeak": ["yes"],
                            "robotspeak": ["that's ok"],
                            "handling_next": [
                                {
                                    "location": [0, 0, 0, 1],
                                    "manspeak": ["yes or yes"],
                                    "robotspeak": ["that's ok"],
                                    "handling_next": []
                                }
                            ]
                        },
                        {
                            "location": [0, 0, 2],
                            "manspeak": ["no"],
                            "robotspeak": ["that fine"],
                            "handling_next": []
                        }
                    ]

                },
                {
                    "location": [0, 1],
                    "manspeak": ["I want to buy an banana"],
                    "robotspeak": ["You want to buy an banana, right?"],
                    "handling_next": [
                        {
                            "location": [0, 1, 0],
                            "manspeak": ["yes"],
                            "robotspeak": ["that's ok"],
                            "handling_next": []
                        },
                        {
                            "location": [0, 1, 1],
                            "manspeak": ["no"],
                            "robotspeak": ["that fine"],
                            "handling_next": []
                        }
                    ]

                },
            ]
        }
    }
]