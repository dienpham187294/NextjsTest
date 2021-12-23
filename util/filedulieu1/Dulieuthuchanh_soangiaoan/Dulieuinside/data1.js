export default {
    "bai1": {
        "M01": ["Hi"],
        "N02": ["Hi, how are you?"],
        "M03": ["I'm good."]
    },
    "bai2": {
        "M01": ["Hi", "Hello"],
        "N02": ["Hi, how are you?"],
        "M03": ["I'm good", "Doing fine", "Good", "I'm great."]
    },
    "bai3": {
        "M01": ["Hi", "Hello"],
        "N02": ["Hi, how are you?"],
        "M03": ["I'm good", "Doing fine", "Good", "I'm great."]
    },
    "bai4": {
        "M01": ["Hi", "Hello"],
        "N02": ["Hi, how are you?", "Good afternoon, how are you?"],
        "M03": ["I'm good", "Doing fine", "Good", "I'm great."]
    },
    "bai5a": {
        "M01": ["Hi", "Hello"],
        "M02": ["Hi, how are you?", "Good afternoon, how are you?"],
        "M03": ["I'm good", "Doing fine", "Good", "I'm great."],
        "M04": ["How can I help you?"],
        "M05": ["I want to order to go."],
        "submit05": "For to go"
    },
    "bai5b": {
        "M01": ["Hi", "Hello"],
        "M02": ["Hi, how are you?", "Good afternoon, how are you?"],
        "M03": ["I'm good", "Doing fine", "Good", "I'm great."],
        "M04": ["How can I help you?"],
        "M05": ["I want to eat here."],
        "submit05": "For here",
        "M06": ["How many people do you have?"],
        "M07": [
            {
                "in1": ["A table for 2"],
                "in2": "2"
            },
            {
                "in1": ["A table for 3"],
                "in2": "3"
            },
            {
                "in1": ["A table for 3"],
                "in2": "4"
            },
        ]
    },
    "tool1bai5": ["For to go", "For here"],
    "bai6a": {
        "M01": ["Hi", "Hello"],
        "M02": ["Hi, how are you?", "Good afternoon, how are you?"],
        "M03": ["I'm good", "Doing fine", "Good", "I'm great."],
        "M04": ["How can I help you?"],
        "M05": ["I want to order to go."],
        "submit05": "For to go",
        "M06": ["Go to the reception desk, please!"],
        "M07": ["That's fine."]
    },
    "bai6b": {
        "M01": ["Hi", "Hello"],
        "M02": ["Hi, how are you?", "Good afternoon, how are you?"],
        "M03": ["I'm good", "Doing fine", "Good", "I'm great."],
        "M04": ["How can I help you?"],
        "M05": ["I want to eat here."],
        "submit05": "For here",
        "M06": ["How many people do you have?"],
        "M07": [
            {
                "in1": ["A table for 2"],
                "in2": "2"
            },
            {
                "in1": ["A table for 3"],
                "in2": "3"
            },
            {
                "in1": ["A table for 3"],
                "in2": "4"
            },
        ],
        "M08": ["Could you follow me, please!"],
        "M09": ["That's fine."]
    },
    "tool1bai6": ["For to go", "For here"],
    "bai7a": {
        "M01": ["Hi", "Hello"],
        "M02": ["Hi, how are you?", "Good afternoon, how are you?"],
        "M03": ["I'm good", "Doing fine", "Good", "I'm great."],
        "M04": ["How can I help you?"],
        "M05": ["I want to order to go."],
        "submit05": "For to go",
        "M06": ["What do you want to order?", "What would you like?"],
        "M07": function (food) {
            return ["I want to order " + food]
        },
        "M08": ["Something to drink?", "Do you want to order a drink?"],
        "M09": function (drink) {
            return ["I want to order " + drink, drink + ", please!"]
        },
    },
    "bai7b": {
        "M01": ["Hi", "Hello"],
        "M02": ["Hi, how are you?", "Good afternoon, how are you?"],
        "M03": ["I'm good", "Doing fine", "Good", "I'm great."],
        "M04": ["How can I help you?"],
        "M05": ["I want to eat here."],
        "submit05": "For here",
        "M06": ["How many people do you have?"],
        "M07": [
            {
                "in1": ["A table for 2"],
                "in2": "2"
            },
            {
                "in1": ["A table for 3"],
                "in2": "3"
            },
            {
                "in1": ["A table for 3"],
                "in2": "4"
            },
        ],
        "M08": ["Could you follow me, please!"],
        "M09": ["That's fine."]
    },
    "tool1bai7": ["For to go", "For here"],
    "bai8": {
        "M01": ["Excuse me!", "Hey!"],
        "M02": ["How can I help you?", "May I help you?"],
        "M03": ["I want to order!"],
        "M04": ["What do you want to order?"],
        "M05": function (food) {
            return ["I want to order " + food]
        },
        "M06": ["Do you want to order a drink?"],
        "M07": function (drink) {
            return [drink + ", please!"]
        },
        "M08": ["Do you need anything else?"],
        "M09": ["No thanks."]
    },
    "bai9": {
        "M01": ["Excuse me!", "Hey!"],
        "M02": ["How can I help you?", "May I help you?"],
        "M03": ["Where is the toilet?"],
        "M04": ["At the end of the hall"],
        "M05": ["Thank you!"]
    },
    "bai10": {
        "M01": ["Excuse me!", "Hey!"],
        "M02": ["How can I help you?", "May I help you?"],
        "M03": function (tool) {
            return ["Can you give me a " + tool]
        },
        "M04": ["Here you are!"],
        "M05": ["Thank you."],
        "tool": [
            {
                "in1": "spoon",
                "in2": "https://i.postimg.cc/s26z4mVK/spoon.jpg"
            },
            {
                "in1": "fork",
                "in2": "https://i.postimg.cc/cHvS93CW/fork.jpg"
            }
        ]
    }
}