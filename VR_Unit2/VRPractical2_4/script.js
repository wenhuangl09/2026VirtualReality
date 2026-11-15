let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded", function() {
  scene = document.querySelector("a-scene");

let rockets = [];
let ufos = [];

for (let i = 0; i < 100; i++) {
  let x = 55 + rnd(-20, 20);
  let y = -rnd(1, 10);
  let z = 15 + rnd(-20, 20);

  let rocket = new Rocket(x, y, z);
  rockets.push(rocket);
}

for (let i = 0; i < 100; i++) {
  let x = 55 + rnd(-20, 20);
  let y = rnd(10, 30);
  let z = 15 + rnd(-20, 20);

  let ufo = new UFO(x, y, z);
  ufos.push(ufo);
}

  function loop() {
    for (let rocket of rockets) {
      rocket.launch();
    }

    for (let ufo of ufos) {
      ufo.invade();
    }

    window.requestAnimationFrame(loop);
  }

  loop();
});
