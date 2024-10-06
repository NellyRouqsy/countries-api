function loadUrl(){
    const apiUrl = "https://restcountries.com/v3.1/all";
fetch(apiUrl)
 .then((response)=>response.json())
 .then((result) => {
    console.log(result);
    
    let cards = ""
    result.map((item)=>{
        cards += 
        ` <div class="card">
            <img src="${item.flags.svg}" width="250px"/>
            <h1 class="country">
                ${item.name.common}
            </h1>
            <p class="population">
                Population : <span>${item.population}</span>
            </p>
            <p class="region">
                Region : <span>${item.region}</span>
            </p>
            <p class="capital">
                Capital : <span>${item.capital}</span>
            </p>
        </div>`;
    })
    document.querySelector(".cards").innerHTML = cards
})
.catch((error) => console.log(error))
};

window.onload = loadUrl()




function selectRegion() {
    const region  = document.querySelector(".selectRegion").value;

    const europeUrl = `https://restcountries.com/v3.1/region/${region}`
fetch(europeUrl)
.then((response)=>response.json())
.then((result)=>{
    console.log(result);
    
    let cards = ""
    result.map((item)=>{
        cards += 
        ` <div class="card">
            <img src="${item.flags.svg}"width="250px"/>
            <h1 class="country">
                ${item.name.common}
            </h1>
            <p class="population">
                Population : <span>${item.population}</span>
            </p>
            <p class="region">
                Region : <span>${item.region}</span>
            </p>
            <p class="capital">
                Capital : <span>${item.capital}</span>
            </p>
        </div>`;
    })
    document.querySelector(".cards").innerHTML = cards
})
.catch((error) => console.log(error))
};

document.querySelector(".selectRegion").addEventListener("change",selectRegion)


const whereInTheWorld = () =>{
    return loadUrl()
}





function search(e) {
    e.preventDefault();
    const searchResult = document.querySelector("#searchBox").value;
    

    if (searchResult.length > 3) {
        const searchOutput = `https://restcountries.com/v3.1/name/${searchResult}`
        fetch(searchOutput)
        .then(response=>response.json())
        .then(result=>{
            console.log(result);
            
        let cards = ""
    result.map((item)=>{
        cards +=
        ` <div class="card">
            <img src="${item.flags.svg}" width="250px"/>
            <h1 class="country">
                ${item.name.common}
            </h1>
            <p class="population">
                Population : <span>${item.population}</span>
            </p>
            <p class="region">
                Region : <span>${item.region}</span>
            </p>
            <p class="capital">
                Capital : <span>${item.capital}</span>
            </p>
        </div>`;
    })
    document.querySelector(".cards").innerHTML = cards
})
.catch((error) => console.log(error))
}
else{
    if (searchResult == "") {
        return loadUrl();
    }}
}
    
document.querySelector("#searchBox").addEventListener("keyup",search)

let dark = document.querySelector("#darkMode");
let light =  document.querySelector("#lightMode");
let wholeDoc = document.querySelector(".section");
let searchingM = document.querySelector(".searching");
let searchBox = document.querySelector("#searchBox")
let region = document.querySelector(".selectRegion")
let bar = document.querySelector("#navbar")



function darkMode(){
    dark.style.display = "none"
    light.style.display = "flex"
    wholeDoc.style.backgroundColor = "hsl(207, 26%, 17%)"
    wholeDoc.style.color = "hsl(0, 0%, 100%)"
    region.style.backgroundColor = "hsl(207, 26%, 17%)"
    region.style.color = "hsl(0, 0%, 100%)"
    searchingM.style.backgroundColor = "hsl(207, 26%, 17%)"
    searchingM.style.color = "hsl(0, 0%, 100%)"
    searchBox.style.backgroundColor = "hsl(207, 26%, 17%)"
    searchBox.style.color = "rgb(170,170,170)"
    bar.style.borderBottom = "2px 2px 2px 2px rgba(0, 0, 0, 0.1)"
    bar.style.boxShadow = "2px 2px 2px 2px rgba(0, 0, 0, 0.1)"
}

dark.addEventListener("click",darkMode)


function lightMode(){
    light.style.display = "none"
    dark.style.display = "flex"
    wholeDoc.style.backgroundColor = "hsl(0, 0%, 98%)"
    wholeDoc.style.color = "hsl(207, 26%, 17%)"
    region.style.backgroundColor = "hsl(0, 0%, 100%)"
    region.style.color = "hsl(207, 26%, 17%)"
    searchingM.style.backgroundColor = "hsl(0, 0%, 98%)"
    searchBox.style.backgroundColor = "hsl(0, 0%, 100%)"
    searchBox.style.color = "rgb(170,170,170)"
     bar.style.borderBottom = "2px 2px 2px 2px rgba(0, 0, 0, 0.1)"
}
light.addEventListener("click",lightMode)