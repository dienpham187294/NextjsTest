import ArrOfPeople from "../filedulieu1/dataHelperFunction/ArrOfpeple"

export default {
    "tool": [],
    "identities": {
        "data": ArrOfPeople
    },
    "table": {
        "Table 1": {
            "data": [
                ["Doing fine", "Good", "Great 1", "Great 2", "Great 3"],
                ["hinh 1", "hinh 2", "hinh 3", "hinh 4", "hinh 5"]
            ],
            "get": 1,
            "tool": true,
            "pushSubmit": ["hinh 1"]
        }
    },
    "total": {
        "name": ArrOfPeople[0][0],
        "image": ArrOfPeople[0][1],
        "status": true,
        "gender": ArrOfPeople[0][2],
        "icon": ["hi", ArrOfPeople[0][1]],
        "viewPick": {
            "header": "none",
            "img": "https://i.postimg.cc/SRWCVcf4/man2.png"
        },
        "submit": [],
        "robotspeakfirst": ["Hi", "Hello"]
    },
    "begin": [
        {
            "m00": "0",
            "m01": ["How are you"],
            "m02": ["Doing fine", "I'm Doing fine"],
            "m03": {
                "endSuccessfull": false
            },
            "m04": ["hinh 1"],
            "m05": "Table 1"
        }
    ],
    "mid": [
        {
            "m00": "0",
            "m01": ["How are you"],
            "m02": ["Doing fine", "I'm Doing fine"],
            "m03": {
                "endSuccessfull": false
            },
            "m04": ["hinh 1"],
            "m05": "Table 1"
        }
    ],
    "end": [
    ]
}