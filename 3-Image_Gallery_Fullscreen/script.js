const imageSection = document.getElementById("imageSection");
const image = document.getElementsByClassName("image");
const enlargeSection = document.getElementById("enlarge-section");
const enlargeImage = document.getElementById("enlargeImg");
const closeImage = document.getElementById("closeImage");

imageSection.addEventListener("click", (e) => {
    if (e.target.classList.contains('image')){
        enlargeImage.src = e.target.src;
        enlargeSection.style.display = 'flex';
    }
})

closeImage.addEventListener("click",() => {
    enlargeSection.style.display = 'none';
})

window.addEventListener('click', (e) => {
 if(e.target === enlargeSection){
    enlargeSection.style.display = 'none';
 }
})