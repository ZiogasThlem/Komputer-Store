// document.createElement

const laptopMenu = document.getElementById("laptop-menu");
const featuresList = document.getElementById("laptop-features");
const laptopImage = document.getElementById("laptop-image");
const laptopTitle = document.getElementById("laptop-title");
const laptopDescriptionDiv = document.getElementById("laptop-description");
const laptopPriceDiv = document.getElementById("laptop-price");
const buyNowBtn = document.getElementById("buy-now");

let laptops = [];

fetch("https://hickory-quilled-actress.glitch.me/computers")
    .then(response => response.json())
    .then(data => laptops = data)
    .then(laptops => addLaptopsToMenu(laptops))

const addLaptopsToMenu  = (laptops) => {
    laptops.forEach(laptop => addLaptopToMenu(laptop));
}

const addLaptopToMenu = (laptop) => {
    const laptopElement = document.createElement("option");
    laptopElement.value = laptop.id;
    laptopElement.appendChild(document.createTextNode(laptop.title));
    laptopMenu.appendChild(laptopElement);
}

const handleLaptopMenuChange = event => {
    const currentLaptop = laptops[event.target.selectedIndex];
    featuresList.innerText = currentLaptop.price 
}

 


