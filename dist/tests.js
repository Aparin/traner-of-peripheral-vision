!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";n.d(t,"a",function(){return r});const r={name:null,addName:()=>{r.name=document.getElementById("name").value},getName:()=>r.name}},function(e,t,n){"use strict";var r=n(0);t.a=((e,t)=>{t>0?resultMessage.innerHTML=`<h3>Увы, ${r.a.getName()}!</h3>\n        К сожалению вы прошли тренировку с ошибками, попробуйте снова...`:resultMessage.innerText="",0===t&&(resultMessage.innerHTML=`<h3>Поздравляем, ${r.a.getName()}!</h3>\n            Вы прошли тренировку без ошибок.<br> Ваше время: ${e}`)})},,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1);const u=document.getElementById("resultMessage");describe("levelResult",()=>{Object(r.a)(null,1),it("Проверка на ошибки, уровень 1",()=>{assert(u.innerText,"К сожалению вы прошли тренировку с ошибками, попробуйте снова")}),setTimeout(()=>{Object(r.a)(null,0)},30),it("Проверка на отсутствие ошибок, уровень 1",()=>{assert(u.innerText,null)}),Object(r.a)("50 сек 195 мс",0),it("Проверка вывода сообщения об успехе",()=>{assert(u.innerText,"Поздравляем, . Вы прошли тренировку без ошибок. Ваше время: 50 сек 195 м")}),setTimeout(()=>{u.innerHTML=null},30)})}]);