const sectBtns = document.querySelectorAll(".control");

function PageTransition () {
    for (let i = 0; i < sectBtns.length; i++) {
        sectBtns[i].addEventListener("click", function () {
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            this.className += " active-btn";
            console.log("hello");
        })
    }
}

PageTransition();