const button = document.getElementById('scrollToTop');

const scrollToTop = () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

window.onscroll = function () {
    scrollFunction();
}

const scrollFunction = () => {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}