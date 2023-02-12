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
  let loan = parseInt(document.getElementById("loan-balance").innerHTML);
  let depositedBalance = parseInt(
    document.getElementById("bank-balance").innerHTML
  );
  
  if (depositedBalance === 0) {
    alert(`You don't have any balance left thus you can't take a loan`);
  } else {
    if (loan > 0) {
      alert(
        "You already have an outstanding loan. Pay it back first to be elgible for a new one."
      );
    } else {
      const desiredLoan = parseInt(
        prompt("Please enter the amount you desire: ")
      );

      if (desiredLoan > 2 * depositedBalance) {
        alert(
          `Your balance is ${
            desiredLoan - 2 * depositedBalance
          }$ too short for the chosen loan.`
        );
      } else if (desiredLoan === 0)
        alert(`You added 0$ to your balance. Yeah...`);
      else {
        alert(`${desiredLoan}$ have been added to your balance`);
        setLoan(
          loan +
            desiredLoan
        );

        setBalance(
          depositedBalance +
            desiredLoan
        );
        if (desiredLoan != 0) repayLoanButton.disabled = false;
      }
    }
  }
};

loanBtn.addEventListener("click", getNewLoan);
