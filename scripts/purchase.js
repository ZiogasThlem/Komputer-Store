import {bankBalance, setBalance} from "./bank.js";
import {laptopPrice as price, laptopTitle as title} from "./store.js";

const buyNowBtn = document.getElementById("buy-now");
let balance = bankBalance

const buyNow = () => {
    if (balance >= price){
        balance -= price
        setBalance(balance)
        alert(`Congratulations your new purchase! Happy coding with ${title}`)
    }
    else alert(`Your balance is ${price-balance}$ short for ${title}`)
}

buyNowBtn.addEventListener("click",buyNow)