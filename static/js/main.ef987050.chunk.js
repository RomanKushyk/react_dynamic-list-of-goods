(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],[,,,,,,,,,function(t,n,o){},function(t,n,o){},function(t,n,o){},,function(t,n,o){},function(t,n,o){"use strict";o.r(n);var e=o(3),c=o.n(e),i=o(4),s=o(1),r=(o(9),o(10),o(11),o(0)),a=Object(s.memo)((function(t){var n=t.goods;return Object(r.jsx)("ul",{className:"goods-list",children:n.map((function(t){return Object(r.jsx)("li",{className:"goods-list__item",style:{color:t.color},children:t.name},t.id)}))})})),u=(o(13),Object(s.memo)((function(t){var n=t.title,o=t.action;return Object(r.jsx)("button",{type:"button",className:"load-buttons__button",onClick:o,children:n})})));function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d=function(){return l().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}))},j=function(){return l().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},f=Object(s.memo)((function(){var t=Object(s.useState)([]),n=Object(i.a)(t,2),o=n[0],e=n[1],c=Object(s.useCallback)((function(t){t().then((function(t){return e(t)}))}),[]);return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{className:"App__title",children:"Dynamic list of Goods"}),Object(r.jsxs)("div",{className:"load-buttons",children:[Object(r.jsx)(u,{title:"Load All goods",action:function(){c(l)}}),Object(r.jsx)(u,{title:"Load 5 first goods",action:function(){c(d)}}),Object(r.jsx)(u,{title:"Load red goods",action:function(){c(j)}})]}),Object(r.jsx)(a,{goods:o})]})}));c.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.ef987050.chunk.js.map