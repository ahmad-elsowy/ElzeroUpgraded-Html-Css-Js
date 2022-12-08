


//------------------------ start Type writer effect---------------------------//
let myAudio = document.querySelector('#audio')


const output =  document.querySelector(".landingPage  .mainConent h2 span")
let res;
//typing speed
let typespeed=300;
//removing backspace sped
let removeSpeed=100;
// word identifire
let id =0

//words to be typed
//"\xa0"  = space
const words = [
  "Web Developer",
  "HTML\xa0Designer",
  "Css\xa0FrontEnd"
];

//colors for individual words
const colors = [
    "#ffc107",
    "#ff9800",
    "#00bcd4",
    "#f44336",
    "#8bc34a" 
]

//amount of letters
let charCount = 0;

let time = setInterval(type , typespeed)
//typing letter
function type(){
    // filter out the amount of letter from the word
    res = words[id].substring(0,charCount)
    // change word color
    output.style.color = colors[id]
    // when all letters are typed out , stop typing and start removeing
    //adding the 3 pauses when it reaches the end
    if(charCount >= words[id].length + 3 ){
        //stop typing 
        clearInterval(time)
        //reset characters count
        charCount = 1
        //start removing 
        time = setInterval(remove,removeSpeed)
    }

    // output the result
    output.innerHTML = res

    //add anoyher letter
    charCount++
}

//removing letters
function remove(){
  //filter out the amount of letters from the word ,reversed
  res = words[id].substring(0,words[id].length - charCount )

  //when all letters are removed stop removing and start re-typing 
  if(res.length <= 0){
    //check if all word have been typed out
    if(id >= words.length -1){
      //if so go back to the first word
      id = 0
    }else{
      //if not , change the next word
      id++
    }
    //stop removing
    clearInterval(time)
    //reset character count
    charCount = 0
    //start typing again
    time = setInterval(type, typespeed)
  }

  //output the result
  output.innerHTML = res



  //remove another letter
  charCount++;

}
// //play ausio sound
//     myAudio.play()

// let audioBtn = document.querySelector(".close-sound")
// audioBtn.addEventListener('click' , function(e){
//     e.stopPropagation()
//     myAudio.pause()
//     audio.currentTime = 0;
// })


//------------------------ End Type writer effect---------------------------//





//check if there is color in local storage 
if(localStorage.getItem("color-option")   !== null){
    //set selected color to root 
    document.documentElement.style.setProperty('--main-color' , localStorage.getItem("color-option"))

    //remove active class from all li
    document.querySelectorAll(".colors li").forEach(e =>{
        e.classList.remove("active")

        //add sctive class to element with data-color === selected color in local storage
        if(e.dataset.color === localStorage.getItem("color-option")){
            e.classList.add("active")
        }
    })

}

let toggleMenue = document.querySelector(".toggle-menue")
let lists =  document.querySelector(".lists")


toggleMenue.onclick = function (e){
    //to click any where in the whole toggle button
    e.stopPropagation()
    // .x-shape
    this.classList.toggle("x-shape");

    // Toggle Class on lists close to close list  menue
    lists.classList.toggle("close");
    
     // Toggle Class show-arrow on toggle buttun
     toggleMenue.classList.toggle("show-arrow");
    

}    


////////////// click anywhere outside the area of menue list or list///////////////

document.addEventListener('click' , (e)=>{
    // console.log(e.target)
    if(e.target !== toggleMenue  && e.target !== lists ){

        if(lists.classList.contains("close")   ){

            lists.classList.toggle("close");
            toggleMenue.classList.remove("show-arrow")
            toggleMenue.classList.remove("x-shape")
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
//////////////////////////////Background ///////////////////////

//change Background

let landingPage = document.querySelector(".landingPage")
let arrayImg = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]

let randomValuelocal = localStorage.getItem("imageNumber")
    landingPage.style.backgroundImage = `url("images/${arrayImg[randomValuelocal]}")`;


function randomizeImages(){
    
    backgroundInterval = setInterval( ()=>{
    let randomValue = Math.floor( Math.random() * arrayImg.length )
    
    localStorage.setItem("imageNumber",randomValue)    


    landingPage.style.backgroundImage = `url("images/${arrayImg[randomValue]}")`;

   
},1000 )

    

}

randomizeImages()


let backgroundOption = true;





let backgroundLocalItem = localStorage.getItem("backgroundOption")


//check if background is not empty
if(backgroundLocalItem !== null){

    document.querySelectorAll(".random-backgrounds span").forEach((e)=>{
        e.classList.remove("active")
    })
    if(backgroundLocalItem === "true"){
        // backgroundOption = true
        randomizeImages()
        document.querySelector(".random-backgrounds .yes").classList.add("active")
        
    }else{
        // backgroundOption = false
        clearInterval(backgroundInterval)
        document.querySelector(".random-backgrounds .no").classList.add("active")
        
    }
  

}



//switch random background using option box
let randomBackgrounds = document.querySelectorAll(".random-backgrounds span")
//loop on all span
randomBackgrounds.forEach(span => {
    //click on every span
    span.addEventListener("click",(e)=>{

        //control active
       handleActive(span)
       if(e.target.dataset.background === "yes"){
            backgroundOption = true;
            randomizeImages()
            localStorage.setItem("backgroundOption",true)
          
       }else{
        backgroundOption = false;
        clearInterval(backgroundInterval)
        localStorage.setItem("backgroundOption",false)
        
       }
    
  
    })
    
})





////////////////////////End Background///////////////////////////
/////////// click on setting gear//////////

let gear = document.querySelector(".gear") //icon
let toggleSetting = document.querySelector(".toggle-setting") //dicv that contain the icon


gear.onclick=function(e){
    this.classList.toggle("spin")
   
    toggleSetting.parentElement.classList.toggle("openSettings")
    // toggleSetting.parentElement.style.left = "-200px";
}

//change color
let colorsLi = document.querySelectorAll(".colors li")

colorsLi.forEach( li => {
    
    li.addEventListener("click" , (e)=>{
        document.documentElement.style.setProperty('--main-color' , e.target.dataset.color)
        

        //control active class//////////      
        colorsLi.forEach(e =>{
            e.classList.remove("active")
        })
        //add to the selected li element
        e.target.classList.add("active")

        //set color on local storage
        localStorage.setItem("color-option" , e.target.dataset.color)

    })
})


///function to control active

function handleActive(e){
    //remove clas active from all span
    e.parentElement.querySelectorAll(".active").forEach(e=>{
       e.classList.remove("active")
      })
      e.classList.add("active")
} 



// -------------skill  progress----------------
let spans =  document.querySelectorAll(".skill-progress span")
let ourSkills =  document.querySelector(".our-skills")


window.onscroll = function(){  
    if(window.scrollY >=600){
        spans.forEach((span)=>{
            span.style.width = span.dataset.progress          
        })
    }
}



// ------------- End skill  progress----------------


//creating popup when clicking on image on gallery section 

let imgs = document.querySelectorAll(".image-box img")

imgs.forEach((img)=>{
    img.addEventListener('click',(e)=>{
        //create overlay Element
        let overlay = document.createElement('div')
        //add class to overlay
        overlay.className="popup-overlay"
        //add overlay to body
        document.body.appendChild(overlay)
        //create popup box
        let popupBox =  document.createElement("div")
        //add class to popup box
        popupBox.className="popup-box"
         //add image-box to body
         document.body.appendChild(popupBox)
        //create image header
        let imageHeading = document.createElement("h3")
        //create text header
        let imageText = document.createTextNode(img.alt)
        //add text to header
        imageHeading.appendChild(imageText)
        //add header to popup box
        popupBox.appendChild(imageHeading)
        //create image element
        let imageCreated = document.createElement("img")
        //add source to image element
        imageCreated.src = img.src
        //add image to oppup box
        popupBox.appendChild(imageCreated)
        //create close button 
        let closePopup = document.createElement("div") 
        //add class to close button
        closePopup.className='close'
        //create X to clode popup
        let closeText = document.createTextNode("X")
        //add text to popup close
        closePopup.appendChild(closeText)
        //add popup to popupBox
        popupBox.appendChild(closePopup)

    })
})


//close popup box when click on the close button
document.addEventListener('click',e=>{
    if(e.target.className === "close"){
        //remove current popup
        e.target.parentElement.remove()
        //remove overlay 
        document.querySelector(".popup-overlay").remove()

    }
})
//close popup box when press escape [Esc] on the keyboard
document.onkeyup = function(e){
    console.log(e)
    if(e.key === "Escape"){   
            //remove current popup
            document.querySelector(".popup-box").remove()
            //remove overlay 
            document.querySelector(".popup-overlay").remove()    
    }
}
///////End popup


//-----------------show-bullets-------------------//

//control active
let yes = document.querySelector(".show-bullets .yes")
let no = document.querySelector(".show-bullets .no")
let showSpans = document.querySelectorAll(".show-bullets span")
let lis = document.querySelectorAll(".bullets li")

///////////////////////////////////////////////////////////
// when click on the circle the scroll to the section////
lis.forEach(li=>{
    li.onclick = (e)=>{
        console.log(e.target.dataset.section)
        document.querySelector(e.target.dataset.section).scrollIntoView(
            {
                behavior:'smooth'
            }
        )
    }
})
///////////////////////////////////////////////////////////

if(localStorage.getItem("display") !== null){
    
        document.querySelector(".bullets").style.display = localStorage.getItem("display")
   
}


if(localStorage.getItem("show-option")   !== null){

    //control active class 
    //remove active class 
        showSpans.forEach(e =>{
        e.classList.remove("active")

        //add sctive class to element with 
        if(e.dataset.show === localStorage.getItem("show-option")){
            e.classList.add("active")
        }
    })

}


showSpans.forEach( (span)=>{
    span.onclick = function(e){
        showSpans.forEach(e=>{
            e.classList.remove("active")
            
        })
        e.target.classList.add("active")
        console.log(e.target.dataset.show)
        localStorage.setItem("show-option" , e.target.dataset.show)
    }
} )


yes.addEventListener('click' , (e)=>{
    document.querySelector(".bullets").style.display = "block"  
    localStorage.setItem("display" ,   document.querySelector(".bullets").style.display)
      
})
no.addEventListener('click' , (e)=>{
    document.querySelector(".bullets").style.display = "none"
    localStorage.setItem("display" ,   document.querySelector(".bullets").style.display)

})


// reset button
let btn = document.querySelector(" .reset-options")

btn.onclick = function(e){
    localStorage.removeItem("color-option")
    localStorage.removeItem("backgroundOption")
    localStorage.removeItem("display")
    localStorage.removeItem("imageNumber")
    localStorage.removeItem("show-option")

    window.location.reload()
}

// start scroll Progress

let el = document.querySelector(".scroll-progress");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

console.log(document.documentElement.scrollHeight);//lenth of all page 
console.log(document.documentElement.clientHeight);//length of current section
console.log(height);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;

let num =Math.round( `${(scrollTop / height) * 100}`)

// start display progress number
let progNum = document.querySelector(".scroll-progress .prog")
progNum.innerHTML = `${num} %`

// End display progress number

});

// start scroll Progress


 // start scroll to top Arrow
 let scrollTop = document.querySelector(".scroll-top")
window.addEventListener('scroll' , ()=>{
    
    if(window.scrollY >= 1300){
        scrollTop.style.display = "block"
    }else{
        scrollTop.style.display = "none"
    }
})


scrollTop.onclick = function(e){
    window.scrollTo({
        top:0,
        behavior:  "smooth"
    })
    // end scroll to top Arrow
}



// start  increase numbers when scrolling to its secrion 

let numbers  = document.querySelectorAll(".status .container .boxes .box span")
let ourStatus  = document.querySelector(".status")
let started = false
window.addEventListener('scroll' , ()=>{
    if(window.scrollY >=3500 ){
        if(!started){
            numbers.forEach((n)=>{
                startCount(n)
            })
        }
        started = true
        
    }
})
function startCount(el){
    let goal = el.dataset.goal
    console.log(goal)
    let count = setInterval(() => {
        el.textContent++
        if(el.textContent == goal){
            clearInterval(count)
        }
    }, 1500 / goal );
}
// End  increase numbers when scrolling to its secrion 

// start timer countDown calender
/*
/////////////html/////////
<span class="days"></span>
<span class="hours"></span>
<span class="minutes"></span>
<span class="seconds"></span>

/////////////js///////////
// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
*/





// End timer countDown calender