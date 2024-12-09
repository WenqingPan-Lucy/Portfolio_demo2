// with the help of GPT3.5 to revise
const blurElements = document.querySelectorAll('.blur');
const container = document.querySelector('.container');

blurElements.forEach((element, index) => {
    element.addEventListener('mouseenter', () => {

        scrollToElement(element);
    });
});

function scrollToElement(element) {
    const rect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    const targetPosition = element.offsetTop - containerRect.top - containerRect.height / 2 + rect.height / 2;
    
    let currentPosition = container.scrollTop;
    const distance = targetPosition - currentPosition;  
    const duration = 500;  
    const steps = 100;  
    const stepTime = duration / steps;  

    let step = 0;
    const interval = setInterval(() => {
        step++;
        const progress = step / steps;  
        const currentScroll = currentPosition + (distance * progress);  
        

        container.scrollTo({
            top: currentScroll,
            behavior: 'auto' 
        });
        if (step >= steps) {
            clearInterval(interval);
        }
    }, stepTime); 

    blurElements.forEach(el => {
        if (el === element) {
            el.classList.add('focus');
        } else {
            el.classList.remove('focus');
        }
    });
}

//go to project subpages
document.getElementById("interactive_design").addEventListener("click", function() {
    window.location.href = "Project_InteractiveDesign.html";
});

document.getElementById("3D").addEventListener("click", function() {
    window.location.href = "Project_3D.html";
});
