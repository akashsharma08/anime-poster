const btn = document.querySelector("#btn");
const container = document.querySelector(".image");
const image = document.querySelector("#anime-img");
const nam = document.querySelector("#name");

const URL = "https://api.catboys.com/img";

btn.addEventListener("click", async function (){
    try {
        btn.disabled =true;
        btn.innerText = "loading...";
        const result =await fetch(URL);
        const data = await result.json();
        container.style.display = "block";
        image.src = await data.url;
        nam.innerText = data.artist;
        btn.disabled =false;
        btn.innerText = "Get";
    } catch (error) {
        container.style.display = "block";
        nam.innerText = "Something went wrong!"
        btn.disabled =false;
        btn.innerText = "Get";
        image.src = "#";
    }
});

// // const { NekosAPI } = require("nekosapi");
// import { NekosAPI } from "./nekosapi";
// const nekos = new NekosAPI();
 
// // This will return up to 5 images with the `catgirl` category (it will be less
// // if there are less than the limit images with that category). The categories
// // argument is also optional.
// nekos
//     .getRandomImages((categories = ["catgirl"]), (limit = 5))
//     .then((images) => {
//         for (const image of images) {
//             console.log(image.url);
//         }
//     });