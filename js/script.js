let playMusic = document.querySelectorAll('.play-btn'),
    similarContent = document.querySelector('.similar-musics'),
    popularContent = document.querySelector('.popular-musics'),
    fullTextBtn = document.querySelector('.full__text'),
    fullText = document.querySelector('.music-text'),
    a = document.querySelector('.full__text-close');
console.log(a);
playMusic.forEach((item)=>{
   item.addEventListener('click' , function(){
    similarContent.style.display = 'block';
    popularContent.style.display = 'none';
   });
});
// a.style.display ='none';

fullTextBtn.addEventListener('click' , function(){
    fullText.innerHTML =`
Yurak hafa holatimdan<br>
Seni o'zi nega sevdim<br>
Kulib kulib telbalarga<br>
O'zim majnun bo'lib kettim<br>  
<br>
Yoningdaman go'yo yo'qday<br>
His etishdan to'yib kettim<br>
Qara sevgimiz boshlanmay<br>
Tugab ketti tugab ketti<br>
<br>
Hali sevib sevilmagan<br>
Men ham oddiy boladirman<br>
Kirgandim ishq ko'chasiga<br>
Balolarga qolib kettim<br>
<br>
Mensiz baxtga yetganingda<br>
Qara sensiz qayga kettim<br>
O'ldirdingga dengizida cho'kib kettim<br>
Dunyoning toshlariga mehir qo'ygan bag'ritosh<br> 
<button class="full__text-close">o'chir</button>

`;
});
a.addEventListener('click', function(){
    // a.style.display ='flex';

    fullText.innerHTML =`
        Yurak hafa holatimdan<br>
        Seni o'zi nega sevdim<br>
        Kulib kulib telbalarga<br>
        O'zim majnun bo'lib kettim<br>  
        <br>`;
});

