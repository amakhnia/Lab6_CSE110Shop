// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  //initializing objects and fetching from given api
  if(localstorage.getItem('obj') == NULL){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => localstorage.setItem('obj', JSON.stringify(data)) //convert between JSON object to string
    .then(addtoCart(cart));
  }
  //initializing cart
  if(localstorage.getItem('cart') == NULL){
    localstorage.setItem('cart', JSON.stringify(cart))
  }
  else{
    addtoCart()
  }
});
  
//adding to cart and counting  
function addtoCart(){
  
}
