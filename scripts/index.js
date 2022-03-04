setTimeout(function () {
  let button_one = document.getElementById("button-one");
  let gif_one = document.getElementById("gif-one");
  let button_two = document.getElementById("button-two");
  let gif_two = document.getElementById("gif-two");
  if ($(window).width() <= 900) {
    button_one.classList.remove("preload", "postload", "animated");
    button_two.classList.remove("preload", "postload", "animated");
    gif_one.classList.remove("preload", "postload", "animated");
    gif_two.classList.remove("preload", "postload", "animated");
  }
}, 0)

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
  let button_one = document.getElementById("button-one");
  let gif_one = document.getElementById("gif-one");
  let button_two = document.getElementById("button-two");
  let gif_two = document.getElementById("gif-two");
  if ($(window).width() <= 900) {
    button_one.classList.remove("preload", "postload", "animated");
    button_two.classList.remove("preload", "postload", "animated");
    gif_one.classList.remove("preload", "postload", "animated");
    gif_two.classList.remove("preload", "postload", "animated");
  } else {
    button_one.classList.add("postload");
    button_two.classList.add("postload");
    gif_one.classList.add("postload");
    gif_two.classList.add("postload");
  }
});
