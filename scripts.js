
const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))
 console.log(elements)

const myObserver= new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
     
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
       
    })
    
})

const cpf = 8888888



console.log(cpf)


 
