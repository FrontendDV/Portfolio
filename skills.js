if(document.location.pathname === '/skills.html'){
    let activeElement = document.getElementsByClassName('nav-a')[2]
    activeElement.setAttribute('class','nav-a-active')
}
// ==============================================    Tech Skills   ============================
// Create tech page title div
let crtTechTitleDiv = document.createElement('div');
document.body.appendChild(crtTechTitleDiv);
crtTechTitleDiv.setAttribute('class','tech-title-div container')
// create tech skills title line
let crtTechTitleLine = document.createElement('div');
crtTechTitleDiv.appendChild(crtTechTitleLine);
crtTechTitleLine.setAttribute('class','tech-title-line')
// Create tech skills main title
let crtTechTitle = document.createElement('h1')
crtTechTitleDiv.appendChild(crtTechTitle);
crtTechTitle.setAttribute('class','tech-main-title')
crtTechTitle.innerText = 'My Skills';



// Create tech skills div 
let crtTechSkillsDiv = document.createElement('div');
document.body.appendChild(crtTechSkillsDiv);
crtTechSkillsDiv.setAttribute('class','tech-skills-div');

// create tech skills object
let techSkillsObject = [
    {
        image : 'img/icons8-html-5-48.png',
        title : 'HTML',
        description : `Graduated 'Frontend Developer : Coding' course at Wayup, Where I learned HTML and CSS.`
    },
     {
        image : 'img/icons8-css3-48.png',
        title : 'CSS',
        description : `Graduated 'Frontend Developer' : Coding course at Wayup, Where I learned HTML and CSS.`
    },
     {
        image : 'img/icons8-javascript-48.png',
        title : 'Javascript',
        description : `Graduated 'Frontend Developer : Javascript' course at Scientific Cyber Security Association`
    },
     {
        image : 'img/icons8-sass-48.png',
        title : 'SASS/SCSS(Basics)',
        description : `I learned CSS preprocessor after mastering CSS from Geolab youtube Course.`
    },
     {
        image : 'img/icons8-bootstrap-48.png',
        title : 'Bootstrap(Basics)',
        description : `I studied it from Geolab youtube Course.Know Basics`
    },
     {
        image : 'img/icons8-jquery-is-a-javascript-library-designed-to-simplify-html-48.png',
        title : 'jQuery(Basics)',
        description :`Graduated 'Frontend Developer : Javascript' course at Scientific Cyber Security Association`
    },
     {
        image : 'img/icons8-figma-48.png',
        title : 'FIGMA(Basics)',
        description : `Graduated 'Frontend Developer : Web Design' course at Wayup, Where I learned HTML and CSS.`
    },
     {
        image : 'img/icons8-adobe-photoshop-48.png',
        title : 'PHOTOSHOP(Basics)',
        description : `Graduated 'Frontend Developer : Web Design' course at Wayup, Where I learned HTML and CSS.`
    },
     {
        image : 'img/icons8-angularjs-48.png',
        title : 'ANGULAR(COMING SOON)',
        description : `I am learning Angular at this stage on my own with the help of Udem and Geolab online courses and will soon be able to use it for real projects`
    }
    
]

// create loop for tech skills object 
for(let i=0; i < techSkillsObject.length; i++){
    // create box for each tech skills 
    let crtTechSkillsBox = document.createElement('div');
    crtTechSkillsDiv.appendChild(crtTechSkillsBox);
    crtTechSkillsBox.setAttribute('class','tech-skills-box');
    // create img div
    let crtTechSkillsImgDiv = document.createElement('div');
    crtTechSkillsBox.appendChild(crtTechSkillsImgDiv);
    crtTechSkillsImgDiv.setAttribute('class','tech-skills-img-div');
    // create img and get image from object
    let crtTechSkillsImg = document.createElement('img');
    crtTechSkillsImgDiv.appendChild(crtTechSkillsImg);
    crtTechSkillsImg.setAttribute('src',`${techSkillsObject[i].image}`);
    // create h3 title and get title from object
    let crtTechSkillsTitle = document.createElement('h3');
    crtTechSkillsBox.appendChild(crtTechSkillsTitle);
    crtTechSkillsTitle.setAttribute('class','tech-skills-title')
    crtTechSkillsTitle.innerText = `${techSkillsObject[i].title}`
    // create paragraph and get description from object
    let crtTechSkillsDescription = document.createElement('p');
    crtTechSkillsBox.appendChild(crtTechSkillsDescription);
    crtTechSkillsDescription.setAttribute('class','tech-skills-description');
    crtTechSkillsDescription.innerText = `${techSkillsObject[i].description}`;
}


// Animation
onScrollAnimation()
function onScrollAnimation(){
    skillsTitleAnimation()
    window.addEventListener('scroll',skillBoxAnimation);
}

// title animation
function skillsTitleAnimation(){
    var skillTitle = document.querySelector('.tech-title-div');
    var elementPosition = skillTitle.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(elementPosition < screenPosition){
        skillTitle.classList.add('tech-title-div-appear');
    }
}

function skillBoxAnimation(){
    var skillBox = document.getElementsByClassName('tech-skills-box');
    for(let i=0; i<skillBox.length; i++){
        var elementPosition = skillBox[i].getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1;
    
        if(elementPosition < screenPosition){
            skillBox[i].classList.add('tech-skills-box-appear')
        }
    }  
}