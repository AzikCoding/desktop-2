let toggle = document.querySelector('.toggle'),
    menu = document.querySelector('.modal-category'),
    close = document.querySelector('.menu-close');
    console.log('toggle' , toggle );
    console.log( 'menu', menu);
    console.log( 'close', close);
    toggle.addEventListener('click' , function(){
        menu.style.marginLeft = '0';
        console.log(1)
    })
    menu.addEventListener('click' , function(){
        menu.style.marginLeft = '-100%';
        console.log(1)
    })

