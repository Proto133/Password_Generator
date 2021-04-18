var retVal = ""


function genPass() {
    var passleng = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0, n = charset.length; i < passleng; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
        console.log(retVal);

    };

};

document.getElementById("generate").onclick = genPass();
document.getElementById("password").innerHTML = retVal;