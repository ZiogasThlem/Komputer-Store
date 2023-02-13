import {setBalance} from "./bank.js";

// HTML elements required passed to variables
const laptopMenu = document.getElementById("laptop-menu")
const featuresList = document.getElementById("laptop-features")
const laptopImage = document.getElementById("laptop-image")
const laptopDescription = document.getElementById("laptop-description")
const laptopPrice = document.getElementById("laptop-price")
const laptopTitle = document.getElementById("laptop-title")
const laptopStock = document.getElementById("laptop-stock")
const buyNowBtn = document.getElementById("buy-now");

// laptops array initialization
let laptops = []

// fetching data from the API
fetch("https://hickory-quilled-actress.glitch.me/computers")
  .then((response) => response.json())
  .then((data) => (laptops = data))
  .then((laptops) => addLaptopsToMenu(laptops))

// adding every individual laptop to the laptops array
const addLaptopsToMenu = (laptops) => {
  laptops.forEach((laptop) => addLaptopToMenu(laptop));

  // when initialized, the page shows the 
  //values of the first object of the laptops array 
  featuresList.innerHTML = laptops[0].specs;
  laptopPrice.innerHTML = parseInt(laptops[0].price);
  laptopTitle.innerHTML = laptops[0].title;
  laptopStock.innerHTML = parseInt(laptops[0].stock)
  laptopDescription.innerHTML = laptops[0].description;
  laptopImage.src = "https://hickory-quilled-actress.glitch.me/" + laptops[0].image;
}

// creating a laptop option element, and appending it to laptop menu select
const addLaptopToMenu = (laptop) => {
  const laptopElement = document.createElement("option");
  laptopElement.value = laptop.id;
  laptopElement.appendChild(document.createTextNode(laptop.title));
  laptopMenu.appendChild(laptopElement);
}

// applying the value of each time current laptop,
// and displaying it when a different laptop is selected
// through the EventListener 
const handleLaptopMenuChange = (event) => {
  const currentLaptop = laptops[event.target.selectedIndex];
  featuresList.innerHTML = currentLaptop.specs;
  laptopPrice.innerHTML = parseInt(currentLaptop.price);
  laptopStock.innerHTML = parseInt(currentLaptop.stock)
  laptopDescription.innerHTML = currentLaptop.description;
  laptopTitle.innerHTML = currentLaptop.title;

  laptopImage.src ="https://hickory-quilled-actress.glitch.me/" + currentLaptop.image;
}


const buyNow = () => {
  
  // declaring values needed to proceed for a laptop purchase
  const currentLaptop = laptops[laptopMenu.selectedIndex]
  const price = currentLaptop.price
  const title = currentLaptop.title
  const bankBalance = parseInt(document.getElementById("bank-balance").innerHTML)

  alert(`Prossessing your order...`)
  // condition for Bank Balance and laptop price comparison
  if (bankBalance >= price){

    // Bank Balance is enough to buy the selected laptp!. Laptop purchase
    // is complete, and Bank Balance is set accordingly
    setBalance(bankBalance - price)
    alert(`Congratulations on your new purchase! Happy coding with your fancy new ${title}!`)
  }
  else {

      // User doesn't have the required amount for their selected laptop
      // and is informed of the missing amount.
      alert(`Your balance is ${price-bankBalance}$ short to buy ${title}`)
  }  
}

// adding handleLaptopMenuChange and buyNow function to the EventListener
// linking them to laptopMenu select and buyNow button respectively
laptopMenu.addEventListener("change", handleLaptopMenuChange);
buyNowBtn.addEventListener("click",buyNow)
