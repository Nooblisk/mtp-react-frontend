(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports={wrapper:"MainPage_wrapper__WAaqP",controlWrapper:"MainPage_controlWrapper__27UOu",mapContainer:"MainPage_mapContainer__2nhOB"}},40:function(e,t,n){e.exports={wrapper:"AppContainer_wrapper__3HvJ6"}},46:function(e,t,n){e.exports=n(56)},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),i=n.n(c),o=n(10),s=n(11),l=n(13),u=n(12),d=n(14),p=n(40),f=n.n(p),m=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:f.a.wrapper},this.props.children)}}]),t}(a.Component),b=n(15),O=n(20),h=n(35),j=n(41),v=n.n(j),C=n(60),g=n(36),k=n.n(g),y=n(61),E=n(65),w=n(59),x=n(57),_=n(62),M=n(43),N=(n(63),n(32)),F=Object(w.a)(x.a),I=(Object(w.a)(_.a),function(e){return Object(x.a)(e)||Object(_.a)(e)}),S=Object(w.a)(I),T=(Object(w.a)(M.a),Object(N.a)(function(e){return e.toLowerCase().trim()}),"black"),P="green",A="yellow",L="red",W="violet",z="blue",D=n(7),J=n.n(D),U=[30,45],B=[T,P,A,L,W,z],R="".concat("/mtp-react-frontend","/icons"),q=B.reduce(function(e,t){return Object(O.a)({},e,Object(b.a)({},t,J.a.icon({iconUrl:"".concat(R,"/map-marker-").concat(t,".svg"),iconSize:U})))},{}),H=function(e){var t=function(e){return Object(x.a)(e)?T:e<5?P:e>=5&&e<15?A:e>=15&&e<30?L:W}(e);return q[t]},G=q[z],K=n(44),Q=n(45),V=n(64),X={cost:"\u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u0442\u0440\u0430\u0442\u044b, \u043c\u0438\u043d\u0443\u0442",waitingTime:"\u0432\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f, \u043c\u0438\u043d\u0443\u0442",tripTimeInTheCabin:"\u0432\u0440\u0435\u043c\u044f \u0432 \u0441\u0430\u043b\u043e\u043d\u0435, \u043c\u0438\u043d\u0443\u0442",numberOfTransfers:"\u0447\u0438\u0441\u043b\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",transferFee:"\u0448\u0442\u0440\u0430\u0444 \u0437\u0430 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438, \u043c\u0438\u043d\u0443\u0442"},Y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.name,a=e.selected,c=Object(Q.a)(e,["id","name","selected"]);return r.a.createElement(V.a,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("span",null,"id: ".concat(t)),r.a.createElement("span",null,"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ".concat(n)),!a&&r.a.createElement(r.a.Fragment,null,Object.entries(X).map(function(e){var n=Object(K.a)(e,2),a=n[0],i=n[1],o=c[a];return I(o)?null:r.a.createElement("span",{key:"".concat(t,"_").concat(a)},"".concat(i,": ").concat(o))}))))}}]),t}(a.Component);Y.defaultProps={};var Z=n(58),$=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){return function(){n.props.handleMarkerClick&&n.props.handleMarkerClick(e)}},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.position,a=e.icon,c=e.children;return r.a.createElement(Z.a,{position:n,icon:a,onClick:this.handleClick(t)},c)}}]),t}(a.Component),ee=[55.772,37.606],te=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={sites:[],costs:{},selectedId:void 0},n.readFile=function(e){var t=new FileReader;S(e)&&(t.onloadend=function(){v.a.parse(e,{complete:function(t){console.log("Finished:",t.data);var a=t.data.filter(function(e){return e.every(function(e){return S(e)})});if("sites.csv"===e.name.toLowerCase()){var r=n.processSites(a);n.setState({sites:r})}else if("costs.csv"===e.name.toLowerCase()){var c=n.processCosts(a);n.setState({costs:c})}}})},t.readAsDataURL(e))},n.processSites=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(h.a)(e),n=t[0],a=t.slice(1),r=n.indexOf("site_id"),c=n.indexOf("site_name"),i=n.indexOf("longitude"),o=n.indexOf("latitude");return a.map(function(e){return{id:Number(e[r]),name:e[c],longitude:Number(e[i]),latitude:Number(e[o])}})},n.processCosts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(h.a)(e),n=t[0],a=t.slice(1),r=n.indexOf("site_id_from"),c=n.indexOf("site_id_to"),i=n.indexOf("cost"),o=n.indexOf("iwait"),s=n.indexOf("inveht"),l=n.indexOf("xnum"),u=n.indexOf("xpen");return a.reduce(function(e,t){return Object(O.a)({},e,Object(b.a)({},t[r],Object(O.a)({},e[t[r]],Object(b.a)({},t[c],{cost:Number(t[i]),waitingTime:Number(t[o]),tripTimeInTheCabin:Number(t[s]),numberOfTransfers:Number(t[l]),transferFee:Number(t[u])}))))},{})},n.handleChange=function(e){var t=Object(h.a)(e.target.files).slice(0),a=t.find(function(e){return"sites.csv"===e.name}),r=t.find(function(e){return"costs.csv"===e.name});n.readFile(a),n.readFile(r)},n.handleMarkerClick=function(e){n.state.selectedId!==e&&n.setState({selectedId:e})},n.handleMapClick=function(){F(n.state.selectedId)&&n.setState({selectedId:void 0})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.costs,a=t.sites,c=t.selectedId;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:k.a.controlWrapper},r.a.createElement("label",{htmlFor:"files",style:{textDecoration:"underline",cursor:"pointer"}},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b\u044b"),r.a.createElement("input",{id:"files",type:"file",onChange:this.handleChange,multiple:!0,style:{visibility:"hidden"},accept:".csv"}),S(a)&&r.a.createElement("span",null,"file sites uploaded"),S(n)&&r.a.createElement("span",null,"file costs uploaded")),r.a.createElement(y.a,{center:ee,zoom:14,className:k.a.mapContainer,onClick:this.handleMapClick},r.a.createElement(E.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}),a.map(function(t){var a=t.id,i=t.name,o=t.latitude,s=t.longitude,l=Object(C.a)({},[c,a],n),u=a===c,d=u?G:H(l.cost);return r.a.createElement($,{key:a,id:a,position:[o,s],selected:u,icon:d,handleMarkerClick:e.handleMarkerClick},r.a.createElement(Y,Object.assign({id:a,name:i,selected:u},l)))})))}}]),t}(a.Component);te.defaultProps={};var ne=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(te,null))}}]),t}(a.Component);n(54),n(55);i.a.render(r.a.createElement(ne,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.1437ce2b.chunk.js.map