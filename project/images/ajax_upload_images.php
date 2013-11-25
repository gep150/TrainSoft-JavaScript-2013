<?php

$imageData = $_POST['dataImage'];
$imageName = $_POST['nameImage'];
$imageType = "jpeg";

$img = imageBase64Decode($imageData);
$newImage = imagecreatefromstring($img); 
if($img != false) 
{
    // Create image from givven type
    //$imageName = "..".DIRECTORY_SEPARATOR."media".DIRECTORY_SEPARATOR."images".DIRECTORY_SEPARATOR.$imageName;
    $imageName = "../media/images/".$imageName;
    if ($imageType == "png") {
        //$imageName = $imageName.".png";
        $imageName = $imageName;
        imagepng($newImage, $imageName);
    }
    else if ($imageType == "jpeg") {
        //$imageName = $imageName.'.jpeg';
        $imageName = $imageName;
        imagejpeg($newImage, $imageName);
    }
    echo "OK-";
    echo $imageName;
}
else {
    echo "Error avatar uploading";
}

function imageBase64Decode($base64Data) {
// This method is decding image in base64 format
// *********************************************************************
    $img = $base64Data;
    $img = str_replace('data:image/png;base64,', '', $img);
    $img = str_replace('data:image/jpeg;base64,', '', $img);
    $img = str_replace(' ', '+', $img);

    $data = base64_decode($img);

    return $data;
}