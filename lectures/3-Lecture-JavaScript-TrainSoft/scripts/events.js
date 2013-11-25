/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var input = null;

// This function is called on load event
function initOnLoad() {
    console.log("Onload");
    document.getElementsByTagName('form')[0].style.display = "block";
    document.getElementById('loading').style.display = "none";
    
    input = document.getElementById('username');
    
    input.addEventListener('blur', inputOnBlur, true);
    input.addEventListener('focus', inputOnFocus, true);
    input.addEventListener('change', inputChange, true);
    
    input.addEventListener('keypress', inputKeyPress, true);
    // keydown
    // keyup
    
    input.addEventListener('dblclick', inputDblClick, true);
    // click
    // mouseup
    // mousedown
    
    input.addEventListener('mousemove', inputMouseMove, true);
    // mouseout
}

function inputOnBlur() {
    input.value = "Blue - we are out";
}
function inputOnFocus() {
    input.value = "Focus - we are here";
}
function inputChange() {
    console.log(input.value);
}

function inputKeyPress() {
    console.log(input.value);
}
function inputDblClick() {
    alert("Uraaa double click");
}
function inputMouseMove() {
    console.log("Mouse moving");
}