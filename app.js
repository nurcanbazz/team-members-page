const button = document.getElementById('switchCheck');

function modeFunction() {
    var element = document.body;
    element.classList.toggle("mode");
}
console.log(button);
button.addEventListener('click', modeFunction);
