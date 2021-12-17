import imgInfo from "./img"
import PickRandom from "../../../mainPlayversion2/funtionInside/PickRandom"
export default {
    "greeting": ["Good afternoon, May I help you?", "Good morning, May I help you?", "Good evening, May I help you?", "How can I help you?"],
    "awForNeed": ["I'd like to make a reservation, please."],
    "awFordecline": awFordecline,
    "showSignalFullyBooked": "https://i.postimg.cc/fL1BvktQ/Full-Booked.png",
    "repondsTodecline": ["That's no problems.", "That's ok."],
    "askForWhatDay": ["For what day, please?", "For which day, please?"],
    "imgIconCall": imgIconCall,
    "viewPhoneCall": viewPhoneCall
}

// function awForHowMany(n) {
//     return ["I have " + n + " people, please.", "A table for " + n]
// }
// function awForFood(n) {
//     return [n + ", please.", "I want to take " + n]
// }
// function awForDrink(n) {
//     return [n + ", please."]
// }
function viewPhoneCall() {
    return {
        "img": PickRandom(imgInfo.phoneCall),
        "header": "Someone is calling the restaurant.",
        "content": "Pick up the phone and answer."
    }
}
function imgIconCall(gender) {
    if (gender === "male") {
        return imgInfo.guestInCall.male
    } else {
        return imgInfo.guestInCall.female
    }
}

function awFordecline(gender) {
    if (gender === "male") {
        return ["Sorry, sir. There are no more tables.", "Sorry, sir. Tables are fully booked."]
    } else {
        return ["Sorry, madam. There are no more tables.", "Sorry, madam. Tables are fully booked."]
    }
}