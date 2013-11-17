/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var registeredUsers = [
    { username: "Pesho", password: "more" },
    { username: "Gosho", password: "chasha" },
    { username: "Grigor", password: "flashka" },
];

var FORM_USERNAME_DEFAULT_VALUE = "Потребител";

function getFormData() {
    // Getting the field form the html
    var usernameField = document.getElementById('username').value;
    var passwordField = document.getElementById('password').value;
    var password2Field = document.getElementById('password2').value;
    
    //console.log(usernameField);
    //console.log(passwordField);
    //console.log(password2Field);
    
    var user = {"username": usernameField, "password": passwordField, "password2": password2Field};
    var result = validateFormData(user, true);
    if (result == true) {
        checkIsTheUserExist(user);
    }
}

function validateFormData(formData, isErrorShowingActive) {

    var errorsOccured = false;
    if (formData.username.length == 0 || formData.username == FORM_USERNAME_DEFAULT_VALUE) {
        errorsOccured = true;i
        if (isErrorShowingActive == true) {
            reportFromError("username-field", "Please fill your username field");
        }
    }
    if ((formData.password.length == 0 || formData.password == "password") && isErrorShowingActive == true) {
        errorsOccured = true;
        reportFromError("password-field", "Please, fill your pass");
    }
    if (formData.password2.length == 0 || formData.password2 == "password2") {
        errorsOccured = true;
        if (isErrorShowingActive == true) {
            reportFromError('password2-field', 'Please repeat your pass');
        }
    }
    
    if (errorsOccured == true) {
        return false;
    }
    
    if (formData.password != formData.password2) {
        if (isErrorShowingActive == true) {
            reportFromError('password2-field', 'Your passwords are not the same.')
        }
        return false;
    }
    return true;
}

function checkIsTheUserExist(user) {
    
    getUsers(user);
    
    /*
    for (var registerUsersIndex in registeredUsers) {
        var currentRegisteredUser = registeredUsers[registerUsersIndex];
        
        if (currentRegisteredUser.username == user.username) {
            usernameExist = true;
            if (currentRegisteredUser.password == user.password) {
                passwordIsCorrect = true;
            }
        }
    }
    
    if (usernameExist == false) {
        reportFromError('username-field', "Username is not found!");
        return;
    }
    else if (passwordIsCorrect == false) {
        reportFromError('password-field', "Password is incorect");
        return;
    }
    
    document.write("Bravo");
    */
}

function reportFromError(field, errorText) {
    //document.getElementById('errors').innerHTML = errorText;
    
    // "#username-field p"
    var paragraphToSelect = "#" +field+ " p";
    var paragraphsInField = $(paragraphToSelect);
    
    if (paragraphsInField.length == 0) {
        //$("#" + "username-field")
        var fieldToSelect = "#"+field;
        var textForAppending = "<p>"+errorText+"</p>";

        //$(fieldToSelect).html(errorText);
        $(fieldToSelect).append(textForAppending)
        //$(textForAppending).appendTo(fieldToSelect);
        
        // make it visible with jquery
        //$(paragraphToSelect).fadeIn(5000);
        //$(paragraphToSelect).fadeOut(5000)
        //$(paragraphToSelect).fadeTo(3000, 0.5, function() {
        //    alert("Callback called after 3 seconds");
        //});
        
        // make it vissible with pure css
        console.log(paragraphToSelect);
        $(paragraphToSelect).addClass("error");
    }
    
    function callbackOffading() {
        
    }
}

function checkIsFormReadyForSubmit() {
    // Getting the field form the html
    
    console.log("Called");
    var usernameField = document.getElementById('username').value;
    var passwordField = document.getElementById('password').value;
    var password2Field = document.getElementById('password2').value;
    
    

    var user = {"username": usernameField, "password": passwordField, "password2": password2Field};
    var result = validateFormData(user, false);
    if (result == true) {
        console.log("Adding a class");
        $("form input[type=button]").addClass('active').animate({
            top: "+=50px"
        }, 3000);
    }
}

// This is event handdler when the button is clicked
function loginButtonClicked() {
    getFormData();
}

/*
function usernameButtonClicked() {
    var usernameField = document.getElementById('username');
    
    if (usernameField.value == FORM_USERNAME_DEFAULT_VALUE) {
        usernameField.value = "";
    }
}
function usernameButtonBlurred() {
    var usernameField = document.getElementById('username');
    
    if (usernameField.value == "") {
        usernameField.value = FORM_USERNAME_DEFAULT_VALUE;
    }
}
*/



function arrayLoop(arr) {
    
    //Array - 1,2,3,1 - lenghth = 4
    //Index - 0,1,2,3
    
    /*
    for (var counter=0; counter < arr.length; counter++) {
        console.log("index: " + counter + " - value:" + arr[counter]);
    }
    */
   
   for (var arrayIndex in arr) {
       console.log("index: " + arrayIndex + " - value:" + arr[arrayIndex]);
   }
    
    
    
}