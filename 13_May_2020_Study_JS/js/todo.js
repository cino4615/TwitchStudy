const form = document.querySelector(".js-to-do"),
    input = document.querySelector(".js-add-to-do"),
    list = document.querySelector(".js-list");

function addToDo(inputValue){
    const toDo = document.createElement("li");
    toDo.className = "toDo";

    const deleteBtn = document.createElement("span");
    deleteBtn.innerText = "❌";
    deleteBtn.className = "toDo__button";
    deleteBtn.addEventListener("click", clickDelete);

    const label = document.createElement("label");
    label.innerText = inputValue;

    //ul -> button/li -> label
    toDo.appendChild(label);
    toDo.appendChild(deleteBtn);
    list.appendChild(toDo);
}

function clickDelete(event){
    //label -> button/li -> ul
    alert(event.target.parentElement.parentElement);
}


function onSubmit(event){
    event.preventDefault();
    if(input.value === ""){
        // alert("아무것도 안썼다");
    }else{
        // 입력된 text를 할일을 추가해준다
        addToDo(input.value);
        // 입력된 text를 할일로 추가했으면, input 공간을 다시 비워준다
        input.value = "";

    }
}

function loadToDos(){
    const loadedToDos = localStorage.getItem("toDos");
    if(loadToDos !== null){
        //ul태그 안에 그려줌
    }else{
        //ul태그 안에 할일이 없다고 써줍니다
    }
}

function init(){
    //로컬스토리지에 저장된 To-do-list가 불러온다
    loadToDos();
}

//얘는 function안에 있으며, 특정 조건이 되어야만 호출이 되므로 function 밖에 작성한다
//그래서 변화가 있을 때마다 반응한다. 항상 귀를 열고 있는 착한넘이다
//addEventListener(행동 ex)click, submit, onmousedown, onmouseup, onchange)
form.addEventListener("submit",onSubmit);


init();