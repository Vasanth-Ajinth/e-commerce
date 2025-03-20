function sendData(btn) {
    const productDiv = btn.closest('.ima'); // Get the product div
    const imgSrc = productDiv.querySelector('img').getAttribute('src'); // Image source
    const productName = productDiv.querySelector('h3').innerText; // Product name
    const price = productDiv.querySelector('H4').innerText; // Price
    const buttonText = btn.innerText; // Button text
    
    // Store data in localStorage
    localStorage.setItem('imgSrc', imgSrc);
    localStorage.setItem('productName', productName);
    localStorage.setItem('price',1000);
    localStorage.setItem('buttonText', buttonText);

    // Redirect to the next page
    window.location.href = '2.html';


}
