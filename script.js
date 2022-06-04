function notReadyAlert(event){
    alert('Sorry,not ready yet!\nИзвините, ещё не готово!');
    event.preventDefault();
    return false;
}

function search() {
    let name = document.getElementById('search').value.toLowerCase();
    let productNumber = null;
    if (name == 'giant atx 2019'){
        productNumber = 0;
    }else if (name == 'giant atx 2020') {
        productNumber = 1;
    }else if (name == 'giant atx 2022') {
        productNumber = 2;
    }else if (name == 'enchant') {
        productNumber = 3;
    }else if (name == 'dk cygnus 2020') {
        productNumber = 4;
    }else if (name == 'author a-matrix 2021') {
        productNumber = 5;
    }else if (name == 'liv tempt ge 2020') {
        productNumber = 6;
    }else if (name == 'cube attention 2019') {
        productNumber = 7;
    }else if (name == 'giant propel advanced 2021') {
        productNumber = 8;
    }else if (name == 'giant trinity advanced pro 2021') {
        productNumber = 9;
    }else if (name == 'kink curb 2021') {
        productNumber = 10;
    }else if (name == 'giant fathom 2021') {
        productNumber = 11;
    }else if (name == 'lib bliss 2022') {
        productNumber = 12;
    }else if (name == 'liv enchant 2021') {
        productNumber = 13;
    }else if (name == 'giant animator 2021') {
        productNumber = 14;
    }else if (name == 'trek marlin 2022') {
        productNumber = 15;
    }else if (name == 'cube hyde 2021') {
        productNumber = 16;
    }else if (name == 'scott spark 700 2021') {
        productNumber = 17;
    }else if (name == 'format 1313 plus 2021') {
        productNumber = 18;
    }else if (name == 'cube aim race 2022') {
        productNumber = 19;
    }else {
        alert('Товар не найден, попробуйте ввести название бренда, модель и год выпуска велосипеда (через пробел).');
    }
    let cards = document.getElementsByClassName('card');
    let card = cards[productNumber];
    card.style.border = '1px dashed dodgerblue';
    card.style.backgroundColor = 'yellow';

    setTimeout(function() {
        card.style.border = 'none';
        card.style.backgroundColor = '';
    }, 15000)
    
}

function generateMenu(){
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML = '';

    let items = [
        {href: 'index.html', text: 'Товары'},
        {href: 'contacts.html', text: 'Контакты'},
        {href: 'promotions.html', text: 'Акции'},
    ];

    for(let i = 0; i<items.length; i++) {
        let link = document.createElement('a');
        link.innerText = items[i].text;
        link.href = items[i].href;
        if(items[i].href == ''){
            link.addEventListener('click', notReadyAlert);
        }

        let menuItem = document.createElement('li');
        menuItem.appendChild(link);

        menu.appendChild(menuItem);
    }
}


function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if(key.key == 'Enter' )
            search();
    });

    generateMenu();
}

function help1() {
    alert("Для этого купи 2 велосипеда!");
    return false;
    }

    function help2() {
    alert("При получении товара подтверди дату рождения!");
    return false;
    }

    function help3() {
    alert("Приходи в период с 29 по 31 декабря");
    return false;
    }
