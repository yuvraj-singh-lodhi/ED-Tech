import { Tutorial } from "./Data/mainDB.js"
import { References } from "./Data/References.js"


// section mobile btn

let MenuBtnMobileEl= document.getElementById("menu-btn-mobile")
let MenuBtnMobileElOpenBoolen =false
let MobileMenuNavEl = document.getElementById("mobile-menu-nav")


MenuBtnMobileEl.addEventListener("click",()=>{
    if (MenuBtnMobileElOpenBoolen){
        // MobileMenuNavEl.style.display="none"
        MobileMenuNavEl.classList.remove("mobile-menu-nav-hidden")
        MenuBtnMobileElOpenBoolen= false
    }
    else{
        // MobileMenuNavEl.style.display ="block"
        MobileMenuNavEl.classList.add("mobile-menu-nav-hidden")
        MenuBtnMobileElOpenBoolen =true
    }
})

let mobilenavcloseEl= document.getElementById("mobile-nav-close")
    
mobilenavcloseEl.addEventListener("click",()=>{
    // MobileMenuNavEl.style.display="none"
    MobileMenuNavEl.classList.remove("mobile-menu-nav-hidden")
    MenuBtnMobileElOpenBoolen= false
    })


    // Tutorial-btn
const NestedNavigationcloseBtn = document.getElementById("nested-navigation-close-btn")
const NestedNavigationContainer = document.getElementById("nested-navigation-container_id")
let TutorialEl = document.getElementById("Tutorial-btn")

TutorialEl.addEventListener("click",toggleTutorial)
NestedNavigationcloseBtn.addEventListener("click",toggleTutorial)

function toggleTutorial(){
    NestedNavigationContainer.classList.toggle("nested-navigation_hidden")
}

// tutorial data
console.log(Tutorial)

// 

let NestedNavigationContainerContentID = document.getElementById("nested-navigation-container-contentID")
let NestedNavigationHeading = ''
let NestedNavigationTab1 = ''
let NestedNavigationTab2 = ''
let NestedNavigationTab3 = ''
let NestedNavigationTab4 = ''
//


/*  heading*/
NestedNavigationHeading += `<h1>${Tutorial.name}</h1>`


//sub menu
NestedNavigationTab1 +=`<h2>${Tutorial.HTMLandCSS.name}</h2>`
Tutorial.HTMLandCSS.menu.forEach(el =>{
    NestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
})


NestedNavigationTab2 += `<h2>${Tutorial.JavaScript.name}</h2>`
Tutorial.JavaScript.menu.forEach(el =>{
    NestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`
})

NestedNavigationTab3 += `<h2>${Tutorial.ServerSide.name}</h2>`
Tutorial.ServerSide.menu.forEach(el =>{
    NestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`
})

NestedNavigationTab4 += `<h2>${Tutorial.DataAnalytics.name}</h2>`
Tutorial.DataAnalytics.menu.forEach(el =>{
    NestedNavigationTab4 += `<a href="${el.link}">${el.title}</a>`
})



//// render all the menu

NestedNavigationContainerContentID.innerHTML=`
    ${NestedNavigationHeading}
    <div class="nested-navigation-container_content_data">
            <div class="nested-navigation_item">
                 ${NestedNavigationTab1}
            </div>
            <div class="nested-navigation_item">
                 ${NestedNavigationTab2}
            </div>
            <div class="nested-navigation_item">
                 ${NestedNavigationTab3}
            </div>
            <div class="nested-navigation_item">
                 ${NestedNavigationTab4}
            </div>
    </div>
`
/* Tutorial_menuLink_mobile*/
const TutorialMenuLinkMobileEl= document.getElementById("Tutorial_menuLink_mobile")
let TutorialMenuMobileEl = document.getElementById("Tutorial_menu_mobile")


let tutorialMenuTab_moblie = NestedNavigationHeading + NestedNavigationTab1 + NestedNavigationTab2 + NestedNavigationTab3 + NestedNavigationTab4
TutorialMenuLinkMobileEl.addEventListener("click",()=>{
    TutorialMenuLinkMobileEl.classList.toggle("mobile_menu_Active")
    TutorialMenuMobileEl.classList.toggle("mobile_menu_Active_Tutorial")

    TutorialMenuMobileEl.innerHTML = tutorialMenuTab_moblie
} ) 

