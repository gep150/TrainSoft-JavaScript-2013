/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var messageField = null;
var timerInterval = null;

function init() {
    
    var button = document.getElementById('timer-button');
    button.addEventListener('click', buttonClick, true);
    
    messageField = document.getElementById('message-field');
}

function buttonClick() {
    //messageField.innerHTML = "Button clicked";
    
    // 1000 = 1s
    // 2000 = 2s
    // 500  = 0.5s

    //setTimer();
    //timerInterval = setInterval(updateTimer, 1000);
    
    
    var timer1 = new Timer("timer1");
    timer1.set({ hours: 3, minutes: 0, seconds: 0 });
    timer1.start();
    
    var timer2 = new Timer("timer2");
    timer2.set({ hours: 13, minutes: 10, seconds: 0 });
    timer2.start();
    
    var timer3 = new Timer("timer3");
    timer3.set({ hours: 30, minutes: 0, seconds: 0 });
    timer3.start();
}

function setTimer() {
    // Get fields
    var currentDate = new Date();
    var fieldHours = document.getElementById('clock-hours');
    var fieldMinutes = document.getElementById('clock-minutes');
    var fieldSeconds = document.getElementById('clock-seconds');
    
    // Set current hour, minutes and seconds
    //fieldHours.innerHTML = currentDate.getHours();
    //fieldMinutes.innerHTML = currentDate.getMinutes();
    //fieldSeconds.innerHTML = currentDate.getSeconds();
    
    fieldHours.innerHTML = 1;
    fieldMinutes.innerHTML = 2;
    fieldSeconds.innerHTML = 3;
}
function updateTimer() {
    // 1. Get secconds, reduce them
    // 2. If seconds are 0, reduce minites, set seconds to 59
    // 3. Do the same thing with minutes and hours
    
    // Getting data
    var fieldHours = document.getElementById('clock-hours');
    var fieldMinutes = document.getElementById('clock-minutes');
    var fieldSeconds = document.getElementById('clock-seconds');
    
    // Cobverting to integer
    var hours = parseInt(fieldHours.innerHTML);
    var minutes = parseInt(fieldMinutes.innerHTML);
    var seconds = parseInt(fieldSeconds.innerHTML);
    
    // Timer algo
    if (seconds == 0) {
        seconds = 59;
        
        if (minutes == 0) {
            minutes = 59;
            
            if (hours == 0) {
                alert("Timer is out");
                clearInterval(timerInterval);
                
                seconds = 0;
                minutes = 0;
            }
            else {
                hours--;
            }
        }
        else {
            minutes--;
        }
    }
    else {
        seconds--;
    }
    
    // Displaying new data
    fieldHours.innerHTML = hours;
    fieldMinutes.innerHTML = minutes;
    fieldSeconds.innerHTML = seconds;
}

function printMessage(msg) {
    msg = msg || 'No message received';
    messageField.innerHTML = msg;
}


// var:     hours, minutes, seconds
// method:  make timeout
//          print new values

function Timer(field) {
    this.field = document.getElementById(field);
    this.contentFields = [];
    
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
   
    this.countdownInterval = null;
    
    this.init();
}
Timer.prototype.init = function() {
    var fieldHours = document.createElement('div');
    fieldHours.className = "field";
    fieldHours.setAttribute("data", "data-value-for-test");
    fieldHours.innerHTML = this.hours;
    
    var fieldMinutes = document.createElement('div');
    fieldMinutes.className = "field";
    fieldMinutes.innerHTML = this.minutes;
    
    var fieldSeconds = document.createElement('div');
    fieldSeconds.className = "field";
    fieldSeconds.innerHTML = this.seconds;
    
    this.contentFields.push(fieldHours);
    this.contentFields.push(fieldMinutes);
    this.contentFields.push(fieldSeconds);
    
    this.field.appendChild(fieldHours);
    this.field.appendChild(fieldMinutes);
    this.field.appendChild(fieldSeconds);
}
Timer.prototype.set = function(timer) {
    this.hours = timer.hours;
    this.minutes = timer.minutes;
    this.seconds = timer.seconds;
}
Timer.prototype.start = function() {
    var self = this;
    
    var intervalFunction = function() { makeCountDownToTimer(self) };
    self.countdownInterval = setInterval(intervalFunction, 1000);
}
Timer.prototype.print = function() {
    //this.field.innerHTML = this.hours + ":" +this.minutes + ":" + this.seconds;
    
    this.contentFields[0].innerHTML = this.hours;
    this.contentFields[1].innerHTML = this.minutes;
    this.contentFields[2].innerHTML = this.seconds;
}
Timer.prototype.makeCountDown = function() {    
    //console.log(this);
    if (this.seconds == 0) {
        this.seconds = 59;
        
        if (this.minutes == 0) {
            this.minutes = 59;
            
            if (this.hours == 0) {
                alert("Timer is out");
                clearInterval(this.countdownInterval);
                
                this.seconds = 0;
                this.minutes = 0;
            }
            else {
                this.hours--;
            }
        }
        else {
            this.minutes--;
        }
    }
    else {
        this.seconds--;
    }
    
    this.print();
}

function makeCountDownToTimer(timer) {
    timer.makeCountDown();
}

// setTimeout
// setInterval