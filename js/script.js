let playBtn = document.querySelectorAll('.play-btn'),
    similarContent =document.querySelector('.similar-musics') ,
    popularContent =document.querySelector('.popular-musics') ;
playBtn.forEach(function(item){
    item.addEventListener('click' , function(){
        similarContent.style.display='flex';
        popularContent.style.display='none';
    })
})


let toggle = document.querySelector('.toggle'),
    menu = document.querySelector('.modal-category'),
    close = document.querySelector('.menu-close');

    toggle.addEventListener('click' , function(){
        menu.style.marginLeft = '0';
        document.body.style.overflow ='hidden';
    })
    menu.addEventListener('click' , function(){
        document.body.style.overflow ='';
        menu.style.marginLeft = '-100%';
    })


    