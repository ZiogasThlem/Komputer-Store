const buyNowBtn = document.getElementById("buy-now");

// to be replaced with actual values from modules
let price = 1000
let bankBalance = 500
let title = ""

const buyNow = () => {
    if (bankBalance >= price){
        bankBalance -= price
        alert(`Congratulations your new purchase! Happy coding with ${title}`)
    }
    else alert(`Your balance is ${price-bankBalance}$ short for ${title}`)
}

buyNowBtn.addEventListener("click",buyNow)