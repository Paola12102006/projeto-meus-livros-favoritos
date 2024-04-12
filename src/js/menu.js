const liMenu = document.querySelectorAll('.li-menu')

const listaLivrosAcotar = document.querySelectorAll('.livro.acotar')
const listaLivrosTog = document.querySelectorAll('.livro.tog')
const listaLivrosShatter = document.querySelectorAll('.livro.shatter')
const listaLivrosPovoAr = document.querySelectorAll('.livro.povo-ar')
const listaLivrosBridgertons = document.querySelectorAll('.livro.bridgertons')
const listaLivrosUnicos = document.querySelectorAll('.livro.livro-unico')

liMenu.forEach((li, i) => {
    
    li.addEventListener('click', () => {
        
        liMenu.forEach(li => {
            li.classList.remove('selecionado')
        })

        li.classList.add('selecionado')

        listaLivros.forEach(livro => {
            livro.classList.add('d-none')
        })

        if (i == 0 || i == 6) {
            listaLivrosAcotar.forEach(livro => {
                livro.classList.remove('d-none')
            })

        } 
        else if (i == 1 || i == 7) {
            listaLivrosTog.forEach(livro => {
                livro.classList.remove('d-none')
            })

        } 
        else if (i == 2 || i == 8) {
            listaLivrosShatter.forEach(livro => {
                livro.classList.remove('d-none')
            })

        } 
        else if (i == 3 || i == 9) {
            listaLivrosPovoAr.forEach(livro => {
                livro.classList.remove('d-none')
            })

        } 
        else if (i == 4 || i == 10) {
            listaLivrosBridgertons.forEach(livro => {
                livro.classList.remove('d-none')
            })

        } 
        else if (i == 5 || i == 11) {
            listaLivrosUnicos.forEach(livro => {
                livro.classList.remove('d-none')
            })
        }

    })

})