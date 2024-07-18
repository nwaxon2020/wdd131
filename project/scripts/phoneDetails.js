
const phonePic = document.querySelector(".phone-pic");
const phoneSpec = document.querySelector(".phone-spec");
const indicators = document.querySelectorAll(".inicator");

const blogPhones = document.querySelector(".related");


const phones = [
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
    }
]

let interval = 5000;
let curentPic = 0;
let intervalTiming;


slideShow(curentPic);
startSliding();


function startSliding(){

    intervalTiming = setInterval(() => {
    
        curentPic ++;
    
        if(curentPic === phones.length){
            curentPic = 0;
        }
        slideShow(curentPic);
                
    }, interval);
    
}

function slideShow(index){
    let displayedPhone = phones[index];

    phonePic.innerHTML = `<h2>${displayedPhone.phoneName}</h2>
    <img src=${displayedPhone.image}>`;

    phoneSpec.innerHTML = `
    <h4>Oppo <br> Reno 11F</h4>
    <p class="show-p price">$150</p>
    <button class="show-p add">Buy Item</button>
    <p class="spec-info">
        <span>Display:</span>${displayedPhone.display} <br>
        <span>Battery</span>: ${displayedPhone.battery}mah <br>
        <span>Storage:</span> ${displayedPhone.storage} <br>
        <span>Rear Camera:</span> ${displayedPhone.rearCamera}  
        <span>Front:</span> ${displayedPhone.frontCamera} <br>
        <span>System:</span> ${displayedPhone.system} <br>
        <span>Colours:</span> ${displayedPhone.colour} <br>
        <span>Warranty:</span> ${displayedPhone.warranty} Years 
    </p>
    <div><i class="fa fa-info-circle phone-detail" title=" phone spec info"><span></span></i></div>`

    const showPhoneDetails = document.querySelector(".phone-detail");
    const phoneDetail = document.querySelector(".spec-info");

    indicators.forEach((indicator, indx) => {
        indicator.classList.toggle("indicating", indx === index);

        indicator.addEventListener("click", ()=>{

            clearInterval(intervalTiming);
            slideShow(indx);
            setTimeout(startSliding, 10000);           
        })
   
    });

    showPhoneDetails.addEventListener("click", ()=>{
        
        phoneDetail.classList.toggle("show-spec-info");
        phoneSpec.classList.toggle("dnt-show-p");
    
        if(showPhoneDetails.classList.contains("fa-info-circle")){
    
            showPhoneDetails.classList = "phone-detail";
            showPhoneDetails.innerHTML = "<span>Hide</span>";
            clearInterval(intervalTiming);
    
        }else{
    
            showPhoneDetails.classList = "fa fa-info-circle phone-detail";
            showPhoneDetails.innerHTML = "";
            startSliding();
        }
        
    });
    
}


phones.forEach((phone)=>{
 
    const phoneDiv = document.createElement("div");
    phoneDiv.innerHTML = `
        <div class="rel-pic">
            <img src=${phone.image} alt=${phone.phoneName} loading="lazy">
            <div>
                <p>${phone.phoneName}</p>
                <p class="price">$${phone.price}</p>
                <button class="add">Add to cart</button>
            </div>
        </div>
    `;

    blogPhones.appendChild(phoneDiv);
    
});

