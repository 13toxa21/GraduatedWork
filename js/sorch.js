
document.getElementById('inp1').oninput = function(){
    let sorch = document.getElementById('elastic');
    sorch.style.display = 'block';
    let val = this.value.trim();
    let elasticItem = document.querySelectorAll('.elastic li');
    if(val != ''){
        elasticItem.forEach(function(elem){
            if(elem.innerText.search(val) == -1){
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            }
            else{
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = inserMark(str, elem.innerText.search(val), val.length);
            }
        });
    }
        else{
            elasticItem.forEach(function(elem){
                elem.classList.remove('hide');
                elem.innerHTML = elem.innerText;
        })
    }
}

function inserMark(strang, pos, len){
    return strang.slice(0, pos) + '<mark>' + strang.slice(pos, pos + len) + '</mark>' + strang.slice(pos + len);
}

