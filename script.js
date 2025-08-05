function hideButton(x) {
    x.style.display = 'none';
}


function checkTime() {
    var currentTime = new Date();
    var desiredHour = 12; // Set the desired hour (24-hour format) 
    var desiredMinute = 0; // Set the desired minute 
    if (currentTime.getHours() >= 10 && currentTime.getHours() <= 21) {
        document.getElementById("form").style.display = "block";
    }
    else {
        document.getElementById("form").style.display = "none";
        document.getElementById("alert").style.display = "block";
    }
}
setInterval(checkTime, 1000); // Check the time every second
