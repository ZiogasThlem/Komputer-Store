// HTML elements required passed to variables
const loanBtn = document.getElementById("loan-btn");
const loanIndex = document.getElementById("loan-index");
const repayLoanButton = document.getElementById("repay-btn");

// implementing and exporting setter fucntion for Bank Balance
export const setBalance = (balance) =>
  (document.getElementById("bank-balance").innerHTML = balance);
// implementing and exporting setter fucntion for Loan Balance
export const setLoan = (loan) =>
  (document.getElementById("loan-balance").innerHTML = loan);


const getNewLoan = () => {

  // loan and bankBalance variable local initialization
  let loan = parseInt(document.getElementById("loan-balance").innerHTML);
  let bankBalance = parseInt(document.getElementById("bank-balance").innerHTML);

  // first condition check for positive balance value,
  //since one can't take a loan with 0 balance
  if (bankBalance > 0) {

    // second condition check for zero loan balance value, 
    // since one can't have more than one outstanding loan 
    if (loan === 0) {

      // desiredLoan input
      const desiredLoan = parseInt(prompt("Please enter the amount you desire: "));

      // making sure desiredLoan amount is valid since one can't 
      // take 0$ loan and desiredLoan must be a number
      if (isNaN(desiredLoan)) return alert('Action canceled')
      while (desiredLoan <= 0){
        desiredLoan = parseInt(prompt("Please enter a valid amount"));
      }

      // third condition for desired loan bank balance comparison
      if (desiredLoan > 2 * bankBalance) {
        alert(`Your balance is ${desiredLoan - 2 * bankBalance}$ too short for the chosen loan.`);
      }

      else {
        // user finally aquires their loan
        alert(`${desiredLoan}$ have been added to your balance`);

        // loan and bank balance values are set accordingly
        setLoan(loan + desiredLoan);
        setBalance(bankBalance + desiredLoan);

        //repay loan button and loan index are activated
        repayLoanButton.style.visibility = "visible";
        loanIndex.style.visibility = "visible"

      }
    } 
    // informing the user that they already have an outstanding loan that they need to pay
    else alert(`You already have an outstanding loan. Pay it back first to be elgible for a new one.`);
    
  }
  else {
    //informing the user that they can't take a loan with 0 Bank balance
    alert(`You don't have any balance left thus you can't take a loan`);
  }
};

// adding getNewLoan function to the EventListener
// linking it to Get a loan button
loanBtn.addEventListener("click", getNewLoan);
