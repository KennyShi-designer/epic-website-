(this["webpackJsonpepic-website"]=this["webpackJsonpepic-website"]||[]).push([[11],{259:function(e,n,r){"use strict";r.r(n);var s=r(134),t=r(32),a=r(6),c=(r(0),r(262)),i=r(263),o=r(112),l=r(33),u=r(79),b=r(14);function j(){var e=Object(t.a)(["\n  text-align: center;\n  margin-bottom: 30px;\n"]);return j=function(){return e},e}function d(){var e=Object(t.a)(["\n  max-width: 600px;\n  margin: 30px auto;\n  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  padding: 20px;\n"]);return d=function(){return e},e}var m=l.a.div(d()),p=l.a.h1(j()),h={labelCol:{span:6},wrapperCol:{span:18}},x={wrapperCol:{offset:6,span:18}};n.default=function(){var e=Object(u.a)().AuthStore,n=Object(b.f)();return Object(a.jsxs)(m,{children:[Object(a.jsx)(p,{children:"\u6ce8\u518c"}),Object(a.jsxs)(c.a,Object(s.a)(Object(s.a)({},h),{},{name:"basic",onFinish:function(r){console.log("Success:",r),e.setUsername(r.username),e.setPassword(r.password),e.register().then((function(){console.log("\u6ce8\u518c\u6210\u529f, \u8df3\u8f6c\u5230\u9996\u9875"),n.push("/")})).catch((function(){console.log("\u767b\u5f55\u5931\u8d25\uff0c\u4ec0\u4e48\u90fd\u4e0d\u505a")}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(a.jsx)(c.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u8f93\u5165\u7528\u6237\u540d"},{validator:function(e,n){return/\W/.test(n)?Promise.reject("\u53ea\u80fd\u662f\u5b57\u6bcd\u6570\u5b57\u4e0b\u5212\u7ebf"):n.length<4||n.length>10?Promise.reject("\u957f\u5ea6\u4e3a4\uff5e10\u4e2a\u5b57\u7b26"):Promise.resolve()}}],children:Object(a.jsx)(i.a,{})}),Object(a.jsx)(c.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8f93\u5165\u5bc6\u7801"},{min:4,message:"\u6700\u5c114\u4e2a\u5b57\u7b26"},{max:10,message:"\u6700\u592710\u4e2a\u5b57\u7b26"}],children:Object(a.jsx)(i.a.Password,{})}),Object(a.jsx)(c.a.Item,{label:"\u786e\u8ba4\u5bc6\u7801",name:"confirmPassword",rules:[{required:!0,message:"\u518d\u6b21\u786e\u8ba4\u5bc6\u7801"},function(e){var n=e.getFieldValue;return{validator:function(e,r){return n("password")===r?Promise.resolve():Promise.reject("\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4")}}}],children:Object(a.jsx)(i.a.Password,{})}),Object(a.jsx)(c.a.Item,Object(s.a)(Object(s.a)({},x),{},{children:Object(a.jsx)(o.a,{type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})}))]}))]})}}}]);
//# sourceMappingURL=11.ed02cfd3.chunk.js.map