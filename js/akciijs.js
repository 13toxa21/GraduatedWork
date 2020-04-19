var dateEnd = new Date("Jan 1, 2021 00:00:00").getTime();
var timeAkc = document.getElementById('timer');
var timeAks2 = document.getElementById('timer2');

var contFunction = setInterval(function (){
    var now = new Date().getTime();
    var distance = dateEnd - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);

    timeAkc.innerHTML = ("До конца акции:<br>" +" " + days +" " + 'дн.' + " " + hours + " " + 'ч.' +" "+ minutes + " " + 'мин.' + " " +seconds + " " + 'сек.');
    timeAkc.style.color = '#d8424b';

    timeAks2.innerHTML = ("До конца акции:<br>" +" " + days +" " + 'дн.' + " " + hours + " " + 'ч.' +" "+ minutes + " " + 'мин.' + " " +seconds + " " + 'сек.');
    timeAks2.style.color = '#d8424b';

    if(distance < 0){
        clearInterval(contFunction);

    }
},1000)
