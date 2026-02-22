/* typing animation */
const text = "Software Engineer | Web Developer | Problem Solver";
let i = 0;

function typing(){
    if(i < text.length){
        document.querySelector(".typing").textContent += text.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}
typing();


/* scroll reveal animation */
function reveal(){
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el=>{
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll",reveal);
reveal();
