const button = document.querySelector("button");
button.addEventListener("click",event =>{
    button.remove()
})

const img = document.createElement("img");
img.src = "https://picsum.photos/id/1/200/300";
document.body.appendChild(img);
img.classList.add("img1");


const list = document.querySelector("#countries-list")


function render(countries){
    return countries.map(
        (el)=>`
        <div class="flex1">
            <img src="${el.flag}" alt="${el.name}">
            <div >
            <h1 class="name1">${el.name}</h1>
            <h1 class="name2">${el.capital}</h1>
            <button class="more1">show more info</button>
            <button class="delete1">Delete card</button>
            </div>
        </div>
        `
    )
    }
    list.innerHTML=render(countries);
    // const button2 =document.querySelector("name1");
    // button2.addEventListener("click",eve =>{
    //     button2.remove()
    // })

    // mexute ver gavige 