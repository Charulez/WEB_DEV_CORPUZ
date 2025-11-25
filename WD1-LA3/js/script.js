// Array to store all products added to the cart
let cart = [];

// Get the element where cart items will be displayed
const cartItemsContainer = document.getElementById("cart-items");
// Get the element for the total price
const cartTotalText = document.getElementById("cart-total-text");

// Function to update the cart display and total
function renderCart() {
  // Clear the current content
  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    // Show empty cart message if no items
    cartItemsContainer.innerHTML =
      '<p class="text-muted">Your cart is empty.</p>';
  } else {
    // Loop through the cart array and create HTML elements
    cart.forEach((item, index) => {
      // Calculate total for this item (for multiple quantities)
      const itemTotal = item.price * item.quantity;
      total += itemTotal; // Add to overall total

      const cartItemDiv = document.createElement("div");
      cartItemDiv.className = "cart-item";

      // Item name and quantity
      const itemDetails = document.createElement("span");
      itemDetails.textContent = `${item.name} x${item.quantity}`;
      cartItemDiv.appendChild(itemDetails);

      // Price and remove button container
      const priceAndButton = document.createElement("div");

      const itemPriceSpan = document.createElement("span");
      // Use toFixed(2) to ensure a standard two-decimal price format, updated to use Peso (₱)
      itemPriceSpan.textContent = `₱${itemTotal.toFixed(2)}`;
      priceAndButton.appendChild(itemPriceSpan);

      // Remove button
      const removeButton = document.createElement("button");
      removeButton.className = "remove-btn";
      removeButton.textContent = "Remove";
      // Use the index of the item in the cart array for removal
      removeButton.onclick = () => removeFromCart(index);
      priceAndButton.appendChild(removeButton);

      cartItemDiv.appendChild(priceAndButton);
      cartItemsContainer.appendChild(cartItemDiv);
    });
  }

  // Update the total price display, updated to use Peso (₱)
  cartTotalText.textContent = `Total: ₱${total.toFixed(2)}`;
}

// Show alert and add product to cart
function addToCart(productName, productPrice) {
  // Check if the product is already in the cart
  const existingItem = cart.find((item) => item.name === productName);

  if (existingItem) {
    // If it exists, just increase the quantity
    existingItem.quantity += 1;
  } else {
    // If it's a new item, add it to the cart array
    cart.push({
      name: productName,
      price: productPrice, // productPrice is now passed from HTML
      quantity: 1,
    });
  }

  // Update the visual cart display
  renderCart();

  // Show alert
  alert(productName + " added to cart!");
}

// Function to remove an item from the cart based on its index
function removeFromCart(index) {
  // Remove the item from the cart array using splice
  cart.splice(index, 1);

  // Re-render the cart to update the display and total
  renderCart();
}

// Initial call to render the empty cart when the page loads
document.addEventListener("DOMContentLoaded", renderCart);
