/*
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */
//Possible characters to be used
var numCharset = ["1234567890"]
var upCharset = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var lowCharset = ["abcdefghijklmnopqrstuvwxyz"]
var specCharset = ["!@#$%^&*()-_=+{}[];':,.<>/?"]
    //Get user prefences for password
function specifyOptions() {
    //User input variables
    var userPref = {
        howLong: howLong,
        numChar: numChar,
        lowChar: lowChar,
        upChar: upChar,
        specChar: specChar
    }
    return userPref;
    //Get length of password
    var howLong = parseInt(
        prompt("How long should your password be?")
    );
    //Validate number given
    if (isNaN(howLong) === true) {
        alert("That's not a number . . . you dunce")
        return;
    }
    //Check Password length
    if (howLong < 8 || howLong > 128) {
        alert("That's either too long or too short, please try again")
        return;
    }
    //Get user preferences for the password
    var numChar = confirm(
        "If you'd like numbers in it, click OK"
    );
    var specChar = confirm(
        "If you'd like special character, like ! ? . / , click OK"
    );
    var lowChar = confirm("want some lowercase character? click ok");
    var upChar = confirm("YOU NEED UPPERCASE RIGHT? CLICK OK!");

    //Make sure user picked at least one charset
    if (numChar == false &&
        lowChar == false &&
        upChar == false &&
        specChar == false
    ) {
        alert("If you're not taking this seriously, I'm out.");
        return;
    }
    return userPref;
}
//Define randomness for genPass. Verify via console.
function rando(char) {
    var rIndex = Math.random() * char.length;
    var rElement = char[rIndex];
    console.log(rElement);
    return rElement;
}
//Do the damn thing
function genPass() {
    var userChoices = specifyOptions();
    var passArray = [];
    var passHas = [];
    var charKind = [];

    // Adhere to user's rules. Verify via console.
    if (userPref.numChar) {
        passHas = passHas.concat(numCharset);
        console.log(passHas);
        charKind.push(rando(numCharset));

    }
    if (userPref.lowChar) {
        passHas = passHas.concat(lowCharset);
        console.log(passHas);
        charKind.push(rando(lowCharset));
    }
    if (userPref.upChar) {
        passHas = passHas.concat(upCharset),
            console.log(passHas),
            charKind.push(rando(upCharset))
    }
    if (userChoices.specChar) {
        passHas = passHas.concat(specCharset);
        console.log(passHas);
        charKind.push(rando(specCharset));
    }
    //Take if statements and put them together to meet length requirement from user input
    for (var i = 0; i < userPref.howLong; i++) {
        passHas = rando(passHas);
        passArray.push(passHas);
    }
    //Make sure that there's at least 1 of each kinds of selected charactersets. Verify via console.
    for (var i = 0; i < charKind.howLong; i++) {
        passArray[i] = charKind[i];
        console.log("passHas: " + passHas),
            conlose.log("charKind: " + charKind),
            console.log("passArray: " + passArray)

    }
    return passArray.join("");
}