let playBtn = document.querySelectorAll('.play-btn'),
    similarContent =document.querySelector('.similar-musics') ,
    popularContent =document.querySelector('.popular-musics') ,
    playerContent =document.querySelector('.player');
playBtn.forEach(function(item){
    item.addEventListener('click' , function(){
        similarContent.style.display='flex';
        footer.style.marginTop ='450px';
        Tab.style.paddingTop ='170px';
        popularContent.style.display='none';
        playerContent.style.display ='none';
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


 //tab
 let Tab = document.querySelector('.tabheader');

 //footer
 let footer = document.querySelector('footer');
 