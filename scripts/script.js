// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO 
  //initializing objects and fetching from given api
  let cart = [];
  if(window.localStorage.getItem('obj') == null){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => window.localStorage.setItem('obj', JSON.stringify(data))); //convert between JSON object to string
   // .then(addtoCart(cart));
  }

  let retrievedObject = localStorage.getItem('obj');

  function addingElements(value){
    console.log('obj: ', value);
  }


  retrievedObject.forEach(addingElements);

  
  

  //initializing cart
  if(window.localStorage.getItem('cart') == null){
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }
  else{
    addtoCart();
  }
});
  
//adding to cart and counting  
function addtoCart(){
  
}
