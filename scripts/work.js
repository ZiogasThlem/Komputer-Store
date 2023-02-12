import {currentLoan, bankBalance, setLoan, setBalance} from "./bank.js";

const bankButton = document.getElementById("bank-btn");
const workButton = document.getElementById("work-btn");
const repayLoanButton = document.getElementById("repay-loan");
const workBalanceElement = document.getElementById("work-balance");

let salary = 100;
let workBalance = parseInt(workBalanceElement.innerHTML);
let loan = currentLoan
let depositedBalance = bankBalance


const handleSalaryAddition = () => {
    workBalance += salary
    document.getElementById("work-balance").innerHTML = workBalance;
}

const handlePayLoanDose = () => {

    let transfer = parseInt(prompt("Enter your desired amount: "))
    if (loan>0){
        if (loan < (workBalance - workBalance*(10/100))){
            workBalance -= loan
            transfer = workBalance
            loan = 0
            setLoan(loan)
        }
        else{
            workBalance -= workBalance*(10/100);
            transfer -= transfer*(10/100)
            loan -= workBalance*(10/100);
            setLoan(loan)
        }
    }

    // condition for negative value of work balance
    depositedBalance += transfer
    setBalance(depositedBalance)
    workBalance -= transfer
    document.getElementById("work-balance").innerHTML = workBalance;
}

//this should only appear when loan > 0
const handleRepayLoan = () => {
    if (loan > workBalance){
        loan -= workBalance
        setLoan(loan)
        workBalance = 0    
        document.getElementById("work-balance").innerHTML = workBalance;
    }
    else{
        workBalance -= loan
        loan = 0
        setLoan(loan)
        depositedBalance += workBalance
        setBalance(depositedBalance)
        workBalance = 0
        document.getElementById("work-balance").innerHTML = workBalance;
    }
}

workButton.addEventListener("click", handleSalaryAddition)
bankButton.addEventListener("click", handlePayLoanDose)
repayLoanButton.addEventListener("click", handleRepayLoan)
