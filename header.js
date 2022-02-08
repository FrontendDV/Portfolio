// onScroll function makes arrow visible
window.onscroll = function() {scrolli()};
function scrolli(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        let getArrow = document.querySelector('.arrow');
        getArrow.style.display = 'block';
        document.body.style.overflowX = 'hidden';
    }else{
        let getArrow = document.querySelector('.arrow');
        getArrow.style.display = 'none';
    }
}
if(document.location.pathname === '/Portfolio'){
    let activeElement = document.getElementsByClassName('nav-a')[0]
    activeElement.setAttribute('class','nav-a-active')
}
// ==============================================    HEADER   ============================
// create header 
let crtHeader = document.createElement('header');
document.body.appendChild(crtHeader);
crtHeader.setAttribute('class','header container');

// create logo div
let crtLogoDiv = document.createElement('div');
crtHeader.appendChild(crtLogoDiv);
crtLogoDiv.setAttribute('class','logo');

// create circle logo into logo div
let crtCircleLogo = document.createElement('div');
crtLogoDiv.appendChild(crtCircleLogo);
crtCircleLogo.setAttribute('class','circle-logo');
crtCircleLogo.addEventListener('click',()=>{
    location.href = 'index.html'
})
// create logo text into logo div
let crtLogoText = document.createElement('div');
crtLogoDiv.appendChild(crtLogoText);
crtLogoText.setAttribute('class','logo-text');

// create h3 into logo-text
let crtLogoTextH3 = document.createElement('h3');
crtLogoText.appendChild(crtLogoTextH3);
crtLogoTextH3.innerText = 'Giorgi Tsereteli';
crtLogoTextH3.addEventListener('click',()=>{
    location.href = 'index.html'
})

// create span into logo-text
let crtLogoTextSpan = document.createElement('span');
crtLogoText.appendChild(crtLogoTextSpan);
crtLogoTextSpan.innerText = 'Portfolio Website';
crtLogoTextSpan.addEventListener('click',()=>{
    location.href = 'index.html'
})
//create navigation 
let crtNav = document.createElement('nav');
crtHeader.appendChild(crtNav);
crtNav.setAttribute('class','nav');

// create ul into navigation
let crtUl = document.createElement('ul');
crtNav.appendChild(crtUl);
crtUl.setAttribute('class','nav-ul');

// create navigation items like object
let navObj = [
     'Home',
     'Projects',
     'Tech Skills',
     'About me'    
]
// create loop for creating li and a and take object values into a tag
for(let i=0; i < navObj.length; i++){
    // create li into ul
    let crtLi = document.createElement('li');
    crtUl.appendChild(crtLi);
    crtLi.setAttribute('class','nav-li');
    // create a into ul
    let crtA = document.createElement('a');
    crtLi.appendChild(crtA);
    crtA.setAttribute('class','nav-a');
    crtA.innerText = `${navObj[i]}`;
    crtA.addEventListener('click', routerLinks);
}
// this function for routerLinks listener
function routerLinks(e){
    if(e.currentTarget.innerText === 'Home'){
        location.href = 'index.html';
    }
    if(e.currentTarget.innerText === 'Projects'){
        location.href = 'projects.html';
    }
    if(e.currentTarget.innerText === 'Tech Skills'){
        location.href = 'skills.html';
    }
    if(e.currentTarget.innerText === 'About me'){
        location.href = 'about.html';
    }
}

// create button 
let crtBtn = document.createElement('a');
crtHeader.appendChild(crtBtn);
crtBtn.innerText = 'Contact';
crtBtn.setAttribute('class','contact-button');
crtBtn.setAttribute('href',"tel:+995-599-02-02-81");


// create hamburger menu button
let crtHamburgerDiv = document.createElement('div');
crtHeader.appendChild(crtHamburgerDiv);
crtHamburgerDiv.setAttribute('class','hamburger-div');
// create hamburger icon
let crtHamburgerIconLine1 = document.createElement('div');
crtHamburgerDiv.appendChild(crtHamburgerIconLine1);
crtHamburgerIconLine1.setAttribute('class','line-1');
let crtHamburgerIconLine2 = document.createElement('div');
crtHamburgerDiv.appendChild(crtHamburgerIconLine2);
crtHamburgerIconLine2.setAttribute('class','line-2');
let crtHamburgerIconLine3 = document.createElement('div');
crtHamburgerDiv.appendChild(crtHamburgerIconLine3);
crtHamburgerIconLine3.setAttribute('class','line-3');
// create hamburger menu animation on click
crtHamburgerDiv.addEventListener('click',hamburgerMenuAnimation);
function hamburgerMenuAnimation(){
    document.body.classList.toggle('body-overflowY')
    crtHiddenNavBar.classList.toggle('navToggle');
    // center line
    crtHamburgerIconLine2.classList.toggle('line-2Toggle');
    // top line
    crtHamburgerIconLine1.classList.toggle('line-1Toggle');
    // bottom line
    crtHamburgerIconLine3.classList.toggle('line-3Toggle');
}

// create hidden nav-bar
let crtHiddenNavBar = document.createElement('div');
crtHeader.appendChild(crtHiddenNavBar);
crtHiddenNavBar.setAttribute('class','hidden-nav');
// create hidden nav-bar ul
let crtHiddenUl = document.createElement('ul');
crtHiddenNavBar.appendChild(crtHiddenUl);
crtHiddenUl.setAttribute('class','hidden-ul');
let hiddenUlObj = [
    'Home',
    'Projects',
    'Tech Skills',
    'About me'
]
for(let i=0; i < hiddenUlObj.length; i++){
    let crtHiddenLi = document.createElement('li');
    crtHiddenUl.appendChild(crtHiddenLi);
    crtHiddenLi.setAttribute('class','hidden-li');
    let crtHiddenA = document.createElement('a');
    crtHiddenLi.appendChild(crtHiddenA);
    crtHiddenA.setAttribute('class','hidden-a');
    crtHiddenA.innerText = `${hiddenUlObj[i]}`;
    crtHiddenA.addEventListener('click',hiddenNavigation);
}
function hiddenNavigation(e){
    if(e.currentTarget.innerText === 'Home'){
        location.href = 'index.html';
    }
    if(e.currentTarget.innerText === 'Projects'){
        location.href = 'projects.html';
    }
    if(e.currentTarget.innerText === 'Tech Skills'){
        location.href = 'skills.html';
    }
    if(e.currentTarget.innerText === 'About me'){
        location.href = 'about.html';
    }
}
let crtArrowDiv = document.createElement('p');
document.body.appendChild(crtArrowDiv);
crtArrowDiv.setAttribute('class','arrow');
crtArrowDiv.innerHTML = `<i class="fas fa-chevron-up"></i>`
crtArrowDiv.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

