let money = 250;

document.body.addEventListener('keydown', (event) => {
if (event.key === 'r') {
  playGame('Red');
} else if (event.key === 'b') {
  playGame('Black');
} else if (event.key === 'g') {
  playGame('Green');
}
});

function allIn(){
    document.querySelector(".bet").value = money
}

function resetMoney() {
    money = 250;
}

async function spin(spinNumber) {
    const ball = document.getElementById('ball');
    ball.classList.add('ballspin' + spinNumber);

    const roulette = document.getElementById('roulette-center');
    roulette.classList.add('roulettespin');

    await new Promise(resolve => setTimeout(resolve, 6500));

    ball.classList.remove('ballspin' + spinNumber)
    roulette.classList.remove('roulettespin');
}

function updateMoneyDisplay() {
    document.querySelector('.money').textContent = 'Peníze: ' + money + ' Kč';
}

function updateBet() {
    let betInput = document.querySelector('.bet').value;
    if (isNaN(betInput) || betInput <= 0) {
        betInput = '';  
    }
    document.querySelector('.bet').value = betInput;
}

function updateNum() {
    let numInput = document.querySelector('.num').value;
    if (isNaN(numInput) || numInput < 0 || numInput > 36) {
    numInput = '';  
    }
    document.querySelector('.num').value = numInput;
}

function rouletteNum() {
    let randomCorrectNum = Math.random();
    if (randomCorrectNum < 1 / 37) {
        correctNum = 0
    } else if (randomCorrectNum >= 1 / 37 && randomCorrectNum < 2 / 37) {
        correctNum = 1
    } else if (randomCorrectNum >= 2 / 37 && randomCorrectNum < 3 / 37) {
        correctNum = 2
    } else if (randomCorrectNum >= 3 / 37 && randomCorrectNum < 4 / 37) {
        correctNum = 3
    } else if (randomCorrectNum >= 4 / 37 && randomCorrectNum < 5 / 37) {
        correctNum = 4
    } else if (randomCorrectNum >= 5 / 37 && randomCorrectNum < 6 / 37) {
        correctNum = 5
    } else if (randomCorrectNum >= 6 / 37 && randomCorrectNum < 7 / 37) {
        correctNum = 6
    } else if (randomCorrectNum >= 7 / 37 && randomCorrectNum < 8 / 37) {
        correctNum = 7
    } else if (randomCorrectNum >= 8 / 37 && randomCorrectNum < 9 / 37) {
        correctNum = 8
    } else if (randomCorrectNum >= 9 / 37 && randomCorrectNum < 10 / 37) {
        correctNum = 9
    } else if (randomCorrectNum >= 10 / 37 && randomCorrectNum < 11 / 37) {
        correctNum = 10
    } else if (randomCorrectNum >= 11 / 37 && randomCorrectNum < 12 / 37) {
        correctNum = 11
    } else if (randomCorrectNum >= 12 / 37 && randomCorrectNum < 13 / 37) {
        correctNum = 12
    } else if (randomCorrectNum >= 13 / 37 && randomCorrectNum < 14 / 37) {
        correctNum = 13
    } else if (randomCorrectNum >= 14 / 37 && randomCorrectNum < 15 / 37) {
        correctNum = 14
    } else if (randomCorrectNum >= 15 / 37 && randomCorrectNum < 16 / 37) {
        correctNum = 15
    } else if (randomCorrectNum >= 16 / 37 && randomCorrectNum < 17 / 37) {
        correctNum = 16
    } else if (randomCorrectNum >= 17 / 37 && randomCorrectNum < 18 / 37) {
        correctNum = 17
    } else if (randomCorrectNum >= 18 / 37 && randomCorrectNum < 19 / 37) {
        correctNum = 18
    } else if (randomCorrectNum >= 19 / 37 && randomCorrectNum < 20 / 37) {
        correctNum = 19
    } else if (randomCorrectNum >= 20 / 37 && randomCorrectNum < 21 / 37) {
        correctNum = 20
    } else if (randomCorrectNum >= 21 / 37 && randomCorrectNum < 22 / 37) {
        correctNum = 21
    } else if (randomCorrectNum >= 22 / 37 && randomCorrectNum < 23 / 37) {
        correctNum = 22
    } else if (randomCorrectNum >= 23 / 37 && randomCorrectNum < 24 / 37) {
        correctNum = 23
    } else if (randomCorrectNum >= 24 / 37 && randomCorrectNum < 25 / 37) {
        correctNum = 24
    } else if (randomCorrectNum >= 25 / 37 && randomCorrectNum < 26 / 37) {
        correctNum = 25
    } else if (randomCorrectNum >= 26 / 37 && randomCorrectNum < 27 / 37) {
        correctNum = 26
    } else if (randomCorrectNum >= 27 / 37 && randomCorrectNum < 28 / 37) {
        correctNum = 27
    } else if (randomCorrectNum >= 28 / 37 && randomCorrectNum < 29 / 37) {
        correctNum = 28
    } else if (randomCorrectNum >= 29 / 37 && randomCorrectNum < 30 / 37) {
        correctNum = 29
    } else if (randomCorrectNum >= 30 / 37 && randomCorrectNum < 31 / 37) {
        correctNum = 30
    } else if (randomCorrectNum >= 31 / 37 && randomCorrectNum < 32 / 37) {
        correctNum = 31
    } else if (randomCorrectNum >= 32 / 37 && randomCorrectNum < 33 / 37) {
        correctNum = 32
    } else if (randomCorrectNum >= 33 / 37 && randomCorrectNum < 34 / 37) {
        correctNum = 33
    } else if (randomCorrectNum >= 34 / 37 && randomCorrectNum < 35 / 37) {
        correctNum = 34
    } else if (randomCorrectNum >= 35 / 37 && randomCorrectNum < 36 / 37) {
        correctNum = 35
    } else if (randomCorrectNum >= 36 / 37 && randomCorrectNum < 37 / 37) {
        correctNum = 36
    }

    let spinNumber = correctNum;
    spin(spinNumber);
    
    return correctNum;
}

function playGame(playerMove) {
    const redNums = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
    const blackNums = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
    const greenNums = [0];
        
    if (money <= 0) {
        document.getElementById('game-status').textContent = "Už nemáte žádné peníze!";
        return; 
    };

    let bet = parseInt(document.querySelector('.bet').value);
    let num = document.querySelector('.num').value;

    if (bet <= money){
        let correctNum = rouletteNum();
    }

    if (bet === money) {
        document.getElementById('game-status').textContent = "Sázíte vše, odvážné!";
    }

    if (isNaN(bet) || bet <= 0) {
        document.getElementById('game-status').textContent = "Prosím zadejte platnou částku.";
        return;
    }

    if (bet > money) {
        document.getElementById('game-status').textContent = "Nemůžete vsadit více než to, co máte."; 
        return;
    }
    
    let result = '';
    correctColor = "";

    if (redNums.includes(correctNum)) {
        correctColor = "Red";
    } else if (blackNums.includes(correctNum)) {
        correctColor = "Black";
    } else if (greenNums.includes(correctNum)) {
        correctColor = "Green";
    }

    if (playerMove === correctColor) {
        result = 'Correct';
    } else {
        result = 'Incorrect';
    }

    setTimeout(() => {
    resultShow(playerMove, correctColor, num, correctNum);
    calculateMoney(result, bet, playerMove, num); 

    console.log("************************")
    console.log("Sázka: " + bet) 
    console.log("Vaše barva: " + playerMove)
    console.log("Vylosovaná barva: " + correctColor)
    console.log("Vaše číslo: " + num)
    console.log("Vylosované číslo: " + correctNum);

    }, 6500);
}

function resultShow(playerMove, correctColor, num, correctNum) {
    msg = ""

    if (num && num == correctNum) {
        msg = " a číslo jste uhodli";
    } else if (!num) {
        msg = ""
    } else{
        msg = " a číslo jste neuhodli";
    }

    if (playerMove === correctColor) {
        document.getElementById('game-status').textContent = "Vyhráli jste" + msg + "!"; 
    } else {
        document.getElementById('game-status').textContent = "Prohráli jste" + msg + "!"; 
    }
}

function calculateMoney(result, bet, playerMove, num) {
    if (result === 'Correct') {
        if (playerMove === 'Green') {
            money += bet * 35;  
        } else {
            money += bet * 2;  
        }
    } else if (result === 'Incorrect') {
        money -= bet; 
    }
    if (num && num >= 0 && num <= 36) {
        if (parseInt(num) === correctNum) {
            money += bet * 35;
        } else {
        money -= bet;
        }
    }
    
    updateMoneyDisplay();

    if (money <= 0) {
        document.getElementById('game-status').textContent = "Už nemáte žádné peníze.";
    }
}
document.getElementById('game-status').textContent = 'Zde se zobrazí zprávy.'
