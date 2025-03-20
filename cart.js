function addToCart(btn) {
    const productDiv = btn.closest('.ima'); // Get product div
    const imgSrc = productDiv.querySelector('img').getAttribute('src'); // Image
    const productName = productDiv.querySelector('h3').innerText; // Name
    const price = productDiv.querySelector('h4').innerText; // Price
    
    // Create product object
    const product = {
        imgSrc: imgSrc,
        productName: productName,
        price: price
    };

    // Get the cart from localStorage (if it exists)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    cart.push(product);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Product added to cart!');
}
