const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const btn = document.querySelector('#btn')
const button = document.querySelector('#button')
const botao = document.querySelector('#botao')

btn.addEventListener('click', function (){
    const div = document.querySelector('.card-ingredientes-recipe ul')
    if(div.style.display === 'none') {
        div.style.display = 'block'
    } else { 
        div.style.display = 'none'
    }
})

button.addEventListener('click', function (){
    const div = document.querySelector('.card-preparacao-recipe ul')
    if(div.style.display === 'none') {
        div.style.display = 'block'
    } else { 
        div.style.display = 'none'
    }
})

botao.addEventListener('click', function (){
    const div = document.querySelector('.card-add-info p')
    if(div.style.display === 'none') {
        div.style.display = 'block'
    } else { 
        div.style.display = 'none'
    }
})

// for (let card of cards) {
//     card.addEventListener('click', function(){
//         const recipeId = card.getAttribute('id')
//         window.location.href = `/recipe/${recipeId}`
//     })
// }

