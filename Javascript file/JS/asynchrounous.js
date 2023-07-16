
// consume to product APIs
// fetch requ.......

let fetchProduct= async() =>{
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(resp => resp.json())
    .then(resp => console.log("Prodct:",resp))
}

let fetchCategorise= async() =>{
    fetch("https://api.escuelajs.co/api/v1/categories")
    .then(resp => resp.json())
    .then(resp => console.log("Categories:",resp))
}

let fetchUser= async() =>{
    fetch("https://api.escuelajs.co/api/v1/users")
    .then(resp => resp.json())
    .then(resp => console.log("User:",resp))
}
// called funtion

fetchProduct()
fetchCategorise()
fetchUser()


let cards='';
// Products
fetch("https://api.escuelajs.co/api/v1/products")
.then(Response => Response.json())
// .then(resp => console.log(resp));
.then(resp => resp.map(show_product => {
    cards+=`
    <div class="col-12 col-md-3 col-xl-3">
    <div class="card mt-2">
        <img class="card-img-top" src="${show_product.images[0]}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">ID       : ${show_product.category.id}</p>
          <p class="card-text">Category : ${show_product.category.name[0]}</p>
          <p class="card-text">${show_product.title}</p>
          <p class="card-text">${show_product.price}$</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>  
    `;
    document.querySelector(".row").innerHTML=cards;
       
}));

// categoires part 
fetch("https://api.escuelajs.co/api/v1/categories")
.then(Response => Response.json())
// .then(resp => console.log(resp));
.then(resp => resp.map(show_product => {
    cards+=`
    <div class="col-12 col-md-3 col-xl-4">
    <div class="card mt-2">
        <img class="card-img-top" src="${show_product.images[0]}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">ID       : ${show_product.category.id}</p>
          <p class="card-text">Category : ${show_product.category.name[0]}</p>
          <p class="card-text">${show_product.title}</p>
          <p class="card-text">${show_product.price}$</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>  
    `;
    document.querySelector(".row").innerHTML=cards;
       
}));


// User part 
fetch("https://api.escuelajs.co/api/v1/users")
.then(Response => Response.json())
// .then(resp => console.log(resp));
.then(resp => resp.map(show_product_user => {
    cards+=`
    <div class="col-12 col-md-3 col-xl-3">
    <div class="card mt-2">
        <img class="card-img-top" src="${show_product_user.images[0]}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">ID       : ${show_product_user.category.id}</p>
          <p class="card-text">Category : ${show_product_user.category.name[0]}Hello</p>
          <p class="card-text">${show_product_user.title}</p>
          <p class="card-text">${show_product_user.price}$</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>  
    `;
    // document.querySelector(".row").innerHTML=cards;
       
}));

// create funciton to insert product to APOs 
async function postProduct(){
  // Javascript Object 
  let product ={
    "title": "testing postman",
    "price": 10,
    "description": "A description",
    "categoryId": 1,
    "images": [
        "https://placeimg.com/640/480/any"
    ]
  }
}

fetch("ttps://api.escuelajs.co/api/v1/products/",{
  method:"POST",
  headers:{
    "Content-Type":"application/json",
  },
  body: JSON.stringify(product);
})




