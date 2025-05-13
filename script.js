const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const gameInfoElement = document.createElement('p'); // Create a new paragraph element for game info
gameInfoElement.classList.add('game-info'); // Add a class for styling
document.querySelector('.countdown-container').appendChild(gameInfoElement); // Append to the container

// Set the target date and time (Year, Month (0-indexed), Day, Hours, Minutes, Seconds)
const targetDate = new Date(2025, 8, 4, 20, 20, 0); // September 4th, 2025 at 8:20 PM EDT (Note: JavaScript's Date object uses local time)

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference < 0) {
        daysElement.innerText = '00';
        hoursElement.innerText = '00';
        minutesElement.innerText = '00';
        secondsElement.innerText = '00';
        document.querySelector('.countdown-container h1').innerText = 'Football Season is Here!';
        gameInfoElement.innerText = ''; // Clear game info message
        clearInterval(intervalId);
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    daysElement.innerText = String(days).padStart(2, '0');
    hoursElement.innerText = String(hours).padStart(2, '0');
    minutesElement.innerText = String(minutes).padStart(2, '0');
    secondsElement.innerText = String(seconds).padStart(2, '0');

    // Update the game info text
    gameInfoElement.innerHTML = `The excitement kicks off with the <span class="team eagles">Eagles</span> facing the <span class="team cowboys">Cowboys</span> on September 4th!`;
}

const intervalId = setInterval(updateCountdown, 1000);
updateCountdown();