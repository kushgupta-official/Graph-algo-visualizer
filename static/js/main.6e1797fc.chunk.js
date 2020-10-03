(this["webpackJsonpgraph-algo-visualizer"]=this["webpackJsonpgraph-algo-visualizer"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(8),o=n.n(s),r=(n(14),n(3)),l=n(4),c=n(6),u=n(5),d=n(1),h=(n(15),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={},e.getClassName=function(){var t="node";return!0===e.props.isStart?t+=" startNode":!0===e.props.isEnd?t+=" endNode":!0===e.props.isWall&&(t+=" wall-true"),t},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.row,n=e.column,a=(e.isStart,e.isEnd,e.distance,e.isVisited,e.previousNode,e.isWall,e.onMouseDown),s=e.onMouseUp,o=e.onMouseEnter;return i.a.createElement("div",{className:this.getClassName(),id:"node-".concat(t,"-").concat(n),onMouseDown:function(){return a(t,n)},onMouseEnter:function(){return o(t,n)},onMouseUp:function(){return s(t,n)}})}}]),n}(a.Component)),g=(n(16),n(2));function f(e,t,n){var a=[];t.distance=0;var i=function(e){var t,n=[],a=Object(g.a)(e);try{for(a.s();!(t=a.n()).done;){var i,s=t.value,o=Object(g.a)(s);try{for(o.s();!(i=o.n()).done;){var r=i.value;n.push(r)}}catch(l){o.e(l)}finally{o.f()}}}catch(l){a.e(l)}finally{a.f()}return n}(e);for(console.log(i);i.length;){v(i);var s=i.shift();if(s.distance===1/0)return a;if(!0!==s.isWall){if(s.isVisited=!0,a.push(s),s===n)return a;m(s,e)}}}function v(e){e.sort((function(e,t){return e.distance-t.distance}))}function m(e,t){var n,a=function(e,t){var n=[],a=e.row,i=e.column;a-1>=0&&!0!==t[a-1][i].isVisited&&n.push(t[a-1][i]);a+1<t.length&&!0!==t[a+1][i].isVisited&&n.push(t[a+1][i]);i-1>=0&&!0!==t[a][i-1].isVisited&&n.push(t[a][i-1]);i+1<t[0].length&&!0!==t[a][i+1].isVisited&&n.push(t[a][i+1]);return n}(e,t),i=Object(g.a)(a);try{for(i.s();!(n=i.n()).done;){var s=n.value;s.distance=e.distance+1,s.previousNode=e}}catch(o){i.e(o)}finally{i.f()}return a}function p(e,t,n){var a=[],i=n.previousNode;if(null===i)return a;for(;i!==t;)a.push(i),i=i.previousNode;return a.reverse(),a}function b(e,t,n){var a=[];t.distance=Math.abs(t.row-n.row)+Math.abs(t.column-n.column);for(var i=function(e){var t,n=[],a=Object(g.a)(e);try{for(a.s();!(t=a.n()).done;){var i,s=t.value,o=Object(g.a)(s);try{for(o.s();!(i=o.n()).done;){var r=i.value;n.push(r)}}catch(l){o.e(l)}finally{o.f()}}}catch(l){a.e(l)}finally{a.f()}return n}(e);i.length;){y(i);var s=i.shift();if(s.distance===1/0)return a;if(!s.isWall){if(s.isVisited=!0,a.push(s),s===n)return a;E(s,n,e)}}}function y(e){e.sort((function(e,t){return e.distance-t.distance}))}function E(e,t,n){var a,i=function(e,t){var n=[],a=e.row,i=e.column;a-1>=0&&!0!==t[a-1][i].isVisited&&n.push(t[a-1][i]);a+1<t.length&&!0!==t[a+1][i].isVisited&&n.push(t[a+1][i]);i-1>=0&&!0!==t[a][i-1].isVisited&&n.push(t[a][i-1]);i+1<t[0].length&&!0!==t[a][i+1].isVisited&&n.push(t[a][i+1]);return n}(e,n),s=Object(g.a)(i);try{for(s.s();!(a=s.n()).done;){var o=a.value;o.distance=e.distance-(Math.abs(e.row-t.row)+Math.abs(e.column-t.column))+1+Math.abs(o.row-t.row)+Math.abs(o.column-t.column),o.previousNode=e}}catch(r){s.e(r)}finally{s.f()}return i}function M(e,t,n){var a=[],i=n.previousNode;if(null===i)return a;for(;i!==t;)a.push(i),i=i.previousNode;return a.reverse(),a}function w(e,t,n){var a=[];t.isVisited=!0;var i=[];for(i.push(t);i.length;){var s=i.shift();if(s===n)return a;s.isWall||(a.push(s),N(e,i,s))}return a}function N(e,t,n){var a,i=function(e,t){var n=[],a=t.row,i=t.column;a-1>=0&&!e[a-1][i].isVisited&&n.push(e[a-1][i]);i-1>=0&&!e[a][i-1].isVisited&&n.push(e[a][i-1]);a+1<e.length&&!e[a+1][i].isVisited&&n.push(e[a+1][i]);i+1<e[0].length&&!e[a][i+1].isVisited&&n.push(e[a][i+1]);return n}(e,n),s=Object(g.a)(i);try{for(s.s();!(a=s.n()).done;){var o=a.value;o.isVisited=!0,o.previousNode=n,t.push(o)}}catch(r){s.e(r)}finally{s.f()}}function j(e,t,n){var a=[],i=n.previousNode;if(null===i)return a;for(;i!==t;)a.push(i),i=i.previousNode;return a.reverse(),a}var S=5,O=10,W=10,C=37,V=function(e){return i.a.createElement("input",Object.assign({type:"checkbox"},e))},A=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={grid:[],isMousePressed:!1,timeComplexity:0,pathLength:0,isMovingStart:!1,isMovingEnd:!1,addWeights:!1},e.getNewGridWithWallToggled=function(t,n){var a=e.state.grid.slice(),i=a[t][n],s=Object(d.a)(Object(d.a)({},i),{},{isWall:!i.isWall});return a[t][n]=s,a},e.handleMouseDown=function(t,n){if(t===S&&n===O||t===W&&n===C){if(console.log(t,n,"mouse down starting or ending"),e.setState({isMousePressed:!0}),t===S&&n===O){var a=e.state.grid.slice(),i=a[t][n],s=Object(d.a)(Object(d.a)({},i),{},{isStart:!1});a[t][n]=s,e.setState({grid:a,isMovingStart:!0})}else if(t===W&&n===C){var o=e.state.grid.slice(),r=o[t][n],l=Object(d.a)(Object(d.a)({},r),{},{isEnd:!1});o[t][n]=l,e.setState({grid:o,isMovingEnd:!0})}}else{console.log(t,n,"mouse down");var c=e.getNewGridWithWallToggled(t,n);e.setState({grid:c,isMousePressed:!0})}},e.handleMouseEnter=function(t,n){if(e.state.isMousePressed&&!e.state.isMovingStart&&!e.state.isMovingEnd)if(t===S&&n===O||t===W&&n===C)console.log("mouse entered starting or ending");else{console.log(t,n,"mouse enter");var a=e.getNewGridWithWallToggled(t,n);e.setState({grid:a})}},e.handleMouseUp=function(t,n){if(console.log("mouse up"),e.setState({isMousePressed:!1}),!0===e.state.isMovingStart){var a=e.state.grid.slice(),i=a[t][n],s=Object(d.a)(Object(d.a)({},i),{},{isWall:!1,isStart:!0});a[t][n]=s,e.setState({grid:a,isMovingStart:!1}),S=t,O=n}else if(!0===e.state.isMovingEnd){var o=e.state.grid.slice(),r=o[t][n],l=Object(d.a)(Object(d.a)({},r),{},{isWall:!1,isEnd:!0});o[t][n]=l,e.setState({grid:o,isMovingEnd:!1}),W=t,C=n}},e.animateAlgo=function(e,t){for(var n=function(n){if(n===e.length-1){for(var a=function(e){setTimeout((function(){setTimeout((function(){var n=t[e];document.getElementById("node-".concat(n.row,"-").concat(n.column)).className="node node-shortestPath"}),50*e)}),10*n)},i=0;i<t.length;i++)a(i);return{v:void 0}}setTimeout((function(){var t=e[n];document.getElementById("node-".concat(t.row,"-").concat(t.column)).className="node node-visited"}),10*n)},a=1;a<e.length;a++){var i=n(a);if("object"===typeof i)return i.v}},e.visualizeDijkstra=function(){e.clearAlgo();var t=e.state.grid,n=t[S][O],a=t[W][C],i=f(t,n,a),s=p(0,n,a);e.animateAlgo(i,s),e.setState({timeComplexity:i.length,pathLength:s.length})},e.visualizeAstar=function(){e.clearAlgo();var t=e.state.grid,n=t[S][O],a=t[W][C],i=b(t,n,a),s=M(0,n,a);console.log(i),e.animateAlgo(i,s),e.setState({timeComplexity:i.length,pathLength:s.length})},e.visualizeBFS=function(){e.clearAlgo();var t=e.state.grid,n=t[S][O],a=t[W][C],i=w(t,n,a),s=j(0,n,a);console.log(i),e.animateAlgo(i,s),e.setState({timeComplexity:i.length,pathLength:s.length}),console.log(s),console.log(t)},e.clearAlgo=function(){for(var t=e.state.grid,n=0;n<20;n++)for(var a=0;a<40;a++)t[n][a].distance=1/0,t[n][a].isVisited=!1,t[n][a].previousNode=null,n===S&&a===O||n===W&&a===C||!0===t[n][a].isWall||(document.getElementById("node-".concat(n,"-").concat(a)).className="node");e.setState({grid:t,timeComplexity:0,pathLength:0})},e.undoAlgoAndWalls=function(){for(var t=e.state.grid,n=0;n<20;n++)for(var a=0;a<40;a++)t[n][a].distance=1/0,t[n][a].isVisited=!1,t[n][a].previousNode=null,t[n][a].isWall=!1,n===S&&a===O||n===W&&a===C||(document.getElementById("node-".concat(n,"-").concat(a)).className="node");e.setState({grid:t,timeComplexity:0,pathLength:0})},e.handleCheckboxChange=function(){console.log(e.state.addWeights),e.setState({addWeights:!e.state.addWeights}),console.log(e.state.addWeights,"hi")},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<20;t++){for(var n=[],a=0;a<40;a++){var i={row:t,column:a,isStart:t===S&&a===O,isEnd:t===W&&a===C,distance:1/0,isVisited:!1,previousNode:null,isWall:!1};n.push(i)}e.push(n)}this.setState({grid:e})}},{key:"render",value:function(){var e=this,t=this.state.grid;return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("button",{className:"btn btn-primary btn-lg",id:"function",onClick:this.visualizeDijkstra},"Visualize Dijkstra Algorithm"),i.a.createElement("button",{className:"btn btn-primary btn-lg",id:"function",onClick:this.visualizeAstar},"Visualize A* Algorithm"),i.a.createElement("button",{className:"btn btn-primary btn-lg",id:"function",onClick:this.visualizeBFS},"Breadth First Search"),i.a.createElement("button",{className:"btn btn-primary btn-lg",id:"function",onClick:this.undoAlgoAndWalls},"Undo Algo and walls"),i.a.createElement("button",{className:"btn btn-primary btn-lg",id:"function",onClick:this.clearAlgo},"Clear Algo"),i.a.createElement("label",null,i.a.createElement(V,{checked:this.state.addWeights,onChange:this.handleCheckboxChange}),i.a.createElement("span",null,"Label Text")),i.a.createElement("div",null,i.a.createElement("span",{className:"time"},"Time Complexity = ",this.state.timeComplexity),i.a.createElement("span",{className:"pathLength"},"Path Length = ",this.state.pathLength)),i.a.createElement("div",{className:"grid"},t.map((function(t,n){return i.a.createElement("div",{key:n},t.map((function(t,n){var a=t.row,s=t.column,o=t.isStart,r=t.isEnd,l=t.distance,c=t.isVisited,u=t.previousNode,d=t.isWall,g=t.isMousePressed;return i.a.createElement(h,{key:n,row:a,column:s,isStart:o,isEnd:r,distance:l,isVisited:c,previousNode:u,isWall:d,isMousePressed:g,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(t,n){return e.handleMouseUp(t,n)}})})))}))))}}]),n}(a.Component),k=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(A,null)}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.6e1797fc.chunk.js.map