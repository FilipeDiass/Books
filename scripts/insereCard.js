import criaCardLivro from "./criaObjetoLivro.js"

export default function cardLivro(infoLivro){
    const livro = criaObjeto(infoLivro)
    const card = criaCardLivro(livro)   

    const containerCards = document.querySelector('#containerCards')
    containerCards.innerHTML = ""
    containerCards.appendChild(card)    
}

function criaObjeto(infoLivro){
    class Livro{
        constructor(titulo, autor, publicado, paginas, imagem, editora, compra){
            this.titulo = titulo
            this.autor = autor
            this.publicado = publicado
            this.paginas = paginas
            this.imagem = imagem
            this.editora = editora
            this.compra = compra
        }
    }

    const titulo = infoLivro.title
    const autor = infoLivro.authors ? infoLivro.authors.join(', ') : 'Autor desconhecido';
    const publicado = infoLivro.publishedDate || 'Data desconhecida'
    const paginas = infoLivro.pageCount
    const imagem = infoLivro.imageLinks ? infoLivro.imageLinks.thumbnail : 'Sem imagem';
    const editora = infoLivro.publisher || 'Editora desconhecida';
    const compra = infoLivro.canonicalVolumeLink || alert('Livro não disponível para a compra.');
    
    const livro = new Livro(titulo, autor, publicado, paginas, imagem, editora, compra);
    return livro
}
