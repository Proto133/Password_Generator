/*
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */
//Possible characters to be used
var numCharset = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var upCharset = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowCharset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specCharset = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        ",",
        "'",
        "*",
        "(",
        ")",
        ",",
        "-",
        ",",
        "_",
        "=",
        "+",
        "{",
        "}",
        "[",
        "]",
        ";",
        "'",
        ":",
        ",",
        ".",
        "<",
        ">",
        "/",
        "?"
    ]
    //Get user prefences for password
function specifyOptions() {
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
    //User input variables
    var userPref = {
        howLong: howLong,
        numChar: numChar,
        lowChar: lowChar,
        upChar: upChar,
        specChar: specChar
    };
    return userPref;
}
//Define randomness for genPass. Verify via console.
function rando(char) {
    var rIndex = Math.floor(Math.random() * char.length);
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

    /* Adhere to user's rules. 
    Verify via console.*/

    //Numbers 
    if (userChoices.numChar) {
        passHas = passHas.concat(numCharset);
        //Verify
        // console.log(passHas);
        ////Add one number to charKind Array
        charKind.push(rando(numCharset));

    }
    //Lowercase
    if (userChoices.lowChar) {
        passHas = passHas.concat(lowCharset);
        //Verify
        // console.info(passHas);
        //Add one lowercase to charKind Array
        charKind.push(rando(lowCharset));
    }
    //Uppercase
    if (userChoices.upChar) {
        passHas = passHas.concat(upCharset);
        //Verify
        // console.info(passHas);
        //Add one uppercase to charKind Array
        charKind.push(rando(upCharset));
    }
    //Special characters
    if (userChoices.specChar) {
        passHas = passHas.concat(specCharset);
        //Verify
        // console.info(passHas);
        //Add one special character to charKind Array
        charKind.push(rando(specCharset));
    }
    //Take if statements and use the data to put together password into passArray , the ultimate culmination of all of the rules 
    for (var i = 0; i < userChoices.howLong; i++) {
        uniqueChar = rando(passHas);
        passArray.push(uniqueChar);
    }

    /*Make sure that there's at least 1 of each kinds of selected charactersets. 
    Verify via console.*/
    for (var i = 0; i < charKind.howLong; i++) {
        passArray[i] = charKind[i];
    }

    return passArray.join("");
}

//function to reveal the completed password 
function showPass() {
    var password = genPass();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}