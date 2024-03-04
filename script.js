let cartButton = document.querySelector(".cartB");
let closeButton = document.querySelector(".closeB");

//event lyssnare 
cartButton.addEventListener("click", ()=> {
    body.classList.toggle("cartActive");
})

closeButton.addEventListener("click", ()=> {
    body.classList.toggle("cartActive");
})


class Product{  //bas klassen 
    constructor(name, price){
        this.name = name;
        this.price = price
    }
}

//objecter till producter
const Product1 = new Product("hyte y60", 3000)
const Product2 = new Product("z790-h", 5000)
const Product3 = new Product("core i9", 7000)
const Product4 = new Product("RTX-4080-White", 15000)
const Product5 = new Product("vengance 2x16gb", 2000)
const Product6 = new Product("corsair-240", 2500)
const Product7 = new Product("mx4", 200)
const Product8 = new Product("corsair 120mm", 1000)
const Product9 = new Product("samsung m.2 1tb", 2000)
const Product10 = new Product("samsung sata 1tb", 1000)
const Product11 = new Product("asus-900 wat", 4000)

