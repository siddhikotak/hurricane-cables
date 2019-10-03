$(window).scroll(function () {
    var wscroll = $(this).scrollTop();
    $(".logoa").css({
        'transform': 'translate(0px,' + wscroll / 5 + '%)'
    });
    $(".img").css({
        'transform': 'translate(0px,' + -wscroll / 27 + '%)'
    });
});


var ham = document.getElementById('hamburger');
var side = document.getElementById('sidebar');
var main = document.getElementById('main');

function sidebarIn() {
    side.style.transform = 'translate3d(100%,0,0)';
}
ham.addEventListener('click', function () {
    if (side.classList.contains('sidebarOn')) {
        side.classList.remove('sidebarOn')
    } else {
        side.classList.add('sidebarOn')
    }
});

main.addEventListener('click', function () {
    if (side.classList.contains('sidebarOn')) {
        side.classList.remove('sidebarOn');
    }
});

//--------------------C

var card = document.getElementsByClassName('inner-container');
var moreButton = document.getElementsByClassName('moreButton');
var backButton = document.getElementsByClassName('backButton');
Array.prototype.forEach.call(moreButton, function (b, i) {
    b.addEventListener('click', function () {
        card[i].style.transform = "rotateY(-180deg)";
    });
});


Array.prototype.forEach.call(backButton, function (b, i) {
    b.addEventListener('click', function () {
        card[i].style.transform = "rotateY(0deg)";
    });
});
