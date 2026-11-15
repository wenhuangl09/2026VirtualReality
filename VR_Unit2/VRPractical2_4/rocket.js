class Rocket {
  constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = Math.random() * 0.2 + 0.05;

    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-cylinder");
    body.setAttribute("position", {x:0, y:0, z:0});
    body.setAttribute("radius", 0.3);
    body.setAttribute("height", 2);
    body.setAttribute("color", "silver");
    this.obj.append(body);

    let tip = document.createElement("a-cone");
    tip.setAttribute("position", {x:0, y:1.25, z:0});
    tip.setAttribute("radius-bottom", 0.3);
    tip.setAttribute("radius-top", 0);
    tip.setAttribute("height", 0.5);
    tip.setAttribute("color", "red");
    this.obj.append(tip);

    let fin1 = document.createElement("a-box");
    fin1.setAttribute("position", {x:-0.3, y:-0.7, z:0});
    fin1.setAttribute("width", 0.2);
    fin1.setAttribute("height", 0.6);
    fin1.setAttribute("depth", 0.2);
    fin1.setAttribute("color", "orange");
    this.obj.append(fin1);

    let fin2 = document.createElement("a-box");
    fin2.setAttribute("position", {x:0.3, y:-0.7, z:0});
    fin2.setAttribute("width", 0.2);
    fin2.setAttribute("height", 0.6);
    fin2.setAttribute("depth", 0.2);
    fin2.setAttribute("color", "orange");
    this.obj.append(fin2);

    this.obj.setAttribute("position", {x:this.x, y: this.y, z: this.z});

    scene.append(this.obj);
  }

  launch() {
    this.y += this.dy;

    this.obj.setAttribute("position", {x:this.x,  y:this.y, z:this.z});
  }
}