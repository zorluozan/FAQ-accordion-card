let icon_button = document.getElementsByClassName("card__content__header");
let icon_arrow = document.getElementsByClassName("card__icon");

for(let i=0; i<icon_button.length;i++) {
    icon_button[i].addEventListener("click", function() {
        let isActive = this.classList.toggle("active");

        for(let j=0;j<icon_arrow.length;j++) {
            if(isActive) {
               icon_arrow[i].style.transform = "rotate(180deg)";
            }
            else {
                icon_arrow[i].style.transform = "";
            }
        }
    });
}