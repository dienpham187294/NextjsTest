export default {

    "qs1": [
        "Excuse me, where do I queue up to register?",
        "Excuse me, where do I go to register?",
        "Excuse me, where do I register?",
    ],
    "aw1": [
        "You will see the line for new patients on your right.",
        "The line for new patients is on your right.",
    ],
    "askForHowRegister": [
        "What do I need to register?",
        "How to register?",
    ],
    "awForHow": ["They will give you a registration card. Fill in it and bring it back to me."],
    "askForCosttRegister": [
        "How much does it cost?"
    ],
    "awForCost": ["The registration fee will be 10 dollars. Pay overthere and they will give you a registration card"],
    "registationCard": registationCard,
    "registerAlreadyShowCard": ["Excuse me, I already registered. This is my registration card."],
    "registerAlreadyNotShowCard": ["Excuse me, I already registered."],
    "askForRegisterCard": [
        "Where is your registration card?",
        "Can you give me your registration card?",
    ],
    "registerAlreadyNowShowCard": ["This is my registration card."],
    "askForProblems": [
        "What's the problems?",
        "What seems to be bothering you?",
        "What seems to be your trouble?",
        "In what way are you not feeling well?",
        "Tell me what your problem is.",
    ],
    "tableOfProblems": {
        "medical": {
            "condition": [
                "Since this morning I've had a high tem perature, and I ",
                "feel generally wretched.",
                "I was outside all day yesterday. Now, my face was red and burning.",
                "I keep sneezing and coughing.",
                "I am so tired. I can’t keep my eyes open! I’m very hot too.",
                "I ate some seafood yesterday. Now I feel sick.",
                "My throat is very sore.",
            ],
            "advice": ["In that case, you'd better go to the medical department."],
            "askForDirection": ["Which way do I go to medical department?", "Which way do I go?"],
            "awForDicrection": [
                `Take the lift to the fourth floor, go through the double doors on your right, and go along the corridor until you see the Medical Department on your left.`
            ]
        },
        "surgery": {
            "condition": [
                "There's a pain in my chest.",
                "There's a pain in my back.",
                "There's a pain in my knee.",
                "There's a pain in my heel.",
                "I've got a pain in my chest.",
                "I've got a pain in my back.",
                "I've got a pain in my knee.",
                "I've got a pain in my heel.",
            ],
            "advice": ["In that case, you'd better go to the surgery department."],
            "askForDirection": ["Which way do I go to surgery department?", "Which way do I go?"],
            "awForDicrection": [
                `Go up to the second floor, and you'll see it sign-posted to the right.
                `
            ]
        }
    }
}

function registationCard(name, age) {

    let output = `
    <div>
        <hr/>
        <h5>Registration Card</h5>
        Name: `+ name + `
        <br />
        Age: `+ age + `
    </div>
    `

    return output
}