(this["webpackJsonpreact-interview"]=this["webpackJsonpreact-interview"]||[]).push([[0],{14:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(8),l=t.n(c),u=t(6),s=(t(14),t(3)),i=t(2),m=function(e){var a=e.value,t=e.playCell;return r.a.createElement("div",{className:"Board-cell".concat(a?" played":""),onClick:t},!!a&&r.a.createElement(s.a,{icon:1===a?i.b:i.a}))},o=function(e){var a=e.values,t=e.playCell;return r.a.createElement("div",{className:"Board"},a.map((function(e,a){return r.a.createElement("div",{key:a,className:"Board-row"},e.map((function(e,n){return r.a.createElement(m,{key:n,value:e,playCell:function(){return t(a,n)}})})))})))},p=function(e){var a=e.player,t=e.resetGame;return r.a.createElement("div",{className:"FeedbackBar"},r.a.createElement("div",{className:"FeedbackBar-message"},r.a.createElement("span",null,"Au joueur",r.a.createElement(s.a,{icon:1===a?i.b:i.a})," de jouer.")),r.a.createElement("div",null,r.a.createElement("button",{className:"FeedbackBar-button",onClick:t},"R\xe9initialiser")))},d=function(){var e=Object(n.useState)([[0,0,0],[0,0,0],[0,0,0]]),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(1),s=Object(u.a)(l,2),i=s[0],m=s[1],d={};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-center"},r.a.createElement(p,{player:i,result:d,resetGame:function(){}}),r.a.createElement(o,{values:t,result:d,playCell:function(e,a){t[e][a]=i,c(t),m(-i)}})))};l.a.render(r.a.createElement(d,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.64ceaf4f.chunk.js.map