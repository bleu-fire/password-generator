"use strict";
//define the value  to worked with it 
const num = "1234567890";
const lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const spcialChar = '!@#$%^&*()+_)';
const allmixed = num + lowerCase + upperCase + spcialChar;
function randompass() {
    let Gen = "";
    let cont;
    let length = 10;
    for (let i = 0, n = allmixed.length; i <= length; i++) {
        cont = allmixed.charAt(Math.floor(Math.random() * n));
        Gen += cont;
    }
    return Gen;
}
//console.log(randompass());
let getid = document.getElementById('button-gen');
getid.onclick = function () {
    let pass = document.getElementById('password');
    pass.textContent = randompass();
};
