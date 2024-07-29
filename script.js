// Clock Function
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();

// Stopwatch Function
let stopwatchInterval;
let running = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

document.getElementById('startStop').addEventListener('click', function() {
    if (running) {
        clearInterval(stopwatchInterval);
        this.textContent = 'Start';
    } else {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
        this.textContent = 'Stop';
    }
    running = !running;
});

document.getElementById('lap').addEventListener('click', function() {
    if (running) {
        const lapTime = document.getElementById('display').textContent;
        const lapElement = document.createElement('div');
        lapElement.classList.add('lap');
        lapElement.textContent = lapTime;
        document.getElementById('laps').appendChild(lapElement);
    }
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(stopwatchInterval);
    running = false;
    document.getElementById('startStop').textContent = 'Start';
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('laps').innerHTML = '';
});

function updateStopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    const displayHours = String(hours).padStart(2, '0');
    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(seconds).padStart(2, '0');
    document.getElementById('display').textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}
