
const root = document.getElementById('root')
const [lista] = document.getElementsByName('lista')

function adicionar() {   
    const btn = document.querySelector('button')
    btn.addEventListener('click', () => {
        const entrada = document.querySelector('input')
    }) 
    lista.appendChild(entrada) 
    root.innerHTML += `<li> ${lista} </li>`
    console.log("Item adicionado")         
}     
 
function deletar(item) {
    const btn = document.querySelector('button')
    btn.addEventListener('click', () => {
        const entrada = document.querySelector('input')
    }) 
    lista.removeChild(entrada) 
    root.innerHTML += `<li>' '</li>`
    console.log("Item deletado")
}

//em resumo, o setTimeout é uma função que recebe 2 parâmetros, o primeiro sendo o callback do que será executado após um certo momento, o segundo parâmetro é o tempo em milissegundos ao qual refere-se o tempo de aguardo

