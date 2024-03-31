window.onscroll = function showHeader(){
    let cont = document.querySelector('.cont');

    if(window.scrollY > 1000){
        cont.classList.add('cont-fixed');
    } else{
        cont.classList.remove('cont-fixed');

    }
}