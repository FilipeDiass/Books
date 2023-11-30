export default function criaCardLivro(livro){
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
        <picture class="capa">
            <img src="${livro.imagem}" alt="Capa do livro">
        </picture>
        <div class="infoLivro">
            <h1>${livro.titulo}</h1>
            <div>
            <h2>Autor:</h2>
            <p>${livro.autor}</p>
            </div>
            <div>
                <h2>Editora:</h2>
                <p>${livro.editora}</p>
            </div>
            <div class="Publinas">
                <div>
                    <h2>Publicado:</h2>
                    <p>${livro.publicado}</p>
                </div>
                <div>
                    <h2>Páginas:</h2>
                    <p>${livro.paginas}</p>
                </div>
            </div>
            <a href="${livro.compra}" target="_blank"><button class="compraLivro">COMPRAR</button></a>
        </div>`
        
    const main = document.querySelector('main')
    main.classList.add('main')
    return card
}