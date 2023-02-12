import {setBalance} from "./bank.js";

const laptopMenu = document.getElementById("laptop-menu")
const featuresList = document.getElementById("laptop-features")
const laptopImage = document.getElementById("laptop-image")
const laptopDescriptionDiv = document.getElementById("laptop-description")
const laptopPriceDiv = document.getElementById("laptop-price")
const laptopTitle = document.getElementById("laptop-title")
const laptopStock = document.getElementById("laptop-stock")
const buyNowBtn = document.getElementById("buy-now");

let laptops = []

fetch("https://hickory-quilled-actress.glitch.me/computers")
  .then((response) => response.json())
  .then((data) => (laptops = data))
  .then((laptops) => addLaptopsToMenu(laptops))

const addLaptopsToMenu = (laptops) => {
  laptops.forEach((laptop) => addLaptopToMenu(laptop));
  featuresList.innerHTML = laptops[0].specs;
  laptopPriceDiv.innerHTML = parseInt(laptops[0].price);
  laptopTitle.innerHTML = laptops[0].title;
  laptopDescriptionDiv.innerHTML = laptops[0].description;
  laptopStock.innerHTML = laptops[0].stock;
  laptopImage.src = "https://hickory-quilled-actress.glitch.me/" + laptops[0].image;
}

const addLaptopToMenu = (laptop) => {
  const laptopElement = document.createElement("option");
  laptopElement.value = laptop.id;
  laptopElement.appendChild(document.createTextNode(laptop.title));
  laptopMenu.appendChild(laptopElement);
}

const handleLaptopMenuChange = (event) => {
  const currentLaptop = laptops[event.target.selectedIndex];
  featuresList.innerHTML = currentLaptop.specs;
  laptopPriceDiv.innerHTML = parseInt(currentLaptop.price);
  laptopDescriptionDiv.innerHTML = currentLaptop.description;
  laptopTitle.innerHTML = currentLaptop.title;
  laptopImage.src =
    "https://hickory-quilled-actress.glitch.me/" +
    currentLaptop.image;
  laptopStock.innerHTML = parseInt(currentLaptop.stock)
}

const buyNow = () => {
  const selectedLaptop = laptops[laptopMenu.selectedIndex]
  const price = selectedLaptop.price
  const title = selectedLaptop.title
  const balance = parseInt(document.getElementById("bank-balance").innerHTML)

  if (balance >= price){
    setBalance(balance - price)
    alert(`Congratulations on your new purchase! Happy coding with your fancy new ${title}!
    `)
  }
  else {
      alert(`Your balance is ${price-balance}$ short for ${title}`)
  }  
}

laptopMenu.addEventListener("change", handleLaptopMenuChange);
buyNowBtn.addEventListener("click",buyNow)
