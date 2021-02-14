// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO 
  //initializing objects and fetching from given api
  let cart = [];

   async function fetcher(){
    return fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => window.localStorage.setItem('obj', JSON.stringify(data))); //convert between JSON object to string
    
  }

  async function call(){
    const json = await fetcher();  // command waits until completion
    console.log("finished loading pictures");
  }

  call();

  if(window.localStorage.getItem('obj') == null){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => window.localStorage.setItem('obj', JSON.stringify(data))); //convert between JSON object to string
  }

  //initializing cart
  if(window.localStorage.getItem('cart') == null){
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }
  else{
    addingCartElements();
  }

  const retrievedObject = window.localStorage.getItem('obj');
  const arr = JSON.parse(retrievedObject);

  function addingElements(value){
    console.log('obj: ', value);
    let curr = new ProductItem(value, false);
    document.getElementById('product-list').appendChild(curr);
  }

  arr.forEach(addingElements);

  function addingCartElements(){
      //alert("initializing cart");
      //window.localStorage.setItem('cart')
      let cart = JSON.parse(window.localStorage.getItem('cart'));
      let count = document.getElementById('cart-count');
      if(cart.length > 20){
        window.localStorage.removeItem('cart');
        return;
      }
      count.textContent = cart.length;
  }

  
});
  
