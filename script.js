/* *****variables***** */
const btnShowMobileNav = document.getElementById("mobile-nav-open");
const mobileNavContainer = document.querySelector(".nav-links-container");
const mobileNav = document.getElementById("mobile-nav");
const btnCloseMobileNav = document.getElementById("mobile-nav-close");
const bodyEl = document.querySelector("body");

/* *****functions***** */
function showMobileNav() {
  mobileNav.classList.remove("hidden");
  bodyEl.classList.add("scroll");
}

function hideMobileNav() {
  mobileNav.classList.add("hidden");
  bodyEl.classList.remove("scroll");
}

/* *****event listeners***** */
// show mobile navigation
btnShowMobileNav.addEventListener("click", showMobileNav);

// hide mobile navigation
btnCloseMobileNav.addEventListener("click", hideMobileNav);

// go to navigation link
mobileNavContainer.addEventListener("click", (e) => {
  /*let navLink = e.target.id;

  if (
    navLink === "nav-link-1" ||
    navLink === "nav-link-2" ||
    navLink === "nav-link-3" ||
    navLink === "nav-link-4"
  ) {
    console.log(navLink);
    mobileNav.classList.add("hidden");
  } else {
    console.log("nothing to see here");
  }*/

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
