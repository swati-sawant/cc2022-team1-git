(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(t,e,n){},53:function(t,e,n){t.exports=n(96)},60:function(t,e,n){},61:function(t,e,n){t.exports=n.p+"static/media/logo.06e73328.svg"},62:function(t,e,n){},66:function(t,e){},96:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(47),i=n.n(a),c=(n(60),n(61),n(19)),u=n(5),l=(n(62),n(22)),s=n(4),f=n(14),h=new f.d({UserPoolId:"us-east-1_ZhLnDZkfj",ClientId:"4gu6kckcd3tr7p0msuncjtk4r3"});n(2);var p=Object(r.createContext)();n(37);function m(){m=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return S()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var d={};c(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==e&&n.call(y,o)&&(d=y);var g=p.prototype=f.prototype=Object.create(d);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=p,c(g,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,a,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var d=function(){var t=Object(r.useState)(""),e=Object(s.a)(t,2),n=e[0],a=e[1],i=Object(r.useState)(""),p=Object(s.a)(i,2),d=p[0],v=p[1],y=Object(r.useState)(""),g=Object(s.a)(y,2),w=g[0],E=g[1],b=Object(u.f)(),x=function(){var t=Object(l.a)(m().mark(function t(e,n){return m().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise(function(t,r){var o=new f.b({Username:e,Pool:h}),a=new f.a({Username:e,Password:n});o.authenticateUser(a,{onSuccess:function(e){console.log("onSuccess:",e),t(e)},onFailure:function(t){console.error("onFailure:",t),r(t)},newPasswordRequired:function(e){console.log("newPasswordRequired:",e),t(e)}})});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}();return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,"Login"),o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),x(n,d).then(function(t){console.log("Logged in!",t),b.push("/searchbar")}).catch(function(t){E("Wrong username passsword entered"),console.error("Failed to login!",t)})}},o.a.createElement("div",{class:"txt_field"},o.a.createElement("input",{value:n,onChange:function(t){return a(t.target.value)}}),o.a.createElement("label",null,"Email")),o.a.createElement("div",{class:"txt_field"},o.a.createElement("input",{value:d,type:"password",onChange:function(t){return v(t.target.value)}}),"         ",o.a.createElement("label",null,"Password")),o.a.createElement("button",{type:"submit"},"Login"),o.a.createElement("div",{class:"message_color"},w),o.a.createElement("div",{class:"signup_link"},o.a.createElement(c.b,{to:"/signup"},"Registration"))))},v=function(){var t=Object(r.useState)(""),e=Object(s.a)(t,2),n=e[0],a=e[1],i=Object(r.useState)(""),u=Object(s.a)(i,2),l=u[0],p=u[1],m=Object(r.useState)(""),d=Object(s.a)(m,2),v=d[0],y=d[1],g=[],w={Name:"email",Value:n},E=new f.c(w);g.push(E);return o.a.createElement("div",{class:"center"},o.a.createElement("h1",null,"Registration"),o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),h.signUp(n,l,g,null,function(t,e){t?(y("User already exits"),console.error("efew",t)):(console.log(e),y("Registration Successfull"))})}},o.a.createElement("div",{class:"txt_field"},o.a.createElement("input",{value:n,onChange:function(t){return a(t.target.value)}}),o.a.createElement("label",null,"Email")),o.a.createElement("div",{class:"txt_field"},o.a.createElement("input",{value:l,type:"password",onChange:function(t){return p(t.target.value)}}),"         ",o.a.createElement("label",null,"Password")),o.a.createElement("button",{type:"submit"},"Sign In "),o.a.createElement("div",null,v),o.a.createElement("div",{class:"signup_link"},o.a.createElement(c.b,{to:"/"},"Already an user ...Login"))))},y=n(52),g=(n(76),n(16)),w=n(27),E=n(50),b=n(51),x=n.n(b);function L(){L=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return S()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var m={};c(m,o,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(j([])));v&&v!==e&&n.call(v,o)&&(m=v);var y=p.prototype=f.prototype=Object.create(m);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var r;this._invoke=function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,a,function(){return this}),t.AsyncIterator=w,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new w(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(y),c(y,i,"Generator"),c(y,o,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}var O=function(){var t=Object(r.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1],i=Object(r.useState)(""),c=Object(s.a)(i,2),f=c[0],h=c[1],p=Object(u.f)(),m=function(t){h(t),j()};Object(r.useEffect)(function(){!function(){var t=Object(l.a)(L().mark(function t(){var e;return L().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.post("https://84pmbhca41.execute-api.us-east-1.amazonaws.com/dev/getdocuments");case 2:e=t.sent,a(e.data);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[]);var d=Object(r.useState)(!1),v=Object(s.a)(d,2),b=v[0],O=v[1],j=function(){return O(!0)},S=Object(r.useState)(!1),_=Object(s.a)(S,2),k=_[0],N=_[1],P=function(){return N(!1)};return o.a.createElement("div",{class:""},o.a.createElement("nav",{class:"navbar navbar-light bg-dark "},o.a.createElement("a",{class:"navbar-brand text-light"},"Document Management System"),o.a.createElement("form",{class:"form-inline"},o.a.createElement("button",{class:"btn btn-outline-danger my-2 my-sm-0",onClick:function(){return p.push("/")}},"Logout"))),o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"search-bar"},o.a.createElement("input",{type:"text",placeholder:"Search document",value:f,onChange:function(t){h(t.target.value)}}),o.a.createElement(w.a,{variant:"primary",onClick:function(){return m(f)}},o.a.createElement(y.a,null))),o.a.createElement("div",{className:"dropdown"},n.filter(function(t){var e=f,n=t.DocumentName;return e&&n.startsWith(e)&&n!==e}).slice(0,10).map(function(t){return o.a.createElement("div",{onClick:function(){return m(t.DocumentName)},className:"dropdown-row",key:t.DocumentName},t.DocumentName)}))),o.a.createElement(g.a,{show:b,onHide:function(){return O(!1)}},o.a.createElement(g.a.Header,{closeButton:!0},o.a.createElement(g.a.Title,null,"Document")),o.a.createElement(g.a.Body,null,"You Want to view or download document"),o.a.createElement(g.a.Footer,null,o.a.createElement(w.a,{variant:"primary",onClick:function(){return function(t){for(var e,r=0;r<n.length;r++)if(n[r].DocumentName==t){e=n[r].DocumentUrl,window.open(e,"_blank");break}}(f)}},"View Document"),o.a.createElement(w.a,{variant:"primary",onClick:function(){return function(t){for(var e,r=0;r<n.length;r++)if(n[r].DocumentName==t){e=n[r].DocumentUrl,Object(E.saveAs)(e,t);break}}(f)}},"Download Document"))),o.a.createElement(g.a,{show:k,onHide:P},o.a.createElement(g.a.Header,{closeButton:!0},o.a.createElement(g.a.Title,null,"Modal heading")),o.a.createElement(g.a.Body,null),o.a.createElement(g.a.Footer,null,o.a.createElement(w.a,{variant:"secondary",onClick:P},"Close"),o.a.createElement(w.a,{variant:"primary",onClick:P},"Save Changes"))))},j=function(){var t=Object(r.useState)(""),e=Object(s.a)(t,2),n=e[0],a=e[1],i=Object(r.useState)(""),c=Object(s.a)(i,2),u=c[0],l=c[1],f=Object(r.useContext)(p),h=f.getSession,m=f.authenticate;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),h().then(function(t){var e=t.user,r=t.email;m(r,n).then(function(){e.changePassword(n,u,function(t,e){t&&console.error(t),console.log("Sample "+e)})})})}},o.a.createElement("input",{value:n,onChange:function(t){return a(t.target.value)},placeholder:"Old Pwd"}),o.a.createElement("input",{value:u,onChange:function(t){return l(t.target.value)},placeholder:"New Pwd"}),o.a.createElement("button",{type:"submit"},"Change password")))};var S=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c.a,null,o.a.createElement("div",{className:"content"},o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/",component:d}),o.a.createElement(u.a,{path:"/signup",component:v}),o.a.createElement(u.a,{path:"/searchbar",component:function(){return o.a.createElement(O,{authorized:!1})}}),o.a.createElement(u.a,{path:"/changepassword",component:j})))))},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,98)).then(function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),o(t),a(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null))),_()}},[[53,1,2]]]);
//# sourceMappingURL=main.75c0cb51.chunk.js.map