/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var resultsField = null;

function init() {
    
    var fileInputField = document.getElementById('fileInput');
    fileInputField.addEventListener('change', handleFileSelect, true);
    
    resultsField = document.getElementById('output');
}

function handleFileSelect(evt) {
    resultsField.innerHTML = "Image is selected";
    uploadImage(evt, ajaxUploadImage);
}

function uploadImage(evt, callback) {
    
    var imageFile = evt.target.files[0];
    //console.log(imageFile);
    
    var imageFileReader = new FileReader();
    imageFileReader.onload = (function(theFile) {
        return function(e) {
            resultsField.innerHTML = "Uploading " + theFile.name;
            callback(e.target.result, theFile.name, theFile.size);
        };
    })(imageFile);
    imageFileReader.readAsDataURL(imageFile);
}

function ajaxUploadImage(imageFile, imageName, imageSize) {
    $.ajax({
        url: "images/ajax_upload_images.php",
        type: "POST",
        data: { dataImage:imageFile, nameImage:imageName, sizeImage:imageSize }
    }).done(function(response) {
        var imagePath = response.replace("OK-../", "");
     
        resultsField.innerHTML = "Image is uplaoded<br />";
        
        // Creating element with JavaScript
        var image = document.createElement('img');
        image.setAttribute('src', imagePath);
        //image.setAttribute('width', '200');
        image.setAttribute('class', 'images')
        
        resultsField.appendChild(image);
        
        // Createing elemet with jquery
        //var newImage = $("<img />");
        //newImage.attr('src', imagePath);
        //newImage.attr('width', '200');
        
        //$(resultsField).append(newImage);
    });
}
