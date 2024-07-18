const ul = document.querySelector(".ul");
const hambugBtn = document.querySelector(".fa-bars");

const templeContainer = document.getElementById("temple-card-container");

const userChoice = document.querySelectorAll(".user-choice");
const pageTitle = document.getElementById("temp-display-title");

const changeBackgroundColor = document.querySelector("body");

hambugBtn.addEventListener("click", ()=>{
    if(hambugBtn.classList.contains("fa-bars")){
        hambugBtn.classList.remove("fa-bars");
        hambugBtn.classList.add("fa-angle-double-up");
    }
    else{
        hambugBtn.classList.remove("fa-angle-double-up");
        hambugBtn.classList.add("fa-bars");
    }
    ul.classList.toggle("links");
   
})

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        year: 2005,
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        year: 1888,
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        year: 2015,
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        year: 2020,
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        year: 1974,
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        year: 1986,
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        year: 1983,
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        year: 2001,
        dedicated: "16 November 2001",
        area: 17500,
        imageUrl: "https://churchofjesuschrist.org/imgs/f665703fc6de4b818f4ba2e025fc41f6183d80a8/full/1280%2C/0/default"
    },
    {
        templeName: "Kona Hawaii Temple",
        location: "Kailua Kona, Hawaii",
        year: 1999,
        dedicated: "13 March 1999",
        area: 42100,
        imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x540/Laie-Hawaii-Temple1.jpg"
    },
    {
        templeName: "Mendoza Argentina Temple",
        location: "Las Heras, Mendoza, Ajẹntína",
        year: 2018,
        dedicated: "October 7, 2018",
        area: 653400,
        imageUrl: "https://churchofjesuschrist.org/imgs/b1333311a0ecf368866ab2fdc70b44a401991dc5/full/320%2C/0/default"
    }
];

//   let templeInfos = temples.map((tempInfo) => `
//   <div>
//       <h2>${tempInfo.templeName}</h2>
//       <p>${tempInfo.location}</p>
//       <p>${tempInfo.dedicated}</p>
//       <p>${tempInfo.area}</p>
//       <img src="${tempInfo.imageUrl}" alt="${tempInfo.templeName}">
//   </div>
// `);

// templeInfos.forEach((temple) => {
//   let div = document.createElement('div');
//   div.innerHTML = temple
//   templeContainer.appendChild(div);
// });

for(let tempInfo of temples){

    let divContan = document.createElement("div");
    divContan.innerHTML = 
    `
      <h2>${tempInfo.templeName}</h2>
      <p><span>Location: </span>${tempInfo.location}</p>
      <p><span>Dedicated: </span>${tempInfo.dedicated}</p>
      <p><span>Size: </span>${tempInfo.area} sq ft</p>
      <img src="${tempInfo.imageUrl}" alt="${tempInfo.templeName}">
    `

    templeContainer.appendChild(divContan);

}



userChoice.forEach((selected)=>{

    let filteredTemple;

    selected.addEventListener("click", ()=>{

        hambugBtn.classList.remove("fa-angle-double-up");
        hambugBtn.classList.add("fa-bars");
        ul.classList.toggle("links");

        templeContainer.innerHTML ="";

        if(selected.classList.contains("old")){

            pageTitle.textContent = "Old Temples";
            filteredTemple = temples.filter((temple)=> temple.year < 1900)

        }else if(selected.classList.contains("new")){

            pageTitle.textContent = "New Temples";
            filteredTemple = temples.filter((temple)=> temple.year > 2000)

        }else if(selected.classList.contains("large")){

            pageTitle.textContent = "Large Temples";
            filteredTemple = temples.filter((temple)=> temple.area > 90000)

        }else if(selected.classList.contains("small")){

            pageTitle.textContent = "small Temples";
            filteredTemple = temples.filter((temple)=> temple.area < 10000 )

        }else{

            pageTitle.textContent = "All Temples"
            filteredTemple = temples;
            
        }

        
        for(let tempInfo of filteredTemple){

            let divContan = document.createElement("div");
            divContan.innerHTML = 
            `
              <h2>${tempInfo.templeName}</h2>
              <p><span>Location: </span>${tempInfo.location}</p>
              <p><span>Dedicated: </span>${tempInfo.dedicated}</p>
              <p><span>Size: </span>${tempInfo.area} sq ft</p>
              <img src="${tempInfo.imageUrl}" alt="${tempInfo.templeName}">
            `
        
            templeContainer.appendChild(divContan);
        
        }
    
    })
    
})