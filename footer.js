// ==============================================    Footer   ============================
// create footer div
let crtFooterDiv = document.createElement('div')
document.body.appendChild(crtFooterDiv);
crtFooterDiv.setAttribute('class','footer');
// create footer main div
let crtFooterMainDiv = document.createElement('div')
crtFooterDiv.appendChild(crtFooterMainDiv);
crtFooterMainDiv.setAttribute('class','footer-main-div container')
// create logo in footer div
let crtFooterLogoDiv = document.createElement('div');
crtFooterMainDiv.appendChild(crtFooterLogoDiv)
crtFooterLogoDiv.setAttribute('class','footer-logo-div')
// create circle logo into logo div
let crtFooterLogo = document.createElement('div');
crtFooterLogoDiv.appendChild(crtFooterLogo);
crtFooterLogo.setAttribute('class','circle-logo');
crtFooterLogo.addEventListener('click',()=>{
    location.href = 'index.html'
})
// create logo text into logo div
let crtFooterLogoText = document.createElement('div');
crtFooterLogoDiv.appendChild(crtFooterLogoText);
crtFooterLogoText.setAttribute('class','logo-text');

// create h3 into logo-text
let crtFooterLogoH3 = document.createElement('h3');
crtFooterLogoText.appendChild(crtFooterLogoH3);
crtFooterLogoH3.innerText = 'Giorgi Tsereteli';
crtFooterLogoH3.addEventListener('click',()=>{
    location.href = 'index.html'
})

// create span into logo-text
let crtFooterLogoTextSpan = document.createElement('span');
crtFooterLogoText.appendChild(crtFooterLogoTextSpan);
crtFooterLogoTextSpan.innerText = 'Portfolio Website';
crtFooterLogoTextSpan.addEventListener('click',()=>{
    location.href = 'index.html'
})
// create ul in footer div
let crtFooterUl = document.createElement('ul');
crtFooterMainDiv.appendChild(crtFooterUl);
crtFooterUl.setAttribute('class','footer-ul')
// create footer navigation
let crtFooterNavObj = [
    
     'Home',
     'Projects',
     'Tech Skills',
     'About me' 
    
]

// create loop for footer nav object
for(let i=0; i < crtFooterNavObj.length; i++){
    // create li into ul
    let crtFooterLi = document.createElement('li');
    crtFooterUl.appendChild(crtFooterLi);
    crtFooterLi.setAttribute('class','footer-li');
    // create a into li 
    let crtFooterA = document.createElement('a');
    crtFooterUl.appendChild(crtFooterA);
    crtFooterA.setAttribute('class','footer-a');
    crtFooterA.innerText = `${crtFooterNavObj[i]}`
    crtFooterA.addEventListener('click',routerLinks)
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
// create footer contact (phone,mail,address)
// create contact object 
let crtContactObj = [
    {
        title : '<i class="fas fa-phone-alt"></i>',
        contact : "+995-599-02-02-81"
    },
    {
        title : '<i class="fas fa-envelope"></i>',
        contact : "gio.wereteli.seu@gmail.com"
    },
    {
        title : '<i class="fas fa-location-arrow"></i>',
        contact : "Tbilisi , V.kupradze 74"
    }
]
let crtContactMainDiv = document.createElement('div');
crtFooterMainDiv.appendChild(crtContactMainDiv);
crtContactMainDiv.setAttribute('class','contact-main-div');
// create contact main title
let crtContactDivTitle = document.createElement('h3');
crtContactMainDiv.appendChild(crtContactDivTitle);
crtContactDivTitle.setAttribute('class','contact-div-title')
crtContactDivTitle.innerText = 'Lets Contact'
// create loop and get elements from it
for(let i=0; i < crtContactObj.length; i++){
    // create contact div
    let crtContactDiv = document.createElement('div');
    crtContactMainDiv.appendChild(crtContactDiv);
    crtContactDiv.setAttribute('class','contact-div')
    // create title of contact and get element from object
    let crtContactTitle = document.createElement('h3');
    crtContactDiv.appendChild(crtContactTitle);
    crtContactTitle.setAttribute('class','contact-title');
    crtContactTitle.innerHTML = `${crtContactObj[i].title}`
    // create contact adress and get element from object
    let crtContact = document.createElement('p');
    crtContactDiv.appendChild(crtContact);
    crtContact.setAttribute('class','contact')
    crtContact.innerText = `${crtContactObj[i].contact}`
}

// create copyright div
let crtCopyRightDiv = document.createElement('div');
crtFooterDiv.appendChild(crtCopyRightDiv);
crtCopyRightDiv.setAttribute('class','copyright-div container');
// create copyright text 
let crtCopyText = document.createElement('span');
crtCopyRightDiv.appendChild(crtCopyText);
crtCopyText.setAttribute('class','copyright-text')
crtCopyText.innerHTML = `<i class="fas fa-copyright"></i> All Right  Reserved . Made With <i class="fas fa-heart"></i> In Georgia`