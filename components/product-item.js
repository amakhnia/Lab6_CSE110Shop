// product-item.js

class ProductItem extends HTMLElement {
  // TODO
  constructor(product){
    super();
    
    let shadow = this.attachShadow({mode: 'open'});
    
    const wrap = document.createElement('li');
    wrap.className = 'product';

    const imageTag = document.createElement('img');
    imageTag.setAttribute('src', product.image);
    imageTag.setAttribute('alt', product.title);
    imageTag.setAttribute('width', 200);

    wrap.appendChild(imageTag);
    
    const classTitle = document.createElement('p');
    classTitle.className = 'title';
    classTitle.innerText = product.title;
    
    wrap.appendChild(classTitle);
    
    const classPrice = document.createElement('p');
    classPrice.className = 'price';
    classPrice.innerText = '$' + product.price;
    
    wrap.appendChild(classPrice);
    
    const button = document.createElement('button');
    var cart = JSON.parse(window.localStorage.getItem('cart'));
    var count = document.getElementById('cart-count');
    button.textContent = cart.includes(product) ? "Remove From Cart" : "Add To Cart";
    button.onclick = function(){
      if(button.textContent == "Add To Cart"){
        cart = JSON.parse(window.localStorage.getItem('cart'));
        button.textContent = "Remove From Cart";
        alert('Added To Cart!');
        count.textContent = parseInt(count.textContent) + 1;
        cart.push(product);
        window.localStorage.setItem('cart', JSON.stringify(cart));
      }
      else{ //if removing
        cart = JSON.parse(window.localStorage.getItem('cart'));
        button.textContent = "Add To Cart";
        alert('Removed From Cart!');
        count.textContent = parseInt(count.textContent) - 1;
        cart.splice(cart.indexOf(product), 1);
        window.localStorage.setItem('cart', JSON.stringify(cart));
        
      }

    //cart = JSON.parse(window.localStorage.getItem('cart'))
    }
    
    wrap.appendChild(button);
    
    const style = document.createElement('style');
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }

    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }

    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }

    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }

    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }

    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`

   shadow.appendChild(style);
   shadow.appendChild(wrap);
  }
}

customElements.define('product-item', ProductItem);