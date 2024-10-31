const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1 = document.getElementById("1")
let pass2 = document.getElementById("2")
let array = []
let password1 = ""
let password2 = ""

function generate() {
    array.length = 0
    password1 = ""
    password2 = ""
for(let i = 0; i < 30; i++){
    let number = Math.floor( Math.random() * characters.length)
    array.push(characters[number])
}
for (var i = 0; i < 15; i++) {
  password1+=array[i]
}
for (var i = 15; i < 30; i++) {
  password2+=array[i]
}
pass1.textContent = password1
pass2.textContent = password2
}

function copyThis1() {
  navigator.clipboard.writeText(password1);
  alert("Copied the text: " + password1);
}

function copyThis2() {
  navigator.clipboard.writeText(password2);
  alert("Copied the text: " + password2);
}