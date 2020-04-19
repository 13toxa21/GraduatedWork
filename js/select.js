
function getLeng(){
    let select = document.getElementById('lenguage').selectedIndex;
    let options = document.getElementById('lenguage').options;
if(options[select].text == 'EN'){
    document.getElementById('title').innerHTML = 'Musical arsenal';
    document.getElementById('title2').innerHTML = 'We work for your talent!';
    document.getElementById('adress').innerHTML = 'Minsk, Melezha St., 1';
    document.getElementById('buy').innerHTML = 'How to buy';
    document.getElementById('guarant').innerHTML = 'Guarantee';
    document.getElementById('delivery').innerHTML = 'Delivery';
    document.getElementById('korz_btn').innerHTML = 'Basket';
    document.getElementById('inp1').placeholder = 'Site search';

    document.getElementById('akc_btn').innerHTML = 'Stocks';
    document.getElementById('catalog').innerHTML = 'Product Catalog';
    document.getElementById('about').innerHTML = 'About us';
    document.getElementById('partners').innerHTML = 'Our partners';
    document.getElementById('li_contact').innerHTML = 'Contacts';


    document.getElementById('all_proizv').innerHTML = 'ALL MANUFACTURERS';

    document.getElementById('onas').innerHTML = 'ABOUT COMPANY';

    document.getElementById('name_akcii').innerHTML = 'Stocks';
    document.getElementById('akcii_podpiska').innerHTML = 'subscribe to stocks';

    } else{
        document.location.href = './index1.html'
    }
}
