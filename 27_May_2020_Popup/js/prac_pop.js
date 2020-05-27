function popOn(ele){
    const $ele = $(ele),
    $eleWidth = ~~($ele.outerWidth()),
    $eleHeight = ~~($ele.outerHeight()),
    docWidth = $(document).width(),
    docHeight = $(document).height();
    
    console.log($ele);
    $ele.fadeIn();

    $ele.css({
        marginTop: $eleHeight /2,
        marginLeft: $eleWidth /2,
    })

    $ele.find('.close').click(close);
    function close(){
        $ele.fadeOut();
        return false;
    }
    
}

function init() {

    $('.show-pop').click(popClick);

    function popClick(){
        const $href = $(this).attr('href');
        popOn($href);
    }
}

init();