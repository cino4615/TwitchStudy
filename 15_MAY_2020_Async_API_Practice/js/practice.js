const body = document.querySelector(".bodyWrapper");

function requestAPI() {
  const URL = "https://dapi.kakao.com/v3/search/book";
  const target = "target=title";
  const query = "query='JAVA'";

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "KakaoAK 7d6305311c87374b02a73cba756fe04d");

  const myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };

  //  백틱 ``
  const myRequest = new Request(`${URL}?${target}&${query}`, myInit);

  //   fetch(myRequest)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       const finalData = JSON.stringify(myJson);
  //       //   console.log(myJson);
  //       localStorage.setItem("myData", finalData);
  //       drawOnBody(finalData);
  //     });
  fetch(myRequest)
    .then((response) => response.json())
    .then((json) => {
      const finalData = JSON.stringify(json);
      localStorage.setItem("myData", finalData);
      drawOnBody(finalData);
    });
}

function drawOnBody(data) {
  //   body.innerHTML = data.documents[0].price;
  const finalJsonData = JSON.parse(data);
  for (var i = 0; i < finalJsonData.documents.length; i++) {
    body.innerHTML += finalJsonData.documents[i].title + "<br>";
  }
}

function loadSearch() {
  const myData = localStorage.getItem("myData");

  if (myData === null) {
    // API요청을 해라.
    console.log("값없어");
    requestAPI();
  } else {
    //body에 그려
    drawOnBody(myData);
    console.log("값있어");
  }
}

function init() {
  loadSearch();

  //   옛날버전
  var arr = [1, 2, 3];
  var pw = arr.map(function (x) {
    return x * 3;
  });

  console.log(pw);

  //   최근버전(화살표함수)
  const arr2 = [1, 2, 3];
  const pow2 = arr2.map((x) => x * 3);
  console.log(pow2);

  const student = {
    name: "bora",
    age: 22,
  };

  const student2 = {
    name: "jimin",
    age: 20,
  };

  function test() {
    console.log("test");
  }
  Object.prototype.sayHello = function () {
    console.log(`Hello, My name is ${this.name}. I am ${this.age} years old`);
  };
  sayHello();
  //   function sayHello() {
  //     console.log(`hello my name is ${this.name}, I am ${this.age} years old`);
  //   }
  student.sayHello();
  student2.sayHello();

  body.addEventListener("click", function (event) {
    console.log(event.target);
  });
  //   사용할수 있는 함수가 prototype에 들어간다.

  const date = new Date();
  const seconds = date.getSeconds();
  function getSeconds() {
    body.innerHTML = seconds;
  }

  setInterval(getSeconds, 1000);
}
function getSeconds() {
  const date = new Date();
  const seconds = date.getSeconds();
  body.innerHTML = `${seconds < 10 ? `0${seconds}` : seconds}`;
}
init();