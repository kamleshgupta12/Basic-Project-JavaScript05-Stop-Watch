const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const startBtn = document.getElementById('startBtn');

let hours = 0;
let minute = 0;
let second = 0;
let mili = 0;
var timer = false;


function start() {
    let timer = true
    startWatch();

}
function stop() {
    let timer = false;
}
function reset() {
    let timer = false;
}


function startWatch() {

    if (timer = true) {
        mili = mili + 1;
        
        if (mili == 100) {
            second = second + 1;
            mili = 0;
        }
        if (second == 60) {
            minute = minute + 1;
            second = 0;
        }
        if (minute == 60) {
            hours =  hours+ 1;
            second = 0;
        }

        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minute").innerHTML = minute;
        document.getElementById("second").innerHTML = second;
        document.getElementById("miliSecond").innerHTML = mili;
        setTimeout( "startWatch()", 10);
    }
}


