import { zeroLeft } from "./functionzero.js"
const data = new Date();
let hour = data.getHours();
let minutes = data.getMinutes();
let seconds = data.getSeconds();
setInterval(()=>{
    const time = document.querySelector('#time');
    seconds++;
    if(seconds > 59) {
        seconds = 0;
        minutes++;
        if(minutes > 59) {
            minutes = 0;
        }
    }
    time.textContent = hour + ":" + zeroLeft(minutes) + ":" + zeroLeft(seconds);
}, 1000);