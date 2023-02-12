const loanBtn = document.getElementById("loan-btn");
const repayLoanButton = document.getElementById("repay-btn");
// const bankBalanceElement = document.getElementById("bank-balance");
// const loanBalanceElement = document.getElementById("loan-balance");

export let bankBalance = parseInt(
  document.getElementById("bank-balance").innerHTML
);
export function setBalance(balance) {
  document.getElementById("bank-balance").innerHTML = balance;
}

export let currentLoan = parseInt(
  document.getElementById("loan-balance").innerHTML
);
export function setLoan(loan) {
  document.getElementById("loan-balance").innerHTML = loan;
}

const getNewLoan = () => {

  if (parseInt(document.getElementById("loan-balance").innerHTML) > 0) {
    alert(
      "You already have an outstanding loan. Pay it back first to be elgible for a new one."
    );
  } 
  else {
    const desiredLoan = parseInt(
      prompt("Please enter the amount you desire: ")
    );
    if (desiredLoan > 2 * document.getElementById("bank-balance").innerHTML) {
      alert(
        `Your balance is ${
          desiredLoan - 2 * document.getElementById("bank-balance").innerHTML
        }$ too short for the chosen loan.`
      );
    } else {
      alert(`${desiredLoan}$ have been added to your balance`);
      setLoan(
          parseInt(document.getElementById("loan-balance").innerHTML)
         + desiredLoan)
      ;
      repayLoanButton.disabled = false;
      setBalance(
        parseInt(document.getElementById("bank-balance").innerHTML) +
          desiredLoan
      );
    }
  }
};

loanBtn.addEventListener("click", getNewLoan);
