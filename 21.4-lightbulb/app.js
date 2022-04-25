const img = document.querySelector("img");
let isOff = false;

const changeImg = (e) => {
    if (isOff) {
        img.src = "/21.4-lightbulb/OFFbulb.jpg";
    } else {
        img.src = "/21.4-lightbulb/ONbulb.jpg";
    }
    isOff = !isOff;
};

img.addEventListener("click", changeImg);