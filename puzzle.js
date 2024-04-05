var rows = 3;
var columns = 3;
var currTile;
var otherTile; //blank tile
var turns = 0;
var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function () {
    initializePuzzle();
}

function initializePuzzle() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //<img id="0-0" src="1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";
            tile.draggable = true;

            // DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart); //click an image to drag
            tile.addEventListener("dragover", dragOver); //moving image around while clicked
            tile.addEventListener("drop", dragDrop); //drag an image over another image, drop the image

            document.getElementById("board").append(tile);
        }
    }
}

function dragStart() {
    currTile = this; //this refers to the img tile being dragged
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on

    // If the other tile is empty
    if (otherTile.src.includes("3.jpg")) {
        let currSrc = currTile.src;
        let otherSrc = otherTile.src;

        // Swap the src attribute of the tiles with animation
        currTile.style.transform = `translate(${otherTile.offsetLeft - currTile.offsetLeft}px, ${otherTile.offsetTop - currTile.offsetTop}px)`;
        otherTile.style.transform = `translate(${currTile.offsetLeft - otherTile.offsetLeft}px, ${currTile.offsetTop - otherTile.offsetTop}px)`;

        // Set timeout to wait for the animation to finish before swapping the src
        setTimeout(function () {
            currTile.src = otherSrc;
            otherTile.src = currSrc;
            currTile.style.transform = "none"; // Reset transform
            otherTile.style.transform = "none"; // Reset transform

            turns++;
            document.getElementById("turns").innerText = turns;

            checkWin();
        }, 500); // Wait for 0.5s, which is the duration of the animation
    }
}

function checkWin() {
    var winOrder = ["9.jpg", "8.jpg", "7.jpg", "6.jpg", "5.jpg", "4.jpg", "3.jpg", "2.jpg", "1.jpg"];
    var currentOrder = [];
    var imgs = document.querySelectorAll("#board img");
    imgs.forEach(function(img) {
        currentOrder.push(img.src.substring(img.src.lastIndexOf("/") + 1));
    });

    if (currentOrder.join() === winOrder.join()) {
        document.getElementById("win-message").style.display = "block";
    }
}