import bankBalance from "./bank";
import {laptopPriceDiv as price, laptopTitle as title} from "./store";

const buyNowBtn = document.getElementById("buy-now");

const buyNow = () => {
    if (bankBalance >= price){
        bankBalance -= price
        alert(`Congratulations your new purchase! Happy coding with ${title}`)
    }
    else alert(`Your balance is ${price-bankBalance}$ short for ${title}`)
}

buyNowBtn.addEventListener("click",buyNow)