// 사용한 api 주소 => https://openweathermap.org/
const WEATHER_API_KEY = "eb4cbb66de44a0457a624d3de0ad78f4";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";

//분기를 나눠놓는것이 나중에 css먹일 필요가 생길때도 편리
const sunriseContainer = document.querySelector(".js-weather .sunrise__text"),
weatherContainer = document.querySelector(".js-weather .weather__text");



function getWeather(crd){
  const WEATHER_API_URL = `${WEATHER_API}lat=${crd.latitude}&lon=${crd.longitude}&appid=${WEATHER_API_KEY}&units=metric`;
  fetch(WEATHER_API_URL)
  .then(response => response.json())
  .then(json => {
    const currentTemp = json.main.temp;
    const myCountry = json.sys.country;

    //타임스탬프 구하는법 api는 대부분 타임스탬프로 받음
    //밀리세컨드 단위로 반환해주기 때문에 *1000, /1000 해줘야함

    //타임 스탬프를 -> 현재시간으로 변환
    const sunriseTime = new Date(json.sys.sunrise*1000);
    //현재시간을 -> 타임스탬프
    const practiceTimestamp = new Date().getTime() / 1000;

    //TimeStamp : 1970년 1월 1일 00:00:00 부터 흐른 초가 
    // console.log(Math.floor(practiceTimestamp));

    const sunriseHour = sunriseTime.getHours();
    const sunriseMinutes = sunriseTime.getMinutes();
    const sunrise = `${sunriseHour}시 ${sunriseMinutes}분`;

    //toFixed(1) : 소수점 첫째자리까지 표시
    // console.log(`현재기온은 ${currentTemp.toFixed(1)} 나는 지금 ${myCountry}에 있고 일출시간은 ${sunrise}`);

    weatherContainer.innerText = `${currentTemp}`;
    sunriseContainer.innerText = `${myCountry}, Sunrise : ${sunrise}`;
  });
  
}

function getPosition(){
  function success(pos) {
    //객체 배열로 들어온것을 property화해서 다시 json처럼 객체 배열화해서 넣어준다
    const crd = {
      latitude : pos.coords.latitude,
      longitude : pos.coords.longitude
    };
    console.log(crd); 
    
    // console.log('Your current position is:');
    // console.log('Latitude : ' + crd.latitude);
    // console.log('Longitude: ' + crd.longitude);
    //불러오기 성공했을 떄 저장
    localStorage.setItem("coords", JSON.stringify(crd));
    getWeather(crd);
  };
  
  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  navigator.geolocation.getCurrentPosition(success, error);
}

function loadWeather(){
  const myLocation = localStorage.getItem("coords");
  
  if(myLocation !== null){
    //날씨 정보를 불러와라
    const parsedMyLocation = JSON.parse(myLocation);
    getWeather(parsedMyLocation);
  }else{ 
    //위치 조회부터 하자
    getPosition();
  }
   
}

function init(){
    //현재날씨호출
    loadWeather();
}

init();