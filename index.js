function shout(string) {
return string.toUpperCase();
}
function whisper(string) {
return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase())
}
function logWhisper(string) {
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string) {
    const loudAnswer = "YES INDEED!"
    const softAnswer = "I can't hear you!"
    const dinner = "I would love to!"
    
    if (string.toUpperCase() === string) {
        return loudAnswer
    }
    if (string.toLowerCase() === string) {
        return softAnswer
    }
    if ("Let's have dinner together!" === string) {
        return dinner
    }
}