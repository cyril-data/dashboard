(this["webpackJsonpdashboard-app"]=this["webpackJsonpdashboard-app"]||[]).push([[0],{157:function(e,a,t){},158:function(e,a,t){},159:function(e,a,t){},160:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(49),r=t.n(o),l=(t(56),t(50)),s=t(32),i=t(6),m=(t(57),t(3)),d=t.n(m),E=t(31),u=(t(156),t(162)),b=t(163),p=t(164),g=t(165),_=t(166),f=t(167),h=t(168),O=t(169),C=t(170),S=t(171);var N=function(){var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],o=a[1],r=Object(n.useState)(0),m=Object(i.a)(r,2),N=m[0],R=m[1],k=Object(n.useState)({}),T=Object(i.a)(k,2),y=T[0],x=T[1],j=Object(n.useState)({}),v=Object(i.a)(j,2),D=v[0],U=v[1],X=Object(n.useState)(0),M=Object(i.a)(X,2),B=M[0],F=M[1],I=Object(n.useState)("EXT_SOURCE_1"),A=Object(i.a)(I,2),H=A[0],P=A[1],Y=Object(n.useState)(0),w=Object(i.a)(Y,2),L=w[0],z=w[1],W=Object(n.useState)(0),G=Object(i.a)(W,2),J=G[0],$=(G[1],Object(n.useState)(0)),q=Object(i.a)($,2),K=q[0],Q=(q[1],Object(n.useState)(0)),V=Object(i.a)(Q,2),Z=(V[0],V[1],Object(n.useState)(0)),ee=Object(i.a)(Z,2),ae=(ee[0],ee[1],Object(n.useState)(0)),te=Object(i.a)(ae,2),ne=(te[0],te[1],Object(n.useState)(0)),ce=Object(i.a)(ne,2),oe=(ce[0],ce[1],Object(n.useState)(0)),re=Object(i.a)(oe,2),le=(re[0],re[1],Object(n.useState)(0)),se=Object(i.a)(le,2);se[0],se[1],Object(n.useEffect)((function(){fetch("/dashboard").then((function(e){return e.json()})).then((function(e){o(e.loaded),x(e.knn_pred_0),U(e.knn_pred_1)}))}),[]);var ie,me,de,Ee={maintainAspectRatio:!1,legend:{display:!1},rotation:1*Math.PI,circumference:1*Math.PI,tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0},ue=function(e){return{dragData:!1,dragX:!1,onDragStart:function(e,a){},onDrag:function(e,a,t,n){z(n.x)},onDragEnd:function(e,a,t,n){},maintainAspectRatio:!1,legend:{display:!0},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:0,suggestedMax:1,padding:20,fontColor:"#9a9a9a"}}],xAxes:[{barPercentage:10,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.1)",zeroLineColor:"transparent"},ticks:{callback:function(e,a,t){return parseFloat(e).toFixed(2)},suggestedMin:0,suggestedMax:1,padding:20,fontColor:"#9a9a9a"}}]}}},be=function(e,a){return[{data:function(t){return{labels:[e<=a?"granted":"refused",""],datasets:[{backgroundColor:[e<=a?"#00d6b4":"#eb2509","#cccccc"],overBackgroundColor:["#00d6b4","#cccccc"],data:[e,1-e]}]}}}.data,Ee]};function pe(e){var a=Object(n.useRef)();return Object(n.useEffect)((function(){a.current=e}),[e]),a.current}return pe(H),pe(L),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"}),c.a.createElement(u.a,null,c.a.createElement(b.a,{className:"my-auto"},c.a.createElement(p.a,{className:"card-chart text-center align-center"},c.a.createElement(g.a,null,c.a.createElement("h3",Object(l.a)({className:"mr-sm-2",tag:"h3"},"className","justify-content-md-center")," ID Client (< ",t.size,") "),c.a.createElement(_.a,{inline:!0,onSubmit:function(e){e.preventDefault();var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(B)};fetch("/dashboard/id",a).then((function(e){return e.json()})).then((function(e){R(e.infoIdClient),x(e.knn_pred_0),U(e.knn_pred_1)}))},className:"justify-content"},c.a.createElement(f.a,{className:"mb-2 mr-sm-2 mb-sm-0",type:"text",value:B,onChange:function(e){return F(e.target.value)}}),c.a.createElement(h.a,{type:"submit",value:"Submit"},"Submit")))),c.a.createElement(p.a,{className:"card-chart"},c.a.createElement(O.a,null,c.a.createElement("h5",{className:"card-category"},"EXT_SOURCE_1"),c.a.createElement(C.a,{tag:"h3"},c.a.createElement("i",{className:"tim-icons icon-bell-55 text-info"})," ",parseFloat(function(){var e=0;return N.EXT_SOURCE_1?(e=N.EXT_SOURCE_1,"EXT_SOURCE_1"==H&&L&&(e=L),"EXT_SOURCE_1"==H&&J&&(e=J),"EXT_SOURCE_1"!=H&&J&&(e=J)):e=0,e}()).toFixed(2))))),c.a.createElement(b.a,{className:"my-auto",xl:8},c.a.createElement(p.a,{className:"card-chart"},c.a.createElement(g.a,null,c.a.createElement("h3",null,"The current predict is ",N.y_proba," : load ",N.y_pred?"REFUSED":"GRANTED"),c.a.createElement("h4",null,"thresold=",parseFloat(t.THR_OPTI).toFixed(2)),c.a.createElement("div",{className:"chart-area"},c.a.createElement(E.Doughnut,{data:be(N.y_proba?N.y_proba:t.THR_OPTI,t.THR_OPTI)[0],options:be(N.y_proba?N.y_proba:t.THR_OPTI,t.THR_OPTI)[1]})))))),c.a.createElement(u.a,null,c.a.createElement(b.a,{className:"my-auto"},c.a.createElement(u.a,null,c.a.createElement(b.a,null,c.a.createElement(p.a,{className:"card-chart"},c.a.createElement(O.a,null,c.a.createElement("h5",{className:"card-category"},"EXT_SOURCE_2"),c.a.createElement(C.a,{tag:"h3"},c.a.createElement("i",{className:"tim-icons icon-bell-55 text-info"})," ",parseFloat(function(e){var a=0;return N.EXT_SOURCE_2?(a=N.EXT_SOURCE_2,"EXT_SOURCE_2"==H&&L&&(a=L),"EXT_SOURCE_2"==H&&K&&(a=K),"EXT_SOURCE_2"!=H&&K&&(a=K)):a=0,a}()).toFixed(2))))),c.a.createElement(b.a,null,c.a.createElement(p.a,{className:"card-chart"},c.a.createElement(O.a,null,c.a.createElement("h5",{className:"card-category"},"EXT_SOURCE_3"),c.a.createElement(C.a,{tag:"h3"},c.a.createElement("i",{className:"tim-icons icon-bell-55 text-info"})," ",parseFloat(N.EXT_SOURCE_3?N.EXT_SOURCE_3:0).toFixed(2))))),c.a.createElement(b.a,null,c.a.createElement(p.a,{className:"card-chart"},c.a.createElement(O.a,null,c.a.createElement("h5",{className:"card-category"},"DAYS_EMPLOYED"),c.a.createElement(C.a,{tag:"h3"},c.a.createElement("i",{className:"tim-icons icon-bell-55 text-info"})," ",parseFloat(N.DAYS_EMPLOYED?N.DAYS_EMPLOYED:0).toFixed(2))))),c.a.createElement(b.a,null,c.a.createElement(p.a,{className:"card-chart"},c.a.createElement(O.a,null,c.a.createElement("h5",{className:"card-category"},"DAYS_BIRTH"),c.a.createElement(C.a,{tag:"h3"},c.a.createElement("i",{className:"tim-icons icon-bell-55 text-info"})," ",parseFloat(N.DAYS_BIRTH?N.DAYS_BIRTH:0).toFixed(2))))),c.a.createElement(b.a,null,c.a.createElement(p.a,{className:"card-chart"},c.a.createElement(O.a,null,c.a.createElement("h5",{className:"card-category"},"CREDIT_TERM"),c.a.createElement(C.a,{tag:"h3"},c.a.createElement("i",{className:"tim-icons icon-bell-55 text-info"})," ",parseFloat(N.CREDIT_TERM?N.CREDIT_TERM:0).toFixed(2)))))))),c.a.createElement(u.a,null,c.a.createElement(b.a,null,c.a.createElement(p.a,{className:"card-chart"},c.a.createElement(O.a,null,c.a.createElement(u.a,null,c.a.createElement(b.a,{className:"text-left",sm:"6"},c.a.createElement("h5",{className:"card-category"}," Feature density  "),c.a.createElement(C.a,{tag:"h2"},"500-nearest clients ")),c.a.createElement(b.a,{sm:"6"},c.a.createElement(S.a,{className:"btn-group-toggle float-right","data-toggle":"buttons"},c.a.createElement(h.a,{tag:"label",className:d()("btn-simple",{active:"EXT_SOURCE_1"===H}),color:"info",id:"0",size:"sm",onClick:function(){P("EXT_SOURCE_1")}},c.a.createElement("input",{defaultChecked:!0,className:"d-none",name:"options",type:"radio"}),c.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"EXT_SOURCE_1"),c.a.createElement("span",{className:"d-block d-sm-none"},c.a.createElement("i",{className:"tim-icons icon-single-02"}))),c.a.createElement(h.a,{color:"info",id:"1",size:"sm",tag:"label",className:d()("btn-simple",{active:"EXT_SOURCE_2"===H}),onClick:function(){console.log("handleChangeSwitchExt2",H),P("EXT_SOURCE_2")}},c.a.createElement("input",{className:"d-none",name:"options",type:"radio"}),c.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"EXT_SOURCE_2"),c.a.createElement("span",{className:"d-block d-sm-none"},c.a.createElement("i",{className:"tim-icons icon-gift-2"}))),c.a.createElement(h.a,{color:"info",id:"2",size:"sm",tag:"label",className:d()("btn-simple",{active:"EXT_SOURCE_3"===H}),onClick:function(){return P("EXT_SOURCE_3")}},c.a.createElement("input",{className:"d-none",name:"options",type:"radio"}),c.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"EXT_SOURCE_3"),c.a.createElement("span",{className:"d-block d-sm-none"},c.a.createElement("i",{className:"tim-icons icon-tap-02"}))),c.a.createElement(h.a,{color:"info",id:"3",size:"sm",tag:"label",className:d()("btn-simple",{active:"DAYS_EMPLOYED"===H}),onClick:function(){return P("DAYS_EMPLOYED")}},c.a.createElement("input",{className:"d-none",name:"options",type:"radio"}),c.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"DAYS_EMPLOYED"),c.a.createElement("span",{className:"d-block d-sm-none"},c.a.createElement("i",{className:"tim-icons icon-gift-2"}))),c.a.createElement(h.a,{color:"info",id:"4",size:"sm",tag:"label",className:d()("btn-simple",{active:"DAYS_BIRTH"===H}),onClick:function(){return P("DAYS_BIRTH")}},c.a.createElement("input",{className:"d-none",name:"options",type:"radio"}),c.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"DAYS_BIRTH"),c.a.createElement("span",{className:"d-block d-sm-none"},c.a.createElement("i",{className:"tim-icons icon-gift-2"}))),c.a.createElement(h.a,{color:"info",id:"5",size:"sm",tag:"label",className:d()("btn-simple",{active:"CREDIT_TERM"===H}),onClick:function(){return P("CREDIT_TERM")}},c.a.createElement("input",{className:"d-none",name:"options",type:"radio"}),c.a.createElement("span",{className:"d-none d-sm-block d-md-block d-lg-block d-xl-block"},"CREDIT_TERM"),c.a.createElement("span",{className:"d-block d-sm-none"},c.a.createElement("i",{className:"tim-icons icon-gift-2"}))))))),c.a.createElement(g.a,null,c.a.createElement("div",{className:"chart-area"},c.a.createElement(E.Scatter,{data:(ie=y[H],me=D[H],de=N[H],[function(e){var a=e.getContext("2d"),t=a.createLinearGradient(0,230,0,50);t.addColorStop(1,"rgba(66,134,121,0.2)"),t.addColorStop(.4,"rgba(66,134,121,0.0)"),t.addColorStop(0,"rgba(66,134,121,0)");var n=a.createLinearGradient(0,230,0,50);n.addColorStop(1,"rgba(235,37,9,0.2)"),n.addColorStop(.4,"rgba(235,37,9,0.0)"),n.addColorStop(0,"rgba(235,37,9,0)");var c=ie?ie.x:[0],o=ie?ie.y:[],r=me?me.y:[];return{datasets:[{label:"granted",dragData:!1,fill:!0,showLine:!0,backgroundColor:t,borderColor:"#00d6b4",borderWidth:2,borderDash:[],borderDashOffset:0,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#00d6b4",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:c.map((function(e,a){return{x:e,y:o[a]}}))},{label:"refused",dragData:!1,fill:!0,showLine:!0,backgroundColor:n,borderColor:"#eb2509",borderWidth:2,borderDash:[],borderDashOffset:0,pointBorderColor:"rgba(0,0,0,0)",pointHoverBackgroundColor:"#eb2509",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:c.map((function(e,a){return{x:e,y:r[a]}}))},{label:"Client",fill:!0,borderColor:"white",pointBorderColor:"white",pointHoverBackgroundColor:"white",pointHoverRadius:4,pointRadius:4,pointBorderWidth:8,data:[{x:de,y:Math.max(Math.max.apply(Math,Object(s.a)(r)),Math.max.apply(Math,Object(s.a)(o)))}]}]}},ue()])[0],options:ue()}),";"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(157),t(158),t(159);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,a,t){e.exports=t(160)},57:function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"}},[[51,1,2]]]);
//# sourceMappingURL=main.4e7df809.chunk.js.map