if(document.location.pathname === 'https://frontenddv.github.io/Portfolio/index.html'){
    let activeElement = document.getElementsByClassName('nav-a')[0]
    activeElement.setAttribute('class','nav-a-active')
}
// ==============================================    WRAPPER   ============================
// create wrapper main div
let crtWrapper = document.createElement('div');
document.body.appendChild(crtWrapper);
crtWrapper.setAttribute('class','wrapper container');

// create wrapper-text div
let crtWrapperText = document.createElement('div');
crtWrapper.appendChild(crtWrapperText);
crtWrapperText.setAttribute('class','wrapper-text');

// create h5 into wrapper text div
let crtWrapperH5 = document.createElement('h5');
crtWrapperText.appendChild(crtWrapperH5);
crtWrapperH5.innerText = `Hello i'm Giorgi Tsereteli`;
crtWrapperH5.setAttribute('class','wrapper-h5');

// create h1 into wrapper text div
let crtWrapperH1 = document.createElement('h1');
crtWrapperText.appendChild(crtWrapperH1);
crtWrapperH1.innerText = `Junior Front End 
                          Developer`;
crtWrapperH1.setAttribute('class','wrapper-h1');

// create paragraph into wrapper text div
let crtWrapperPara = document.createElement('p');
crtWrapperText.appendChild(crtWrapperPara);
crtWrapperPara.setAttribute('class','wrapper-p');
crtWrapperPara.innerText = `Travel to the site, discover my capabilities and completed projects,if I am the one you are looking for click the button and contact me easily, you can also follow me on social media.
`

// create hire button into wrapper text div
let crtHireBtn = document.createElement('button');
crtWrapperText.appendChild(crtHireBtn);
crtHireBtn.innerText = `Hire Me`;
crtHireBtn.setAttribute('class','wrapper-btn');
// on click hire me button opens microsoft email , ready to send email 
crtHireBtn.addEventListener('click',sendEmail)
function sendEmail() {
    var link = "mailto:gio.wereteli.seu@gmail.com"
             + "?cc="
             + "&subject=" + encodeURIComponent("Job Offer")
             + "&body=" + encodeURIComponent("Hello Giorgi , i want hire you , if you get my email please reply.")
    ;
    window.location.href = link;
}

// create wrapper-img div into main div
let crtImgDiv = document.createElement('div');
crtWrapper.appendChild(crtImgDiv);
crtImgDiv.setAttribute('class','wrapper-img-div');

// create img into wrapper-img div
let crtImg = document.createElement('img');
crtImgDiv.appendChild(crtImg);
crtImg.setAttribute('src',"img/clip-scientist.png");


// ==============================================    Section projects   ============================
// create section projects main div
let crtSectionTwo = document.createElement('div');
document.body.appendChild(crtSectionTwo);
crtSectionTwo.setAttribute('class','section-two-main-div container');
// create section projects title ( my latest projects)
let crtSectionTwoTitle = document.createElement('h1');
crtSectionTwo.appendChild(crtSectionTwoTitle);
crtSectionTwoTitle.setAttribute('class','section-two-title');
crtSectionTwoTitle.innerText = 'My Biggest Projects';
// create biggest projects object
let crtBigstProjectObj = [
    {
        title : 'GT SURVEY',
        subtitle : "Project | Web Design , Coding",
        description : `This website create with HTML, CSS, Bootstrap, Js, jQuery.Design created in Figma by me. The website is a Responsive on Desktop , Tablet and also Mobile `,
        image : 'img/MacBook, iPad, iPhone.png',
        background : "#008c51"
    },
    {
        title : 'furni.shop',
        subtitle : "Portfolio Project | Coding",
        description : `This website create with HTML, CSS, Js, jQuery, JSON,AJAX, GSAP.The website is a Responsive on Desktop ,Tablet and also Mobile`,
        image : 'img/MacBook Pro & iPhone 12 Pro.png',
        background : "#60a478"
    }

]

// create div 
let crtSectionDiv = document.createElement('div');
crtSectionTwo.appendChild(crtSectionDiv);
crtSectionDiv.setAttribute('class','section-div container');
// create loop for this biggest projects obj
for(let i=0; i < crtBigstProjectObj.length; i++){
    // create div into main section div
    let crtBgstProjectBox = document.createElement('div');
    crtSectionDiv.appendChild(crtBgstProjectBox);
    crtBgstProjectBox.setAttribute('class','biggest-project-box')
    // create title 
    let crtBgstProjectBoxTitle = document.createElement('h3');
    crtBgstProjectBox.appendChild(crtBgstProjectBoxTitle);
    crtBgstProjectBoxTitle.setAttribute('class','biggest-project-title');
    crtBgstProjectBoxTitle.innerText = `${crtBigstProjectObj[i].title}`;
    // create subtitle
    let crtBgstProjectBoxSubtitle = document.createElement('p');
    crtBgstProjectBox.appendChild(crtBgstProjectBoxSubtitle);
    crtBgstProjectBoxSubtitle.setAttribute('class','biggest-project-subtitle');
    crtBgstProjectBoxSubtitle.innerText = `${crtBigstProjectObj[i].subtitle}`;
    // create description
    let crtBgstProjectBoxDescription = document.createElement('p');
    crtBgstProjectBox.appendChild(crtBgstProjectBoxDescription);
    crtBgstProjectBoxDescription.setAttribute('class','biggest-project-description');
    crtBgstProjectBoxDescription.innerText = `${crtBigstProjectObj[i].description}`;
    // create image
    let crtBgstProjectBoxImg = document.createElement('div')
    crtBgstProjectBox.appendChild(crtBgstProjectBoxImg);
    crtBgstProjectBoxImg.setAttribute('class','biggest-project-img-div')
    let crtBgstProjectImg = document.createElement('img');
    crtBgstProjectBoxImg.appendChild(crtBgstProjectImg);
    crtBgstProjectImg.setAttribute('src',`${crtBigstProjectObj[i].image}`)
    // get backgroung color from object
    crtBgstProjectBox.style.background = `${crtBigstProjectObj[i].background}`
    crtBgstProjectBox.addEventListener('click',biggestProjectLinks);
}

function biggestProjectLinks(e){
    const findBackground = e.currentTarget.style.background;
    if(findBackground === 'rgb(0, 140, 81)'){
       window.open('https://frontenddv.github.io/GT-Survey/')
       return true
    }
    if(findBackground === 'rgb(96, 164, 120)'){
        window.open('https://frontenddv.github.io/furni.shop/')
        return true
    }
}

// ==============================================    Section contact me   ============================
// create section projects title ( my latest projects)
let crtSectionContactTitle = document.createElement('h1');
document.body.appendChild(crtSectionContactTitle);
crtSectionContactTitle.setAttribute('class','section-contactMe-title container');
crtSectionContactTitle.innerText = 'Contact Me';
// create section projects main div
let crtSectionContact = document.createElement('div');
document.body.appendChild(crtSectionContact);
crtSectionContact.setAttribute('class','section-contactMe-main-div container');
// create all text div
let crtSectionContactStringDiv = document.createElement('div');
crtSectionContact.appendChild(crtSectionContactStringDiv);
crtSectionContactStringDiv.setAttribute('class','section-contact-string-div');
// create subtitle
let crtSectinContactSubtitle = document.createElement('h3');
crtSectionContactStringDiv.appendChild(crtSectinContactSubtitle);
crtSectinContactSubtitle.setAttribute('class','section-contactMe-subtitle')
crtSectinContactSubtitle.innerText = 'Let`s Get in Touch.'
// create contact me text
let crtSectionContactText = document.createElement('p');
crtSectionContactStringDiv.appendChild(crtSectionContactText);
crtSectionContactText.setAttribute('class','section-contactMe-text');
crtSectionContactText.innerText = `Feel free to reach out for
                                   collaborations or just
                                   a friendly hello!`;
// create social object
let crtSocialObject = [
    '<i class="fab fa-facebook"></i>  facebook.com/gio.wereteli.seu',
     '<i class="fab fa-instagram"></i> instagram.com/giovannitss/',
     '<i class="fab fa-github"></i> github.com/FrontendDV',
]  
// create social links in contact me text
let crtSectionContactSocial = document.createElement('div');
crtSectionContactStringDiv.appendChild(crtSectionContactSocial);
crtSectionContactSocial.setAttribute('class','section-contact-social');                                  
for(let i=0; i < crtSocialObject.length; i++){
    let crtSocial = document.createElement('span');
    crtSectionContactSocial.appendChild(crtSocial);
    crtSocial.innerHTML =`${crtSocialObject[i]} `
    crtSocial.setAttribute('class',`${i}`)
    crtSocial.addEventListener('click',hireWithSocial);
    crtSocial.addEventListener('mouseover', socialHovers);
    crtSocial.addEventListener('mouseout', socialHoversEnd);
}
function hireWithSocial(e){
    e.preventDefault();
    if(e.currentTarget.className == "0"){
        window.open('https://www.facebook.com/gio.wereteli.seu/')
    }
    if(e.currentTarget.className == "1"){
        window.open('https://www.instagram.com/giovannitss/')
    }
    if(e.currentTarget.className == "2"){
        window.open('https://github.com/FrontendDV')
    }
}
function socialHovers(e){
    if(e.currentTarget.className == "0"){
        e.currentTarget.style.cursor = 'pointer';
        
        e.currentTarget.style.textShadow ='0px 0px 2px #5239be';
    }
    if(e.currentTarget.className == "1"){
        e.currentTarget.style.cursor = 'pointer';
        e.currentTarget.style.color = 'red';
        e.currentTarget.style.textShadow ='0px 0px 2px red';
    }
    if(e.currentTarget.className == "2"){
        e.currentTarget.style.cursor = 'pointer';
       e.currentTarget.style.color = 'orange';
       e.currentTarget.style.textShadow ='0px 0px 2px orange';
    }
}
function socialHoversEnd(e){
    if(e.currentTarget.className == "0"){
        e.currentTarget.style.color = 'black';
        e.currentTarget.style.textShadow ='none';
    }
    if(e.currentTarget.className == "1"){
        e.currentTarget.style.color = 'black';
        e.currentTarget.style.textShadow ='none';
    }
    if(e.currentTarget.className == "2"){
       e.currentTarget.style.color = 'black';
       e.currentTarget.style.textShadow ='none';
       
    }
}  
// create img div
let crtContactImgDiv = document.createElement('div');
crtSectionContact.appendChild(crtContactImgDiv);
crtContactImgDiv.setAttribute('class','section-contactMe-img-div');
// create img
let crtContactImg = document.createElement('img');
crtContactImgDiv.appendChild(crtContactImg);
crtContactImg.setAttribute('src',"img/planet.png")
// create form 
let crtContactForm = document.createElement('div');
document.body.appendChild(crtContactForm);
crtContactForm.setAttribute('class','contact-form container')
let crtNameInput = document.createElement('input');
crtContactForm.appendChild(crtNameInput);
crtNameInput.setAttribute('placeholder','Name')
crtNameInput.setAttribute('type','text')
let crtCommentInput = document.createElement('textarea');
crtContactForm.appendChild(crtCommentInput);
crtCommentInput.setAttribute('placeholder','Comment')
crtCommentInput.setAttribute('type','text')
let crtFormBtn = document.createElement('button');
crtContactForm.appendChild(crtFormBtn);
crtFormBtn.setAttribute('class','contact-form-btn');
crtFormBtn.innerText = 'Let`s Talk';
// form btn listener
crtFormBtn.addEventListener('click',formBtn);

function formBtn() {
    var link = "mailto:gio.wereteli.seu@gmail.com"
             + `?cc=`
             + "&subject=" + encodeURIComponent("Job Offer")
             + "&body=" + encodeURIComponent(`${crtCommentInput.value}`)
    ;
    window.location.href = link;
}
// create testimonial
let crtThanks = document.createElement('h1');
document.body.appendChild(crtThanks);
crtThanks.setAttribute('class','thank container')
crtThanks.innerHTML = `Great things happen to those who don't stop <span>believing</span>,<span>trying</span> , <span>learning</span> and beign <span>grateful.</span> `

                                                           // On Scroll Animation
onScrollAnimation()
function onScrollAnimation(){
    wrapperTextAnimation();
    wrapperImgAnimation();
    window.addEventListener('scroll',contactMeAnimation);
    window.addEventListener('scroll',contactFormAnimation);
    window.addEventListener('scroll',projectSectionAnimation);
    window.addEventListener('scroll',contactMeTitleAnimation);
    window.addEventListener('scroll', testimonialAnimation);
}

// wrapper text 
function wrapperTextAnimation(){
    var wraperText = document.querySelector('.wrapper-text');
    var elementPosition = wraperText.getBoundingClientRect().top;
    var screenPoistion = window.innerHeight;

    if(elementPosition < screenPoistion){
        wraperText.classList.add('wrapper-text-appear');
    }
}
// wrapper image
function wrapperImgAnimation(){
    var wrapperImg = document.querySelector('.wrapper-img-div');
    var elementPosition = wrapperImg.getBoundingClientRect().top;
    var screenPoistion = window.innerHeight;

    if(elementPosition < screenPoistion){
        wrapperImg.classList.add('wrapper-img-appear');
    }
}
// project section
function projectSectionAnimation(){
    var biggestProjectBox = document.querySelector('.section-two-main-div');
    var projectPosition = biggestProjectBox.getBoundingClientRect().top;
    var screenPoistion = window.innerHeight / 1.1;

    if(projectPosition < screenPoistion){
        biggestProjectBox.classList.add('section-appear');
    }
}
// contact me title
function contactMeTitleAnimation(){
    var contactMeTitle = document.querySelector('.section-contactMe-title');
    var elementPosition = contactMeTitle.getBoundingClientRect().top;
    var screenPoistion = window.innerHeight / 1.1;

    if(elementPosition < screenPoistion){
        contactMeTitle.classList.add('section-contactMe-title-appear');
    }
}
// contact me main div
function contactMeAnimation(){
    var sectionContactMe = document.querySelector('.section-contactMe-main-div');
    var elementPosition = sectionContactMe.getBoundingClientRect().top;
    var screenPoistion = window.innerHeight / 1.1;

    if(elementPosition < screenPoistion){
        sectionContactMe.classList.add('section-main-div-appear');
    }
}
// contact me form
function contactFormAnimation(){
    var sectionContactMe = document.querySelector('.contact-form');
    var elementPosition = sectionContactMe.getBoundingClientRect().top;
    var screenPoistion = window.innerHeight / 1.1;

    if(elementPosition < screenPoistion){
        sectionContactMe.classList.add('contact-form-appear');
    }
}

// testimonial animation
function testimonialAnimation(){
    var testimonial = document.querySelector('.thank');
    var elementPosition = testimonial.getBoundingClientRect().top;
    var screenPoistion = window.innerHeight / 1.1;

    if(elementPosition < screenPoistion){
        testimonial.classList.add('thank-appear');
    }
}
