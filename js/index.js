const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888 ",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Images
// Logo image 
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
// CTA image
let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"]);
// Middle image
let midimg = document.getElementById("middle-img");
midimg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// Nav Bar
const newNav = document.querySelectorAll('nav a');
newNav[0].textContent = "Services";
newNav[1].textContent = "Product";
newNav[2].textContent = "Vision";
newNav[3].textContent = "Features";
newNav[4].textContent = "About";
newNav[5].textContent = "Contact";

// // Additional Nav Item
// let addMenu = document.createElement("a");
// let newItem = document.createTextNode("Blog");
// addMenu.appendChild(newItem);
//* NEED TO FIX */

// Add Styling to Nav
let navA = document.querySelectorAll("nav a")
for (i = 0; i < navA.length; i++){
  navA[i].style.color = "green";
}

// CTA

let mainHeader = document.querySelector("h1");
mainHeader.textContent = "DOM IS AWESOME";

let button = document.querySelector("button");
button.textContent = "Get Started";

// Main-Content
const subHeaders = document.querySelectorAll("h4");
subHeaders[0].textContent = "Features";
subHeaders[1].textContent = "About";
subHeaders[2].textContent = "Services";
subHeaders[3].textContent = "Product";
subHeaders[4].textContent = "Vision";
subHeaders[5].textContent = "Contact";

const paragraph = document.querySelectorAll("p");
paragraph[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraph[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraph[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraph[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraph[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
paragraph[5].textContent = "123 Way 456 Street Somewhere, USA";
paragraph[6].textContent = "1 (888) 888-8888";
paragraph[7].textContent = "Sales@greatidea.io";

//Footer
paragraph[8].textContent = "Copyright Great Idea! 2018";