document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.getElementById("home-link");
  const aboutLink = document.getElementById("about-link");
  const servicesLink = document.getElementById("services-link");
  const contactLink = document.getElementById("contact-link");

  const homeContainer = document.querySelector(".home-container");
  const aboutContainer = document.querySelector(".aboutus-container");
  const servicesContainer = document.querySelector(
    ".services-container"
  );
  const contactContainer = document.querySelector(
    ".contact-container"
  );

  homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    homeContainer.scrollIntoView({ behavior: "smooth" });
  });

  aboutLink.addEventListener("click", function (event) {
    event.preventDefault();
    aboutContainer.scrollIntoView({ behavior: "smooth" });
  });

  servicesLink.addEventListener("click", function (event) {
    event.preventDefault();
    servicesContainer.scrollIntoView({ behavior: "smooth" });
  });

  contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    contactContainer.scrollIntoView({ behavior: "smooth" });
  });

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    const homeContainerOffset = homeContainer.offsetTop;
    const aboutContainerOffset = aboutContainer.offsetTop;
    const servicesContainerOffset = servicesContainer.offsetTop;
    const contactContainerOffset = contactContainer.offsetTop;

    if (
      scrollPosition >= homeContainerOffset &&
      scrollPosition < aboutContainerOffset
    ) {
    } else if (
      scrollPosition >= aboutContainerOffset &&
      scrollPosition < servicesContainerOffset
    ) {
    } else if (
      scrollPosition >= servicesContainerOffset &&
      scrollPosition < contactContainerOffset
    ) {
    } else if (scrollPosition >= contactContainerOffset) {
    }
  });
});


let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 7000); // berubah dalam 7dtk
  }