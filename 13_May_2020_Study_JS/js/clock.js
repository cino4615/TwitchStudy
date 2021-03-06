
const clockContainer = document.querySelector(".js-clock .clock__text");

function getTime(){
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds =  time.getSeconds();

    const now = 
    `${hours < 10 ? `0${hours}` : hours}:
    ${minutes < 10 ? `0${minutes}` : minutes}:
    ${seconds < 10 ? `0${seconds}` : seconds}`;

    clockContainer.innerText = now;
}

function init(){
    /* 한줄지우기 ctrl+shift+k */
    getTime();
    setInterval(getTime, 1000);
}

init();