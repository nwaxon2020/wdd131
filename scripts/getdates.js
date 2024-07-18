// Current year and Last modified code set./////////////////
const lastModified = document.getElementById("lastModified");
const currentyear = document.getElementById("currentyear");

let modified = new Date(document.lastModified);
let date = modified.toLocaleDateString();
let time = modified.toLocaleTimeString();
let year = modified.getFullYear();

currentyear.textContent = year;
lastModified.innerHTML = `Last Modification: ${date} ${time}`;