const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const startBtn = document.getElementById('startBtn');
let storeTiem;
let hours = 0;
let minute = 0;
let second = 0;
let mili = 0;
var timer = false;


function start() {
    timer = true
    startWatch();

}
function stop() {
    clearTimeout(storeTiem)
 timer = false;
}
function reset() {
    hours = 0;
    minute = 0;
    second = 0;
    mili = 0;
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
            hours = hours + 1;
            second = 0;
        }

        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minute").innerHTML = minute;
        document.getElementById("second").innerHTML = second;
        document.getElementById("miliSecond").innerHTML = mili;
        storeTiem = setTimeout("startWatch()", 10);
    }
}


