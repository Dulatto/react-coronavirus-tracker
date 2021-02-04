(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(44),l=a.n(c),o=(a(54),a(45)),s=a.n(o),u=function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:s.a,alt:"Corona Logo"}))))},i=function(){return r.a.createElement("div",{className:"d-flex justify-content-center align-center w-100"},r.a.createElement("div",{className:"spinner-border text-secondary m-5",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},m=a(27),d=a(46),f=a.n(d),h=function(e){var t=e.cards,a=t.name,n=t.text,c=t.cases,l=t.lastUpdate;return r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card mb-3 box-"+a.toLowerCase()},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},r.a.createElement(f.a,{start:0,end:c,duration:2.5,separator:","})),r.a.createElement("p",{className:"card-text text-secondary m-0"},new Date(l).toDateString()),r.a.createElement("p",{className:"card-text"},n)),r.a.createElement("div",{className:"card-header bg-light text-white"},a)))},v=a(25),b=a.n(v),p=a(47),E=a(9),g=r.a.createContext(),N=function(e){var t=e.children,a="https://covid19.mathdro.id/api",c=Object(n.useState)([]),l=Object(E.a)(c,2),o=l[0],s=l[1],u=Object(n.useState)([]),i=Object(E.a)(u,2),m=i[0],d=i[1],f=Object(n.useState)(null),h=Object(E.a)(f,2),v=h[0],N=h[1],j=Object(n.useState)([]),y=Object(E.a)(j,2),x=y[0],C=y[1];Object(n.useEffect)((function(){fetch(a+"/daily").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}}));d(t)})).catch((function(){return d([])})),fetch(a+"/countries").then((function(e){return e.json()})).then((function(e){var t=e.countries;C(t.map((function(e){return e.name})))})).catch((function(){return C()}))}),[]),Object(n.useEffect)((function(){var e=a;v&&(e=a+"/countries/"+v),fetch(e).then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(){return s([])}))}),[v]);var O=function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(g.Provider,{value:{caseData:o,handleCountryChange:O,country:v,caseDailyData:m,countries:x}},t)},j=function(){var e=Object(n.useContext)(g).caseData,t=e.lastUpdate,a=e.recovered,c=e.confirmed,l=e.deaths,o=c?[{name:"Infected",text:"Number of active cases of COVID-19",cases:a.value},{name:"Recovered",text:"Number of active cases of COVID-19",cases:c.value},{name:"Deaths",text:"Number of active cases of COVID-19",cases:l.value}]:[],s=o.map((function(e,a){return r.a.createElement(h,{cards:Object(m.a)(Object(m.a)({},e),{},{lastUpdate:t}),key:a})}));return r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"row"},o.length?s:r.a.createElement(i,null)))},y=function(){var e=Object(n.useContext)(g),t=e.handleCountryChange,a=e.countries;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 m-auto"},r.a.createElement("select",{className:"form-control",onChange:function(e){t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),a.length&&a.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))))},x=a(26),C=function(){var e=Object(n.useContext)(g),t=e.caseData,a=e.country,c=e.caseDailyData,l=t.confirmed,o=t.recovered,s=t.deaths,u=c,i=u.length?r.a.createElement(x.b,{data:{labels:u.map((function(e){return e.date})),datasets:[{data:u.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:u.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,m=l?r.a.createElement(x.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[l.value,o.value,s.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Curent state in ".concat(a)}}}):null;return r.a.createElement("div",{className:"container mt-5 pb-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 m-auto"},a?m:i)))},O=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer-copyright py-3 text-center"},r.a.createElement("div",{className:"container-fluid"},"\xa9 ",(new Date).getFullYear()," Copyright:"," ",r.a.createElement("a",{href:"https://www.fb.com/aashishmaharjan.2001"},"Aashish Maharjan"))))},D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(j,null),r.a.createElement(y,null),r.a.createElement(C,null),r.a.createElement(O,null))};l.a.render(r.a.createElement(N,null,r.a.createElement(D,null)),document.getElementById("root"))},45:function(e,t,a){e.exports=a.p+"static/media/logo.d7265326.png"},49:function(e,t,a){e.exports=a(153)},54:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.2b3a618b.chunk.js.map