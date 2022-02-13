import React from "react";

class Point {
  private x: number | undefined = 0;
  private y: number | undefined = 0;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  drawThePoint() {
    //...
    console.log("x: " + this.x + ",y: " + this.y);
  }

  getDistance() {
    //...
  }
}

let point = new Point(1, 2);
point.drawThePoint();
