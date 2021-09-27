let closeBtn = document.querySelector('.fa-times'); //plockar fram de nödvändiga grejerna från DOM
let openBtn = document.querySelector('.fa-bars');
let sidebarmenu = document.querySelector('#sideBarNav')


openBtn.addEventListener('click', ()=>{    //ändrar bredden på sidebarmenu till 100% när openbtn (fa-bars) clickas
    sidebarmenu.style.width ="100%";
})

closeBtn.addEventListener('click', ()=>{   //ändrar bredden på sidebarmenu till 0 när closebtn (fa-times) clickas
    sidebarmenu.style.width ="0";
})