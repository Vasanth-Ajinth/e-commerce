function sendData(btn) {
    const productDiv = btn.closest('.ima'); // Get the product div
    const imgSrc = productDiv.querySelector('img').getAttribute('src'); // Image source
    const productName = productDiv.querySelector('h3').innerText; // Product name
//   const price = productDiv.querySelector('H4').innerText;// Price
const price = productDiv.querySelector('H4').innerText.trim().replace(/[^0-9.]/g, ""); // Remove ₹ and non-numeric characters
// localStorage.setItem('price', price);

//  const prices=productDiv.querySelector('pricess').innerText;
// const prices=Document.querySelector('pricess').innerText;
//  const price=prices
// console.log(price)
    const buttonText = btn.innerText; // Button text
    
    
    // Store data in localStorage
    localStorage.setItem('imgSrc', imgSrc);
    localStorage.setItem('productName', productName);
    localStorage.setItem('price',price);
    localStorage.setItem('buttonText', buttonText);

    // Redirect to the next page
    window.location.href = '2.html';


}
