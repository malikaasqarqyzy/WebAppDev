function rollDice(){
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    dice1.classList.add('dice-spin');
    dice2.classList.add('dice-spin');
    setTimeout(function(){
        dice1.classList.remove('dice-spin');
        dice2.classList.remove('dice-spin');
        const dice1Value = Math.floor(Math.random() * 6) + 1;
        const dice2Value = Math.floor(Math.random() * 6) + 1;
        dice1.src = `images/dice${dice1Value}.png`;
        dice2.src = `images/dice${dice2Value}.png`;
        //Display Sum
        const sum = dice1Value + dice2Value;
        document.getElementById('sumDisplay').textContent = `Sum of Dice: ${sum}`;
        //Roll Counter
        if (!rollDice.counter) rollDice.counter = 0;
        rollDice.counter++;
        document.getElementById('rollCount').textContent = `Roll Count: ${rollDice.counter}`;
        //Winning Condition
        if(sum === 12){
            document.getElementById('winningMessage').textContent = "You've got DOUBLES!";
        }
        else if(dice1Value === dice2Value){
            document.getElementById('winningMessage').textContent = "You've won!";
        }
        else{
            document.getElementById('winningMessage').textContent = "You've lost!";
        }
    }, 500);
}