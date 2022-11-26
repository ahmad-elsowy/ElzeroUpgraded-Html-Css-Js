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