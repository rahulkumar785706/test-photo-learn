// window.addEventListener("load",()=>{
//     const loader = document.querySelector(".loader");
//     loader.classList.add("loader-hidden");

//     loader.addEventListener("transitionend",()=>{
//         document.body.removeChild("loader");
//     });
// });


var preloader=document.getElementById("loader");

function myfunction(){
    preloader.style.display='none';
}
