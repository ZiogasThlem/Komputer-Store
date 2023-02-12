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
  if (parseInt(document.getElementById("bank-balance").innerHTML) === 0) {
    alert(`You don't have any balance left thus you can't take a loan`);
  } else {
    if (parseInt(document.getElementById("loan-balance").innerHTML) > 0) {
      alert(
        "You already have an outstanding loan. Pay it back first to be elgible for a new one."
      );
    } else {
      const desiredLoan = parseInt(
        prompt("Please enter the amount you desire: ")
      );

      if (desiredLoan > 2 * document.getElementById("bank-balance").innerHTML) {
        alert(
          `Your balance is ${
            desiredLoan - 2 * document.getElementById("bank-balance").innerHTML
          }$ too short for the chosen loan.`
        );
      } else if (desiredLoan === 0)
        alert(`You added 0$ to your balance. Yeah...`);
      else {
        alert(`${desiredLoan}$ have been added to your balance`);
        setLoan(
          parseInt(document.getElementById("loan-balance").innerHTML) +
            desiredLoan
        );

        setBalance(
          parseInt(document.getElementById("bank-balance").innerHTML) +
            desiredLoan
        );
        if (desiredLoan != 0) repayLoanButton.disabled = false;
      }
    }
  }
};

loanBtn.addEventListener("click", getNewLoan);
