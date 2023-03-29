const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

// added a function for transitioning between different pages
function PageTransition () {
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener("click", function () {
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            this.className += " active-btn";
            // console.log("hello");
        })
    }
}


allSections.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if (id) {
        // removing active-btn 
        sectBtn.forEach ((btn) => {
            btn.classList.remove('active');
        })
        event.target.classList.add('active');

        // hiding other sections
        sections.forEach ((section) => {
            section.classList.remove('active');
        })

        const element = document.getElementById(id);
        element.classList.add('active');
    }
})

// toggle theme
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
})


PageTransition();