const p1 = {
    score: 0,
    button:document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button:document.querySelector('#p2Button'),
    display: document.querySelector('p21Display')
}

const resetButton = document.querySelector('#reset');
const finalScoreSelect = document.querySelector('#playto');
let finalScore = 3;
let isGameOver= false;

function updateScore (player, opponent) {
    if (!isGameOver){
        player.score += 1;
        if(player.score === finalScore){
            isGameOver= true;
            player.classList.add('has-text-success');
            opponent.classList.add('has-text-danger');
            player.disabled = true;
            opponent.disabled = true;
        }
        player.display.textContent=player.score;

}




p1.button.addEventListener('click', function (){
    
  updateScore(p1,p2)
})

p2.button.addEventListener('click', function (){
  updateScore(p2,p1)
    });

    finalScoreSelect.addEventListener('change', function(){
       finalScore = parseInt(this.value);
       reset();
    })


    resetButton.addEventListener('click', reset)
      

function reset() {
    isGameOver= false;
    for (p of [p1,p2]){
        p.score = 0;
        p.display.textContent= 0;
        p.dispay.classList.remove('has-rext-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
