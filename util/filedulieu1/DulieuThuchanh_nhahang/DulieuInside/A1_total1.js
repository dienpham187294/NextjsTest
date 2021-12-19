import imgInfo from "./img"
import PickRandom from "../../../mainPlayversion2/funtionInside/PickRandom"

export default {
    "greeting": ["Good afternoon, May I help you?", "Good morning, May I help you?", "Good evening, May I help you?", "How can I help you?"],
    "awForNeed": ["I'd like to make a reservation, please."],
    "awFordecline": awFordecline,
    "showSignalFullyBooked": imgInfo.FullTable,
    "repondsTodecline": ["That's no problems.", "That's ok."],

    "imgIconCall": imgIconCall,
    "viewPhoneCall": viewPhoneCall,

    "showSignalNoMoreNonSmokingByWindow": imgInfo.NonSmokingFull,
    "askForWhatDay": ["For what day, please?", "For which day, please?"],
    "awForWhatDay": awForWhatDay,
    "askForTime": askForTime,
    "askForName": ["May I have your name, please?", "Could I have your name?", "Under what name?"]

}

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

function awForWhatDay(date, month) {
    return ["The " + date + " of " + month, month + " " + date]
}
function askForTime(gender) {
    if (gender === "male") {
        return ["And for what time, sir", "What time is the reservation for?", "At what time, sir?"]
    } else {
        return ["And for what time, madam", "What time is the reservation for?", "At what time, sir?"]
    }
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