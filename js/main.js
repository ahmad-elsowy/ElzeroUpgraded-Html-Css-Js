//check idf there is color in local storage 
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
        console.log("iam here")
        spans.forEach((span)=>{
            span.style.width = span.dataset.progress
            console.log(span.dataset.progress)
        })
    }
}
// ------------- End skill  progress----------------


//when clicking on image on gallery section
let imageBox  = document.querySelectorAll(".image-box")
let imgs = document.querySelectorAll(".image-box img")


imageBox.forEach((img)=>{
    img.onclick=function(){
        console.log(img.dataset.imageName)////////////////////////////////////////////////solve it ya sowy
        
        let div = document.createElement("div")
        let imageHeader = document.createElement("h2")

        let headerName = document.createTextNode("lll")


        let imageFull = document.createElement("img")    
        imageHeader.appendChild(headerName)
       div.appendChild(imageHeader)
       div.className="div-created"
       div.appendChild(imageFull)
       document.body.appendChild(div)

    }
})

