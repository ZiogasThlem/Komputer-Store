import { currentLoan as loan, bankBalance } from "./bank";

const bankButton = document.getElementById("bank-btn");
const workButton = document.getElementById("work-btn");
const repayLoanButton = document.getElementById("repay-loan");
const workBalanceElement = document.getElementById("work-balance");

let salary = 100;
let workBalance = parseInt(workBalanceElement.innerHTML);

const handleSalaryAddition = () => {
    workBalance += salary
    document.getElementById("work-balance").innerHTML = workBalance;
}

const handlePayLoanDose = () => {
    if (loan < (workBalance - workBalance*(10/100))){
        workBalance -= loan;
        loan = 0;
    }
    else{
        workBalance -= workBalance*(10/100);
         loan -= workBalance*(10/100);
    }

    let transfer = prompt("Enter your desired amount: ");
    bankBalance += transfer;
    workBalance -= transfer;
}

const handleRepayLoan = () => {

    if (loan > workBalance){
        loan -= workBalance;
        workBalance = 0
    }
    else{
        workBalance -= loan
        loan = 0
        bankBalance += workBalance
    }
}


workButton.addEventListener("click", handleSalaryAddition);
bankButton.addEventListener("click", handlePayLoanDose);
repayLoanButton.addEventListener("click", handleRepayLoan);