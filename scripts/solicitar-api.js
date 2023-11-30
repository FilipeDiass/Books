import cardLivro from "./insereCard.js"

export default async function bookApi(nomeLivro){
    const key = 'AIzaSyDpfegv-q6J0DmvlrbULoMk9pfWioWqEYE'
    const url = `https://www.googleapis.com/books/v1/volumes?q=${nomeLivro}&maxResults=1&fields=items/volumeInfo(authors,canonicalVolumeLink,imageLinks,pageCount,publishedDate,publisher,title)&key=${key}`

    try {
        const response = await fetch(url)
        if(response.status !== 200) throw "A requisição Falhou"
        const objeto = await response.json()
        const infoLivro = objeto.items[0].volumeInfo
        cardLivro(infoLivro)
    } catch (error) {
        const containerCards = document.querySelector('#containerCards')
        containerCards.innerHTML = "Não foi possivel encontrar o livro"
        containerCards.style.height = '20px'
        console.error(error)
    }
}