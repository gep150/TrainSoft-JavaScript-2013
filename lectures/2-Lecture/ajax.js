/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
$.ajax({
  type: "POST",
  url: "some.php",
  data: { name: "John", location: "Boston" }
}).done(function( msg ) {
    alert( "Data Saved: " + msg );
});
*/

function getUsers(user) {
    
    // 1. Click register button
    // 2. Making AJAX request to server
    
    /*
     * $.ajax({
        type: "GET",
        url: "users.json"
    }).done(function(dataJSON) {
        REFERNCE (*)
    });
    */
   
   // (*) .done(function(dataJSON) {
   var dataJSONString = '{ "users": [{ "username": "Pesho", "password": "more" },{ "username": "Gosho", "password": "chasha" },{ "username": "Grigor", "password": "fkashka" }]}';
   //var dataJSON = '{"name":"John"}';
   var dataObject = jQuery.parseJSON(dataJSONString);
   console.log(dataObject);
   
   var arrayUsers = dataObject.users;
   var usernameExist = false;
   var passwordIsCorrect = false;
   
   for (var registeredUsersIndex in arrayUsers) {
       var currentRegisteredUser = arrayUsers[registeredUsersIndex];
       
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
    // });
}

