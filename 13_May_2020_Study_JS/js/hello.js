// //전역변수로 선언
// const nameContainer = document.querySelector(".js-name");

// function drawName(name){
//     nameContainer.innerHTML = "";
//     const drawName = document.createElement("span");
//     drawName.className = "name_text";
//     drawName.innerHTML = `Hello! ${name}!`;
//     nameContainer.appendChild(drawName);
// }

// function handleSubmit(event){
//     /* preventDefault : 이벤트 버블링을 막아줌 */
//     event.preventDefault();
//     /* event에 한정지음, target(이벤트가 일어나는 곳) */
//     const form = event.target;
//     //일어나는 행동 한정지음
//     const input = form.querySelector("input");
//     const name = input.value;
//     /* 이 작업이 없으면 이벤트버블링의 영향으로
//     input 안에 있는 모든 name을 
//     가져올것이기 때문에 한정지어줌 */
//     localStorage.setItem("username",name);
//     drawName(name);
// }

// //처음온사람의 이름을 물어본다
// function drawInput(){
//     const input = document.createElement("input");

//     input.type = "text";
//     input.className = "input_name";
//     input.placeholder = "Type your name here!";

//     const form = document.createElement("form");

//     /* 콜백함수!! */
//     /* submit이 일어나면 이 함수의 기능을 실행 */
//     /* 콜백함수가 많아지면 코드가 난잡해짐 따로 관리해주는것 추천 */
//     form.addEventListener("submit", handleSubmit);

//     /* form에는 input을 붙인다 */
//     form.appendChild(input);
//     /* div에 form을 붙임 */
//     nameContainer.appendChild(form);

// }

// /* 서블릿에서 로그인된 정보 세션에 올렸다 */
// /* 자바스크립트에서도 Session Storage, Local Storage로 관리 할 수 있다 */
// /* Local Storage는 내 컴퓨터에 저장 */

// function checkName(){
//     /* Local Storage에 저장된이름이 없다면 첫방문
//     그것이 아니라면 첫방문 */
//     const name = localStorage.getItem("username");
//     if(name === null){
//         //처음온사람
//         //이름을 물어보고 username이라는 키값으로 받은 이름을 저장하고
//         drawInput();
//         //innerHTML로 그 이름을 보여준다
//     }else{
//         //왔던 사람
//         drawName(name);
//         //username 키값으로 저장된 이름을 가져와서 innerHTML로 보여준다
//     }
// }

// /* function init()만들어 관리해줌 */
// /* 가독성을 위해 */
// function init(){
//     checkName();
// }

// /* 실행 */
// init();

//---------------------------복습 & 이름과나이 둘다 표시해주는 응용버젼

//문서내에서 js-name이라는 클래스 이름을 가진것을 선택
const nameContainer = document.querySelector(".js-name");

function drawHello(userInfo){
    //이름을 화면에 그려주는 기능
    // div -> form -> input
    //      ->
    //div  -> 인사
    nameContainer.innerHTML = "";
    const helloMsg = document.createElement("span");
    helloMsg.className = "name__text";
    //이름 = 기존의사용자 같은 경우 -> localStorage에서 참조
    //처음 온 놈 -> getName에서 입력받은 이름
    helloMsg.innerText = `Hello ! ${userInfo.name} ! Your are ${userInfo.age} years old`;
    nameContainer.appendChild(helloMsg);
}

function handleSubmitAge(event){
    //이벤트 버블링을 막고
    event.preventDefault();
    //이벤트가 일어나는곳을 지정해주는것
    const form = event.target;
    const input = form.querySelector("input");

    //나이를 얻어내는게 완료됐으면
    const userInfo = {
        name : inputName,
        age : input.value
    }

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    drawHello(userInfo);
}


function handleSubmitName(event){
    event.preventDefault();
    //이벤트가 일어나는곳을 지정해주는것
    const form = event.target;
    const input = form.querySelector("input");

    //이름을 얻어내는게 완료했으면 나이를 얻어내러 갑니다
    getAge(input.value);
}

//-------------------------------------
var inputName = "";
function getAge(name){
    inputName = name;
    nameContainer.innerHTML = "";
    //div -> form -> input
    const input = document.createElement("input");
    input.placeholder = "Type Your Age Here";
    input.type = "text";
    input.className = "name__input";

    const form = document.createElement("form");
    form.addEventListener("submit", handleSubmitAge);

    form.appendChild(input);
    nameContainer.appendChild(form);

    //이름을 얻어내는게 완료됐으면
    // handleSubmitAge();
}

function getName(){
    //div -> form -> input
    const input = document.createElement("input");
    input.placeholder = "Type Your Name Here";
    input.type = "text";
    input.className = "name__input";

    const form = document.createElement("form");
    form.addEventListener("submit", handleSubmitName);

    form.appendChild(input);
    nameContainer.appendChild(form);
}

//JSON.parse(testRes) == test
//JSON.stringify(test) != test
//JSON.stringify(test) == testRes
function loadName(){
    //우리는 이름을 저장한 localStorage 키값을 "username"이라고 설정하겠다
    const userInfo = localStorage.getItem("userInfo");

    if(userInfo === null){
        //처음 온 사람
        //이름을 물어본다 -> 물어본 이름을 localStorage에 username이라는 키값으로 저장한다
        //그리고 기존에 왔던 사람처럼, 이름을 가지고 환영 메시지를 작성해준다
        getName();
    }else{
        const myData = JSON.parse(userInfo);
        //기존에 왔던 사람 -> localStorage에 username이라는 키값이 있는 사람
        //username에 저장된 이름을 가지고 환영 메시지를 작성해준다
        drawHello(myData);
    }
}

function init(){
    //누군가 접속을 했다
    //최초 접속자인지? 기존의 접속자인지? 확인
    loadName();
}

init();