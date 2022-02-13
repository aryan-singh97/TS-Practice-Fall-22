import React from "react";

let doLog = () => console.log();

interface Point {
  x: number;
  y: number;
}

let drawPoint = (point: Point) => {
  //...
};

drawPoint({
  x: 13,
  y: 12,
});
