!function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(8)},function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,,function(t,e,n){"use strict";function o(){}function s(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e){for(var n in e)t[n]=1;return t}function i(t,e){return 0===e&&t(),()=>{--e||t()}}function a(t){t()}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n)}function l(t){t.parentNode.removeChild(t)}function m(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function p(t,e,n){t.addEventListener(e,n,!1)}function g(t,e,n){t.removeEventListener(e,n,!1)}function f(t,e,n){t.setAttribute(e,n)}function y(t,e){t.data=""+e}function v(t,e,n){t.style.setProperty(e,n)}function w(t,e,n){t.classList.toggle(e,!!n)}function _(t){return t}function b({a:t,b:e,delta:n,duration:o},s,r){const i=16.666/o;let a="{\n";for(let e=0;e<=1;e+=i){const o=t+n*s(e);a+=100*e+`%{${r(o,1-o)}}\n`}return a+`100% {${r(e,1-e)}}\n}`}function N(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function C(t,e,n,s,r){let i,c,u,l=n.call(t,e,s),m=!1;return{t:r?0:1,running:!1,program:null,pending:null,run(t,e){"function"==typeof l?x.wait().then(()=>{l=l(),this._run(t,e)}):this._run(t,e)},_run(t,n){i=l.duration||300,c=l.easing||_;const s={start:window.performance.now()+(l.delay||0),b:t,callback:n||o};r&&!m&&(l.css&&l.delay&&(u=e.style.cssText,e.style.cssText+=l.css(0,1)),l.tick&&l.tick(0,1),m=!0),t||(s.group=I.current,I.current.remaining+=1),l.delay?this.pending=s:this.start(s),this.running||(this.running=!0,x.add(this))},start(n){if(t.fire(`${n.b?"intro":"outro"}.start`,{node:e}),n.a=this.t,n.delta=n.b-n.a,n.duration=i*Math.abs(n.b-n.a),n.end=n.start+n.duration,l.css){l.delay&&(e.style.cssText=u);const t=b(n,c,l.css);x.addRule(t,n.name="__svelte_"+N(t)),e.style.animation=(e.style.animation||"").split(", ").filter(t=>t&&(n.delta<0||!/__svelte/.test(t))).concat(`${n.name} ${n.duration}ms linear 1 forwards`).join(", ")}this.program=n,this.pending=null},update(t){const e=this.program;if(!e)return;const n=t-e.start;this.t=e.a+e.delta*c(n/e.duration),l.tick&&l.tick(this.t,1-this.t)},done(){const n=this.program;this.t=n.b,l.tick&&l.tick(this.t,1-this.t),t.fire(`${n.b?"intro":"outro"}.end`,{node:e}),n.b||n.invalidated?l.css&&x.deleteRule(e,n.name):(n.group.callbacks.push(()=>{n.callback(),l.css&&x.deleteRule(e,n.name)}),0==--n.group.remaining&&n.group.callbacks.forEach(a)),this.running=!!this.pending},abort(t){this.program&&(t&&l.tick&&l.tick(1,0),l.css&&x.deleteRule(e,this.program.name),this.program=this.pending=null,this.running=!1)},invalidate(){this.program&&(this.program.invalidated=!0)}}}n.r(e);let I={};function k(){I.current={remaining:0,callbacks:[]}}var x={running:!1,transitions:[],bound:null,stylesheet:null,activeRules:{},promise:null,add(t){this.transitions.push(t),this.running||(this.running=!0,requestAnimationFrame(this.bound||(this.bound=this.next.bind(this))))},addRule(t,e){if(!this.stylesheet){const t=d("style");document.head.appendChild(t),x.stylesheet=t.sheet}this.activeRules[e]||(this.activeRules[e]=!0,this.stylesheet.insertRule(`@keyframes ${e} ${t}`,this.stylesheet.cssRules.length))},next(){this.running=!1;const t=window.performance.now();let e=this.transitions.length;for(;e--;){const n=this.transitions[e];n.program&&t>=n.program.end&&n.done(),n.pending&&t>=n.pending.start&&n.start(n.pending),n.running?(n.update(t),this.running=!0):n.pending||this.transitions.splice(e,1)}if(this.running)requestAnimationFrame(this.bound);else if(this.stylesheet){let t=this.stylesheet.cssRules.length;for(;t--;)this.stylesheet.deleteRule(t);this.activeRules={}}},deleteRule(t,e){t.style.animation=t.style.animation.split(", ").filter(t=>t&&-1===t.indexOf(e)).join(", ")},wait:()=>(x.promise||(x.promise=Promise.resolve(),x.promise.then(()=>{x.promise=null})),x.promise)};function $(){return Object.create(null)}function M(t){this.destroy=o,this.fire("destroy"),this.set=o,this._fragment.d(!1!==t),this._fragment=null,this._state={}}function P(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function R(t,e){return t!=t?e==e:t!==e}function B(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var o=0;o<n.length;o+=1){var s=n[o];if(!s.__calling)try{s.__calling=!0,s.call(this,e)}finally{s.__calling=!1}}}function T(t){t._lock=!0,z(t._beforecreate),z(t._oncreate),z(t._aftercreate),t._lock=!1}function A(){return this._state}function j(t,e){t._handlers=$(),t._slots=$(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}function O(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}}function F(t){this._set(s({},t)),this.root._lock||T(this.root)}function E(t){var e=this._state,n={},o=!1;for(var r in t=s(this._staged,t),this._staged={},t)this._differs(t[r],e[r])&&(n[r]=o=!0);o&&(this._state=s(s({},e),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:e}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:e})))}function S(t){s(this._staged,t)}function z(t){for(;t&&t.length;)t.shift()()}function U(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)}function L(){this.store._remove(this)}var W={destroy:M,get:A,fire:B,on:O,set:F,_recompute:o,_set:E,_stage:S,_mount:U,_differs:P};function q(t,e){this._handlers={},this._dependents=[],this._computed=$(),this._sortedComputedProperties=[],this._state=s({},t),this._differs=e&&e.immutable?R:P}function H(t){var e=t-1;return e*e*e+1}s(q.prototype,{_add(t,e){this._dependents.push({component:t,props:e})},_init(t){const e={};for(let n=0;n<t.length;n+=1){const o=t[n];e["$"+o]=this._state[o]}return e},_remove(t){let e=this._dependents.length;for(;e--;)if(this._dependents[e].component===t)return void this._dependents.splice(e,1)},_set(t,e){const n=this._state;this._state=s(s({},n),t);for(let t=0;t<this._sortedComputedProperties.length;t+=1)this._sortedComputedProperties[t].update(this._state,e);this.fire("state",{changed:e,previous:n,current:this._state}),this._dependents.filter(t=>{const n={};let o=!1;for(let s=0;s<t.props.length;s+=1){const r=t.props[s];r in e&&(n["$"+r]=this._state[r],o=!0)}if(o)return t.component._stage(n),!0}).forEach(t=>{t.component.set({})}),this.fire("update",{changed:e,previous:n,current:this._state})},_sortComputedProperties(){const t=this._computed,e=this._sortedComputedProperties=[],n=$();let o;function s(r){const i=t[r];i&&(i.deps.forEach(t=>{if(t===o)throw new Error(`Cyclical dependency detected between ${t} <-> ${r}`);s(t)}),n[r]||(n[r]=!0,e.push(i)))}for(const t in this._computed)s(o=t)},compute(t,e,n){let o;const r={deps:e,update:(s,r,i)=>{const a=e.map(t=>(t in r&&(i=!0),s[t]));if(i){const e=n.apply(null,a);this._differs(e,o)&&(o=e,r[t]=!0,s[t]=o)}}};this._computed[t]=r,this._sortComputedProperties();const i=s({},this._state),a={};r.update(i,a,!0),this._set(i,a)},fire:B,get:A,on:O,set(t){const e=this._state,n=this._changed={};let o=!1;for(const s in t){if(this._computed[s])throw new Error(`'${s}' is a read-only property`);this._differs(t[s],e[s])&&(n[s]=o=!0)}o&&this._set(t,n)}});var J=function(t,e){var n=e.delay;void 0===n&&(n=0);var o=e.duration;void 0===o&&(o=400);var s=+getComputedStyle(t).opacity;return{delay:n,duration:o,css:function(t){return"opacity: "+t*s}}};var K=function(t,e){var n=e.delay;void 0===n&&(n=0);var o=e.duration;void 0===o&&(o=400);var s=e.easing;void 0===s&&(s=H);var r=getComputedStyle(t),i=+r.opacity,a=parseFloat(r.height),c=parseFloat(r.paddingTop),u=parseFloat(r.paddingBottom),l=parseFloat(r.marginTop),m=parseFloat(r.marginBottom),d=parseFloat(r.borderTopWidth),h=parseFloat(r.borderBottomWidth);return{delay:n,duration:o,easing:s,css:function(t){return"overflow: hidden;opacity: "+Math.min(20*t,1)*i+";height: "+t*a+"px;padding-top: "+t*c+"px;padding-bottom: "+t*u+"px;margin-top: "+t*l+"px;margin-bottom: "+t*m+"px;border-top-width: "+t*d+"px;border-bottom-width: "+t*h+"px;"}}};const V=t=>"number"==typeof t&&t.toFixed(2).toString().replace(".",",")+"€";var D={addNewItem(){const{newItemName:t,newItemCategory:e}=this.get(),{catalogue:{items:n}}=this.store.get(),o={name:t,category:e};this.store.set({catalogue:{items:[...n,o]}}),this.set({newItemName:null,newItemCategory:null})},deleteItem(t){const{newItemName:e,newItemCategory:n}=this.get(),{catalogue:{items:o}}=this.store.get();this.store.set({catalogue:{items:[...o.filter((e,n)=>n!=t)]}}),this.set({newItemName:null,newItemCategory:null})}};function G(t,e){var n,o,s,r,i,a,m,v,w,_=e.name,b=e.category,N=e.price&&Q(t,e);return{c(){n=d("div"),o=d("button"),s=h(_),r=h("\n                    "),N&&N.c(),i=h("\n                    "),a=d("span"),m=h(b),v=h("\n                "),(w=d("button")).textContent="×",a.className="badge badge-primary",o._svelte={component:t,ctx:e},p(o,"click",et),o.className="btn btn-lg category-btn list-group-item list-group-item-action d-flex justify-content-between align-items-center",w._svelte={component:t,ctx:e},p(w,"click",nt),f(w,"aria-hidden","true"),w.className="btn btn-sm btn-outline-danger btn-borderless",n.className="btn-group"},m(t,e){u(t,n,e),c(n,o),c(o,s),c(o,r),N&&N.m(o,null),c(o,i),c(o,a),c(a,m),c(n,v),c(n,w)},p(e,n){e.$catalogue&&_!==(_=n.name)&&y(s,_),n.price?N?N.p(e,n):((N=Q(t,n)).c(),N.m(o,i)):N&&(N.d(1),N=null),e.$catalogue&&b!==(b=n.category)&&y(m,b),o._svelte.ctx=n,w._svelte.ctx=n},d(t){t&&l(n),N&&N.d(),g(o,"click",et),g(w,"click",nt)}}}function Q(t,e){var n,o,s=V(e.price);return{c(){n=d("span"),o=h(s)},m(t,e){u(t,n,e),c(n,o)},p(t,e){t.$catalogue&&s!==(s=V(e.price))&&y(o,s)},d(t){t&&l(n)}}}function X(t,e){var n,o,s=V(e.parseFloat(e.newItemPrice));return{c(){n=d("span"),o=h(s)},m(t,e){u(t,n,e),c(n,o)},p(t,e){(t.parseFloat||t.newItemPrice)&&s!==(s=V(e.parseFloat(e.newItemPrice)))&&y(o,s)},d(t){t&&l(n)}}}function Y(t,e){var n,o,s,r,i,a,m=e.newItemPrice&&X(0,e);return{c(){n=d("button"),o=h(e.newItemName),s=h("\n                "),m&&m.c(),r=h("\n                "),i=d("span"),a=h(e.newItemCategory),i.className="badge badge-primary",n.className="btn category-btn list-group-item-action d-flex justify-content-between align-items-center disabled",n.disabled=!0},m(t,e){u(t,n,e),c(n,o),c(n,s),m&&m.m(n,null),c(n,r),c(n,i),c(i,a)},p(t,e){t.newItemName&&y(o,e.newItemName),e.newItemPrice?m?m.p(t,e):((m=X(0,e)).c(),m.m(n,r)):m&&(m.d(1),m=null),t.newItemCategory&&y(a,e.newItemCategory)},d(t){t&&l(n),m&&m.d()}}}function Z(t,e){var n,o,s,r,i,a,m=!1,y=!1;function v(){m=!0,t.set({newItemPrice:n.value}),m=!1}function w(){y=!0,t.set({newItemCategory:s.value}),y=!1}function _(e){t.addNewItem()}return{c(){n=d("input"),o=h("\n            "),s=d("input"),r=h("\n            "),i=d("div"),(a=d("button")).textContent="add",p(n,"input",v),n.placeholder="price",f(n,"type","text"),p(s,"input",w),s.placeholder="category",f(s,"type","text"),p(a,"click",_),a.className="btn btn-success",a.type="button",i.className="input-group-append"},m(t,l){u(t,n,l),n.value=e.newItemPrice,u(t,o,l),u(t,s,l),s.value=e.newItemCategory,u(t,r,l),u(t,i,l),c(i,a)},p(t,e){!m&&t.newItemPrice&&(n.value=e.newItemPrice),!y&&t.newItemCategory&&(s.value=e.newItemCategory)},d(t){t&&l(n),g(n,"input",v),t&&(l(o),l(s)),g(s,"input",w),t&&(l(r),l(i)),g(a,"click",_)}}}function tt(t,e,n){const o=Object.create(t);return o.name=e[n].name,o.category=e[n].category,o.price=e[n].price,o.each_value=e,o.idx=n,o}function et(t){const{component:e,ctx:n}=this._svelte;e.fire("addItem",{name:n.name,category:n.category,price:n.price})}function nt(t){const{component:e,ctx:n}=this._svelte;e.deleteItem(n.idx)}function ot(t){j(this,t),this._state=s(s(s({parseFloat:parseFloat},this.store._init(["catalogue"])),{newItemName:"",newItemPrice:null,newItemCategory:null}),t.data),this.store._add(this,["catalogue"]),this._intro=!!t.intro,this._handlers.destroy=[L],this._fragment=function(t,e){var n,o,s,r,i,f,y,w,_,b,N,C,I,k,x=!1;function $(e){t.fire("close")}for(var M=e.$catalogue.items,P=[],R=0;R<M.length;R+=1)P[R]=G(t,tt(e,M,R));var B=e.newItemName&&Y(0,e);function T(){x=!0,t.set({newItemName:C.value}),x=!1}var A=e.newItemName&&Z(t,e);return{c(){n=d("div"),o=d("div"),s=d("h3"),r=h("Add Item\n            "),(i=d("button")).innerHTML='<span aria-hidden="true">×</span>',f=h("\n\n    "),y=d("div"),w=d("div");for(var t=0;t<P.length;t+=1)P[t].c();_=h("\n\n            "),B&&B.c(),b=h("\n\n        "),N=d("div"),C=d("input"),I=h("\n            "),A&&A.c(),p(i,"click",$),i.type="button",i.className="close",i.title="Close",s.className="card-title",o.className="card-header",w.className="list-group",v(w,"max-height","400px"),v(w,"overflow","scroll"),v(w,"padding-right","10px"),p(C,"input",T),C.value="",C.placeholder="name",N.className="input-group mb-3",y.className="card-body",n.className="card"},m(t,a){u(t,n,a),c(n,o),c(o,s),c(s,r),c(s,i),c(n,f),c(n,y),c(y,w);for(var l=0;l<P.length;l+=1)P[l].m(w,null);c(w,_),B&&B.m(w,null),c(y,b),c(y,N),c(N,C),C.value=e.newItemName,c(N,I),A&&A.m(N,null),k=!0},p(e,n){if(e.$catalogue){M=n.$catalogue.items;for(var o=0;o<M.length;o+=1){const s=tt(n,M,o);P[o]?P[o].p(e,s):(P[o]=G(t,s),P[o].c(),P[o].m(w,_))}for(;o<P.length;o+=1)P[o].d(1);P.length=M.length}n.newItemName?B?B.p(e,n):((B=Y(0,n)).c(),B.m(w,null)):B&&(B.d(1),B=null),!x&&e.newItemName&&(C.value=n.newItemName),n.newItemName?A?A.p(e,n):((A=Z(t,n)).c(),A.m(N,null)):A&&(A.d(1),A=null)},i(t,e){k||this.m(t,e)},o:a,d(t){t&&l(n),g(i,"click",$),m(P,t),B&&B.d(),g(C,"input",T),A&&A.d()}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor)),this._intro=!0}s(ot.prototype,W),s(ot.prototype,D),ot.prototype._differs=R;var st=ot;n(1);var rt={updateItem(t){const{items:e}=this.store.get(),{idx:n}=this.get();console.debug(`checkItem(${n})`);const o=[...e];o[n]={...o[n],...t},this.store.set({items:o})},hideAll(){this.set({showButton:!0,showMenu:!1,showRename:!1,showReprice:!1})},checkItem(){const{item:{done:t}}=this.get();this.updateItem({done:!t})},rename(t){console.debug(`rename(${t})`),this.updateItem({name:t}),this.hideAll()},reprice(t){const e=parseFloat(t);Number.isNaN(e)||(console.debug(`reprice(${e})`),this.updateItem({price:e}),this.hideAll())},deleteItem(){const{items:t}=this.store.get(),{idx:e}=this.get();console.debug(`deleteItem(${e})`);const n=[...t.filter((t,n)=>n!==e)];this.store.set({items:n}),this.hideAll()}};function it({current:{showMenu:t}}){}function at(t,e){var n;return{c(){n=h("change price")},m(t,e){u(t,n,e)},d(t){t&&l(n)}}}function ct(t,e){var n;return{c(){n=h("set price")},m(t,e){u(t,n,e)},d(t){t&&l(n)}}}function ut(t,e){var n,o,s,r,a,m,y,w,_=!1;function b(){_=!0,t.set({newName:o.value}),_=!1}function N(n){t.rename(e.newName)}return{c(){n=d("div"),o=d("input"),a=h("\n            "),(m=d("button")).textContent="↵",p(o,"input",b),o.className="",f(o,"type","text"),v(o,"width","80%"),o.placeholder=s=`"${e.item.name}"`,p(m,"click",N),m.className="btn btn-info svelte-p9z3cv",v(m,"width","20%"),n.className="input-group"},m(t,s){u(t,n,s),c(n,o),o.value=e.newName,c(n,a),c(n,m),w=!0},p(t,n){e=n,!_&&t.newName&&(o.value=e.newName),w&&!t.item||s===(s=`"${e.item.name}"`)||(o.placeholder=s)},i(e,s){w||(t.root._intro&&(r&&r.invalidate(),t.root._aftercreate.push(()=>{r||(r=C(t,o,J,{},!0)),r.run(1)}),y&&y.invalidate(),t.root._aftercreate.push(()=>{y||(y=C(t,n,J,{},!0)),y.run(1)})),this.m(e,s))},o(e){w&&(e=i(e,2),r||(r=C(t,o,J,{},!1)),r.run(0,()=>{e(),r=null}),y||(y=C(t,n,J,{},!1)),y.run(0,()=>{e(),y=null}),w=!1)},d(t){t&&l(n),g(o,"input",b),t&&r&&r.abort(),g(m,"click",N),t&&y&&y.abort()}}}function lt(t,e){var n;return{c(){n=h("change")},m(t,e){u(t,n,e)},d(t){t&&l(n)}}}function mt(t,e){var n;return{c(){n=h("set")},m(t,e){u(t,n,e)},d(t){t&&l(n)}}}function dt(t,e){var n,o,s,r,a,m,y,w,_=!1;function b(){_=!0,t.set({newPrice:o.value}),_=!1}function N(t){return t.item.price?lt:mt}var I=N(e),k=I(t,e);function x(n){t.reprice(e.newPrice)}return{c(){n=d("div"),o=d("input"),a=h("\n            "),m=d("button"),k.c(),p(o,"input",b),o.className="",f(o,"type","text"),v(o,"width","80%"),o.placeholder=s=e.item.name+" for "+V(e.item.price),p(m,"click",x),m.className="btn btn-warning svelte-p9z3cv",v(m,"width","20%"),n.className="input-group"},m(t,s){u(t,n,s),c(n,o),o.value=e.newPrice,c(n,a),c(n,m),k.m(m,null),w=!0},p(n,r){e=r,!_&&n.newPrice&&(o.value=e.newPrice),w&&!n.item||s===(s=e.item.name+" for "+V(e.item.price))||(o.placeholder=s),I!==(I=N(e))&&(k.d(1),(k=I(t,e)).c(),k.m(m,null))},i(e,s){w||(t.root._intro&&(r&&r.invalidate(),t.root._aftercreate.push(()=>{r||(r=C(t,o,J,{},!0)),r.run(1)}),y&&y.invalidate(),t.root._aftercreate.push(()=>{y||(y=C(t,n,J,{},!0)),y.run(1)})),this.m(e,s))},o(e){w&&(e=i(e,2),r||(r=C(t,o,J,{},!1)),r.run(0,()=>{e(),r=null}),y||(y=C(t,n,J,{},!1)),y.run(0,()=>{e(),y=null}),w=!1)},d(t){t&&l(n),g(o,"input",b),t&&r&&r.abort(),k.d(),g(m,"click",x),t&&y&&y.abort()}}}function ht(t,e){var n,o,s,r=V(e.item.price);return{c(){n=h("("),o=h(r),s=h(")")},m(t,e){u(t,n,e),u(t,o,e),u(t,s,e)},p(t,e){t.item&&r!==(r=V(e.item.price))&&y(o,r)},d(t){t&&(l(n),l(o),l(s))}}}function pt(t,e){var n,o,s,r,i,a,m,v=e.item.name,w=e.item.price&&ht(0,e);function _(e){t.checkItem()}return{c(){n=d("button"),o=d("input"),r=h("\n            "),i=h(v),a=h(" "),w&&w.c(),f(o,"type","checkbox"),o.checked=s=e.item.done,o.className="svelte-p9z3cv",p(n,"click",_),n.className="btn btn-lg btn-block btn-outline-success list-group-item-action d-flex align-items-center svelte-p9z3cv",n.disabled=m=!e.showButton},m(t,e){u(t,n,e),c(n,o),c(n,r),c(n,i),c(n,a),w&&w.m(n,null)},p(t,e){t.item&&s!==(s=e.item.done)&&(o.checked=s),t.item&&v!==(v=e.item.name)&&y(i,v),e.item.price?w?w.p(t,e):((w=ht(0,e)).c(),w.m(n,null)):w&&(w.d(1),w=null),t.showButton&&m!==(m=!e.showButton)&&(n.disabled=m)},d(t){t&&l(n),w&&w.d(),g(n,"click",_)}}}function gt(t){j(this,t),this._state=s({newName:null,newPrice:null,showButton:!0,showMenu:!1,showRename:!1,showReprice:!1},t.data),this._intro=!!t.intro,this._handlers.state=[it],it.call(this,{changed:r({},this._state),current:this._state}),this._fragment=function(t,e){var n,o,s,r,a,m,y,v,_,b,N,C,I,x,$,M,P,R,B;function T(n){t.set({showMenu:!e.showMenu})}function A(n){t.set({showRename:!e.showRename,showReprice:!1,showButton:e.showRename,showMenu:!1})}function j(t){return t.item.price?at:ct}var O=j(e),F=O(t,e);function E(n){t.set({showRename:!1,showReprice:!e.showReprice,showButton:e.showReprice,showMenu:!1})}function S(e){t.deleteItem()}var z=e.showRename&&ut(t,e),U=e.showReprice&&dt(t,e),L=e.showButton&&pt(t,e);return{c(){n=d("div"),o=d("div"),s=d("button"),r=h("\n\n\n        "),a=d("div"),(m=d("button")).textContent="save",y=h("\n\n            "),(v=d("button")).textContent="rename",_=h("\n\n            "),b=d("button"),F.c(),N=h("\n\n            "),C=d("div"),I=h("\n            "),(x=d("button")).textContent="delete",$=h("\n\n    "),M=d("div"),z&&z.c(),P=h("\n\n        "),U&&U.c(),R=h("\n\n        "),L&&L.c(),p(s,"click",T),s.className="btn btn-outline-dark dropdown-toggle",s.type="button",s.dataset.toggle="dropdown",f(s,"aria-haspopup","true"),f(s,"aria-expanded","false"),m.className="dropdown-item",p(v,"click",A),v.className="dropdown-item",p(b,"click",E),b.className="dropdown-item",f(C,"role","separator"),C.className="dropdown-divider",p(x,"click",S),x.className="dropdown-item",a.className="dropdown-menu",w(a,"show",e.showMenu),o.className="input-group-prepend",M.className="form-control bigbutton svelte-p9z3cv",n.className="input-group mb-1"},m(t,e){u(t,n,e),c(n,o),c(o,s),c(o,r),c(o,a),c(a,m),c(a,y),c(a,v),c(a,_),c(a,b),F.m(b,null),c(a,N),c(a,C),c(a,I),c(a,x),c(n,$),c(n,M),z&&z.i(M,null),c(M,P),U&&U.i(M,null),c(M,R),L&&L.m(M,null),B=!0},p(n,o){O!==(O=j(e=o))&&(F.d(1),(F=O(t,e)).c(),F.m(b,null)),n.showMenu&&w(a,"show",e.showMenu),e.showRename?(z?z.p(n,e):(z=ut(t,e))&&z.c(),z.i(M,P)):z&&(k(),z.o(function(){z.d(1),z=null})),e.showReprice?(U?U.p(n,e):(U=dt(t,e))&&U.c(),U.i(M,R)):U&&(k(),U.o(function(){U.d(1),U=null})),e.showButton?L?L.p(n,e):((L=pt(t,e)).c(),L.m(M,null)):L&&(L.d(1),L=null)},i(t,e){B||this.m(t,e)},o(t){B&&(t=i(t,2),z?z.o(t):t(),U?U.o(t):t(),B=!1)},d(t){t&&l(n),g(s,"click",T),g(v,"click",A),F.d(),g(b,"click",E),g(x,"click",S),z&&z.d(),U&&U.d(),L&&L.d()}}}(this,this._state),this.root._oncreate.push(()=>{(function(){}).call(this),this.fire("update",{changed:r({},this._state),current:this._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),T(this)),this._intro=!0}s(gt.prototype,W),s(gt.prototype,rt),gt.prototype._differs=R;var ft=gt;n(3);var yt={addCustomItem(){const{items:t}=this.store.get(),{customItemName:e,customItemPrice:n,category:o}=this.get();if(e){const s={name:e,price:Number.parseFloat(n),category:o};this.store.set({items:[...t,s]}),this.set({customItemName:null,customItemPrice:null,showAddPrice:!1,showCustomMenu:!1})}},sort(t){const{items:e}=this.store.get();console.debug({cat:t});const n=e.filter(({category:e})=>t===e).sort((t,e)=>t.done!==e.done),o=e.filter(({category:e})=>t!==e);this.store.set({items:[...n,...o]})},clear(t){const{items:e}=this.store.get();console.debug({cat:t});const n=e.filter(({category:e})=>t===e);n.forEach(t=>t.done=!1);const o=e.filter(({category:e})=>t!==e);this.store.set({items:[...n,...o]})}};function vt(t,e){var n,o,s,r,i=V(e.$sumByCategory[e.category]);return{c(){n=d("small"),o=h("( "),s=h(i),r=h(" )")},m(t,e){u(t,n,e),c(n,o),c(n,s),c(n,r)},p(t,e){(t.$sumByCategory||t.category)&&i!==(i=V(e.$sumByCategory[e.category]))&&y(s,i)},d(t){t&&l(n)}}}function wt(t,e){var n,o,s,r=e.$progress[e.category].done,i=e.$progress[e.category].all;return{c(){n=h(r),o=h(" / "),s=h(i)},m(t,e){u(t,n,e),u(t,o,e),u(t,s,e)},p(t,e){(t.$progress||t.category)&&r!==(r=e.$progress[e.category].done)&&y(n,r),(t.$progress||t.category)&&i!==(i=e.$progress[e.category].all)&&y(s,i)},d(t){t&&(l(n),l(o),l(s))}}}function _t(t,e){var n,o,s=e.category===e.item.category&&bt(t,e);return{c(){s&&s.c(),n=document.createComment("")},m(t,e){s&&s.m(t,e),u(t,n,e),o=!0},p(e,o){o.category===o.item.category?(s?s.p(e,o):(s=bt(t,o))&&s.c(),s.i(n.parentNode,n)):s&&(k(),s.o(function(){s.d(1),s=null}))},i(t,e){o||this.m(t,e)},o(t){o&&(s?s.o(t):t(),o=!1)},d(t){s&&s.d(t),t&&l(n)}}}function bt(t,e){var n,o={item:e.item,idx:e.idx},s=new ft({root:t.root,store:t.store,data:o});return{c(){s._fragment.c()},m(t,e){s._mount(t,e),n=!0},p(t,e){var n={};t.$items&&(n.item=e.item),s._set(n)},i(t,e){n||this.m(t,e)},o(t){n&&(s&&s._fragment.o(t),n=!1)},d(t){s.destroy(t)}}}function Nt(t,e){var n,o,s;function r(n){t.clear(e.category)}function i(n){t.sort(e.category)}return{c(){(n=d("button")).textContent="× clear",o=h("\n                "),(s=d("button")).textContent="☰ sort",p(n,"click",r),n.type="button",n.className="btn btn-danger",p(s,"click",i),s.type="button",s.className="btn btn-secondary"},m(t,e){u(t,n,e),u(t,o,e),u(t,s,e)},p(t,n){e=n},d(t){t&&l(n),g(n,"click",r),t&&(l(o),l(s)),g(s,"click",i)}}}function Ct(t,e,n){const o=Object.create(t);return o.item=e[n],o.each_value=e,o.idx=n,o}function It(t){j(this,t),this._state=s(s(this.store._init(["sumByCategory","progress","items"]),{showCustomMenu:!1,showAddPrice:!1,customItemName:null,customItemPrice:null}),t.data),this.store._add(this,["sumByCategory","progress","items"]),this._intro=!!t.intro,this._handlers.destroy=[L],this._fragment=function(t,e){var n,o,s,r,a,w,_,b,N,I,x,$,M,P,R,B,T,A,j,O,F,E,S,z,U,L,W,q,H,K,V,D,G,Q,X,Y,Z,tt=e.showCustomMenu?"-":"+",et=!1,nt=!1,ot=e.$sumByCategory[e.category]&&vt(0,e);function st(n){t.fire("close",{name:e.name})}for(var rt=e.$progress[e.category].done>0&&wt(0,e),it=e.$items,at=[],ct=0;ct<it.length;ct+=1)at[ct]=_t(t,Ct(e,it,ct));function ut(t,e,n){at[t]&&at[t].o(()=>{e&&(at[t].d(e),at[t]=null),n&&n()})}var lt=!e.showCustomMenu&&Nt(t,e);function mt(n){t.set({showCustomMenu:!e.showCustomMenu,showAddPrice:!1})}function dt(){et=!0,t.set({customItemName:L.value}),et=!1}function ht(n){t.set({showAddPrice:!e.showAddPrice})}function pt(){nt=!0,t.set({customItemPrice:K.value}),nt=!1}function gt(e){t.fire("showCatalogue")}function ft(e){t.addCustomItem()}return{c(){n=d("div"),o=d("div"),s=d("h4"),r=h(e.category),a=h("\n            "),ot&&ot.c(),w=h("\n            "),(_=d("button")).innerHTML='<span aria-hidden="true">×</span>',b=h("\n\n        "),N=d("div"),I=d("div"),rt&&rt.c(),$=h("\n\n    "),M=d("div"),P=d("div");for(var t=0;t<at.length;t+=1)at[t].c();R=h("\n\n    "),B=d("div"),T=d("div"),A=d("div"),lt&&lt.c(),j=h("\n            "),O=d("div"),F=d("div"),E=d("div"),S=d("button"),z=h(tt),U=h("\n\n                        "),L=d("input"),W=h("\n\n                        "),(q=d("button")).textContent="€",H=h("\n\n                    "),K=d("input"),V=h("\n\n\n                    "),(D=d("button")).textContent="add",G=h("\n\n                    "),(Q=d("button")).textContent="add",p(_,"click",st),_.type="button",_.className="close",_.title="Close",I.className="progress-bar",f(I,"role","progressbar"),v(I,"width",e.$progress[e.category].percent+"%"),f(I,"aria-valuenow",x=e.$progress[e.category].percent),f(I,"aria-valuemin","0"),f(I,"aria-valuemax","100"),N.className="progress",v(N,"height","30px"),o.className="card-header svelte-jkv55n",P.className="row mb-4",M.className="card-body svelte-jkv55n",A.className="col btn-group",p(S,"click",mt),S.type="button",S.className="btn btn-outline-secondary",p(L,"input",dt),f(L,"type","text"),L.className="form-control",f(L,"aria-label","item"),v(L,"display",e.showCustomMenu?"block":"none"),L.placeholder="new item",p(q,"click",ht),q.type="button",q.className="btn btn-outline-warning",v(q,"display",e.showCustomMenu&&!e.showAddPrice?"block":"none"),E.className="input-group-prepend",p(K,"input",pt),f(K,"type","text"),K.className="form-control",f(K,"aria-label","price"),v(K,"display",e.showCustomMenu&&e.showAddPrice?"block":"none"),K.placeholder="price",p(D,"click",gt),D.type="button",D.className="btn btn-success",v(D,"display",e.showCustomMenu?"none":"block"),p(Q,"click",ft),Q.type="button",Q.className="btn btn-primary",v(Q,"display",e.showCustomMenu?"block":"none"),F.className="input-group",O.className=X=e.showCustomMenu?"col-12":"col-4",T.className="row justify-content-end",B.className="card-footer svelte-jkv55n",n.className="card svelte-jkv55n"},m(t,i){u(t,n,i),c(n,o),c(o,s),c(s,r),c(s,a),ot&&ot.m(s,null),c(s,w),c(s,_),c(o,b),c(o,N),c(N,I),rt&&rt.m(I,null),c(n,$),c(n,M),c(M,P);for(var l=0;l<at.length;l+=1)at[l].i(P,null);c(n,R),c(n,B),c(B,T),c(T,A),lt&&lt.m(A,null),c(T,j),c(T,O),c(O,F),c(F,E),c(E,S),c(S,z),c(E,U),c(E,L),L.value=e.customItemName,c(E,W),c(E,q),c(F,H),c(F,K),K.value=e.customItemPrice,c(F,V),c(F,D),c(F,G),c(F,Q),Z=!0},p(n,o){if(e=o,Z&&!n.category||y(r,e.category),e.$sumByCategory[e.category]?ot?ot.p(n,e):((ot=vt(0,e)).c(),ot.m(s,w)):ot&&(ot.d(1),ot=null),e.$progress[e.category].done>0?rt?rt.p(n,e):((rt=wt(0,e)).c(),rt.m(I,null)):rt&&(rt.d(1),rt=null),(!Z||n.$progress||n.category)&&v(I,"width",e.$progress[e.category].percent+"%"),Z&&!n.$progress&&!n.category||x===(x=e.$progress[e.category].percent)||f(I,"aria-valuenow",x),n.category||n.$items){it=e.$items;for(var i=0;i<it.length;i+=1){const o=Ct(e,it,i);at[i]?at[i].p(n,o):(at[i]=_t(t,o),at[i].c()),at[i].i(P,null)}for(k();i<at.length;i+=1)ut(i,1)}e.showCustomMenu?lt&&(lt.d(1),lt=null):lt?lt.p(n,e):((lt=Nt(t,e)).c(),lt.m(A,null)),Z&&!n.showCustomMenu||tt===(tt=e.showCustomMenu?"-":"+")||y(z,tt),!et&&n.customItemName&&(L.value=e.customItemName),Z&&!n.showCustomMenu||v(L,"display",e.showCustomMenu?"block":"none"),(!Z||n.showCustomMenu||n.showAddPrice)&&v(q,"display",e.showCustomMenu&&!e.showAddPrice?"block":"none"),!nt&&n.customItemPrice&&(K.value=e.customItemPrice),(!Z||n.showCustomMenu||n.showAddPrice)&&v(K,"display",e.showCustomMenu&&e.showAddPrice?"block":"none"),Z&&!n.showCustomMenu||(v(D,"display",e.showCustomMenu?"none":"block"),v(Q,"display",e.showCustomMenu?"block":"none")),Z&&!n.showCustomMenu||X===(X=e.showCustomMenu?"col-12":"col-4")||(O.className=X)},i(e,o){Z||(t.root._intro&&(Y&&Y.invalidate(),t.root._aftercreate.push(()=>{Y||(Y=C(t,n,J,{},!0)),Y.run(1)})),this.m(e,o))},o(e){if(!Z)return;e=i(e,2),at=at.filter(Boolean);const o=i(e,at.length);for(let t=0;t<at.length;t+=1)ut(t,0,o);Y||(Y=C(t,n,J,{},!1)),Y.run(0,()=>{e(),Y=null}),Z=!1},d(t){t&&l(n),ot&&ot.d(),g(_,"click",st),rt&&rt.d(),m(at,t),lt&&lt.d(),g(S,"click",mt),g(L,"input",dt),g(q,"click",ht),g(K,"input",pt),g(D,"click",gt),g(Q,"click",ft),t&&Y&&Y.abort()}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),T(this)),this._intro=!0}s(It.prototype,W),s(It.prototype,yt),It.prototype._differs=R;var kt=It;n(5);var xt={addItem({name:t,category:e,price:n}){const{items:o}=this.store.get(),s={name:t,category:e,price:n,done:!1};this.store.set({items:[...o,s]}),this.closeCatalogue(1500)},showCatalogue(){clearTimeout(this.TIMEOUT),console.debug("showing catalogue"),this.set({showCatalogue:!0})},closeCatalogue(t){console.debug(`closing Catalogue in ${t}ms`),this.TIMEOUT&&clearTimeout(this.TIMEOUT),this.TIMEOUT=setTimeout(()=>{this.set({showCatalogue:!1})},t)}};function $t(t,e){var n,o,s,r=new st({root:t.root,store:t.store});return r.on("addItem",function(e){t.addItem(e)}),r.on("close",function(e){t.closeCatalogue(0)}),{c(){n=d("div"),r._fragment.c(),n.className="col-md-6"},m(t,e){u(t,n,e),r._mount(n,null),s=!0},i(e,r){s||(t.root._intro&&(o&&o.invalidate(),t.root._aftercreate.push(()=>{o||(o=C(t,n,K,{},!0)),o.run(1)})),this.m(e,r))},o(e){s&&(e=i(e,2),r&&r._fragment.o(e),o||(o=C(t,n,K,{},!1)),o.run(0,()=>{e(),o=null}),s=!1)},d(t){t&&l(n),r.destroy(),t&&o&&o.abort()}}}function Mt(t,e){var n,o,s=e.$items.filter(({category:t})=>t===e.category).length>0&&Pt(t,e);return{c(){n=d("div"),s&&s.c(),n.className="card-column"},m(t,e){u(t,n,e),s&&s.m(n,null),o=!0},p(e,o){o.$items.filter(({category:t})=>t===o.category).length>0?(s?s.p(e,o):(s=Pt(t,o))&&s.c(),s.i(n,null)):s&&(k(),s.o(function(){s.d(1),s=null}))},i(t,e){o||this.m(t,e)},o(t){o&&(s?s.o(t):t(),o=!1)},d(t){t&&l(n),s&&s.d()}}}function Pt(t,e){var n,o={category:e.category},s=new kt({root:t.root,store:t.store,data:o});return s.on("showCatalogue",function(e){t.showCatalogue()}),{c(){s._fragment.c()},m(t,e){s._mount(t,e),n=!0},p(t,e){var n={};t.$categories&&(n.category=e.category),s._set(n)},i(t,e){n||this.m(t,e)},o(t){n&&(s&&s._fragment.o(t),n=!1)},d(t){s.destroy(t)}}}function Rt(t,e,n){const o=Object.create(t);return o.category=e[n],o.each_value=e,o.category_index=n,o}function Bt(t){j(this,t),this._state=s(s(this.store._init(["items","categories"]),{showCatalogue:!1}),t.data),this.store._add(this,["items","categories"]),this._intro=!!t.intro,this._handlers.destroy=[L],this._fragment=function(t,e){for(var n,o,s,r,a,p,g=(e.showCatalogue||0===e.$items.length)&&$t(t),f=e.$categories,y=[],v=0;v<f.length;v+=1)y[v]=Mt(t,Rt(e,f,v));function w(t,e,n){y[t]&&y[t].o(()=>{e&&(y[t].d(e),y[t]=null),n&&n()})}return{c(){n=d("div"),o=d("div"),g&&g.c(),s=h("\n\n        "),r=d("div");for(var t=0;t<y.length;t+=1)y[t].c();r.className="col",o.className="row",n.className="container"},m(t,e){u(t,n,e),c(n,o),g&&g.i(o,null),c(o,s),c(o,r);for(var i=0;i<y.length;i+=1)y[i].i(r,null);p=!0},p(e,n){if(n.showCatalogue||0===n.$items.length?(g||(g=$t(t)).c(),g.i(o,s)):g&&(k(),g.o(function(){g.d(1),g=null})),e.$items||e.$categories){f=n.$categories;for(var i=0;i<f.length;i+=1){const o=Rt(n,f,i);y[i]?y[i].p(e,o):(y[i]=Mt(t,o),y[i].c()),y[i].i(r,null)}for(k();i<y.length;i+=1)w(i,1)}},i(e,n){p||(t.root._intro&&(a&&a.invalidate(),t.root._aftercreate.push(()=>{a||(a=C(t,r,K,{},!0)),a.run(1)})),this.m(e,n))},o(e){if(!p)return;e=i(e,3),g?g.o(e):e(),y=y.filter(Boolean);const n=i(e,y.length);for(let t=0;t<y.length;t+=1)w(t,0,n);a||(a=C(t,r,K,{},!1)),a.run(0,()=>{e(),a=null}),p=!1},d(t){t&&l(n),g&&g.d(),m(y,t),t&&a&&a.abort()}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),T(this)),this._intro=!0}s(Bt.prototype,W),s(Bt.prototype,xt),Bt.prototype._differs=R;var Tt=Bt;const At=new q({items:[],catalogue:{items:[{name:"Milch",category:"shopping",price:.85},{name:"Butter",category:"shopping",price:2.29},{name:"Mehl",category:"shopping",price:.6},{name:"Bier",category:"shopping",price:20},{name:"TÜV",category:"AUTO"},{name:"Waschen",category:"AUTO"},{name:"Saugen",category:"wohnung"},{name:"Küche",category:"wohnung"},{name:"Bad",category:"wohnung"}]}}),jt=JSON.parse(localStorage.getItem("zutun"));jt&&At.set(jt),At.on("state",({current:t})=>{const{catalogue:e,items:n}=t;localStorage.setItem("zutun",JSON.stringify({catalogue:e,items:n})),console.dir({storeState:t})}),At.compute("categories",["items"],t=>Array.from(new Set(t.map(({category:t})=>t))).sort()),At.compute("sumByCategory",["items"],t=>{const e={};return t.forEach(t=>{e[t.category]=e[t.category]||0,t.price&&(e[t.category]+=t.price)}),e}),At.compute("progress",["items"],t=>{const e={};return t.forEach(t=>{const n=e[t.category]||{open:0,done:0,all:0,percent:0};t.done?n.done+=1:n.open+=1,n.all+=1,n.percent=Math.floor(n.done/n.all*100),e[t.category]=n}),e});const Ot=new Tt({target:document.body,store:At});window.app=Ot;e.default=Ot}]);