// Show alert when product is added to cart
function addToCart(productName) {
  alert(productName + " added to cart!");
}

// Show alert when product is removed
function removeFromCart(productName) {
  alert(productName + " removed from cart!");
}

// Show alert when contact form is submitted
function sendMessage() {
  alert("Message Sent!");
  // Optional: reset the form after submission
  document.querySelector("form").reset();
}
