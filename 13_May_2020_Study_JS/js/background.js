const body = document.querySelector("body"),
    locationText = document.querySelector(".js-location span");

const API_KEY = "fs5VGz0Zfkh9xwGvew1EpM8XNoSS6hrrUV1h2eU57H8";
//query로 coing관련된 사진 호출
const IMAGEURL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&orientation=landscape&query=landscape`;

function saveBackGround(url, city, country, name){
    
    //저장 전에 기존것 지우고 저장한다
    const savedImage = localStorage.getItem("background");
    if(savedImage !== null){
        localStorage.removeItem("background");
    }

    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);

    const imageObject = {
        url : url,
        expireDate : expireDate,
        city : city,
        country : country,
        name : name
    };
    /* 제이슨으로 변환해서 저장해주는것, json으로 stringify(문자열화)해서 저장해주겠다는 의미 */
    localStorage.setItem("background", JSON.stringify(imageObject));
    //불러와야겠다
}
//fetch를 통해 순수한 자바스크립트 언어로 비동기 통신을 구현해본다
function getBackGround(){
    //API URL로 요청하고, 반환받아서, loacalStorage에 저장하고,
    // fetch('http://example.com/movies.json')
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(myJson) {
    //         console.log(JSON.stringify(myJson));
    //     });
    fetch(IMAGEURL)
    .then(response => response.json())
    .then(json => {
        const image = json;
        if(image.urls && image.urls.full && image.location.city && image.location.country && image.location.name){
            const full = image.urls.full;
            const city = image.location.city;
            const country = image.location.country;
            const name = image.location.name;
            
            // 저장된 사진 url과, 도시이름과 나라이름과, name을 loaclStorage에 저장
            saveBackGround(full,city,country,name);
        }else{
            //만약에 실패하면 다시 요청한다
            getBackGround();
        }

    })
}

function loadBackGround(){
    // 저장된 키값은 변경될 일이 없고, 다시 선언되지 않아야
    // 하므로 상수인 const로 선언합니다
    const savedImage = localStorage.getItem("background");
    if(savedImage === null){
        //로컬스토리지에 background라는
        // 키값을 가진 value가 없으면 얻어오기
        getBackGround();
    }else{
        /* stringify했을때 모든 json객체가
        문자열로 변해버렸으므로 키값으로 꺼내올 수 없어졌다
        그렇기때문에 다시 json화 */
        const parsedImageObject = JSON.parse(savedImage);
        // 있으면 그려주기

        //오늘 날짜를 일단 불러오고
        const today = new Date();
        if(today > parsedImageObject.expireDate){
            //유통기한을 오늘날짜 +1 저장해놓고
            //불러올 때 유통기한이 오늘보다 작다면 다시요청
            getBackGround();
        }else{
            //불러올 때 유통기한이 남았으면, 그냥 받아온값 쓴다
            body.style.background = `url(${parsedImageObject.url})`;
            locationText.innerHTML = `${parsedImageObject.name}, ${parsedImageObject.city}, ${parsedImageObject.country}`
        }
    }
}

function init(){
    loadBackGround();
}

init();