let productsDetail = {
    data: [
        {
            productName: "Buttermilk Pancakes",
            category: "Breakfast",
            price: "$15",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ducimus.",
            Image: "item-1.jpeg",
        },
        {
            productName: "Diner Double",
            category: "Lunch",
            price: "$15",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ducimus.",
            Image: "item-2.jpeg",
        },
        {
            productName: "Egg Attack",
            category: "Lunch",
            price: "$15",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ducimus.",
            Image: "item-5.jpeg",
        },
        {
            productName: "American Classic",
            category: "Lunch",
            price: "$15",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ducimus.",
            Image: "item-8.jpeg",
        },
        {
            productName: "Country Delight",
            category: "Breakfast",
            price: "$15",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ducimus.",
            Image: "item-4.jpeg",
        },
        {
            productName: "Bacon Overflow",
            category:"Breakfast",
            price: "$15",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ducimus.",
            Image: "item-7.jpeg",
        },
        {
            productName: "Godzilla Milkshake",
            category: "Shakes",
            price: "$15",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ducimus.",
            Image: "item-3.jpeg",
        },
        {
            productName: "Oreo Dream",
            category: "Shakes",
            price: "$15",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ducimus.",
            Image: "item-6.jpeg",
        },
        {
            productName: "Quarantine Buddy",
            category: "Shakes",
            price: "$15",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ducimus.",
            Image: "item-9.jpeg",
        },

    ],
};

for (let i of productsDetail.data ) {
    // for ceating card
let card = document.createElement('div');
card.classList.add('card', i.category, 'hide');

// for creating image container

let imageContainer = document.createElement("div");
imageContainer.classList.add("image-container");

// for image displaying

let imag = document.createElement("img");
imag.setAttribute("src", i.Image);
imageContainer.appendChild(imag);
card.appendChild(imageContainer);

// make container

let container = document.createElement("div");
container.classList.add("container");

// product detail
let name = document.createElement('h4');
name.classList.add('product-name');
name.innerText = i.productName;
container.appendChild(name);
card.appendChild(container);

// pricing

let price = document.createElement("h6");
price.innerText = i.price;
container.appendChild(price);

// content

let content = document.createElement("p");
content.innerText = i.content;
container.appendChild(content);


// all show here in inner-products
document.querySelector("#inner-products").appendChild(card);

};



// products filtering

function filterProduct(value) {
    // select all buttons 
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        // check if value equalls innertext
        if (value == button.innerText) {
            button.classList.add("active");
        } else {
            button.classList.remove("active")
        }
    });

    // all card selected

    let elements = document.querySelectorAll(".card");
    
    elements.forEach((element) => {
        // when click on button "all" then show all products
        if (value == 'All') {
            element.classList.remove("hide")
        }
        else {
            // check if elements contains category class
            if (element.classList.contains(value)) {
                // only same ctegory products shows
                element.classList.remove("hide");

            } else {
                // hide other elements 
                element.classList.add("hide");
            }
        };
    });
};





//
window.onload =  () => {
     filterProduct('All')
 };