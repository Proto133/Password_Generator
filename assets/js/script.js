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
//Retrieve a random character from charactersets defined in genPass. Verify via console.
function rando(char) {
    //rIndex picks a  random index between the parameters of length of the array.
    var rIndex = Math.floor(Math.random() * char.length);
    //rElement is the result of the character residing at that index position.
    var rElement = char[rIndex];
    //Returns the selected character.
    return rElement;
}
//Generate a Password
function genPass() {
    //Store the user input from prompts into a variable
    var userChoices = specifyOptions();
    //Create an array for the password
    var passArray = [];
    //Create an array for the possible characters the password can have.
    var passHas = [];
    //Create an array for the selected characters from the 
    var charKind = [];

    /* Adhere to user's rules. 
    Verify via console.*/

    //If user opted in on numbers, then add numChar to the possible characters.
    if (userChoices.numChar) {

        //Adds numbers to the list of possible characters
        passHas = passHas.concat(numCharset);
        //Verify
        console.log(passHas)
            ////Add one number to charKind Array
        charKind.push(rando(numCharset));

    }
    // If user opted in on lowercase, then add lowChar to the possible characters.
    if (userChoices.lowChar) {
        passHas = passHas.concat(lowCharset);
        //Verify
        console.info(passHas)
            //Add one lowercase to charKind Array
        charKind.push(rando(lowCharset));
    }
    //Uppercase
    if (userChoices.upChar) {
        passHas = passHas.concat(upCharset);
        //Verify
        console.info(passHas);
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
        //Pick a unique character from the array passHas
        uniqueChar = rando(passHas);
        //Push the seleceted character from above into the the passArray array. Do this until the array is the specified length in userChoices.
        passArray.push(uniqueChar);
        //Verify selection
        console.log(uniqueChar);
    }

    /*Make sure that there's at least 1 of each kinds of selected charactersets. 
    Verify via console.*/
    /*For each selected characterset pick one, create an array of those until it's length reaches the number of charactersets selected. 
    Push this array to passAray until passArray exceeds the lenght of this charKind.*/
    for (var i = 0; i < charKind.length; i++) {
        //Push a value from each of the selected charactersets
        passArray[i] = charKind[i];
        // Verify via console.
        console.log(charKind);
        // Verify via console.
        console.log(passArray);
    }
    //Returns the final array from the function above. 
    return passArray.join("");
}
//Create Global variables for buttons and textarea
var genBtn = document.querySelector("#startPass")
var cpyBtn = document.querySelector("#copy")
var passTxt = document.querySelector("#password")


//function to reveal the completed password 
function showPass() {
    var password = genPass();
    var passwordText = document.querySelector("#password");
    cpyBtn.setAttribute("class", "btn");
    passwordText.value = password;


}
//Invoke showPass on clck
genBtn.addEventListener("click", showPass);


//Disables copy button until the password is generated.

function enableCopy() {
    if (document.querySelector("#password").textContent === "") {
        //button remains disabled
        cpyBtn.disabled = true;
    } else {
        //button is enabled
        copyBtn.disabled = false;
    }
}

//Setting variables for HTML elements
var passTextarea = document.querySelector("#password");
var copyBtn = document.querySelector("#copy");
var copyConfirm = document.querySelector("#copyConfirm");
//Calls on browser to execute the copy
function copy() {
    //Sets textarea password as a local variable
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
    //displays the Generated password in the copied on clipboard area on click.
    copyConfirm.value = passTextarea.value;
    //alerts the user what has been copied.
    // alert(passTextarea.value + " has been copied to clipboard!")

}
//As soon as the passTxt value is changed, enable the copy button.
passTxt.addEventListener("change", enableCopy);
//Adds listener for click to copy button
document.querySelector("#copy").addEventListener("click", copy);