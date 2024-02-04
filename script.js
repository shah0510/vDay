const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const popup = document.getElementById('popup');
const iloveyouPopup = document.getElementById('iloveyouPopup');
const newPicturePopup = document.getElementById('newPicturePopup');
const cancelBtn = document.getElementById('cancelBtn');
const closeILoveYouPopup = document.getElementById('closeILoveYouPopup');
const closeNewPicturePopup = document.getElementById('closeNewPicturePopup');
let count = 0;

noBtn.addEventListener('click', () => {
    count++;
    switch (count) {
        case 1:
            noBtn.innerText = "Are you sure bacha?";
            increaseSize(1.5); // Increase size exponentially by 1.5 times
            break;
        case 2:
            noBtn.innerText = "You know I love you right?";
            increaseSize(2); // Increase size exponentially by 2 times
            break;
        case 3:
            noBtn.innerText = "Cutie please?";
            increaseSize(2.5); // Increase size exponentially by 2.5 times
            break;
        case 4:
            noBtn.innerText = "Nautanki baaz please";
            increaseSize(3); // Increase size exponentially by 3 times
            break;
        // Add more cases as needed
        default:
            break;
    }
});

yesBtn.addEventListener('click', () => {
    iloveyouPopup.style.display = "flex";
});

closeILoveYouPopup.addEventListener('click', () => {
    iloveyouPopup.style.display = "none";
    newPicturePopup.style.display = "flex";
});

closeNewPicturePopup.addEventListener('click', () => {
    newPicturePopup.style.display = "none";
    count = 0; // Reset count when closing the new picture popup
    noBtn.innerText = "No";
    resetSize();
});

function increaseSize(factor) {
    let currentWidth = parseFloat(window.getComputedStyle(yesBtn).width);
    let currentHeight = parseFloat(window.getComputedStyle(yesBtn).height);
    let currentFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);

    yesBtn.style.width = (currentWidth * factor) + "px";
    yesBtn.style.height = (currentHeight * factor) + "px";
    yesBtn.style.fontSize = (currentFontSize * factor) + "px";
}

function resetSize() {
    yesBtn.style.width = "auto";
    yesBtn.style.height = "auto";
    yesBtn.style.fontSize = "16px"; // Reset to default font size
}
