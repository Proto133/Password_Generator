/*WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */


function specifyOptions() {
    //User input variables
    var userPref = {
        howLong: howLong,
        numChar: numChar,
        lowChar: lowChar,
        upChar: upChar,
        specChar: specChar
    };
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
    if (howLong < 8 || howLong < 128) {
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
    var lowChar = confirm("");
    var upChar = confirm("");



);

function genPass() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        newPass = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        newPass += charset.charAt(Math.random() * n);
        console.log(retVal)
    }
    return newPass;
}
document.getElementById("genPass") = newPass