function addBlurExcept(item) {
    var gameItems = document.querySelectorAll('.game-item');
    gameItems.forEach(item => {
        if (item !== this) {
            item.classList.add('blur');
        }
    });
}

function removeBlur() {
    var gameItems = document.querySelectorAll('.game-item');
    gameItems.forEach(item => {
        item.classList.remove('blur');
    });
}

document.querySelectorAll('.game-item').forEach(item => {
    item.addEventListener('mouseover', addBlurExcept);
    item.addEventListener('mouseleave', removeBlur);
});
