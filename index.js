document.addEventListener('DOMContentLoaded'), () => {
    const squares = document.querySelectorAll('grid.div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('current-player')
    let currentPlayer = 1

    const winningArrays = {

    
    function :checkBoard() {
for ('let y=0; y< winningArrays.length; y++') {
    const square1 = squares(winningArrays[y][e])
}
    }


    for (let i=0; i < squares.length; i++ {
        squares[i].onclick = {} => {
     alert('You have clicked square' +1)

     //if the Square below your current square is taken, you can go on top of it
 if (square[i+7].classList.contains('taken')) {
  if (currentPlayer ==1) {
    squares[i].classList.add('taken')
    squares[i].classList.add('player-one')
    displayCurrentPlayer.innerHTML - currentPlayer
    if(currentPlayer == 2) {
        squares[i].classList.add('taken')
    squares[i].classList.add('player-one')
    displayCurrentPlayer.innerHTML - currentPlayer
    checkBoard()
    }