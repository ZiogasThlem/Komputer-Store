import { setLoan, setBalance } from "./bank.js";

// HTML elements required passed to variables
const bankButton = document.getElementById("bank-btn");
const workButton = document.getElementById("work-btn");
const repayLoanButton = document.getElementById("repay-btn");
const workBalanceElement = document.getElementById("work-balance");
const loanIndex = document.getElementById("loan-index");

let workBalance = parseInt(workBalanceElement.innerHTML);

const handleSalaryAddition = () => {

  // adding 100 to the workBalance value
  workBalance += 100;
  document.getElementById("work-balance").innerHTML = workBalance;
};

const handleMakeDeposit = () => {

  // loan and bankBalance variable local initialization
  let loan = parseInt(document.getElementById("loan-balance").innerHTML);
  let bankBalance = parseInt(document.getElementById("bank-balance").innerHTML);

  // condition for positive work balance
  if (workBalance > 0) {
    // transfer amount input
    let transfer = parseInt(prompt("Enter your desired amount: "));

    // making sure transfer amount is valid since one can't transfer a higher 
    // amount than that of their balance and transfer must be a number
    if (isNaN(transfer)) return alert('Action canceled')
    while ((transfer > workBalance) || (transfer<=0)) {
      transfer = parseInt(prompt("Please enter a valid amount"));
    }

    // transfer value is subtracted from the work balance
    workBalance -= transfer;
    document.getElementById("work-balance").innerHTML = workBalance;

    // condition for possitive loan value, since transfer value 
    // is altered when there is an outstanding loan
    if (loan > 0) {

      // if loan is less than 10% than the work balance,
      // only that amount is subtracted from the work balance
      // ex: loan is 50$ and transfer is 1000$, but 10% of the
      // transfer is 100$ that is more than the value of the loan
      if (loan <= transfer * (10 / 100)) {
        // adjusting loan and transfe values accordingly
        transfer -= loan;
        setLoan(0);
        alert(`Your loan is paid off!`);
        // since loan is set to 0, thus paid back fully, 
        // repay loan button and loan index are again hidden
        repayLoanButton.style.visibility = "hidden";
        loanIndex.style.visibility = "hidden"
      }
      // subtracting 10% from the transfer value and setting it to the loan
      else {
        // adjusting loan and transfe values accordingly
        loan -= transfer * (10 / 100);
        alert(`${transfer * (10 / 100)}$ have been transfered to the loan payment.`);
        transfer *= (90 / 100);
        setLoan(loan);
      }
    }
    // deposit went through; adjusting the bank balance value accordingly
    // and informing the user of the transfered amount
    bankBalance += transfer;
    setBalance(bankBalance);
    alert(`${transfer}$ have been trasfered to your bank account.`);
  }
  else {
    // informing the user of their lack of funds
    alert(`You don't have any balance left to deposit...`)
  }
};

const handleRepayLoan = () => {

  // loan and bankBalance variable local initialization
  let loan = parseInt(document.getElementById("loan-balance").innerHTML);
  let bankBalance = parseInt(document.getElementById("bank-balance").innerHTML);

  // condition for loan and work balance comparison
  // if loan is greater than or equal to work balance,
  // the whole work balance amount is transfered to the loan
  if (loan > workBalance) {

    // user can't repay their loan with no work balance
    if (workBalance === 0) {
      alert(`Add balance to your wallet before trying to repay your loan.`);
    }
    else {
      // adjusting loan and work balance values accordingly
      loan -= workBalance;
      alert(`${workBalance}$ have been transfered to the loan payment.`)
      setLoan(loan);
      workBalance = 0;
      document.getElementById("work-balance").innerHTML = workBalance;
    }
  }
  // if not, the remaining amount is tranfered to the bank balance instead
  else {
    // adjusting loan and work balance values accordingly
    workBalance -= loan;
    setLoan(0);
    // since loan is set to 0, thus paid back fully, 
    // repay loan button and loan index are again hidden
    alert(`Your loan is paid off!`);
    repayLoanButton.style.visibility = "hidden";
    loanIndex.style.visibility = "hidden"

    // finally, transfering the remaining amount of work balance to bank balance
    if (workBalance > 0) {
      alert(`${workBalance}$ have been transfered to your Bank balance`)
    }
    // adjusting bank balance and work balance accordingly
    bankBalance += workBalance;
    setBalance(bankBalance);
    workBalance = 0;
    document.getElementById("work-balance").innerHTML = workBalance;
  }
  
};

// adding handleSalaryAddition, handleMakeDeposit and handleRepayLoan
// functions to the EventListener and linkingthem to workButton,
// bankButton and repayLoanButton button respectively
workButton.addEventListener("click", handleSalaryAddition);
bankButton.addEventListener("click", handleMakeDeposit);
repayLoanButton.addEventListener("click", handleRepayLoan);
