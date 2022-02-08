if(document.location.pathname === '/about.html'){
    let activeElement = document.getElementsByClassName('nav-a')[3];
    activeElement.setAttribute('class','nav-a-active');
}
// ==============================================    WRAPPER   ============================
// Create about me page title div
let crtTechTitleDiv = document.createElement('div');
document.body.appendChild(crtTechTitleDiv);
crtTechTitleDiv.setAttribute('class','tech-title-div container');
// create about me title line
let crtTechTitleLine = document.createElement('div');
crtTechTitleDiv.appendChild(crtTechTitleLine);
crtTechTitleLine.setAttribute('class','tech-title-line');
// Create about me main title
let crtTechTitle = document.createElement('h1');
crtTechTitleDiv.appendChild(crtTechTitle);
crtTechTitle.setAttribute('class','tech-main-title');
crtTechTitle.innerText = 'About Me';

// Create about me main div
let crtAboutMainDiv = document.createElement('div');
document.body.appendChild(crtAboutMainDiv);
crtAboutMainDiv.setAttribute('class','about-main-div container');
// create about me Text
let crtAboutText = document.createElement('div');
crtAboutMainDiv.appendChild(crtAboutText);
crtAboutText.setAttribute('class','about-text-div');
// create about me title into text div
let crtAboutTitle = document.createElement('h3');
crtAboutText.appendChild(crtAboutTitle);
crtAboutTitle.setAttribute('class','about-text-title');
crtAboutTitle.innerText = 'Junior Front End Developer';
// create about me paragraph into text div
let crtAboutParagraph = document.createElement('p');
crtAboutText.appendChild(crtAboutParagraph);
crtAboutParagraph.setAttribute('class','about-text-paragraph');
crtAboutParagraph.innerText = `Hello, I am George, 22 years old. I study at the Georgian Technical University,Faculty of Mechanical Engineering. About 1 year ago I became interested in programming, it was difficult for me to enter a very foreign and difficult world, but as a result of daily work and study I was able to overcome the initial difficulties and now I have some knowledge and experience. Because my goals in this field are very big, which without work and study, I know,I can not achieve. In this way, if you need a young motivated developer, you are in the right place and I am ready to meet your expectations 100 percent.`
// Create about me image div
let crtAboutImgDiv = document.createElement('div');
crtAboutMainDiv.appendChild(crtAboutImgDiv);
crtAboutImgDiv.setAttribute('class','about-img-div');
// create img into image div
let crtAboutImg = document.createElement('img');
crtAboutImgDiv.appendChild(crtAboutImg);
crtAboutImg.setAttribute('src','img/about-me.png')
// create social links title
let crtSocialTitle = document.createElement('h3');
document.body.appendChild(crtSocialTitle);
crtSocialTitle.setAttribute('class','social-title container')
crtSocialTitle.innerText = 'Follow on Social'

// create social links
let crtSocialDiv = document.createElement('div');
document.body.appendChild(crtSocialDiv);
crtSocialDiv.setAttribute('class','about-social-div container');
let socialMediaObject = [
     '<i class="fab fa-facebook-f"></i>',
     '<i class="fab fa-instagram"></i>',
     '<i class="fab fa-github"></i>',
]
for(let i=0; i < socialMediaObject.length; i++){
    let crtSocial = document.createElement('p');
    crtSocialDiv.appendChild(crtSocial);
    crtSocial.innerHTML =`${socialMediaObject[i]}`
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
        e.currentTarget.style.color = '#5239be';
        e.currentTarget.style.textShadow ='0px 0px 2px #5239be';
    }
    if(e.currentTarget.className == "1"){
        e.currentTarget.style.color = 'red';
        e.currentTarget.style.textShadow ='0px 0px 2px red';
    }
    if(e.currentTarget.className == "2"){
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

// On Scroll Animation
onScrollAnimation();
function onScrollAnimation(){
    skillsTitleAnimation();
    aboutTextAnimation();
    aboutImgAnimation();
    socialTitleAnimation();
    socialAnimation();
}

// skill title animation
function skillsTitleAnimation(){
    var skillTitle = document.querySelector('.tech-title-div');
    var elementPosition = skillTitle.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(elementPosition < screenPosition){
        skillTitle.classList.add('tech-title-div-appear');
    }
}
// about text animation
function aboutTextAnimation(){
    var aboutText = document.querySelector('.about-text-div');
    var elementPosition = aboutText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(elementPosition < screenPosition){
        aboutText.classList.add('about-text-div-appear');
    }
}
// about image animation
function aboutImgAnimation(){
    var aboutImg = document.querySelector('.about-img-div');
    var elementPosition = aboutImg.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(elementPosition < screenPosition){
        aboutImg.classList.add('about-img-appear');
    }
}

// social title animation
function socialTitleAnimation(){
    var socialTitle = document.querySelector('.social-title');
    var elementPosition = socialTitle.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(elementPosition < screenPosition){
        socialTitle.classList.add('social-title-appear');
    }
}
// social div animation
function socialAnimation(){
    var social = document.querySelector('.about-social-div');
    var elementPosition = social.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(elementPosition < screenPosition){
        social.classList.add('about-social-div-appear');
    }
}