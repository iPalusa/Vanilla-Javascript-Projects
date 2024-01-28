const button = document.getElementById('button');

button.addEventListener('click', () => {
    const random = randomGenerator();
    document.body.style.backgroundColor = random;

});

const randomGenerator = () => {
    let color = '#';
    const letters = '0123456789ABCDEF';
    for(i=0;i<6;i++){
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}