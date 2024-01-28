const countDownDate = new Date('October 28, 2024 23:59:59').getTime();
const timer = document.getElementById('timer');


const updateCountdown = () => {
    const currentDate = new Date().getTime();
    const timeRemaining = countDownDate - currentDate;

    if(timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(timeRemaining % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(timeRemaining % (1000 * 60) / (1000));
        timer.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    } else {
        clearInterval(timeInterval);
        timer.innerHTML = "Countdown Expired!";
    }
}
//Inside setInterval the function first need to be defined
const timeInterval = setInterval(updateCountdown,1000);