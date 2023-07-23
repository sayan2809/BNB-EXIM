let http = new XMLHttpRequest();
http.open('get', 'products.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";
      for(let item of products){
         output += `
            <div class="product ${item.category}">
               <img src="${item.image}" alt="${item.description}">
               <p class="title">${item.title}</p>
               <p class="category">${item.category}</p>
               <p class="description">${item.description}</p>
               <p class="quantity">${item.quantity}</p>
               <p class="price">
                  <span>${item.price}</span>
                  <span>$</span>
               </p>
               <a href="https://wa.me/919804972432/?text=Hi%20there,%20I%20would%20like%20to%20buy%20%0A%0A*${item.title}*%0A%0A_${item.category}_%0A%0A&#96;&#96;&#96;${item.description}&#96;&#96;&#96;%0A%0A*$${item.price}*" class="cart">Order Now<i class="bx bx-cart-alt"></i></a>
            </div>
         `;
      }
      document.querySelector(".products").innerHTML = output;
   }
}