const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avg_rating: 4.5
    },
    {
        id: "pl-2050",
        name: "power laces",
        avg_rating: 4.7
    },
    {
        id: "tc-1987",
        name: "time circuits",
        avg_rating: 3.5
    },
    {
        id: "lr-2000",
        name: "low voltage reactor",
        avg_rating: 3.9
    },
    {
        id: "we-1969",
        name: "warp equalizer",
        avg_rating: 5.0
    }
];

document.addEventListener("DOMContentLoaded", ()=>{
    const productSelect = document.getElementById("product");
    

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});


const form = document.getElementById("review-form");
const reviewNum = document.getElementById("review-amount-span");

form.addEventListener("submit", async(e)=>{

    e.preventDefault();

    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    const fromData = new FormData(form);
    
    for(let[name, value] of fromData){

        console.log(`${name}: ${value}`);
    }

    // try {

    //     const dataReq = await fetch("#url", {method: "POST", body: fromData});
    //     if (!dataReq.ok){alert("Error in connection!")};

    //     const response = await dataReq.json();
    //     console.log(response);
        
    // } catch (error) {
     
    // }

    reviewNum.textContent = reviewCount;
})

