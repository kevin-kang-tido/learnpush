

// create array 
// 1.create using constructor 
let primeNumber = new Array(1,3,7,11,13,17)
//2.create using literal notation 
let oddNumer = [1,3,5,7,9,11,13,17];

// document.write(`<h1>${primeNumber[primeNumber.length-1]}</h1>`);

let products = [
    {
        id: 1,
        title: "Apples",
        price: 20,
        image: [
            "https://applerankings.com/wp-content/uploads/2021/04/honeycrisp-apple-5.png"

        ]
    },
    {
        id: 2,
        title: "Orange",
        price: 10,
                image: [
            "https://applerankings.com/wp-content/uploads/2021/04/honeycrisp-apple-5.png"

        ]
    },
    {
        id: 3,
        title: "Grape",
        price: 30,
                image: [
            "https://applerankings.com/wp-content/uploads/2021/04/honeycrisp-apple-5.png"

        ]
    },
    {
        id: 4,
        title: "Banana",
        price: 50,
                image: [
            "https://applerankings.com/wp-content/uploads/2021/04/honeycrisp-apple-5.png"

        ]
    }
];
//Copy array
let copyproduct=[...products];
//marge product
let mergeProduct=products.concat(copyproduct);

// Show to UI 
// using  loop array by using array method : map method
let cards='';
//products.map(funtion(product_new){....})
mergeProduct.map(function(product_new){
    cards +=`
    <div class="col-12 col-md-3 col-xl-3">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${product_new.image[0]}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">${product_new.title}</p>
          <p class="card-text">${product_new.price}$</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
</div>
    `;
    document.querySelector(".row").innerHTML=cards;
});

// simiple style
let card='';
for (pronew of products) {
    card +=`
    <div class="col-12 col-md-3 col-xl-4">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${pronew.image[0]}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">${pronew.title}</p>
          <p class="card-text">${pronew.price}$</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
</div>
    `;
}
    // document.querySelector(".row").innerHTML=card;