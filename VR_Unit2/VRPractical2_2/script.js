let scene, car, sun, rocket, pockemonball;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    sun = document.querySelector("#sun");
    rocket = document.querySelector("#rocket");
    pockemonball = document.querySelector("#pockemonball");

    car.x = 0;
    car.dx = 0.05;

    sun.o = 0;
    sun.do = 0.005

    rocket.y = -2;
    rocket.dy = 0.1;

    pockemonball.a = 0
    pockemonball.da = 1

    loop(); 
})

function loop(){
    car.x += car.dx;
    car.setAttribute("position",{x:car.x,y:0,z:-5});

    sun.o += sun.do;
    sun.setAttribute("opacity", sun.o);

    rocket.y += rocket.dy;
    rocket.setAttribute("position",`0 ${rocket.y} -10`);

    pockemonball.a += pockemonball.da;
    pockemonball.setAttribute("rotation", pockemonball.a + "0 0");

    window.requestAnimationFrame(loop);
}
