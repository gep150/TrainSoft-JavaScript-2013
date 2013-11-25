/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    
    $(".item").mouseover(function() {
        // Extend the heigth
        $(this).stop().animate({
            height: "150px"
        }, 500);
        
        // Move the text
        $("p.main", this).stop().animate({
            marginTop: "100px"
        }, 300);
        
        // Move the pic up
        $("p.icon", this).stop().animate({
            marginTop: "-150px",
            marginLeft: "0",
            width: "80px",
            height: "80px",
            opacity: 1
        }, 1000, 'easeOutBounce');
    });
    
    $(".item").mouseout(function() {
        $(this).stop().animate({
            height: "60px"
        }, 500);
        
        $("p.main", this).stop().animate({
            marginTop: "0px"
        }, 300);
        
        $("p.icon", this).stop().animate({
            marginTop: "0px",
            width: "0px",
            height: "0px",
            opacity: 0
        }, 300, 'easeOutBounce');
    });
    
});


