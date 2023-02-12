const loanBtn = document.getElementById("loan-btn");
const bankBalanceElement = document.getElementById("bank-balance");
const loanBalanceElement = document.getElementById("loan-balance");

export let bankBalance = parseInt(bankBalanceElement.innerHTML);
export function setBalance(balance) {
  document.getElementById("bank-balance").innerHTML = balance;
}

export let currentLoan = parseInt(loanBalanceElement.innerHTML);
export function setLoan(loan) {
  document.getElementById("loan-balance").innerHTML = loan;
}

const getNewLoan = () => {
  if (currentLoan > 0) {
    alert(
      "You already have an outstanding loan. Pay it back first to be elgible for a new one."
    );
  } else {
    const desiredLoan = parseInt(
      prompt("Please enter the amount you desire: ")
    );
    if (desiredLoan > 2 * bankBalance) {
      alert(
        `Your balance is ${
          desiredLoan - 2 * bankBalance
        }$ too short for the chosen loan.`
      );
    } else {

      alert(`${desiredLoan}$ have been added to your balance`);
      setLoan(desiredLoan);
      bankBalance += desiredLoan;
      setBalance(bankBalance)
    }
  }
};

loanBtn.addEventListener("click", getNewLoan);
