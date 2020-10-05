(this["webpackJsonpgraph-algo-visualizer"]=this["webpackJsonpgraph-algo-visualizer"]||[]).push([[0],{11:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(10),o=n.n(s),r=(n(16),n(4)),l=n(5),c=n(7),u=n(6),d=n(1),h=(n(17),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={},e.getClassName=function(){var t="node";return!0===e.props.isStart?t+=" startNode":!0===e.props.isEnd?t+=" endNode":!0===e.props.isWall?t+=" wall-true":e.props.weight>0&&(t+=" weight-present"),t},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.row,n=e.column,i=(e.isStart,e.isEnd,e.distance,e.isVisited,e.previousNode,e.isWall,e.weight,e.onMouseDown),s=e.onMouseUp,o=e.onMouseEnter;return a.a.createElement("div",{className:this.getClassName(),id:"node-".concat(t,"-").concat(n),onMouseDown:function(){return i(t,n)},onMouseEnter:function(){return o(t,n)},onMouseUp:function(){return s(t,n)}})}}]),n}(i.Component)),g=(n(18),n(2));function v(e,t,n){var i=[];t.distance=0;var a=function(e){var t,n=[],i=Object(g.a)(e);try{for(i.s();!(t=i.n()).done;){var a,s=t.value,o=Object(g.a)(s);try{for(o.s();!(a=o.n()).done;){var r=a.value;n.push(r)}}catch(l){o.e(l)}finally{o.f()}}}catch(l){i.e(l)}finally{i.f()}return n}(e);for(console.log(a);a.length;){f(a);var s=a.shift();if(s.distance===1/0)return i;if(!0!==s.isWall){if(s.isVisited=!0,i.push(s),s===n)return i;m(s,e)}}}function f(e){e.sort((function(e,t){return e.distance-t.distance}))}function m(e,t){var n,i=function(e,t){var n=[],i=e.row,a=e.column;i-1>=0&&!0!==t[i-1][a].isVisited&&n.push(t[i-1][a]);i+1<t.length&&!0!==t[i+1][a].isVisited&&n.push(t[i+1][a]);a-1>=0&&!0!==t[i][a-1].isVisited&&n.push(t[i][a-1]);a+1<t[0].length&&!0!==t[i][a+1].isVisited&&n.push(t[i][a+1]);return n}(e,t),a=Object(g.a)(i);try{for(a.s();!(n=a.n()).done;){var s=n.value;s.distance=e.distance+s.weight,s.previousNode=e}}catch(o){a.e(o)}finally{a.f()}return i}function p(e,t,n){var i=[],a=n.previousNode;if(null===a)return i;for(;a!==t;)i.push(a),a=a.previousNode;return i.reverse(),i}function b(e,t,n){var i=[];t.distance=Math.abs(t.row-n.row)+Math.abs(t.column-n.column);for(var a=function(e){var t,n=[],i=Object(g.a)(e);try{for(i.s();!(t=i.n()).done;){var a,s=t.value,o=Object(g.a)(s);try{for(o.s();!(a=o.n()).done;){var r=a.value;n.push(r)}}catch(l){o.e(l)}finally{o.f()}}}catch(l){i.e(l)}finally{i.f()}return n}(e);a.length;){w(a);var s=a.shift();if(s.distance===1/0)return i;if(!s.isWall){if(s.isVisited=!0,i.push(s),s===n)return i;y(s,n,e)}}}function w(e){e.sort((function(e,t){return e.distance-t.distance}))}function y(e,t,n){var i,a=function(e,t){var n=[],i=e.row,a=e.column;i-1>=0&&!0!==t[i-1][a].isVisited&&n.push(t[i-1][a]);i+1<t.length&&!0!==t[i+1][a].isVisited&&n.push(t[i+1][a]);a-1>=0&&!0!==t[i][a-1].isVisited&&n.push(t[i][a-1]);a+1<t[0].length&&!0!==t[i][a+1].isVisited&&n.push(t[i][a+1]);return n}(e,n),s=e.distance-(Math.abs(e.row-t.row)+Math.abs(e.column-t.column)),o=Object(g.a)(a);try{for(o.s();!(i=o.n()).done;){var r=i.value;r.distance>s+r.weight+Math.abs(r.row-t.row)+Math.abs(r.column-t.column)&&(r.distance=s+r.weight+Math.abs(r.row-t.row)+Math.abs(r.column-t.column),r.previousNode=e)}}catch(l){o.e(l)}finally{o.f()}return a}function E(e,t,n){var i=[],a=n.previousNode;if(null===a)return i;for(;a!==t;)i.push(a),a=a.previousNode;return i.reverse(),i}function M(e,t,n){var i=[];t.isVisited=!0;var a=[];for(a.push(t);a.length;){var s=a.shift();if(s===n)return i;s.isWall||(i.push(s),N(e,a,s))}return i}function N(e,t,n){var i,a=function(e,t){var n=[],i=t.row,a=t.column;i-1>=0&&!e[i-1][a].isVisited&&n.push(e[i-1][a]);a-1>=0&&!e[i][a-1].isVisited&&n.push(e[i][a-1]);i+1<e.length&&!e[i+1][a].isVisited&&n.push(e[i+1][a]);a+1<e[0].length&&!e[i][a+1].isVisited&&n.push(e[i][a+1]);return n}(e,n),s=Object(g.a)(a);try{for(s.s();!(i=s.n()).done;){var o=i.value;o.isVisited=!0,o.previousNode=n,t.push(o)}}catch(r){s.e(r)}finally{s.f()}}function W(e,t,n){var i=[],a=n.previousNode;if(null===a)return i;for(;a!==t;)i.push(a),a=a.previousNode;return i.reverse(),i}var j=5,O=10,S=10,A=37,C=function(e){return a.a.createElement("input",Object.assign({type:"checkbox"},e))},V=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={grid:[],isMousePressed:!1,timeComplexity:0,pathLength:0,isMovingStart:!1,isMovingEnd:!1,addWeights:!1},e.getNewGridWithWallToggled=function(t,n){var i=e.state.grid.slice(),a=i[t][n],s=Object(d.a)(Object(d.a)({},a),{},{isWall:!a.isWall,weight:0});return i[t][n]=s,i},e.getNewGridWithWeights=function(t,n){var i=e.state.grid.slice(),a=i[t][n],s=0;s=0===a.weight?10:-10;var o=Object(d.a)(Object(d.a)({},a),{},{isWall:!1,weight:a.weight+s});return i[t][n]=o,i},e.handleMouseDown=function(t,n){var i;if(t===j&&n===O||t===S&&n===A){if(console.log(t,n,"mouse down starting or ending"),e.setState({isMousePressed:!0}),t===j&&n===O){var a=e.state.grid.slice(),s=a[t][n],o=Object(d.a)(Object(d.a)({},s),{},{isStart:!1});a[t][n]=o,e.setState({grid:a,isMovingStart:!0})}else if(t===S&&n===A){var r=e.state.grid.slice(),l=r[t][n],c=Object(d.a)(Object(d.a)({},l),{},{isEnd:!1});r[t][n]=c,e.setState({grid:r,isMovingEnd:!0})}}else console.log(t,n,"mouse down"),i=e.state.addWeights?e.getNewGridWithWeights(t,n):e.getNewGridWithWallToggled(t,n),e.setState({grid:i,isMousePressed:!0})},e.handleMouseEnter=function(t,n){var i;e.state.isMousePressed&&(e.state.isMovingStart||e.state.isMovingEnd||(t===j&&n===O||t===S&&n===A?console.log("mouse entered starting or ending"):(console.log(t,n,"mouse enter"),i=e.state.addWeights?e.getNewGridWithWeights(t,n):e.getNewGridWithWallToggled(t,n),e.setState({grid:i}))))},e.handleMouseUp=function(t,n){if(console.log("mouse up"),e.setState({isMousePressed:!1}),!0===e.state.isMovingStart){var i=e.state.grid.slice(),a=i[t][n],s=Object(d.a)(Object(d.a)({},a),{},{isWall:!1,isStart:!0});i[t][n]=s,e.setState({grid:i,isMovingStart:!1}),j=t,O=n}else if(!0===e.state.isMovingEnd){var o=e.state.grid.slice(),r=o[t][n],l=Object(d.a)(Object(d.a)({},r),{},{isWall:!1,isEnd:!0});o[t][n]=l,e.setState({grid:o,isMovingEnd:!1}),S=t,A=n}},e.animateAlgo=function(e,t){for(var n=function(n){if(n===e.length-1){for(var i=function(e){setTimeout((function(){setTimeout((function(){var n=t[e];document.getElementById("node-".concat(n.row,"-").concat(n.column)).className="node node-shortestPath"}),50*e)}),25*n)},a=0;a<t.length;a++)i(a);return{v:void 0}}setTimeout((function(){var t=e[n];document.getElementById("node-".concat(t.row,"-").concat(t.column)).className="node node-visited"}),25*n)},i=1;i<e.length;i++){var a=n(i);if("object"===typeof a)return a.v}},e.visualizeDijkstra=function(){e.clearAlgo();var t=e.state.grid,n=t[j][O],i=t[S][A],a=v(t,n,i),s=p(0,n,i);e.animateAlgo(a,s),e.setState({timeComplexity:a.length,pathLength:s.length})},e.visualizeAstar=function(){e.clearAlgo();var t=e.state.grid,n=t[j][O],i=t[S][A],a=b(t,n,i),s=E(0,n,i);console.log(a),e.animateAlgo(a,s),e.setState({timeComplexity:a.length,pathLength:s.length})},e.visualizeBFS=function(){e.clearAlgo();var t=e.state.grid,n=t[j][O],i=t[S][A],a=M(t,n,i),s=W(0,n,i);console.log(a),e.animateAlgo(a,s),e.setState({timeComplexity:a.length,pathLength:s.length}),console.log(s),console.log(t)},e.clearAlgo=function(){for(var t=e.state.grid,n=0;n<20;n++)for(var i=0;i<40;i++)t[n][i].distance=1/0,t[n][i].isVisited=!1,t[n][i].previousNode=null,n===j&&i===O||n===S&&i===A||!0===t[n][i].isWall||(t[n][i].weight>0?document.getElementById("node-".concat(n,"-").concat(i)).className="node weight-present":document.getElementById("node-".concat(n,"-").concat(i)).className="node");e.setState({grid:t,timeComplexity:0,pathLength:0})},e.undoAlgoAndWalls=function(){for(var t=e.state.grid,n=0;n<20;n++)for(var i=0;i<40;i++)t[n][i].distance=1/0,t[n][i].isVisited=!1,t[n][i].previousNode=null,t[n][i].isWall=!1,t[n][i].weight=0,n===j&&i===O||n===S&&i===A||(document.getElementById("node-".concat(n,"-").concat(i)).className="node");e.setState({grid:t,timeComplexity:0,pathLength:0})},e.handleCheckboxChange=function(){console.log(e.state.addWeights),e.setState({addWeights:!e.state.addWeights}),console.log(e.state.addWeights,"hi")},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<20;t++){for(var n=[],i=0;i<40;i++){var a={row:t,column:i,isStart:t===j&&i===O,isEnd:t===S&&i===A,distance:1/0,weight:0,isVisited:!1,previousNode:null,isWall:!1};n.push(a)}e.push(n)}this.setState({grid:e})}},{key:"render",value:function(){var e=this,t=this.state.grid;return a.a.createElement("div",{className:"container-fluid"},a.a.createElement("button",{className:"btn btn-primary btn-lg",id:"function",onClick:this.visualizeDijkstra},"Visualize Dijkstra Algorithm"),a.a.createElement("button",{className:"btn btn-primary btn-lg",id:"function",onClick:this.visualizeAstar},"Visualize A* Algorithm"),a.a.createElement("button",{className:"btn btn-primary btn-lg",id:"function",onClick:this.visualizeBFS},"Breadth First Search"),a.a.createElement("button",{className:"btn btn-primary btn-lg",id:"function",onClick:this.undoAlgoAndWalls},"Undo Algo and walls"),a.a.createElement("button",{className:"btn btn-primary btn-lg",id:"function",onClick:this.clearAlgo},"Clear Algo"),a.a.createElement("label",null,a.a.createElement(C,{checked:this.state.addWeights,onChange:this.handleCheckboxChange}),a.a.createElement("span",null,"Switch to Weights")),a.a.createElement("div",null,a.a.createElement("span",{className:"time"},"Time Complexity = ",this.state.timeComplexity),a.a.createElement("span",{className:"pathLength"},"Path Length = ",this.state.pathLength)),a.a.createElement("div",{className:"grid"},t.map((function(t,n){return a.a.createElement("div",{key:n},t.map((function(t,n){var i=t.row,s=t.column,o=t.isStart,r=t.isEnd,l=t.distance,c=t.isVisited,u=t.previousNode,d=t.isWall,g=t.weight,v=t.isMousePressed;return a.a.createElement(h,{key:n,row:i,column:s,isStart:o,isEnd:r,distance:l,isVisited:c,previousNode:u,isWall:d,weight:g,isMousePressed:v,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(t,n){return e.handleMouseUp(t,n)}})})))}))))}}]),n}(i.Component),k=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(V,null)}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(19);var x=n(8);x.a.initialize("UA-179559461-1"),x.a.pageview(window.location.pathname+window.location.search),o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.4e74ed4c.chunk.js.map