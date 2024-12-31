const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start-button');

let countdownInterval;

function startCountdown(duration) {
    let timer = duration, days, hours, minutes, seconds;
    countdownInterval = setInterval(() => {
        days = Math.floor(timer / (60 * 60 * 24));
        hours = Math.floor((timer % (60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((timer % (60 * 60)) / 60);
        seconds = Math.floor(timer % 60);

        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');

        if (--timer < 0) {
            clearInterval(countdownInterval);
            alert("Countdown Finished!");
        }
    }, 1000);
}

startButton.addEventListener('click', () => {
    const duration = 60 * 60 * 24; // Countdown for 1 day (in seconds)
    startCountdown(duration);
});