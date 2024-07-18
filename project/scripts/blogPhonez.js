const blogPhones = document.querySelector(".blog");

const filteredPhone = document.querySelectorAll(".fil");
const filteredHead = document.getElementById("filtered-header");

const showFilters = document.querySelector(".fa-caret-down");
const filterUl = document.querySelector(".filter");

const phones = [
    {
        model: "Samsung",
        phoneName: "Samsung Galaxy S24 Ultra",
        price: 1205.74,
        display: "6.7 inches, Amoled",
        battery: 5000,
        storage: "1TB/12GB Non-Expandable",
        rearCamera: "200MP/10MPdepth/50MP",
        frontCamera: "12MP",
        system: "Android 14, One UI 6.1.1",
        warranty: 2,
        colour: "Titanium Black, Titanium Gray, Titanium Violet",
        image: "./image/samsung_s24_ultra.webp"
    },
    {
        model: "Oppo",
        phoneName: "Reno 12",
        price: 420.05,
        display: "6.7 inches, Amoled",
        battery: 5000,
        storage: "128GB/12Gb+12GB exp",
        rearCamera: "64Mp/2Mp/2Mp",
        frontCamera: "32Mp",
        system: "ColorOs 14, android 14",
        warranty: 2,
        colour: "Nebular Silver, Space Brown",
        image: "./image/oppo_reno12.webp"
    },
    {
        model: "Redmi",
        phoneName: "Redmi 13C",
        price: 280.99,
        display: "6.74 inches, IPS-LCD",
        battery: 5000,
        storage: "128GB/4Gb/8GB exp 4GB",
        rearCamera: "50MP/2Mp/2Mp depth",
        frontCamera: "8MP",
        system: "Android 13, MIUI 14",
        warranty: 1,
        colour: "Midnight Black, Navy Blue, Glacier White",
        image: "./image/redmi_13c.webp"
    },
    {
        model: "Tecno",
        phoneName: "Tecno Camon 30",
        price: 599.99,
        display: "6.78 inches, Amoled",
        battery: 5000,
        storage: "256GB/12GB + 12GBexp",
        rearCamera: "64Mp/2Mp/2Mp",
        frontCamera: "32Mp",
        system: "ColorOs 14, android 14",
        warranty: 1,
        colour: "Iceland Dark, Salt White",
        image: "./image/tecno_camon_30.webp"
    },
    {
        model: "Itel",
        phoneName: "Itel A60",
        price: 60.09,
        display: "6.7 inches, Amoled",
        battery: 5000,
        storage: "128GB/8Gb + 8GBexp",
        rearCamera: "64Mp/2Mp/2Mp",
        frontCamera: "32Mp",
        system: "ColorOs 14, android 14",
        warranty: 2,
        colour: "",
        image: "./image/itel_a60.webp"
    },
    {
        model: "iPhone",
        phoneName: "iPhone 15 Pro-Max",
        price: 1160.49,
        display: "6.7 inches, Amoled",
        battery: 5000,
        storage: "128GB/8Gb + 8GBexp",
        rearCamera: "64Mp/2Mp/2Mp",
        frontCamera: "32Mp",
        system: "ColorOs 14, android 14",
        warranty: 2,
        colour: "black, blue, green, yellow",
        image: "./image/iphone_15promax.jpeg"
    },
    {
        model: "Infinix",
        phoneName: "Infinix Note 40 Pro+",
        price: 399.99,
        display: "6.7 inches, Amoled",
        battery: 5000,
        storage: "128GB/8Gb + 8GBexp",
        rearCamera: "64Mp/2Mp/2Mp",
        frontCamera: "32Mp",
        system: "ColorOs 14, android 14",
        warranty: 2,
        colour: "Vintage Green, Titan Gold",
        image: "./image/infinx_note_40_pro_plus.jpeg"
    },
    {
        model: "Oppo",
        phoneName: "Reno 11F",
        price: 360.85,
        display: "6.7 inches, Amoled",
        battery: 5000,
        storage: "128GB/8Gb + 8GBexp",
        rearCamera: "64Mp/2Mp/2Mp",
        frontCamera: "32Mp",
        system: "ColorOs 14, android 14",
        warranty: 2,
        colour: "Olive Green, Light Purple",
        image: "./image/oppo_reno_11.webp"
    },
    {
        model: "Redmi",
        phoneName: "Redmi 13 Pro",
        price: 840.55,
        display: "6.7 inches, Amoled",
        battery: 5000,
        storage: "128GB/8Gb + 8GBexp",
        rearCamera: "64Mp/2Mp/2Mp",
        frontCamera: "32Mp",
        system: "ColorOs 14, android 14",
        warranty: 2,
        colour: "",
        image: "./image/redmi_13.webp"
    },
    {
        model: "Tecno",
        phoneName: "Tecno Pop 8",
        price: 150.02,
        display: "6.7 inches, Amoled",
        battery: 5000,
        storage: "128GB/8Gb + 8GBexp",
        rearCamera: "64Mp/2Mp/2Mp",
        frontCamera: "32Mp",
        system: "ColorOs 14, android 14",
        warranty: 2,
        colour: "",
        image: "./image/tecno_pop8.webp"
    }
]


let filHead = (title)=>{
    filteredHead.style.display = "block";
    filteredHead.textContent = `Available ${title} Phones`;
}

let display = (filter)=>{
    const phoneDiv = document.createElement("div");
    phoneDiv.innerHTML = `
        <div class="blog-phone-container">
            <div class="blog-img">
                <h2>${filter.phoneName}</h2>
                <img src="${filter.image}" alt="${filter.phoneName}">
                <p class="blog-price"><span>Price: $</span>${filter.price}</p>
                <button class="add blog-add-to-cart">Buy</button>
            </div>
        
            <div class="blog-phone-spec">
                <h4>Specification</h4>
                <p class="blog-spec-info">
                    <span>Display:</span> ${filter.display} <br>
                    <span>Battery:</span> ${filter.battery}mah <br>
                    <span>Storage:</span> ${filter.storage} <br>
                    <span>Rear Camera:</span> ${filter.rearCamera} <br>
                    <span>Front:</span> ${filter.frontCamera} <br>
                    <span>System:</span> ${filter.system} <br>
                    <span>Colours:</span> ${filter.colour} <br>
                    <span>Warranty:</span> ${filter.warranty} Years 
                </p>
            </div>
        </div><hr>`;

    blogPhones.appendChild(phoneDiv);
}

phones.forEach((phone)=>{
    
    display(phone);
});


showFilters.addEventListener("click", () => {
    filterUl.classList.toggle("show-filter");
    showFilters.classList.toggle("fa-caret-up");
})

filteredPhone.forEach((range)=>{

    let filteredPhonez;

    range.addEventListener("click", ()=>{

        blogPhones.innerHTML = "";

        filterUl.classList.toggle("show-filter");
        showFilters.classList.toggle("fa-caret-up")

        if(range.classList.contains("high-end")){
            
            filHead("High-End");
            filteredPhonez = phones.filter((phone) => phone.price >= 1000);

        }else if(range.classList.contains("mid-range")){
            
            filHead("Mid-Range");
            filteredPhonez = phones.filter((phone) => phone.price >= 300 && phone.price < 1000);

        }else if(range.classList.contains("low-end")){

            filHead("Low-End");
            filteredPhonez = phones.filter((phone) => phone.price < 300);

        }else{
            filteredHead.style.display = "none";
            filteredPhonez = phones;
        }

        for(let filtPone of filteredPhonez){

           display(filtPone);
        
        }
    })
})