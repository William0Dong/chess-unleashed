setTimeout(function() {
    document.getElementById('button-one').className = "postload";
    document.getElementById('button-two').className = "postload";
    document.getElementById('gif-one').className = "postload gif";
    document.getElementById('gif-two').className = "postload gif";
}, 1000);

setTimeout(function() {
    let button = document.getElementById('button-one');
    let gif = document.getElementById('gif-one');
    console.log(button);

    function addAnim() {
        button.classList.add('animated');
        gif.classList.add('animated');
        button.removeEventListener('mouseover', addAnim);
    };

    button.addEventListener('mouseover', addAnim);
}, 1000);

setTimeout(function() {
    let button = document.getElementById('button-two');
    let gif = document.getElementById('gif-two');
    console.log(button);

    function addAnim() {
        button.classList.add('animated');
        gif.classList.add('animated');
        button.removeEventListener('mouseover', addAnim);
    };

    button.addEventListener('mouseover', addAnim);
}, 1000);