
// Selecting by id attribute
function selectById() {
    var usernameField = document.getElementById("username-field");
    var passwordField = document.getElementById("password-field");
    var emailField = document.getElementById("email-field");
    
    console.log(usernameField);
}

// Selecting by tag name
function selectByTag() {
    var inputTags = document.getElementsByTagName("input");
    console.log(inputTags);
    
    console.log(inputTags[0]);
    
    var pTags = document.getElementsByTagName('p');
    console.log(pTags);
    
    pTags[1].innerHTML = "We changed yoy!!!";
}

// Select by name
function selectByName() {
    var form = document.getElementsByName('register');
    console.log(form[0]);
    
    console.log(form[0].username);
    
    form[0].username.value = "You have a new value";
    form[0].password.value = "You have a new value";
    form[0].email.value = "You have a new value";
    form[0].fieldWhichHoldsSomeLongStrings.value = "You have a new value";
    var usernameValue = form[0].username.value;
    
    document.getElementsByTagName("p")[0].innerHTML = "Value form the input is " + usernameValue;
}

// Select by class, but not recommended
function selectByClassName() {
    
    //$(".p-class");
    
    var pClass = document.getElementsByClassName('p-class');
    pClass[0].id = "new-id";
    pClass[0].className = "newClass";
    console.log(pClass);
}

// Select like a jQuery, but not reccomended
function selectLikejQuery() {
    //$("form input[type='button']")
    
    console.log("Function is called");
    var input = document.querySelector("form input[type=button]");
    
    console.log(input);
}

function explainDocument() {
    
    var pTags = document.getElementsByTagName('p')[2];
    var spanTags = pTags.getElementsByTagName("span");
    
    console.log(pTags);
    console.log(spanTags);
}