//매개변수에 적당한 인수가 들어갔는지
//함수 내부에서 확인
function sum(x, y) {
    //x가 정의되지 않았을경우 0을 넣는다.
    //이 경우 x를 정의하지 않아도
    //값에는 Nan이 아닌 0이뜸
    x = x || 0;
    y = y || 0;
    return x + y;
}

function es6Sum(x = 0, y = 0) {
    //위와같이 검사해줬던걸
    //ES6부터는 간단하게 선언가능
    //매개변수의 기본값 설정가능
    console.log(x + y);
}

//...매개변수 => 파라미터를 
//배열형식으로 전달받는다
//restParameter는 반드시 마지막 파라미터 여야한다 그러지 않을 경우 오류
function restParameter(param1, param2, ...rest) {
    console.log(`param1의 값 : ${param1}`);
    console.log(`param2의 값 : ${param2}`);
    console.log(`rest의 값 : ${rest}`);
}

function init() {
    es6Sum();
    es6Sum(1);
    restParameter(1, 2, 3, 4, 5);
}

init();