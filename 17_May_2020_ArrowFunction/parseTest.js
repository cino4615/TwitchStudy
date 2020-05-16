function testParse(){
    //JSON
    //Java Script Object Notation
    //자바스크립트 객체 표기법
    const jsonTest = {
        userInfo : [
            {
                name : "김지수",
                nickname : "연가시크루",
                female : true
            },
            {
                name : "성민",
                nickname : "디폴트",
                female : false
            }
        ],
        notInfo : ["물 좋아함", "저녁으로 삼김 먹음"]
    }
    //자료형이 하나일때는 잘 뜬다
    const myName = 20;
    const testArray = [1,"김밥",3,false,5];
    //----------------------------
    console.log(jsonTest);
    const stringifyTest = JSON.stringify(jsonTest);
    console.log(stringifyTest);
    localStorage.setItem("practice", JSON.stringify(jsonTest));


}

function init(){
    testParse();
}

init();

//storage에 저장할 때는 반드시 문자열로 저장해줘야한다
//stringify로 문자열화 해서 저장

//true/false값을 저장할 때는
//객체배열로 저장해야한다
//그냥 배열로 저장했을 때 문자열이 되어버린다