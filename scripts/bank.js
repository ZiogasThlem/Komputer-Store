const loanBtn = document.getElementById("loan");
const bankBalanceElement = document.getElementById("bank-balance");

let bankBalance = 0;
let currentLoan = 0;

const getNewLoan = () => {
  if (currentLoan > 0)
    alert(
      "You already have an outstanding loan. Pay it back first to be elgible for a new one."
    );
  const desiredLoan = prompt("Please enter the amount you desire: ");
  if (desiredLoan > 2 * bankBalance){
    alert(
      `Your balance is ${
        desiredLoan > 2 * bankBalance
      }$ too short for the chosen loan.`
    )
    }
    else alert(`${desiredLoan}$ have been added to your balance`)
};

loanBtn.addEventListener("click",getNewLoan)
