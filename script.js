let count = 0;

//variables to add items to the shopping cart
let addToCart = document.getElementById("addtocart");
let shopBtn1 = document.getElementById("shopbtn1");
let shopBtn2 = document.getElementById("shopbtn2");
let shopBtn3 = document.getElementById("shopbtn3");



shopBtn1.addEventListener("click", function(){
    count++;
    addToCart.textContent = count;
});

shopBtn2.addEventListener("click", function(){
    count++;
    addToCart.textContent = count;
});

shopBtn3.addEventListener("click", function(){
    count++;
    addToCart.textContent = count;
});
