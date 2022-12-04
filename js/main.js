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

// //create element
// let ul = document.createElement("ul")
// //add class to ul
// ul.className = "bullets show"

// //add div to body
// document.body.appendChild(ul)
// //create lists
// let li = []
// let a =[]
// let href = ["#about-us","#our-skills","#our-gallery","#timeline","#feature","#testimonials","#contact"]
// for(let i = 0;i<7;i++){
//     li[i] =  document.createElement("li")
//     a[i]  = document.createElement("a")
//     a[i].href =  href[i]
// }

// //add li to lists
// for(let i = 0;i<7;i++){
//     ul.appendChild(li[i])  
//     li[i].appendChild(a[i])
// }



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
    // e.target.classList.add("displayed")
    localStorage.setItem("display" ,   document.querySelector(".bullets").style.display)
      
})
no.addEventListener('click' , (e)=>{
    document.querySelector(".bullets").style.display = "none"
    // e.target.classList.remove("displayed")
    localStorage.setItem("display" ,   document.querySelector(".bullets").style.display)

})



