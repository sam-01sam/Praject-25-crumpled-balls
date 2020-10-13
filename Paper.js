class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }

      this.body = Bodies.circle(x, y, radius, options);
      this.image = loadImage("paper.png");
      this.radius=radius;
      World.add(world, this.body);
      }

    display(){
      push();
      ellipseMode(RADIUS);
      circle(this.body.position.x, this.body.position.y, this.radius);
      image(this.image, this.body.position.x-30, this.body.position.y-30, 60,60);
      pop();
    }
    }; 