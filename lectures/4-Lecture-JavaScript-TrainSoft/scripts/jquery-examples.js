/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    
    $("#draggable1").draggable();
    $("#draggable2").draggable();
    $("#draggable3").draggable();
    
    $("#droppable").droppable({
        drop: function(event, ui) {
            $(this).addClass("ui-state-highlight").html("Dropped!");
        }
    });
    
    $("#resizebale").resizable();
    
});
