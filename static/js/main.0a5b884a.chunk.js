(this.webpackJsonphomework_16=this.webpackJsonphomework_16||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),r=a(5),i=a.n(r),l=(a(15),a(3)),o=a(6),m=a(7),h=a(9),d=a(8),f=(a(4),a.p+"static/media/male.f8f1359f.png"),j=a.p+"static/media/female.a5781cf2.png",u=a.p+"static/media/neither.f655086e.png";var p=function(e){var t;return t="male"===e.gender?f:"female"===e.gender?j:u,Object(n.jsxs)("div",{className:"contact",children:[Object(n.jsx)("img",{alt:e.gender,src:t,className:"gender"}),Object(n.jsxs)("div",{className:"contact-info",children:[Object(n.jsxs)("p",{className:"name",children:[e.firstName," ",e.lastName]}),Object(n.jsx)("p",{children:e.phone})]})]})},g=[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}],N=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={contacts:g,search:""},e.handleSearchChange=function(t){var a=g.filter((function(e){return(e.firstName+" "+e.lastName).toLowerCase().includes(t.target.value.toLowerCase())||e.phone.includes(t.target.value)}));e.setState({contacts:a}),e.setState({search:t.target.value})},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)("div",{className:"search",children:Object(n.jsx)("input",{type:"text",placeholder:"\ud83d\udd0d Search contacts",value:this.state.search,onChange:this.handleSearchChange})}),Object(n.jsx)("div",{className:"contacts",children:this.state.contacts.map((function(e,t){return Object(c.createElement)(p,Object(l.a)(Object(l.a)({},e),{},{key:t}))}))})]})}}]),a}(c.Component);var b=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(N,{})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),v()},4:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.0a5b884a.chunk.js.map