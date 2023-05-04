var colors = ["blue", "red", "violet", "pink", "black", "brown", "aqua", "magenta", "tan"]

let allCells = document.querySelectorAll('.cell')

Array.from(allCells).forEach((c, index) => {
    c.style.backgroundColor = colors[index]
})

let shuffleBtn = document.getElementById('shuffleBtn')
shuffleBtn.addEventListener('click', (e) => {
    let currentIndex = allCells.length
    while(currentIndex != 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        allCells[currentIndex].textContent = randomIndex
    }
})

let sortBtn = document.getElementById('sortBtn')
sortBtn.addEventListener('click', (e) => {
    allCells.forEach((c, index) => {
        allCells[index].textContent = index + 1
    })
})