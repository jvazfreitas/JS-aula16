let cart = [];

// Function to add items to the cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    cartItems.innerHTML = ''; // Clear previous items
    let total = 0;

    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(div);
        total += item.price;
    });

    totalPriceElement.textContent = total.toFixed(2);
}

// Function to open the cart modal
function openCart() {
    document.getElementById('cartModal').style.display = 'block';
}

// Function to close the cart modal
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCart();
}
