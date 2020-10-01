(this["webpackJsonpgraph-algo-visualizer"]=this["webpackJsonpgraph-algo-visualizer"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(8),s=n.n(o),r=(n(14),n(3)),l=n(4),c=n(6),u=n(5),d=n(1),f=(n(15),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={},e.getClassName=function(){var t="node";return!0===e.props.isStart?t+=" startNode":!0===e.props.isEnd?t+=" endNode":!0===e.props.isWall&&(t+=" wall-true"),t},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.row,n=e.column,i=(e.isStart,e.isEnd,e.distance,e.isVisited,e.previousNode,e.isWall,e.onMouseDown),o=e.onMouseUp,s=e.onMouseEnter;return a.a.createElement("div",{className:this.getClassName(),id:"node-".concat(t,"-").concat(n),onMouseDown:function(){return i(t,n)},onMouseEnter:function(){return s(t,n)},onMouseUp:function(){return o(t,n)}})}}]),n}(i.Component)),h=(n(16),n(2));function v(e,t,n){var i=[];t.distance=0;var a=function(e){var t,n=[],i=Object(h.a)(e);try{for(i.s();!(t=i.n()).done;){var a,o=t.value,s=Object(h.a)(o);try{for(s.s();!(a=s.n()).done;){var r=a.value;n.push(r)}}catch(l){s.e(l)}finally{s.f()}}}catch(l){i.e(l)}finally{i.f()}return n}(e);for(console.log(a);a.length;){g(a);var o=a.shift();if(o.distance===1/0)return i;if(!0!==o.isWall){if(o.isVisited=!0,i.push(o),o===n)return i;m(o,e)}}}function g(e){e.sort((function(e,t){return e.distance-t.distance}))}function m(e,t){var n,i=function(e,t){var n=[],i=e.row,a=e.column;i-1>=0&&!0!==t[i-1][a].isVisited&&n.push(t[i-1][a]);i+1<t.length&&!0!==t[i+1][a].isVisited&&n.push(t[i+1][a]);a-1>=0&&!0!==t[i][a-1].isVisited&&n.push(t[i][a-1]);a+1<t[0].length&&!0!==t[i][a+1].isVisited&&n.push(t[i][a+1]);return n}(e,t),a=Object(h.a)(i);try{for(a.s();!(n=a.n()).done;){var o=n.value;o.distance=e.distance+1,o.previousNode=e}}catch(s){a.e(s)}finally{a.f()}return i}function p(e,t,n){var i=[],a=n.previousNode;if(null===a)return i;for(;a!==t;)i.push(a),a=a.previousNode;return i.reverse(),i}function b(e,t,n){var i=[];t.distance=Math.abs(t.row-n.row)+Math.abs(t.column-n.column);for(var a=function(e){var t,n=[],i=Object(h.a)(e);try{for(i.s();!(t=i.n()).done;){var a,o=t.value,s=Object(h.a)(o);try{for(s.s();!(a=s.n()).done;){var r=a.value;n.push(r)}}catch(l){s.e(l)}finally{s.f()}}}catch(l){i.e(l)}finally{i.f()}return n}(e);a.length;){y(a);var o=a.shift();if(o.distance===1/0)return i;if(!o.isWall){if(o.isVisited=!0,i.push(o),o===n)return i;M(o,n,e)}}}function y(e){e.sort((function(e,t){return e.distance-t.distance}))}function M(e,t,n){var i,a=function(e,t){var n=[],i=e.row,a=e.column;i-1>=0&&!0!==t[i-1][a].isVisited&&n.push(t[i-1][a]);i+1<t.length&&!0!==t[i+1][a].isVisited&&n.push(t[i+1][a]);a-1>=0&&!0!==t[i][a-1].isVisited&&n.push(t[i][a-1]);a+1<t[0].length&&!0!==t[i][a+1].isVisited&&n.push(t[i][a+1]);return n}(e,n),o=Object(h.a)(a);try{for(o.s();!(i=o.n()).done;){var s=i.value;s.distance=e.distance-(Math.abs(e.row-t.row)+Math.abs(e.column-t.column))+1+Math.abs(s.row-t.row)+Math.abs(s.column-t.column),s.previousNode=e}}catch(r){o.e(r)}finally{o.f()}return a}function w(e,t,n){var i=[],a=n.previousNode;if(null===a)return i;for(;a!==t;)i.push(a),a=a.previousNode;return i.reverse(),i}function E(e,t,n){var i=[];t.isVisited=!0;var a=[];for(a.push(t);a.length;){var o=a.shift();if(o===n)return i;o.isWall||(i.push(o),N(e,a,o))}return i}function N(e,t,n){var i,a=function(e,t){var n=[],i=t.row,a=t.column;i-1>=0&&!e[i-1][a].isVisited&&n.push(e[i-1][a]);a-1>=0&&!e[i][a-1].isVisited&&n.push(e[i][a-1]);i+1<e.length&&!e[i+1][a].isVisited&&n.push(e[i+1][a]);a+1<e[0].length&&!e[i][a+1].isVisited&&n.push(e[i][a+1]);return n}(e,n),o=Object(h.a)(a);try{for(o.s();!(i=o.n()).done;){var s=i.value;s.isVisited=!0,s.previousNode=n,t.push(s)}}catch(r){o.e(r)}finally{o.f()}}function j(e,t,n){var i=[],a=n.previousNode;if(null===a)return i;for(;a!==t;)i.push(a),a=a.previousNode;return i.reverse(),i}var S=5,O=10,V=10,W=40,A=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={grid:[],isMousePressed:!1,timeComplexity:0,pathLength:0,isMovingStart:!1,isMovingEnd:!1},e.getNewGridWithWallToggled=function(t,n){var i=e.state.grid.slice(),a=i[t][n],o=Object(d.a)(Object(d.a)({},a),{},{isWall:!a.isWall});return i[t][n]=o,i},e.handleMouseDown=function(t,n){if(t===S&&n===O||t===V&&n===W){if(console.log(t,n,"mouse down starting or ending"),e.setState({isMousePressed:!0}),t===S&&n===O){var i=e.state.grid.slice(),a=i[t][n],o=Object(d.a)(Object(d.a)({},a),{},{isStart:!1});i[t][n]=o,e.setState({grid:i,isMovingStart:!0})}else if(t===V&&n===W){var s=e.state.grid.slice(),r=s[t][n],l=Object(d.a)(Object(d.a)({},r),{},{isEnd:!1});s[t][n]=l,e.setState({grid:s,isMovingEnd:!0})}}else{console.log(t,n,"mouse down");var c=e.getNewGridWithWallToggled(t,n);e.setState({grid:c,isMousePressed:!0})}},e.handleMouseEnter=function(t,n){if(e.state.isMousePressed&&!e.state.isMovingStart&&!e.state.isMovingEnd)if(t===S&&n===O||t===V&&n===W)console.log("mouse entered starting or ending");else{console.log(t,n,"mouse enter");var i=e.getNewGridWithWallToggled(t,n);e.setState({grid:i})}},e.handleMouseUp=function(t,n){if(console.log("mouse up"),e.setState({isMousePressed:!1}),!0===e.state.isMovingStart){var i=e.state.grid.slice(),a=i[t][n],o=Object(d.a)(Object(d.a)({},a),{},{isWall:!1,isStart:!0});i[t][n]=o,e.setState({grid:i,isMovingStart:!1}),S=t,O=n}else if(!0===e.state.isMovingEnd){var s=e.state.grid.slice(),r=s[t][n],l=Object(d.a)(Object(d.a)({},r),{},{isWall:!1,isEnd:!0});s[t][n]=l,e.setState({grid:s,isMovingEnd:!1}),V=t,W=n}},e.animateAlgo=function(e,t){for(var n=function(n){if(n===e.length-1){for(var i=function(e){setTimeout((function(){setTimeout((function(){var n=t[e];document.getElementById("node-".concat(n.row,"-").concat(n.column)).className="node node-shortestPath"}),50*e)}),10*n)},a=0;a<t.length;a++)i(a);return{v:void 0}}setTimeout((function(){var t=e[n];document.getElementById("node-".concat(t.row,"-").concat(t.column)).className="node node-visited"}),10*n)},i=1;i<e.length;i++){var a=n(i);if("object"===typeof a)return a.v}},e.visualizeDijkstra=function(){e.clearAlgo();var t=e.state.grid,n=t[S][O],i=t[V][W],a=v(t,n,i),o=p(0,n,i);e.animateAlgo(a,o),e.setState({timeComplexity:a.length,pathLength:o.length})},e.visualizeAstar=function(){e.clearAlgo();var t=e.state.grid,n=t[S][O],i=t[V][W],a=b(t,n,i),o=w(0,n,i);console.log(a),e.animateAlgo(a,o),e.setState({timeComplexity:a.length,pathLength:o.length})},e.visualizeBFS=function(){e.clearAlgo();var t=e.state.grid,n=t[S][O],i=t[V][W],a=E(t,n,i),o=j(0,n,i);console.log(a),e.animateAlgo(a,o),e.setState({timeComplexity:a.length,pathLength:o.length}),console.log(o),console.log(t)},e.clearAlgo=function(){for(var t=e.state.grid,n=0;n<22;n++)for(var i=0;i<50;i++)t[n][i].distance=1/0,t[n][i].isVisited=!1,t[n][i].previousNode=null,n===S&&i===O||n===V&&i===W||!0===t[n][i].isWall||(document.getElementById("node-".concat(n,"-").concat(i)).className="node");e.setState({grid:t,timeComplexity:0,pathLength:0})},e.undoAlgoAndWalls=function(){for(var t=e.state.grid,n=0;n<22;n++)for(var i=0;i<50;i++)t[n][i].distance=1/0,t[n][i].isVisited=!1,t[n][i].previousNode=null,t[n][i].isWall=!1,n===S&&i===O||n===V&&i===W||(document.getElementById("node-".concat(n,"-").concat(i)).className="node");e.setState({grid:t,timeComplexity:0,pathLength:0})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<22;t++){for(var n=[],i=0;i<50;i++){var a={row:t,column:i,isStart:t===S&&i===O,isEnd:t===V&&i===W,distance:1/0,isVisited:!1,previousNode:null,isWall:!1};n.push(a)}e.push(n)}this.setState({grid:e})}},{key:"render",value:function(){var e=this,t=this.state.grid;return a.a.createElement("div",{className:"container-fluid"},a.a.createElement("button",{className:"btn btn-primary btn-lg",id:"function",onClick:this.visualizeDijkstra},"Visualize Dijkstra Algorithm"),a.a.createElement("button",{className:"btn btn-primary btn-lg",id:"function",onClick:this.visualizeAstar},"Visualize A* Algorithm"),a.a.createElement("button",{className:"btn btn-primary btn-lg",id:"function",onClick:this.visualizeBFS},"Breadth First Search"),a.a.createElement("button",{className:"btn btn-primary btn-lg",id:"function",onClick:this.undoAlgoAndWalls},"Undo Algo and walls"),a.a.createElement("button",{className:"btn btn-primary btn-lg",id:"function",onClick:this.clearAlgo},"Clear Algo"),a.a.createElement("div",null,a.a.createElement("span",{className:"time"},"Time Complexity = ",this.state.timeComplexity),a.a.createElement("span",{className:"pathLength"},"Path Length = ",this.state.pathLength)),a.a.createElement("div",{className:"grid"},t.map((function(t,n){return a.a.createElement("div",{key:n},t.map((function(t,n){var i=t.row,o=t.column,s=t.isStart,r=t.isEnd,l=t.distance,c=t.isVisited,u=t.previousNode,d=t.isWall,h=t.isMousePressed;return a.a.createElement(f,{key:n,row:i,column:o,isStart:s,isEnd:r,distance:l,isVisited:c,previousNode:u,isWall:d,isMousePressed:h,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(t,n){return e.handleMouseUp(t,n)}})})))}))))}}]),n}(i.Component),C=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(A,null)}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.436aef7a.chunk.js.map