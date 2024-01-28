const textInput = document.getElementById('textInput');
const count = document.getElementById('count');
const warning = document.getElementById('warning');

const updateCount = () => {
    const maxLength = 15;

    const currentLength = textInput.value.length;
    count.textContent = currentLength;

    if(currentLength > maxLength){
        warning.style.display = "block";
    } else {
        warning.style.display = "none";
    }
}