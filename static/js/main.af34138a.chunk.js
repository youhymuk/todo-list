(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),r=a.n(c),l=(a(13),a(3)),i=function(e){var t=e.addTodo,a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],i=c[1],u=function(e){e.preventDefault(),r.trim()&&(t(r),i(""))};return o.a.createElement("form",{onSubmit:u},o.a.createElement("div",{className:"input-field"},o.a.createElement("label",null,"Add your todo"),o.a.createElement("input",{type:"text",value:r,onChange:function(e){return i(e.target.value)}}),o.a.createElement("button",{onClick:u,className:"btn-floating"},o.a.createElement("i",{className:"material-icons"},"add"))))},u=function(e){var t=e.id,a=e.title,n=e.completed,c=e.dispatch,r=["todo"];return n&&r.push("checked"),o.a.createElement("li",{className:r.join(" ")},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",checked:n,onChange:function(){return c({type:"toggle",payload:t})}}),o.a.createElement("span",null,a)),o.a.createElement("button",{onClick:function(){return c({type:"remove",payload:t})}},o.a.createElement("i",{className:"material-icons text-red"},"delete")))},d=function(e){var t=e.todos,a=e.dispatch;return o.a.createElement("ul",null,t.map((function(e){return o.a.createElement(u,Object.assign({key:e.id},e,{dispatch:a}))})))},s=a(7),m=a(6),p=function(e,t){switch(t.type){case"add":return[].concat(Object(m.a)(e),[{id:Date.now(),title:t.payload,completed:!1}]);case"remove":return e.filter((function(e){return e.id!==t.payload}));case"toggle":return e.map((function(e){return e.id===t.payload?Object(s.a)({},e,{completed:!e.completed}):e}));default:return e}},f=function(){var e=Object(n.useReducer)(p,JSON.parse(localStorage.getItem("todos"))),t=Object(l.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(a))}),[a]);return o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Todo app"),o.a.createElement(i,{addTodo:function(e){c({type:"add",payload:e})}}),o.a.createElement(d,{todos:a,dispatch:c}))};a(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.af34138a.chunk.js.map