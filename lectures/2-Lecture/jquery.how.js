/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function usernameFieldClickListener() {
    // JavaScript
    //var usernameField = document.getElementById('username');
    
    //if (usernameField.value == FORM_USERNAME_DEFAULT_VALUE) {
    //    usernameField.value = "";
    //}
    
    // jQuery
    if ($(this).val() == FORM_USERNAME_DEFAULT_VALUE) {
        $(this).val("");
    }
    
    // .animate(object, duration)
    $(this).stop().animate(
    {
        width: "400px",
        height: "48px"
    },
    1000);
  
    
    // 1000 - 1s
    // 500 - 0.5s
    // 3000 - 3s
} 
function usernameFieldBlurListener() {
    //    JavaScript
//    var usernameField = document.getElementById('username');
//    
//    if (usernameField.value == "") {
//        usernameField.value = FORM_USERNAME_DEFAULT_VALUE;
//    }

    // jQuery
    if ($(this).val() == "") {
        $(this).val(FORM_USERNAME_DEFAULT_VALUE);
    }
    
    $(this).stop().animate({
        width: "300px",
        height: "32px"
        }, 300);
}

function formMouseenterListener() {
    //$(this).stop().fadeOut();
}
function formMouseleaveListener() {
    //$(this).fadeIn();
}

$(document).ready(
function() {

    //var usernameField = document.getElementById('username');
    //usernameField.addEventListener('click', usernameButtonClicked, true);

    $("#username").click(usernameFieldClickListener);
    $("#username").blur(usernameFieldBlurListener);
    
    $(".form").mouseenter(formMouseenterListener);
    $(".form").mouseleave(formMouseleaveListener);

});

/*
jQuery = {
    this.value = "";
    
    click: function() {
        console.log("Ckick");
    },
    val: function(input) {
        if (input == undefined)
            return value;
        else 
            value = input;
    }
    
}
*/

function toggleForm() {
    $(".form").slideToggle();
}