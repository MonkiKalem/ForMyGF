var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");
var greetings = document.getElementById("greetings");

var clock = setInterval(
    function time() {
        var date_now = new Date();
        var hr = date_now.getHours();
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();

        // Add leading zero for single-digit hours, minutes, and seconds
        if (hr < 10) {
            hr = "0" + hr;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }

        // Update the clock
        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = sec;

        // Update the greetings text
        updateGreeting(date_now.getHours());
    },
    1000
);

function updateGreeting(hr) {
    if (hr >= 5 && hr < 12) {
        greetings.textContent = "Good Morning!";
    } else if (hr >= 12 && hr < 17) {
        greetings.textContent = "Good Afternoon!";
    } else if (hr >= 17 && hr < 21) {
        greetings.textContent = "Good Evening!";
    } else {
        greetings.textContent = "Udaa malem tidur yaa, Good Night <3 ";
    }
}
