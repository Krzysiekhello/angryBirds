const score = document.querySelector("[data-score='score']");
function BirdAndWalls() {
    this.birdX = 100;
    this.birdY = 100;
    this.birdRarius = 40;
    this.gravity = 0;
    this.canvasHeight = 600;
    this.canvasWidth = 400;
    this.width = 60;
    this.wallsX = this.canvasWidth;
    this.wallsY = 0;
    this.horizontalWallsMovement = this.wallsX;
    this.firstWallHeight =  Math.floor(Math.random() * 400);
    let fallDown = false;
    this.addPoint = false;
    let points = 0;
        this.drawCircle = function () {
            this.gravity++;
            circle(this.birdX, this.birdY, this.birdRarius);
            if (this.birdY < this.canvasHeight - this.birdRarius / 2) {
                this.birdY += this.gravity / 2;
            } else {
                fallDown = true;
            }
        }
    setInterval(() => {
        this.wallsX = this.canvasWidth + this.width;
        this.horizontalWallsMovement = this.wallsX;
        this.firstWallHeight = Math.floor(Math.random() * 300);
    }, 4500)
        this.birdJump = function () {
            this.gravity = 0;
            this.gravity -= 15;
        }
        this.drawWalls = function () {
            if (this.wallsX === this.birdX - this.width) {
                this.addPoint = true;
            }
            if (this.addPoint === true) {
                this.addPointFunction()
            }
            this.addPoint = false;
            this.secondWallHeight = (this.canvasHeight - this.firstWallHeight) - this.birdRarius * 3;
            this.horizontalWallsMovement -= 2;
            this.wallsX = this.horizontalWallsMovement;
            this.rectangles()
        }
        this.rectangles = function () {
            rect(this.wallsX, this.wallsY, this.width, this.firstWallHeight)
            rect(this.wallsX, this.canvasHeight, this.width, -this.secondWallHeight)
        }
        this.compare = function () {
            if (this.wallsX <= this.birdX + this.birdRarius / 2.5 &&
                this.wallsX > this.birdX - this.width - this.birdRarius / 2.5 &&
                this.birdY - this.birdRarius / 2.5 < this.firstWallHeight ||
                this.wallsX <= this.birdX + this.birdRarius / 2.5 &&
                this.wallsX > this.birdX - this.width - this.birdRarius / 2.5 &&
                (this.birdY - (this.canvasHeight - this.secondWallHeight)) + this.birdRarius / 2.5 > 0 || fallDown) {
                return true;
            }
        }
        this.addPointFunction = function() {
            points++
            score.textContent = `${points}`
        }
}
