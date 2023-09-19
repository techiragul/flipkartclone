let cartValue = 0;
let message = "";

const productNames = [
  "fastrack m700",
  "Fuber",
  "El Cielo",
  "oneplus",
  "Trimmer",
  "laptop bag",
  "Led TV",
  "Canon camera",
];
const prices = [700, 489, 1000, 17893, 750, 550, 55000, 25000];
const pairs = [
  "fastrack m700 : 700₹",
  "Fuber : 489₹",
  "El Cielo : 1000₹",
  "oneplus : 17893₹",
  "Trimmer : 750₹",
  "laptop bag : 550₹",
  "Led TV : 55000₹",
  "Canon camera : 25000₹",
];
// console.log(cartButton);
cartEl = document.getElementById("cart-El");
function updateCart(x) {
  console.log(x);
  cartValue = cartValue + prices[x];
  message = "" + message + productNames[x] + " : " + prices[x] + "₹" + "\n";
  document.getElementById("addtocart-btn" + x).style.display = "none";
  document.getElementById("remove-btn" + x).style.display = "block";
  // document.getElementById("addtocart-btn" + x).style.display = "none";
}
function removeCart(x) {
  cartValue = cartValue - prices[x];
  message = message.replace(pairs[x], "");
  document.getElementById("remove-btn" + x).style.display = "none";
  document.getElementById("addtocart-btn" + x).style.display = "block";
}
function displayCart() {
  document.getElementById("cart-El").style.display = "block";
  carttxtEl.innerHTML = message + "\nTotal : " + cartValue + "₹";
}
