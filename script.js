// Primeiro, defina o IntersectionObserver
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

// Agora, selecione todos os elementos com a classe 'hidden'
const elements = document.querySelectorAll('.hidden');

// Observe cada elemento
elements.forEach((element) => myObserver.observe(element));

// Log dos elementos observados para verificar
console.log(elements);




const cpf = 8888888

console.log("BOA TARDE")


 
