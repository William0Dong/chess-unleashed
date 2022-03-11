setTimeout(function () {
  let buttonOne = document.getElementById("button-one");
  let gifOne = document.getElementById("gif-one");
  let buttonTwo = document.getElementById("button-two");
  let gifTwo = document.getElementById("gif-two");
  if ($(window).width() <= 900) {
    buttonOne.classList.remove("preload", "postload", "animated");
    buttonTwo.classList.remove("preload", "postload", "animated");
    gifOne.classList.remove("preload", "postload", "animated");
    gifTwo.classList.remove("preload", "postload", "animated");
  }
}, 0);

setTimeout(function () {
  if ($(window).width() > 900) {
    document.getElementById("button-one").className = "postload";
    document.getElementById("button-two").className = "postload";
    document.getElementById("gif-one").className = "postload gif";
    document.getElementById("gif-two").className = "postload gif";
  }
}, 1000);

setTimeout(mouseoverOne, 1000);

setTimeout(mouseoverTwo, 1000);

function mouseoverOne() {
  let button = document.getElementById("button-one");
  let gif = document.getElementById("gif-one");
  console.log(button);

  function addAnim() {
    if ($(window).width() > 900) {
      button.classList.add("animated");
      gif.classList.add("animated");
    }
  }

  button.addEventListener("mouseover", addAnim);
}

function mouseoverTwo() {
  let button = document.getElementById("button-two");
  let gif = document.getElementById("gif-two");
  console.log(button);

  function addAnim() {
    if ($(window).width() > 900) {
      button.classList.add("animated");
      gif.classList.add("animated");
    }
  }

  button.addEventListener("mouseover", addAnim);
}

$(window).resize(function () {
  let buttonOne = document.getElementById("button-one");
  let gifOne = document.getElementById("gif-one");
  let buttonTwo = document.getElementById("button-two");
  let gifTwo = document.getElementById("gif-two");
  if ($(window).width() <= 900) {
    buttonOne.classList.remove("preload", "postload", "animated");
    buttonTwo.classList.remove("preload", "postload", "animated");
    gifOne.classList.remove("preload", "postload", "animated");
    gifTwo.classList.remove("preload", "postload", "animated");
  } else {
    buttonOne.classList.add("postload");
    buttonTwo.classList.add("postload");
    gifOne.classList.add("postload");
    gifTwo.classList.add("postload");
  }
});
