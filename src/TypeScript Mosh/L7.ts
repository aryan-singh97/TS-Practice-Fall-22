import React from "react";

class Point {
  constructor(private x?: number, private y?: number) {}

  drawThePoint() {
    //...
    console.log("x: " + this.x + ",y: " + this.y);
  }

  getDistance() {
    //...
  }

  getX() {
    return this.x;
  }

  setX(value: number) {
    if (value < 0) throw new Error("Value cannot be < 0");

    this.x = value;
  }
}

let point = new Point(1, 2);
point.drawThePoint();
