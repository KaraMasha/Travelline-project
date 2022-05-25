(function() {
    const burgerButton = document.getElementById('burger-button');
    console.log(burgerButton);
    burgerButton.addEventListener('click', function(event) {
        event.preventDefault();
        burgerButton.classList.toggle('opened');
    });
})();