const catalogProduct = [
{
    id: 'id1',
    name: 'Yamaha P-105B',
    img: './/images/Layer1.png',
    price: '835 рублей', 
    description: 'Компактное электропиано, оснащенное стерео- сэмплированными тембрами!'
},
{
    id: 'id2',
    name: 'DBZ Halilfire',
    img: './/images/Layer2.png',
    price: '124 рубля',
    description: 'Электрогитара, в стиле «Юнион Джек». Выпущена ограниченным тиражом. '
},
{
    id: 'id3',
    name: 'Pearl Sparkle Burst',
    img: './/images/Layer3.png',
    price:'225 рублей',
    description: 'Малый барабан MCX Masters Custom 14x5.5 (клен)'
},
{
    id: 'id4',
    name: 'Hohner Bravo III 96 RED',
    img: './/images/Layer4.png',
    price: '176 рублей',
    description: 'Аккордеон, в стиле «Юнион Джек». Выпущен ограниченным тиражом. '
},
{
    id: 'id5',
    name: 'ARIA PRO II IMPERIAL',
    img: './/images/Layer5.png',
    price: '253 рубля',
    description: 'Электрогитара, в стиле «Юнион Джек». Гитара выпущена ограниченным тиражом. '
},
{
    id: 'id6',
    name: 'Amati AHR 332-O',
    img: './/images/Layer6.png',
    price: '344 рубля',
    description: 'Валторна одинарная 4-х вентельная, лакированная.'
},
{
    id: 'id7',
    name: 'Hohner Bravo III 96 RED',
    img: './/images/Layer7.png',
    price: '224 рубля',
    description: 'Аккордеон, в стиле «Юнион Джек». Выпущен ограниченным тиражом. '
},
{
    id: 'id8',
    name: 'Yamaha YTR-3335B',
    img: './/images/Layer8.png',
    price: '433 рубля',
    description: 'Эта труба - флагман 3-й серии Yamaha. Обновленный дизайн, свежее звучание и улучшенная механика.'
},
]

//открытие каталога
var head = document.getElementById('head')
var catalogBtn = document.getElementById('catalog');
var contCat = document.getElementById('catalog_cont');
var foot = document.getElementById('footer');
var contOne = document.getElementById('container1');
var carus = document.getElementById('carousel');
var contTwo = document.getElementById('container2')
var akcia = document.getElementById('akcii');

var contact = document.getElementById('contacts');
var contactBtn = document.getElementById('li_contact');

var aboutBtn = document.getElementById('about');
var akciiBtn = document.getElementById('akc_btn')

var sorch = document.getElementById('elastic');

function openCat(){
    contCat.style.display = "block";
    head.style.position = "absolute";
    contact.style.display = "none";
    //wrap.style.display = "none";
    //foot.style.marginTop = "75%";
    contOne.style.display = "none";
    contTwo.style.display = "none";
    carus.style.display = "none";
    akcia.style.display = "none";

    if(sorch.style.display == 'block'){
        sorch.style.display = 'none';
    }

};
catalogBtn.addEventListener('click', openCat);

//развертывание инфы о компании
var showBtn = document.getElementById('show-hide');
var inf = document.getElementById('info');

function deploy(){
    if(inf.style.height == "450px"){
    inf.style.height = "780px";
    showBtn.innerHTML = '<<...свернуть';
    }else{
    inf.style.height = "450px";
    showBtn.innerHTML = 'читать дальше...>>';
    }
}
showBtn.addEventListener('click', deploy);

//открытие контактной информации
function openContanct(){
    contCat.style.display = "none";
    contact.style.display = "block";
    contOne.style.display = "none";
    carus.style.display = "none";
    contTwo.style.display = "none";
    akcia.style.display = "none";

    if(sorch.style.display == 'block'){
        sorch.style.display = 'none';
    }

};

contactBtn.addEventListener('click', openContanct);

// при нажатии на логотип возврат на стартовую страницу
var logoBtn = document.getElementById('logo');

function startPage(){
    document.location.href = './index1.html';
}

logoBtn.addEventListener('click', startPage);


//при открытом каталоге на акции и о компании
var infRoad = document.getElementById('inf_road')

function opnAbout(){
    contOne.style.display = "none";
    contCat.style.display = "none";
    contact.style.display = "none";
    akcia.style.display = "none";
    akcRoad.style.display = "none";
    contTwo.style.marginTop = "13.6%";
    contTwo.style.display = "block";
    infRoad.style.display = "block";
    carus.style.display = "none";
    
    inf.style.height = "780px";
    showBtn.innerHTML = '';

    if(sorch.style.display == 'block'){
        sorch.style.display = 'none';
    }
};
aboutBtn.addEventListener('click', opnAbout);

var akcRoad = document.getElementById('akc_road');

function opnAkc(){
        contOne.style.display = "none";
        contCat.style.display = "none";
        contact.style.display = "none";
        akcia.style.display = "block";
        akcRoad.style.display = "block";
        akcia.style.marginTop = "13.6%";
        contTwo.style.display = "none";
        infRoad.style.display = "none";
        carus.style.display = "none";

        if(sorch.style.display == 'block'){
            sorch.style.display = 'none';
        }
      
};
akciiBtn.addEventListener('click', opnAkc);
