if(document.location.pathname === '/Portfolio/projects.html'){
    let activeElement = document.getElementsByClassName('nav-a')[1]
    activeElement.setAttribute('class','nav-a-active')
}
// ==============================================    Projects   ============================
let crtTitleDiv = document.createElement('div');
document.body.appendChild(crtTitleDiv);
crtTitleDiv.setAttribute('class','project-title-div container');
// Create title line
let crtTitleLine = document.createElement('div');
crtTitleDiv.appendChild(crtTitleLine);
crtTitleLine.setAttribute('class','project-title-line');
// Create project page Main Title
let crtProjectTitle = document.createElement('h1');
crtTitleDiv.appendChild(crtProjectTitle);
crtProjectTitle.setAttribute('class','project-title');
crtProjectTitle.innerText = 'My Projects';
// create github link
let crtGitHubLink = document.createElement('a');
crtTitleDiv.appendChild(crtGitHubLink);
crtGitHubLink.setAttribute('class','githubLink')
crtGitHubLink.setAttribute('href','https://github.com/FrontendDV')
crtGitHubLink.setAttribute('target','_blank')
crtGitHubLink.innerText = 'gitHub';
// add github icon into github link
let crtGitHubIcon = document.createElement('a');
crtTitleDiv.appendChild(crtGitHubIcon);
crtGitHubIcon.setAttribute('class','github-icon')
crtGitHubIcon.setAttribute('href','https://github.com/FrontendDV')
crtGitHubIcon.setAttribute('target','_blank')
crtGitHubIcon.innerHTML = `<i class="fab fa-github"></i>`
// create little description text
let crtDescriptionText = document.createElement('p');
document.body.appendChild(crtDescriptionText);
crtDescriptionText.setAttribute('class','description-text container');
crtDescriptionText.innerText = `These are projects that I have completed independently. Their purpose is to show my abilities, mostly in the direction of JavaScript. Also, this site that you are on now is created by me and most importantly the structure and functionality is created in JavaScript, and for styling used CSS.`

// create Project div
let crtProjectsDiv = document.createElement('div');
document.body.appendChild(crtProjectsDiv);
crtProjectsDiv.setAttribute('class','project container');
// Create project object
let projectObject = [
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
    },
    {
        title : 'SkillZ',
        subtitle : "SCSA Final Project | Web Design , Coding",
        description :`This is a SCSA Final Project Website .This website create with HTML, CSS,Js, jQuery, JSON, AJAX.The website is a Responsive on Desktop , Tablet and also Mobile`,
        image : 'img/MacBook Pro 16 (2).png',
        background : "#2373a4"
    },
    {
        title : 'JS FORM VALIDATION',
        subtitle : "Small Portfolio Project | Coding (Native Js)",
        description :`This is a small project which makes form validaton.This website create with HTML, CSS, Js.The website is a Responsive on Desktop , Tablet and also Mobile`,
        image : 'img/iPhone 13.png',
        background : "tomato"
    },
    {
        title : 'JS CALCULATOR',
        subtitle : "Small Portfolio Project | Coding (Native Js)",
        description :`This is a small project which makes easy math methods.This website create with HTML, CSS, Js.The website is a Responsive on Desktop , Tablet and also Mobile`,
        image : 'img/iPad Mini.png',
        background : "#4f4f4f"
    },
    {
        title : 'JS TODO List',
        subtitle : "Small Portfolio Project | Coding (Native Js)",
        description :`This is a small project , you can add your todo list with it.This website create with HTML, CSS, Js.The website is a Responsive on Desktop , Tablet and also Mobile`,
        image : 'img/todolist.png',
        background : "#fda085"
    },
    {
        title : 'Weather App',
        subtitle : "Small Portfolio Project | Coding (Native Js)",
        description :`This is a small project , you can check weather more than 200,000 countries with it.This website create with HTML, CSS, Js.The website is a Responsive on Desktop , Tablet and also Mobile`,
        image : 'img/weatherApp.png',
        background : "#7C99AC"
    },
    {
        title : 'COMING SOON',
        subtitle : "",
        description :``,
        image : 'img/mirage-soon.png',
        background : "#83677b"
    }
]
// create two projects show box
for(let i=0; i < projectObject.length; i++){
    // create project box and set class
    let crtProjectBox = document.createElement('div');
    crtProjectsDiv.appendChild(crtProjectBox);
    crtProjectBox.setAttribute('class','project-box');
    crtProjectBox.style.backgroundColor = `${projectObject[i].background}`
    // create project text div
    let crtProjectText = document.createElement('div');
    crtProjectBox.appendChild(crtProjectText);
    crtProjectText.setAttribute('class','project-text')
    // create project title ,set class and get title from object
    let crtProjectBoxTitle = document.createElement('h3');
    crtProjectText.appendChild(crtProjectBoxTitle);
    crtProjectBoxTitle.setAttribute('class','project-box-h1')
    crtProjectBoxTitle.innerText = `${projectObject[i].title}`
    // create subtitle , set class and get subtitle from object
    let crtProjectSubTitle = document.createElement('span');
    crtProjectText.appendChild(crtProjectSubTitle);
    crtProjectSubTitle.setAttribute('class','project-box-subtitle');
    crtProjectSubTitle.innerText = `${projectObject[i].subtitle}`;
    // create description
    let crtProjectDescription = document.createElement('p')
    crtProjectText.appendChild(crtProjectDescription);
    crtProjectDescription.setAttribute('class','project-description')
    crtProjectDescription.innerText = `${projectObject[i].description}`
    // create image div
    let crtProjectImgDiv = document.createElement('div')
    crtProjectBox.appendChild(crtProjectImgDiv);
    crtProjectImgDiv.setAttribute('class','project-box-img-div')
    let crtImg = document.createElement('img');
    crtProjectImgDiv.appendChild(crtImg);
    crtImg.setAttribute('src',`${projectObject[i].image}`)
    // create more button
    let crtMoreBtn = document.createElement('a');
    crtProjectText.appendChild(crtMoreBtn);
    crtMoreBtn.setAttribute('class','project-box-btn');
    crtMoreBtn.innerText = 'See The Website';
    // let create see website icon and let show on hover crtMoreBtn
    let crtSeeMoreIcon = document.createElement('span');
    crtMoreBtn.prepend(crtSeeMoreIcon);
    crtSeeMoreIcon.setAttribute('class','see-more-btn-icon')
    crtSeeMoreIcon.innerHTML = '<i class="fas fa-chevron-right"></i>';
    crtMoreBtn.addEventListener('mouseover',()=>{
        crtMoreBtn.style.transform = 'translateX(10px)'
        crtSeeMoreIcon.classList.add('see-more-btn-icon-appear')
    })
    crtMoreBtn.addEventListener('mouseout',()=>{
        crtMoreBtn.style.transform = 'translateX(0px)'
        crtSeeMoreIcon.classList.remove('see-more-btn-icon-appear')
    })
    // Project Box hover animation 
    crtProjectBox.addEventListener('mouseover',()=>{
        crtProjectSubTitle.style.top = '16%';
        crtProjectSubTitle.style.opacity = '1';
        crtProjectDescription.style.top = '40%';
        crtProjectDescription.style.left = '0%';
        crtProjectDescription.style.opacity = '1';
        crtMoreBtn.style.bottom = '10%';
        crtMoreBtn.style.opacity= '1';
    })
    crtProjectBox.addEventListener('mouseout',()=>{
        crtProjectSubTitle.style.top = '13%'
        crtProjectSubTitle.style.opacity = '0'
        crtProjectDescription.style.left = '-10%';
        crtProjectDescription.style.opacity = '0';
        crtMoreBtn.style.bottom = '5%';
        crtMoreBtn.style.opacity= '0'
    })
    crtMoreBtn.addEventListener('click', readMoreLinks);
    if(crtProjectDescription.innerText === ''){
        crtMoreBtn.remove()
    }
}

// function for routing
function readMoreLinks(e){
    e.preventDefault();
    let targetTitle = e.target.previousSibling.previousSibling.previousSibling;
    if(targetTitle.innerText === 'GT SURVEY'){
        window.open('https://frontenddv.github.io/GT-Survey/')
    }
    if(targetTitle.innerText === 'furni.shop'){
        window.open('https://frontenddv.github.io/furni.shop/')
    }
    if(targetTitle.innerText === 'SkillZ'){
        window.open('https://frontenddv.github.io/Skill-Z/')
    }
    if(targetTitle.innerText === 'JS FORM VALIDATION'){
        window.open('https://frontenddv.github.io/Js-Form-Validation/')
    }
    if(targetTitle.innerText === 'JS CALCULATOR'){
        window.open('https://frontenddv.github.io/Js-Calculator/')
    }
    if(targetTitle.innerText === 'JS TODO List'){
        window.open('https://frontenddv.github.io/JS-todo-List/')
    }
    if(targetTitle.innerText === 'Weather App'){
        window.open('https://frontenddv.github.io/Weather-App/')
    }
}


// On Scroll Animations
onScrollAnimation();
function onScrollAnimation(){
    pageTitleAnimation();
    pageTextAnimation();
    window.addEventListener('scroll',projectBoxAnimation);
}
// Page title animation
function pageTitleAnimation(){
    var pageTitle = document.querySelector('.project-title-div');
    var elementPosition = pageTitle.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(elementPosition < screenPosition){
        pageTitle.classList.add('project-title-div-appear');
    }
}
function pageTextAnimation(){
    var pageText = document.querySelector('.description-text');
    var elementPosition = pageText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if(elementPosition < screenPosition){
        pageText.classList.add('description-text-appear');
    }
}
// project box animation 
function projectBoxAnimation(){
    var projectBox = document.getElementsByClassName('project-box');
    for(let i=0; i<projectBox.length; i++){
        var elementPosition = projectBox[i].getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1;
    
        if(elementPosition < screenPosition){
            projectBox[i].classList.add('project-box-appear')
        }
    }  
}























