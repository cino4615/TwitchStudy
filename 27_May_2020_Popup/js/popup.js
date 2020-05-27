
function layer_popup(el){

    //매개변수로는 클릭된객체의 id값이 담겨옴
    var $el = $(el);        //레이어의 id를 $el 변수에 저장

    //dim레이어냐 아니냐를 구분할 용도
    var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

    //fadeIn함수 해당 레이어를 천천히 나타나게함 살며시
    isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

    //선택된 태그의 높이, 넓이 값을 구함
    var $elWidth = ~~($el.outerWidth()),
        $elHeight = ~~($el.outerHeight()),
        //해당 문서의 높이, 넓이 값을 구함
        docWidth = $(document).width(),
        docHeight = $(document).height();

    // 화면의 중앙에 레이어를 띄운다.
    //팝업창이 해당 문서보다 크다면
    if ($elHeight < docHeight || $elWidth < docWidth) {
        $el.css({
            marginTop: -$elHeight /2,
            marginLeft: -$elWidth/2
        })
    } else {
        $el.css({top: 0, left: 0});
    }

    $el.find('a.btn-layerClose').click(close);

    function close(){
        //fadeOut 팝업창 닫아준다
        isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
        return false;
    }

}

function init(){

    $('.btn-example').click(btnClick);

    function btnClick(){
        var $href = $(this).attr('href');
        layer_popup($href);
    }
}

init();