// Header elementini yaratish
const header = document.querySelector(".header");
header.style.backgroundColor = "white";
header.style.padding = "16px";
header.style.display = "flex";
header.style.justifyContent = "space-between";

// Rasm elementini yaratish
const image = document.createElement("img");
image.src = "./images/formcarry.svg";
image.style.width = "14%";
image.style.height = "auto";
header.appendChild(image);

//  Header linklar yaratish
const linkDiv = document.createElement("div");
linkDiv.style.margin = "auto";
linkDiv.style.padding = "10px";
const headerLinks = ["FAQ", "Docs", "Integrations", "Pricing"];
headerLinks.forEach((linkText) => {
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = linkText;
  link.style.marginLeft = "30px";
  linkDiv.appendChild(link);
});
header.append(linkDiv);

// Birinchi tugmani yaratish va uslub berish
const button1 = document.createElement("button");
button1.textContent = "Log in";
button1.style.color = "black";
button1.style.padding = "10px 20px";
button1.style.width = "120px";
button1.style.borderRadius = "25px";

// Ikkinchi tugmani yaratish va uslub berish
const button2 = document.createElement("button");
button2.textContent = "Sign in";
button2.style.color = "black";
button2.style.padding = "10px 20px";
button2.style.width = "120px";
button2.style.borderRadius = "25px";
header.append(button1, button2);

// Hero elementini yaratish va uslub berish
const hero = document.querySelector(".hero");
hero.style.padding = "76px";
hero.style.marginLeft = "230px";
hero.style.marginRight = "230px";
hero.style.textAlign = "center";

// Create the h1 element
const heading = document.createElement("h1");
heading.textContent = "Get emails and massages";
heading.style.fontSize = "2.4em";
//
const heading1 = document.createElement("h1");
heading1.textContent = "from your HTML form";
heading1.style.fontSize = "2.4em";

// Create the p element
const paragraph = document.createElement("p");
paragraph.textContent =
  "Code your own HTML form and style it, then point your form to get email notifications,block spam and integrate with other apps.";
paragraph.style.fontSize = "1.3em";

// "Get Started" buttonini yaratish
const getStartedButton = document.createElement("button");
getStartedButton.textContent = "Get Started";
getStartedButton.style.color = "black";
getStartedButton.style.padding = "12px 22px";
getStartedButton.style.borderRadius = "25px";
getStartedButton.style.marginTop = "35px";

// heroga elementlarni append qilish
hero.append(heading, heading1, paragraph, getStartedButton);

// Buttonlarni hover qilish
const button = document.querySelectorAll("button");
button.forEach((button) => {
  button.addEventListener("mouseover", function () {
    button.style.backgroundColor = "black";
    button.style.color = "white";
  });
  button.addEventListener("mouseout", function () {
    button.style.backgroundColor = "white";
    button.style.color = "black";
  });
});

// Footer elementini yaratish
const footer = document.querySelector(".footer");
footer.style.backgroundColor = "#F7F9FC";
footer.style.padding = "20px";
footer.style.display = "flex";
footer.style.borderRadius = "8px";
footer.style.textAlign = "center";
footer.style.margin = "0px 130px";
footer.style.justifyContent = "space-between";

// Footer bo'limidagi linklarni yaratish
const footerLinks = [
  "formcarry. all rights reserved",
  "Terms of Service",
  "Privacy Policy",
];
footerLinks.forEach((linkText) => {
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = linkText;
  link.style.margin = "0px 70px 0px 0px";
  footer.appendChild(link);
});

// Rasmli linklar
const imageUrls = [
  "./images/twitter.svg",
  "./images/facebook.svg",
  "./images/github.svg",
];

// Rasmlarni joylash
imageUrls.forEach((url) => {
  const footerLink = document.createElement("a");
  const img = document.createElement("img");
  img.src = url;
  footerLink.appendChild(img);
  footer.append(footerLink);
});
