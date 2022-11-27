let toggleMenue = document.querySelector(".toggle-menue")
let lists =  document.querySelector(".lists")


toggleMenue.onclick = function (e){
    //to click any where in the whole toggle button
    e.stopPropagation()

    // Toggle Class on lists close to close list  menue
    lists.classList.toggle("close");
    
     // Toggle Class show-arrow on toggle buttun
    document.querySelector(".toggle-menue").classList.toggle("show-arrow");

}    


////////////// click anywhere outside the area of menue list or list///////////////

document.addEventListener('click' , (e)=>{
    // console.log(e.target)
    if(e.target !== toggleMenue  && e.target !== lists ){

        if(lists.classList.contains("close")   ){

            lists.classList.toggle("close");
            toggleMenue.classList.toggle("show-arrow")
        }
    }
})

/*
if we neglect this function => when we click on li in lists the menue disappear
 to solve this problem we are use this function
*/

lists.onclick = function(e){
    e.stopPropagation()
}


//change Background

// let landingPage = document.querySelector(".landingPage")
// let arrayImg = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]

// function randomizeImages(){
    
//      setInterval( ()=>{
//         let randomValue = Math.floor( Math.random() * arrayImg.length )
//         landingPage.style.backgroundImage = `url("images/${arrayImg[randomValue]}")`;
//     },1000 )
        
// }
// randomizeImages()



/////////// click on setting gear//////////

let gear = document.querySelector(".gear") //icon
let toggleSetting = document.querySelector(".toggle-setting") //dicv that contain the icon


gear.onclick=function(e){
    this.classList.toggle("spin")
   
    toggleSetting.parentElement.classList.toggle("openSettings")
    // toggleSetting.parentElement.style.left = "-200px";
    
    // e.stopPropagation()
}
















// randomizeImgs();


// // Switch Random Background Option
// const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// // Loop On All Spans
// randomBackEl.forEach(span => {

//   // Click On Every Span
//   span.addEventListener("click", (e) => {

//     handleActive(e);

//     if (e.target.dataset.background === 'yes') {

//       backgroundOption = true;

//       randomizeImgs();

//       localStorage.setItem("background_option", true);

//     } else {

//       backgroundOption = false;

//       clearInterval(backgroundInterval);

//       localStorage.setItem("background_option", false);

//     }

//   });

// });


// // Select Landing Page Element
// let landingPage = document.querySelector(".landing-page");

// // Get Array Of Imgs
// let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// // Function To Randomize Imgs
// function randomizeImgs() {

//   if (backgroundOption === true) {

//     backgroundInterval = setInterval(() => {

//       // Get Random Number
//       let randomNumber = Math.floor(Math.random() * imgsArray.length);
    
//       // Change Background Image Url 
//       landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
    
//     }, 10000);

//   }

// }

// randomizeImgs();
