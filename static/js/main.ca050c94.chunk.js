(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{21:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a,o,r=n(0),i=n.n(r),c=n(8),s=n.n(c),l=(n(21),n(9)),b=n(10),d=n(11),h=n(16),j=n(15),u=n(2),p=n(3),g=p.a.button(a||(a=Object(u.a)(["\n  padding: 2px 10px;\n  border: 1px solid lightgrey;\n  border-radius: 4px;\n  background-color: white;\n  text-transform: capitalize;\n  cursor: pointer;\n  transition-duration: 0.4s;\n  :hover {\n    background-color: lightblue;\n    color: white;\n    border-color: lightblue;\n  }\n  :not(:last-child) {\n    margin-right: 5px;\n  }\n"]))),O=n(1),f=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(O.jsx)(O.Fragment,{children:e.map((function(t){return Object(O.jsx)(g,{type:"button","data-option":t,onClick:n,children:t},t)}))})},x=function(t){var e=t.message;return Object(O.jsx)("p",{children:e})},v=function(t){var e=t.children,n=t.title;return Object(O.jsxs)("section",{children:[Object(O.jsx)("h2",{className:"sectionTitle",children:n}),e]})},k=p.a.p(o||(o=Object(u.a)(["\n  text-transform: capitalize;\n"]))),m=function(t){var e=t.options,n=t.feedback,a=t.total,o=t.positivePercentage;return Object(O.jsxs)(O.Fragment,{children:[e.map((function(t){return Object(O.jsxs)(k,{children:[t,": ",n[t]]},t)})),Object(O.jsxs)("p",{children:["Total: ",a]}),Object(O.jsxs)("p",{children:["Positive feedback: ",o,"%"]})]})},y=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={good:0,neutral:0,bad:0},t.options=Object.keys(t.state),t.onLeaveFeedback=function(e){var n=e.target.dataset.option;t.setState((function(t){return Object(l.a)({},n,t[n]+1)}))},t}return Object(d.a)(n,[{key:"getTotal",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{title:"Please leave feedback",children:Object(O.jsx)(f,{options:this.options,onLeaveFeedback:this.onLeaveFeedback})}),Object(O.jsx)(v,{title:"Statistics",children:this.getTotal()?Object(O.jsx)(m,{options:this.options,feedback:this.state,total:this.getTotal(),positivePercentage:0!==this.getTotal()?Math.round(this.state.good/this.getTotal()*100):0}):Object(O.jsx)(x,{message:"No feedback given"})})]})}}]),n}(r.Component);s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ca050c94.chunk.js.map