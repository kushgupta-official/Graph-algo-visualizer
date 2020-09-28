(this["webpackJsonpgraph-algo-visualizer"]=this["webpackJsonpgraph-algo-visualizer"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(8),r=n.n(i),s=(n(14),n(2)),l=n(3),c=n(5),u=n(4),d=n(6),f=(n(15),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={},e.getClassName=function(){var t="node";return!0===e.props.isStart?t+=" startNode":!0===e.props.isEnd?t+=" endNode":!0===e.props.isWall&&(t+=" wall-true"),t},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.row,n=e.column,o=(e.isStart,e.isEnd,e.distance,e.isVisited,e.previousNode,e.isWall,e.onMouseDown),i=e.onMouseUp,r=e.onMouseEnter;return a.a.createElement("div",{className:this.getClassName(),id:"node-".concat(t,"-").concat(n),onMouseDown:function(){return o(t,n)},onMouseEnter:function(){return r(t,n)},onMouseUp:function(){return i()}})}}]),n}(o.Component)),m=(n(16),n(1));function v(e,t,n){var o=[];t.distance=0;var a=function(e){var t,n=[],o=Object(m.a)(e);try{for(o.s();!(t=o.n()).done;){var a,i=t.value,r=Object(m.a)(i);try{for(r.s();!(a=r.n()).done;){var s=a.value;n.push(s)}}catch(l){r.e(l)}finally{r.f()}}}catch(l){o.e(l)}finally{o.f()}return n}(e);for(console.log(a);a.length;){h(a);var i=a.shift();if(i.distance===1/0)return o;if(!0!==i.isWall){if(i.isVisited=!0,o.push(i),i===n)return o;g(i,e)}}}function h(e){e.sort((function(e,t){return e.distance-t.distance}))}function g(e,t){var n,o=function(e,t){var n=[],o=e.row,a=e.column;o-1>=0&&!0!==t[o-1][a].isVisited&&n.push(t[o-1][a]);o+1<t.length&&!0!==t[o+1][a].isVisited&&n.push(t[o+1][a]);a-1>=0&&!0!==t[o][a-1].isVisited&&n.push(t[o][a-1]);a+1<t[0].length&&!0!==t[o][a+1].isVisited&&n.push(t[o][a+1]);return n}(e,t),a=Object(m.a)(o);try{for(a.s();!(n=a.n()).done;){var i=n.value;i.distance=e.distance+1,i.previousNode=e}}catch(r){a.e(r)}finally{a.f()}return o}function p(e,t,n){var o=[],a=n.previousNode;if(null===a)return o;for(;a!==t;)o.push(a),a=a.previousNode;return o.reverse(),o}function b(e,t,n){var o=[];t.distance=Math.abs(t.row-n.row)+Math.abs(t.column-n.column);for(var a=function(e){var t,n=[],o=Object(m.a)(e);try{for(o.s();!(t=o.n()).done;){var a,i=t.value,r=Object(m.a)(i);try{for(r.s();!(a=r.n()).done;){var s=a.value;n.push(s)}}catch(l){r.e(l)}finally{r.f()}}}catch(l){o.e(l)}finally{o.f()}return n}(e);a.length;){y(a);var i=a.shift();if(i.distance===1/0)return o;if(!i.isWall){if(i.isVisited=!0,o.push(i),i===n)return o;w(i,n,e)}}}function y(e){e.sort((function(e,t){return e.distance-t.distance}))}function w(e,t,n){var o,a=function(e,t){var n=[],o=e.row,a=e.column;o-1>=0&&!0!==t[o-1][a].isVisited&&n.push(t[o-1][a]);o+1<t.length&&!0!==t[o+1][a].isVisited&&n.push(t[o+1][a]);a-1>=0&&!0!==t[o][a-1].isVisited&&n.push(t[o][a-1]);a+1<t[0].length&&!0!==t[o][a+1].isVisited&&n.push(t[o][a+1]);return n}(e,n),i=Object(m.a)(a);try{for(i.s();!(o=i.n()).done;){var r=o.value;r.distance=e.distance-(Math.abs(e.row-t.row)+Math.abs(e.column-t.column))+1+Math.abs(r.row-t.row)+Math.abs(r.column-t.column),r.previousNode=e}}catch(s){i.e(s)}finally{i.f()}return a}function N(e,t,n){var o=[],a=n.previousNode;if(null===a)return o;for(;a!==t;)o.push(a),a=a.previousNode;return o.reverse(),o}var M=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={grid:[],isMousePressed:!1,timeComplexity:0},e.getNewGridWithWallToggled=function(t,n){var o=e.state.grid.slice(),a=o[t][n],i=Object(d.a)(Object(d.a)({},a),{},{isWall:!a.isWall});return o[t][n]=i,o},e.handleMouseDown=function(t,n){if(10===t&&10===n||10===t&&40===n)console.log(t,n,"mouse down starting or ending"),e.setState({isMousePressed:!0});else{console.log(t,n,"mouse down");var o=e.getNewGridWithWallToggled(t,n);e.setState({grid:o,isMousePressed:!0})}},e.handleMouseEnter=function(t,n){if(e.state.isMousePressed)if(10===t&&10===n||10===t&&40===n)console.log("mouse entered starting or ending");else{console.log(t,n,"mouse enter");var o=e.getNewGridWithWallToggled(t,n);e.setState({grid:o})}},e.handleMouseUp=function(){console.log("mouse up"),e.setState({isMousePressed:!1})},e.animateAlgo=function(e,t){for(var n=function(n){if(n===e.length-1){for(var o=function(e){setTimeout((function(){setTimeout((function(){var n=t[e];document.getElementById("node-".concat(n.row,"-").concat(n.column)).className="node node-shortestPath"}),50*e)}),10*n)},a=0;a<t.length;a++)o(a);return{v:void 0}}setTimeout((function(){var t=e[n];document.getElementById("node-".concat(t.row,"-").concat(t.column)).className="node node-visited"}),10*n)},o=1;o<e.length;o++){var a=n(o);if("object"===typeof a)return a.v}},e.visualizeDijkstra=function(){var t=e.state.grid,n=t[10][10],o=t[10][40],a=v(t,n,o),i=p(0,n,o);e.animateAlgo(a,i),e.setState({timeComplexity:a.length})},e.visualizeAstar=function(){var t=e.state.grid,n=t[10][10],o=t[10][40],a=b(t,n,o),i=N(0,n,o);console.log(a),e.animateAlgo(a,i),e.setState({timeComplexity:a.length})},e.clearAlgo=function(){for(var t=e.state.grid,n=0;n<18;n++)for(var o=0;o<50;o++)t[n][o].distance=1/0,t[n][o].isVisited=!1,t[n][o].previousNode=null,10===n&&10===o||10===n&&40===o||!0===t[n][o].isWall||(console.log("hi"),document.getElementById("node-".concat(n,"-").concat(o)).className="node");e.setState({grid:t,timeComplexity:0})},e.undoAlgoAndWalls=function(){for(var t=e.state.grid,n=0;n<18;n++)for(var o=0;o<50;o++)t[n][o].distance=1/0,t[n][o].isVisited=!1,t[n][o].previousNode=null,t[n][o].isWall=!1,10===n&&10===o||10===n&&40===o||(console.log("hi"),document.getElementById("node-".concat(n,"-").concat(o)).className="node");e.setState({grid:t,timeComplexity:0})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<18;t++){for(var n=[],o=0;o<50;o++){var a={row:t,column:o,isStart:10===t&&10===o,isEnd:10===t&&40===o,distance:1/0,isVisited:!1,previousNode:null,isWall:!1};n.push(a)}e.push(n)}this.setState({grid:e})}},{key:"render",value:function(){var e=this,t=this.state.grid;return a.a.createElement("div",{className:"container-fluid"},a.a.createElement("button",{className:"btn btn-primary btn-lg",onClick:this.visualizeDijkstra},"Visualize Dijkstra Algorithm"),a.a.createElement("button",{className:"btn btn-primary btn-lg",onClick:this.visualizeAstar},"Visualize A* Algorithm"),a.a.createElement("button",{className:"btn btn-primary btn-lg",onClick:this.undoAlgoAndWalls},"Undo Algo and walls"),a.a.createElement("button",{className:"btn btn-primary btn-lg",onClick:this.clearAlgo},"Clear Algo"),a.a.createElement("span",{className:"time"},"Time Complexity = ",this.state.timeComplexity),a.a.createElement("div",{className:"grid"},t.map((function(t,n){return a.a.createElement("div",{key:n},t.map((function(t,n){var o=t.row,i=t.column,r=t.isStart,s=t.isEnd,l=t.distance,c=t.isVisited,u=t.previousNode,d=t.isWall,m=t.isMousePressed;return a.a.createElement(f,{key:n,row:o,column:i,isStart:r,isEnd:s,distance:l,isVisited:c,previousNode:u,isWall:d,isMousePressed:m,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(){return e.handleMouseUp()}})})))}))))}}]),n}(o.Component),E=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(M,null)}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.80beef80.chunk.js.map