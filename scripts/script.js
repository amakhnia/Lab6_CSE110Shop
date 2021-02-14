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

  const retrievedObject = localStorage.getItem('obj');
  const arr = JSON.parse(retrievedObject);


  function addingElements(value){
    console.log('obj: ', value);
    let curr = new ProductItem(value, false);
    document.getElementById('product-list').appendChild(curr);
  }

  
  arr.forEach(addingElements);


  

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
