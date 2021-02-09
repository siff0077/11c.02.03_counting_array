"use strict"

window.addEventListener("load", loop);

const arr = [];
let count = 0;

function loop(){
    
    arr.unshift(count);
    count++;

    if(count > 9) {
        arr.pop(arr);
    }
    
    setTimeout(loop, 500);

    console.log(arr);
}