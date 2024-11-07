// Write your code her

// Task 1

const heading = document.querySelector("h1");
const header = heading.closest("header");
header.style.border = "5px solid grey";

// Task 2

const packageTitles = document.querySelectorAll(".package-title");
packageTitles.forEach((title) => {
  title.previousElementSibling.style.border = "2px solid #072F5F";
});

// Task 3

const labels = document.querySelectorAll(".info label");
labels.forEach((label) => {
  if (label.matches(".mild")) {
    label.style.borderBottom = "2px solid green";
  } else if (label.matches(".intense")) {
    label.style.borderBottom = "2px solid orange";
  } else {
    label.style.borderBottom = "2px solid red";
  }
});
// Task 4

const navList = document.querySelector(".nav-list");
const siteMap = document.querySelector(".site-map");
const listItems = navList.children;
for (let i = 0; i < listItems.length; i++) {
  const newSiteMap = document.createElement("li");
  newSiteMap.innerText = listItems[i].innerText;
  siteMap.appendChild(newSiteMap);
}
