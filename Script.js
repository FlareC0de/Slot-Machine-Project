//1. Deposit money
//2. Find out the numbers of lines tpo bet
//3. Collect a bet amount
//4. Spin slot machine
//5.check if you won
//6. Give out winnings
//7.Play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNTS = { 
    A: 2,
    B: 4,
    C: 6,
    D: 8,
};

const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
};

const deposit = () =>{
    while(true){

        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
        
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again");
        } else {
            return numberDepositAmount;
        }
    }
};
const getNumberOfLines = () => {
    while(true){
    
        const lines = prompt("Enter the number of lines to bet(1-3): ");
        const numberOfLines = parseFloat(lines);
        
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invalid amount of lines, try again.");
        } else {
            return numberOfLines;
        }
    }
    
};

const getBetAmount = (balance, lines) => {
    while(true){
    
        const bet = prompt("Enter the amount for bet per line : ");
        const numberOfBets = parseFloat(bet);
        
        if(isNaN(numberOfBets) || numberOfBets <= 0 || numberOfBets > balance / lines){
            console.log("Invalid amount to bet with, try again.");
        } else {
            return numberOfBets;
            
        }
    }
    
};

const spin = () =>{
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNTS)){
        for(let i = 0; i < count; i++){
            symbols.push(symbol)
        }
    }

    const reels = [];
    for(let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for(let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbol[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);

        }
    }

    return reels;
}
const transpose = (reels) => {
    const rows = [];

    for(let i = 0; i < ROWS; i++){
        rows.push([]);
        for(let j = 0; j < COLS; j++){
            rows[i].push(reels([j][i]));
        }
    }
    return rows;
};

const printRows = (rows) => {
    for(const row of rows){
        let rowStrings = "";
        for(const[i, symbol] of row.entries()){
            rowStrings += symbol;
            if(i != row.length - 1){
                rowStrings += " | ";
            }
        }
        console.log(rowStrings);
    }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBetAmount(balance, numberOfLines);
const reels = spin();
printRows(rows);