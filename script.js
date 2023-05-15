// Java script code for the website

let but1 = document.getElementsByClassName("btn");
let butsm = document.getElementsByClassName('btnsm');
let navlist = document.getElementsByClassName('navlist'); // saving the DOM to a variable...
let butsmb = document.getElementsByClassName('btnsmb');

but1[0].addEventListener('click', showMessage)
but1[1].addEventListener('click', showMessage)
butsm[0].addEventListener('click', showMessage2) // add an eventListener to the buttons...
navlist[0].addEventListener('click', showMessage3)
butsmb[0].addEventListener('click', showMessage4)

function showMessage() {
    alert('Coming soon!!!'); // printing..
}
function showMessage2() {
    alert('nothing found in the dustbin!!!'); // printing..
}
function showMessage3() {
    alert('go home!!'); // printing..
}
function showMessage4() {
    alert('Response submitted'); // printing..
}
