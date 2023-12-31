/*
Request 1: Click to Change Text.
When the user clicks on the "Welcome Message" block, 
change text to "Have a Good Time!".
*/

const changeTitle = document.querySelector(".title");

changeTitle.addEventListener("click", () => {
  if (changeTitle.textContent === "Welcome Message") {
    changeTitle.textContent = "Have a Good Time!";
  } else if (changeTitle.textContent === "Have a Good Time!") {
    changeTitle.textContent = "Welcome Message";
  }
});

/*
Request 2: Click to Show/Close Menu.
When the user clicks the menu at the top-right corner, 
show the hidden mobile menu. After that, the user can click the close button to hide it.
*/

const openMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-button");

openMenu.addEventListener("click", () => {
  mobileMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

/*
Request 3: Click to Show More Content Boxes.
There are some more content boxes waiting to show. 
When the user clicks the Call-to-Action button, 
show those hidden content boxes.
*/

const showMore = document.querySelector(".cta");
const moreBoxes = document.querySelector(".more-boxes");

showMore.addEventListener("click", () => {
  if (moreBoxes.style.display === "") {
    moreBoxes.style.display = "block";
    showMore.textContent = "Show Less";
  } else if (moreBoxes.style.display === "block") {
    moreBoxes.style.display = "none";
    showMore.textContent = "Show More";
  }
});
