window.addEventListener("load", function() {
    // Add class to main content to trigger animation
    document.querySelector('main').classList.add('main-visible');
});


function addBlurExcept(event) {
    var gameItems = document.querySelectorAll('.game-item');
    var targetItem = event.currentTarget;
    gameItems.forEach(item => {
        if (item !== targetItem) {
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

document.querySelectorAll('.genre-section').forEach(section => {
    const scrollContainer = section.querySelector('.game-list');
    const btnPrev = section.querySelector('.btn-prev');
    const btnNext = section.querySelector('.btn-next');
    const scrollStep = 500; // Adjust the scroll step as needed

    btnPrev.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: -scrollStep,
            behavior: 'smooth'
        });
    });

    btnNext.addEventListener('click', () => {
        scrollContainer.scrollBy({
            left: scrollStep,
            behavior: 'smooth'
        });
    });

    // Show navigation buttons when game-list is hovered or navigation button is hovered
    scrollContainer.addEventListener('mouseenter', () => {
        section.querySelector('.navigation-buttons').style.display = 'flex';
    });

    section.querySelector('.navigation-buttons').addEventListener('mouseenter', () => {
        section.querySelector('.navigation-buttons').style.display = 'flex';
    });
});
