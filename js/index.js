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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"])

let nav = document.querySelectorAll("nav a");
nav[0].textContent = "Services"
nav[1].textContent = "Product"


nav.prepend("something")
nav.append("else")
const ctaHeader = document.querySelector("cta,button")
ctaHeader.textContent = "DOM IS AWESOME"

featuersHeader.textContent = "Features"
featuersContent.textContent = "Features...."

const ctaButton = document.querySelector("cta, button")
ctaButton.textContent = "Get Started"
let ctaImg = document.getElementById("cta-img")


const featureText = document.querySelector(".text-content:nth-of-type(1)")
featureText.textContent = siteContent["main-content"]["features-h4"]
const aboutText = document.querySelector(".text-content:nth-of-type(2)")
aboutText.textContent = siteContent["main-content"]["about-h4"]
const featuresPara = document.querySelector(".text-content:nth-of-type(1)");
featuresPara.textContent = siteContent["main-content"]["features-content"];
const aboutPara = document.querySelector(".text-content:nth-of-type(2)");
aboutPara.textContent = siteContent["main-content"]["about-content"];


document.querySelector("footer").querySelector("p").innerText =
  siteContent.footer.copyright; 