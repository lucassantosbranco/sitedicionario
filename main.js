const botao = document.getElementById('btn')
const minhaDiv = document.getElementById('minhaDiv')

botao.addEventListener('click', function () {
    if (minhaDiv.style.display === 'none') {
        minhaDiv.style.display = 'block';
    } else {
        minhaDiv.style.display = 'none';
    }
});


