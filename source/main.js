const taskbar = document.querySelector('.taskbar')
const startMenu = document.querySelector('.start-menu')



taskbar.addEventListener('click', ()=>{
 
    console.log(startMenu)
//   let menuPosition = startMenu.style.bottom
    if( startMenu.style.bottom ==="50px"){
        startMenu.style.bottom = "-418px"
    }else{
        startMenu.style.bottom = "50px"
    }
})