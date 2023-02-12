import { setLoan, setBalance } from "./bank.js";

const bankButton = document.getElementById("bank-btn");
const workButton = document.getElementById("work-btn");
const repayLoanButton = document.getElementById("repay-btn");
const workBalanceElement = document.getElementById("work-balance");

let workBalance = parseInt(workBalanceElement.innerHTML);

const handleSalaryAddition = () => {
  workBalance += 100;
  document.getElementById("work-balance").innerHTML = workBalance;
};

const handleMakeDeposit = () => {
  let loan = parseInt(document.getElementById("loan-balance").innerHTML);
  let depositedBalance = parseInt(
    document.getElementById("bank-balance").innerHTML
  );

  let transfer = parseInt(prompt("Enter your desired amount: "));
  while (transfer > workBalance) {
    transfer = parseInt(
      prompt(
        `Your balance is ${
          transfer - workBalance
        } short for the amount you entered. Please select a lower amount : `
      )
    );
  }
  if (loan > 0) {
    if (loan < workBalance - workBalance * (10 / 100)) {
      workBalance -= loan;
      transfer = workBalance;
      setLoan(0);
      repayLoanButton.disabled = true;
      alert(`Your loan is paid off!`);
    } else {
      loan -= workBalance * (10 / 100);
      alert(
        `${workBalance * (10 / 100)}$ have been transfered to the loan payment.`
      );
      workBalance -= workBalance * (10 / 100);
      transfer -= transfer * (10 / 100);
      setLoan(loan);
    }
  }

  depositedBalance += transfer;
  setBalance(depositedBalance);
  workBalance -= transfer;
  document.getElementById("work-balance").innerHTML = workBalance;
  alert(`${transfer}$ have been trasfered to your bank account.`);
};

const handleRepayLoan = () => {
  let loan = parseInt(document.getElementById("loan-balance").innerHTML);
  let depositedBalance = parseInt(
    document.getElementById("bank-balance").innerHTML
  );

  if (loan >= workBalance) {
    loan -= workBalance;
    setLoan(loan);
    workBalance = 0;
    document.getElementById("work-balance").innerHTML = workBalance;
  } else {
    workBalance -= loan;
    setLoan(0);
    alert(`Your loan is paid off!`);
    repayLoanButton.disabled = true;
    depositedBalance += workBalance;
    setBalance(depositedBalance);
    workBalance = 0;
    document.getElementById("work-balance").innerHTML = workBalance;
  }
};

workButton.addEventListener("click", handleSalaryAddition);
bankButton.addEventListener("click", handleMakeDeposit);
repayLoanButton.addEventListener("click", handleRepayLoan);
