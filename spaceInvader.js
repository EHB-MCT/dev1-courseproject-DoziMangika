"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

spacevader();

function spacevader() {
    context.beginPath()
    context.fillStyle = "black"
    context.rect(50,50, 300, 300);
    context.fill();

    context.beginPath()
    context.fillStyle = "#83f52c"
    context.rect(125,75, 150, 50);
    context.fill();

    context.beginPath()
    context.fillStyle = "#83f52c"
    context.rect(125,125, 50, 50);
    context.fill();

    context.beginPath()
    context.fillStyle = "#83f52c"
    context.rect(225,125, 50, 50);
    context.fill();

    context.beginPath()
    context.fillStyle = "#83f52c"
    context.rect(75,175, 50, 50);
    context.fill();

    context.beginPath()
    context.fillStyle = "#83f52c"
    context.rect(175,175, 50, 50);
    context.fill();

    context.beginPath()
    context.fillStyle = "#83f52c"
    context.rect(275,175, 50, 50);
    context.fill();
}