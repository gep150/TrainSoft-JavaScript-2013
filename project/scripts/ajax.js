/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
    getArticles();
});



function exampleAjax() {
    
    $.ajax({
        type: "POST",
        url: "articles/ajax_articles_api.php",
        data: { params: "my params values", args: "arg value"}
    }).done(function(data) {
        console.log("Response:");
        
        // Access response
        console.log(data);
        
        // Parse response data
        var inputData = JSON.parse(data);
        console.log(inputData);
    });
    
}

function isLogged() {
    
    var status = false;
    var isLoggedField = document.getElementById('is_logged').value;
    if (isLoggedField == "TRUE")
        return true;
    else 
        return false;
    
}

function getArticles() {
    
    if (isLogged() == false) {
        return;
    }
    
    $.ajax({
        url: "articles/ajax_get_articles.php"
    }).done(function(response) { onDone(response); });
    
    function onDone(response) {        
        document.getElementById('ajax_articles').innerHTML = response;
    }
}
function getArticle(articleId) {
    
    if (isLogged() == false) {
        return;
    }
    
    var ajaxResponseContainer = document.getElementById('ajax_articles').innerHTML = "Loading..";
    
    $.ajax({
        url: "articles/ajax_get_article.php",
        type: "GET",
        data: { article_id:articleId }
    }).done(function(response) { onDone(response); });
    
    function onDone(response) {
        console.log(response);
        
        response = JSON.parse(response);
        console.log(response);
        
        var ajaxResponseContainer = document.getElementById('ajax_articles');
        
        //<input type='button' onclick="getArtcles" value="Go back to feed" /><br />
        //<h3><?php echo $row_query['title']; ?></h3>
        //<p><?php echo $row_query['content']; ?></p>
        var hrefElement = document.createElement('input');
        hrefElement.setAttribute('type', 'button');
        hrefElement.addEventListener('click', getArticles, true);
        hrefElement.value = "Go back to feed";
        
        var title = document.createElement('h3');
        title.innerHTML = response.title;
        
        var content = document.createElement('p');
        content.innerHTML = response.content;
        
        ajaxResponseContainer.innerHTML = "";
        ajaxResponseContainer.appendChild(hrefElement);
        ajaxResponseContainer.appendChild(title);
        ajaxResponseContainer.appendChild(content);
    }
    
}

function checkLogin() {
    var username = document.getElementById('username-field').value;
    var password = document.getElementById('password-field').value;
    
    // JavaScript validation
    // If is not okey: return;
    
    // If everything is fine
    ajaxCheckLogin(username, password);
}

function ajaxCheckLogin(inputUsername, inputPassword) {   
    $.ajax({
        type: "GET",
        url: "sessions/ajax_login.php",
        data: { username: inputUsername, password: inputPassword }
    }).done(function(response) { 
    
        if (response == "OK-response-is-valid") {
            alert("You are logged now an will be redirected in 3 seconds");
            
            var redirect = function() { window.location = "index.php"; };
            setTimeout(redirect, 100);
        }
        else if (response == "ERROR1: No usernme") {
            document.getElementById('login-errors').innerHTML = response;
        }
    });
}
function ajaxRegisterUser(username, email, password) {
    
}