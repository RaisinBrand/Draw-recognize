const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");

let strokes = [];
let currentStroke = [];
let drawing = false;

canvas.width = window.innerWidth * 0.4;
canvas.height = window.innerHeight * 0.2;
ctx.lineWidth = 3;
ctx.lineCap = "round";




canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    currentStroke = [];
    strokes.push(currentStroke);
});

canvas.addEventListener("mousemove", (e) =>{
    if(!drawing) return;

    let x = e.offsetX;
    let y = e.offsetY;
    let time = Date.now();

    currentStroke.push({x, y, time});

    ctx.lineTo(x,y)
    ctx.stroke()
})

canvas.addEventListener("mouseup", () =>{
    
    drawing = false
    ctx.beginPath()
}) 

function clearCanvas() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    strokes = []
}

function undoStroke(){
    strokes.pop()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
        strokes.forEach(stroke => {
            ctx.moveTo(stroke[0].x, stroke[0].y); 
            stroke.forEach(point => {
                ctx.lineTo(point.x, point.y);
            });
            ctx.stroke();
        });
    ctx.beginPath()
}

function exportStrokes() {
    //write this
}

document.getElementById("clearBtn").addEventListener("click", clearCanvas)
document.getElementById("undoBtn").addEventListener("click", undoStroke)