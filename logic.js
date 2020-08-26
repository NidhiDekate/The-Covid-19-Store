function cartsCount(){
    let carts = document.querySelectorAll(".add-cart");

    let products = [
        {
            name : "Disposable Blue Mask",
            tag : "mask-1",
            price : 10,
            inCart : 0
        },
        {
            name : "Disposable Pink Mask",
            tag : "mask-2",
            price : 20,
            inCart : 0
        },
        {
            name : "Reusable Cotton Mask",
            tag : "mask-3",
            price : 100,
            inCart : 0
        },
        {
            name : "Reusable N-95 Mask",
            tag : "mask-4",
            price : 400,
            inCart : 0
        },
        {
            name : "Full PPE Kit",
            tag : "ppe1",
            price : 1000,
            inCart : 0
        },
        {
            name : "Isolation Gown(small)",
            tag : "ppe2",
            price : 500,
            inCart : 0
        },
        {
            name : "Isolation Gown(large)",
            tag : "ppe3",
            price : 500,
            inCart : 0
        },
        {
            name : "Isolation CoverAll",
            tag : "ppe4",
            price : 900,
            inCart : 0
        },
        {
            name : "Digital Thermometer (f89ge4)",
            tag : "thermo01",
            price : 1000,
            inCart : 0
        },
        {
            name : "Digital Thermometer(hjuy77)",
            tag : "thermo02",
            price : 1500,
            inCart : 0
        },
        {
            name : "Infrared Thermometer(gh56)",
            tag : "thermo03",
            price : 1800,
            inCart : 0
        },
        {
            name : "Infrared Thermometer(yu78)",
            tag : "thermo04",
            price : 3000,
            inCart : 0
        },
        {
            name : "Pocket Sanitizer",
            tag : "san01",
            price : 40,
            inCart : 0
        },
        {
            name : "Sanitizer Spray",
            tag : "san02",
            price : 100,
            inCart : 0
        },
        {
            name : "Sanitizer(Big)",
            tag : "san03",
            price : 300,
            inCart : 0
        },
        {
            name : "Sanitizer-Liquid",
            tag : "san04",
            price : 400,
            inCart : 0
        },
        {
            name : "Covid-19 Rapid Test",
            tag : "med01",
            price : 200,
            inCart : 0
        },
        {
            name : "Vitamin C Tablets",
            tag : "med02",
            price : 200,
            inCart : 0
        },
        {
            name : "Astrazeneca",
            tag : "med03",
            price : 350,
            inCart : 0
        },
        {
            name : "vacuoline-100mg",
            tag : "med04",
            price : 400,
            inCart : 0
        }
    ]
    for(let i=0; i<carts.length; i++){
        carts[i].addEventListener("click",() => {
            cartsNumbers(products[i]);
            totalCost(products[i]);
        })
    }
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem("cartsNumbers");
    if(productNumbers){
        document.querySelector(".cart-items").innerText = productNumbers;
    }
}

function cartsNumbers(product){
    
    let productNumbers = localStorage.getItem("cartsNumbers");
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem("cartsNumbers",productNumbers + 1) ;
        document.querySelector(".cart-items").innerText = productNumbers + 1;
    }else{
        localStorage.setItem("cartsNumbers",1) ;
        document.querySelector(".cart-items").innerText = 1;
    }
    
    setItems(product);
}

function setItems(product){
     let cartItems = localStorage.getItem("productsInCart");
     cartItems = JSON.parse(cartItems);
     if(cartItems != null){
         if(cartItems[product.tag] == undefined){
             cartItems = {
                 ...cartItems,
                 [product.tag]: product
             }
         }
         cartItems[product.tag].inCart += 1;
     }else{
         product.inCart = 1;
         cartItems = {
            [product.tag]: product
        }
     }
     localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }
function totalCost(product){
    let cartCost = localStorage.getItem("totalCost");

    

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cartProducts");
    let cartCost = localStorage.getItem("totalCost");
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=
            `<div class="selectedProduct">
                         <i class="fa fa-times"></i>
                         <img class="cart-img" src="./images/${item.tag}.jpg">
                         <span>${item.name}</span>
            </div>
            <div class="productPrice">
                ${item.price}.00 <span style="font-family: sans-serif;">&#8377</span>
            </div>
            <div class="productQuantity"><i class="fa fa-arrow-circle-o-up"></i> <span> ${item.inCart} </span> <i class="fa fa-arrow-circle-o-down"></i></div>
            <div class="productTotal">${item.inCart*item.price}.00 <span style="font-family: sans-serif;">&#8377</span></div>
            `
        });
        productContainer.innerHTML +=`
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle heading">Basket Total</h4>
        <h4 class="basketTotal">${cartCost}.00<span style="font-family: sans-serif;">&#8377</span></h4>`
    }
}

function closeCart(){
    document.querySelector(".productsContainer").style.visibility = 'hidden';
}
function openCart(){
    document.querySelector(".productsContainer").style.visibility = 'visible';
}


function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cartProducts");
    let cartCost = localStorage.getItem("totalCost");
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=
            `<div class="selectedProduct">
                         <i class="fa fa-times"></i>
                         <img class="cart-img" src="./images/${item.tag}.jpg">
                         <span>${item.name}</span>
            </div>
            <div class="productPrice">
                ${item.price}.00 <span style="font-family: sans-serif;">&#8377</span>
            </div>
            <div class="productQuantity"><i class="fa fa-arrow-circle-o-up"></i> <span> ${item.inCart} </span> <i class="fa fa-arrow-circle-o-down"></i></div>
            <div class="productTotal">${item.inCart*item.price}.00 <span style="font-family: sans-serif;">&#8377</span></div>
            <div class="clear"></div>
            `
        });
        productContainer.innerHTML +=`
        <div class="basketTotalContainer">
        <hr />
        <h4 class="basketTotal"> <span>&nbsp</span>${cartCost}.00<span style="font-family: sans-serif;">&#8377</span></h4>
        <h4 class="basketTotalTitle heading">Basket Total :  </h4>
        `
    }
}
    
//Form Validation
function formValidation(){
    //Book Appointment Modal validation
    let name = document.getElementById("nameFeild").value;
    let email = document.getElementById("emailFeild").value;
    let contact = document.getElementById("contactFeild").value;
    let address = document.getElementById("addressFeild").value;
    var expname = /^[a-z A-Z]+$/;
    var expcontact = /^[0-9]{10}$/;
    var expaddress = /^[a-zA-Z0-9\s,. '-]{3,}$/;
    var expemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var resultName = expname.test(name);
    var resultContact = expcontact.test(contact);
    var resultAddress = expaddress.test(address);
    var resultEmail = expemail.test(email);


     if(name == ""){
         document.getElementById("nameFeild").style.border = "thin dotted red";
         alert("Name must be filled out");
        
     }else if(resultName){
         document.getElementById("nameFeild").style.border = "thin solid #f0f0f5";
         if(contact == ""){
             document.getElementById("contactFeild").style.border = "thin dotted red";
             alert("Contact must be filled out");
         }else if(resultContact){
             document.getElementById("contactFeild").style.border = "thin solid #f0f0f5";
             if(address == ""){
                
                 document.getElementById("addressFeild").style.border = "thin dotted red";
                 alert("Address must be filled out");
              }else if(resultAddress){
                  
                  document.getElementById("addressFeild").style.border = "thin solid #f0f0f5";
                  if(email == ""){
                    alert("Validation Successful.");
                  }else if(resultEmail == false){
                    alert("Please Enter Valid Email Address in the following order: characters@characters.domain");
                    document.getElementById("emailFeild").style.border = "thin dotted red";
                   }else{
                    alert("Validation Successful.");
                   }
              }else{
                  alert("Validation Failed, Please enter valid address");
                  document.getElementById("contactFeild").style.border = "thin dotted red";    
              }
         }else{
             alert("Validation Failed, Please enter valid contact");
             document.getElementById("contactFeild").style.border = "thin dotted red";    
         }
     }else{
         alert("Validation Failed, Please enter valid name");
         document.getElementById("nameFeild").style.border = "thin dotted red";
     }    
}
//Volunteer Form validation  
function formValidationVolunteer(){
    let Vname = document.getElementById("Vname").value;
    let Vemail = document.getElementById("Vemail").value;
    let Vcontact = document.getElementById("Vcontact").value;
    let Vmessage = document.getElementById("Vmessage").value;

    var expVname = /^[a-z A-Z]+$/;
    var expVcontact = /^[0-9]{10}$/;
    var expVmessage = /^[a-zA-Z0-9\s,. '-]{3,}$/;
    var expVemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var resultName = expVname.test(Vname);
    var resultContact = expVcontact.test(Vcontact);
    var resultMessage = expVmessage.test(Vmessage);
    var resultEmail = expVemail.test(Vemail);

    if(Vname == ""){
        document.getElementById("Vname").style.border = "thin dotted red";
         alert("Name must be filled out");        
    }else if(resultName){
        document.getElementById("Vname").style.border = "thin solid #f0f0f5";
        if(Vcontact==""){
            document.getElementById("Vcontact").style.border = "thin dotted red";
         alert("Contact must be filled out");
        }else if(resultContact){
            document.getElementById("Vcontact").style.border = "thin solid #f0f0f5";
            if(Vemail == ""){
                alert("Validation Successful.");
              }else if(resultEmail == false){
                alert("Please Enter Valid Email Address in the following order: characters@characters.domain");
                document.getElementById("Vemail").style.border = "thin dotted red";
               }else{
                alert("Validation Successful.");
               }
        }else{
            alert("Validation Failed, Please enter valid contact");
            document.getElementById("contactFeild").style.border = "thin dotted red";   
        }
    }else{
        alert("Validation Failed, Please enter valid name");
        document.getElementById("Vname").style.border = "thin dotted red";
    }

    
}