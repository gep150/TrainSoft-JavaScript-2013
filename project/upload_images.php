<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript Basics - TrainSoft</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        
        <link rel="stylesheet" type="text/css" href="styles/base.css" />
        
        <script type="text/javascript" src="scripts/jquery-1.10.2.min.js"></script>
        <script type="text/javascript" src="scripts/upload.js"></script>
        
        <style>
            .images {
                width: 200px;
                
                border: 10px solid white;
                border-bottom: 30px solid white;
            }
        </style>
        
    </head>
    <body onload="init()">
        
        <div class="content">

            <h1>Upload images</h1>
            
            <input type="file" id="fileInput" name="file" />
            <div id="output"></div>
            
        </div>
    </body>
</html>
