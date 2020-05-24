function init() {
    //var로 배열선언했고
    var funcs = [];

    // 함수의 배열을 생성하는 for 루프의 i는 전역 변수다.
    for (var i = 0; i < 3; i++) {
        funcs.push(function () {
            //0,1,2가 출력되지 않고 3이 3번 출력됨
            //for루프의 var i 가 전역변수이기 때문
            //let으로 바꾸면 0,1,2 출력된다
            //let은 for루프 안에서만 유효하기때문(블록레벨스코프)
            console.log(i);
        });
    }

    // 배열에서 함수를 꺼내어 호출한다.
    for (var j = 0; j < 3; j++) {
        funcs[j]();
    }
}

init();