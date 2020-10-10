(this["webpackJsonpgraph-algo-visualizer"]=this["webpackJsonpgraph-algo-visualizer"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){e.exports=a(51)},44:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(17),r=a.n(s),o=(a(44),a(12)),l=a(13),c=a(16),d=a(14),u=a(9),h=(a(36),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={},e.getClassName=function(){var t="node";return!0===e.props.isStart?t+=" startNode":!0===e.props.isEnd?t+=" endNode":!0===e.props.isWall?t+=" wall-true":e.props.weight>0&&(t+=" weight-present"),t},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.row,a=e.column,n=e.onMouseDown,s=e.onMouseUp,r=e.onMouseEnter;return i.a.createElement("div",{className:this.getClassName(),id:"node-".concat(t,"-").concat(a),onMouseDown:function(){return n(t,a)},onMouseEnter:function(){return r(t,a)},onMouseUp:function(){return s(t,a)}})}}]),a}(n.Component)),g=a(27),m=a(38),v=a(24),p=a(22),f=(a(37),function(e){return i.a.createElement("input",Object.assign({type:"checkbox"},e))}),w=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={currentAlgo:"null",addWeights:"false"},e.forDijkstra=function(){e.setState({currentAlgo:"Dijkstra"}),e.props.handleDescription("Dijkstra")},e.forAstar=function(){e.setState({currentAlgo:"Astar"}),e.props.handleDescription("Astar")},e.forBFS=function(){e.setState({currentAlgo:"BFS"}),e.props.handleDescription("BFS")},e.forDFS=function(){e.setState({currentAlgo:"DFS"}),e.props.handleDescription("DFS")},e.visualize=function(){"Dijkstra"===e.state.currentAlgo?e.props.handleDijkstra():"Astar"===e.state.currentAlgo?e.props.handleAstar():"BFS"===e.state.currentAlgo?e.props.handleBFS():"DFS"===e.state.currentAlgo&&e.props.handleDFS()},e.handleCheckboxChange=function(){console.log(e.state.addWeights),e.setState({addWeights:!e.state.addWeights}),console.log(e.state.addWeights,"hi")},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.handleClearAlgorithm,a=e.handleClearGrid,n=e.addWeights,s=e.handleCheckboxChange,r=e.timeComplexity,o=e.pathLength,l=e.pathCost;return i.a.createElement(g.a,{bg:"dark",variant:"dark",expand:"lg"},i.a.createElement(g.a.Brand,{className:"mr-4"},"Graph Algo Visualizer"),i.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(m.a,{className:"mr-auto"},i.a.createElement(v.a,{title:"Algorithms",id:"basic-nav-dropdown"},i.a.createElement(v.a.Item,{onClick:this.forDijkstra},"Dijkstra"),i.a.createElement(v.a.Item,{onClick:this.forAstar},"A* Search"),i.a.createElement(v.a.Item,{onClick:this.forBFS},"Breadth First Search"),i.a.createElement(v.a.Item,{onClick:this.forDFS},"Depth First Search")),i.a.createElement(p.a,{variant:"success",className:"mx-4",onClick:this.visualize,id:"visualize"},"Visualize!"),i.a.createElement(p.a,{variant:"info",className:"mx-4",id:"clearAlgo",onClick:t},"Clear Algorithm"),i.a.createElement(p.a,{variant:"info",className:"mx-4",onClick:a,id:"clearGrid"},"Clear Grid"),i.a.createElement("label",{className:"mx-3"},i.a.createElement(f,{checked:n,onChange:s}),i.a.createElement("span",{className:"checkBox"},"Switch to Weights")),i.a.createElement("label",{className:"checkBox mx-3"},"Path Length : ",o),i.a.createElement("label",{className:"checkBox mx-3"},"Path Cost : ",l),i.a.createElement("label",{className:"checkBox mx-3"},"Time Complexity : ",r))))}}]),a}(n.Component),b=a(7);function E(e,t,a){var n=[];t.distance=0;var i=function(e){var t,a=[],n=Object(b.a)(e);try{for(n.s();!(t=n.n()).done;){var i,s=t.value,r=Object(b.a)(s);try{for(r.s();!(i=r.n()).done;){var o=i.value;a.push(o)}}catch(l){r.e(l)}finally{r.f()}}}catch(l){n.e(l)}finally{n.f()}return a}(e);for(console.log(i);i.length;){S(i);var s=i.shift();if(s.isVisited=!0,s.distance===1/0)return n;if(!0!==s.isWall){if(n.push(s),s===a)return n;y(s,e)}}}function S(e){e.sort((function(e,t){return e.distance-t.distance}))}function y(e,t){var a,n=function(e,t){var a=[],n=e.row,i=e.column;n-1>=0&&!0!==t[n-1][i].isVisited&&a.push(t[n-1][i]);n+1<t.length&&!0!==t[n+1][i].isVisited&&a.push(t[n+1][i]);i-1>=0&&!0!==t[n][i-1].isVisited&&a.push(t[n][i-1]);i+1<t[0].length&&!0!==t[n][i+1].isVisited&&a.push(t[n][i+1]);return a}(e,t),i=Object(b.a)(n);try{for(i.s();!(a=i.n()).done;){var s=a.value;s.distance>e.distance+s.weight&&(s.distance=e.distance+s.weight+1,s.previousNode=e)}}catch(r){i.e(r)}finally{i.f()}return n}function N(e,t,a){var n=[],i=a.previousNode;if(null===i)return n;for(;i!==t;)n.push(i),i=i.previousNode;return n.reverse(),n}function A(e,t){var a,n=0,i=Object(b.a)(t);try{for(i.s();!(a=i.n()).done;){var s=a.value;0===s.weight?n+=1:n=n+s.weight+1}}catch(r){i.e(r)}finally{i.f()}return n}function j(e,t,a){var n=[];t.distance=Math.abs(t.row-a.row)+Math.abs(t.column-a.column);for(var i=function(e){var t,a=[],n=Object(b.a)(e);try{for(n.s();!(t=n.n()).done;){var i,s=t.value,r=Object(b.a)(s);try{for(r.s();!(i=r.n()).done;){var o=i.value;a.push(o)}}catch(l){r.e(l)}finally{r.f()}}}catch(l){n.e(l)}finally{n.f()}return a}(e);i.length;){C(i);var s=i.shift();if(s.distance===1/0)return n;if(!s.isWall){if(s.isVisited=!0,n.push(s),s===a)return n;W(s,a,e)}}}function C(e){e.sort((function(e,t){return e.distance-t.distance}))}function W(e,t,a){var n,i=function(e,t){var a=[],n=e.row,i=e.column;n-1>=0&&!0!==t[n-1][i].isVisited&&a.push(t[n-1][i]);n+1<t.length&&!0!==t[n+1][i].isVisited&&a.push(t[n+1][i]);i-1>=0&&!0!==t[n][i-1].isVisited&&a.push(t[n][i-1]);i+1<t[0].length&&!0!==t[n][i+1].isVisited&&a.push(t[n][i+1]);return a}(e,a),s=Math.abs(e.row-t.row)+Math.abs(e.column-t.column),r=e.distance-s,o=Object(b.a)(i);try{for(o.s();!(n=o.n()).done;){var l=n.value,c=r+l.weight+1,d=Math.abs(l.row-t.row)+Math.abs(l.column-t.column);l.distance>c+d&&(l.distance=c+d,l.previousNode=e)}}catch(u){o.e(u)}finally{o.f()}return i}function k(e,t,a){var n=[],i=a.previousNode;if(null===i)return n;for(;i!==t;)n.push(i),i=i.previousNode;return n.reverse(),n}function O(e,t){var a,n=0,i=Object(b.a)(t);try{for(i.s();!(a=i.n()).done;){var s=a.value;0===s.weight?n+=1:n=n+s.weight+1}}catch(r){i.e(r)}finally{i.f()}return n}function M(e,t,a){var n=[];t.isVisited=!0;var i=[];for(i.push(t);i.length;){var s=i.shift();if(s===a)return n;s.isWall||(n.push(s),D(e,i,s))}return n}function D(e,t,a){var n,i=function(e,t){var a=[],n=t.row,i=t.column;n-1>=0&&!e[n-1][i].isVisited&&a.push(e[n-1][i]);i-1>=0&&!e[n][i-1].isVisited&&a.push(e[n][i-1]);n+1<e.length&&!e[n+1][i].isVisited&&a.push(e[n+1][i]);i+1<e[0].length&&!e[n][i+1].isVisited&&a.push(e[n][i+1]);return a}(e,a),s=Object(b.a)(i);try{for(s.s();!(n=s.n()).done;){var r=n.value;r.isVisited=!0,r.previousNode=a,t.push(r)}}catch(o){s.e(o)}finally{s.f()}}function B(e,t,a){var n=[],i=a.previousNode;if(null===i)return n;for(;i!==t;)n.push(i),i=i.previousNode;return n.reverse(),n}function x(e,t){var a,n=0,i=Object(b.a)(t);try{for(i.s();!(a=i.n()).done;){var s=a.value;0===s.weight?n+=1:n=n+s.weight+1}}catch(r){i.e(r)}finally{i.f()}return n}function V(e,t,a){var n=[],i=[];for(t.isVisited=!0,i.push(t);i.length;){var s=i.pop();if(!0!==s.isWall){if(n.push(s),s===a)return n;F(e,i,s)}}return n}function F(e,t,a){var n,i=function(e,t){var a=[],n=t.row,i=t.column;n-1>=0&&!1===e[n-1][i].isVisited&&a.push(e[n-1][i]);i-1>=0&&!1===e[n][i-1].isVisited&&a.push(e[n][i-1]);n+1<e.length&&!1===e[n+1][i].isVisited&&a.push(e[n+1][i]);i+1<e[0].length&&!1===e[n][i+1].isVisited&&a.push(e[n][i+1]);return a}(e,a),s=Object(b.a)(i);try{for(s.s();!(n=s.n()).done;){var r=n.value;r.previousNode=a,r.isVisited=!0,t.push(r)}}catch(o){s.e(o)}finally{s.f()}}function I(e,t,a){var n=[],i=a.previousNode;if(null===i)return n;for(;i!==t;)n.push(i),i=i.previousNode;return n.reverse(),n}function z(e,t){var a,n=0,i=Object(b.a)(t);try{for(i.s();!(a=i.n()).done;){var s=a.value;0===s.weight?n+=1:n=n+s.weight+1}}catch(r){i.e(r)}finally{i.f()}return n}var G=5,P=10,L=10,T=37,U=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={grid:[],isMousePressed:!1,timeComplexity:0,pathCost:0,pathLength:0,isMovingStart:!1,isMovingEnd:!1,addWeights:!1,processActive:!1,description:"Select an Algorithm"},e.getNewGridWithWallToggled=function(t,a){var n=e.state.grid.slice(),i=n[t][a],s=Object(u.a)(Object(u.a)({},i),{},{isWall:!i.isWall,weight:0});return n[t][a]=s,n},e.getNewGridWithWeights=function(t,a){var n=e.state.grid.slice(),i=n[t][a],s=0;s=0===i.weight?10:-10;var r=Object(u.a)(Object(u.a)({},i),{},{isWall:!1,weight:i.weight+s});return n[t][a]=r,n},e.handleMouseDown=function(t,a){var n;if(!0!==e.state.processActive)if(t===G&&a===P||t===L&&a===T){if(console.log(t,a,"mouse down starting or ending"),e.setState({isMousePressed:!0}),t===G&&a===P){var i=e.state.grid.slice(),s=i[t][a],r=Object(u.a)(Object(u.a)({},s),{},{isStart:!1});i[t][a]=r,e.setState({grid:i,isMovingStart:!0})}else if(t===L&&a===T){var o=e.state.grid.slice(),l=o[t][a],c=Object(u.a)(Object(u.a)({},l),{},{isEnd:!1});o[t][a]=c,e.setState({grid:o,isMovingEnd:!0})}}else console.log(t,a,"mouse down"),n=e.state.addWeights?e.getNewGridWithWeights(t,a):e.getNewGridWithWallToggled(t,a),e.setState({grid:n,isMousePressed:!0})},e.handleMouseEnter=function(t,a){if(e.state.isMousePressed){if(e.state.isMovingStart){var n=e.state.grid;n[G][P].isStart=!1,n[t][a].isStart=!0,G=t,P=a,e.setState({grid:n})}else if(e.state.isMovingEnd){var i=e.state.grid;i[L][T].isEnd=!1,i[t][a].isEnd=!0,L=t,T=a,e.setState({grid:i})}var s;if(t===G&&a===P||t===L&&a===T)console.log("mouse entered starting or ending");else console.log(t,a,"mouse enter"),s=e.state.addWeights?e.getNewGridWithWeights(t,a):e.getNewGridWithWallToggled(t,a),e.setState({grid:s})}},e.handleMouseUp=function(t,a){if(!0!==e.state.processActive)if(console.log("mouse up"),e.setState({isMousePressed:!1}),!0===e.state.isMovingStart){var n=e.state.grid.slice(),i=n[t][a],s=Object(u.a)(Object(u.a)({},i),{},{isWall:!1,isStart:!0});n[t][a]=s,e.setState({grid:n,isMovingStart:!1}),G=t,P=a}else if(!0===e.state.isMovingEnd){var r=e.state.grid.slice(),o=r[t][a],l=Object(u.a)(Object(u.a)({},o),{},{isWall:!1,isEnd:!0});r[t][a]=l,e.setState({grid:r,isMovingEnd:!1}),L=t,T=a}},e.animateAlgo=function(t,a){e.setState({processActive:!0}),document.getElementById("visualize").disabled=!0,document.getElementById("clearAlgo").disabled=!0,document.getElementById("clearGrid").disabled=!0;for(var n=function(n){if(n===t.length-1){for(var i=function(e){setTimeout((function(){setTimeout((function(){var t=a[e];"node weight-present-visited"===document.getElementById("node-".concat(t.row,"-").concat(t.column)).className?document.getElementById("node-".concat(t.row,"-").concat(t.column)).className="node weight-present-path":document.getElementById("node-".concat(t.row,"-").concat(t.column)).className="node node-shortestPath"}),50*e)}),25*n)},s=0;s<a.length;s++)i(s);return setTimeout((function(){setTimeout((function(){console.log("ho gya"),e.setState({processActive:!1}),document.getElementById("visualize").disabled=!1,document.getElementById("clearAlgo").disabled=!1,document.getElementById("clearGrid").disabled=!1}),50*a.length)}),25*t.length),{v:void 0}}setTimeout((function(){var e=t[n];"node weight-present"===document.getElementById("node-".concat(e.row,"-").concat(e.column)).className?document.getElementById("node-".concat(e.row,"-").concat(e.column)).className="node weight-present-visited":document.getElementById("node-".concat(e.row,"-").concat(e.column)).className="node node-visited"}),25*n)},i=1;i<t.length;i++){var s=n(i);if("object"===typeof s)return s.v}},e.visualizeDijkstra=function(){e.clearAlgo();var t=e.state.grid,a=t[G][P],n=t[L][T],i=E(t,a,n),s=N(0,a,n),r=A(0,s);e.animateAlgo(i,s),e.setState({timeComplexity:i.length,pathLength:s.length,pathCost:r})},e.visualizeAstar=function(){e.clearAlgo();var t=e.state.grid,a=t[G][P],n=t[L][T],i=j(t,a,n),s=k(0,a,n);console.log(i);var r=O(0,s);e.animateAlgo(i,s),e.setState({timeComplexity:i.length,pathLength:s.length,pathCost:r})},e.visualizeBFS=function(){e.clearAlgo();var t=e.state.grid,a=t[G][P],n=t[L][T],i=M(t,a,n),s=B(0,a,n);console.log(i),e.animateAlgo(i,s);var r=x(0,s);e.setState({timeComplexity:i.length,pathLength:s.length,pathCost:r}),console.log(s),console.log(t)},e.visualizeDFS=function(){e.clearAlgo();var t=e.state.grid,a=t[G][P],n=t[L][T],i=V(t,a,n);console.log(i);var s=I(0,a,n);console.log(i),e.animateAlgo(i,s);var r=z(0,s);e.setState({timeComplexity:i.length,pathLength:s.length,pathCost:r}),console.log(s),console.log(t)},e.clearAlgo=function(){for(var t=e.state.grid,a=0;a<19;a++)for(var n=0;n<45;n++)t[a][n].distance=1/0,t[a][n].isVisited=!1,t[a][n].previousNode=null,a===G&&n===P||a===L&&n===T||!0===t[a][n].isWall||(t[a][n].weight>0?document.getElementById("node-".concat(a,"-").concat(n)).className="node weight-present":document.getElementById("node-".concat(a,"-").concat(n)).className="node");e.setState({grid:t,timeComplexity:0,pathLength:0,pathCost:0})},e.undoAlgoAndWalls=function(){for(var t=e.state.grid,a=0;a<19;a++)for(var n=0;n<45;n++)t[a][n].distance=1/0,t[a][n].isVisited=!1,t[a][n].previousNode=null,t[a][n].isWall=!1,t[a][n].weight=0,a===G&&n===P||a===L&&n===T||(document.getElementById("node-".concat(a,"-").concat(n)).className="node");e.setState({grid:t,timeComplexity:0,pathLength:0,pathCost:0})},e.handleCheckboxChange=function(){console.log(e.state.addWeights),e.setState({addWeights:!e.state.addWeights}),console.log(e.state.addWeights,"hi")},e.getDescription=function(t){"Dijkstra"===t?e.setState({description:"Dijkstra's Algorithm ensures Shortest Path between 2 Nodes in any Weighted Graph"}):"Astar"===t?e.setState({description:"A* Search Algorithm is an AI based Algorithm ensuring Shortest Path between 2 Nodes in any Weighted Graph in very less Time"}):"BFS"===t?e.setState({description:"Breadth First Search ensures Shortest Path between 2 nodes in an Unweighted Graph"}):"DFS"===t&&e.setState({description:"Depth First Search does not ensures the Shortest Path"})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<19;t++){for(var a=[],n=0;n<45;n++){var i={row:t,column:n,isStart:t===G&&n===P,isEnd:t===L&&n===T,distance:1/0,weight:0,isVisited:!1,previousNode:null,isWall:!1};a.push(i)}e.push(a)}this.setState({grid:e})}},{key:"render",value:function(){var e=this,t=this.state.grid;return i.a.createElement("div",null,i.a.createElement(w,{addWeights:this.state.addWeights,handleDijkstra:this.visualizeDijkstra,handleAstar:this.visualizeAstar,handleBFS:this.visualizeBFS,handleDFS:this.visualizeDFS,handleClearAlgorithm:this.clearAlgo,handleClearGrid:this.undoAlgoAndWalls,handleCheckboxChange:this.handleCheckboxChange,processActive:this.state.processActive,timeComplexity:this.state.timeComplexity,pathCost:this.state.pathCost,pathLength:this.state.pathLength,handleDescription:function(t){return e.getDescription(t)}}),i.a.createElement("div",{className:"labels mt-3"},i.a.createElement("li",{className:"node startNode ml-5"}),"  Start node",i.a.createElement("li",{className:"node endNode ml-5"}),"  End Node",i.a.createElement("li",{className:"node node-visited ml-5"}),"  Visited node",i.a.createElement("li",{className:"node node-shortestPath ml-5"}),"  Path Node",i.a.createElement("li",{className:"node wall-true ml-5"}),"  Obstacle Node",i.a.createElement("li",{className:"node weight-present ml-5"}),"  Weight Node",i.a.createElement("li",{className:"node ml-5"}),"  Unvisited Node"),i.a.createElement("div",{className:"description mt-3"},this.state.description),i.a.createElement("div",{className:"grid"},t.map((function(t,a){return i.a.createElement("div",{key:a},t.map((function(t,a){return i.a.createElement(h,{key:a,row:t.row,column:t.column,isStart:t.isStart,isEnd:t.isEnd,distance:t.distance,isVisited:t.isVisited,previousNode:t.previousNode,isWall:t.isWall,weight:t.weight,onMouseDown:function(t,a){return e.handleMouseDown(t,a)},onMouseEnter:function(t,a){return e.handleMouseEnter(t,a)},onMouseUp:function(t,a){return e.handleMouseUp(t,a)}})})))}))),i.a.createElement("div",{className:"footer"},i.a.createElement("p",null,"Created by Kush Gupta ",i.a.createElement("span",{role:"img","aria-label":"owl"},"\ud83e\udd89 Hosted on ",i.a.createElement("a",{href:"https://github.com/kushgupta-official/Graph-algo-visualizer"},"GitHub")))))}}]),a}(n.Component),H=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(U,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(50);var J=a(34);J.a.initialize("UA-179559461-1"),J.a.pageview(window.location.pathname+window.location.search),r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.5304192e.chunk.js.map