(function() {
    const burgerButton = document.getElementById('burger-button');

    burgerButton.addEventListener('click', function(event) {
        event.preventDefault();
        burgerButton.classList.toggle('opened');
    });
})();