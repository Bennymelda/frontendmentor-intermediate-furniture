let array =[{
image:'desktop-image-hero-1.jpg',
description:`<p class='d'>Discover innovative ways to decorate<\p>
<span class="p">We provide unmatched quality, comfort, and style for property owners
across the country.Our experts combines from and fuction in bringing your vision to life. Create a room in your own style with our collection and make your property
a reflection of you and what you love.<\span>
<div class='dd'>
<p class='pp'>SHOP NOW <\p>
<img src='icon-arrow.svg' class='arrow'>
<\div>`,
images:'image-about-dark.jpg',
procedure:`
<p class='pi'>ABOUT OUR FURNITURE<\p>
<span class='our'>Our multifunctional collection blends design and funiture to suite your individual taste. Make each room unique, or pick a cohesive
theme that best express your intrest and what insipres you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between.
Product specialists are available to help you create your dream space.

`,
img:'image-about-light.jpg',

},{
    image:'desktop-image-hero-2.jpg',
description:`<p class='d'>We are available all across the globe<\p>
<span class="p">With stores all over the world, it is easy for for you to finf furniture for your home or
places of business. Locally, we're in most major cities through the country.Find the branch nearest you using
our state locator .Any question? Don't hesitate contact us today.<\span>
<div class='dd'>
<p class='pp'>SHOP NOW <\p>
<img src='icon-arrow.svg' class='arrow'>
<\div>`,
images:'image-about-dark.jpg',
procedure:`
<p class="pi">ABOUT OUR FURNITURE<\p>
<span class="our">Our multifunctional collection blends design and funiture to suite your individual taste. Make each room unique, or pick a cohesive
theme that best express your intrest and what insipres you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between.
Product specialists are available to help you create your dream space.

`,
img:'image-about-light.jpg',
},{
    
    image:'desktop-image-hero-3.jpg',
description:`<p class='d'>Manufactured with best material<\p>
<span class='p'>Our mordern furniture store provides a high level of quality.Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as
possible. With three decades of experience in this industry. We understand what customer want for their home and offices<\span>
<div class='dd'>
<p class='pp'>SHOP NOW <\p>
<img src='icon-arrow.svg' class='arrow'>
<\div>
`,
images:'image-about-dark.jpg',
procedure:`
<p class='pi'>ABOUT OUR FURNITURE<\p>
<span class="our">Our multifunctional collection blends design and funiture to suite your individual taste. Make each room unique, or pick a cohesive
theme that best express your intrest and what insipres you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between.
Product specialists are available to help you create your dream space.

`,
img:'image-about-light.jpg',


}]

let current=0
function currentIndex(){
    let currentObject=array[current]
document.querySelector('.image').src=currentObject.image
document.querySelector('.description').innerHTML=currentObject.description
document.querySelector('.images').src=currentObject.images
document.querySelector('.procedure').innerHTML=currentObject.procedure
document.querySelector('.img').src=currentObject.img  

}
currentIndex()


document.querySelector('.left').addEventListener('click', ()=>{
    current++
    if( current >= array.length){
        current=0
    }

    currentIndex()
})

document.querySelector('.right').addEventListener('click', ()=>{
    current--
    if( current < 0){
    current= array.length - 1
    }

    currentIndex()
})

let menu=document.querySelector('.menu')
let nav= document.querySelector('nav')
menu.addEventListener('click', ()=>{
    if(menu.src.endsWith('icon-hamburger.svg')){
        menu.src='icon-close.svg'
        menu.style.filter='brightness(0) invert(1)'
        nav.style.display='flex'
        document.querySelector('.lo').style.display='none'
    }else{
        
        menu.src='icon-hamburger.svg'
        nav.style.display='none'
        document.querySelector('.lo').style.display='flex'
    }
})






/*
let total=''
array.forEach(items =>{
    total +=`<div>
        <div>
            <img src='${items.image}'>
        </div>
        <div>
            <div>${items.description}</div>
        </div>
    </div>
    <div>

    <img src='icon-angle-left.svg'>
    <img src='icon-angle-right.svg'>
    </div>

    <img src='${items.images}'>
    <div>${items.procedure}</div>
    <img src='${items.img}'>`
})
document.querySelector('.show').innerHTML=total
*/