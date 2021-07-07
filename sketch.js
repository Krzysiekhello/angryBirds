let birdAndWalls;
let gameHasBeenStarted = false;
const startOrResetGameButton = document.querySelector("[data-resetButton='resetButton']");
function setup() {
    createCanvas(400, 600);
    birdAndWalls = new BirdAndWalls();
}
function draw() {
    let endGame = birdAndWalls.compare();
    if (gameHasBeenStarted) {
    if (endGame === undefined) {
        background(220);
        birdAndWalls.drawCircle();
        birdAndWalls.drawWalls();
    } else {
        noLoop()
        startOrResetGameButton.style.display = "block";
        startOrResetGameButton.setAttribute("value", "Reset");
        }
    } else {
        startOrResetGameButton.style.display = "block";
    }
}
function mouseClicked() {
    birdAndWalls.birdJump();
}
startOrResetGameButton.addEventListener("click", () => {
    if (!gameHasBeenStarted) {
        gameHasBeenStarted = true;
        startOrResetGameButton.style.display = "none";
    } else {
        window.location.reload();
    }
})