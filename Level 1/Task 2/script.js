document.addEventListener("DOMContentLoaded", function() {
    // Button color change functionality
    document.getElementById("colorButton").addEventListener("click", function() {
        var button = document.getElementById("colorButton");
        button.style.backgroundColor = "#dc3545";
    });

    // Greeting message based on the current time
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var greeting;
    if (currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    document.getElementById("greetingMessage").innerText = greeting;

    // Calculator functionality
    document.getElementById("calculateButton").addEventListener("click", function() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var sum = num1 + num2;
        document.getElementById("result").innerText = "Result: " + sum;
    });
});
