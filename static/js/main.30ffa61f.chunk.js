(window["webpackJsonpreact-robot"]=window["webpackJsonpreact-robot"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),s=(n(13),n(14),n(15),n(16),n(20),function(e){return o.a.createElement("div",{className:"row text-center"},o.a.createElement("div",{className:"col"},o.a.createElement("h2",{className:"header"},"React-Robot")))}),i=n(3),l=n(4),m=n(6),u=n(5),d=n(7),h=(n(21),function(e){return o.a.createElement("div",{className:"col-xs-6 col-md-3"},o.a.createElement("div",{className:"card mb-4"},o.a.createElement("img",{src:"https://robohash.org/".concat(e.robot.email,"?set=set3"),className:"card-img-top",alt:"..."}),o.a.createElement("div",{className:"card-body text-center"},o.a.createElement("h5",{className:"card-title"},e.robot.name))))}),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={robots:[]},n.fetchItems=function(e){fetch(e).then(function(e){return e.json()}).then(function(e){return n.setState({robots:e})})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchItems("https://jsonplaceholder.typicode.com/users")}},{key:"render",value:function(){return o.a.createElement("div",{className:"row"},this.state.robots.map(function(e){return o.a.createElement(h,{key:e.id,robot:e})}))}}]),t}(a.Component);var b=function(){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement(s,null),o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(22)}},[[8,1,2]]]);
//# sourceMappingURL=main.30ffa61f.chunk.js.map