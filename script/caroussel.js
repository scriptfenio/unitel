let containerImgs = document.querySelector(".vitrine-galeria");
let imgs = document.querySelectorAll('.vitrine-galeria img' );
let initialScroll = 0;
let targetWidth = (containerImgs.clientWidth * imgs.length) - containerImgs.clientWidth;
let scrollspd = 10;
let vitrineGaleriaWraper = document.querySelctor('vitrine-galeria-wraper');

vitrineGaleriaWraper.style.width = (imgs.length * 100) + '%';

for (let i = 0; i < imgs.length; i++){
    imgs[i].style.width = (100/imgs.length) + '%';
} 

