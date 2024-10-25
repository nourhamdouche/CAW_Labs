/*NB:I rewrote the repeated lines for each part of the exercises separately so that the complete code for each part appears distinctly, 
avoiding any mix-up between the exercises. However, after removing the unused and duplicate lines,
here is the final code:

window.onload = function() {
    let boundaries = document.querySelectorAll(".boundary");
    let end = document.getElementById("end");
    let start = document.getElementById("start");
    let status = document.getElementById("status"); 

    let hasLost = false;  

    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", function() {
            boundaries.forEach(function(b) {
                b.style.backgroundColor = "red";
            });
            hasLost = true;
            status.textContent = "You lose!";
        });
    });

    end.addEventListener("mouseover", function() {
        if (!hasLost) {
            status.textContent = "You win!";
        }
    });

    start.addEventListener("click", function() {
        boundaries.forEach(function(b) {
            b.style.backgroundColor = "#eeeeee"; 
        });
        status.textContent = "Move your mouse over the \"S\" to begin.";
        hasLost = false;  
    });
};
*/

// EXO1 

window.onload = function() {
    let boundaries = document.querySelectorAll(".boundary"); // Select all elements with the class "boundary"

    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", function() { // Add an event listener for mouseover
            boundary.style.backgroundColor = "red"; // Change the background color of the hovered boundary to red
        });
    });
};


// EXO2
window.onload = function() {
    let boundaries = document.querySelectorAll(".boundary");

    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", function() {
            boundaries.forEach(function(boundary) { // Change the background color of all boundaries to red
                boundary.style.backgroundColor = "red";
            });
        });
    });
};

// EXO3
 window.onload = function() {
    let boundaries = document.querySelectorAll(".boundary");
    let end = document.getElementById("end"); // Get the element with the ID "end"

    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", function() {
            boundaries.forEach(function(b) {
                b.style.backgroundColor = "red";
            });
        });
    });

    end.addEventListener("mouseover", function() { // Add an event listener for mouseover on the "end" element
        alert("You win!");  // Display the "You win!" alert when mouse reaches the end
    });
};

// EXO4 
window.onload = function() {
    let boundaries = document.querySelectorAll(".boundary");
    let end = document.getElementById("end");
    let start = document.getElementById("start"); // Get the element with the ID "start"

    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", function() {
            boundaries.forEach(function(b) {
                b.style.backgroundColor = "red";
            });
        });
    });

    end.addEventListener("mouseover", function() {
        alert("You win!");  
    });

    start.addEventListener("click", function() { // Add an event listener for click on the "start" element
        boundaries.forEach(function(b) {
            b.style.backgroundColor = "#eeeeee"; // Reset the color of all boundaries to light gray
        });
    });
};


// EXO6
window.onload = function() {
    let boundaries = document.querySelectorAll(".boundary");
    let end = document.getElementById("end");
    let start = document.getElementById("start");
    let status = document.getElementById("status"); // Get the element with the ID "status"  

    let hasLost = false;  // Flag to track if the player has lost

    boundaries.forEach(function(boundary) {
        boundary.addEventListener("mouseover", function() {
            boundaries.forEach(function(b) {
                b.style.backgroundColor = "red";
            });

            hasLost = true; // Set the lose flag to true
            status.textContent = "You lose!"; // Update the status message to "You lose!"
        });
    });

    end.addEventListener("mouseover", function() {
        if (!hasLost) { // Check if the player hasn't lost before declaring the win

            status.textContent = "You win!";// Update the status message to "You win!"
        }
    });

    start.addEventListener("click", function() {
        boundaries.forEach(function(b) {
            b.style.backgroundColor = "#eeeeee"; 
        });

        status.textContent = "Move your mouse over the \"S\" to begin."; // Reset the status message
        hasLost = false;  // Reset the lose flag
    });
};








