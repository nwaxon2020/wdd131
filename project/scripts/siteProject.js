const changeTheme = document.querySelector(".change-theme");
const body = document.querySelector(".bd");

const hamburger = document.querySelector(".fa-bars"); // fixed typo from 'hambuger'
const navUl = document.querySelector(".links");
navUl.style.animation = "slider-in 0.3s ease-in";

const purchaseBtn = document.querySelectorAll(".add");
const cartCount = document.getElementById("cart-count");

// Check local storage for theme on load
if (localStorage.getItem("theme") === "dark-mode") {
    body.classList.add("dark-mode");
    changeTheme.textContent = "Light-Mode";
} else {
    changeTheme.textContent = "Dark-Mode";
}

// Change theme event listener
changeTheme.addEventListener("click", () => {
    navUl.classList.toggle("show-ul");
    hamburger.classList.toggle("fa-angle-double-up");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        changeTheme.textContent = "Light-Mode";
        localStorage.setItem("theme", "dark-mode");
    } else {
        changeTheme.textContent = "Dark-Mode";
        localStorage.setItem("theme", "light-mode");
    }
});

// Hamburger menu toggle
hamburger.addEventListener("click", () => {
    navUl.classList.toggle("show-ul");
    hamburger.classList.toggle("fa-angle-double-up");
});

// Initialize cart count from local storage
let addToCart = parseInt(localStorage.getItem("cartNum")) || 0;
cartCount.textContent = addToCart;

if (addToCart > 0) {
    cartCount.style.display = "block";
} else {
    cartCount.style.display = "none";
}

// Add to cart functionality
purchaseBtn.forEach((btn) => {
    let prevText = btn.textContent;

    btn.addEventListener("click", () => {
        if (btn.textContent !== "Remove Item") {
            btn.textContent = "Remove Item";
            addToCart++;
            localStorage.setItem("cartNum", addToCart);
        } else {
            btn.textContent = prevText;
            addToCart--;
            localStorage.setItem("cartNum", addToCart);
        }

        cartCount.textContent = addToCart;

        if (addToCart > 0) {
            cartCount.style.display = "block";
        } else {
            cartCount.style.display = "none";
        }
    });
});

// localStorage.clear();
