(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3hFfd",card:"Cards_card__2fwah",infected:"Cards_infected__1yzTi",recovered:"Cards_recovered__4YB5l",deaths:"Cards_deaths__2MZLZ"}},16:function(e,t,a){e.exports={body:"App_body__fNhLa",container:"App_container__26yf0",image:"App_image__1RvoY",developer:"App_developer__1siOd",Footer:"App_Footer__2QprO",social:"App_social__2zqk3"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),s=(a(92),a(6)),l=a.n(s),u=a(10),i=a(73),d=a(74),m=a(84),p=a(83),f=a(225),v=a(229),h=a(226),b=a(227),y=a(33),E=a.n(y),g=a(34),_=a.n(g),x=a(13),C=a.n(x),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:C.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:E()(C.a.card,C.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterButton:!0},"Infected"),r.a.createElement(b.a,{variant:"h5",style:{color:"#4444fd"}},r.a.createElement(_.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of active case of COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:E()(C.a.card,C.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterButton:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5",style:{color:"#47c547"}},r.a.createElement(_.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recoveries case of COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:E()(C.a.card,C.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterButton:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5",style:{color:"#ff5252"}},r.a.createElement(_.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of Deaths caused of COVID-19"))))):"Loading..."},k=a(32),O=a(35),j=a.n(O),N="https://covid19.mathdro.id/api",D=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,r,c,o,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,j.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=a(46),B=a(80),V=a.n(B),F=function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,s=e.country,i=Object(n.useState)({}),d=Object(k.a)(i,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m[0]?r.a.createElement(I.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0)",fill:!0}]}}):null,v=a?r.a.createElement(I.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state is ".concat(s)}}}):null;return r.a.createElement("div",{className:V.a.container},s?v:f)},L=a(230),M=a(228),R=a(81),U=a.n(R),W=function(e){var t=e.handleCounrtyChange,a=Object(n.useState)([]),c=Object(k.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(L.a,{className:U.a.formControl},r.a.createElement(M.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},Z=a(16),z=a.n(Z),J=a(82),P=a.n(J),T=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCounrtyChange=function(){var t=Object(u.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return console.log(t.confirmed),r.a.createElement("div",{className:z.a.container},r.a.createElement("img",{className:z.a.image,src:P.a,alt:"COVID-19"}),r.a.createElement("div",{className:z.a.developer},r.a.createElement("h3",{className:z.a.social},"By Krishna")),r.a.createElement(w,{data:t}),r.a.createElement(W,{handleCounrtyChange:this.handleCounrtyChange}),r.a.createElement(F,{data:t,country:a}),r.a.createElement("div",{className:z.a.Footer},r.a.createElement("h3",{className:z.a.social},"Data Source of \xa0",r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Covid19 Tracker.."))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports={container:"Chart_container__1ZWy5"}},81:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__3re8_"}},82:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},87:function(e,t,a){e.exports=a(208)},92:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.332ebbbf.chunk.js.map