
const header = document.getElementById('chaos-header');
const words = header.textContent.split(' ');
header.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');


const navItems = document.querySelectorAll('.nav-item');
const velocity = 3; // Initial speed of movement
const collisionBuffer = 50; // Distance to consider for collision detection
const itemSize = 100; // Approximate size of the nav items (width/height)

// Define a threshold for edge detection
const edgeThreshold = 0; // Allow items to use the full page

// Function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Initialize positions and velocities for each nav item
const fishData = Array.from(navItems).map(item => {
    const position = {
        x: Math.random() * (window.innerWidth - itemSize),
        y: Math.random() * (window.innerHeight - itemSize)
    };
    item.style.transform = `translate(${position.x}px, ${position.y}px)`;

    // Set random initial color
    item.style.backgroundColor = getRandomColor();

    return {
        element: item,
        position,
        velocity: {
            x: (Math.random() * 2 - 1) * velocity,
            y: (Math.random() * 2 - 1) * velocity
        },
        target: null // Add target property for gliding back to the center
    };
});

// Function to update the positions of the nav items
// Function to update the positions of the nav items
// Function to update the positions of the nav items
function updatePositions() {
    fishData.forEach((fish, index) => {
        // Update position based on velocity
        fish.position.x += fish.velocity.x;
        fish.position.y += fish.velocity.y;

        // Check for boundary collisions and glide back to center if near the edge
        if (fish.position.x <= edgeThreshold || fish.position.x >= window.innerWidth - itemSize ||
            fish.position.y <= edgeThreshold || fish.position.y >= window.innerHeight - itemSize) {

            // Set a new target towards the center of the screen
            const targetX = window.innerWidth / 2 + (Math.random() - 0.5) * 400; // Randomized near center
            const targetY = window.innerHeight / 2 + (Math.random() - 0.5) * 400;

            // Calculate new velocity towards the target
            const angle = Math.atan2(targetY - fish.position.y, targetX - fish.position.x);
            fish.velocity.x = Math.cos(angle) * velocity;
            fish.velocity.y = Math.sin(angle) * velocity;
        }

        // Update the DOM element's position
        fish.element.style.transform = `translate(${fish.position.x}px, ${fish.position.y}px)`;

        // Change the background color randomly at intervals to reduce distraction
        if (Math.random() < 0.05) { // Adjust this probability as needed
            fish.element.style.backgroundColor = getRandomColor();
        }

        // Check for collisions with other nav items
        for (let i = 0; i < fishData.length; i++) {
            if (i !== index) {
                const otherFish = fishData[i];
                if (isColliding(fish, otherFish)) {
                    handleBallCollision(fish, otherFish);
                }
            }
        }
    });

    requestAnimationFrame(updatePositions);
}

// Start color changing at a fixed interval
setInterval(() => {
    fishData.forEach(fish => {
        fish.element.style.backgroundColor = getRandomColor();
    });
}, 700); // Change color every 700ms


// Function to check if two nav items are colliding (corners check)
function isColliding(fish1, fish2) {
    const fish1Rect = fish1.element.getBoundingClientRect();
    const fish2Rect = fish2.element.getBoundingClientRect();

    return !(
        fish1Rect.right < fish2Rect.left ||
        fish1Rect.left > fish2Rect.right ||
        fish1Rect.bottom < fish2Rect.top ||
        fish1Rect.top > fish2Rect.bottom
    );
}

// Function to simulate a bounce effect on collision
function handleBallCollision(fish1, fish2) {
    const deltaX = fish1.position.x - fish2.position.x;
    const deltaY = fish1.position.y - fish2.position.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance === 0) return;

    const directionX = deltaX / distance;
    const directionY = deltaY / distance;
    const overlap = collisionBuffer - distance;

    if (overlap > 0) {
        // Push them apart
        fish1.position.x += directionX * overlap * 0.5;
        fish1.position.y += directionY * overlap * 0.5;
        fish2.position.x -= directionX * overlap * 0.5;
        fish2.position.y -= directionY * overlap * 0.5;

        // Update positions in the DOM
        fish1.element.style.transform = `translate(${fish1.position.x}px, ${fish1.position.y}px)`;
        fish2.element.style.transform = `translate(${fish2.position.x}px, ${fish2.position.y}px)`;

        // Reverse velocities for both elements for a bounce effect
        const tempVx = fish1.velocity.x;
        const tempVy = fish1.velocity.y;
        fish1.velocity.x = fish2.velocity.x;
        fish1.velocity.y = fish2.velocity.y;
        fish2.velocity.x = tempVx;
        fish2.velocity.y = tempVy;
    }
}

// Add hover event listeners to move items away from the cursor
navItems.forEach(item => {
    item.addEventListener('mouseover', (event) => {
        const { clientX, clientY } = event;

        // Calculate the center position of the item
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const itemCenterY = itemRect.top + itemRect.height / 2;

        // Calculate the direction to move away from the cursor
        const deltaX = itemCenterX - clientX;
        const deltaY = itemCenterY - clientY;
        const angle = Math.atan2(deltaY, deltaX);

        // Move away instantly but ensure it stays within screen boundaries
        const distance = 150; // Adjust distance for how far away it moves
        const fish = fishData.find(f => f.element === item);
        let newX = fish.position.x + Math.cos(angle) * distance;
        let newY = fish.position.y + Math.sin(angle) * distance;

        // Ensure the new position doesn't go out of the screen boundaries
        newX = Math.max(0, Math.min(newX, window.innerWidth - itemSize));
        newY = Math.max(0, Math.min(newY, window.innerHeight - itemSize));

        // Set new velocity after moving
        fish.velocity.x = (newX - fish.position.x) / 10;
        fish.velocity.y = (newY - fish.position.y) / 10;

        // Update position
        fish.position.x = newX;
        fish.position.y = newY;

        // Update the DOM
        item.style.transform = `translate(${newX}px, ${newY}px)`;
    });
});

// Start the animation
updatePositions();

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const popup = document.getElementById("popup");

    // Validate fields (you can customize the validation as per your needs)
    let errorMessage = "";
    let count = 0;
    if (!/^\d{10}$/.test(phone)) {
        errorMessage += "Please enter a valid 10-digit phone number.\n";
        count++;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        errorMessage += "Please enter a valid email address.\n";
        count++;
    }
    if (name.trim() === "" || isNaN(name) === false) {
        errorMessage += "Please enter your name.\n";
        count++;
    }
    if (count >= 3) {
        errorMessage = "Ha! Ha! You are in the middle of chaos!! \nThe correct order of entering is: Description, Phone number, Name, Email";
        popup.innerText = errorMessage;
        popup.style.display = "block";

        // Hide the popup after 5 seconds
        setTimeout(() => {
            popup.style.display = "none";
        }, 7000);
    }
    else {
        if (errorMessage) {
            popup.innerText = errorMessage;
            popup.style.display = "block";

            // Hide the popup after 5 seconds
            setTimeout(() => {
                popup.style.display = "none";
            }, 5000);
        } else {
            // Process the form data (you can add your own logic here)
            alert("Form submitted successfully!");
        }
    }
});

function navigateTo(url) {
    window.location.href = url;
}
