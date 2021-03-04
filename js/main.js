

// Create a variables for greeting message
const greeting = "Hi ",
  name = "Kate,",
  message = " please check your order";

let welcome = greeting + name + message;

// create a variables where will be information about table
let sign = "Global";
let tiles = sign.length;
let subTotal = tiles * 5;
let shipping = 7;
let grandTotal = subTotal + shipping;

//get element with id greeting
let el = document.getElementById("greeting");
//replace it with a personalized message
el.textContent = welcome;

let elSign = document.getElementById("userSign");
elSign.textContent = sign;

let elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

let elSubTotal = document.getElementById("subTotal");
elSubTotal.textContent = subTotal + "$";

let elShipping = document.getElementById("shipping");
elShipping.textContent = shipping + "$";

let elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = grandTotal + "$";
