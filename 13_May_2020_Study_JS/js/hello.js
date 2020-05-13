//전역변수로 선언
const nameContainer = document.querySelector(".myName");

function drawName(name){
    nameContainer.innerHTML = "";
    const drawName = document.createElement("span");
    drawName.className = "name_text";
    drawName.innerHTML = `Hello! ${name}!`;
    nameContainer.appendChild(drawName);
}

function handleSubmit(event){
    /* preventDefault : 이벤트 버블링을 막아줌 */
    event.preventDefault();
    /* event에 한정지음, target(이벤트가 일어나는 곳) */
    const form = event.target;
    //일어나는 행동 한정지음
    const input = form.querySelector("input");
    const name = input.value;
    /* 이 작업이 없으면 이벤트버블링의 영향으로
    input 안에 있는 모든 name을 
    가져올것이기 때문에 한정지어줌 */
    localStorage.setItem("username",name);
    drawName(name);
}

//처음온사람의 이름을 물어본다
function drawInput(){
    const input = document.createElement("input");

    input.type = "text";
    input.className = "input_name";
    input.placeholder = "Type your name here!";

    const form = document.createElement("form");

    /* 콜백함수!! */
    /* submit이 일어나면 이 함수의 기능을 실행 */
    /* 콜백함수가 많아지면 코드가 난잡해짐 따로 관리해주는것 추천 */
    form.addEventListener("submit", handleSubmit);

    /* form에는 input을 붙인다 */
    form.appendChild(input);
    /* div에 form을 붙임 */
    nameContainer.appendChild(form);

}

/* 서블릿에서 로그인된 정보 세션에 올렸다 */
/* 자바스크립트에서도 Session Storage, Local Storage로 관리 할 수 있다 */
/* Local Storage는 내 컴퓨터에 저장 */

function checkName(){
    /* Local Storage에 저장된이름이 없다면 첫방문
    그것이 아니라면 첫방문 */
    const name = localStorage.getItem("username");
    if(name === null){
        //처음온사람
        //이름을 물어보고 username이라는 키값으로 받은 이름을 저장하고
        drawInput();
        //innerHTML로 그 이름을 보여준다
    }else{
        //왔던 사람
        drawName(name);
        //username 키값으로 저장된 이름을 가져와서 innerHTML로 보여준다
    }
}

/* function init()만들어 관리해줌 */
/* 가독성을 위해 */
function init(){
    checkName();
}

/* 실행 */
init();