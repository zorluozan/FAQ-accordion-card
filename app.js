let icon_button = document.getElementsByClassName("card__content__header");

for(let i=0; i<icon_button.length;i++) {
    icon_button[i].onclick = function() {
        const setClasses = !this.classList.contains("active");
        setClass(icon_button,"active","remove");

        if(setClasses) {
           this.classList.toggle("active");
        }
    }
}

function setClass(elements, className, functionName) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList[functionName](className);
    }
}