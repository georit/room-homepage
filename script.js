/* segment *****variables***** */
const dataObjects = [
  {
    name: "discover",
    bgMobile: "url('./images/mobile-image-hero-1.jpg')",
    bgDesktop: "url('./images/desktop-image-hero-1.jpg')",
    heading: "Discover innovative ways to decorate",
    info:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    name: "location",
    bgMobile: "url('./images/mobile-image-hero-2.jpg')",
    bgDesktop: "url('./images/desktop-image-hero-2.jpg')",
    heading: "We are available all across the globe",
    info:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest to you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    name: "quality",
    bgMobile: "url('./images/mobile-image-hero-3.jpg')",
    bgDesktop: "url('./images/desktop-image-hero-3.jpg')",
    heading: "Manufactured with the best materials",
    info:
      "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

const btnShowMobileNav = document.getElementById("mobile-nav-open");
const mobileNavContainer = document.querySelector(".nav-links-container");
const mobileNav = document.getElementById("mobile-nav");
const btnCloseMobileNav = document.getElementById("mobile-nav-close");
const bodyEl = document.querySelector("body");

const heroEl = document.querySelector(".hero");
const mainHeading = document.querySelector(".main-heading");
const detailsInfo = document.querySelector(".details-info");

// previous & next control buttons
const btnPrev = document.querySelector(".fa-chevron-left");
const btnNext = document.querySelector(".fa-chevron-right");

let infoIndex = 0;

/* *****onload***** */
displayInfo(infoIndex);

/* segment *****functions***** */
function displayInfo(n) {
  let width = onResize();
  if (window.innerWidth > 430 || width > 430) {
    heroEl.style.backgroundImage = dataObjects[n].bgDesktop;
  } else {
    heroEl.style.backgroundImage = dataObjects[n].bgMobile;
  }

  mainHeading.innerHTML = dataObjects[n].heading;
  detailsInfo.innerHTML = dataObjects[n].info;
}

function previous() {
  infoIndex--;

  if (infoIndex < 0) {
    infoIndex = dataObjects.length - 1;
  }

  displayInfo(infoIndex);
}

function next() {
  infoIndex++;

  if (infoIndex > dataObjects.length - 1) {
    infoIndex = 0;
  }

  displayInfo(infoIndex);
}

function showMobileNav() {
  mobileNav.classList.remove("hidden");
  bodyEl.classList.add("scroll");
}

function hideMobileNav() {
  mobileNav.classList.add("hidden");
  bodyEl.classList.remove("scroll");
}

function onResize() {
  let width;
  if (typeof window.innerWidth == "number") {
    width = window.innerWidth;
  } else {
    if (document.documentElement && document.documentElement.clientWidth) {
      width = document.documentElement.clientWidth;
    } else {
      if (document.body && document.body.clientWidth) {
        width = document.body.clientWidth;
      }
    }
  }
  return width;
}

/* segment *****event listeners***** */
// when window is resized
window.addEventListener("resize", () => {
  onResize();
  displayInfo(infoIndex);
});

// show mobile navigation
btnShowMobileNav.addEventListener("click", showMobileNav);

// hide mobile navigation
btnCloseMobileNav.addEventListener("click", hideMobileNav);

// go to navigation link
mobileNavContainer.addEventListener("click", (e) => {
  let navLink = e.target;

  if (navLink.className === "nav-link-anchor about-anchor") {
    document
      .getElementById("nav-link-3")
      .scrollIntoView({ behavior: "smooth" });
    hideMobileNav();
  }

  if (navLink.className === "nav-link-anchor") {
    hideMobileNav();
  }
});

// controls
btnPrev.addEventListener("click", previous);

btnNext.addEventListener("click", next);

document.addEventListener("keyup", (e) => {
  console.log(e.code);
  if (e.code === "ArrowLeft") {
    previous();
  }

  if (e.code === "ArrowRight") {
    next();
  }
});
