import React from "react";

import Canvas from "./canvas";
import "bootstrap/dist/css/bootstrap.css";
class MinimumSpanningTree extends React.Component {
  constructor(props) {
    super(props);
    this.ChildElement = React.createRef();
  }

  render() {
    return (
      <>
        <Canvas
          width={1405}
          height={500}
          outline={(canvas, ctx) => {
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
          }}
          draw={(canvas, ctx, coord) => {
            let rect = canvas.getBoundingClientRect();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
            for (let i in coord) {
              ctx.fillStyle = "#1e2433";
              ctx.beginPath();
              ctx.arc(
                coord[i][0] - rect.left,
                coord[i][1] - rect.top,
                10,
                0,
                2 * Math.PI
              );
              ctx.fill();
            }
          }}
          drawPrims={(
            data1,
            source,
            destination,
            visited,
            unvisited,
            canvas,
            ctx
          ) => {
            let rect = canvas.getBoundingClientRect();
            ctx.strokeStyle = "#1e1e33";
            ctx.beginPath();
            ctx.moveTo(
              visited[source][0] - rect.left,
              visited[source][1] - rect.top
            );
            let x =
              visited[source][0] -
              rect.left +
              unvisited[destination][0] -
              rect.left;
            x = x / 2;
            let y =
              visited[source][1] -
              rect.top +
              unvisited[destination][1] -
              rect.top;
            y = y / 2;
            ctx.font = "12px Roboto sans-serif";
            ctx.lineTo(
              unvisited[destination][0] - rect.left,
              unvisited[destination][1] - rect.top
            );
            ctx.stroke();
            ctx.strokeStyle = "blue";
            ctx.strokeText(data1, x, y);
          }}
        />
      </>
    );
  }
}

export default MinimumSpanningTree;
