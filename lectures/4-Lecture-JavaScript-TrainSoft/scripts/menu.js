/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    
    $(".item").mouseover(function() {
        $(this).stop().animate({
            height: '170px',
            width: '130px'
        }, 600, 'easeOutBounce');
        
        $("p.icon", this).stop().animate({
            height: "100px",
            marginTop: "0px"
        }, 1000);
        
        
        //$("p.icon", this).addClass('active'); 
        
    });
    
    $(".item").mouseout(function() {
        $(this).stop().animate({
            height: '60px',
            width: '100px'
        }, 900, 'easeOutBounce');
        
        
        $("p.icon", this).stop().animate({
            marginTop: "-50px",
            height: "0px"
        }, 600);
       
        //$("p.icon", this).removeClass('active');
    });
});
