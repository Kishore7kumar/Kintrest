const weatherAPIKEY ="36985df5d0c1ec3d143f91b1686825e9"
const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric`;



//  MENU SECTION

const galleryImage = [
   
    {
        src:"./assets/gallery/image1.jpg" , alt:"Thumbnail Image 1"
    },
    {
        src:"./assets/gallery/image2.jpg" , alt:"Thumbnail Image 2"
    },
    {
        src:"./assets/gallery/image3.jpg" , alt:"Thumbnail Image 3"
    }

];

const products=[
    {
        title: "AstroFiction",
        author: "John Doe",
        price: 49.9,
        image: "./assets/products/img6.png"
    },
    {
        title: "Space Odissey",
        author: "Marie Anne",
        price: 35,
        image: "./assets/products/img1.png"
    },
    {
        title: "Doomed City",
        author: "Jason Cobert",
        price: 0,
        image: "./assets/products/img2.png"
    },
    {
        title: "Black Dog",
        author: "John Doe",
        price: 85.35,
        image: "./assets/products/img3.png"
    },
    {
        title: "My Little Robot",
        author: "Pedro paulo",
        price: 0,
        image: "./assets/products/img5.png"
    },
    {
        title: "Garden Girl",
        author: "Ankit Patel",
        price: 45,
        image: "./assets/products/img4.png"
    },
    {
        title: "Astra",
        author: "Kishore",
        price: 55,
        image: "./assets/products/img7.png"
    },
    {
        title: "Panther",
        author: "Kishore",
        price: 0,
        image: "./assets/products/img8.png"
    },
    {
        title: "Porsche",
        author: "Kishore",
        price: 80,
        image: "./assets/products/img9.png"
    },
    {
        title: "GTR",
        author: "Kishore",
        price: 50,
        image: "./assets/products/img10.png"
    },
    {
        title: "Krishna",
        author: "Kishore",
        price: 0,
        image: "./assets/products/img11.png"
    },
    {
        title: "Warrior",
        author: "Kishore",
        price: 80,
        image: "./assets/products/img12.png"
    },
    {
        title: "Ninja",
        author: "Kishore",
        price:55,
        image: "./assets/products/img13.png"
    },
    {
        title: "Biker",
        author: "Kishore",
        price: 0,
        image: "./assets/products/img14.png"
    },
    {
        title: "Ducati",
        author: "Kishore",
        price: 30,
        image: "./assets/products/img15.png"
    },
    {
        title: "Solar System",
        author: "Kishore",
        price: 0,
        image: "./assets/products/img16.png"
    },
    {
        title: "Music",
        author: "Kishore",
        price: 20,
        image: "./assets/products/img17.png"
    },
    {
        title: "Shiv",
        author: "Kishore",
        price: 60,
        image: "./assets/products/img18.png"
    },
    {
        title: "Sword",
        author: "Kishore",
        price: 25,
        image: "./assets/products/img19.png"
    },
    {
        title: "Elephant",
        author: "Kishore",
        price: 15,
        image: "./assets/products/img20.png"
    }
];

function menuHandler(){
    document.querySelector("#open-nav-menu").addEventListener("click",function(){
        document.querySelector("header nav .wrapper").classList.add("nav-open")});
    
    document.querySelector("#close-nav-menu").addEventListener('click', function(){
        document.querySelector("header nav .wrapper").classList.remove("nav-open")});
    
        // document.querySelector("#home").addEventListener('click', function(){
        //     window.location.href = `index.html`});

};

//CELSIUS TO FAHR CONVERTOR

function celtofar (temperature){
    let f = (temperature * 9/5)+32
    return f;
}

//WEATHER TEXT

function weatherHandler(){


    navigator.geolocation.getCurrentPosition( position =>{ 
        
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let url = weatherAPIURL
            .replace("{lat}",latitude)
            .replace("{lon}",longitude)
            .replace("{API key}",weatherAPIKEY);
        
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const condition = data.weather[0].description
            const location = data.name
            const temperature = data.main.temp;  
            
        let ftext = `The weather is ${condition} in ${location} and its ${celtofar(temperature).toFixed(1)}°F outside`;
        let cText = `The weather is ${condition} in ${location} and its ${temperature.toFixed(1)}°C outside`;
    
        document.querySelector("p#weather").innerHTML = cText
    
    //TEMPARATURE SWITCH
    
    document.querySelector(".weather-group").addEventListener("click",function(e){
    
        if (e.target.id == "fahr"){
            document.querySelector("p#weather").innerHTML = ftext
        } else if(e.target.id=="celsius"){
            document.querySelector("p#weather").innerHTML = cText
        }
    
    
        
                });
            }).catch(err => {
                document.querySelector("p#weather").innerHTML = "Unable to get Weather Info. Try again later"
            });
        });
    };


//GREETING SECTION
function greetingHandler(){
    let greetingText;

let currentHour = new Date().getHours();
if (currentHour < 12){
    greetingText = "Good Morning";
} else if(currentHour < 19){
    greetingText = "Good Afternoon";
} else if(currentHour < 24){
    greetingText = "Good Evening";
} else{
    greetingText = "Welcome";
}

document.querySelector("#greeting").innerHTML = greetingText;



}

// LOCAL TIME SECTION

function clockHandler(){
    setInterval(function(){
        let localTime = new Date();
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,'0');
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,'0');;
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,'0');;
    
     },1000)
};


// GALLERY SECTION
function galleryHandler(){
    let mainImg = document.querySelector("#gallery > img");

let thumbnails = document.querySelector("#gallery .thumbnails");


mainImg.src = galleryImage[0].src;
mainImg.alt = galleryImage[0].alt;

galleryImage.forEach(function(image, index){
let thumb = document.createElement("img");
thumb.src = image.src;
thumb.alt = image.alt;
thumb.dataset.arrayIndex = index;
thumb.dataset.selected= index === 0 ? true : false;

thumb.addEventListener("click", function(e){
    let selectedIndex =  e.target.dataset.arrayIndex;
    let selectedImage = galleryImage[selectedIndex];
    mainImg.src = selectedImage.src;
    mainImg.alt = selectedImage.alt;
// FUNCTION TO DESELECT PREVIOUS AND SELECT PRESENT ONE
    thumbnails.querySelectorAll("img").forEach(function(img){
        img.dataset.selected=false
    });

    e.target.dataset.selected=true;


});

thumbnails.appendChild(thumb);
 });

};

// Products Section

function populateProducts(productList){

    let productsSection = document.querySelector(".products-area");
    productsSection.textContent = "";

    // Run a loop through the products and create an HTML element ("product-item")for each of them
    productList.forEach(function(product,index){
       
        // Create the HTML element for the individual product 
         let productElm = document.createElement("div");
        productElm.classList.add("product-item");
 
        // Create the product image
        let productImage = document.createElement("img");
 
        productImage.src = product.image;
        productImage.alt = "Image for"+ product.title;
 
     // Create product detail section
     let productDetails = document.createElement("div");
     productDetails.classList.add("product-details");
 
     // Create product title, author, priceTitle and price
 
     let productTitle = document.createElement("h3");
     productTitle.classList.add("product-title");
     productTitle.textContent = product.title;
 
     let productAuthor = document.createElement("p");
     productAuthor.classList.add("product-author");
     productAuthor.textContent = product.author;
 
     let priceTitle= document.createElement("p");
     priceTitle.classList.add("price-title");
     priceTitle.textContent = "Price";
 
     let productPrice= document.createElement("p");
     productPrice.classList.add("product-price");
     productPrice.textContent = product.price > 0 ? "₹" + product.price.toFixed(2) : "Free";
 
 
     // Apend product details
 
     productDetails.append(productTitle);
     productDetails.append(productAuthor);
     productDetails.append(priceTitle);
     productDetails.append(productPrice);
 
 
 
 
        // Add all child HTML elements of the product 
        productElm.append(productImage);
        productElm.append(productDetails);
 
        // Add complete individual product to the product section 
        productsSection.append(productElm);
 
 
 });
};


function productHandler(){ 
    let productsSection = document.querySelector(".products-area"); 
    let freeProducts = products.filter((item) => !item.price || item.price <= 0);

    let paidProducts = products.filter((item) => item.price > 0);

    populateProducts(products);

    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;

    let productsFilter = document.querySelector(".products-filter");
    productsFilter.addEventListener("click",function(e){
     if (e.target.id === "all"){
        populateProducts(products);
     } else if (e.target.id === "paid"){
        populateProducts(paidProducts);
     } else if (e.target.id === "free"){
        populateProducts(freeProducts);
     }
    });


}

function footerHandler(){
    let currentYear = new Date().getFullYear();
    document.querySelector("footer").textContent = `© ${currentYear} - All Rights Reserved`
}

//Viewing 

function view(product) {
   console.log(products);
   let Items = document.querySelectorAll(".product-item"); 
   Items.forEach(item => {
    item.addEventListener('click',function(){
        window.location.href = `products.html`
   })
    });
    
   
}




 //PAGE LOAD
menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
productHandler();
footerHandler();
weatherHandler();
view();