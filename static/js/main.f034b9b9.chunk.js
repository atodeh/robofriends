(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),i=n.n(s),o=(n(13),n(3)),a=n(0),h=function(e){var t=e.searchChange;return Object(a.jsx)("div",{className:"pa2",children:Object(a.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},b=function(e){return Object(a.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},j=function(e){var t=e.id,n=e.name,r=e.email;return Object(a.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(a.jsx)("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"Robots"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:n}),Object(a.jsx)("p",{children:r})]})]})},l=function(e){var t=e.robots;return Object(a.jsx)("div",{children:t.map((function(e){return Object(a.jsx)(j,{id:e.id,name:e.name,email:e.email},e.id)}))})},u=n(5),d=n(6),f=n(8),O=n(7),g=function(e){Object(f.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(a.jsx)("h1",{children:"Something went wrong. That is not good!"}):this.props.children}}]),n}(c.a.Component);n(15);var p=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),j=i[0],u=i[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);var d=n.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())}));return Object(a.jsxs)("div",{className:"tc",children:[Object(a.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(a.jsx)(h,{searchChange:function(e){u(e.target.value)}}),Object(a.jsx)(b,{children:Object(a.jsx)(g,{children:Object(a.jsx)(l,{robots:d})})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};n(16);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.f034b9b9.chunk.js.map