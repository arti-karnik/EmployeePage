(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{24:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(12),s=n.n(c),a=(n(24),n(0)),i=function(){return Object(a.jsx)("h1",{className:"header",children:"Employee Page"})},o=n(13),l=n(14),h=n(15),d=n(19),j=n(18),u=n(16),m=n.n(u);var b=function(e){var t=e.EmployeeList;return Object(a.jsxs)("table",{children:[Object(a.jsx)("caption",{children:"Employees "}),Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Photo"}),Object(a.jsx)("th",{children:"First Name"}),Object(a.jsx)("th",{onClick:function(t){return e.onSort},children:"Last Name"}),Object(a.jsx)("th",{children:Object(a.jsx)("button",{onClick:function(){return e.sortBy("phone")},children:"Phone"})}),Object(a.jsx)("th",{children:Object(a.jsx)("button",{onClick:function(){return e.sortBy("email")},children:"Email"})}),Object(a.jsx)("th",{children:"Date of Birth"})]})}),Object(a.jsx)("tbody",{children:t.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{children:[" ",Object(a.jsx)("img",{src:e.picture.thumbnail,alt:"Thumb image"})," "]}),Object(a.jsx)("td",{children:e.name.first}),Object(a.jsx)("td",{children:e.name.last}),Object(a.jsx)("td",{children:e.phone}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:m()(e.dob.date).format("MM/DD/YYYY")})]},null==e.id.value?Math.random():e.id.value)}))})]})},p=n(17),O=n.n(p),f=function(){return O.a.get("https://randomuser.me/api/?results=20")};var x=function(e){return Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(a.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search employee directory",id:"search"})]})})},y=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={result:[],direction:{email:"ascending",phone:"ascending"},AllEmployees:[],EmployeeList:[]},e.handleInputChange=function(t){var n=t.target.value;e.setState({search:n}),e.filterEmployees(n.toLowerCase().trim())},e.filterEmployees=function(t){t?e.setState({EmployeeList:e.state.AllEmployees.filter((function(e){return e.name.first.toLowerCase().concat(" ",e.name.last.toLowerCase()).includes(t)}))}):e.setState({EmployeeList:e.state.AllEmployees})},e.sortBy=function(t){var n=e.state.EmployeeList;e.setState({data:n.sort((function(n,r){var c="ascending"===e.state.direction[t];return n[t]<r[t]?c?-1:1:n[t]>r[t]?c?1:-1:0})),direction:Object(o.a)({},t,"ascending"===e.state.direction[t]?"descending":"ascending")})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){return e.setState({AllEmployees:t.data.results,EmployeeList:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(x,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(a.jsx)(b,{sortBy:this.sortBy,EmployeeList:this.state.EmployeeList})]})}}]),n}(r.Component);var v=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(i,{}),Object(a.jsx)(y,{})]})};n(45),n(46);s.a.render(Object(a.jsx)(v,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.86a73ae7.chunk.js.map