// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  //initializing objects and fetching from given api
  if(localStorage.getItem('obj') == null){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => localStorage.setItem('obj', JSON.stringify(data))) //convert between JSON object to string
    .then(addtoCart(cart));
  }
  //initializing cart
  if(localStorage.getItem('cart') == null){
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  else{
    addtoCart()
  }
});
  
//adding to cart and counting  
function addtoCart(){
  
}
