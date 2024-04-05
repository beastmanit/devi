window.onload = function() {
    var truck = document.querySelector('.truck');

    // Animate truck movement
    setTimeout(function() {
        truck.style.left = '50%'; // Move to the middle
        setTimeout(function() {
            // Drop off the letter
            var letter = document.querySelector('.letter');
            letter.style.opacity = '1'; // Show the letter
        }, 5000); // Wait for 5 seconds
        setTimeout(function() {
            truck.style.left = '100%'; // Move to the right
        }, 7000); // Continue moving after 5 seconds
    }, 1000); // Start animation after 1 second
};
