const createColor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
const btn = document.querySelector('.btn')
const elBox = document.querySelector('.box')
let color = '#'

function colorFnc() {
    for(let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * createColor.length)
        color += createColor[num]
    }
    elBox.style.backgroundColor = color
    elBox.textContent = color
    color = '#'
    return 0
}

btn.addEventListener('click', colorFnc)
