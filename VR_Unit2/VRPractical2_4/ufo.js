class UFO {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = Math.random() * 0.1 + 0.02;

    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-cylinder");
    body.setAttribute("position", {x:0, y:0, z:0});
    body.setAttribute("radius", 1);
    body.setAttribute("height", 0.3);
    body.setAttribute("color", "silver");
    this.obj.append(body);

    let dome = document.createElement("a-sphere");
    dome.setAttribute("position", {x:0, y:0.25, z:0});
    dome.setAttribute("radius", 0.5);
    dome.setAttribute("scale", {x:1, y:0.6, z:1});
    dome.setAttribute("color", "blue");
    this.obj.append(dome);

    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});

    scene.append(this.obj);
  }

  invade() {
    if (this.y > 1) {
      this.y -= this.dy;

      this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    }
  }
}