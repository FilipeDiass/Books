import bookApi from "./solicitar-api.js";

const inputLivro = document.querySelector('#inputLivro')
const lupa = document.querySelector('#lupa')
function inputValue(event){
    if(event.key === 'Enter' || event.type === "click"){
        event.preventDefault()

        const nomeLivro = inputLivro.value
        bookApi(nomeLivro)
        inputLivro.value = ""
    }
}
lupa.addEventListener('click', inputValue)
inputLivro.addEventListener('keydown', inputValue)


