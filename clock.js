// 필요한 변수를 지정한다. (html에서 클래스의 이름 또는 태그를 가져온다.)
const clockContainer = document.querySelector(".js-clock"), 
  clockTitle = clockContainer.querySelector("h1");

// 현재 시간을 나타내는 함수 
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours<10 ? `0${hours}`:hours}:${
        minutes<10 ? `0${minutes}`:minutes
     }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// 실행시 수행할 함수
function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();