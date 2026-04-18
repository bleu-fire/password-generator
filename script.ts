//define the value  to worked with it

const num: string = "1234567890";
const lowerCase: string = "qwertyuiopasdfghjklzxcvbnm";
const upperCase: string = "QWERTYUIOPASDFGHJKLZXCVBNM";
const spcialChar: string = "!@#$%^&*()+_)";
const allmixed: string = num + lowerCase + upperCase + spcialChar;

function randompass() {
  let Gen = "";
  let cont;
  let length: number = 10;
  for (let i: number = 0, n = allmixed.length; i <= length; i++) {
    cont = allmixed.charAt(Math.floor(Math.random() * n));
    Gen += cont;
  }
  return Gen;
}

//console.log(randompass());

let getid = document.getElementById("button-gen") as HTMLElement;
getid.onclick = function () {
  let pass = document.getElementById("password") as HTMLElement;
  pass.textContent = randompass();
};
