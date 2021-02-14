// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO 
  //initializing objects and fetching from given api
  let cart = [];
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

  const retrievedObject = localStorage.getItem('obj');
  const arr = JSON.parse(retrievedObject);


  function addingElements(value){
    console.log('obj: ', value);
    let curr = new ProductItem(value, false);
    document.getElementById('product-list').appendChild(curr);
  }

  function addingCartElements(){
      alert("initializing cart");
      //window.localStorage.setItem('cart')
      let cart = JSON.parse(window.localStorage.getItem('cart'));
      let count = document.getElementById('cart-count');
      if(cart.length > 20){
        window.localStorage.removeItem('cart');
        return;
      }
      count.textContent = cart.length;
      //for(let t in cart){
       // let stored = cart.includes(JSON.parse.window.localStorage.getItem('obj')[t].id.toString());
      //}
  }


  /*
  // our array
var movies = ["Reservoir Dogs", "Pulp Fiction", "Jackie Brown", 
"Kill Bill", "Death Proof", "Inglourious Basterds"];
 
// storing our array as a string
localStorage.setItem("quentinTarantino", JSON.stringify(movies));
 
// retrieving our data and converting it back into an array
var retrievedData = localStorage.getItem("quentinTarantino");
var movies2 = JSON.parse(retrievedData);
 
//making sure it still is an array
alert(movies2.length);
  
    1. create the cart array
    2. each time we add an element to the cart, store its name in the cart array and update the local storage
    3. each time we remove an element from the cart, remove its name from the cart array and update the local storage
    4. Each time we refresh the page (so in script.js), we need to update the cart number, and the element's buttons who are currently stored
  */ 
  
  arr.forEach(addingElements);

  
});
  
