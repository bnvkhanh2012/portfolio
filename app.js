const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const mainBtn = document.querySelector('.main-btn');



function pageTransition() {
    for(let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', () => {
            var currentActiveBtn = document.querySelectorAll('.active-btn');
            currentActiveBtn[0].classList.remove('active-btn');
            secBtn[i].className += ' active-btn'
        })
    }

    //Add Active Class for Sections
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id) {
            // secBtn.forEach((btn) => {
            //     btn.classList.remove('active');
            // })
            // e.target.classList.add('active')

            //Hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active')
        }
        
    })
}
pageTransition()