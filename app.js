// Grabbing Elements
const button = document.getElementById("deliver")
const truck = document.getElementById("truck")

let isDelivered = false

// Event listener
button.addEventListener('click', () => {
    // implemented toggle functionality
    if (!isDelivered) {

        // used to animate elements via DOM
        truck.animate({
            left: `100%`,
        }, { duration: 1000, fill: "forwards" });

        isDelivered = true
    } else {
        // flipping the truck & animating it backwords
        truck.style.transform = "scaleX(-1)"
        truck.animate({
            left: `0%`,
          }, { duration: 1000, fill: "forwards" });
          isDelivered = false
    }
})