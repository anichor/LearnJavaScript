/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var canvasInput, canvasContext;
var penColor = "black";
var graphColor = "cornsilk";
var penSize = 2;
var graphSize = 1;
// TODO Calculate Firefox = 0, Chrome = 25
var elementOffsetX = 0;
var elementOffsetY = 0;
var imgElement = new Array("",   "",   "",   "",  "",  "img6", "img7", "img8", "img9", "img10",  "img12",  "img13");

var flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

function initCanvas() {

    canvasInput = document.getElementById('canvas_input');
    canvasInput.style.cursor = "crosshair";
    canvasContext = canvasInput.getContext("2d");
    var rect = canvasInput.getBoundingClientRect();
    elementOffsetY = rect.top;
    elementOffsetX = rect.left;

    var height = canvasInput.height;
    var width = canvasInput.width;
    canvasContext.beginPath();
    var colorOffset = 0.5;
    for (var i = 0; i < width; i = i + 10) {
        canvasContext.moveTo(i + colorOffset, 0);
        canvasContext.lineTo(i + colorOffset, height);
    }
    for (var i = 0; i < height; i = i + 10) {
        canvasContext.moveTo(0, i + colorOffset);
        canvasContext.lineTo(width, i + colorOffset);
    }
    canvasContext.strokeStyle = graphColor;
    canvasContext.lineWidth = graphSize;
    canvasContext.stroke();
    canvasContext.closePath();

    canvasInput.addEventListener("mousemove", function (e) {
        findXY('move', e);
    }, false);
    canvasInput.addEventListener("mousedown", function (e) {
        findXY('down', e);
    }, false);
    canvasInput.addEventListener("mouseup", function (e) {
        findXY('up', e);
    }, false);
    canvasInput.addEventListener("mouseout", function (e) {
        findXY('out', e);
    }, false);
};

function draw() {
    canvasContext.beginPath();
    canvasContext.moveTo(prevX, prevY);
    canvasContext.lineTo(currX, currY);
    canvasContext.strokeStyle = penColor;
    canvasContext.lineWidth = penSize;
    canvasContext.stroke();
    canvasContext.closePath();
};

function findXY(res, e) {
    if (retrive() < 5) {
        return;
    }
    if (res === 'down') {
        prevX = currX + elementOffsetX;
        prevY = currY + elementOffsetY;
        currX = e.clientX - elementOffsetX;
        currY = e.clientY - elementOffsetY;
        // alert(canvasInput.offsetTop + " " + rect.top + " " + e.clientY);
        flag = true;
        dot_flag = true;
        if (dot_flag) {
            canvasContext.beginPath();
            canvasContext.fillStyle = penColor;
            canvasContext.fillRect(currX, currY, 2, 2);
            canvasContext.closePath();
            dot_flag = false;
        }
    }
    if (res === 'up' || res === "out") {
        flag = false;
        var id = imgElement[retrive()];
        var img = document.getElementById(id);// document.createElement("IMG");
        img.src = canvasInput.toDataURL();
        // document.getElementById(id).appendChild(img);
    }
    if (res === 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - elementOffsetX;
            currY = e.clientY - elementOffsetY;
            draw();
        }
    }
};
