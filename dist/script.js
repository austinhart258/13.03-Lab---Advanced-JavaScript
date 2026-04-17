// This is a simple JavaScript file that adds interactivity to the HTML page
// It defines a function to show an alert when a link is clicked
function sayHello() {
    alert("Hello, world from javascript!");
}
// This function will be called when the link is clicked
// It shows an alert with a message
// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function() {
    const link = document.getElementById("hello-link");
    if (!link) {
        console.error("Link with ID 'hello-link' not found.");
        return;
    }
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        sayHello();
    });
});

async function getRandomJoke() {
    return fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'text/plain'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .catch(error => {
        console.error('There was a problem fetching the joke:', error);
        return "Failed to fetch a joke. Please try again later.";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const jokeButton = document.getElementById("joke-button");
    if (!jokeButton) {
        console.error("Button with ID 'joke-button' not found.");
        return;
    }
    jokeButton.addEventListener("click", async function() {

            const jokeDisplay = document.getElementById("joke-display");
            if (!jokeDisplay) {
                console.error("Element with ID 'joke-display' not found.");
                return;
            }
            jokeDisplay.textContent = "Loading joke...";
            const joke = await getRandomJoke();
            jokeDisplay.textContent = joke;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("scene");
    const ctx = canvas.getContext("2d");

    drawGround(ctx, canvas);
    drawSnowText(ctx, canvas);
    drawSnowman(ctx);
    drawSnowflakes(ctx, canvas);
});

function drawGround(ctx, canvas) {
    // Sky
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ground
    ctx.fillStyle = "brown";
    ctx.fillRect(0, canvas.height - 80, canvas.width, 80);
}

function drawSnowText(ctx, canvas) {
    ctx.font = "80px Verdana";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = "blue";

    ctx.fillText("SNOW", canvas.width / 2, 10);
}

function drawSnowman(ctx) {
    ctx.fillStyle = "white";

    // Bottom
    ctx.beginPath();
    ctx.arc(150, 200, 50, 0, Math.PI * 2);
    ctx.fill();

    // Middle
    ctx.beginPath();
    ctx.arc(150, 120, 40, 0, Math.PI * 2);
    ctx.fill();

    // Top
    ctx.beginPath();
    ctx.arc(150, 60, 25, 0, Math.PI * 2);
    ctx.fill();
}

const flakeSize = 6;

function drawSnowflakes(ctx, canvas) {
    for (let i = 0; i < 100; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;

        drawSingleFlake(ctx, x, y);
    }
}

function drawSingleFlake(ctx, x, y) {
    ctx.beginPath();

    ctx.moveTo(x, y);
    ctx.lineTo(x + flakeSize / 2, y + flakeSize / 2);
    ctx.lineTo(x, y + flakeSize);
    ctx.lineTo(x - flakeSize / 2, y + flakeSize / 2);

    ctx.closePath();

    ctx.fillStyle = "#eee";
    ctx.fill();
}
